-- ============================================================
-- Canasta Navideña E-commerce Seed Data
-- ============================================================

-- ============================================================
-- CATEGORIES
-- ============================================================
INSERT INTO ec_categories (slug, label, description, image_url, meta_title, meta_description, sort_order) VALUES
('ejecutivas', 'Canastas Corporativas', 'Canastas navideñas corporativas diseñadas para empresas que buscan impresionar a clientes, colaboradores y socios de negocios con regalos gourmet de alto nivel.', '/images/categories/corporativas.webp', 'Canastas Navideñas Corporativas | Regalos Empresariales de Navidad', 'Descubre nuestras canastas navideñas corporativas. Regalos empresariales premium con vinos, quesos, embutidos y chocolates para clientes y colaboradores.', 1),
('familiares', 'Canastas Familiares', 'Canastas navideñas para compartir en familia. Panetones, chocolates, dulces tradicionales y bebidas que alegran las reuniones navideñas más especiales.', '/images/categories/familiares.webp', 'Canastas Navideñas Familiares | Para Compartir en Navidad', 'Canastas navideñas familiares con panetón, chocolates, dulces y más. Ideales para reuniones familiares y celebrar la Navidad en grande.', 2),
('exclusivas', 'Canastas Premium', 'Selección magistral de productos gourmet de la más alta categoría. Vinos de reserva, quesos curados, embutidos importados y chocolate belga para paladares exigentes.', '/images/categories/premium.webp', 'Canastas Navideñas Premium | Lujo y Calidad Gourmet', 'Canastas navideñas premium con los mejores productos gourmet. Vinos reserva, quesos curados, jamón ibérico y chocolate belga de lujo.', 3),
('cooperativas', 'Canastas Económicas', 'Canastas navideñas accesibles sin sacrificar calidad. Detalles perfectos para regalar con amor y sin romper el presupuesto durante la temporada navideña.', '/images/categories/economicas.webp', 'Canastas Navideñas Económicas | Regalos Navideños Baratos', 'Canastas navideñas económicas a precios accesibles. Regalos de Navidad bonitos y originales sin gastar de más.', 4),
('cestas-gourmet', 'Arcones y Cestas Gourmet', 'Arcones navideños y cestas gourmet con la mayor variedad de productos. Presentaciones espectaculares en cajas de madera o cartón premium para regalar con impacto.', '/images/categories/arcones.webp', 'Arcones Navideños y Cestas Gourmet | Regalos de Navidad Grandes', 'Arcones navideños y cestas gourmet con variedad de productos premium. Presentaciones de lujo para regalar en Navidad con todo incluido.', 5),
('regalos-navidenos', 'Regalos de Navidad', 'Regalos navideños originales para toda ocasión. Desde el amigo invisible hasta regalos ejecutivos, tenemos el detalle perfecto para cada persona especial.', '/images/categories/regalos.webp', 'Regalos Navideños Originales | Ideas para Regalar en Navidad', 'Regalos navideños originales y personalizados. Ideas originales para amigo invisible, jefe, pareja y familia. Envío gratis en Navidad.', 6);

-- ============================================================
-- PRODUCTS
-- ============================================================
-- EJECUTIVAS
INSERT INTO ec_products (external_id, slug, name, description, price, category_slug, image_url, hover_image_url, featured) VALUES
(1, 'canasta-corporativa-elite', 'Canasta Corporativa Élite', 'La selección más completa para impresionar a clientes VIP y colaboradores distinguidos. Champagne, jamón ibérico, quesos premium, chocolates artesanales y más, presentada en cestería de lujo con tarjeta personalizada.', 389, 'ejecutivas', 'https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-14.jpg', 'https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-14.jpg', true),
(7, 'canasta-ejecutiva-premium', 'Canasta Ejecutiva Premium', 'Nuestra canasta insignia para regalos corporativos de alto nivel. Incluye vino importado, foie gras, queso gruyère, mermeladas gourmet y una presentación exclusiva con grabado en madera.', 459, 'ejecutivas', '/images/products/ejecutiva-premium.webp', '/images/products/ejecutiva-premium-hover.webp', false),
(8, 'canasta-corporativa-clasica', 'Canasta Corporativa Clásica', 'Elegancia y sofisticación para cada empresa. Una selección equilibrada de vinos, quesos, embutidos y dulces que deja huella en clientes y equipos de trabajo.', 279, 'ejecutivas', '/images/products/corporativa-clasica.webp', '/images/products/corporativa-clasica-hover.webp', false),
(9, 'canasta-corporate-wine', 'Canasta Corporate Wine', 'Para los amantes del vino en el ámbito empresarial. Una colección de tres vinos seleccionados por nuestro sommelier, acompañados de quesos, embutidos y una copa de cristal grabada.', 529, 'ejecutivas', '/images/products/corporate-wine.webp', '/images/products/corporate-wine-hover.webp', false),

