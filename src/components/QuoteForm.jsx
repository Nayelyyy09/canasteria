import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Loader2 } from "lucide-react";

export default function QuoteForm({ open, onClose, items, type = "personal" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      // Use Supabase Edge Function in production, local proxy in dev
      const isDev = window.location.hostname === "localhost";
      const apiUrl = isDev
        ? "/api/send-quote"
        : "https://fjnhroqtrbchvhvyjnva.supabase.co/functions/v1/send-quote";

      const headers = { "Content-Type": "application/json" };
      if (!isDev) {
        headers["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqbmhyb3F0cmJjaHZodnlqbnZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwOTcwODEsImV4cCI6MjA5ODY3MzA4MX0.QS-EVvSQEe0YCFq9CtweI2NCchYhTeDuc8KkBHCtEic";
      }

      const res = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          type,
          items: items.map((item) => ({
            name: item.name,
            qty: item.qty,
          })),
          notes: form.notes,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Error al enviar la cotización");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Error de conexión. Intenta de nuevo.");
    }
  };

  const handleClose = () => {
    setStatus("idle");
    setForm({ name: "", email: "", phone: "", company: "", notes: "" });
    onClose();
  };

  const typeLabel = type === "corporativo" ? "Cotización Corporativa" : "Cotización Personal";
  const typeColor = type === "corporativo" ? "#841B2D" : "#1A6B3E";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[90] bg-[#1A2F23]/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl flex flex-col"
            >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#B39359]/20">
              <div>
                <span
                  className="inline-block px-3 py-1 text-[10px] font-body font-bold tracking-wider uppercase text-white mb-2"
                  style={{ backgroundColor: typeColor }}
                >
                  {typeLabel}
                </span>
                <h3 className="font-display text-2xl text-[#1A2F23]">Solicitar Cotización</h3>
              </div>
              <button
                onClick={handleClose}
                className="text-[#1A2F23]/40 hover:text-[#1A2F23] transition-colors"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            {status === "success" ? (
              <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#1A6B3E]/10 flex items-center justify-center mb-5">
                  <CheckCircle size={32} className="text-[#1A6B3E]" />
                </div>
                <h4 className="font-display text-2xl text-[#1A2F23] mb-3">
                  ¡Cotización Enviada!
                </h4>
                <p className="font-body text-sm text-[#1A2F23]/50 max-w-sm">
                  Hemos recibido tu solicitud. Nuestro equipo te contactará pronto
                  con una propuesta personalizada.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-8 px-8 py-3 bg-[#841B2D] text-[#F9F4EB] font-body text-sm tracking-widest uppercase hover:bg-[#6d1625] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
                  {/* Resumen del pedido */}
                  <div className="bg-[#F9F4EB] p-4 border border-[#B39359]/10">
                    <p className="font-body text-[10px] tracking-wider uppercase text-[#B39359] mb-3">
                      Resumen ({items.length} productos)
                    </p>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div key={item.cartId} className="flex justify-between items-center">
                          <span className="font-body text-xs text-[#1A2F23]/70 truncate mr-2">
                            {item.name}
                          </span>
                          <span className="font-body text-xs text-[#841B2D] font-medium whitespace-nowrap">
                            x{item.qty}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-[#B39359]/20 flex justify-between items-center">
                      <span className="font-body text-xs font-bold text-[#1A2F23] uppercase tracking-wider">
                        Total
                      </span>
                      <span className="font-body text-sm text-[#1A2F23]">
                        {items.reduce((sum, item) => sum + item.qty, 0)} unidades
                      </span>
                    </div>
                  </div>

                  {/* Formulario */}
                  <div>
                    <label className="block font-body text-[10px] tracking-wider uppercase text-[#1A2F23]/50 mb-1.5">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full bg-white border border-[#B39359]/20 px-4 py-2.5 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-[10px] tracking-wider uppercase text-[#1A2F23]/50 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="correo@ejemplo.com"
                        className="w-full bg-white border border-[#B39359]/20 px-4 py-2.5 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-[10px] tracking-wider uppercase text-[#1A2F23]/50 mb-1.5">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="997 486 009"
                        className="w-full bg-white border border-[#B39359]/20 px-4 py-2.5 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors"
                      />
                    </div>
                  </div>
                  {type === "corporativo" && (
                    <div>
                      <label className="block font-body text-[10px] tracking-wider uppercase text-[#1A2F23]/50 mb-1.5">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        className="w-full bg-white border border-[#B39359]/20 px-4 py-2.5 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors"
                      />
                    </div>
                  )}
                  <div>
                    <label className="block font-body text-[10px] tracking-wider uppercase text-[#1A2F23]/50 mb-1.5">
                      Notas adicionales
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Dirección de entrega, fecha específica, personalización..."
                      className="w-full bg-white border border-[#B39359]/20 px-4 py-2.5 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-red-50 border border-red-200 p-3 text-center">
                      <p className="font-body text-sm text-red-600">{errorMsg}</p>
                    </div>
                  )}
                </div>

                <div className="px-6 py-4 border-t border-[#B39359]/20 bg-[#F9F4EB]/50">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#841B2D] text-[#F9F4EB] font-body text-sm tracking-widest uppercase hover:bg-[#6d1625] transition-colors disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Cotización
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
