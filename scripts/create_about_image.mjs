import sharp from 'sharp';

async function createAboutShowcase() {
  const bgPath = 'public/destinations/fontainhas.jpg';
  const carPath = 'public/fleet/toyota-innova-hycross.jpg';

  // 1280x720 base from the AI-generated Fontainhas Panjim street
  const bg = await sharp(bgPath)
    .resize(1280, 720, { fit: 'cover' })
    .modulate({ brightness: 0.8, saturation: 1.15 })
    .toBuffer();

  // Create an inset picture-in-picture luxury car overlay in the bottom corner
  const carInset = await sharp(carPath)
    .resize(540, 304, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(`
          <svg width="540" height="304">
            <rect x="0" y="0" width="540" height="304" rx="20" ry="20" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="4"/>
          </svg>
        `),
        blend: 'over'
      }
    ])
    .toBuffer();

  // Elegant dark cinematic overlay gradient
  const overlaySvg = Buffer.from(`
    <svg width="1280" height="720">
      <defs>
        <linearGradient id="vignette" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#060709" stop-opacity="0.3"/>
          <stop offset="60%" stop-color="#060709" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#060709" stop-opacity="0.95"/>
        </linearGradient>
      </defs>
      <rect width="1280" height="720" fill="url(#vignette)"/>
    </svg>
  `);

  await sharp(bg)
    .composite([
      { input: overlaySvg, blend: 'over' }
    ])
    .jpeg({ quality: 92 })
    .toFile('public/about-showcase.jpg');

  console.log('Successfully created public/about-showcase.jpg');
}

createAboutShowcase();
