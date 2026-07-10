-- ============================================================
-- E-commerce Schema for Canastas Navideñas (Supabase)
-- Prefix: ecomm_
-- ============================================================

-- Categories
CREATE TABLE IF NOT EXISTS ecomm_categories (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  meta_title TEXT,
  meta_description TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Products
CREATE TABLE IF NOT EXISTS ecomm_products (
  id INTEGER PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  category_id TEXT NOT NULL REFERENCES ecomm_categories(id) ON DELETE CASCADE,
  featured BOOLEAN DEFAULT FALSE,
  description TEXT,
  contents JSONB DEFAULT '[]'::jsonb,
  image_url TEXT,
  hover_image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_category ON ecomm_products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON ecomm_products(featured);
CREATE INDEX IF NOT EXISTS idx_products_slug ON ecomm_products(slug);

-- Clients
CREATE TABLE IF NOT EXISTS ecomm_clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog categories (derived from blog posts)
CREATE TABLE IF NOT EXISTS ecomm_blog_categories (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts
CREATE TABLE IF NOT EXISTS ecomm_blog_posts (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category_id TEXT REFERENCES ecomm_blog_categories(id) ON DELETE SET NULL,
  post_date DATE,
  read_time TEXT,
  schema_data JSONB,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON ecomm_blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON ecomm_blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_date ON ecomm_blog_posts(post_date DESC);

-- FAQs
CREATE TABLE IF NOT EXISTS ecomm_faqs (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_faqs_category ON ecomm_faqs(category);

-- Enable RLS (read-only for anon, full for authenticated)
ALTER TABLE ecomm_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE ecomm_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE ecomm_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE ecomm_blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE ecomm_blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE ecomm_faqs ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Public read categories" ON ecomm_categories FOR SELECT USING (true);
CREATE POLICY "Public read products" ON ecomm_products FOR SELECT USING (true);
CREATE POLICY "Public read clients" ON ecomm_clients FOR SELECT USING (true);
CREATE POLICY "Public read blog_categories" ON ecomm_blog_categories FOR SELECT USING (true);
CREATE POLICY "Public read blog_posts" ON ecomm_blog_posts FOR SELECT USING (true);
CREATE POLICY "Public read faqs" ON ecomm_faqs FOR SELECT USING (true);

-- Authenticated write policies
CREATE POLICY "Auth manage categories" ON ecomm_categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth manage products" ON ecomm_products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth manage clients" ON ecomm_clients FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth manage blog_categories" ON ecomm_blog_categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth manage blog_posts" ON ecomm_blog_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Auth manage faqs" ON ecomm_faqs FOR ALL USING (auth.role() = 'authenticated');

-- Storage bucket for e-commerce images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'ecomm-images',
  'ecomm-images',
  true,
  10485760,
  ARRAY['image/png', 'image/jpeg', 'image/webp', 'image/avif']
) ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public read ecomm images"
ON storage.objects FOR SELECT
USING (bucket_id = 'ecomm-images');

CREATE POLICY "Auth upload ecomm images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'ecomm-images' AND auth.role() = 'authenticated');

CREATE POLICY "Auth update ecomm images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'ecomm-images' AND auth.role() = 'authenticated');

CREATE POLICY "Auth delete ecomm images"
ON storage.objects FOR DELETE
USING (bucket_id = 'ecomm-images' AND auth.role() = 'authenticated');
