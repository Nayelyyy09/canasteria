import sharp from "sharp";
import https from "https";
import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public", "images");
const QUALITY = 80;
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 1200;

function download(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

async function optimizeAndSave(buffer, outDir, name) {
  const outPath = path.join(outDir, `${name}.webp`);
  try {
    await sharp(buffer)
      .resize(MAX_WIDTH, MAX_HEIGHT, { fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outPath);
    const stat = fs.statSync(outPath);
    console.log(`  ✓ ${name}.webp (${(stat.size / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`  ✗ ${name}: ${err.message}`);
  }
}

async function main() {
  // Fix the failed blog image
  console.log("--- Fixing failed blog image ---");
  const blogDir = path.join(PUBLIC, "blog");
  try {
    const buf = await download("https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&h=500&fit=crop");
    await optimizeAndSave(buf, blogDir, "canasta-corporativa");
  } catch (err) {
    console.error(`  ✗ canasta-corporativa: ${err.message}`);
  }

  // Generate hover images for products (slightly darker/brighter version)
  console.log("\n--- Generating hover variants ---");
  const productsDir = path.join(PUBLIC, "products");
  const productFiles = fs.readdirSync(productsDir).filter(f => f.endsWith(".webp") && !f.includes("hover"));
  
  for (const file of productFiles) {
    const baseName = path.basename(file, ".webp");
    const hoverName = `${baseName}-hover`;
    const hoverPath = path.join(productsDir, `${hoverName}.webp`);
    const srcPath = path.join(productsDir, file);
    
    if (fs.existsSync(hoverPath)) continue;
    
    try {
      await sharp(srcPath)
        .modulate({ brightness: 1.05, saturate: 1.1 })
        .webp({ quality: QUALITY - 5, effort: 6 })
        .toFile(hoverPath);
      const stat = fs.statSync(hoverPath);
      console.log(`  ✓ ${hoverName}.webp (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  ✗ ${hoverName}: ${err.message}`);
    }
  }

  console.log("\n✅ Done!");
}

main().catch(console.error);
