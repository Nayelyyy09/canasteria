import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, TreePine, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { useToast } from "@/components/ui/use-toast";

const WHATSAPP = "https://wa.me/51958438095?text=Hola,%20quiero%20más%20información";
const RECAPTCHA_SITE_KEY = "6LcDp1EtAAAAAOui-7Pi_IbuyJqgRI5u2-u4JnIF";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const recaptchaRef = useRef(null);
  const recaptchaWidgetId = useRef(null);

  useEffect(() => {
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
          callback: () => {},
          'expired-callback': () => {},
          'error-callback': () => {}
        });
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitStatus(null);

    try {
      const recaptchaToken = await getRecaptchaToken();
      console.log('Token reCAPTCHA:', recaptchaToken);
      console.log('Form data:', form);

      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus('success');
      toast({ title: "Mensaje enviado", description: "Nos pondremos en contacto contigo pronto." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      resetRecaptcha();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      toast({ title: "Error", description: error.message || "Por favor completa el captcha.", variant: "destructive" });
      resetRecaptcha();
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setSending(false);
    }
  };

  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="bg-[#F9F4EB] min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        <nav className="flex items-center gap-2 font-body text-xs text-[#1A2F23]/50">
          <Link to="/" className="hover:text-[#841B2D] transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <span className="text-[#1A2F23]">Contacto</span>
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
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359]">Hablemos</span>
            <TreePine size={18} className="text-[#B39359]" />
          </div>
          <h1 className="font-display text-5xl lg:text-7xl text-[#F9F4EB] leading-tight">
            <span className="italic text-[#841B2D]">Contacto</span>
          </h1>
          <p className="mt-6 font-body text-[#F9F4EB]/60 max-w-2xl mx-auto text-lg">
            Estamos aquí para ayudarte. Escríbenos o llámanos, responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Formulario + Info */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Formulario */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeIn} transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h2 className="font-display text-3xl text-[#1A2F23] mb-8">
              Envíanos un <span className="italic text-[#841B2D]">Mensaje</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-xs tracking-wider uppercase text-[#1A2F23]/60 mb-2">Nombre *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                    disabled={sending}
                    className="w-full bg-white border border-[#B39359]/20 px-4 py-3 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-wider uppercase text-[#1A2F23]/60 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="correo@ejemplo.com"
                    disabled={sending}
                    className="w-full bg-white border border-[#B39359]/20 px-4 py-3 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-xs tracking-wider uppercase text-[#1A2F23]/60 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="997 486 009"
                    disabled={sending}
                    className="w-full bg-white border border-[#B39359]/20 px-4 py-3 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-wider uppercase text-[#1A2F23]/60 mb-2">Asunto *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    disabled={sending}
                    className="w-full bg-white border border-[#B39359]/20 px-4 py-3 font-body text-sm text-[#1A2F23] focus:outline-none focus:border-[#841B2D] transition-colors disabled:opacity-50"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="pedido">Realizar un pedido</option>
                    <option value="corporativo">Canasta corporativa</option>
                    <option value="personalizado">Diseño personalizado</option>
                    <option value="envio">Consulta sobre envío</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block font-body text-xs tracking-wider uppercase text-[#1A2F23]/60 mb-2">Mensaje *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  disabled={sending}
                  className="w-full bg-white border border-[#B39359]/20 px-4 py-3 font-body text-sm text-[#1A2F23] placeholder:text-[#1A2F23]/30 focus:outline-none focus:border-[#841B2D] transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-start">
                <div ref={recaptchaRef}></div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className={`inline-flex items-center gap-2 px-8 py-4 font-body text-sm tracking-widest uppercase transition-colors disabled:opacity-50 ${
                  submitStatus === 'success'
                    ? 'bg-[#1A6B3E] text-[#F9F4EB]'
                    : submitStatus === 'error'
                    ? 'bg-[#841B2D] text-[#F9F4EB]'
                    : 'bg-[#841B2D] text-[#F9F4EB] hover:bg-[#6d1625]'
                }`}
              >
                {sending ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : submitStatus === 'success' ? (
                  <CheckCircle2 size={16} />
                ) : submitStatus === 'error' ? (
                  <AlertCircle size={16} />
                ) : (
                  <Send size={16} />
                )}
                {sending ? "Enviando..." : submitStatus === 'success' ? "Enviado" : "Enviar Mensaje"}
              </button>
            </form>
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeIn} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-[#1A2F23] p-8">
              <h3 className="font-display text-2xl text-[#F9F4EB] mb-6">Información de Contacto</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#841B2D]/20 border border-[#841B2D]/30 flex-shrink-0">
                    <Phone size={16} className="text-[#841B2D]" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wider uppercase text-[#B39359] mb-1">Teléfono</p>
                    <a href="tel:+51997486009" className="font-body text-sm text-[#F9F4EB]/70 hover:text-[#F9F4EB] transition-colors">
                      997 486 009 / 976 220 440 / 958 438 095
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#841B2D]/20 border border-[#841B2D]/30 flex-shrink-0">
                    <Mail size={16} className="text-[#841B2D]" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wider uppercase text-[#B39359] mb-1">Email</p>
                    <a href="mailto:ventas@canastanavidena.pe" className="font-body text-sm text-[#F9F4EB]/70 hover:text-[#F9F4EB] transition-colors">
                      ventas@canastanavidena.pe
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#1A6B3E]/20 border border-[#1A6B3E]/30 flex-shrink-0">
                    <MapPin size={16} className="text-[#1A6B3E]" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wider uppercase text-[#B39359] mb-1">Dirección</p>
                    <span className="font-body text-sm text-[#F9F4EB]/70">
                      Jr. Santo Tomás, Mz C Lt. 16-B<br />Asoc. Fundo Garagay Bajo<br />Los Olivos, Lima - Perú
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#B39359]/20 border border-[#B39359]/30 flex-shrink-0">
                    <Clock size={16} className="text-[#B39359]" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-wider uppercase text-[#B39359] mb-1">Horario</p>
                    <span className="font-body text-sm text-[#F9F4EB]/70">
                      Lun - Vie: 8:30 AM - 6:30 PM<br />
                      Sáb: 8:30 AM - 12:00 PM<br />
                      Dom: Cerrado
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-6 bg-[#1A6B3E] text-[#F9F4EB] hover:bg-[#145a32] transition-colors"
            >
              <Phone size={20} />
              <div>
                <p className="font-body text-xs tracking-wider uppercase text-[#F9F4EB]/70">WhatsApp</p>
                <p className="font-display text-lg">Chatea con nosotros</p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />

      {/* Schema ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto - Canastas Navideñas",
            url: "https://canastanavidena.pe/contacto",
            mainEntity: {
              "@type": "Organization",
              name: "Canastas Navideñas",
              telephone: "+51-955-087-991",
              email: "ventas@canastanavidena.pe",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jr. Santo Tomás, Mz C Lt. 16-B, Asoc. Fundo Garagay Bajo",
                addressLocality: "Los Olivos",
                addressRegion: "Lima",
                addressCountry: "PE",
              },
            },
          }),
        }}
      />
    </div>
  );
}