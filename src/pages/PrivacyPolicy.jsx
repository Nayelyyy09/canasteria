import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Shield, TreePine } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function PrivacyPolicy() {
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        <nav className="flex items-center gap-2 font-body text-xs text-[#0D2818]/50">
          <Link to="/" className="hover:text-[#B22234] transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <span className="text-[#0D2818]">Política de Privacidad</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0D2818] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#B22234] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C9A96E] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-16 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <TreePine size={18} className="text-[#C9A96E]" />
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#C9A96E]">Legal</span>
            <TreePine size={18} className="text-[#C9A96E]" />
          </div>
          <h1 className="font-display text-5xl lg:text-7xl text-[#FAF7F2] leading-tight">
            Política de <span className="italic text-[#B22234]">Privacidad</span>
          </h1>
          <p className="mt-6 font-body text-[#FAF7F2]/60 max-w-2xl mx-auto text-lg">
            Conoce cómo protegemos y manejamos tu información personal.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-16 py-20 lg:py-28">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={fadeIn} transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 flex items-center justify-center bg-[#1B5E3B]/10 border border-[#1B5E3B]/20">
              <Shield size={18} className="text-[#1B5E3B]" />
            </div>
            <p className="font-body text-xs text-[#0D2818]/40">Última actualización: Junio 2026</p>
          </div>

          <div className="prose prose-lg max-w-none font-body text-[#0D2818]/70 leading-relaxed space-y-8">
            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">1. Información del Responsable</h2>
              <p>
                En cumplimiento de la Ley N° 29733, Ley de Protección de Datos Personales del Perú, y su reglamento aprobado por Decreto Supremo N° 003-2013-JUS, le informamos que los datos personales que usted proporcione serán tratados por:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Razón social:</strong> Canastas Navideñas E.I.R.L.</li>
                <li><strong>RUC:</strong> 20601234567</li>
                <li><strong>Dirección:</strong> Jr. Santo Tomás, Mz C Lt. 16-B, Asoc. Fundo Garagay Bajo, Los Olivos - Lima - Perú</li>
                <li><strong>Correo electrónico:</strong> ventas@canastanavidena.pe</li>
                <li><strong>Teléfono:</strong> 997 486 009</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">2. Datos Personales Recopilados</h2>
              <p>Podemos recopilar los siguientes datos personales cuando usted utiliza nuestros servicios:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Datos de identificación: nombre completo, número de documento de identidad (DNI o RUC).</li>
                <li>Datos de contacto: número de teléfono, correo electrónico, dirección domiciliaria.</li>
                <li>Datos de facturación: razón social, dirección fiscal, régimen tributario.</li>
                <li>Datos de navegación: dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia.</li>
                <li>Datos de transacciones: historial de compras, productos adquiridos, montos y fechas.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">3. Finalidad del Tratamiento</h2>
              <p>Sus datos personales serán utilizados para las siguientes finalidades:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Gestionar y procesar sus pedidos de canastas navideñas.</li>
                <li>Enviar información sobre productos, promociones y ofertas especiales (previo consentimiento).</li>
                <li>Elaborar facturas electrónicas conforme a las normas de la SUNAT.</li>
                <li>Procesar pagos y gestionar devoluciones o reembolsos.</li>
                <li>Mejorar nuestros productos y servicios mediante análisis estadísticos.</li>
                <li>Cumplir obligaciones legales y atender requerimientos de autoridades competentes.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">4. Base Legal del Tratamiento</h2>
              <p>El tratamiento de sus datos personales se fundamenta en:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Su consentimiento expreso e informado.</li>
                <li>La ejecución de un contrato o precontrato del que usted es parte.</li>
                <li>El cumplimiento de una obligación legal a nuestro cargo.</li>
                <li>El interés legítimo de mejorar nuestros servicios y prevenir fraudes.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">5. Conservación de Datos</h2>
              <p>
                Sus datos personales serán conservados mientras se mantenga la relación comercial y por un plazo máximo de 10 años após la última transacción, o el plazo que establezcan las normas tributarias y contables aplicables en Perú.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">6. Derechos del Titular</h2>
              <p>De conformidad con la Ley N° 29733, usted tiene derecho a:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Acceso:</strong> Solicitar información sobre los datos personales que tratamos.</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
                <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para finalidades específicas.</li>
                <li><strong>Revocación:</strong> Retirar su consentimiento en cualquier momento.</li>
                <li><strong>Portabilidad:</strong> Solicitar sus datos en un formato estructurado y de uso común.</li>
              </ul>
              <p className="mt-2">
                Para ejercer estos derechos, puede contactarnos a través de ventas@canastanavidena.pe o al 997 486 009.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">7. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Entre estas medidas se incluyen:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Encriptación SSL de 256 bits en todas las transmisiones de datos.</li>
                <li>Acceso restringido a datos personales solo al personal autorizado.</li>
                <li>Monitoreo regular de nuestros sistemas de seguridad.</li>
                <li>Uso de pasarelas de pago certificadas PCI DSS.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">8. Transferencias Internacionales</h2>
              <p>
                Sus datos personales podrán ser transferidos a servidores ubicados fuera del territorio peruano exclusivamente para fines de almacenamiento en la nube, siempre con las garantías adecuadas de seguridad y confidencialidad conforme a la normativa vigente.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">9. Cookies</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Puede configurar su navegador para rechazar cookies, aunque esto podría afectar la funcionalidad del sitio.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">10. Cambios en esta Política</h2>
              <p>
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización. Le recomendamos revisar periódicamente este documento.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#0D2818] mb-3">11. Contacto</h2>
              <p>Si tiene dudas o wishies ejercer sus derechos sobre sus datos personales, puede contactarnos:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Correo:</strong> ventas@canastanavidena.pe</li>
                <li><strong>Teléfono:</strong> 997 486 009 / 976 220 440 / 958 438 095</li>
                <li><strong>Dirección:</strong> Jr. Santo Tomás, Mz C Lt. 16-B, Asoc. Fundo Garagay Bajo, Los Olivos - Lima - Perú</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <FooterSection />
    </div>
  );
}
