const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const { trace } = require('./vectorize-footer-logos.cjs');

async function main() {
  const directory = path.resolve(__dirname, '../public/images');
  const { data, info } = await sharp(path.join(directory, 'lfsg-footer-shield.png')).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const masks = Array.from({ length: 3 }, () => new Uint8Array(width * height));
  for (let i = 0; i < width * height; i++) {
    const [r, g, b] = data.subarray(i * channels, i * channels + 3);
    let layer = -1;
    if (r > 110 && r > g * 1.6 && r > b * 1.3) layer = 2;
    else if (g > 80 && g > r * 1.5 && g > b * 1.2) layer = 1;
    else if (r > 160 && g > 160 && b > 160) layer = 0;
    if (layer >= 0) masks[layer][i] = 1;
  }
  const colours = ['#fff', '#00c563', '#e4002b'];
  const paths = masks.map((mask, i) => `<path fill="${colours[i]}" d="${trace(mask, width, height, .75, 12)}"/>`).join('');
  await fs.writeFile(path.join(directory, 'lfsg-footer-shield.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" fill-rule="evenodd"><title>London Fire Safety Group</title>${paths}</svg>`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
