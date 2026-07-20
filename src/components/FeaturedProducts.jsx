import React, { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts({ activeCategory, setActiveCategory }) {
  const [internalCat, setInternalCat] = useState("todos");
  const active = activeCategory ?? internalCat;
  const setActive = setActiveCategory ?? setInternalCat;

  const filtered =
    active === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? filtered : filtered;

  return (
    <section id="productos" className="bg-[#FAF7F2] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-3">
            Selección especial
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#0A461A]">
            Productos Destacados
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#C9A96E]" />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 lg:gap-4 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActive(cat.id); setShowAll(false); }}
              className={`font-body text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300 ${
                active === cat.id
                  ? "bg-[#7E0E0F] text-[#FAF7F2]"
                  : "text-[#0A461A]/50 hover:text-[#0A461A] border border-[#0A461A]/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {displayed.map((product, i) => (
            <ProductCard
              key={`${active}-${product.slug}`}
              product={product}
              index={i}
            />
          ))}
        </div>

        {!showAll && filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0A461A] text-[#0A461A] font-body text-sm tracking-widest uppercase hover:bg-[#0A461A] hover:text-[#FAF7F2] transition-all duration-300"
            >
              Ver todos los productos
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
