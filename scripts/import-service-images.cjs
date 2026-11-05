const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');

const images = {
  plans: ['Hard-hatted workers review plans by concrete slabs.png', 'Two workers in hard hats reviewing plans beside concrete slabs'],
  checklist: ['vitaly-gariev-9tA7YYd9XuA-unsplash.jpg', 'Gloved hand completing a checklist on a clipboard'],
  london: ['jaanus-jagomagi-Dymu1WiZVko-unsplash.jpg', 'London buildings and the Thames illuminated at dusk'],
  offices: ['william-kennedy-QM_wQQSxqH8-unsplash.jpg', 'Office buildings beside the River Thames in London'],
  building: ['doon-_muc-6vf3E6wuq4k-unsplash.jpg', 'Modern building facades beneath a blue sky'],
  valve: ['liana-s-7810YriGMrg-unsplash.jpg', 'Close-up of a pipe valve and handwheel'],
  door: ['maria-ziegler-1AmEImwtnFk-unsplash.jpg', 'Person checking a door handle and latch'],
  alarm: ['Technician installing a smoke alarm.png', 'Technician installing a ceiling-mounted smoke alarm'],
  training: ['British Firefighters in Live-Fire Training.png', 'Firefighters using a hose during live-fire training'],
  extinguishers: ['matt-c-jHqAIuAZPU0-unsplash.jpg', 'Fire extinguishers beside flames during a training exercise'],
  equipment: ['rose-galloway-green-o6asPZdUjUs-unsplash.jpg', 'Close-up of pipework and valves on safety equipment'],
  technician: ['Technician servicing an open control cabinet.png', 'Technician working inside an open electrical control cabinet'],
  meters: ['donggeun-lee-BpWvu_KLJxo-unsplash.jpg', 'Row of gas meters and external pipework'],
  gas: ['imattsmart-SYdhFwICWJU-unsplash.jpg', 'Gas meter with regulator and copper pipework'],
  surveyor: ['Surveying the Thames by Tower Bridge.png', 'Surveyor using a total station beside the Thames near Tower Bridge'],
  cabinet: ['fer-troulik-MJuBifMRSkg-unsplash.jpg', 'Gas installation cabinet with yellow pipework and a no-flames warning sign'],
  electrical: ['toolmash-expo-PkHf7BUWbtk-unsplash.jpg', 'Gloved hands testing an electrical panel with probes'],
  extinguisher: ['evan-marvell-tCTPisTLnJQ-unsplash.jpg', 'Red fire extinguisher against a teal wall'],
};

const assignments = {
  'fire-risk-assessment': ['plans', 'training'],
  'fire-door-inspection': ['door', 'checklist'],
  'fire-extinguisher-servicing': ['extinguisher', 'extinguishers'],
  'fire-alarm-installation-testing': ['technician', 'alarm'],
  'emergency-lighting': ['electrical', 'london'],
  'smoke-heat-alarms': ['alarm', 'checklist'],
  'fire-strategy-report': ['offices', 'plans'],
  'residential-eicr': ['electrical', 'technician'],
  'commercial-eicr': ['technician', 'offices'],
  'pat-testing': ['electrical', 'checklist'],
  'consumer-unit-replacement': ['technician', 'electrical'],
  'gas-safety-check': ['gas', 'meters'],
  'carbon-monoxide-alarms': ['cabinet', 'valve'],
  'asbestos-management-survey': ['plans', 'building'],
  'property-safety-management': ['surveyor', 'checklist'],
};

async function main() {
  const dimensionsPath = 'src/content/image-dimensions.json';
  const featuresPath = 'src/content/service-features.json';
  const dimensions = JSON.parse(fs.readFileSync(dimensionsPath, 'utf8'));
  const features = JSON.parse(fs.readFileSync(featuresPath, 'utf8'));
  for (const [key, [filename]] of Object.entries(images)) {
    const src = `/images/services-${key}.webp`;
    const info = await sharp(path.join('C:/Users/Administrator/Downloads', filename))
      .rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 85 })
      .toFile(path.join('public', src));
    dimensions[src] = { width: info.width, height: info.height };
  }
  for (const [slug, [hero, second]] of Object.entries(assignments)) {
    Object.assign(features[slug], {
      hero: `/images/services-${hero}.webp`, second: `/images/services-${second}.webp`,
      heroAlt: images[hero][1], secondAlt: images[second][1],
    });
  }
  fs.writeFileSync(dimensionsPath, JSON.stringify(dimensions, null, 2) + '\n');
  fs.writeFileSync(featuresPath, JSON.stringify(features, null, 2) + '\n');
  console.log(`Updated images for ${Object.keys(assignments).length} service pages.`);
}
main().catch(error => { console.error(error); process.exit(1); });
