const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const publicDir = path.join(__dirname, '..', 'public');

const images = [
  { input: 'caffto.png',       output: 'caffto.webp',       quality: 80 },
  { input: 'finan1.png',       output: 'finan1.webp',       quality: 80 },
  { input: 'sportsbaazi.png',  output: 'sportsbaazi.webp',  quality: 80 },
  { input: 'Delhi.jpg',        output: 'Delhi.webp',        quality: 80 },
  { input: 'sau.png',          output: 'sau.webp',          quality: 85 },
  { input: 'fin.png',          output: 'fin.webp',          quality: 80 },
  { input: 'fin2.jpeg',        output: 'fin2.webp',         quality: 80 },
  { input: 'info.png',         output: 'info.webp',         quality: 80 },
  { input: 'pw.png',           output: 'pw.webp',           quality: 80 },
];

async function convert() {
  for (const img of images) {
    const inputPath = path.join(publicDir, img.input);
    const outputPath = path.join(publicDir, img.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${img.input} — not found`);
      continue;
    }

    const before = fs.statSync(inputPath).size;
    await sharp(inputPath)
      .webp({ quality: img.quality, effort: 6 })
      .toFile(outputPath);
    const after = fs.statSync(outputPath).size;
    const saved = (((before - after) / before) * 100).toFixed(1);
    console.log(`✅  ${img.input} → ${img.output}  (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, saved ${saved}%)`);
  }
}

convert().catch(console.error);
