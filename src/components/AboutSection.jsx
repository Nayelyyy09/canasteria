import React from "react";
import { motion } from "framer-motion";

const RIBBON_IMG = "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-14.jpg";

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-[#1A2F23] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-display text-4xl lg:text-5xl text-[#F9F4EB] leading-tight">
              El Arte de{" "}
              <span className="italic text-[#B39359]">Regalar</span>
            </h2>
            <div className="mt-4 w-16 h-px bg-[#B39359]" />
            <p className="mt-8 font-body text-base text-[#F9F4EB]/60 leading-relaxed">
              Desde hace más de una década, curamos cada canasta como una pieza
              única. Seleccionamos los mejores productos artesanales de
              productores locales y europeos, combinándolos en composiciones que
              cuentan una historia de sabor, tradición y elegancia.
            </p>
            <p className="mt-5 font-body text-base text-[#F9F4EB]/60 leading-relaxed">
              Cada detalle importa: desde la calidad del mimbre hasta el lazo
              que corona cada presentación. No vendemos productos, creamos
              momentos inolvidables de gratitud y celebración.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-8">
              {[
                { num: "10+", label: "Años de\nexperiencia" },
                { num: "5K", label: "Canastas\nentregadas" },
                { num: "200+", label: "Clientes\ncorporativos" },
              ].map((stat) => (
                <div key={stat.num}>
                  <p className="font-display text-3xl lg:text-4xl text-[#B39359]">
                    {stat.num}
                  </p>
                  <p className="mt-1 font-body text-xs text-[#F9F4EB]/40 whitespace-pre-line leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={RIBBON_IMG}
              alt="Manos colocando un lazo de seda sobre una canasta navideña"
              className="w-full object-cover"
            />
            <div className="absolute inset-0 border border-[#B39359]/20 translate-x-4 translate-y-4 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}