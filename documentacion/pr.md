# PR - Canasta Navideña: Requisitos del Producto Web

## 1. Visión General

**Nombre del proyecto:** Canasta Navideña  
**Tipo:** E-commerce de canastas navideñas (B2B y B2C)  
**Plataforma:** WooCommerce (WordPress) o Shopify  
**Objetivo:** Posicionar la web en el Top 3 de Google para "canastas navideñas" y generar ventas directas/cotizaciones durante la temporada navideña.

---

## 2. Arquitectura del Sitio

### 2.1 Árbol de URLs (profundidad máxima: 3 niveles)

```
/ (Home)
├── /canastas-navidenas/
│   ├── /canastas-navidenas/corporativas/
│   │   ├── /canastas-navidenas/corporativas/premium/
│   │   ├── /canastas-navidenas/corporativas/economicas/
│   │   └── /canastas-navidenas/corporativas/sin-licor/
│   ├── /canastas-navidenas/familiares/
│   ├── /canastas-navidenas/ejecutivas/
│   └── /canastas-navidenas/exclusivas/
├── /arcones-navidenos/
├── /cestas-gourmet/
├── /regalos-navidenos/
├── /blog/
│   ├── /blog/ideas-de-regalos/
│   ├── /blog/consejos-corporativos/
│   └── /blog/tendencias-navidad/
├── /preguntas-frecuentes/
├── /sobre-nosotros/
├── /contacto/
├── /politica-de-envio/
├── /politica-de-privacidad/
├── /terminos-y-condiciones/
└── /carrito/
```

### 2.2 Reglas de URLs

- Formato kebab-case: `/canastas-navidenas/corporativas`
- Sin parámetros de sesión ni query strings innecesarios
- Canonical auto-asignada a cada URL
- Redirecciones 301 para cualquier cambio de URL

---

## 3. Menús y Navegación

### 3.1 Header (Desktop)

| Posición | Elemento | Descripción |
|----------|----------|-------------|
| Izquierda | Logo | Enlazado a home (`/`) |
| Centro | Inicio | Enlace a home |
| Centro | Canastas Navideñas | Mega-menú con subcategorías (ver abajo) |
| Centro | Arcones y Cestas Gourmet | Categoría directa |
| Centro | Regalos de Empresa | Categoría directa |
| Centro | Blog | Enlace a `/blog` |
| Centro | Contacto | Enlace a `/contacto` |
| Derecha | Icono Carrito | Acceso rápido a `/carrito` |
| Derecha | Icono WhatsApp | Botón flotante de cotización |

### 3.2 Mega-menú "Canastas Navideñas"

```
Canastas Navideñas
├── Corporativas ──────────────── 2-3 productos destacados con imagen
│   ├── Premium
│   ├── Económicas
│   └── Sin Licor
├── Familiares ────────────────── 2-3 productos destacados con imagen
├── Ejecutivas ────────────────── 2-3 productos destacados con imagen
└── Exclusivas ────────────────── 2-3 productos destacados con imagen
```

### 3.3 Header (Mobile)

- Menú hamburguesa con navegación completa
- Icono WhatsApp fijo visible
- Icono carrito fijo visible

### 3.4 Footer

| Sección | Enlaces |
|---------|---------|
| **Empresa** | Sobre Nosotros, Blog, Contacto |
| **Ayuda** | FAQ, Política de Envío, Política de Privacidad, Términos y Condiciones |
| **Contacto** | Teléfono, Email, WhatsApp, Dirección física |
| **Redes Sociales** | Facebook, Instagram, TikTok |
| **Newsletter** | Formulario de suscripción |
| **Pagos** | Logos de medios de pago aceptados |
| **Copyright** | © 2026 Canasta Navideña. Todos los derechos reservados. |

---

## 4. Páginas Principales

### 4.1 Home (`/`)

