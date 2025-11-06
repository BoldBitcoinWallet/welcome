import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');

async function compressPNG(filePath) {
  try {
    const stats = await stat(filePath);
    const originalSize = stats.size;
    
    // Compress PNG with transparency support
    // quality: 80-90 is a good balance, compressionLevel: 9 is max compression
    await sharp(filePath)
      .png({
        quality: 85,
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true, // Use palette if possible (smaller files)
      })
      .toFile(filePath + '.tmp');
    
    // Replace original with compressed version
    const { rename } = await import('fs/promises');
    await rename(filePath + '.tmp', filePath);
    
    const newStats = await stat(filePath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${filePath.split('/').pop()}: ${(originalSize / 1024).toFixed(1)}KB → ${(newSize / 1024).toFixed(1)}KB (${savings}% saved)`);
  } catch (error) {
    console.error(`✗ Error compressing ${filePath}:`, error.message);
  }
}

async function findAndCompressPNGs(dir) {
  try {
    const files = await readdir(dir);
    
    for (const file of files) {
      const filePath = join(dir, file);
      const stats = await stat(filePath);
      
      if (stats.isDirectory()) {
        // Skip directories
        continue;
      }
      
      // Only compress files matching *-left.png pattern
      if (file.toLowerCase().endsWith('-left.png')) {
        await compressPNG(filePath);
      }
    }
  } catch (error) {
    console.error('Error reading directory:', error.message);
  }
}

console.log('🖼️  Compressing *-left.png files...\n');
findAndCompressPNGs(publicDir).then(() => {
  console.log('\n✅ PNG compression complete!');
});

