import React from "react";
import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/products";

export default function ClientsSlider() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clientes" className="bg-[#0D2818] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-3">
            Confianza y respaldo
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#FAF7F2]">
            Nuestros Clientes
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#C9A96E]" />
          <p className="mt-4 font-body text-sm text-[#FAF7F2]/50 max-w-lg mx-auto">
            Empresas y organizaciones que confían en nosotros para sus regalos
            corporativos y canastas navideñas.
          </p>
        </motion.div>
      </div>

      {/* Marquee slider */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-[#0D2818] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-[#0D2818] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 lg:gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubled.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-28 lg:w-72 lg:h-40 flex items-center justify-center p-6 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={`Cliente: ${client.name}`}
                  className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
