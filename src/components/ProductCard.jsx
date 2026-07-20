import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, Eye } from "lucide-react";

export default function ProductCard({ product, index, dark }) {
  const [hovered, setHovered] = useState(false);

  const handleWhatsApp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hola, me interesa cotizar "${product.name}". ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/51958438095?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-white">
          <motion.img
            src={hovered ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-contain p-2"
            animate={hovered ? { scale: 1.05 } : { scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A461A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover overlay with buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={hovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center gap-3"
          >
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              onClick={handleWhatsApp}
              className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:bg-[#1da851] transition-colors shadow-lg hover:scale-110 duration-300"
            >
              <MessageCircle size={20} />
            </motion.button>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={hovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="w-12 h-12 bg-[#7E0E0F] text-[#FAF7F2] rounded-full flex items-center justify-center hover:bg-[#7E0E0F] transition-colors shadow-lg hover:scale-110 duration-300"
            >
              <Eye size={20} />
            </motion.button>
          </motion.div>
        </div>

        <div className="px-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className={`font-display text-xl lg:text-2xl leading-tight group-hover:text-[#7E0E0F] transition-colors duration-300 ${dark ? 'text-[#FAF7F2]' : 'text-[#0A461A]'}`}>
              {product.name}
            </h3>
          </div>
          <motion.div
            initial={{ width: 32 }}
            animate={{ width: 48 }}
            className="mt-2 h-px bg-[#C9A96E]"
          />
          <p className={`mt-3 font-body text-sm leading-relaxed line-clamp-2 ${dark ? 'text-[#FAF7F2]/60' : 'text-[#0A461A]/60'}`}>
            {product.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
