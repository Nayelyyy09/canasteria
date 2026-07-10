-- ============================================================
-- Seed: Products (26 items across 6 categories)
-- ============================================================

INSERT INTO ecomm_products (id, slug, name, price, category_id, featured, description, contents, image_url, hover_image_url, sort_order) VALUES

-- ==================== EJECUTIVAS ====================
(1, 'canasta-corporativa-elite', 'Canasta Corporativa Élite', 389.00, 'ejecutivas', true,
 'La selección más completa para impresionar a clientes VIP y colaboradores distinguidos. Champagne, jamón ibérico, quesos premium, chocolates artesanales y más, presentada en cestería de lujo con tarjeta personalizada.',
 '["Champagne Brut 750ml","Aceite de oliva extra virgen 500ml","Jamón Serrano loncheado 300g","Queso Parmesano 350g","Chocolates premium 300g","Frutos secos premium 400g","Conservas gourmet 2×220g","Panetón artesanal 750g"]'::jsonb,
 'https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-14.jpg', 'https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-14.jpg', 1),

(7, 'canasta-ejecutiva-premium', 'Canasta Ejecutiva Premium', 459.00, 'ejecutivas', false,
 'Nuestra canasta insignia para regalos corporativos de alto nivel. Incluye vino importado, foie gras, queso gruyère, mermeladas gourmet y una presentación exclusiva con grabado en madera.',
 '["Vino Bordeaux Importado 750ml","Foie gras 180g","Queso Gruyère 250g","Mermelada de trufa negra 120g","Aceite de oliva virgen extra 350ml","Chocolate belga 200g","Galletas artesanales 150g","Presentación en caja de madera grabada"]'::jsonb,
 '/images/optimized/corporativas.webp', '/images/optimized/product-hover.webp', 2),

(8, 'canasta-corporativa-clasica', 'Canasta Corporativa Clásica', 279.00, 'ejecutivas', false,
 'Elegancia y sofisticación para cada empresa. Una selección equilibrada de vinos, quesos, embutidos y dulces que deja huella en clientes y equipos de trabajo.',
 '["Vino Tinto Reserva 750ml","Queso Manchego curado 300g","Salchichón artesanal 200g","Chocolate con almendras 180g","Mermelada artesanal 220g","Panetón tradicional 500g","Galletas de chocolate 150g"]'::jsonb,
 '/images/optimized/corporativas.webp', '/images/optimized/product-hover.webp', 3),

(9, 'canasta-corporate-wine', 'Canasta Corporate Wine', 529.00, 'ejecutivas', false,
 'Para los amantes del vino en el ámbito empresarial. Una colección de tres vinos seleccionados por nuestro sommelier, acompañados de quesos, embutidos y una copa de cristal grabada.',
 '["Vino Tinto Gran Reserva 750ml","Vino Blanco Sauvignon 750ml","Vino Rosé Provence 750ml","Queso Brie francés 200g","Jamón Ibérico 200g","Aceitunas rellenas 250g","Copa de cristal grabada"]'::jsonb,
 '/images/optimized/corporativas.webp', '/images/optimized/product-hover.webp', 4),

-- ==================== FAMILIARES ====================
(10, 'canastas-textiles', 'Canastas textiles', 245.00, 'familiares', true,
 'Canastas tejidas en telas y fibras naturales, ideales para regalos corporativos, promociones y eventos. Diseños personalizados con acabados artesanales que combinan elegancia y funcionalidad.',
 '["Canasta tejida en tela premium","Forro interior a juego","Asas reforzadas","Opción de personalización con logo","Tamaños disponibles: S, M, L","Colores: natural, beige, verde oliva"]'::jsonb,
 'https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4.jpg', 'https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4.jpg', 5),

