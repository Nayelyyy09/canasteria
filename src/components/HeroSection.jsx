import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight, Gift, MessageCircle } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import CanvasSnow from "./CanvasSnow";

const SLIDES = PRODUCTS.filter((p) => p.featured).slice(0, 4);

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
    const message = encodeURIComponent(
      `Hola, me interesa cotizar la canasta "${product.name}". ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/51958438095?text=${message}`, "_blank");
  };

  return (
    <section ref={sectionRef} id="hero" className="relative bg-[#1A2F23] overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <CanvasSnow />
      </motion.div>

      {/* Guirnalda de luces navideñas parpadeantes */}
      <svg
        className="absolute top-0 left-0 w-full h-8 pointer-events-none z-10 text-[#B39359]/30"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q5,4 10,0 Q15,4 20,0 Q25,4 30,0 Q35,4 40,0 Q45,4 50,0 Q55,4 60,0 Q65,4 70,0 Q75,4 80,0 Q85,4 90,0 Q95,4 100,0"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.15"
        />
        {[...Array(20)].map((_, i) => {
          const cx = 2.5 + i * 5;
          const cy = 2;
          const isEven = i % 2 === 0;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="0.45"
              className="fill-current text-[#B39359]"
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                animationDelay: `${i * 0.15}s`,
                opacity: isEven ? 0.3 : 0.85,
              }}
            />
          );
        })}
      </svg>

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-6 lg:px-16 py-12 lg:py-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Text side */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#841B2D]/30 border border-[#841B2D]/50 text-[#F9F4EB] text-xs tracking-widest uppercase font-body"
              >
                <Gift size={14} className="text-[#B39359]" />
                Destacado de la temporada
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl text-[#F9F4EB] leading-tight"
              >
                {product.name}
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-3 h-px bg-[#B39359] mx-auto lg:mx-0"
              />

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-5 font-body text-sm lg:text-base text-[#F9F4EB]/60 leading-relaxed max-w-lg mx-auto lg:mx-0 line-clamp-3"
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
                    className="group px-7 py-3 bg-[#841B2D] text-[#F9F4EB] font-body text-xs tracking-widest uppercase hover:bg-[#6d1625] transition-all duration-300 hover:shadow-lg hover:shadow-[#841B2D]/30 hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    Cotizar
                  </button>
                  <button
                    onClick={() => navigate(`/producto/${product.slug}`)}
                    className="px-7 py-3 border border-[#B39359]/40 text-[#F9F4EB] font-body text-xs tracking-widest uppercase hover:bg-[#B39359]/10 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Ver detalle
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Image side */}
            <div className="order-1 lg:order-2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="relative aspect-[4/3] lg:aspect-square overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={`Canasta navideña artesanal: ${product.name} — regalo gourmet navideño`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A2F23]/50 via-transparent to-[#841B2D]/20" />
              </motion.div>
              {/* Decorative border */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 12, y: 12 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -bottom-3 -right-3 w-full h-full border border-[#B39359]/30 pointer-events-none"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            className="w-10 h-10 flex items-center justify-center border border-[#B39359]/30 text-[#F9F4EB] hover:bg-[#B39359]/10 transition-all duration-300 hover:scale-110"
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
                    ? "w-8 bg-[#B39359]"
                    : "w-2 bg-[#F9F4EB]/20 hover:bg-[#F9F4EB]/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            className="w-10 h-10 flex items-center justify-center border border-[#B39359]/30 text-[#F9F4EB] hover:bg-[#B39359]/10 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