-- FAMILIARES
(10, 'canastas-textiles', 'Canastas textiles', 'Canastas tejidas en telas y fibras naturales, ideales para regalos corporativos, promociones y eventos. Diseños personalizados con acabados artesanales que combinan elegancia y funcionalidad.', 245, 'familiares', 'https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4.jpg', 'https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4.jpg', true),
(11, 'canastas-de-plastico', 'CANASTAS DE PLÁSTICO', 'Canastas resistentes y versátiles fabricadas en plástico de alta calidad. Perfectas para almacenamiento, transporte y exhibición de productos. Fáciles de limpiar y disponibles en diversos colores y tamaños.', 195, 'familiares', 'https://publiventa.pe/wp-content/uploads/2017/10/canasta10.jpg', 'https://publiventa.pe/wp-content/uploads/2017/10/canasta10.jpg', true),
(12, 'canasta-reunion-navidena', 'Canasta Reunión Navideña', 'Pensada para reuniones familiares grandes. Incluye bebidas, snacks, dulces, quesos y embutidos suficientes para compartir en una velada navideña inolvidable.', 319, 'familiares', '/images/products/reunion-navidena.webp', '/images/products/reunion-navidena-hover.webp', false),
(13, 'canasta-penosenos-tesoros', 'Canasta Pequeños Tesoros', 'Un detalle afectuoso para los más pequeños del hogar. Chocolates, galletas decoradas, dulces de colores y un osito de peluche en una canasta temática navideña.', 149, 'familiares', '/images/products/penosenos-tesoros.webp', '/images/products/penosenos-tesoros-hover.webp', false),

-- EXCLUSIVAS
(2, 'canasta-imperial', 'Canasta Imperial', 'Nuestra pieza insignia. Una selección magistral de vino reserva, queso manchego curado, jamón ibérico, chocolates belgas, frutos secos tostados y mermeladas artesanales, presentada en cestería de mimbre con lazo de seda burdeos.', 289, 'exclusivas', '/images/products/imperial.webp', '/images/products/imperial-hover.webp', true),
(6, 'canasta-mediterranea', 'Canasta Mediterránea', 'Un viaje por los sabores del Mediterráneo. Prosciutto, queso Manchego, aceite de oliva premium, biscotti y Prosecco, presentados en una cesta de mimbre con acabados de lino.', 265, 'exclusivas', '/images/products/mediterranea.webp', '/images/products/mediterranea-hover.webp', false),
(14, 'canasta-degustacion-extrema', 'Canasta Degustación Extrema', 'La experiencia navideña definitiva. Champán Dom Pérignon, foie gras, trufa negra, queso Parmigiano Reggiano y una selección de los mejores manjares del mundo, en presentación de cuero y madera.', 649, 'exclusivas', '/images/products/degustacion-extrema.webp', '/images/products/degustacion-extrema-hover.webp', true),
(15, 'canasta-gran-reserva', 'Canasta Gran Reserva', 'Edición limitada con los mejores vinos de reserva y quesos envejecidos. Ideal para coleccionistas y paladares exigentes que buscan lo excepcional.', 499, 'exclusivas', '/images/products/gran-reserva.webp', '/images/products/gran-reserva-hover.webp', false),

-- COOPORATIVAS
(5, 'canasta-petit-joie', 'Canasta Petit Joie', 'El detalle perfecto sin romper el presupuesto. Una selección íntima de mermelada artesanal, té premium, galletas finas y vino de postre, envuelta con delicadeza en un cesto compacto con lazo dorado.', 129, 'cooperativas', '/images/products/petit-joie.webp', '/images/products/petit-joie-hover.webp', false),
(16, 'canasta-economica-dulce', 'Canasta Económica Dulce', 'Un regalo navideño accesible y encantador. Chocolates, galletas y dulces tradicionales en una presentación festiva perfecta para obsequiar sin gastar de más.', 89, 'cooperativas', '/images/products/economica-dulce.webp', '/images/products/economica-dulce-hover.webp', false),
(17, 'canasta-salud-bienestar', 'Canasta Salud y Bienestar', 'Pensada para quienes cuidan su salud. Tés especiales, frutos secos, granola artesanal, miel orgánica y una botella de jugo natural en una canasta rústica.', 159, 'cooperativas', '/images/products/salud-bienestar.webp', '/images/products/salud-bienestar-hover.webp', false),
(18, 'canasta-mi-primera-navidad', 'Canasta Mi Primera Navidad', 'Un detalle tierno para bebés en su primera Navidad. Peluche, ropa, dulces para mamá y una tarjeta con dedicatoria personalizada.', 79, 'cooperativas', '/images/products/mi-primera-navidad.webp', '/images/products/mi-primera-navidad-hover.webp', false),

