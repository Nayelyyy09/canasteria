import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import QuoteForm from "./QuoteForm";

export default function CartDrawer({ open, onClose, items, onUpdateQty, onRemove }) {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteType, setQuoteType] = useState("personal");
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const openQuote = (type) => {
    setQuoteType(type);
    setQuoteOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-[70] bg-[#1A2F23]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-md bg-[#F9F4EB] flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-[#B39359]/20">
                <h3 className="font-display text-2xl text-[#1A2F23]">Tu Cotización</h3>
                <button onClick={onClose} className="text-[#1A2F23]/40 hover:text-[#1A2F23] transition-colors">
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <p className="font-display text-xl text-[#1A2F23]/40 italic">
                      Tu carrito está vacío
                    </p>
                    <p className="mt-2 font-body text-sm text-[#1A2F23]/30">
                      Explora nuestros productos y solicita tu cotización
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.cartId} className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display text-lg text-[#1A2F23] truncate">
                            {item.name}
                          </h4>
                          {item.note && (
                            <p className="font-body text-xs text-[#B39359] italic truncate mt-0.5">
                              "{item.note}"
                            </p>
                          )}
                          <div className="mt-2 flex items-center">
                            <div className="flex items-center border border-[#B39359]/20">
                              <button
                                onClick={() => onUpdateQty(item.cartId, item.qty - 1)}
                                className="w-7 h-7 flex items-center justify-center text-[#1A2F23]/50"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-8 text-center font-body text-sm font-medium text-[#1A2F23]">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => onUpdateQty(item.cartId, item.qty + 1)}
                                className="w-7 h-7 flex items-center justify-center text-[#1A2F23]/50"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <span className="ml-2 font-body text-xs text-[#1A2F23]/40">
                              {item.qty === 1 ? "unidad" : "unidades"}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => onRemove(item.cartId)}
                          className="self-start text-[#1A2F23]/20 hover:text-[#841B2D] transition-colors mt-1"
                        >
                          <Trash2 size={16} strokeWidth={1.5} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="px-8 py-6 border-t border-[#B39359]/20">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-body text-sm tracking-widest uppercase text-[#1A2F23]/60">
                      Productos
                    </span>
                    <span className="font-display text-2xl text-[#1A2F23]">
                      {totalItems} {totalItems === 1 ? "artículo" : "artículos"}
                    </span>
                  </div>
                  <button
                    onClick={() => openQuote("personal")}
                    className="w-full py-4 bg-[#841B2D] text-[#F9F4EB] font-body text-sm tracking-widest uppercase hover:bg-[#6d1625] transition-colors"
                  >
                    Solicitar Cotización
                  </button>
                  <button
                    onClick={() => openQuote("corporativo")}
                    className="w-full mt-3 py-3 border border-[#1A2F23]/20 text-[#1A2F23] font-body text-xs tracking-widest uppercase hover:bg-[#1A2F23]/5 transition-colors"
                  >
                    Cotización Corporativa
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <QuoteForm
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        items={items}
        type={quoteType}
      />
    </>
  );
}
