import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, TreePine } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-posts";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);

  useEffect(() => {
    let result = BLOG_POSTS;

    if (activeCategory !== "all") {
      result = result.filter((post) => post.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(result);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    document.title = "Blog | Canastas Navideñas - Ideas, Guías y Tendencias";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Blog de Canastas Navideñas. Encuentra ideas de regalos, guías para elegir canastas corporativas, tendencias navideñas y consejos de envío a todo Lima."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F4EB]">
      <Navbar />
      {/* Hero */}
      <section className="relative bg-[#1A2F23] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <TreePine
              key={i}
              size={Math.random() * 40 + 20}
              className="absolute text-[#B39359]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4 block">
              Blog
            </span>
            <h1 className="font-display text-4xl lg:text-6xl text-[#F9F4EB] leading-tight mb-4">
              Ideas, Guías y{" "}
              <span className="italic text-[#841B2D]">Tendencias</span>
            </h1>
            <p className="font-body text-sm text-[#F9F4EB]/60 max-w-xl mx-auto">
              Descubre todo sobre canastas navideñas: inspiración para regalos,
              consejos de selección, tendencias de temporada y logística de envíos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 -mt-8 relative z-10">
        <div className="bg-white shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
          {/* Search */}
          <div className="relative flex-1 w-full">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A2F23]/30"
            />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#F9F4EB] border border-[#B39359]/20 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 font-body text-xs tracking-widest uppercase transition-colors ${activeCategory === cat.id
                    ? "bg-[#841B2D] text-[#F9F4EB]"
                    : "bg-[#F9F4EB] text-[#1A2F23]/60 hover:bg-[#1A2F23] hover:text-[#F9F4EB]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-16">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <TreePine size={48} className="mx-auto text-[#B39359]/30 mb-4" />
            <h3 className="font-display text-2xl text-[#1A2F23]/50 mb-2">
              No se encontraron artículos
            </h3>
            <p className="font-body text-sm text-[#1A2F23]/40">
              Intenta con otra búsqueda o categoría.
            </p>
          </motion.div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-[#1A2F23] py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center">
          <TreePine size={24} className="mx-auto text-[#841B2D] mb-4" />
          <h2 className="font-display text-3xl text-[#F9F4EB] mb-4">
            No Te Pierdas Ningún{" "}
            <span className="italic text-[#B39359]">Artículo</span>
          </h2>
          <p className="font-body text-sm text-[#F9F4EB]/50 mb-8">
            Suscríbete a nuestro newsletter y recibe las últimas tendencias,
            guías y ofertas exclusivas directamente en tu correo.
          </p>
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 bg-[#F9F4EB]/5 border border-[#F9F4EB]/15 font-body text-sm text-[#F9F4EB] placeholder:text-[#F9F4EB]/30 focus:outline-none focus:border-[#B39359]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#841B2D] text-[#F9F4EB] font-body text-xs tracking-widest uppercase hover:bg-[#6d1625] transition-colors"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
