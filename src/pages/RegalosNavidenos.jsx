import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Gift, Heart, Star, Truck, Shield, Award,
  ChevronRight, Sparkles, Users, Building2, Home,
  Package, Coffee, Wine, Cookie, Candy, ShoppingBag
} from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const CATEGORIAS_REGALOS = [
  {
    id: 1,
    title: "Para Empresa",
    description: "Sorprende a tu equipo y clientes con regalos corporativos que reflejen los valores de tu marca.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1549465220-8098e55c9b74?w=600",
    items: ["Canastas ejecutivas", "Packs de bienvenida", "Agradecimiento a clientes"],
  },
  {
    id: 2,
    title: "Para Familia",
    description: "Regalos que unen a la familia y crean momentos inolvidables alrededor de la mesa navideña.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a814?w=600",
    items: ["Canastas familiares", "Cestas gourmet", "Desayunos especiales"],
  },
  {
    id: 3,
    title: "Para Amigos",
    description: "Detalles únicos y personalizados para sorprender a tus amigos en esta temporada.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600",
    items: ["Gift boxes", "Botellas premium", "Experiencias gourmet"],
  },
];

const PRODUCTOS_DESTACADOS = [
  {
    id: 1,
    name: "Canasta Clásica Navideña",
    price: "S/ 189",
    description: "Selección de productos gourmet en caja decorativa navideña.",
    badge: "Más Vendido",
  },
  {
    id: 2,
    name: "Gift Box Premium",
    price: "S/ 299",
    description: "Experiencia gourmet con vino, quesos y chocolates artesanales.",
    badge: "Exclusivo",
  },
  {
    id: 3,
    name: "Canasta Familiar",
    price: "S/ 399",
    description: "Para compartir en familia: dulces, snacks y bebidas premium.",
    badge: "Para Familias",
  },
  {
    id: 4,
    name: "Pack Corporativo Elite",
    price: "S/ 450",
    description: "La opción más exclusiva para sorprender a tus clientes más importantes.",
    badge: "Corporativo",
  },
];

const VENTAJAS = [
  {
    icon: Truck,
    title: "Envío Gratuito",
    description: "En compras mayores a S/ 200 en Lima Metropolitana.",
  },
  {
    icon: Gift,
    title: "Empaque Premium",
    description: "Cada regalo viene con presentación navideña exclusiva.",
  },
  {
    icon: Heart,
    title: "Tarjeta Personalizada",
    description: "Incluye tarjeta de saludo con mensaje personalizado.",
  },
  {
    icon: Shield,
    title: "Garantía de Satisfacción",
    description: "Si no estás satisfecho, te devolvemos tu dinero.",
  },
];

const IDEAS_REGALOS = [
  { icon: Coffee, label: "Desayunos Navideños" },
  { icon: Wine, label: "Vinos y Licores" },
  { icon: Cookie, label: "Dulces Artesanales" },
  { icon: Package, label: "Cestas Gourmet" },
  { icon: Candy, label: "Chocolates Premium" },
  { icon: ShoppingBag, label: "Packs de Regalo" },
];

