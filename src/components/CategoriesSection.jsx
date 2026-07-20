import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CATEGORIES_FULL } from "@/lib/products";
import { Link } from "react-router-dom";

function CategoryCard({ cat, index }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Link
        to={`/canastas-navidenas/${cat.slug}`}
        className="group relative block aspect-[4/5] overflow-hidden text-left"
      >
        <motion.img
          style={{ y }}
          src={cat.image}
          alt={`Categoría: ${cat.label} — ${cat.description}`}
          className="absolute inset-0 w-full h-[120%] object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A461A] via-[#0A461A]/40 to-transparent" />
        <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end">
          <h3 className="font-display text-xl lg:text-2xl text-[#FAF7F2] group-hover:text-[#C9A96E] transition-colors duration-300">
            {cat.label}
          </h3>
          <p className="mt-1 font-body text-xs text-[#FAF7F2]/60 line-clamp-2">
            {cat.description}
          </p>
          <div className="mt-3 flex items-center gap-2 text-[#C9A96E] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="font-body text-xs tracking-widest uppercase">Ver productos</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
        {/* Festive corner accent */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#7E0E0F] border-l-transparent group-hover:border-t-[#C9A96E] transition-colors duration-300" />
      </Link>
    </motion.div>
  );
}

export default function CategoriesSection() {
  return (
    <section id="categorias" className="bg-[#FAF7F2] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs uppercase text-[#7E0E0F] mb-3"
          >
            Explora por
          </motion.p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#0A461A]">
            Nuestras Categorías
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 mx-auto h-px bg-[#C9A96E]"
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {CATEGORIES_FULL.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
