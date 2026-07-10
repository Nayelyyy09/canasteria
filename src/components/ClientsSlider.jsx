import React from "react";
import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/products";

export default function ClientsSlider() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section id="clientes" className="bg-[#1A2F23] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-3">
            Confianza y respaldo
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#F9F4EB]">
            Nuestros Clientes
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#B39359]" />
          <p className="mt-4 font-body text-sm text-[#F9F4EB]/50 max-w-lg mx-auto">
            Empresas y organizaciones que confían en nosotros para sus regalos
            corporativos y canastas navideñas.
          </p>
        </motion.div>
      </div>

      {/* Marquee slider */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-r from-[#1A2F23] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-gradient-to-l from-[#1A2F23] to-transparent z-10 pointer-events-none" />

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
              className="flex-shrink-0 w-36 h-20 lg:w-44 lg:h-24 bg-white border border-[#F9F4EB]/10 flex items-center justify-center p-4 hover:border-[#B39359]/30 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`Cliente: ${client.name}`}
                className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
