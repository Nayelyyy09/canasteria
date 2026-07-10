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

// Product images - unique source URLs mapped to output names
const PRODUCT_IMAGES = [
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-14.jpg", name: "corporativa-elite" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-5.jpg", name: "imperial" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-6.jpg", name: "mediterranea" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4.jpg", name: "petit-joie" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-6-10.jpg", name: "familiar-tradicion" },
  { url: "https://publiventa.pe/wp-content/uploads/2024/09/web-01.png", name: "arca-imperial" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-14.jpg", name: "hover-default" },
];

// Category images (same as product images per category)
const CATEGORY_IMAGES = [
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-3-3.jpg", name: "ejecutivas" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-6-10.jpg", name: "familiares" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-5.jpg", name: "exclusivas" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4.jpg", name: "cooperativas" },
  { url: "https://publiventa.pe/wp-content/uploads/2024/09/web-01.png", name: "cestas-gourmet" },
  { url: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-6.jpg", name: "regalos-navidenos" },
];

// Blog images - placeholder Unsplash images
const BLOG_IMAGES = [
  { url: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=500&fit=crop", name: "regalos-empleados" },
  { url: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f8?w=800&h=500&fit=crop", name: "canasta-corporativa" },
  { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop", name: "tendencias-2026" },
  { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=500&fit=crop", name: "canastas-vs-cajas" },
  { url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&h=500&fit=crop", name: "productos-gourmet" },
  { url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop", name: "guia-envios" },
];

function download(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
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

async function processGroup(label, images, subdir) {
  const dir = path.join(PUBLIC, subdir);
  fs.mkdirSync(dir, { recursive: true });
  console.log(`\n--- ${label} (${images.length} images) ---`);
  for (const img of images) {
    try {
      const buf = await download(img.url);
      await optimizeAndSave(buf, dir, img.name);
    } catch (err) {
      console.error(`  ✗ ${img.name}: ${err.message}`);
    }
  }
}

// Map product names to their source images
function getProductImages() {
  const result = [];
  const seen = new Set();
  
  for (const img of PRODUCT_IMAGES) {
    if (!seen.has(img.name)) {
      seen.add(img.name);
      result.push(img);
    }
  }

  // Add hover variants using hover-default
  const hoverSource = PRODUCT_IMAGES.find((i) => i.name === "hover-default");
  const productNames = [
    "ejecutiva-premium", "corporativa-clasica", "corporate-wine",
    "dulce-tentacion", "reunion-navidena", "penosenos-tesoros",
    "degustacion-extrema", "gran-reserva",
    "economica-dulce", "salud-bienestar", "mi-primera-navidad",
    "arca-tesoro-familiar", "arca-gourmet-corporativa", "arca-dulce-navidad",
    "regalo-ejecutivo", "regalo-valentin", "regalo-amigo-invisible", "regalo-jefe-especial",
  ];
  for (const name of productNames) {
    result.push({ url: hoverSource.url, name });
  }

  // Map category images to product names
  const catMap = {
    "corporativa-elite": "corporativa-elite",
    "ejecutiva-premium": "corporativa-elite",
    "corporativa-clasica": "corporativa-elite",
    "corporate-wine": "corporativa-elite",
    "familiar-tradicion": "familiar-tradicion",
    "dulce-tentacion": "familiar-tradicion",
    "reunion-navidena": "familiar-tradicion",
    "penosenos-tesoros": "familiar-tradicion",
    "imperial": "imperial",
    "mediterranea": "mediterranea",
    "degustacion-extrema": "imperial",
    "gran-reserva": "imperial",
    "petit-joie": "petit-joie",
    "economica-dulce": "petit-joie",
    "salud-bienestar": "petit-joie",
    "mi-primera-navidad": "petit-joie",
    "arca-imperial": "arca-imperial",
    "arca-tesoro-familiar": "arca-imperial",
    "arca-gourmet-corporativa": "arca-imperial",
    "arca-dulce-navidad": "arca-imperial",
    "regalo-ejecutivo": "imperial",
    "regalo-valentin": "imperial",
    "regalo-amigo-invisible": "imperial",
    "regalo-jefe-especial": "imperial",
  };

  const final = [];
  const finalSeen = new Set();
  for (const [outName, srcName] of Object.entries(catMap)) {
    if (!finalSeen.has(outName)) {
      finalSeen.add(outName);
      const src = PRODUCT_IMAGES.find((i) => i.name === srcName);
      if (src) final.push({ url: src.url, name: outName });
    }
  }
  // Also add hover-default
  if (!finalSeen.has("hover-default")) {
    final.push({ url: hoverSource.url, name: "hover-default" });
  }
  return final;
}

async function main() {
  console.log("🎄 Canasta Navideña - Image Optimization Pipeline\n");

  const productImgs = getProductImages();
  await processGroup("Product Images", productImgs, "products");
  await processGroup("Category Images", CATEGORY_IMAGES, "categories");
  await processGroup("Blog Images", BLOG_IMAGES, "blog");

  console.log("\n✅ All images processed!");
}

main().catch(console.error);
