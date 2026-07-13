import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight, Phone, Mail, MapPin, TreePine,
  Instagram, CreditCard, Loader2, CheckCircle2, AlertCircle,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// ReCAPTCHA Site Key - Obtener de https://www.google.com/recaptcha/admin
// Haz clic en el engranaje (⚙️) junto a tu sitio para ver las keys
const RECAPTCHA_SITE_KEY = "6LcDp1EtAAAAAOui-7Pi_IbuyJqgRI5u2-u4JnIF";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const recaptchaRef = useRef(null);
  const recaptchaWidgetId = useRef(null);
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();

  // Renderizar reCAPTCHA v2 cuando el componente monta
  useEffect(() => {
    // Esperar a que grecaptcha esté disponible
    const checkRecaptcha = setInterval(() => {
      if (typeof window.grecaptcha !== 'undefined') {
        clearInterval(checkRecaptcha);
        renderRecaptcha();
      }
    }, 100);

    return () => clearInterval(checkRecaptcha);
  }, []);

  const renderRecaptcha = () => {
    if (recaptchaRef.current && recaptchaWidgetId.current === null) {
      try {
        recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token) => {
            // Token obtenido - el usuario completó el captcha
            console.log('reCAPTCHA token obtained');
          },
          'expired-callback': () => {
            // Token expiró
            setRecaptchaReady(false);
          },
          'error-callback': () => {
            // Error en reCAPTCHA
            setRecaptchaReady(false);
          }
        });
        setRecaptchaReady(true);
      } catch (error) {
        console.error('Error rendering reCAPTCHA:', error);
      }
    }
  };

  const getRecaptchaToken = () => {
    return new Promise((resolve, reject) => {
      if (typeof window.grecaptcha === 'undefined') {
        reject(new Error('reCAPTCHA no está disponible'));
        return;
      }

      const response = window.grecaptcha.getResponse(recaptchaWidgetId.current);
      if (response) {
        resolve(response);
      } else {
        reject(new Error('Por favor completa el captcha'));
      }
    });
  };

  const resetRecaptcha = () => {
    if (recaptchaWidgetId.current !== null && typeof window.grecaptcha !== 'undefined') {
      window.grecaptcha.reset(recaptchaWidgetId.current);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Obtener token de reCAPTCHA v2
      const recaptchaToken = await getRecaptchaToken();

      // Aquí enviarías el email y el token a tu backend para verificar
      console.log('Token reCAPTCHA:', recaptchaToken);
      console.log('Email:', email);

      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));

      // TODO: Reemplazar con llamada real a tu backend
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, recaptchaToken })
      // });

      setSubmitStatus('success');
      toast({
        title: "¡Bienvenido al club!",
        description: "Te enviaremos ofertas exclusivas navideñas.",
        variant: "default"
      });
      setEmail("");
      resetRecaptcha();

      // Reset status después de 3 segundos
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error('Error en suscripción:', error);
      setSubmitStatus('error');
      toast({
        title: "Error",
        description: error.message || "No pudimos procesar tu suscripción. Inténtalo de nuevo.",
        variant: "destructive"
      });
      resetRecaptcha();
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-4xl lg:text-6xl text-[#F9F4EB] leading-none"
          >
            Recibe Ofertas
            <br />
            <span className="italic text-[#841B2D]">Exclusivas</span>
          </motion.h2>
          <p className="mt-4 font-body text-sm text-[#F9F4EB]/50 max-w-md mx-auto">
            Suscríbete y sé el primero en conocer nuestras promociones
            navideñas y colecciones especiales.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-md mx-auto"
          >
            <div className="flex items-center bg-[#F9F4EB]/5 border border-[#F9F4EB]/15 hover:border-[#F9F4EB]/30 transition-colors duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 bg-transparent py-4 px-5 font-body text-sm text-[#F9F4EB] placeholder:text-[#F9F4EB]/30 focus:outline-none"
                required
                disabled={isSubmitting}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`px-5 py-4 transition-all duration-300 flex items-center justify-center min-w-[52px] ${
                  submitStatus === 'success'
                    ? 'bg-[#1A6B3E] text-[#F9F4EB]'
                    : submitStatus === 'error'
                    ? 'bg-[#841B2D] text-[#F9F4EB]'
                    : 'bg-[#841B2D] text-[#F9F4EB] hover:bg-[#6d1625]'
                } disabled:opacity-70`}
              >
                {isSubmitting ? (
                  <Loader2 size={18} strokeWidth={1.5} className="animate-spin" />
                ) : submitStatus === 'success' ? (
                  <CheckCircle2 size={18} strokeWidth={1.5} />
                ) : submitStatus === 'error' ? (
                  <AlertCircle size={18} strokeWidth={1.5} />
                ) : (
                  <ArrowRight size={18} strokeWidth={1.5} />
                )}
              </motion.button>
            </div>
            {/* reCAPTCHA v2 Widget */}
            <div className="mt-4 flex justify-center">
              <div ref={recaptchaRef}></div>
            </div>
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
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.instagram.com/publiventa_publicidad/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#F9F4EB]/15 hover:bg-[#841B2D] hover:border-[#841B2D] text-[#F9F4EB]/60 hover:text-[#F9F4EB] transition-colors"
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.tiktok.com/@publiventa_publicidad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#F9F4EB]/15 hover:bg-[#841B2D] hover:border-[#841B2D] text-[#F9F4EB]/60 hover:text-[#F9F4EB] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.18z"/>
                </svg>
              </motion.a>
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
                { label: "Activaciones", href: "/activaciones", isLink: true },
                { label: "Regalos Navideños", href: "/regalos-navidenos", isLink: true },
                { label: "Clientes", href: "#clientes" },
              ].map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
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
                </motion.li>
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
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 flex items-center justify-center bg-[#841B2D]/20 border border-[#841B2D]/30"
                >
                  <Phone size={14} className="text-[#841B2D]" />
                </motion.div>
                <a href="tel:+51997486009" className="font-body text-sm text-[#F9F4EB]/50 hover:text-[#F9F4EB] transition-colors">
                  997 486 009 / 976 220 440 / 958 438 095
                </a>
              </li>
              <li className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 flex items-center justify-center bg-[#841B2D]/20 border border-[#841B2D]/30"
                >
                  <Mail size={14} className="text-[#841B2D]" />
                </motion.div>
                <a href="mailto:ventas@publiventa.com" className="font-body text-sm text-[#F9F4EB]/50 hover:text-[#F9F4EB] transition-colors">
                  ventas@publiventa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-8 h-8 flex items-center justify-center bg-[#1A6B3E]/20 border border-[#1A6B3E]/30 flex-shrink-0"
                >
                  <MapPin size={14} className="text-[#1A6B3E]" />
                </motion.div>
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