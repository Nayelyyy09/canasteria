import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Gift, Star, Truck, Phone, Mail, MapPin,
  ChevronRight, Sparkles, Heart, Award,
  Calendar, Users, Building2, PartyPopper
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const ACTIVACIONES = [
  {
    id: 1,
    title: "Canastas Corporativas",
    description: "Sorprende a tu equipo y clientes con canastas navideñas personalizadas con la identidad de tu marca.",
    icon: Building2,
    gradient: "from-[#841B2D] to-[#6d1625]",
  },
  {
    id: 2,
    title: "Eventos de Navidad",
    description: "Organizamos la activación perfecta para tus fiestas corporativas con ambientación y experiencias únicas.",
    icon: PartyPopper,
    gradient: "from-[#B39359] to-[#8a7345]",
  },
  {
    id: 3,
    title: "Regalos Personalizados",
    description: "Diseñamos packs de regalo exclusivos con productos gourmet y tarjetas de saludo personalizadas.",
    icon: Gift,
    gradient: "from-[#1A2F23] to-[#0d1a12]",
  },
  {
    id: 4,
    title: "Logística y Envíos",
    description: "Nos encargamos de la entrega en todo Lima Metropolitana con seguimiento en tiempo real.",
    icon: Truck,
    gradient: "from-[#841B2D] to-[#B39359]",
  },
];

const PASOS = [
  {
    step: "01",
    title: "Consulta",
    description: "Cuéntanos sobre tu empresa, presupuesto y objetivos de la activación navideña.",
  },
  {
    step: "02",
    title: "Diseño",
    description: "Creamos una propuesta personalizada con opciones de canastas y experiencias.",
  },
  {
    step: "03",
    title: "Producción",
    description: "Armamos cada canasta con cuidado y calidad premium, respetando tu marca.",
  },
  {
    step: "04",
    title: "Entrega",
    description: "Coordinamos la entrega puntual en la fecha y lugar que necesites.",
  },
];

const STATS = [
  { value: "500+", label: "Empresas Confían en Nosotros" },
  { value: "10K+", label: "Canastas Entregadas" },
  { value: "98%", label: "Clientes Satisfechos" },
  { value: "8+", label: "Años de Experiencia" },
];