**SEO:**
- **Title:** `Canastas Navideñas 2026 | Envío Gratis y Personalización – [Marca]` (55-60 caracteres)
- **Meta Description:** `Descubre nuestras canastas navideñas corporativas y familiares. Productos gourmet, envío rápido y personalización gratis. ¡Cotiza hoy!` (130-150 caracteres)
- **H1:** `Canastas Navideñas 2026`

**Secciones (con jerarquía H2/H3):**

```
H1: Canastas Navideñas 2026

H2: Categorías Populares
  → Cards de 4 categorías: Corporativas, Familiares, Arcones, Regalos

H2: Productos Destacados
  → Grid de 6-8 productos con imagen, precio y CTA

H2: ¿Por qué elegir nuestras canastas?
  H3: Personalización a tu medida
  H3: Productos gourmet de calidad
  H3: Envío garantizado
  H3: Precios competitivos

H2: Nuestros Clientes Confían en Nosotros
  → Logos de empresas (E-E-A-T)

H2: Testimonios
  → 3-4 reseñas de clientes

H2: Cómo Funciona
  H3: Elige tu canasta
  H3: Personaliza los detalles
  H3: Recibe en tu puerta

H2: Blog y Noticias
  → 3 posts destacados

H2: Preguntas Frecuentes
  → 4-6 FAQ con enlace a página completa
```

**Contenido mínimo:** 350+ palabras  
**Imágenes:** Banner hero + 6-8 productos + logos clientes  
**CTAs:** "Ver Catálogo" y "Cotizar por WhatsApp"

---

### 4.2 Categoría: Canastas Navideñas (`/canastas-navidenas/`)

**SEO:**
- **Title:** `Canastas Navideñas | Catálogo Completo 2026 – [Marca]`
- **Meta Description:** `Explora nuestro catálogo completo de canastas navideñas. Corporativas, familiares, premium y económicas. Envío a todo el país.`
- **H1:** `Canastas Navideñas`

**Contenido:**
- Descripción breve de la categoría (150-200 palabras)
- Filtros laterales: Precio, Tipo, Temática, Disponibilidad
- Grid de productos con tarjetas (imagen, nombre, precio, CTA)
- Texto SEO al final de la página (300+ palabras)

---

### 4.3 Subcategoría: Corporativas (`/canastas-navidenas/corporativas/`)

**SEO:**
- **Title:** `Canastas Navideñas Corporativas | Empresas 2026 – [Marca]`
- **Meta Description:** `Canastas navideñas corporativas para empresas. Personalización con logo, envío masivo y factura fiscal. Cotiza ahora.`
- **H1:** `Canastas Navideñas Corporativas`

**Contenido:**
- Texto explicativo: beneficios para empresas, personalización, volumen (200+ palabras)
- Logos de empresas clientes (E-E-A-T)
- Filtros: Rango de precio, Cantidad mínima, Con/sin licor
- Testimonios de clientes corporativos
- CTA: "Cotizar por WhatsApp" y "Solicitar Presupuesto"

---

### 4.4 Subcategoría: Familiares (`/canastas-navidenas/familiares/`)

**SEO:**
- **Title:** `Canastas Navideñas Familiares | Para tu Hogar 2026 – [Marca]`
- **Meta Description:** `Canastas navideñas familiares para regalar a tus seres queridos. Deliciosos productos gourmet. Envío rápido y seguro.`
- **H1:** `Canastas Navideñas Familiares`

**Contenido:**
- Texto sobre regalos familiares y tradiciones navideñas (150+ palabras)
- Filtros: Precio, Temática (dulce, salado, mixta)
- CTA: "Agregar al Carrito"

---

### 4.5 Subcategoría: Ejecutivas (`/canastas-navidenas/ejecutivas/`)

**SEO:**
- **Title:** `Canastas Navideñas Ejecutivas | Premium 2026 – [Marca]`
- **Meta Description:** `Canastas navideñas ejecutivas de lujo. Vinos, quesos, chocolates premium. El regalo perfecto para socios y directivos.`
- **H1:** `Canastas Navideñas Ejecutivas`

