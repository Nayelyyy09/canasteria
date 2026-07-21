import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Gift, MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import CanvasSnow from "./CanvasSnow";

const CUSTOM_BANNER = {
  name: "Contenedores Textiles Personalizados",
  description: "Personalizamos tu contenedor textil según tu presupuesto. Diseños a medida con la calidad y el precio que tu proyecto necesita.",
  image: "https://canastanavidena.pe/wp-content/uploads/2026/07/Banner_11.png",
  isCustom: true,
};

const PANETON_BANNER = {
  name: "Personaliza tu panetón y dale un toque diferente",
  description: "Convierte un delicioso panetón en un detalle especial, personalizado con tu marca.",
  image: "https://canastanavidena.pe/wp-content/uploads/2026/07/Banner_3.png",
  isCustom: true,
};

const featuredProducts = PRODUCTS.filter((p) => p.featured);
const SLIDES = [CUSTOM_BANNER, PANETON_BANNER];

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[500px] lg:min-h-[600px] flex items-center"
          >
            {/* Full-width background image */}
            <div className="absolute inset-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Multi-layer overlay for dramatic contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              {/* Subtle vignette effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]" />
            </div>

            {/* Text overlay */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28 text-left">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-5 py-2 bg-black/40 backdrop-blur-sm border border-[#C9A96E]/60 text-[#C9A96E] text-xs tracking-[0.2em] uppercase font-body"
              >
                <Gift size={14} className="text-[#C9A96E]" />
                {product.isCustom ? "Soluciones a medida" : "Destacado de la temporada"}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              >
                {product.name}
              </motion.h1>

              {/* Decorative accent line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 h-[3px] bg-gradient-to-r from-[#C9A96E] to-[#C9A96E]/30"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-6 font-body text-base lg:text-lg text-white/85 leading-relaxed max-w-xl line-clamp-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
              >
                {product.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8 flex items-center gap-4"
              >
                <button
                  onClick={handleCotizar}
                  className="group relative px-8 py-4 bg-[#C9A96E] text-[#1a1a1a] font-body text-sm tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-[#d4b87a] hover:shadow-xl hover:shadow-[#C9A96E]/30 hover:-translate-y-1 flex items-center gap-3 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <MessageCircle size={18} className="relative z-10" />
                  <span className="relative z-10">Cotizar Ahora</span>
                </button>
                {!product.isCustom && (
                  <button
                    onClick={() => navigate(`/producto/${product.slug}`)}
                    className="px-8 py-4 border-2 border-white/30 text-white font-body text-sm tracking-widest uppercase hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                  >
                    Ver detalle
                  </button>
                )}
              </motion.div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#C9A96E]/30 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#C9A96E]/30 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            className="w-12 h-12 flex items-center justify-center border-2 border-white/20 text-white/70 hover:bg-white/10 hover:border-[#C9A96E]/60 hover:text-[#C9A96E] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 transition-all duration-400 ${
                  i === index
                    ? "w-10 bg-[#C9A96E] shadow-lg shadow-[#C9A96E]/50"
                    : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="w-12 h-12 flex items-center justify-center border-2 border-white/20 text-white/70 hover:bg-white/10 hover:border-[#C9A96E]/60 hover:text-[#C9A96E] transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
