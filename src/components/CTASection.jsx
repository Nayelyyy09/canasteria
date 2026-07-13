import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Truck, Clock, Gift, MessageCircle } from "lucide-react";

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

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function CTASection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 60000);
    return () => clearInterval(timer);
  }, []);

  const handleCotizar = () => {
    const message = encodeURIComponent("Hola, me interesa realizar un pedido de canastas navideñas.");
    window.open(`https://wa.me/51958438095?text=${message}`, "_blank");
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Stats Section */}
      <section className="bg-[#FAF7F2] py-16 border-t border-b border-[#0D2818]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500", suffix: "+", label: "Empresas Confían" },
              { value: "10000", suffix: "+", label: "Canastas Entregadas" },
              { value: "98", suffix: "%", label: "Clientes Satisfechos" },
              { value: "8", suffix: "+", label: "Años de Experiencia" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="font-display text-5xl lg:text-6xl text-[#B22234] mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <div className="mx-auto w-8 h-px bg-[#C9A96E] mb-3" />
                <p className="font-body text-xs text-[#0D2818]/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="regalos" className="relative bg-[#B22234] py-20 lg:py-28 overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#8B1A28] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A96E] rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-10" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 text-[#FAF7F2] text-xs tracking-widest uppercase font-body mb-6"
            >
              <Truck size={14} className="text-[#C9A96E]" />
              Envío express disponible
            </motion.div>

            <h2 className="font-display text-4xl lg:text-6xl text-[#FAF7F2] leading-tight">
              Haz tu pedido
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="italic text-[#C9A96E]"
              >
                a tiempo para Navidad
              </motion.span>
            </h2>

            <p className="mt-5 font-body text-sm lg:text-base text-[#FAF7F2]/70 max-w-xl mx-auto">
              Asegura que tus canastas lleguen a tiempo. Realiza tu pedido antes del
              20 de diciembre y garantiza la entrega para Nochebuena.
            </p>

            {/* Countdown */}
            <div className="mt-8 flex justify-center gap-4 lg:gap-8">
              {[
                { val: timeLeft.days, label: "Días" },
                { val: timeLeft.hours, label: "Horas" },
                { val: timeLeft.mins, label: "Minutos" },
              ].map((unit, i) => (
                <motion.div
                  key={unit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-[#0D2818]/40 border border-[#FAF7F2]/15 w-20 lg:w-28 py-4 hover:bg-[#0D2818]/60 transition-colors duration-300"
                >
                  <p className="font-display text-3xl lg:text-5xl text-[#FAF7F2]">
                    {String(unit.val).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-body text-xs tracking-widest uppercase text-[#C9A96E]">
                    {unit.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCotizar}
                className="group px-10 py-4 bg-[#FAF7F2] text-[#B22234] font-body text-sm tracking-widest uppercase hover:bg-[#C9A96E] hover:text-[#FAF7F2] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Cotizar ahora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo("#contacto")}
                className="px-10 py-4 border border-[#FAF7F2]/30 text-[#FAF7F2] font-body text-sm tracking-widest uppercase hover:bg-[#FAF7F2]/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Clock size={16} />
                Pedido corporativo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