---

### 4.6 Subcategoría: Exclusivas (`/canastas-navidenas/exclusivas/`)

**SEO:**
- **Title:** `Canastas Navideñas Exclusivas | Edición Limitada 2026 – [Marca]`
- **Meta Description:** `Canastas navideñas exclusivas de edición limitada. Productos artesanales y gourmet. Reserva la tuya antes de que se agoten.`
- **H1:** `Canastas Navideñas Exclusivas`

---

### 4.7 Arcones Navideños (`/arcones-navidenos/`)

**SEO:**
- **Title:** `Arcones Navideños 2026 | Grandes Regalos – [Marca]`
- **Meta Description:** `Arcones navideños con productos gourmet. Ideales para empresas y familias. Personalización disponible. Envío gratis.`
- **H1:** `Arcones Navideños`

---

### 4.8 Cestas Gourmet (`/cestas-gourmet/`)

**SEO:**
- **Title:** `Cestas Gourmet Navideñas | Productos Selectos – [Marca]`
- **Meta Description:** `Cestas gourmet navideñas con vinos, quesos, chocolates y aceites premium. El detalle perfecto para esta Navidad.`
- **H1:** `Cestas Gourmet`

---

### 4.9 Regalos Navideños (`/regalos-navidenos/`)

**SEO:**
- **Title:** `Regalos Navideños 2026 | Gift Boxes y Kits – [Marca]`
- **Meta Description:** `Regalos navideños originales: gift boxes, kits gourmet y cajas personalizadas. Sorprende esta Navidad con algo especial.`
- **H1:** `Regalos Navideños`

---

### 4.10 Página de Producto

**URL:** `/producto/canasta-[nombre]`

**SEO:**
- **Title:** `[Nombre Canasta] | Canasta Navideña [Categoría] – [Marca]`
- **Meta Description:** `[Descripción única del producto, 130-150 caracteres]`
- **H1:** `[Nombre de la Canasta]`

**Contenido:**
- Galería de imágenes (4-6 fotos)
- Descripción detallada del producto
- Lista de ingredientes/productos incluidos
- Precio visible
- CTA: "Agregar al Carrito" y "Cotizar por WhatsApp"
- Productos relacionados (3-4)
- Reseñas de clientes

**Schema:** `Product` JSON-LD con nombre, imagen, precio, moneda, disponibilidad, marca

---

### 4.11 Blog (`/blog/`)

**SEO:**
- **Title:** `Blog | Ideas de Regalos y Tendencias Navideñas – [Marca]`
- **H1:** `Blog Navideño`

**Categorías de blog:**
- `/blog/ideas-de-regalos/`
- `/blog/consejos-corporativos/`
- `/blog/tendencias-navidad/`
- `/blog/recetas-gourmet/`

**Schema:** `Article` JSON-LD con autor, fecha, imagen

**Calendario editorial:** 1 publicación semanal (Septiembre - Diciembre)

**Temas iniciales:**
1. "Ideas de regalos navideños para empleados 2026"
2. "Cómo elegir una canasta navideña corporativa según tu presupuesto"
3. "Tendencias de canastas navideñas 2026"
4. "Los mejores productos gourmet para incluir en tu canasta"
5. "Guía para personalizar canastas navideñas con tu marca"
6. "Diferencias entre canastas corporativas y familiares"

---

### 4.12 Preguntas Frecuentes (`/preguntas-frecuentes/`)

**SEO:**
- **Title:** `Preguntas Frecuentes | Canasta Navideña – [Marca]`
- **Meta Description:** `Resuelve tus dudas sobre envíos, personalización, pagos y más. Todo lo que necesitas saber sobre nuestras canastas navideñas.`
- **H1:** `Preguntas Frecuentes`

