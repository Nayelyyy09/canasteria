-- ============================================================
-- Seed: Blog Categories
-- ============================================================

INSERT INTO ecomm_blog_categories (id, slug, label, sort_order) VALUES
('corporativo', 'corporativo', 'Corporativo', 1),
('tendencias', 'tendencias', 'Tendencias', 2),
('guias', 'guias', 'Guías', 3),
('gourmet', 'gourmet', 'Gourmet', 4),
('logistica', 'logistica', 'Logística', 5)
ON CONFLICT (id) DO NOTHING;
