import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight, Phone, Mail, MapPin, TreePine,
  Instagram, CreditCard,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({ title: "¡Bienvenido al club!", description: "Te enviaremos ofertas exclusivas navideñas." });
      setEmail("");
    }
  };

  const handleNavClick = (href) => {
    if (location.pathname === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: href } });
    }
  };

  return (
    <footer id="contacto" className="bg-[#1A2F23] text-[#F9F4EB] relative overflow-hidden">
      {/* Festive top border */}
      <div className="h-1.5 bg-gradient-to-r from-[#841B2D] via-[#B39359] to-[#1A6B3E]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-16 lg:py-24 border-b border-[#F9F4EB]/10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <TreePine size={20} className="text-[#841B2D]" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359]">
              Únete al Club Navideño
            </span>
            <TreePine size={20} className="text-[#1A6B3E]" />
          </div>
          <h2 className="font-display text-4xl lg:text-6xl text-[#F9F4EB] leading-none">
            Recibe Ofertas
            <br />
            <span className="italic text-[#841B2D]">Exclusivas</span>
          </h2>
          <p className="mt-4 font-body text-sm text-[#F9F4EB]/50 max-w-md mx-auto">
            Suscríbete y sé el primero en conocer nuestras promociones
            navideñas y colecciones especiales.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex items-center max-w-md mx-auto bg-[#F9F4EB]/5 border border-[#F9F4EB]/15"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="flex-1 bg-transparent py-4 px-5 font-body text-sm text-[#F9F4EB] placeholder:text-[#F9F4EB]/30 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-5 py-4 bg-[#841B2D] text-[#F9F4EB] hover:bg-[#6d1625] transition-colors"
            >
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </form>
        </motion.div>

        {/* Main footer grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="https://publiventa.pe/wp-content/uploads/2017/07/publiventa-footer-.png"
                alt="Publiventa"
                className="h-12 w-auto"
              />
            </div>
            <p className="font-body text-xs text-[#F9F4EB]/40 leading-relaxed">
              Canastas navideñas artesanales de lujo. Curamos cada regalo como
              una obra maestra, celebrando la tradición y el buen gusto.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/publiventa_publicidad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#F9F4EB]/15 hover:bg-[#841B2D] hover:border-[#841B2D] text-[#F9F4EB]/60 hover:text-[#F9F4EB] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@publiventa_publicidad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#F9F4EB]/15 hover:bg-[#841B2D] hover:border-[#841B2D] text-[#F9F4EB]/60 hover:text-[#F9F4EB] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.18z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-[#B39359] mb-4">
              Navegación
            </p>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "#hero" },
                { label: "Categorías", href: "#categorias" },
                { label: "Productos", href: "#productos" },
                { label: "Blog", href: "/blog", isLink: true },
                { label: "Promociones", href: "#promociones" },
                { label: "Clientes", href: "#clientes" },
              ].map((link) => (
                <li key={link.href}>
                  {link.isLink ? (
                    <Link
                      to={link.href}
                      className="font-body text-sm text-[#F9F4EB]/50 hover:text-[#841B2D] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-body text-sm text-[#F9F4EB]/50 hover:text-[#841B2D] transition-colors"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-[#B39359] mb-4">
              Información
            </p>
            <ul className="space-y-3">
              {[
                { label: "Sobre Nosotros", to: "/nosotros" },
                { label: "Preguntas Frecuentes", to: "/faq" },
                { label: "Envíos y Devoluciones", to: "/envios-devoluciones" },
                { label: "Contacto", to: "/contacto" },
                { label: "Política de Privacidad", to: "/politica-de-privacidad" },
                { label: "Términos y Condiciones", to: "/terminos-y-condiciones" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-[#F9F4EB]/50 hover:text-[#841B2D] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-[#B39359] mb-4">
              Contáctanos
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#841B2D]/20 border border-[#841B2D]/30">
                  <Phone size={14} className="text-[#841B2D]" />
                </div>
                <a href="tel:+51997486009" className="font-body text-sm text-[#F9F4EB]/50 hover:text-[#F9F4EB] transition-colors">
                  997 486 009 / 976 220 440 / 958 438 095
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#841B2D]/20 border border-[#841B2D]/30">
                  <Mail size={14} className="text-[#841B2D]" />
                </div>
                <a href="mailto:ventas@publiventa.com" className="font-body text-sm text-[#F9F4EB]/50 hover:text-[#F9F4EB] transition-colors">
                  ventas@publiventa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#1A6B3E]/20 border border-[#1A6B3E]/30 flex-shrink-0">
                  <MapPin size={14} className="text-[#1A6B3E]" />
                </div>
                <span className="font-body text-sm text-[#F9F4EB]/50">
                  Jr. Santo Tomás, Mz C Lt. 16-B<br />Los Olivos, Lima - Perú
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="py-6 border-t border-[#F9F4EB]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CreditCard size={16} className="text-[#F9F4EB]/30" />
            <span className="font-body text-xs text-[#F9F4EB]/30">Métodos de pago:</span>
            <div className="flex gap-2">
              {["VISA", "MC", "AMEX", "PAY"].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 border border-[#F9F4EB]/15 text-[10px] font-body text-[#F9F4EB]/40"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
          <p className="font-body text-xs text-[#F9F4EB]/20">
            © 2026 Publiventa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}