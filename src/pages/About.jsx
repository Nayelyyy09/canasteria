import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Heart, Shield, Sparkles, Award, Users, Package, Phone, TreePine } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const WHATSAPP = "https://wa.me/51997486009?text=Hola,%20quiero%20más%20información%20sobre%20sus%20canastas%20navideñas";

const values = [
  { icon: Heart, title: "Pasión Artesanal", desc: "Cada canasta es elaborada a mano con dedicación y amor por los detalles." },
  { icon: Shield, title: "Calidad Garantizada", desc: "Seleccionamos cuidadosamente cada producto para asegurar la mejor experiencia." },
  { icon: Sparkles, title: "Innovación Constante", desc: "Renovamos nuestras colecciones cada temporada con tendencias y sabores únicos." },
  { icon: Award, title: "Compromiso Total", desc: "Tu satisfacción es nuestra prioridad. Cumplimos cada entrega con puntualidad." },
];

const stats = [
  { number: "5,000+", label: "Canastas Entregadas" },
  { number: "98%", label: "Clientes Satisfechos" },
  { number: "8", label: "Años de Experiencia" },
  { number: "50+", label: "Marcas Premium" },
];

export default function About() {
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="bg-[#F9F4EB] min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        <nav className="flex items-center gap-2 font-body text-xs text-[#1A2F23]/50">
          <Link to="/" className="hover:text-[#841B2D] transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <span className="text-[#1A2F23]">Sobre Nosotros</span>
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
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359]">Nuestra Historia</span>
            <TreePine size={18} className="text-[#B39359]" />
          </div>
          <h1 className="font-display text-5xl lg:text-7xl text-[#F9F4EB] leading-tight">
            Sobre <span className="italic text-[#841B2D]">Nosotros</span>
          </h1>
          <p className="mt-6 font-body text-[#F9F4EB]/60 max-w-2xl mx-auto text-lg">
            Conoce la historia detrás de las canastas navideñas más exclusivas de Lima.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn} transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          <div>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#841B2D]">Nuestra Historia</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-[#1A2F23] leading-tight">
              Tradición y <span className="italic text-[#841B2D]">Excelencia</span>
            </h2>
            <div className="mt-8 space-y-4 font-body text-sm text-[#1A2F23]/60 leading-relaxed">
              <p>
                Canastas Navideñas nació en 2017 con una visión clara: transformar la tradición de regalar canastas durante las fiestas navideñas en una experiencia de lujo accesible. Todo comenzó cuando nuestra fundadora, apasionada por la gastronomía y el arte de obsequiar, decidió crear canastas que no solo fueran regalos, sino verdaderas experiencias sensoriales para quienes las recibían.
              </p>
              <p>
                Desde nuestros inicios en un pequeño taller artesanal, hemos crecido hasta convertirnos en la marca líder en canastas navideñas corporativas y familiares en Lima. Cada temporada, nuestro equipo de expertos curadores selecciona cuidadosamente productos gourmet nacionales e internacionales, combinando chocolates belgas, vinos importados, quesos artesanales y dulces tradicionales mexicanos en composiciones que despiertan los sentidos.
              </p>
              <p>
                Nuestro compromiso va más allá de la presentación. Trabajamos directamente con productores locales y marcas premium para garantizar que cada ingrediente cumpla con los más altos estándares de calidad. La sostenibilidad es parte de nuestra filosofía: utilizamos materiales reciclables y biodegradables en nuestros empaques, sin renunciar a la elegancia que nos caracteriza.
              </p>
              <p>
                Con más de 5,000 canastas entregadas y una tasa de satisfacción del 98%, nos enorgullece ser parte de los momentos más especiales de cientos de empresas y familias. Cada canasta que sale de nuestro taller lleva consigo la garantía de una experiencia inolvidable, el sello de la artesanía mexicana y el compromiso de superar las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#1A2F23] p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="bg-[#F9F4EB]/5 border border-[#F9F4EB]/10 p-6 text-center">
                    <p className="font-display text-3xl lg:text-4xl text-[#B39359]">{s.number}</p>
                    <p className="mt-2 font-body text-xs text-[#F9F4EB]/50 tracking-wider uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Valores */}
      <section className="bg-[#1A2F23] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-[#B39359]">Lo Que Nos Define</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-[#F9F4EB]">
              Nuestros <span className="italic text-[#841B2D]">Valores</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#F9F4EB]/5 border border-[#F9F4EB]/10 p-8 hover:border-[#B39359]/30 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-[#841B2D]/20 border border-[#841B2D]/30 mb-5">
                  <v.icon size={22} className="text-[#841B2D]" />
                </div>
                <h3 className="font-display text-xl text-[#F9F4EB]">{v.title}</h3>
                <p className="mt-3 font-body text-sm text-[#F9F4EB]/50 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn} transition={{ duration: 0.6 }}
          className="bg-[#1A2F23] p-12 lg:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#841B2D] rounded-full blur-3xl opacity-20" />
          <div className="relative">
            <Users size={40} className="text-[#B39359] mx-auto mb-6" />
            <h2 className="font-display text-3xl lg:text-5xl text-[#F9F4EB]">
              ¿Listo para <span className="italic text-[#841B2D]">Sorprender</span>?
            </h2>
            <p className="mt-4 font-body text-sm text-[#F9F4EB]/50 max-w-lg mx-auto">
              Contacta a nuestro equipo y déjanos crear la canasta navideña perfecta para ti o tu empresa.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-[#1A6B3E] text-[#F9F4EB] font-body text-sm tracking-widest uppercase hover:bg-[#145a32] transition-colors"
            >
              <Phone size={16} />
              Hablar por WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      <FooterSection />

      {/* Schema Organization */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Canastas Navideñas",
            url: "https://canastanavidena.pe",
            logo: "https://canastanavidena.pe/favicon.png",
            description: "Canastas navideñas artesanales de lujo para empresas y familias en Lima.",
            foundingDate: "2017",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Jr. Santo Tomás, Mz C Lt. 16-B, Asoc. Fundo Garagay Bajo",
              addressLocality: "Los Olivos",
              addressRegion: "Lima",
              addressCountry: "PE",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+51-955-087-991",
              contactType: "customer service",
            },
          }),
        }}
      />
    </div>
  );
}