import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Truck, RotateCcw, ShieldCheck, HelpCircle, ChevronDown, Phone, TreePine } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const WHATSAPP = "https://wa.me/51997486009?text=Hola,%20tengo%20una%20duda%20sobre%20envíos";

const faqItems = [
  {
    q: "¿Cuánto tiempo tarda el envío?",
    a: "Los envíos estándar se realizan en 3 a 5 días hábiles dentro de la  Lima y área metropolitana. Para el resto del país, el tiempo de entrega es de 5 a 8 días hábiles. Los envíos express (disponibles en Lima) se entregan en 24 a 48 horas.",
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí, realizamos envíos a toda la República Mexicana. Para destinos fuera de la  Lima, trabajamos con paqueterías especializadas que garantizan la integridad de las canastas durante el traslado.",
  },
  {
    q: "¿Qué pasa si mi canasta llega dañada?",
    a: "Si tu canasta llega con algún daño, contáctanos dentro de las primeras 24 horas con fotos del producto y empaque. Revisaremos tu caso y haremos un reenvío o reembolso completo según corresponda.",
  },
  {
    q: "¿Puedo elegir una fecha de entrega específica?",
    a: "Sí, para pedidos corporativos y grandes volúmenes podemos coordinar una fecha de entrega específica. Contáctanos con al menos 2 semanas de anticipación para garantizar la disponibilidad.",
  },
  {
    q: "¿El envío es gratis?",
    a: "El envío es gratuito para pedidos superiores a $1,500 USD dentro del área metropolitana de la  Lima. Para otros destinos, el costo de envío se calcula según la zona y se muestra antes de completar tu compra.",
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-[#B39359]/20 bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F9F4EB] transition-colors"
      >
        <span className="font-display text-lg text-[#1A2F23] pr-4">{item.q}</span>
        <ChevronDown
          size={18}
          className={`text-[#841B2D] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="font-body text-sm text-[#1A2F23]/60 leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export default function Shipping() {
  const [openFaq, setOpenFaq] = useState(null);
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="bg-[#F9F4EB] min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        <nav className="flex items-center gap-2 font-body text-xs text-[#1A2F23]/50">
          <Link to="/" className="hover:text-[#841B2D] transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <span className="text-[#1A2F23]">Envíos y Devoluciones</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1A2F23] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#841B2D] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B39359] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <TreePine size={18} className="text-[#B39359]" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359]">Información de Envíos</span>
            <TreePine size={18} className="text-[#B39359]" />
          </div>
          <h1 className="font-display text-5xl lg:text-7xl text-[#F9F4EB] leading-tight">
            Envíos y <span className="italic text-[#841B2D]">Devoluciones</span>
          </h1>
          <p className="mt-6 font-body text-[#F9F4EB]/60 max-w-2xl mx-auto text-lg">
            Todo lo que necesitas saber sobre nuestras políticas de envío, entrega y cambios.
          </p>
        </div>
      </section>

      {/* Policy Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Truck,
              title: "Política de Envío",
              items: [
                "Envío estándar: 3-5 días hábiles en Lima",
                "Envío nacional: 5-8 días hábiles",
                "Express 24-48h disponible en Lima",
                "Envío gratuito en compras mayores a $1,500 USD",
                "Empaque especial para preservar la calidad",
              ],
            },
            {
              icon: RotateCcw,
              title: "Devoluciones y Cambios",
              items: [
                "Solicita cambio dentro de 24 horas tras recibir",
                "Producto debe estar sin daño ni manipulación",
                "Reenvío sin costo si el daño es por envío",
                "Reembolso completo en 5 días hábiles",
                "No se aceptan devoluciones de alimentos abiertos",
              ],
            },
            {
              icon: ShieldCheck,
              title: "Garantía de Calidad",
              items: [
                "Revisión de calidad antes de cada envío",
                "Temperatura controlada para productos perecederos",
                "Fotos del producto antes de enviar (a solicitud)",
                "Seguimiento de tu pedido en tiempo real",
                "Atención directa por WhatsApp para emergencias",
              ],
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-[#B39359]/20 p-8"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#841B2D]/10 border border-[#841B2D]/20 mb-5">
                <card.icon size={22} className="text-[#841B2D]" />
              </div>
              <h3 className="font-display text-2xl text-[#1A2F23] mb-4">{card.title}</h3>
              <ul className="space-y-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B39359] mt-1.5 flex-shrink-0" />
                    <span className="font-body text-sm text-[#1A2F23]/60">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#1A2F23] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-12">
            <HelpCircle size={32} className="text-[#B39359] mx-auto mb-4" />
            <h2 className="font-display text-4xl lg:text-5xl text-[#F9F4EB]">
              Preguntas <span className="italic text-[#841B2D]">Frecuentes</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A6B3E] text-[#F9F4EB] font-body text-sm tracking-widest uppercase hover:bg-[#145a32] transition-colors"
            >
              <Phone size={16} />
              ¿Otra pregunta? Escríbenos
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