(11, 'canastas-de-plastico', 'CANASTAS DE PLÁSTICO', 195.00, 'familiares', true,
 'Canastas resistentes y versátiles fabricadas en plástico de alta calidad. Perfectas para almacenamiento, transporte y exhibición de productos. Fáciles de limpiar y disponibles en diversos colores y tamaños.',
 '["Canasta plástica resistente","Diseño con perforaciones ventiladas","Asas ergonómicas","Material: polipropileno reciclado","Tamaños disponibles: S, M, L, XL","Colores: blanco, negro, rojo, azul"]'::jsonb,
 'https://publiventa.pe/wp-content/uploads/2017/10/canasta10.jpg', 'https://publiventa.pe/wp-content/uploads/2017/10/canasta10.jpg', 6),

(12, 'canasta-reunion-navidena', 'Canasta Reunión Navideña', 319.00, 'familiares', false,
 'Pensada para reuniones familiares grandes. Incluye bebidas, snacks, dulces, quesos y embutidos suficientes para compartir en una velada navideña inolvidable.',
 '["Vino de mesa 750ml","Sidra espumosa 750ml","Queso Edam 250g","Salchichón extra 250g","Aceitunas marinadas 300g","Galletas surtidas 300g","Frutos secos mixtos 350g","Panetón de chocolate 500g"]'::jsonb,
 '/images/optimized/familiares.webp', '/images/optimized/product-hover.webp', 7),

(13, 'canasta-penosenos-tesoros', 'Canasta Pequeños Tesoros', 149.00, 'familiares', false,
 'Un detalle afectuoso para los más pequeños del hogar. Chocolates, galletas decoradas, dulces de colores y un osito de peluche en una canasta temática navideña.',
 '["Chocolate de leche 200g","Galletas decoradas navideñas 12 pzs","Dulces de gelatina surtidos 180g","Palomitas de maíz saborizadas 100g","Osito de peluche navideño","Envoltura temática con listón"]'::jsonb,
 '/images/optimized/familiares.webp', '/images/optimized/product-hover.webp', 8),

-- ==================== EXCLUSIVAS ====================
(2, 'canasta-imperial', 'Canasta Imperial', 289.00, 'exclusivas', true,
 'Nuestra pieza insignia. Una selección magistral de vino reserva, queso manchego curado, jamón ibérico, chocolates belgas, frutos secos tostados y mermeladas artesanales, presentada en cestería de mimbre con lazo de seda burdeos.',
 '["Vino Reserva Rioja 750ml","Queso Manchego Curado 400g","Jamón Ibérico loncheado 200g","Chocolates Belgas surtidos 250g","Frutos secos tostados 300g","Mermelada artesanal de higo 220g","Galletas de mantequilla 180g"]'::jsonb,
 '/images/optimized/premium.webp', '/images/optimized/product-hover.webp', 9),

(6, 'canasta-mediterranea', 'Canasta Mediterránea', 265.00, 'exclusivas', false,
 'Un viaje por los sabores del Mediterráneo. Prosciutto, queso Manchego, aceite de oliva premium, biscotti y Prosecco, presentados en una cesta de mimbre con acabados de lino.',
 '["Prosecco Italiano 750ml","Prosciutto loncheado 200g","Queso Manchego 300g","Aceite de oliva premium 250ml","Biscotti artesanales 200g","Higos secos 180g"]'::jsonb,
 '/images/optimized/premium.webp', '/images/optimized/product-hover.webp', 10),

(14, 'canasta-degustacion-extrema', 'Canasta Degustación Extrema', 649.00, 'exclusivas', true,
 'La experiencia navideña definitiva. Champán Dom Pérignon, foie gras, trufa negra, queso Parmigiano Reggiano y una selección de los mejores manjares del mundo, en presentación de cuero y madera.',
 '["Champagne Dom Pérignon 750ml","Foie gras de pato 250g","Trufa negra en aceite 80g","Parmigiano Reggiano 300g","Jamón ibérico bellota 250g","Caviar de salmón 120g","Chocolate artesanal 70% cacao 200g","Presentación premium de cuero y madera"]'::jsonb,
 '/images/optimized/premium.webp', '/images/optimized/product-hover.webp', 11),