-- CESTAS GOURMET
(19, 'arca-imperial-navidena', 'Arca Imperial Navideña', 'Un arca llena de opulencia. Panetón gigante, vino importado, quesos envejecidos, embutidos gourmet, chocolates premium y una presentación de madera con candado dorado.', 549, 'cestas-gourmet', '/images/products/arca-imperial.webp', '/images/products/arca-imperial-hover.webp', true),
(20, 'arca-tesoro-familiar', 'Arca del Tesoro Familiar', 'Un tesoro de sabores para toda la familia. Panetón, chocolates, galletas, bebidas calientes, dulces tradicionales y sorpresas para cada miembro del hogar.', 389, 'cestas-gourmet', '/images/products/arca-tesoro-familiar.webp', '/images/products/arca-tesoro-familiar-hover.webp', false),
(21, 'arca-gourmet-corporativa', 'Arca Gourmet Corporativa', 'La arca definitiva para regalos empresariales. Productos de importación, presentación de lujo con grabado corporativo y tarjeta personalizada. Ideal para directivos y clientes especiales.', 699, 'cestas-gourmet', '/images/products/arca-gourmet-corporativa.webp', '/images/products/arca-gourmet-corporativa-hover.webp', true),
(22, 'arca-dulce-navidad', 'Arca Dulce Navidad', 'Una arca repleta de dulces artesanales. Chocolates, macarons, turrón, mazapán y confitería fina en una presentación que enamora al primer vistazo.', 299, 'cestas-gourmet', '/images/products/arca-dulce-navidad.webp', '/images/products/arca-dulce-navidad-hover.webp', false),

-- REGALOS NAVIDEÑOS
(23, 'regalo-navidad-ejecutivo', 'Regalo Navidad Ejecutivo', 'El regalo navideño perfecto para ejecutivos y profesionales. Vino de reserva, quesos premium, café de especialidad y una agenda de cuero artesanal.', 349, 'regalos-navidenos', '/images/products/regalo-ejecutivo.webp', '/images/products/regalo-ejecutivo-hover.webp', true),
(24, 'regalo-san-valentin-invierno', 'Regalo San Valentín Invierno', 'Un regalo romántico para quienes celebran el amor en Navidad. Rosas preservadas, chocolates trufa, vino dulce y una veladora aromática en caja de terciopelo.', 199, 'regalos-navidenos', '/images/products/regalo-valentin.webp', '/images/products/regalo-valentin-hover.webp', false),
(25, 'regalo-amigo-invisible', 'Regalo Amigo Invisible', 'La solución perfecta para el amigo invisible. Un detalle original con té premium, chocolate artesanal, una taza cerámica navideña y una tarjeta personalizada.', 119, 'regalos-navidenos', '/images/products/regalo-amigo-invisible.webp', '/images/products/regalo-amigo-invisible-hover.webp', false),
(26, 'regalo-jefe-especial', 'Regalo Jefe Especial', 'Para agradecer al jefe que todo lo da. Champán, una selection de quesos importados, café premium de especialidad y un set de vasos de cristal.', 429, 'regalos-navidenos', '/images/products/regalo-jefe-especial.webp', '/images/products/regalo-jefe-especial-hover.webp', true);

-- ============================================================
-- PRODUCT CONTENTS
-- ============================================================
-- Canasta Corporativa Élite (id lookup by external_id=1)
DO $$
DECLARE
  prod_id UUID;
