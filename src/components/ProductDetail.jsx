import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Gift } from "lucide-react";

export default function ProductDetail({ product, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [showNotePreview, setShowNotePreview] = useState(false);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] bg-[#1A2F23]/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 0.4 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#F9F4EB] w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-square lg:aspect-auto lg:h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 lg:hidden w-10 h-10 bg-[#1A2F23]/60 text-[#F9F4EB] rounded-full flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-8 lg:p-12 flex flex-col">
              <button
                onClick={onClose}
                className="hidden lg:flex self-end mb-4 text-[#1A2F23]/40 hover:text-[#1A2F23] transition-colors"
              >
                <X size={22} strokeWidth={1.5} />
              </button>

              <p className="font-body text-xs tracking-[0.3em] uppercase text-[#B39359]">
                {product.category}
              </p>
              <h2 className="mt-2 font-display text-3xl lg:text-4xl text-[#1A2F23]">
                {product.name}
              </h2>
              <div className="mt-3 w-10 h-px bg-[#B39359]" />

              <p className="mt-5 font-body text-sm text-[#1A2F23]/70 leading-relaxed">
                {product.description}
              </p>

              <div className="mt-6">
                <p className="font-body text-xs tracking-widest uppercase text-[#1A2F23]/50 mb-3">
                  Contenido
                </p>
                <ul className="space-y-2">
                  {product.contents.map((item, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-[#1A2F23]/80 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#B39359]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-[#B39359]/20 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gift size={16} className="text-[#B39359]" />
                  <span className="font-body text-xs tracking-widest uppercase text-[#1A2F23]/60">
                    Nota de regalo
                  </span>
                </div>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Escribe tu mensaje personalizado..."
                  rows={3}
                  className="w-full bg-transparent border border-[#B39359]/30 px-4 py-3 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#B39359] transition-colors resize-none"
                />
                {note && (
                  <button
                    onClick={() => setShowNotePreview(!showNotePreview)}
                    className="mt-2 font-body text-xs text-[#841B2D] underline underline-offset-2"
                  >
                    {showNotePreview ? "Ocultar" : "Vista previa de tarjeta"}
                  </button>
                )}
                <AnimatePresence>
                  {showNotePreview && note && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 bg-[#1A2F23] p-6 text-center overflow-hidden"
                    >
                      <p className="font-display text-xs tracking-widest uppercase text-[#B39359] mb-2">
                        Con cariño
                      </p>
                      <p className="font-display text-lg italic text-[#F9F4EB] leading-relaxed">
                        "{note}"
                      </p>
                      <div className="mt-3 mx-auto w-8 h-px bg-[#B39359]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="font-body text-xs tracking-widest uppercase text-[#1A2F23]/40">
                  Solicitar cotización
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-[#B39359]/30">
                    <button
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="w-10 h-10 flex items-center justify-center text-[#1A2F23]/60 hover:text-[#1A2F23] transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-10 text-center font-body text-sm text-[#1A2F23]">
                      {qty}
                    </span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      className="w-10 h-10 flex items-center justify-center text-[#1A2F23]/60 hover:text-[#1A2F23] transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      onAddToCart(product, qty, note);
                      onClose();
                    }}
                    className="px-8 py-3 bg-[#841B2D] text-[#F9F4EB] font-body text-sm tracking-widest uppercase hover:bg-[#6d1625] transition-colors"
                  >
                    Cotizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}