(15, 'canasta-gran-reserva', 'Canasta Gran Reserva', 499.00, 'exclusivas', false,
 'Edición limitada con los mejores vinos de reserva y quesos envejecidos. Ideal para coleccionistas y paladares exigentes que buscan lo excepcional.',
 '["Vino Gran Reserva Rioja 750ml","Vino Reserva Ribera del Duero 750ml","Queso Manchego curado 24 meses 400g","Queso Cabrales 200g","Jamón ibérico de bellota 300g","Aceite de oliva Arbequina 250ml","Miel de romero 280g"]'::jsonb,
 '/images/optimized/premium.webp', '/images/optimized/product-hover.webp', 12),

-- ==================== COOPORATIVAS ====================
(5, 'canasta-petit-joie', 'Canasta Petit Joie', 129.00, 'cooperativas', false,
 'El detalle perfecto sin romper el presupuesto. Una selección íntima de mermelada artesanal, té premium, galletas finas y vino de postre, envuelta con delicadeza en un cesto compacto con lazo dorado.',
 '["Mermelada artesanal 220g","Té premium surtido 20 sobres","Galletas de almendra 150g","Vino de postre 375ml","Flores secas aromáticas"]'::jsonb,
 '/images/optimized/economicas.webp', '/images/optimized/product-hover.webp', 13),

(16, 'canasta-economica-dulce', 'Canasta Económica Dulce', 89.00, 'cooperativas', false,
 'Un regalo navideño accesible y encantador. Chocolates, galletas y dulces tradicionales en una presentación festiva perfecta para obsequiar sin gastar de más.',
 '["Chocolate de leche 150g","Galletas surtidas 200g","Turrón blando 150g","Mazapán 100g","Caramelo de caja 100g"]'::jsonb,
 '/images/optimized/economicas.webp', '/images/optimized/product-hover.webp', 14),

(17, 'canasta-salud-bienestar', 'Canasta Salud y Bienestar', 159.00, 'cooperativas', false,
 'Pensada para quienes cuidan su salud. Tés especiales, frutos secos, granola artesanal, miel orgánica y una botella de jugo natural en una canasta rústica.',
 '["Té orgánico surtido 15 sobres","Frutos secos naturales 250g","Granola artesanal 200g","Miel orgánica 300g","Jugo natural de uva 500ml","Barra de cereal 4 pzs"]'::jsonb,
 '/images/optimized/economicas.webp', '/images/optimized/product-hover.webp', 15),

(18, 'canasta-mi-primera-navidad', 'Canasta Mi Primera Navidad', 79.00, 'cooperativas', false,
 'Un detalle tierno para bebés en su primera Navidad. Peluche, ropa, dulces para mamá y una tarjeta con dedicatoria personalizada.',
 '["Peluche navideño de felpa","Babero bordado Mi 1ra Navidad","Galletas para mamá 150g","Té para después del parto 10 sobres","Tarjeta con dedicatoria"]'::jsonb,
 '/images/optimized/economicas.webp', '/images/optimized/product-hover.webp', 16),

-- ==================== CESTAS GOURMET ====================
(19, 'arca-imperial-navidena', 'Arca Imperial Navideña', 549.00, 'cestas-gourmet', true,
 'Un arca llena de opulencia. Panetón gigante, vino importado, quesos envejecidos, embutidos gourmet, chocolates premium y una presentación de madera con candado dorado.',
 '["Panetón artesanal 1.5kg","Vino Bordeaux Importado 750ml","Queso Parmesano 400g","Jamón Serrano reserve 350g","Chocolates belgas 300g","Frutos secos premium 400g","Mermelada de higos 280g","Galletas artesanales 250g","Arca de madera con candado dorado"]'::jsonb,
 '/images/optimized/arcones.webp', '/images/optimized/product-hover.webp', 17),

(20, 'arca-tesoro-familiar', 'Arca del Tesoro Familiar', 389.00, 'cestas-gourmet', false,
 'Un tesoro de sabores para toda la familia. Panetón, chocolates, galletas, bebidas calientes, dulces tradicionales y sorpresas para cada miembro del hogar.',
 '["Panetón de chocolate 1kg","Sidra espumosa 750ml","Chocolate para caliente 400g","Galletas navideñas decoradas 20 pzs","Turrón de Alicante 250g","Mazapán artesanal 200g","Caramelos surtidos 200g","Muñeco de nieve de chocolate","Arca de cartón premium decorada"]'::jsonb,
 '/images/optimized/arcones.webp', '/images/optimized/product-hover.webp', 18),