**Schema:** `FAQPage` JSON-LD

**Preguntas ejemplo:**
1. ¿Cómo personalizar una canasta navideña corporativa?
2. ¿Cuál es el pedido mínimo para canastas corporativas?
3. ¿Hacen envíos a todo el país?
4. ¿Cuánto tiempo tarda el envío?
5. ¿Se pueden incluir productos personalizados?
6. ¿Aceptan factura fiscal?
7. ¿Cuál es la política de devoluciones?
8. ¿Cómo puedo pagar mi pedido?

---

### 4.13 Sobre Nosotros (`/sobre-nosotros/`)

**SEO:**
- **Title:** `Sobre Nosotros | Historia de Canasta Navideña – [Marca]`
- **H1:** `Sobre Nosotros`

**Contenido:**
- Historia de la empresa
- Trayectoria y experiencia
- Valores y misión
- Certificaciones y logros
- Equipo

**Schema:** `Organization` JSON-LD

---

### 4.14 Contacto (`/contacto/`)

**SEO:**
- **Title:** `Contacto | Canasta Navideña – [Marca]`
- **H1:** `Contacto`

**Contenido:**
- Formulario de contacto
- Teléfono y WhatsApp
- Email
- Dirección física
- Horario de atención
- Google Maps (si aplica)

---

## 5. Optimización SEO Técnica

### 5.1 Schema.org (JSON-LD)

| Página | Schema |
|--------|--------|
| Home | `Organization`, `WebSite`, `SearchAction` |
| Categorías | `ItemList`, `BreadcrumbList` |
| Productos | `Product`, `Offer`, `AggregateRating`, `BreadcrumbList` |
| Blog | `Article`, `BreadcrumbList` |
| FAQ | `FAQPage`, `BreadcrumbList` |
| Contacto | `LocalBusiness` |

### 5.2 Metadatos por Página

| Página | Title (50-60 chars) | Meta Description (130-150 chars) |
|--------|---------------------|----------------------------------|
| Home | Canastas Navideñas 2026 \| Envío Gratis – [Marca] | Descubre nuestras canastas navideñas corporativas y familiares. Productos gourmet, envío rápido y personalización gratis. ¡Cotiza hoy! |
| Corporativas | Canastas Navideñas Corporativas \| Empresas 2026 – [Marca] | Canastas navideñas corporativas para empresas. Personalización con logo, envío masivo y factura fiscal. Cotiza ahora. |
| Familiares | Canastas Navideñas Familiares \| Para tu Hogar – [Marca] | Canastas navideñas familiares para regalar a tus seres queridos. Deliciosos productos gourmet. Envío rápido y seguro. |
| Arcones | Arcones Navideños 2026 \| Grandes Regalos – [Marca] | Arcones navideños con productos gourmet. Ideales para empresas y familias. Personalización disponible. Envío gratis. |
| FAQ | Preguntas Frecuentes \| Canasta Navideña – [Marca] | Resuelve tus dudas sobre envíos, personalización, pagos y más. Todo lo que necesitas saber sobre nuestras canastas navideñas. |
| Blog | Blog \| Ideas de Regalos y Tendencias Navideñas – [Marca] | Consejos, tendencias e ideas de regalos navideños. Guías para elegir la canasta perfecta esta Navidad 2026. |
| Sobre Nosotros | Sobre Nosotros \| Historia de Canasta Navideña – [Marca] | Conoce nuestra historia, valores y experiencia en la creación de canastas navideñas premium desde hace más de X años. |
| Contacto | Contacto \| Canasta Navideña – [Marca] | Contáctanos por teléfono, WhatsApp o email. Estamos para ayudarte con tu pedido de canastas navideñas. |

### 5.3 Encabezados

- **Regla:** Un solo H1 por página
- **H2:** Secciones principales
- **H3:** Subsecciones
- **H4:** Detalles internos (si aplica)

