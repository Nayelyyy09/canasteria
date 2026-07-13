import React, { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, ChevronRight, ArrowLeft, Check } from "lucide-react";
import { getProductBySlug, PRODUCTS, CATEGORIES_FULL } from "@/lib/products";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);

  const category = useMemo(() => {
    if (!product) return null;
    return CATEGORIES_FULL.find((c) => c.id === product.category);
  }, [product]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  useEffect(() => {
    if (!product) return;
    const siteName = "Canastas Navideñas Publiventa";
    const title = `${product.name} | ${siteName}`;
    const description = product.description;
    const url = `https://canastanavidena.pe/producto/${product.slug}`;
    const image = product.image;

    document.title = title;

    const setMeta = (property, content, isProperty = false) => {
      let el = document.querySelector(`meta[${isProperty ? "property" : "name"}="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(isProperty ? "property" : "name", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", url, true);
    setMeta("og:image", image, true);
    setMeta("og:type", "product", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    return () => {
      document.title = siteName;
    };
  }, [product]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2]">
          <div className="text-center px-6">
            <h1 className="font-display text-4xl text-[#0D2818] mb-4">Producto no encontrado</h1>
            <p className="font-body text-[#0D2818]/60 mb-8">
              El producto que buscas no existe o ha sido movido.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B22234] text-[#FAF7F2] font-body text-xs tracking-widest uppercase hover:bg-[#8B1A28] transition-colors"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>
        </div>
        <FooterSection />
      </>
    );
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola, me interesa cotizar la canasta "${product.name}". ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/51958438095?text=${message}`, "_blank");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: { "@type": "Brand", name: "Publiventa" },
    category: category?.label || product.category,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PEN",
      seller: { "@type": "Organization", name: "Publiventa" },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://canastanavidena.pe" },
      {
        "@type": "ListItem",
        position: 2,
        name: category?.label || product.category,
        item: `https://canastanavidena.pe/canastas-navidenas/${product.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://canastanavidena.pe/producto/${product.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <Navbar />

      <main className="bg-[#FAF7F2] min-h-screen">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
          <nav className="flex items-center gap-2 text-sm font-body text-[#0D2818]/50">
            <Link to="/" className="hover:text-[#B22234] transition-colors">
              Inicio
            </Link>
            <ChevronRight size={14} />
            <Link
              to={`/canastas-navidenas/${product.category}`}
              className="hover:text-[#B22234] transition-colors"
            >
              {category?.label || product.category}
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#0D2818]">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818]/20 to-transparent" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[#C9A96E]/30 pointer-events-none" />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#B22234]/10 text-[#B22234] text-xs tracking-widest uppercase font-body w-fit mb-4">
                {category?.label || product.category}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#0D2818] leading-tight">
                {product.name}
              </h1>

              <div className="mt-4 w-16 h-px bg-[#C9A96E]" />

              <p className="mt-6 font-body text-[#0D2818]/70 leading-relaxed text-base lg:text-lg">
                {product.description}
              </p>

              {/* Contents */}
              <div className="mt-8">
                <h2 className="font-display text-xl text-[#0D2818] mb-4">Contenido de la canasta</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.contents.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-[#0D2818]/70">
                      <Check size={16} className="text-[#C9A96E] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-body text-xs tracking-widest uppercase hover:bg-[#1da851] transition-colors"
                >
                  <MessageCircle size={18} />
                  Cotizar por WhatsApp
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 lg:px-16 pb-20">
            <div className="border-t border-[#C9A96E]/20 pt-12">
              <h2 className="font-display text-2xl lg:text-3xl text-[#0D2818] mb-8">
                Productos relacionados
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <FooterSection />
    </>
  );
}