export default function Blog() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    document.title = "Activaciones Navideñas | PubliVenta - Publicidad y Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Activaciones navideñas corporativas en Lima. Canastas navideñas personalizadas, eventos de empresa y regalos empresariales con entrega garantizada."
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PASOS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F4EB]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A2F23] overflow-hidden">
        {/* Animated snowflakes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#F9F4EB] rounded-full opacity-20"
              initial={{
                x: Math.random() * 1200,
                y: -10,
                opacity: 0,
              }}
              animate={{
                y: "100vh",
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 6,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Decorative garland */}
        <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden opacity-30">
          <svg viewBox="0 0 1200 120" className="w-full h-full text-[#B39359]">
            <path
              d="M0,60 Q150,120 300,60 Q450,0 600,60 Q750,120 900,60 Q1050,0 1200,60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            {[0, 150, 300, 450, 600, 750, 900, 1050].map((x, i) => (
              <circle key={i} cx={x} cy={60} r="6" className="fill-[#841B2D]" />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24 lg:py-36 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 bg-[#841B2D]/20 px-4 py-2 mb-6">
                <Sparkles size={14} className="text-[#B39359]" />
                <span className="font-body text-xs tracking-[0.3em] uppercase text-[#B39359]">
                  Temporada Navideña 2024
                </span>
              </span>

              <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl text-[#F9F4EB] leading-[1.1] mb-6">
                Activaciones{" "}
                <span className="italic text-[#B39359]">Navideñas</span>{" "}
                que Conectan
              </h1>

              <p className="font-body text-base lg:text-lg text-[#F9F4EB]/60 max-w-lg mb-8 leading-relaxed">
                Creamos experiencias navideñas inolvidables para empresas que buscan
                sorprender a sus equipos y clientes con canastas premium y eventos únicos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#841B2D] text-[#F9F4EB] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#6d1625] transition-all duration-300 group"
                >
                  Cotizar Ahora
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 border border-[#B39359]/40 text-[#F9F4EB] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#B39359]/10 transition-all duration-300"
                >
                  Ver Servicios
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#841B2D]/20 to-[#B39359]/20 blur-2xl" />
                <img
                  src="https://publiventa.pe/wp-content/uploads/2023/12/canasta-navideña-corporativa.jpg"
                  alt="Canasta Navideña Corporativa"
                  className="relative w-full h-auto object-cover shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#841B2D] p-6 shadow-xl">
                <p className="font-display text-3xl text-[#F9F4EB]">15%</p>
                <p className="font-body text-xs text-[#F9F4EB]/80 uppercase tracking-wider">
                  Descuento Early Bird
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" className="w-full h-auto text-[#F9F4EB]">
            <path
              fill="currentColor"
              d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#F9F4EB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl lg:text-4xl text-[#841B2D] mb-1">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-[#1A2F23]/60 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4 block">
              Nuestros Servicios
            </span>
            <h2 className="font-display text-3xl lg:text-5xl text-[#1A2F23] mb-4">
              Activaciones{" "}
              <span className="italic text-[#841B2D]">Completas</span>
            </h2>
            <p className="font-body text-sm text-[#1A2F23]/60 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales para que tu empresa viva la magia de la Navidad
              sin preocupaciones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVACIONES.map((activacion, i) => (
              <motion.div
                key={activacion.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#F9F4EB] p-8 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${activacion.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <activacion.icon size={24} className="text-[#F9F4EB]" />
                </div>
                <h3 className="font-display text-xl text-[#1A2F23] mb-3">
                  {activacion.title}
                </h3>
                <p className="font-body text-sm text-[#1A2F23]/60 leading-relaxed">
                  {activacion.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#1A2F23] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className="absolute text-[#B39359]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4 block">
              Cómo Funciona
            </span>
            <h2 className="font-display text-3xl lg:text-5xl text-[#F9F4EB] mb-4">
              Proceso{" "}
              <span className="italic text-[#B39359]">Simple</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PASOS.map((paso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative p-6 border transition-all duration-500 ${
                  activeStep === i
                    ? "bg-[#841B2D]/20 border-[#841B2D]"
                    : "bg-transparent border-[#F9F4EB]/10"
                }`}
              >
                <span className="font-display text-5xl text-[#B39359]/20 absolute top-4 right-4">
                  {paso.step}
                </span>
                <div className="relative">
                  <h3 className="font-display text-xl text-[#F9F4EB] mb-3">
                    {paso.title}
                  </h3>
                  <p className="font-body text-sm text-[#F9F4EB]/50 leading-relaxed">
                    {paso.description}
                  </p>
                </div>
                {i < PASOS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-[#B39359]/40">
                    <ChevronRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / CTA */}
      <section className="py-20 bg-[#F9F4EB]">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#841B2D] p-12 lg:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <Award size={200} className="absolute -bottom-10 -right-10 text-[#F9F4EB]" />
            </div>
            <div className="relative">
              <Heart size={32} className="mx-auto text-[#B39359] mb-6" />
              <blockquote className="font-display text-2xl lg:text-3xl text-[#F9F4EB] mb-6 leading-relaxed italic">
                "La Navidad es el momento perfecto para demostrar el valor que
                le das a tu equipo y clientes."
              </blockquote>
              <p className="font-body text-sm text-[#F9F4EB]/60 mb-8">
                En PubliVenta transformamos cada canasta en una experiencia memorable
                que fortalece relaciones y crea vínculos duraderos.
              </p>
              <a
                href="/contacto"
                className="inline-flex items-center gap-2 bg-[#F9F4EB] text-[#841B2D] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#B39359] hover:text-[#1A2F23] transition-all duration-300"
              >
                <Phone size={16} />
                Contáctanos Hoy
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#1A2F23]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-[#841B2D]/20 flex items-center justify-center mb-4">
                <Phone size={20} className="text-[#B39359]" />
              </div>
              <h4 className="font-display text-lg text-[#F9F4EB] mb-2">Llámanos</h4>
              <p className="font-body text-sm text-[#F9F4EB]/50">+51 999 888 777</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-[#841B2D]/20 flex items-center justify-center mb-4">
                <Mail size={20} className="text-[#B39359]" />
              </div>
              <h4 className="font-display text-lg text-[#F9F4EB] mb-2">Email</h4>
              <p className="font-body text-sm text-[#F9F4EB]/50">ventas@publiventa.pe</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-[#841B2D]/20 flex items-center justify-center mb-4">
                <MapPin size={20} className="text-[#B39359]" />
              </div>
              <h4 className="font-display text-lg text-[#F9F4EB] mb-2">Ubicación</h4>
              <p className="font-body text-sm text-[#F9F4EB]/50">Lima, Perú</p>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
