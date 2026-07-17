import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, MapPin, User, Tag,
  Phone, Search, TreePine,
} from "lucide-react";
import { CATEGORIES_FULL } from "@/lib/products";
import { Link, useNavigate } from "react-router-dom";

const MEGA_MENU_ITEMS = [
  {
    group: "Canastas Navideñas",
    items: [
      { label: "Ejecutivas", slug: "ejecutivas" },
      { label: "Exclusivas", slug: "exclusivas" },
      { label: "Familiares", slug: "familiares" },
      { label: "Corporativas", slug: "corporativas" },
    ],
  },
  {
    group: "Cestas y Regalos",
    items: [
      { label: "Cestas Gourmet", slug: "cestas-gourmet" },
      { label: "Regalos Navideños", slug: "regalos-navidenos" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [addressOpen, setAddressOpen] = useState(false);
  const [address, setAddress] = useState("Lima, Perú");
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategoryClick = (slug) => {
    setMegaOpen(false);
    setMenuOpen(false);
    navigate(`/canastas-navidenas/${slug}`);
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#7E0E0F] text-[#FAF7F2] text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setAddressOpen(!addressOpen)}
              className="flex items-center gap-1.5 hover:text-[#C9A96E] transition-colors"
            >
              <MapPin size={13} />
              <span>Enviar a: {address}</span>
              <ChevronDown size={12} />
            </button>
            <button
              onClick={() => navigate("/regalos-navidenos")}
              className="flex items-center gap-1.5 hover:text-[#C9A96E] transition-colors"
            >
              <Tag size={13} />
              <span>Regalos Navideños</span>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo("#contacto")}
              className="flex items-center gap-1.5 hover:text-[#C9A96E] transition-colors"
            >
              <Phone size={13} />
              <span>Contáctanos</span>
            </button>
          </div>
        </div>
      </div>

      {/* Address dropdown */}
      <AnimatePresence>
        {addressOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-[#7E0E0F] border-t border-[#FAF7F2]/10 overflow-hidden hidden md:block"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-16 py-3 flex items-center gap-3">
              <MapPin size={14} className="text-[#C9A96E]" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Ingresa tu dirección de envío"
                className="bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 px-3 py-1.5 text-[#FAF7F2] text-xs placeholder:text-[#FAF7F2]/40 focus:outline-none focus:border-[#C9A96E] flex-1 max-w-xs"
              />
              <button
                onClick={() => setAddressOpen(false)}
                className="text-[#C9A96E] hover:text-[#FAF7F2] text-xs font-body transition-colors"
              >
                Confirmar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0A461A]/95 backdrop-blur-md shadow-xl"
          : "bg-[#0A461A]/90 backdrop-blur-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 relative group">
            <img
              src="https://publiventa.pe/wp-content/uploads/2017/07/publiventa-footer-.png"
              alt="Publiventa"
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="font-body text-sm tracking-widest uppercase text-[#FAF7F2] hover:text-[#C9A96E] transition-colors"
            >
              Inicio
            </Link>

            {/* Mega menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button className="flex items-center gap-1 font-body text-sm tracking-widest uppercase text-[#FAF7F2] hover:text-[#C9A96E] transition-colors">
                Canastas Navideñas
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Mega menu panel */}
              <AnimatePresence>
                {megaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-[#FAF7F2] shadow-2xl border border-[#C9A96E]/20 p-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {MEGA_MENU_ITEMS.map((group) => (
                        <div key={group.group}>
                          <p className="font-body text-xs tracking-widest uppercase text-[#7E0E0F] mb-3">
                            {group.group}
                          </p>
                          <ul className="space-y-2">
                            {group.items.map((item) => {
                              const cat = CATEGORIES_FULL.find((c) => c.slug === item.slug);
                              return (
                                <li key={item.slug}>
                                  <button
                                    onClick={() => handleCategoryClick(item.slug)}
                                    className="group flex items-start gap-3 text-left w-full"
                                  >
                                    {cat && (
                                      <img
                                        src={cat.image}
                                        alt=""
                                        className="w-12 h-12 object-cover flex-shrink-0"
                                      />
                                    )}
                                    <div>
                                      <p className="font-display text-sm text-[#0A461A] group-hover:text-[#7E0E0F] transition-colors">
                                        {item.label}
                                      </p>
                                      {cat && (
                                        <p className="font-body text-xs text-[#0A461A]/40 line-clamp-1 mt-0.5">
                                          {cat.description}
                                        </p>
                                      )}
                                    </div>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => handleCategoryClick("ejecutivas")}
                      className="mt-4 w-full text-center font-body text-xs tracking-widest uppercase text-[#7E0E0F] hover:text-[#7E0E0F] border-t border-[#C9A96E]/20 pt-4 transition-colors"
                    >
                      Ver toda la colección
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/activaciones"
              className="font-body text-sm tracking-widest uppercase text-[#FAF7F2] hover:text-[#C9A96E] transition-colors"
            >
              Activaciones
            </Link>
            <Link
              to="/regalos-navidenos"
              className="font-body text-sm tracking-widest uppercase text-[#FAF7F2] hover:text-[#C9A96E] transition-colors"
            >
              Regalos Navideños
            </Link>
            <Link
              to="/nosotros"
              className="font-body text-sm tracking-widest uppercase text-[#FAF7F2] hover:text-[#C9A96E] transition-colors"
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              className="font-body text-sm tracking-widest uppercase text-[#FAF7F2] hover:text-[#C9A96E] transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 lg:gap-5">
            <button className="hidden lg:flex text-[#FAF7F2] hover:text-[#C9A96E] transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-[#FAF7F2]"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Divisor festivo inferior en el navbar */}
        <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden pointer-events-none">
          <svg
            className="w-full h-full text-[#C9A96E]/40"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q5,1.5 10,0 Q15,1.5 20,0 Q25,1.5 30,0 Q35,1.5 40,0 Q45,1.5 50,0 Q55,1.5 60,0 Q65,1.5 70,0 Q75,1.5 80,0 Q85,1.5 90,0 Q95,1.5 100,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.25"
            />
            {[...Array(10)].map((_, i) => (
              <circle
                key={i}
                cx={5 + i * 10}
                cy={1}
                r="0.25"
                className="fill-current text-[#7E0E0F]"
              />
            ))}
          </svg>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0A461A] flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#C9A96E]/20">
              <span className="font-display text-xl text-[#FAF7F2]">Menú</span>
              <button onClick={() => setMenuOpen(false)} className="text-[#FAF7F2]">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col px-6 py-4">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="py-3 font-display text-xl text-[#FAF7F2] border-b border-[#C9A96E]/10 text-left"
              >
                Inicio
              </Link>

              <p className="py-3 font-display text-xl text-[#FAF7F2] border-b border-[#C9A96E]/10">
                Canastas Navideñas
              </p>
              <div className="grid grid-cols-2 gap-3 py-3">
                {MEGA_MENU_ITEMS.map((group) =>
                  group.items.map((item) => {
                    const cat = CATEGORIES_FULL.find((c) => c.slug === item.slug);
                    return (
                      <button
                        key={item.slug}
                        onClick={() => handleCategoryClick(item.slug)}
                        className="flex items-center gap-2 text-left"
                      >
                        {cat && <img src={cat.image} alt="" className="w-12 h-12 object-cover" />}
                        <span className="font-body text-sm text-[#FAF7F2]">{item.label}</span>
                      </button>
                    );
                  })
                )}
              </div>

              <Link
                to="/activaciones"
                onClick={() => setMenuOpen(false)}
                className="py-3 font-display text-xl text-[#FAF7F2] border-b border-[#C9A96E]/10 text-left"
              >
                Activaciones
              </Link>
              <Link
                to="/regalos-navidenos"
                onClick={() => setMenuOpen(false)}
                className="py-3 font-display text-xl text-[#FAF7F2] border-b border-[#C9A96E]/10 text-left"
              >
                Regalos Navideños
              </Link>
              <Link
                to="/nosotros"
                onClick={() => setMenuOpen(false)}
                className="py-3 font-display text-xl text-[#FAF7F2] border-b border-[#C9A96E]/10 text-left"
              >
                Nosotros
              </Link>
              <Link
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                className="py-3 font-display text-xl text-[#FAF7F2] border-b border-[#C9A96E]/10 text-left"
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
