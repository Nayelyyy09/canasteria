import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function ProductCard({ product, onAddToCart, index, dark }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/producto/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden mb-5">
          <img
            src={hovered ? product.hoverImage : product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-all duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F23]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="px-1">
          <div className="flex items-start justify-between gap-4">
            <h3 className={`font-display text-xl lg:text-2xl leading-tight ${dark ? 'text-[#F9F4EB]' : 'text-[#1A2F23]'}`}>
              {product.name}
            </h3>
          </div>
          <div className="mt-2 w-8 h-px bg-[#B39359]" />
          <p className={`mt-3 font-body text-sm leading-relaxed line-clamp-2 ${dark ? 'text-[#F9F4EB]/60' : 'text-[#1A2F23]/60'}`}>
            {product.description}
          </p>
        </div>
      </Link>

      {onAddToCart && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="absolute bottom-20 right-4 w-11 h-11 bg-[#841B2D] text-[#F9F4EB] rounded-full flex items-center justify-center hover:bg-[#6d1625] transition-colors shadow-lg"
        >
          <Plus size={18} strokeWidth={2} />
        </motion.button>
      )}
    </motion.div>
  );
}