BEGIN
  SELECT id INTO prod_id FROM ec_products WHERE external_id = 1;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Champagne Brut 750ml', 1),
  (prod_id, 'Aceite de oliva extra virgen 500ml', 2),
  (prod_id, 'Jamón Serrano loncheado 300g', 3),
  (prod_id, 'Queso Parmesano 350g', 4),
  (prod_id, 'Chocolates premium 300g', 5),
  (prod_id, 'Frutos secos premium 400g', 6),
  (prod_id, 'Conservas gourmet 2×220g', 7),
  (prod_id, 'Panetón artesanal 750g', 8);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 7;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Vino Bordeaux Importado 750ml', 1),
  (prod_id, 'Foie gras 180g', 2),
  (prod_id, 'Queso Gruyère 250g', 3),
  (prod_id, 'Mermelada de trufa negra 120g', 4),
  (prod_id, 'Aceite de oliva virgen extra 350ml', 5),
  (prod_id, 'Chocolate belga 200g', 6),
  (prod_id, 'Galletas artesanales 150g', 7),
  (prod_id, 'Presentación en caja de madera grabada', 8);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 8;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Vino Tinto Reserva 750ml', 1),
  (prod_id, 'Queso Manchego curado 300g', 2),
  (prod_id, 'Salchichón artesanal 200g', 3),
  (prod_id, 'Chocolate con almendras 180g', 4),
  (prod_id, 'Mermelada artesanal 220g', 5),
  (prod_id, 'Panetón tradicional 500g', 6),
  (prod_id, 'Galletas de chocolate 150g', 7);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 9;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Vino Tinto Gran Reserva 750ml', 1),
  (prod_id, 'Vino Blanco Sauvignon 750ml', 2),
  (prod_id, 'Vino Rosé Provence 750ml', 3),
  (prod_id, 'Queso Brie francés 200g', 4),
  (prod_id, 'Jamón Ibérico 200g', 5),
  (prod_id, 'Aceitunas rellenas 250g', 6),
  (prod_id, 'Copa de cristal grabada', 7);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 10;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Panetón artesanal 1kg', 1),
  (prod_id, 'Chocolate caliente premium 300g', 2),
  (prod_id, 'Galletas de vainilla 250g', 3),
  (prod_id, 'Turrón de Jijona 250g', 4),
  (prod_id, 'Mazapán artesanal 200g', 5),
  (prod_id, 'Bebida de avellana 750ml', 6),
  (prod_id, 'Caramelos de caramelo 150g', 7);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 11;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Trufas de chocolate 200g', 1),
  (prod_id, 'Macarons artesanales 12 pzs', 2),
  (prod_id, 'Frutas confitadas surtidas 250g', 3),
  (prod_id, 'Miel de azahar 280g', 4),
  (prod_id, 'Galletas artesanales 200g', 5),
  (prod_id, 'Turrón artesanal 150g', 6);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 12;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Vino de mesa 750ml', 1),
  (prod_id, 'Sidra espumosa 750ml', 2),
  (prod_id, 'Queso Edam 250g', 3),
  (prod_id, 'Salchichón extra 250g', 4),
  (prod_id, 'Aceitunas marinadas 300g', 5),
  (prod_id, 'Galletas surtidas 300g', 6),
  (prod_id, 'Frutos secos mixtos 350g', 7),
  (prod_id, 'Panetón de chocolate 500g', 8);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 13;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Chocolate de leche 200g', 1),
  (prod_id, 'Galletas decoradas navideñas 12 pzs', 2),
  (prod_id, 'Dulces de gelatina surtidos 180g', 3),
  (prod_id, 'Palomitas de maíz saborizadas 100g', 4),
  (prod_id, 'Osito de peluche navideño', 5),
  (prod_id, 'Envoltura temática con listón', 6);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 2;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Vino Reserva Rioja 750ml', 1),
  (prod_id, 'Queso Manchego Curado 400g', 2),
  (prod_id, 'Jamón Ibérico loncheado 200g', 3),
  (prod_id, 'Chocolates Belgas surtidos 250g', 4),
  (prod_id, 'Frutos secos tostados 300g', 5),
  (prod_id, 'Mermelada artesanal de higo 220g', 6),
  (prod_id, 'Galletas de mantequilla 180g', 7);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 6;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Prosecco Italiano 750ml', 1),
  (prod_id, 'Prosciutto loncheado 200g', 2),
  (prod_id, 'Queso Manchego 300g', 3),
  (prod_id, 'Aceite de oliva premium 250ml', 4),
  (prod_id, 'Biscotti artesanales 200g', 5),
  (prod_id, 'Higos secos 180g', 6);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 14;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Champagne Dom Pérignon 750ml', 1),
  (prod_id, 'Foie gras de pato 250g', 2),
  (prod_id, 'Trufa negra en aceite 80g', 3),
  (prod_id, 'Parmigiano Reggiano 300g', 4),
  (prod_id, 'Jamón ibérico bellota 250g', 5),
  (prod_id, 'Caviar de salmón 120g', 6),
  (prod_id, 'Chocolate artesanal 70% cacao 200g', 7),
  (prod_id, 'Presentación premium de cuero y madera', 8);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 15;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Vino Gran Reserva Rioja 750ml', 1),
  (prod_id, 'Vino Reserva Ribera del Duero 750ml', 2),
  (prod_id, 'Queso Manchego curado 24 meses 400g', 3),
  (prod_id, 'Queso Cabrales 200g', 4),
  (prod_id, 'Jamón ibérico de bellota 300g', 5),
  (prod_id, 'Aceite de oliva Arbequina 250ml', 6),
  (prod_id, 'Miel de romero 280g', 7);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 5;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Mermelada artesanal 220g', 1),
  (prod_id, 'Té premium surtido 20 sobres', 2),
  (prod_id, 'Galletas de almendra 150g', 3),
  (prod_id, 'Vino de postre 375ml', 4),
  (prod_id, 'Flores secas aromáticas', 5);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 16;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Chocolate de leche 150g', 1),
  (prod_id, 'Galletas surtidas 200g', 2),
  (prod_id, 'Turrón blando 150g', 3),
  (prod_id, 'Mazapán 100g', 4),
  (prod_id, 'Caramelo de caja 100g', 5);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 17;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Té orgánico surtido 15 sobres', 1),
  (prod_id, 'Frutos secos naturales 250g', 2),
  (prod_id, 'Granola artesanal 200g', 3),
  (prod_id, 'Miel orgánica 300g', 4),
  (prod_id, 'Jugo natural de uva 500ml', 5),
  (prod_id, 'Barra de cereal 4 pzs', 6);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 18;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Peluche navideño de felpa', 1),
  (prod_id, 'Babero bordado ''Mi 1ra Navidad''', 2),
  (prod_id, 'Galletas para mamá 150g', 3),
  (prod_id, 'Té para después del parto 10 sobres', 4),
  (prod_id, 'Tarjeta con dedicatoria', 5);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 19;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Panetón artesanal 1.5kg', 1),
  (prod_id, 'Vino Bordeaux Importado 750ml', 2),
  (prod_id, 'Queso Parmesano 400g', 3),
  (prod_id, 'Jamón Serrano reserve 350g', 4),
  (prod_id, 'Chocolates belgas 300g', 5),
  (prod_id, 'Frutos secos premium 400g', 6),
  (prod_id, 'Mermelada de higos 280g', 7),
  (prod_id, 'Galletas artesanales 250g', 8),
  (prod_id, 'Arca de madera con candado dorado', 9);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 20;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Panetón de chocolate 1kg', 1),
  (prod_id, 'Sidra espumosa 750ml', 2),
  (prod_id, 'Chocolate para caliente 400g', 3),
  (prod_id, 'Galletas navideñas decoradas 20 pzs', 4),
  (prod_id, 'Turrón de Alicante 250g', 5),
  (prod_id, 'Mazapán artesanal 200g', 6),
  (prod_id, 'Caramelos surtidos 200g', 7),
  (prod_id, 'Muñeco de nieve de chocolate', 8),
  (prod_id, 'Arca de cartón premium decorada', 9);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 21;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Champagne francés 750ml', 1),
  (prod_id, 'Foie gras 200g', 2),
  (prod_id, 'Queso Brie de Borgoña 250g', 3),
  (prod_id, 'Jamón ibérico de bellota 300g', 4),
  (prod_id, 'Caviar de salmón 100g', 5),
  (prod_id, 'Aceite de oliva Arbequina 350ml', 6),
  (prod_id, 'Chocolate artesanal 250g', 7),
  (prod_id, 'Panetón italiano tradicional 750g', 8),
  (prod_id, 'Caja de madera con grabado personalizado', 9),
  (prod_id, 'Tarjeta corporativa con dedicatoria', 10);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 22;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Chocolate belga relleno 250g', 1),
  (prod_id, 'Macarons franceses 18 pzs', 2),
  (prod_id, 'Turrón de Jijona 250g', 3),
  (prod_id, 'Mazapán artesanal 200g', 4),
  (prod_id, 'Frutas confitadas 200g', 5),
  (prod_id, 'Galletas decoradas 16 pzs', 6),
  (prod_id, 'Arca de cartón lacada en rojo', 7);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 23;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Vino Reserva Privada 750ml', 1),
  (prod_id, 'Queso Manchego curado 300g', 2),
  (prod_id, 'Café de especialidad 250g', 3),
  (prod_id, 'Chocolate negro 70% cacao 150g', 4),
  (prod_id, 'Mermelada de naranja amarga 220g', 5),
  (prod_id, 'Agenda de cuero artesanal', 6);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 24;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Rosas preservadas en caja 6 pzs', 1),
  (prod_id, 'Trufas de chocolate 200g', 2),
  (prod_id, 'Vino dulce Moscatel 375ml', 3),
  (prod_id, 'Veladora aromática de vainilla', 4),
  (prod_id, 'Tarjeta con dedicatoria', 5);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 25;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Té premium surtido 12 sobres', 1),
  (prod_id, 'Chocolate artesanal 100g', 2),
  (prod_id, 'Taza cerámica navideña', 3),
  (prod_id, 'Galletas de canela 100g', 4),
  (prod_id, 'Tarjeta con dedicatoria', 5);

  SELECT id INTO prod_id FROM ec_products WHERE external_id = 26;
  INSERT INTO ec_product_contents (product_id, item_text, sort_order) VALUES
  (prod_id, 'Champagne Brut 750ml', 1),
  (prod_id, 'Queso Gruyère suizo 200g', 2),
  (prod_id, 'Queso Roquefort 150g', 3),
  (prod_id, 'Café de origen colombiano 250g', 4),
  (prod_id, 'Aceite de oliva trufado 200ml', 5),
  (prod_id, 'Set de 2 vasos de cristal soplado', 6);
