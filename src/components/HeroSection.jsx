import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Gift, MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import CanvasSnow from "./CanvasSnow";

const CUSTOM_BANNER = {
  name: "Contenedores Textiles Personalizados",
  description: "Personalizamos tu contenedor textil según tu presupuesto. Diseños a medida con la calidad y el precio que tu proyecto necesita.",
  image: "https://canastanavidena.pe/wp-content/uploads/2026/07/Banner_1.png",
  isCustom: true,
};

const SLIDES = [CUSTOM_BANNER, ...PRODUCTS.filter((p) => p.featured).slice(0, 4)];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const go = useCallback((dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 5500);
    return () => clearInterval(timer);
  }, [go, index]);

  const product = SLIDES[index];

  const handleCotizar = () => {
    if (product.isCustom) {
      const message = encodeURIComponent(
        `Hola, me interesa cotizar contenedores textiles personalizados. ¿Podrían darme más información?`
      );
      window.open(`https://wa.me/51958438095?text=${message}`, "_blank");
      return;
    }
    const message = encodeURIComponent(
      `Hola, me interesa cotizar la canasta "${product.name}". ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/51958438095?text=${message}`, "_blank");
  };

  return (
    <section ref={sectionRef} id="hero" className="relative bg-[#0A461A] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <CanvasSnow />
      </motion.div>

      {/* Guirnalda de luces navideñas parpadeantes */}
      <svg
        className="absolute top-0 left-0 w-full h-7 pointer-events-none z-10"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Cable */}
        <path
          d="M0,2 Q5,6 10,2 Q15,6 20,2 Q25,6 30,2 Q35,6 40,2 Q45,6 50,2 Q55,6 60,2 Q65,6 70,2 Q75,6 80,2 Q85,6 90,2 Q95,6 100,2"
          fill="none"
          stroke="#C9A96E"
          strokeWidth="0.12"
          opacity="0.5"
        />
        {/* Bulbs */}
        {[...Array(20)].map((_, i) => {
          const cx = 2.5 + i * 5;
          const cy = 4;
          const colors = ["#FFD93D", "#FF6B6B", "#4ECDC4", "#FF8C42", "#C9A96E"];
          const color = colors[i % colors.length];
          return (
            <g key={i} filter="url(#glow)">
              <circle
                cx={cx}
                cy={cy}
                r="0.6"
                fill={color}
                opacity="0.9"
              >
                <animate
                  attributeName="opacity"
                  values="0.4;1;0.4"
                  dur={`${1.5 + (i % 3) * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.2}s`}
                />
              </circle>
              {/* Glow halo */}
              <circle
                cx={cx}
                cy={cy}
                r="1.2"
                fill={color}
                opacity="0.15"
              >
                <animate
                  attributeName="opacity"
                  values="0.05;0.25;0.05"
                  dur={`${1.5 + (i % 3) * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.2}s`}
                />
              </circle>
            </g>
          );
        })}
      </svg>

      <motion.div style={{ opacity }} className="relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[500px] lg:min-h-[600px]"
          >
            {/* Text side */}
            <div className="order-2 lg:order-1 text-center lg:text-left max-w-7xl mx-auto px-6 lg:px-16 py-8 lg:py-14 lg:ml-0 lg:pl-16 lg:pr-8 z-10">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#7E0E0F]/30 border border-[#7E0E0F]/50 text-[#FAF7F2] text-xs tracking-widest uppercase font-body"
              >
                <Gift size={14} className="text-[#C9A96E]" />
                {product.isCustom ? "Soluciones a medida" : "Destacado de la temporada"}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] leading-tight"
              >
                {product.name}
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-3 h-px bg-[#C9A96E] mx-auto lg:mx-0"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-5 font-body text-sm lg:text-base text-[#FAF7F2]/60 leading-relaxed max-w-lg mx-auto lg:mx-0 line-clamp-3"
              >
                {product.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-7 flex items-center justify-center lg:justify-start gap-6"
              >
                <div className="flex gap-3">
                  <button
                    onClick={handleCotizar}
                    className="group px-7 py-3 bg-[#7E0E0F] text-[#FAF7F2] font-body text-xs tracking-widest uppercase hover:bg-[#7E0E0F] transition-all duration-300 hover:shadow-lg hover:shadow-[#7E0E0F]/30 hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    Cotizar
                  </button>
                  {!product.isCustom && (
                    <button
                      onClick={() => navigate(`/producto/${product.slug}`)}
                      className="px-7 py-3 border border-[#C9A96E]/40 text-[#FAF7F2] font-body text-xs tracking-widest uppercase hover:bg-[#C9A96E]/10 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      Ver detalle
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Image side */}
            <div className="order-1 lg:order-2 relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={product.image}
                  alt={`Canasta navideña artesanal: ${product.name} — regalo gourmet navideño`}
                  className="w-full h-full object-contain bg-[#FAF7F2]/5"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A461A] via-transparent to-transparent lg:block hidden" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 flex items-center justify-center border border-[#C9A96E]/30 text-[#FAF7F2] hover:bg-[#C9A96E]/10 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 transition-all duration-300 ${
                  i === index
                    ? "w-8 bg-[#C9A96E]"
                    : "w-2 bg-[#FAF7F2]/20 hover:bg-[#FAF7F2]/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="w-10 h-10 flex items-center justify-center border border-[#C9A96E]/30 text-[#FAF7F2] hover:bg-[#C9A96E]/10 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
