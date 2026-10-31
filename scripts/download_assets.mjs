import fs from 'fs';
import path from 'path';

const fleetTitles = [
  { name: 'tempo-traveller.jpg', file: 'File:Force Traveller Luxury.jpg', fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Force_Traveller_Luxury.jpg' },
  { name: 'force-urbania.jpg', file: 'File:Urbania.jpg', fallbackUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Urbania.jpg' },
  { name: 'toyota-innova-hycross.jpg', file: 'File:2023 Toyota Kijang Innova Zenix 2.0 Q Hybrid Modellista (front), West Surabaya.jpg' },
  { name: 'toyota-innova-crysta.jpg', file: 'File:Toyota Innova Crysta 2.4 Z front right.jpg' },
  { name: 'maruti-ertiga.jpg', file: 'File:2022 Maruti Suzuki Ertiga LXi.jpg' },
  { name: 'kia-carens.jpg', file: 'File:2022 Kia Carens 1.4 Luxury Plus (India) front view 01.jpg' },
  { name: 'maruti-dzire.jpg', file: 'File:Suzuki Dzire 2024 ZXI+.jpg' }
];

async function getWikimediaUrl(fileTitle) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&titles=' + encodeURIComponent(fileTitle) + '&prop=imageinfo&iiprop=url&format=json';
  const res = await fetch(url, { headers: { 'User-Agent': 'InayaTravelWebsite/1.0 (info@inayatravel.com)' } });
  const data = await res.json();
  const pages = data.query?.pages;
  if (!pages) return null;
  const pageId = Object.keys(pages)[0];
  return pages[pageId]?.imageinfo?.[0]?.url || null;
}

async function downloadFile(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(arrayBuffer));
  console.log(`Saved: ${dest} (${arrayBuffer.byteLength} bytes)`);
}

async function main() {
  const fleetDir = path.resolve('public/fleet');
  fs.mkdirSync(fleetDir, { recursive: true });

  for (const item of fleetTitles) {
    try {
      let imgUrl = await getWikimediaUrl(item.file);
      if (!imgUrl && item.fallbackUrl) {
        imgUrl = item.fallbackUrl;
      }
      if (imgUrl) {
        console.log(`Downloading ${item.name} from ${imgUrl}...`);
        await downloadFile(imgUrl, path.join(fleetDir, item.name));
      } else {
        console.warn(`Could not find URL for ${item.name} (${item.file})`);
      }
    } catch (e) {
      console.error(`Error downloading ${item.name}:`, e.message);
    }
  }

  // Also download high quality curated Goa travel photography from Unsplash
  const destinationImages = [
    { name: 'public/hero-bg.jpg', url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=85' }, // Goa tropical road & beach twilight
    { name: 'public/destinations/fontainhas.jpg', url: 'https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?auto=format&fit=crop&w=1200&q=85' }, // Goa Latin quarter colorful architecture
    { name: 'public/destinations/palolem.jpg', url: 'https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1200&q=85' }, // Palolem beach paradise
    { name: 'public/destinations/dudhsagar.jpg', url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85' }, // Dramatic waterfall
    { name: 'public/destinations/old-goa.jpg', url: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85' }, // Historic Goa monument / church
    { name: 'public/destinations/north-goa.jpg', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85' }, // North Goa coastline & sunset
    { name: 'public/gallery/luxury-interior.jpg', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85' }, // Luxury leather car interior
    { name: 'public/gallery/airport-transfer.jpg', url: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=85' }, // Airport tarmac / luxury travel
    { name: 'public/gallery/chauffeur-drive.jpg', url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=85' }, // Driving luxury
    { name: 'public/gallery/goa-coast.jpg', url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85' } // Coastal highway
  ];

  for (const dest of destinationImages) {
    try {
      const fullPath = path.resolve(dest.name);
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      console.log(`Downloading ${dest.name}...`);
      await downloadFile(dest.url, fullPath);
    } catch (e) {
      console.error(`Error downloading ${dest.name}:`, e.message);
    }
  }

  console.log('All asset downloads complete.');
}

main();