END $$;

-- ============================================================
-- BLOG CATEGORIES
-- ============================================================
INSERT INTO ec_blog_categories (slug, label, sort_order) VALUES
('corporativo', 'Corporativo', 1),
('tendencias', 'Tendencias', 2),
('guias', 'Guías', 3),
('gourmet', 'Gourmet', 4),
('logistica', 'Logística', 5);

-- ============================================================
-- BLOG POSTS
-- ============================================================
INSERT INTO ec_blog_posts (slug, title, excerpt, image_url, category_slug, publish_date, read_time, meta_title, meta_description) VALUES
('ideas-regalos-empleados-navidad', 'Ideas de Regalos para Empleados en Navidad: Cómo Sorprender a Tu Equipo', 'Descubre las mejores ideas para regalar a tus empleados esta Navidad. Canastas navideñas corporativas, arcones gourmet y más opciones que fortalecerán el vínculo con tu equipo.', '/images/blog/regalos-empleados.webp', 'corporativo', '2026-06-15', '7 min', 'Ideas de Regalos para Empleados en Navidad 2026 | Canastas Navideñas', 'Descubre las mejores ideas para regalar a tus empleados esta Navidad. Canastas navideñas corporativas, arcones gourmet y más.'),
('como-elegir-canasta-corporativa-perfecta', 'Cómo Elegir la Canasta Corporativa Perfecta para tu Empresa', 'Guía completa para seleccionar la canasta navideña corporativa ideal. Factores clave, presupuesto, personalización y logística que toda empresa debe considerar.', '/images/blog/canasta-corporativa.webp', 'corporativo', '2026-06-10', '8 min', 'Cómo Elegir la Canasta Corporativa Perfecta | Guía 2026', 'Guía completa para seleccionar la canasta navideña corporativa ideal para tu empresa.'),
('tendencias-canastas-navidenas-2026', 'Tendencias en Canastas Navideñas 2026: Lo que Llevará la Próxima Temporada', 'Las tendencias más innovadoras en canastas navideñas para 2026. Desde opciones sustentables hasta experiencias personalizadas que revolucionarán los regalos.', '/images/blog/tendencias-2026.webp', 'tendencias', '2026-06-05', '6 min', 'Tendencias Canastas Navideñas 2026 | Lo Más Nuevo', 'Las tendencias más innovadoras en canastas navideñas para 2026.'),
('canastas-navidenas-vs-cajas-regalo', 'Canastas Navideñas vs Cajas de Regalo: ¿Cuál Elegir?', 'Comparativa completa entre canastas navideñas y cajas de regalo tradicionales. Ventajas, desventajas, costos y cuándo usar cada opción para máximo impacto.', '/images/blog/canastas-vs-cajas.webp', 'guias', '2026-05-28', '6 min', 'Canastas Navideñas vs Cajas de Regalo | Comparativa', 'Comparativa completa entre canastas navideñas y cajas de regalo.'),
('productos-gourmet-canastas-navidenas', 'Los Productos Gourmet que No Pueden Faltar en Tu Canasta Navideña', 'Conoce los productos gourmet imprescindibles para armar una canasta navideña perfecta. Vinos, quesos, chocolates y más especialidades que sorprenderán a todos.', '/images/blog/productos-gourmet.webp', 'gourmet', '2026-05-20', '7 min', 'Productos Gourmet para Canastas Navideñas | Guía', 'Los productos gourmet imprescindibles para tu canasta navideña.'),
('guia-envios-canastas-navidenas-todo-mexico', 'Guía Completa de Envíos de Canastas Navideñas a Todo Lima', 'Todo lo que necesitas saber sobre envíos de canastas navideñas: tiempos, costos, empaques y consejos para que tu regalo llegue perfecto a cualquier destino.', '/images/blog/guia-envios.webp', 'logistica', '2026-05-15', '8 min', 'Guía Envíos Canastas Navideñas Todo Lima | Logística', 'Todo lo que necesitas saber sobre envíos de canastas navideñas a todo Lima.');

