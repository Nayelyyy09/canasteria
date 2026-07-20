import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, TreePine } from "lucide-react";
import { CATEGORIES_FULL, PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const SEO_CONTENT = {
  ejecutivas: {
    heading: "Canastas Navideñas Ejecutivas para Empresas",
    intro: "Las canastas navideñas ejecutivas son la forma más elegante de expresar gratitud a clientes, colaboradores y socios de negocios durante la temporada navideña. En Publiventa, cada regalo empresarial está cuidadosamente curado con productos gourmet de la más alta calidad, presentados en cestería de lujo que refleja la imagen y valores de tu empresa.",
    sections: [
      {
        title: "¿Por Qué Elegir Nuestras Canastas Ejecutivas?",
        text: "Sabemos que en el mundo empresarial los detalles importan. Por eso, nuestras canastas navideñas ejecutivas incluyen productos seleccionados por expertos: vinos de reserva, quesos curados artesanalmente, embutidos premium, chocolates belgas y conservas gourmet.",
      },
      {
        title: "Ideal para Clientes VIP y Colaboradores",
        text: "Ya sea para obsequiar a tus clientes más importantes, agradecer a tu equipo de trabajo o sorprender a proveedores estratégicos, nuestras canastas ejecutivas transmiten elegancia y profesionalismo.",
      },
    ],
  },
  exclusivas: {
    heading: "Canastas Navideñas Exclusivas",
    intro: "Para quienes buscan lo excepcional, nuestras canastas navideñas exclusivas representan la cúspide del lugo gourmet. Una selección magistral de los mejores productos del mundo.",
    sections: [
      {
        title: "Productos de Calidad Superior",
        text: "Cada canasta exclusiva es una obra maestra culinaria. Vinos Reserva y Gran Reserva de las mejores bodegas, quesos curados durante meses, jamón ibérico de bellota, foie gras, trufa negra y chocolate belga de origen único.",
      },
      {
        title: "Presentaciones de Colecionista",
        text: "Nuestras canastas exclusivas no solo se disfrutan al paladar, sino también a la vista. Presentaciones en cajas de madera barnizada, cestas de mimbre tejido a mano, acabados en cuero y detalles en oro.",
      },
    ],
  },
  familiares: {
    heading: "Canastas Navideñas Familiares",
    intro: "Canastas navideñas para toda ocasión. Ideales para regalar en familia.",
    sections: [
      {
        title: "Variedad para Todos",
        text: "Contamos con bolsos, coolers, mochilas, maletas, cajas y canastas para toda ocasión. Ideales para regalos corporativos, promociones y eventos.",
      },
    ],
  },
  corporativas: {
    heading: "Canastas Navideñas Corporativas",
    intro: "Canastas navideñas corporativas para empresas que buscan obsequios elegantes y funcionales para sus clientes y colaboradores.",
    sections: [
      {
        title: "Para Empresas",
        text: "Nuestras canastas corporativas incluyen productos seleccionados por expertos. Presentaciones elegantes con tarjeta de saludo y opciones de personalización.",
      },
    ],
  },
  "regalos-navidenos": {
    heading: "Regalos Navideños",
    intro: "Regalos navideños para toda ocasión. Encuentra el detalle perfecto para cada persona especial.",
    sections: [
      {
        title: "Ideas para Regalar",
        text: "Desde canastas económicas hasta opciones premium, tenemos el regalo navideño perfecto para cada presupuesto y ocasión.",
      },
    ],
  },
  "cestas-gourmet": {
    heading: "Cestas Gourmet",
    intro: "Cestas gourmet con productos selectos de alta calidad para paladares exigentes.",
    sections: [
      {
        title: "Selección Premium",
        text: "Nuestras cestas gourmet incluyen los mejores productos de la más alta calidad. Vinos de reserva, quesos curados, embutidos importados y chocolate belga.",
      },
    ],
  },
};

const CATEGORY_MAP = {};
CATEGORIES_FULL.forEach((cat) => {
  CATEGORY_MAP[cat.slug] = cat;
});

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORY_MAP[slug];

  useEffect(() => {
    if (category) {
      document.title = `${category.metaTitle} | Canastas Navideñas`;
      window.scrollTo(0, 0);
    }
  }, [category]);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const seoContent = SEO_CONTENT[slug] || SEO_CONTENT["ejecutivas"];
  const products = PRODUCTS.filter((p) => p.category === slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: window.location.origin },
      { "@type": "ListItem", position: 2, name: category.label, item: window.location.href },
    ],
  };

  const productSchema = products.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: category.label,
        description: category.description,
        numberOfItems: products.length,
        itemListElement: products.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: p.name,
            description: p.description,
            offers: {
              "@type": "Offer",
              price: p.price,
              priceCurrency: "PEN",
              availability: "https://schema.org/InStock",
            },
          },
        })),
      }
    : null;

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#0A461A] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.label}
            className="w-full h-full object-cover opacity-30"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A461A]/80 to-[#0A461A]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="font-body text-xs tracking-widest uppercase text-[#FAF7F2]/50 hover:text-[#C9A96E] transition-colors">
              Inicio
            </Link>
            <ChevronRight size={12} className="text-[#FAF7F2]/30" />
            <span className="font-body text-xs tracking-widest uppercase text-[#C9A96E]">
              {category.label}
            </span>
          </nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl lg:text-6xl text-[#FAF7F2] leading-tight max-w-3xl"
          >
            {seoContent.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-body text-sm text-[#FAF7F2]/60 max-w-2xl leading-relaxed"
          >
            {category.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex items-center gap-4"
          >
            <span className="font-body text-xs tracking-widest uppercase text-[#C9A96E]">
              {products.length} {products.length === 1 ? "producto" : "productos"} disponibles
            </span>
            <div className="h-px flex-1 max-w-[100px] bg-[#C9A96E]/30" />
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-[#0A461A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product, i) => (
              <ProductCard
                key={`${slug}-${product.slug}`}
                product={product}
                index={i}
                dark
              />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-20">
              <TreePine size={48} className="mx-auto text-[#C9A96E]/30 mb-4" />
              <p className="font-display text-2xl text-[#FAF7F2]/60">
                Próximamente tendremos productos en esta categoría
              </p>
              <Link
                to="/"
                className="mt-4 inline-block font-body text-xs tracking-widest uppercase text-[#C9A96E] hover:text-[#FAF7F2] transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-[#FAF7F2] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm text-[#0A461A]/70 leading-relaxed mb-8">
              {seoContent.intro}
            </p>

            {seoContent.sections.map((section, i) => (
              <div key={i} className="mb-8">
                <h2 className="font-display text-2xl lg:text-3xl text-[#0A461A] mb-3">
                  {section.title}
                </h2>
                <div className="w-12 h-px bg-[#C9A96E] mb-4" />
                <p className="font-body text-sm text-[#0A461A]/60 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="bg-[#0A461A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-3">
              Explora más
            </p>
            <h2 className="font-display text-3xl lg:text-4xl text-[#FAF7F2]">
              Otras Categorías
            </h2>
            <div className="mt-4 mx-auto w-16 h-px bg-[#C9A96E]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES_FULL.filter((c) => c.slug !== slug).map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/canastas-navidenas/${cat.slug}`}
                  className="group block relative aspect-[3/4] overflow-hidden"
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A461A] via-[#0A461A]/40 to-transparent" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <h3 className="font-display text-lg text-[#FAF7F2] group-hover:text-[#C9A96E] transition-colors">
                      {cat.label}
                    </h3>
                    <p className="mt-1 font-body text-xs text-[#FAF7F2]/50 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}