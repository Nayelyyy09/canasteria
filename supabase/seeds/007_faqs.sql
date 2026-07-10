-- ============================================================
-- Seed: FAQs (4 categories, 18 questions)
-- ============================================================

INSERT INTO ecomm_faqs (category, question, answer, sort_order) VALUES

-- Sobre Nuestras Canastas
('Sobre Nuestras Canastas', '¿Qué incluyen las canastas navideñas?',
 'Cada canasta incluye una selección curada de productos premium: vinos, chocolates artesanales, dulces típicos, quesos, embutidos, frutas secos y elementos decorativos navideños. El contenido varía según la categoría y personalización elegida.', 1),

('Sobre Nuestras Canastas', '¿Las canastas se entregan armadas?',
 'Sí, todas nuestras canastas llegan completamente armadas y decoradas con detalles navideños. Cada pieza está cuidadosamente acomodada y protegida para garantizar una presentación impecable al momento de la entrega.', 2),

('Sobre Nuestras Canastas', '¿Puedo personalizar el contenido de una canasta?',
 'Claro que sí. Ofrecemos opciones de personalización donde puedes elegir productos específicos, agregar mensajes personalizados, cambiar el tipo de canasta y seleccionar el estilo de decoración. Contáctanos para diseñar la canasta perfecta.', 3),

('Sobre Nuestras Canastas', '¿Qué tamaños están disponibles?',
 'Contamos con tres tamaños principales: Pequeña (para 2-3 personas), Mediana (para 4-6 personas) y Grande (para 8-10 personas). También ofrecemos canastas corporativas de tamaño especial para empresas.', 4),

('Sobre Nuestras Canastas', '¿Cuánto tiempo antes debo hacer mi pedido?',
 'Recomendamos realizar tu pedido con al menos 5 días de anticipación. Para pedidos personalizados o grandes volúmenes corporativos, te sugerimos hacerlo con 2-3 semanas de anticipación para garantizar disponibilidad.', 5),

-- Pedidos y Entregas
('Pedidos y Entregas', '¿Realizan envíos a toda la república?',
 'Sí, realizamos envíos a todo el país. Contamos con servicio de mensajería especializada para garantizar que tu canasta llegue en perfectas condiciones. Los tiempos de entrega varían según la zona geográfica.', 6),

('Pedidos y Entregas', '¿Cuánto tarda en llegar mi pedido?',
 'En la  Lima y zona metropolitana, la entrega es de 24 a 48 horas. Para otras ciudades principales, el tiempo es de 3 a 5 días hábiles. En localidades remotas puede tomar hasta 7 días hábiles.', 7),

('Pedidos y Entregas', '¿Puedo programar la fecha de entrega?',
 'Sí, puedes programar la fecha y franja horaria de entrega. Esto es especialmente útil para regalos corporativos o si necesitas que llegue en una fecha específica antes de Navidad.', 8),

('Pedidos y Entregas', '¿Qué pasa si la canasta llega dañada?',
 'Si tu canasta llega con algún daño, contáctanos dentro de las primeras 24 horas con fotos del estado en que llegó. Haremos un reenvío sin costo o un reembolso completo según tu preferencia.', 9),

('Pedidos y Entregas', '¿Puedo hacer un pedido para recoger en tienda?',
 'Sí, ofrecemos la opción de recoger en nuestra tienda ubicada en Jr. Santo Tomás, Mz C Lt. 16-B, Asoc. Fundo Garagay Bajo, Los Olivos, Lima. Al hacer tu pedido selecciona "Recoger en tienda" y te notificaremos cuando esté listo.', 10),

-- Pagos y Seguridad
('Pagos y Seguridad', '¿Qué métodos de pago aceptan?',
 'Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencia bancaria, PayPal y pago en efectivo al momento de la entrega en Lima.', 11),

('Pagos y Seguridad', '¿Es seguro comprar en su página?',
 'Absolutamente. Utilizamos encriptación SSL de 256 bits y procesamos los pagos a través de pasarelas de pago certificadas PCI DSS. Tus datos personales y financieros están completamente protegidos.', 12),

('Pagos y Seguridad', '¿Ofrecen meses sin intereses?',
 'Sí, con tarjetas participantes puedes dividir tu compra en 3, 6 o 12 meses sin intereses en compras mayores a S/. 200. Consulta las condiciones al momento de tu compra.', 13),

('Pagos y Seguridad', '¿Puedo solicitar factura?',
 'Sí, emitimos factura electrónica por cada compra. Solo necesitas proporcionar tus datos fiscales (RUC, razón social, régimen fiscal) al momento de realizar tu pedido o dentro de los 5 días posteriores a la compra.', 14),

('Pagos y Seguridad', '¿Cuál es su política de reembolsos?',
 'Si no estás satisfecho con tu compra, ofrecemos reembolso completo dentro de los primeros 7 días después de la entrega, siempre que la canasta no haya sido abierta o consumida. El reembolso se procesa en un plazo de 5-10 días hábiles.', 15),

-- Canastas Corporativas
('Canastas Corporativas', '¿Ofrecen descuentos para pedidos corporativos?',
 'Sí, ofrecemos descuentos escalonados: 10% para pedidos de 10-25 canastas, 15% para 26-50 canastas y 20% para más de 50 canastas. Contáctanos para una cotización personalizada según tus necesidades.', 16),

('Canastas Corporativas', '¿Pueden incluir logotipos de mi empresa?',
 'Por supuesto. Ofrecemos personalización corporativa que incluye: tarjetas con tu logotipo, cintas personalizadas, empaques con imagen de marca y mensajes personalizados. Envíanos tu branding y lo integramos en cada detalle.', 17),

('Canastas Corporativas', '¿Manejan pedidos de grandes volúmenes?',
 'Sí, tenemos capacidad para procesar pedidos corporativos de cualquier volumen. Contamos con almacén propio y equipo dedicado para proyectos grandes. Para pedidos mayores a 100 canastas, te asignamos un asesor de cuentas dedicado.', 18)

ON CONFLICT DO NOTHING;
