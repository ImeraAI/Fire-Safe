const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
function distance(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const t = dx || dy ? Math.max(0, Math.min(1, ((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy))) : 0;
  return Math.hypot(p[0]-a[0]-t*dx, p[1]-a[1]-t*dy);
}
function simplify(points, epsilon) {
  if (points.length < 3) return points;
  let max = 0, index = 0;
  for (let i=1;i<points.length-1;i++) { const d=distance(points[i],points[0],points.at(-1)); if(d>max){max=d;index=i;} }
  if(max<=epsilon) return [points[0],points.at(-1)];
  return [...simplify(points.slice(0,index+1),epsilon).slice(0,-1),...simplify(points.slice(index),epsilon)];
}
function trace(mask,w,h,epsilon,minArea) {
  const edges = new Map();
  const add=(x,y,xx,yy)=>{const k=y*(w+1)+x,v=yy*(w+1)+xx; if(!edges.has(k))edges.set(k,[]);edges.get(k).push(v);};
  const on=(x,y)=>x>=0&&y>=0&&x<w&&y<h&&mask[y*w+x];
  for(let y=0;y<h;y++)for(let x=0;x<w;x++)if(on(x,y)){
    if(!on(x,y-1))add(x,y,x+1,y);
    if(!on(x+1,y))add(x+1,y,x+1,y+1);
    if(!on(x,y+1))add(x+1,y+1,x,y+1);
    if(!on(x-1,y))add(x,y+1,x,y);
  }
  const paths=[];
  while(edges.size){
    const start=edges.keys().next().value,points=[];let key=start;
    do{points.push([key%(w+1),Math.floor(key/(w+1))]);const out=edges.get(key);if(!out)break;const next=out.pop();if(!out.length)edges.delete(key);key=next;}while(key!==start);
    if(points.length<4)continue;
    let area=0;for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length];area+=a[0]*b[1]-b[0]*a[1];}
    if(Math.abs(area/2)<minArea)continue;
    let far=1,best=0;for(let i=1;i<points.length;i++){const d=Math.hypot(points[i][0]-points[0][0],points[i][1]-points[0][1]);if(d>best){best=d;far=i;}}
    const clean=[...simplify(points.slice(0,far+1),epsilon).slice(0,-1),...simplify([...points.slice(far),points[0]],epsilon).slice(0,-1)];
    const fmt=p=>p.map(v=>Number(v.toFixed(2))).join(' ');
    const corners=clean.map((p,i)=>{
      const a=clean[(i+clean.length-1)%clean.length],b=clean[(i+1)%clean.length];
      const u=[p[0]-a[0],p[1]-a[1]],v=[b[0]-p[0],b[1]-p[1]];
      const cosine=(u[0]*v[0]+u[1]*v[1])/(Math.hypot(...u)*Math.hypot(...v));
      return cosine>.42?{p,before:[p[0]-.45*u[0],p[1]-.45*u[1]],after:[p[0]+.45*v[0],p[1]+.45*v[1]],curve:true}:{p,before:p,after:p,curve:false};
    });
    paths.push('M'+fmt(corners[0].before)+corners.map((c,i)=>(i?'L'+fmt(c.before):'')+(c.curve?'Q'+fmt(c.p)+' '+fmt(c.after):'')).join('')+'Z');
  }
  return paths.join('');
}
async function make(name,scale) {
  const input=path.join(root,'public/images',name+'.png');
  const meta=await sharp(input).metadata();
  const {data,info}=await sharp(input).resize(meta.width*scale,meta.height*scale).removeAlpha().raw().toBuffer({resolveWithObject:true});
  const {width:w,height:h,channels:c}=info;
  const masks=[new Uint8Array(w*h),new Uint8Array(w*h),new Uint8Array(w*h)];
  let minX=w,minY=h,maxX=0,maxY=0;
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const i=(y*w+x)*c,r=data[i],g=data[i+1],b=data[i+2];
    const green=g-r>18&&g-b>10&&g>45;
    let layer=-1;
    if(green)layer=name.startsWith('london')&&x<760*scale?1:2;
    else if(.2126*r+.7152*g+.0722*b<155)layer=0;
    if(layer>=0){masks[layer][y*w+x]=1;minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);}
  }
  const pad=8*scale,bounds=[minX-pad,minY-pad,maxX-minX+1+pad*2,maxY-minY+1+pad*2];
  const paths=masks.map(mask=>trace(mask,w,h,(scale>1?.18:.45)*scale,4*scale*scale));
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bounds.join(' ')}" width="${bounds[2]}" height="${bounds[3]}"><defs><linearGradient id="green" gradientUnits="userSpaceOnUse" x1="${650*scale}" y1="${240*scale}" x2="${220*scale}" y2="${690*scale}"><stop stop-color="#70ce24"/><stop offset=".45" stop-color="#009c66"/><stop offset="1" stop-color="#006448"/></linearGradient></defs><g fill-rule="evenodd"><path fill="#fff" d="${paths[0]}"/><path fill="url(#green)" d="${paths[1]}"/><path fill="#00956b" d="${paths[2]}"/></g></svg>`;
  const out=path.join(root,'public/images',name+'-dark.svg');await fs.writeFile(out,svg);
  console.log(path.basename(out),bounds[2],bounds[3],svg.length+' bytes');
}
// The small Mango source is rebuilt separately as clean SVG typography and
// line artwork; tracing that low-resolution wordmark would retain pixel noise.
module.exports = { trace };
if (require.main === module) (async()=>{await make('london-home-services-logo',1);})();