-- ============================================================
-- TESTIMONIALS
-- ============================================================
INSERT INTO ec_testimonials (customer_name, customer_role, quote, rating, sort_order) VALUES
('María González', 'Directora de RRHH, Grupo Altamira', 'Llevamos tres años confiando en Canastas Navideñas para nuestros regalos corporativos. La presentación es impecable y los productos de una calidad excepcional. Nuestros colaboradores esperan con ansias su canasta navideña.', 5, 1),
('Carlos Mendoza', 'Cliente particular', 'Quería sorprender a mi familia en Navidad con algo especial. La Canasta Imperial superó todas mis expectativas. El detalle de la nota personalizada fue un toque que conmovió a todos.', 5, 2),
('Ana Lucía Restrepo', 'CEO, Inversiones del Pacífico', 'La atención al detalle es lo que distingue a Canastas Navideñas. Cada producto se siente cuidadosamente seleccionado. Es mucho más que una canasta, es una experiencia completa.', 5, 3);

-- ============================================================
-- CLIENTS (top logos for slider)
-- ============================================================
INSERT INTO ec_clients (name, logo_url, is_active, sort_order) VALUES
('BCP', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0005_BCP.jpg', true, 1),
('BBVA', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0006_BBVA.jpg', true, 2),
('SODIMAC', 'https://publiventa.pe/wp-content/uploads/2025/08/LOGO_SODIMAC-e1755279177758.png', true, 3),
('SENTAI', 'https://publiventa.pe/wp-content/uploads/2025/08/LOGO_SENTAI-e1755279214511.png', true, 4),
('VERDUM', 'https://publiventa.pe/wp-content/uploads/2025/08/LOGO_VERDUM-e1755279149636.png', true, 5),
('ENEL', 'https://publiventa.pe/wp-content/uploads/2025/08/LOGO_ENEL-1-e1755279317358.png', true, 6),
('SANTA ELENA', 'https://publiventa.pe/wp-content/uploads/2025/08/LOGO_SANTA-ELENA-e1755279237799.png', true, 7),
('PROMIGAS', 'https://publiventa.pe/wp-content/uploads/2025/08/LOGO_PROMIGAS-e1755279256498.png', true, 8),
('IBERO', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0000_ibero_libreria.jpg', true, 9),
('OSITRAN', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0016_ositran.jpg', true, 10),
('MINERA CHINALCO', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0019_Minerachinalco.jpg', true, 11),
('MUNI SAN ISIDRO', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0018_Muni_SanIsidro.jpg', true, 12),
('CRUZ DEL SUR', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0003_cruz_del_sur.jpg', true, 13),
('ETNA', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0001_etna.jpg', true, 14),
('DEFENDI MOTORS', 'https://publiventa.pe/wp-content/uploads/2018/08/targetas-giro_0002_defendi_motors.jpg', true, 15);

-- ============================================================
-- SUPPLIERS
-- ============================================================
INSERT INTO ec_suppliers (name, tagline, is_active, sort_order) VALUES
('Bodega Rioja', 'Vinos de reserva seleccionados', true, 1),
('Quesos Manchego D.O.', 'Quesos curados con denominación de origen', true, 2),
('Chocolatería Artesanal', 'Chocolate belga y mexicano fina', true, 3),
('Frutos Secos Premium', 'Selección internacional de nueces', true, 4),
('Mermeladas del Valle', 'Conservas artesanales sin conservadores', true, 5),
('Panetonería Italiana', 'Panetón tradicional italiano', true, 6);

-- ============================================================
-- FAQ CATEGORIES
-- ============================================================
INSERT INTO ec_faq_categories (slug, label, sort_order) VALUES
('sobre-nuestras-canastas', 'Sobre Nuestras Canastas', 1),
('pedidos-y-entregas', 'Pedidos y Entregas', 2),
('pagos-y-seguridad', 'Pagos y Seguridad', 3),
('canastas-corporativas', 'Canastas Corporativas', 4);

-- ============================================================
-- FAQS
-- ============================================================
INSERT INTO ec_faqs (category_slug, question, answer, sort_order) VALUES
-- Sobre Nuestras Canastas
('sobre-nuestras-canastas', '¿Qué incluyen las canastas navideñas?', 'Cada canasta incluye una selección curada de productos premium: vinos, chocolates artesanales, dulces típicos, quesos, embutidos, frutas secas y elementos decorativos navideños. El contenido varía según la categoría y personalización elegida.', 1),
('sobre-nuestras-canastas', '¿Las canastas se entregan armadas?', 'Sí, todas nuestras canastas llegan completamente armadas y decoradas con detalles navideños. Cada pieza está cuidadosamente acomodada y protegida para garantizar una presentación impecable al momento de la entrega.', 2),
('sobre-nuestras-canastas', '¿Puedo personalizar el contenido de una canasta?', 'Claro que sí. Ofrecemos opciones de personalización donde puedes elegir productos específicos, agregar mensajes personalizados, cambiar el tipo de canasta y seleccionar el estilo de decoración. Contáctanos para diseñar la canasta perfecta.', 3),
('sobre-nuestras-canastas', '¿Qué tamaños están disponibles?', 'Contamos con tres tamaños principales: Pequeña (para 2-3 personas), Mediana (para 4-6 personas) y Grande (para 8-10 personas). También ofrecemos canastas corporativas de tamaño especial para empresas.', 4),
('sobre-nuestras-canastas', '¿Cuánto tiempo antes debo hacer mi pedido?', 'Recomendamos realizar tu pedido con al menos 5 días de anticipación. Para pedidos personalizados o grandes volúmenes corporativos, te sugerimos hacerlo con 2-3 semanas de anticipación para garantizar disponibilidad.', 5),

-- Pedidos y Entregas
('pedidos-y-entregas', '¿Realizan envíos a toda la república?', 'Sí, realizamos envíos a todo el país. Contamos con servicio de mensajería especializada para garantizar que tu canasta llegue en perfectas condiciones. Los tiempos de entrega varían según la zona geográfica.', 1),
('pedidos-y-entregas', '¿Cuánto tarda en llegar mi pedido?', 'En la  Lima y zona metropolitana, la entrega es de 24 a 48 horas. Para otras ciudades principales, el tiempo es de 3 a 5 días hábiles. En localidades remotas puede tomar hasta 7 días hábiles.', 2),
('pedidos-y-entregas', '¿Puedo programar la fecha de entrega?', 'Sí, puedes programar la fecha y franja horaria de entrega. Esto es especialmente útil para regalos corporativos o si necesitas que llegue en una fecha específica antes de Navidad.', 3),
('pedidos-y-entregas', '¿Qué pasa si la canasta llega dañada?', 'Si tu canasta llega con algún daño, contáctanos dentro de las primeras 24 horas con fotos del estado en que llegó. Haremos un reenvío sin costo o un reembolso completo según tu preferencia.', 4),
('pedidos-y-entregas', '¿Puedo hacer un pedido para recoger en tienda?', 'Sí, ofrecemos la opción de recoger en nuestra tienda ubicada en . Al hacer tu pedido selecciona "Recoger en tienda" y te notificaremos cuando esté listo.', 5),

-- Pagos y Seguridad
('pagos-y-seguridad', '¿Qué métodos de pago aceptan?', 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencia bancaria, PayPal y pago en efectivo al momento de la entrega en la  Lima.', 1),
('pagos-y-seguridad', '¿Es seguro comprar en su página?', 'Absolutamente. Utilizamos encriptación SSL de 256 bits y procesamos los pagos a través de pasarelas de pago certificadas PCI DSS. Tus datos personales y financieros están completamente protegidos.', 2),
('pagos-y-seguridad', '¿Ofrecen meses sin intereses?', 'Sí, con tarjetas participantes puedes dividir tu compra en 3, 6 o 12 meses sin intereses en compras mayores a $2,000 USD. Consulta las condiciones al momento de tu compra.', 3),
('pagos-y-seguridad', '¿Puedo solicitar factura?', 'Sí, emitimos factura fiscal por cada compra. Solo necesitas proporcionar tus datos fiscales (RFC, razón social, régimen fiscal) al momento de realizar tu pedido o dentro de los 5 días posteriores a la compra.', 4),
('pagos-y-seguridad', '¿Cuál es su política de reembolsos?', 'Si no estás satisfecho con tu compra, ofrecemos reembolso completo dentro de los primeros 7 días después de la entrega, siempre que la canasta no haya sido abierta o consumida. El reembolso se procesa en un plazo de 5-10 días hábiles.', 5),

-- Canastas Corporativas
('canastas-corporativas', '¿Ofrecen descuentos para pedidos corporativos?', 'Sí, ofrecemos descuentos escalonados: 10% para pedidos de 10-25 canastas, 15% para 26-50 canastas y 20% para más de 50 canastas. Contáctanos para una cotización personalizada según tus necesidades.', 1),
('canastas-corporativas', '¿Pueden incluir logotipos de mi empresa?', 'Por supuesto. Ofrecemos personalización corporativa que incluye: tarjetas con tu logotipo, cintas personalizadas, empaques con imagen de marca y mensajes personalizados. Envíanos tu branding y lo integramos en cada detalle.', 2),
('canastas-corporativas', '¿Manejan pedidos de grandes volúmenes?', 'Sí, tenemos capacidad para procesar pedidos corporativos de cualquier volumen. Contamos con almacén propio y equipo dedicado para proyectos grandes. Para pedidos mayores a 100 canastas, te asignamos un asesor de cuentas dedicado.', 3);