### 5.4 Imágenes

- Formato WebP (compresión sin pérdida visible)
- Lazy loading en todas las imágenes
- Alt text descriptivo con keyword
- Dimensiones optimizadas (max 1920px ancho)
- Nombres de archivo SEO-friendly: `canasta-navidena-corporativa-premium.webp`

### 5.5 Velocidad (Core Web Vitals)

- **LCP:** < 2.5 segundos
- **FID:** < 100 milisegundos
- **CLS:** < 0.1
- CDN para assets estáticos
- Minificación de CSS/JS
- Cache del navegador habilitado

### 5.6 Seguridad y Técnico

- HTTPS en todo el sitio
- robots.txt configurado
- sitemap.xml actualizado
- Canonical en todas las páginas
- Viewport meta tag para responsive
- UTF-8 charset

---

## 6. Experiencia de Usuario (UX)

### 6.1 Diseño Visual

- **Colores navideños:** Rojo (#C41E3A), Verde (#228B22), Dorado (#DAA520), Blanco (#FFFFFF)
- **Tipografía:** Sans-serif legible (ej. Inter, Poppins, Montserrat)
- **Espaciado:** Generoso entre secciones
- **Contraste:** Texto oscuro sobre fondo claro (WCAG AA)

### 6.2 Responsive

- Mobile-first design
- Menú hamburguesa en móvil
- Tarjetas de producto adaptadas a pantalla
- Botones grandes y legibles en móvil
- Touch-friendly (min 44x44px)

### 6.3 Call to Action

| Ubicación | CTA | Acción |
|-----------|-----|--------|
| Header | WhatsApp | Abrir chat de cotización |
| Header | Carrito | Ver carrito de compras |
| Home Hero | "Ver Catálogo" | Navegar a categorías |
| Home Hero | "Cotizar Ahora" | WhatsApp o formulario |
| Categorías | "Agregar al Carrito" | Agregar producto |
| Categorías | "Ver Detalle" | Ir a página de producto |
| Producto | "Agregar al Carrito" | Agregar al carrito |
| Producto | "Cotizar por WhatsApp" | WhatsApp con producto |
| Footer | "Suscribirse" | Newsletter |

### 6.4 Elementos de Confianza (E-E-A-T)

- Logos de empresas clientes
- Testimonios reales con foto y nombre
- Certificaciones de calidad
- SSL visible (candado)
- Políticas claras de envío y devolución
- Datos de empresa visibles (dirección, teléfono, email)
- Formas de pago aceptadas

---

## 7. Carrito y Checkout

### 7.1 Carrito

- Resumen de productos seleccionados
- Cantidad modificable
- Eliminar productos
- Subtotal y total
- CTA: "Proceder al Pago"
- CTA secundario: "Seguir Comprando"

### 7.2 Checkout

- Formulario de datos del cliente
- Dirección de envío
- Método de pago (tarjeta, PayPal, transferencia)
- Resumen del pedido
- CTA: "Finalizar Compra"
- Opción de cotización por WhatsApp (B2B)

---

## 8. Integraciones

### 8.1 Analytics

- Google Analytics 4 (GA4)
- Google Search Console
- Eventos de conversión configurados

### 8.2 Redes Sociales

- Pixel de Facebook
- Pixel de TikTok (opcional)
- Open Graph tags para compartir
- Twitter Cards

### 8.3 Comunicación

- WhatsApp Business API (botón flotante)
- Formulario de contacto (WPForms o similar)
- Newsletter (Mailchimp o similar)

### 8.4 Pagos

- Pasarela de pago (Stripe, MercadoPago, etc.)
- PayPal
- Transferencia bancaria
- Pago contra entrega (si aplica)

---

## 9. Contenido SEO

### 9.1 Keywords Principales

| Keyword | Volumen estimado | Intención |
|---------|------------------|-----------|
| canastas navideñas | Alto | Comercial/Transaccional |
| canastas navideñas corporativas | Alto | Comercial |
| canastas de navidad | Alto | Comercial |
| arcones navideños | Medio | Comercial |
| regalos navideños | Alto | Comercial |
| cestas navideñas | Medio | Comercial |
| canastas gourmet | Medio | Comercial |
| canastas navideñas para empresas | Medio | Comercial |
| canastas navideñas familiares | Bajo-Medio | Comercial |

### 9.2 Keywords LSI

- panetones, vinos, chocolates, aceite de oliva
- productos gourmet, regalos corporativos
- cestas de navidad, regalos de empresa
- personalización, envío gratis, cotización

### 9.3 Featured Snippets

- Definiciones claras: "¿Qué es una canasta navideña corporativa?"
- Listas: "5 cosas que debe incluir una canasta navideña"
- Tablas comparativas de productos
- Preguntas y respuestas en FAQ

---

## 10. Métricas de Éxito

| Métrica | Objetivo (6 meses) |
|---------|---------------------|
| Tráfico orgánico | +200% |
| Posición media keyword principal | Top 3 |
| Tasa de conversión | > 2% |
| Tiempo de carga | < 2.5s |
| Páginas por sesión | > 3 |
| Tasa de rebote | < 50% |
| Pedidos/cotizaciones mensuales | > 100 |

---

## 11. Cronograma de Implementación

### Fase 1: Configuración Técnica (Días 1-30)

- [ ] Instalar WordPress + WooCommerce o Shopify
- [ ] Configurar HTTPS y dominio
- [ ] Diseñar estructura de URLs
- [ ] Crear páginas principales (Home, Categorías, Producto, FAQ, Blog, Nosotros, Contacto)
- [ ] Implementar Schema.org (Product, FAQ, Breadcrumb, Organization)
- [ ] Configurar robots.txt y sitemap.xml
- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] Instalar Google Analytics 4 y Search Console

