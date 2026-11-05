const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const { trace } = require('./vectorize-footer-logos.cjs');

async function main() {
  const directory = path.resolve(__dirname, '../public/images');
  const { data, info } = await sharp(path.join(directory, 'london-fire-safety-navbar-compact.png'))
    .flatten({ background: '#fff' }).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const masks = Array.from({ length: 3 }, () => new Uint8Array(width * height));
  let left = width, top = height, right = 0, bottom = 0;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) {
    const index = (y * width + x) * channels;
    const [r, g, b] = data.subarray(index, index + 3);
    let layer = -1;
    if (r > 90 && r > g * 1.5 && r > b * 1.5) layer = 2;
    else if (g > 55 && g > r * 1.4 && g > b * 1.15) layer = 1;
    else if (.2126 * r + .7152 * g + .0722 * b < 130) layer = 0;
    if (layer < 0) continue;
    masks[layer][y * width + x] = 1;
    left = Math.min(left, x); top = Math.min(top, y);
    right = Math.max(right, x); bottom = Math.max(bottom, y);
  }
  const padding = 12;
  const bounds = [left - padding, top - padding, right - left + 1 + padding * 2, bottom - top + 1 + padding * 2];
  const colours = ['#061f2d', '#00895b', '#d51920'];
  const paths = masks.map((mask, i) => `<path fill="${colours[i]}" d="${trace(mask, width, height, .75, 9)}"/>`).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bounds.join(' ')}" width="${bounds[2]}" height="${bounds[3]}" fill-rule="evenodd"><title>London Fire Safety Group</title>${paths}</svg>`;
  await fs.writeFile(path.join(directory, 'london-fire-safety-navbar.svg'), svg);
  console.log(JSON.stringify({ width: bounds[2], height: bounds[3], bytes: svg.length }));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
