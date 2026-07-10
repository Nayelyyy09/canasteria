import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Truck, Clock, Gift } from "lucide-react";

function getTimeLeft() {
  const target = new Date("2026-12-24T00:00:00");
  const now = new Date();
  const diff = target - now;
  if (diff <= 0) return { days: 0, hours: 0, mins: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
  };
}

export default function CTASection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 60000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="promociones" className="relative bg-[#841B2D] py-20 lg:py-28 overflow-hidden">
      {/* Festive pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${(i * 8.5) % 100}%`,
              top: `${(i * 17) % 100}%`,
            }}
          >
            <Gift size={24 + (i % 3) * 12} className="text-[#F9F4EB]" />
          </div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F9F4EB]/10 border border-[#F9F4EB]/20 text-[#F9F4EB] text-xs tracking-widest uppercase font-body mb-6">
            <Truck size={14} className="text-[#B39359]" />
            Envío express disponible
          </div>

          <h2 className="font-display text-4xl lg:text-6xl text-[#F9F4EB] leading-tight">
            Haz tu pedido
            <br />
            <span className="italic text-[#B39359]">a tiempo para Navidad</span>
          </h2>

          <p className="mt-5 font-body text-sm lg:text-base text-[#F9F4EB]/70 max-w-xl mx-auto">
            Asegura que tus canastas lleguen a tiempo. Realiza tu pedido antes del
            20 de diciembre y garantiza la entrega para Nochebuena.
          </p>

          {/* Countdown */}
          <div className="mt-8 flex justify-center gap-4 lg:gap-8">
            {[
              { val: timeLeft.days, label: "Días" },
              { val: timeLeft.hours, label: "Horas" },
              { val: timeLeft.mins, label: "Minutos" },
            ].map((unit) => (
              <div
                key={unit.label}
                className="bg-[#1A2F23]/40 border border-[#F9F4EB]/15 w-20 lg:w-28 py-4"
              >
                <p className="font-display text-3xl lg:text-5xl text-[#F9F4EB]">
                  {String(unit.val).padStart(2, "0")}
                </p>
                <p className="mt-1 font-body text-xs tracking-widest uppercase text-[#B39359]">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("#productos")}
              className="px-10 py-4 bg-[#F9F4EB] text-[#841B2D] font-body text-sm tracking-widest uppercase hover:bg-[#B39359] hover:text-[#F9F4EB] transition-colors"
            >
              Comprar ahora
            </button>
            <button
              onClick={() => scrollTo("#contacto")}
              className="px-10 py-4 border border-[#F9F4EB]/30 text-[#F9F4EB] font-body text-sm tracking-widest uppercase hover:bg-[#F9F4EB]/10 transition-colors flex items-center justify-center gap-2"
            >
              <Clock size={16} />
              Pedido corporativo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}