(21, 'arca-gourmet-corporativa', 'Arca Gourmet Corporativa', 699.00, 'cestas-gourmet', true,
 'La arca definitiva para regalos empresariales. Productos de importación, presentación de lujo con grabado corporativo y tarjeta personalizada. Ideal para directivos y clientes especiales.',
 '["Champagne francés 750ml","Foie gras 200g","Queso Brie de Borgoña 250g","Jamón ibérico de bellota 300g","Caviar de salmón 100g","Aceite de oliva Arbequina 350ml","Chocolate artesanal 250g","Panetón italiano tradicional 750g","Caja de madera con grabado personalizado","Tarjeta corporativa con dedicatoria"]'::jsonb,
 '/images/optimized/arcones.webp', '/images/optimized/product-hover.webp', 19),

(22, 'arca-dulce-navidad', 'Arca Dulce Navidad', 299.00, 'cestas-gourmet', false,
 'Una arca repleta de dulces artesanales. Chocolates, macarons, turrón, mazapán y confitería fina en una presentación que enamora al primer vistazo.',
 '["Chocolate belga relleno 250g","Macarons franceses 18 pzs","Turrón de Jijona 250g","Mazapán artesanal 200g","Frutas confitadas 200g","Galletas decoradas 16 pzs","Arca de cartón lacada en rojo"]'::jsonb,
 '/images/optimized/arcones.webp', '/images/optimized/product-hover.webp', 20),

-- ==================== REGALOS NAVIDEÑOS ====================
(23, 'regalo-navidad-ejecutivo', 'Regalo Navidad Ejecutivo', 349.00, 'regalos-navidenos', true,
 'El regalo navideño perfecto para ejecutivos y profesionales. Vino de reserva, quesos premium, café de especialidad y una agenda de cuero artesanal.',
 '["Vino Reserva Privada 750ml","Queso Manchego curado 300g","Café de especialidad 250g","Chocolate negro 70% cacao 150g","Mermelada de naranja amarga 220g","Agenda de cuero artesanal"]'::jsonb,
 '/images/optimized/premium.webp', '/images/optimized/product-hover.webp', 21),

(24, 'regalo-san-valentin-invierno', 'Regalo San Valentín Invierno', 199.00, 'regalos-navidenos', false,
 'Un regalo romántico para quienes celebran el amor en Navidad. Rosas preservadas, chocolates trufa, vino dulce y una veladora aromática en caja de terciopelo.',
 '["Rosas preservadas en caja 6 pzs","Trufas de chocolate 200g","Vino dulce Moscatel 375ml","Veladora aromática de vainilla","Tarjeta con dedicatoria"]'::jsonb,
 '/images/optimized/premium.webp', '/images/optimized/product-hover.webp', 22),

(25, 'regalo-amigo-invisible', 'Regalo Amigo Invisible', 119.00, 'regalos-navidenos', false,
 'La solución perfecta para el amigo invisible. Un detalle original con té premium, chocolate artesanal, una taza cerámica navideña y una tarjeta personalizada.',
 '["Té premium surtido 12 sobres","Chocolate artesanal 100g","Taza cerámica navideña","Galletas de canela 100g","Tarjeta con dedicatoria"]'::jsonb,
 '/images/optimized/premium.webp', '/images/optimized/product-hover.webp', 23),

(26, 'regalo-jefe-especial', 'Regalo Jefe Especial', 429.00, 'regalos-navidenos', true,
 'Para agradecer al jefe que todo lo da. Champán, una selection de quesos importados, café premium de especialidad y un set de vasos de cristal.',
 '["Champagne Brut 750ml","Queso Gruyère suizo 200g","Queso Roquefort 150g","Café de origen colombiano 250g","Aceite de oliva trufado 200ml","Set de 2 vasos de cristal soplado"]'::jsonb,
 '/images/optimized/premium.webp', '/images/optimized/product-hover.webp', 24)

ON CONFLICT (id) DO NOTHING;
