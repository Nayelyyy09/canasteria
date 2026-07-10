import React, { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts({ onAddToCart, activeCategory, setActiveCategory }) {
  const [internalCat, setInternalCat] = useState("todos");
  const active = activeCategory ?? internalCat;
  const setActive = setActiveCategory ?? setInternalCat;

  const filtered =
    active === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="productos" className="bg-[#1A2F23] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-3">
            Selección especial
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#F9F4EB]">
            Productos Destacados
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#B39359]" />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 lg:gap-4 mb-12 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-body text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300 ${
                active === cat.id
                  ? "bg-[#841B2D] text-[#F9F4EB]"
                  : "text-[#F9F4EB]/50 hover:text-[#F9F4EB] border border-[#F9F4EB]/15"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onAddToCart={onAddToCart}
              dark
            />
          ))}
        </div>
      </div>
    </section>
  );
}
