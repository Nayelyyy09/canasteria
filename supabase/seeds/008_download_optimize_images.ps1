# ============================================================
# Download & Optimize Images for Supabase Storage
# Run this script from the project root
# ============================================================
# Requirements: curl, cwebp (WebP converter)
# Install cwebp: ch install WebP
# ============================================================

$ErrorActionPreference = "Stop"

$optimizedDir = "public\images\optimized"
$blogDir = "public\images\blog"
$tempDir = "supabase\.temp\images"

# Create directories
New-Item -ItemType Directory -Force -Path $optimizedDir | Out-Null
New-Item -ItemType Directory -Force -Path $blogDir | Out-Null
New-Item -ItemType Directory -Force -Path $tempDir | Out-Null

Write-Host "=== Downloading and Optimizing E-commerce Images ===" -ForegroundColor Cyan

# Product/Category images from Publiventa
$images = @{
    "ejecutivas"   = "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-3-3.jpg"
    "exclusivas"   = "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-5.jpg"
    "familiares"   = "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-6-10.jpg"
    "cooperativas" = "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4.jpg"
    "cestas-gourmet" = "https://publiventa.pe/wp-content/uploads/2024/09/web-01.png"
    "regalos-navidenos" = "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-6.jpg"
    "product-hover"= "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-14.jpg"
}

foreach ($name in $images.Keys) {
    $url = $images[$name]
    $tempFile = "$tempDir\$name.png"
    $outputWebP = "$optimizedDir\$name.webp"
    $outputAvif = "$optimizedDir\$name.avif"

    Write-Host "  Downloading: $name..." -ForegroundColor Yellow
    try {
        Invoke-WebRequest -Uri $url -OutFile $tempFile -UseBasicParsing
        $size = (Get-Item $tempFile).Length
        Write-Host "    Downloaded: $([math]::Round($size/1024))KB" -ForegroundColor Green
    } catch {
        Write-Host "    FAILED to download $name : $_" -ForegroundColor Red
        continue
    }

    # Convert to WebP (best compression for web)
    Write-Host "  Converting to WebP: $name..." -ForegroundColor Yellow
    try {
        cwebp -q 80 -m 6 $tempFile -o $outputWebP 2>$null
        $webpSize = (Get-Item $outputWebP).Length
        $savings = [math]::Round((1 - $webpSize/$size) * 100)
        Write-Host "    WebP: $([math]::Round($webpSize/1024))KB (-${savings}%)" -ForegroundColor Green
    } catch {
        Write-Host "    FAILED WebP conversion: $_" -ForegroundColor Red
    }

    # Keep optimized PNG as fallback
    $outputPng = "$optimizedDir\$name.png"
    Copy-Item $tempFile $outputPng -Force
    Write-Host "    PNG fallback saved" -ForegroundColor Gray
}

# Blog images - download from Unsplash placeholders
$blogImages = @(
    @{ name = "regalos-empleados"; url = "https://images.unsplash.com/photo-1549488344-cbb6c34cf1ac?w=800&h=450&fit=crop" },
    @{ name = "canasta-corporativa"; url = "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=450&fit=crop" },
    @{ name = "tendencias-2026"; url = "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=450&fit=crop" },
    @{ name = "canastas-vs-cajas"; url = "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&h=450&fit=crop" },
    @{ name = "productos-gourmet"; url = "https://images.unsplash.com/photo-1474979266404-7f28f3f48779?w=800&h=450&fit=crop" },
    @{ name = "guia-envios"; url = "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&h=450&fit=crop" }
)

Write-Host "`n=== Downloading Blog Images ===" -ForegroundColor Cyan

foreach ($img in $blogImages) {
    $tempFile = "$tempDir\$($img.name).jpg"
    $outputWebP = "$blogDir\$($img.name).webp"

    Write-Host "  Downloading: $($img.name)..." -ForegroundColor Yellow
    try {
        Invoke-WebRequest -Uri $img.url -OutFile $tempFile -UseBasicParsing
        $size = (Get-Item $tempFile).Length
        Write-Host "    Downloaded: $([math]::Round($size/1024))KB" -ForegroundColor Green
    } catch {
        Write-Host "    FAILED: $_" -ForegroundColor Red
        continue
    }

    # Convert to WebP
    Write-Host "  Converting to WebP: $($img.name)..." -ForegroundColor Yellow
    try {
        cwebp -q 80 -m 6 $tempFile -o $outputWebP 2>$null
        $webpSize = (Get-Item $outputWebP).Length
        $savings = [math]::Round((1 - $webpSize/$size) * 100)
        Write-Host "    WebP: $([math]::Round($webpSize/1024))KB (-${savings}%)" -ForegroundColor Green
    } catch {
        Write-Host "    FAILED: $_" -ForegroundColor Red
    }

    # Keep JPG fallback
    Copy-Item $tempFile "$blogDir\$($img.name).jpg" -Force
}

# Summary
Write-Host "`n=== Summary ===" -ForegroundColor Cyan
$optimizedFiles = Get-ChildItem $optimizedDir -File
$blogFiles = Get-ChildItem $blogDir -File
$totalOptimized = ($optimizedFiles | Measure-Object -Property Length -Sum).Sum
$totalBlog = ($blogFiles | Measure-Object -Property Length -Sum).Sum

Write-Host "  Optimized images: $($optimizedFiles.Count) files, $([math]::Round($totalOptimized/1024))KB total" -ForegroundColor Green
Write-Host "  Blog images: $($blogFiles.Count) files, $([math]::Round($totalBlog/1024))KB total" -ForegroundColor Green
Write-Host "  Total: $([math]::Round(($totalOptimized+$totalBlog)/1024))KB" -ForegroundColor Green

Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "  1. Run the SQL seeds: supabase db reset (or apply seeds manually)" -ForegroundColor White
Write-Host "  2. Upload optimized images to Supabase Storage bucket 'ecomm-images'" -ForegroundColor White
Write-Host "  3. Update frontend to read from Supabase instead of hardcoded data" -ForegroundColor White
