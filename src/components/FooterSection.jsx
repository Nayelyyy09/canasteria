import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight, Phone, Mail, MapPin, TreePine,
  Instagram, CreditCard, Loader2, CheckCircle2, AlertCircle, BookOpen,
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
    <footer id="contacto" className="bg-[#0A461A] text-[#FAF7F2] relative overflow-hidden">
      {/* Festive top border */}
      <div className="h-1.5 bg-gradient-to-r from-[#7E0E0F] via-[#C9A96E] to-[#0A461A]" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-5 lg:py-7 border-b border-[#FAF7F2]/10"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <TreePine size={14} className="text-[#7E0E0F]" />
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-[#C9A96E]">
              Únete al Club Navideño
            </span>
            <TreePine size={14} className="text-[#0A461A]" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-display text-2xl lg:text-3xl text-[#FAF7F2] leading-none"
          >
            Recibe Ofertas
            <br />
            <span className="italic text-[#7E0E0F]">Exclusivas</span>
          </motion.h2>
          <p className="mt-2 font-body text-xs text-[#FAF7F2] max-w-sm mx-auto">
            Suscríbete y sé el primero en conocer nuestras promociones
            navideñas y colecciones especiales.
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-4 max-w-sm mx-auto"
          >
            <div className="flex items-center bg-[#FAF7F2]/5 border border-[#FAF7F2]/15 hover:border-[#FAF7F2]/30 transition-colors duration-300">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 bg-transparent py-2 px-4 font-body text-xs text-[#FAF7F2] placeholder:text-[#FAF7F2] focus:outline-none"
                required
                disabled={isSubmitting}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 transition-all duration-300 flex items-center justify-center min-w-[40px] ${
                  submitStatus === 'success'
                    ? 'bg-[#0A461A] text-[#FAF7F2]'
                    : submitStatus === 'error'
                    ? 'bg-[#7E0E0F] text-[#FAF7F2]'
                    : 'bg-[#7E0E0F] text-[#FAF7F2] hover:bg-[#7E0E0F]'
                } disabled:opacity-70`}
              >
                {isSubmitting ? (
                  <Loader2 size={16} strokeWidth={1.5} className="animate-spin" />
                ) : submitStatus === 'success' ? (
                  <CheckCircle2 size={16} strokeWidth={1.5} />
                ) : submitStatus === 'error' ? (
                  <AlertCircle size={16} strokeWidth={1.5} />
                ) : (
                  <ArrowRight size={16} strokeWidth={1.5} />
                )}
              </motion.button>
            </div>
            {/* reCAPTCHA v2 Widget */}
            <div className="mt-3 flex justify-center">
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
                src="https://canastanavidena.pe/wp-content/uploads/2026/07/Logo_finales.png"
                alt="Publiventa"
                className="h-20 w-auto"
              />
            </div>
            <p className="font-body text-xs text-[#FAF7F2] leading-relaxed">
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
                className="w-9 h-9 flex items-center justify-center border border-[#FAF7F2]/15 hover:bg-[#7E0E0F] hover:border-[#7E0E0F] text-[#FAF7F2] hover:text-[#FAF7F2] transition-colors"
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.tiktok.com/@publiventa_publicidad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-[#FAF7F2]/15 hover:bg-[#7E0E0F] hover:border-[#7E0E0F] text-[#FAF7F2] hover:text-[#FAF7F2] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.89 2.89 2.89 0 0 1 2.88-2.89c.28 0 .54.04.79.1V9a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.18z"/>
                </svg>
              </motion.a>
            </div>
            <a
              href="https://publiventa.pe/libro-de-reclamaciones/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block hover:opacity-80 transition-opacity"
              title="Libro de Reclamaciones"
            >
              <img
                src="https://publiventa.pe/wp-content/uploads/2026/03/Libro-reclamaciones_1.png"
                alt="Libro de Reclamaciones"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-[#C9A96E] mb-4">
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
                      className="font-body text-sm text-[#FAF7F2] hover:text-[#7E0E0F] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="font-body text-sm text-[#FAF7F2] hover:text-[#7E0E0F] transition-colors"
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
            <p className="font-body text-xs tracking-widest uppercase text-[#C9A96E] mb-4">
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
                { label: "Libro de Reclamaciones", href: "https://publiventa.pe/libro-de-reclamaciones/", isExternal: true },
              ].map((link) => (
                <li key={link.label}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-[#FAF7F2] hover:text-[#7E0E0F] transition-colors flex items-center gap-2"
                    >
                      {link.label}
                      <BookOpen size={12} className="text-[#C9A96E]" />
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      className="font-body text-sm text-[#FAF7F2] hover:text-[#7E0E0F] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-[#C9A96E] mb-4">
              Contáctanos
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 flex items-center justify-center bg-[#FAF7F2]/10 border border-[#FAF7F2]/20"
                >
                  <Phone size={14} className="text-[#FAF7F2]" />
                </motion.div>
                <a href="tel:+51997486009" className="font-body text-sm text-[#FAF7F2] hover:text-[#FAF7F2] transition-colors">
                  997 486 009 / 976 220 440 / 958 438 095
                </a>
              </li>
              <li className="flex items-center gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 flex items-center justify-center bg-[#FAF7F2]/10 border border-[#FAF7F2]/20"
                >
                  <Mail size={14} className="text-[#FAF7F2]" />
                </motion.div>
                <a href="mailto:ventas@publiventa.com" className="font-body text-sm text-[#FAF7F2] hover:text-[#FAF7F2] transition-colors">
                  ventas@publiventa.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-8 h-8 flex items-center justify-center bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 flex-shrink-0"
                >
                  <MapPin size={14} className="text-[#FAF7F2]" />
                </motion.div>
                <span className="font-body text-sm text-[#FAF7F2]">
                  Jr. Santo Tomás, Mz C Lt. 16-B<br />Los Olivos, Lima - Perú
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment methods */}
        <div className="py-6 border-t border-[#FAF7F2]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <CreditCard size={16} className="text-[#FAF7F2]" />
            <span className="font-body text-xs text-[#FAF7F2]">Métodos de pago:</span>
            <div className="flex gap-2">
              {["VISA", "MC", "AMEX", "PAY"].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 border border-[#FAF7F2]/15 text-[10px] font-body text-[#FAF7F2]"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
          <p className="font-body text-xs text-[#FAF7F2]">
            © 2026 Publiventa. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}