export default function RegalosNavidenos() {
  useEffect(() => {
    document.title = "Regalos Navideños | PubliVenta - Publicidad y Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Regalos navideños únicos y personalizados en Lima. Canastas gourmet, gift boxes y cestas navideñas para empresas, familia y amigos. Envío garantizado."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F4EB]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1A2F23] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: i * 0.1 }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Star size={16} className="text-[#B39359]" />
            </motion.div>
          ))}
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
                Regalos{" "}
                <span className="italic text-[#B39359]">Navideños</span>{" "}
                que Enamoran
              </h1>

              <p className="font-body text-base lg:text-lg text-[#F9F4EB]/60 max-w-lg mb-8 leading-relaxed">
                Encuentra el regalo perfecto para cada persona especial. Desde canastas
                gourmet hasta gift boxes exclusivos, creamos momentos inolvidables.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#categorias"
                  className="inline-flex items-center justify-center gap-2 bg-[#841B2D] text-[#F9F4EB] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#6d1625] transition-all duration-300 group"
                >
                  Ver Regalos
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 border border-[#B39359]/40 text-[#F9F4EB] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#B39359]/10 transition-all duration-300"
                >
                  Cotizar Ahora
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
                  alt="Regalo Navideño Premium"
                  className="relative w-full h-auto object-cover shadow-2xl"
                />
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

      {/* Ideas de Regalos */}
      <section className="py-12 bg-[#F9F4EB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-wrap justify-center gap-4">
            {IDEAS_REGALOS.map((idea, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 bg-white px-5 py-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <idea.icon size={18} className="text-[#841B2D]" />
                <span className="font-body text-sm text-[#1A2F23]">{idea.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4 block">
              Regalos por Categoría
            </span>
            <h2 className="font-display text-3xl lg:text-5xl text-[#1A2F23] mb-4">
              Encuentra el{" "}
              <span className="italic text-[#841B2D]">Regalo Perfecto</span>
            </h2>
            <p className="font-body text-sm text-[#1A2F23]/60 max-w-2xl mx-auto">
              Tenemos opciones para cada ocasión y cada persona especial en tu vida.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {CATEGORIAS_REGALOS.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative overflow-hidden bg-[#1A2F23]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F23] via-[#1A2F23]/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-12 h-12 bg-[#841B2D] flex items-center justify-center mb-4">
                    <cat.icon size={24} className="text-[#F9F4EB]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#F9F4EB] mb-2">
                    {cat.title}
                  </h3>
                  <p className="font-body text-sm text-[#F9F4EB]/60 mb-4">
                    {cat.description}
                  </p>
                  <ul className="space-y-1">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-[#B39359]">
                        <ChevronRight size={12} />
                        <span className="font-body text-xs">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="py-20 bg-[#1A2F23]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4 block">
              Los Más Buscados
            </span>
            <h2 className="font-display text-3xl lg:text-5xl text-[#F9F4EB] mb-4">
              Regalos{" "}
              <span className="italic text-[#B39359]">Destacados</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTOS_DESTACADOS.map((producto, i) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-[#F9F4EB] overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#841B2D]/10 to-[#B39359]/10 flex items-center justify-center">
                  <Gift size={64} className="text-[#841B2D]/20" />
                  <span className="absolute top-4 left-4 bg-[#841B2D] text-[#F9F4EB] px-3 py-1 font-body text-[10px] tracking-wider uppercase">
                    {producto.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg text-[#1A2F23] mb-2">
                    {producto.name}
                  </h3>
                  <p className="font-body text-sm text-[#1A2F23]/60 mb-4">
                    {producto.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl text-[#841B2D]">
                      {producto.price}
                    </span>
                    <Link
                      to="/contacto"
                      className="font-body text-xs tracking-wider uppercase text-[#841B2D] hover:text-[#6d1625] transition-colors"
                    >
                      Cotizar →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-20 bg-[#F9F4EB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4 block">
              ¿Por Qué Elegirnos?
            </span>
            <h2 className="font-display text-3xl lg:text-5xl text-[#1A2F23]">
              Nuestras{" "}
              <span className="italic text-[#841B2D]">Ventajas</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VENTAJAS.map((ventaja, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#841B2D]/10 flex items-center justify-center mx-auto mb-4">
                  <ventaja.icon size={28} className="text-[#841B2D]" />
                </div>
                <h3 className="font-display text-lg text-[#1A2F23] mb-2">
                  {ventaja.title}
                </h3>
                <p className="font-body text-sm text-[#1A2F23]/60">
                  {ventaja.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Personalización */}
      <section className="py-20 bg-[#841B2D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <Gift
              key={i}
              size={100}
              className="absolute text-[#F9F4EB]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Award size={40} className="mx-auto text-[#B39359] mb-6" />
            <h2 className="font-display text-3xl lg:text-5xl text-[#F9F4EB] mb-6">
              ¿Quieres algo{" "}
              <span className="italic text-[#B39359]">Totalmente Personalizado</span>?
            </h2>
            <p className="font-body text-base text-[#F9F4EB]/70 max-w-2xl mx-auto mb-8">
              Creamos regalos a medida con productos seleccionados especialmente para ti.
              Incluye packaging personalizado, tarjetas con tu mensaje y entrega programada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#F9F4EB] text-[#841B2D] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#B39359] transition-all duration-300"
              >
                Solicitar Personalización
              </a>
              <a
                href="https://wa.me/51997486009?text=Hola,%20me%20interesa%20un%20regalo%20personalizado"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#F9F4EB]/40 text-[#F9F4EB] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#F9F4EB]/10 transition-all duration-300"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4 block">
              Testimonios
            </span>
            <h2 className="font-display text-3xl lg:text-5xl text-[#1A2F23]">
              Lo Que Dicen Nuestros{" "}
              <span className="italic text-[#841B2D]">Clientes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María García",
                company: "Tech Solutions SAC",
                text: "Las canastas corporativas superaron todas nuestras expectativas. Nuestros clientes quedaron encantados.",
              },
              {
                name: "Carlos Mendoza",
                company: "Familia Mendoza",
                text: "El regalo perfecto para nuestra reunión familiar. La calidad de los productos es excepcional.",
              },
              {
                name: "Ana Torres",
                company: "Grupo Inmobiliario Atlas",
                text: "Excelente servicio y atención personalizada. Ya es el tercer año que encargamos nuestros regalos navideños con ellos.",
              },
            ].map((testimonio, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F9F4EB] p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-[#B39359] text-[#B39359]" />
                  ))}
                </div>
                <p className="font-body text-sm text-[#1A2F23]/70 mb-6 italic">
                  "{testimonio.text}"
                </p>
                <div>
                  <p className="font-display text-sm text-[#1A2F23]">
                    {testimonio.name}
                  </p>
                  <p className="font-body text-xs text-[#1A2F23]/50">
                    {testimonio.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
