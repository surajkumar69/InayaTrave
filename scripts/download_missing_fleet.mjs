import fs from 'fs';
import path from 'path';

const missing = [
  { name: 'toyota-innova-hycross.jpg', file: 'File:2023 Toyota Kijang Innova Zenix 2.0 Q Hybrid Modellista (front), West Surabaya.jpg' },
  { name: 'toyota-innova-crysta.jpg', file: 'File:Toyota Innova Crysta.jpg' },
  { name: 'kia-carens.jpg', file: 'File:2022 Kia Carens 1.4 (India) front view 01.jpg' },
  { name: 'maruti-dzire.jpg', file: 'File:Maruti Suzuki Swift Dzire.jpg' }
];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function getWikimediaUrl(fileTitle) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&titles=' + encodeURIComponent(fileTitle) + '&prop=imageinfo&iiprop=url&iiurlwidth=1280&format=json';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'InayaTravelGoaWebsite/1.0 (contact@inayatravelgoa.com; travel-site-builder)'
    }
  });
  const data = await res.json();
  const pages = data.query?.pages;
  if (!pages) return null;
  const pageId = Object.keys(pages)[0];
  const info = pages[pageId]?.imageinfo?.[0];
  return info?.thumburl || info?.url || null;
}

async function downloadFile(url, dest) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'InayaTravelGoaWebsite/1.0 (contact@inayatravelgoa.com; travel-site-builder)'
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(arrayBuffer));
  console.log(`Saved: ${dest} (${arrayBuffer.byteLength} bytes)`);
}

async function run() {
  const fleetDir = path.resolve('public/fleet');
  for (const item of missing) {
    console.log(`Querying ${item.file}...`);
    try {
      await sleep(1500);
      const url = await getWikimediaUrl(item.file);
      if (url) {
        console.log(`Downloading ${item.name} from ${url}...`);
        await sleep(1500);
        await downloadFile(url, path.join(fleetDir, item.name));
      } else {
        console.warn(`No URL found for ${item.file}`);
      }
    } catch (e) {
      console.error(`Error for ${item.name}:`, e.message);
    }
  }
}

run();
