#!/bin/bash
# ============================================================
# Upload optimized images to Supabase Storage
# Run after 008_download_optimize_images.ps1
# Requires: supabase CLI authenticated
# ============================================================

set -e

BUCKET="ecomm-images"
OPTIMIZED_DIR="public/images/optimized"
BLOG_DIR="public/images/blog"

echo "=== Uploading E-commerce Images to Supabase Storage ==="

# Upload category/product images
for file in "$OPTIMIZED_DIR"/*.webp; do
  filename=$(basename "$file")
  echo "  Uploading: $filename"
  supabase storage cp "$file" "$BUCKET/$filename" --project-ref canastanavidena
done

# Upload blog images
echo ""
echo "=== Uploading Blog Images ==="
for file in "$BLOG_DIR"/*.webp; do
  filename=$(basename "$file")
  echo "  Uploading: $filename"
  supabase storage cp "$file" "$BUCKET/blog/$filename" --project-ref canastanavidena
done

echo ""
echo "=== Upload Complete ==="
echo "Images available at: https://<project-ref>.supabase.co/storage/v1/object/public/$BUCKET/"
