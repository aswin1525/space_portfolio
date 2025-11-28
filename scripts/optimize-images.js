import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../');
const publicDir = path.join(rootDir, 'public');
const assetsDir = path.join(rootDir, 'src/assets');

async function convertImages(directory) {
    if (!fs.existsSync(directory)) return;

    const files = fs.readdirSync(directory);

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await convertImages(filePath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const newFilePath = filePath.replace(ext, '.webp');
                if (!fs.existsSync(newFilePath)) {
                    console.log(`Converting ${filePath} to WebP...`);
                    try {
                        await sharp(filePath)
                            .webp({ quality: 80 })
                            .toFile(newFilePath);
                        console.log(`Converted: ${newFilePath}`);
                    } catch (error) {
                        console.error(`Error converting ${filePath}:`, error);
                    }
                } else {
                    console.log(`Skipping ${filePath}, WebP already exists.`);
                }
            }
        }
    }
}

(async () => {
    console.log('Starting image optimization...');
    await convertImages(publicDir);
    await convertImages(assetsDir);
    console.log('Image optimization complete.');
})();
