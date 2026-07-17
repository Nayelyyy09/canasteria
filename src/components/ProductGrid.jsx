import React, { useState } from "react";
import { motion } from "framer-motion";
import { PRODUCTS, CATEGORIES } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ onAddToCart }) {
  const [active, setActive] = useState("todos");

  const filtered =
    active === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="coleccion" className="bg-[#FAF7F2] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4">
            Nuestra Selección
          </p>
          <h2 className="font-display text-4xl lg:text-6xl text-[#0A461A]">
            Colección Navideña
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#C9A96E]" />
        </motion.div>

        <div className="flex justify-center gap-2 lg:gap-6 mb-14 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-body text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300 ${
                active === cat.id
                  ? "text-[#7E0E0F] border-b-2 border-[#7E0E0F]"
                  : "text-[#0A461A]/50 hover:text-[#0A461A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {filtered.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}