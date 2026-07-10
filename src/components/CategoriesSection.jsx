import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES_FULL } from "@/lib/products";
import { Link } from "react-router-dom";

export default function CategoriesSection() {
  return (
    <section id="categorias" className="bg-[#F9F4EB] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#841B2D] mb-3">
            Explora por
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1A2F23]">
            Nuestras Categorías
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#B39359]" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {CATEGORIES_FULL.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                to={`/canastas-navidenas/${cat.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden text-left"
              >
                <img
                  src={cat.image}
                  alt={`Categoría: ${cat.label} — ${cat.description}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F23] via-[#1A2F23]/40 to-transparent" />
                <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end">
                  <h3 className="font-display text-xl lg:text-2xl text-[#F9F4EB]">
                    {cat.label}
                  </h3>
                  <p className="mt-1 font-body text-xs text-[#F9F4EB]/60 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-[#B39359] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-body text-xs tracking-widest uppercase">Ver productos</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
                {/* Festive corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#841B2D] border-l-transparent" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