### Fase 2: Contenido y SEO On-Page (Días 30-60)

- [ ] Redactar contenido para todas las páginas (350+ palabras home, 200+ categorías)
- [ ] Crear y publicar primeros 4 posts de blog
- [ ] Configurar metadatos (Title, Meta Description) para todas las páginas
- [ ] Implementar WhatsApp flotante
- [ ] Crear página de FAQ con Schema
- [ ] Agregar testimonios y logos de clientes

### Fase 3: Productos y Catálogo (Días 60-90)

- [ ] Cargar catálogo de productos (mínimo 20 productos)
- [ ] Configurar carrito y checkout
- [ ] Implementar filtros de búsqueda
- [ ] Configurar métodos de pago
- [ ] Configurar zonas de envío

### Fase 4: Marketing y Optimización (Días 90-180)

- [ ] Publicar blog semanalmente
- [ ] Campaña de backlinks
- [ ] Optimización de Core Web Vitals
- [ ] Pruebas A/B de CTAs
- [ ] Monitoreo de rankings y ajustes

---

## 12. Dependencias Técnicas

- **Hosting:** Servidor con PHP 8+, MySQL 8+, SSL
- **WordPress:** 6.x con tema responsive (flavor Astra, Kadence o similar)
- **WooCommerce:** Última versión
- **Plugins SEO:** Yoast SEO o Rank Math
- **Caché:** WP Rocket o W3 Total Cache
- **CDN:** Cloudflare
- **Email:** Mailchimp o similar para newsletter

---

## 13. Notas y Consideraciones

1. **Temporada navideña:** La web debe estar lista y optimizada para septiembre (inicio de la temporada de búsqueda)
2. **Contenido dinámico:** Actualizar metadatos y productos cada temporada
3. **Escalabilidad:** Preparar la estructura para agregar categorías adicionales
4. **Multi-país:** Si se expande, configurar hreflang para cada mercado
5. **Local SEO:** Crear ficha de Google Business si hay tienda física
