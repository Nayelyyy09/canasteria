import React from "react";
import { motion } from "framer-motion";
import { SUPPLIERS } from "@/lib/products";

export default function SuppliersSlider() {
  const doubled = [...SUPPLIERS, ...SUPPLIERS];

  return (
    <section id="proveedores" className="bg-[#F9F4EB] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#841B2D] mb-3">
            Calidad garantizada
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#1A2F23]">
            Nuestros Proveedores
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#B39359]" />
          <p className="mt-4 font-body text-sm text-[#1A2F23]/50 max-w-lg mx-auto">
            Trabajamos con los mejores productores artesanales para garantizar
            la excelencia en cada canasta.
          </p>
        </motion.div>
      </div>

      {/* Marquee slider */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-[#F9F4EB] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-[#F9F4EB] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 lg:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubled.map((supplier, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-56 lg:w-64 bg-[#1A2F23] border border-[#B39359]/20 p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#841B2D]/20 border border-[#841B2D]/40 flex items-center justify-center mb-3">
                <span className="font-display text-xl text-[#B39359]">
                  {supplier.name.charAt(0)}
                </span>
              </div>
              <p className="font-display text-lg text-[#F9F4EB]">{supplier.name}</p>
              <p className="mt-1 font-body text-xs text-[#B39359] tracking-wide uppercase">
                {supplier.tagline}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}