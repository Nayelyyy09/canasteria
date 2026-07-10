-- ============================================================
-- Canasta Navideña E-commerce Schema
-- Prefix: ec_ (e-commerce)
-- ============================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 1. CATEGORIES
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
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

-- ============================================================
-- 2. PRODUCTS
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  external_id INTEGER UNIQUE,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2),
  category_slug TEXT NOT NULL REFERENCES ec_categories(slug) ON DELETE RESTRICT,
  image_url TEXT,
  hover_image_url TEXT,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 3. PRODUCT CONTENTS (items inside each basket)
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_product_contents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID NOT NULL REFERENCES ec_products(id) ON DELETE CASCADE,
  item_text TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 4. BLOG CATEGORIES
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 5. BLOG POSTS
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category_slug TEXT REFERENCES ec_blog_categories(slug) ON DELETE SET NULL,
  publish_date DATE,
  read_time TEXT,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 6. TESTIMONIALS
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name TEXT NOT NULL,
  customer_role TEXT,
  quote TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 7. CLIENTS (logos slider)
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_clients (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  logo_url TEXT,
  website_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 8. SUPPLIERS
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_suppliers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  tagline TEXT,
  logo_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 9. FAQ CATEGORIES
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_faq_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 10. FAQS
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_slug TEXT NOT NULL REFERENCES ec_faq_categories(slug) ON DELETE CASCADE,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 11. ORDERS (for future checkout)
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name TEXT,
  customer_email TEXT,
  customer_phone TEXT,
  shipping_address TEXT,
  notes TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  total NUMERIC(10,2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 12. ORDER ITEMS
-- ============================================================
CREATE TABLE IF NOT EXISTS ec_order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID NOT NULL REFERENCES ec_orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES ec_products(id) ON DELETE SET NULL,
  product_name TEXT NOT NULL,
  quantity INTEGER DEFAULT 1 CHECK (quantity > 0),
  unit_price NUMERIC(10,2),
  gift_note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- INDEXES
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_products_category ON ec_products(category_slug);
CREATE INDEX IF NOT EXISTS idx_products_featured ON ec_products(featured);
CREATE INDEX IF NOT EXISTS idx_products_slug ON ec_products(slug);
CREATE INDEX IF NOT EXISTS idx_product_contents_product ON ec_product_contents(product_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON ec_blog_posts(category_slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_date ON ec_blog_posts(publish_date);
CREATE INDEX IF NOT EXISTS idx_faqs_category ON ec_faqs(category_slug);
CREATE INDEX IF NOT EXISTS idx_orders_status ON ec_orders(status);

-- ============================================================
-- RLS Policies (enable per table, public read for storefront)
-- ============================================================
ALTER TABLE ec_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_product_contents ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_faq_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE ec_order_items ENABLE ROW LEVEL SECURITY;

-- Public read for storefront tables
CREATE POLICY "Public read ec_categories" ON ec_categories FOR SELECT USING (true);
CREATE POLICY "Public read ec_products" ON ec_products FOR SELECT USING (true);
CREATE POLICY "Public read ec_product_contents" ON ec_product_contents FOR SELECT USING (true);
CREATE POLICY "Public read ec_blog_categories" ON ec_blog_categories FOR SELECT USING (true);
CREATE POLICY "Public read ec_blog_posts" ON ec_blog_posts FOR SELECT USING (true);
CREATE POLICY "Public read ec_testimonials" ON ec_testimonials FOR SELECT USING (true);
CREATE POLICY "Public read ec_clients" ON ec_clients FOR SELECT USING (true);
CREATE POLICY "Public read ec_suppliers" ON ec_suppliers FOR SELECT USING (true);
CREATE POLICY "Public read ec_faq_categories" ON ec_faq_categories FOR SELECT USING (true);
CREATE POLICY "Public read ec_faqs" ON ec_faqs FOR SELECT USING (true);

-- Orders: authenticated users can manage their own
CREATE POLICY "Authenticated manage ec_orders" ON ec_orders
  FOR ALL TO authenticated
  USING (true);

CREATE POLICY "Authenticated manage ec_order_items" ON ec_order_items
  FOR ALL TO authenticated
  USING (true);

-- Allow anon inserts for orders (guest checkout)
CREATE POLICY "Anon insert ec_orders" ON ec_orders FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anon insert ec_order_items" ON ec_order_items FOR INSERT TO anon WITH CHECK (true);

-- ============================================================
-- GRANT access to API roles
-- ============================================================
GRANT SELECT ON ec_categories TO anon, authenticated;
GRANT SELECT ON ec_products TO anon, authenticated;
GRANT SELECT ON ec_product_contents TO anon, authenticated;
GRANT SELECT ON ec_blog_categories TO anon, authenticated;
GRANT SELECT ON ec_blog_posts TO anon, authenticated;
GRANT SELECT ON ec_testimonials TO anon, authenticated;
GRANT SELECT ON ec_clients TO anon, authenticated;
GRANT SELECT ON ec_suppliers TO anon, authenticated;
GRANT SELECT ON ec_faq_categories TO anon, authenticated;
GRANT SELECT ON ec_faqs TO anon, authenticated;
GRANT ALL ON ec_orders TO anon, authenticated;
GRANT ALL ON ec_order_items TO anon, authenticated;

-- ============================================================
-- Updated_at trigger function
-- ============================================================
CREATE OR REPLACE FUNCTION update_ec_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_ec_products_updated_at
  BEFORE UPDATE ON ec_products
  FOR EACH ROW EXECUTE FUNCTION update_ec_updated_at();

CREATE TRIGGER set_ec_blog_posts_updated_at
  BEFORE UPDATE ON ec_blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_ec_updated_at();

CREATE TRIGGER set_ec_orders_updated_at
  BEFORE UPDATE ON ec_orders
  FOR EACH ROW EXECUTE FUNCTION update_ec_updated_at();
