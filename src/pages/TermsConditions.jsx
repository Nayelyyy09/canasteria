import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, FileText, TreePine } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function TermsConditions() {
  const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className="bg-[#F9F4EB] min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4">
        <nav className="flex items-center gap-2 font-body text-xs text-[#1A2F23]/50">
          <Link to="/" className="hover:text-[#841B2D] transition-colors">Inicio</Link>
          <ChevronRight size={12} />
          <span className="text-[#1A2F23]">Términos y Condiciones</span>
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
            <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359]">Legal</span>
            <TreePine size={18} className="text-[#B39359]" />
          </div>
          <h1 className="font-display text-5xl lg:text-7xl text-[#F9F4EB] leading-tight">
            Términos y <span className="italic text-[#841B2D]">Condiciones</span>
          </h1>
          <p className="mt-6 font-body text-[#F9F4EB]/60 max-w-2xl mx-auto text-lg">
            Términos de uso y condiciones generales de contratación.
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
            <div className="w-10 h-10 flex items-center justify-center bg-[#841B2D]/10 border border-[#841B2D]/20">
              <FileText size={18} className="text-[#841B2D]" />
            </div>
            <p className="font-body text-xs text-[#1A2F23]/40">Última actualización: Junio 2026</p>
          </div>

          <div className="prose prose-lg max-w-none font-body text-[#1A2F23]/70 leading-relaxed space-y-8">
            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">1. Identificación del Prestador</h2>
              <p>Los presentes Términos y Condiciones regulan el uso del sitio web canastanavidena.pe y la prestación de servicios de:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Razón social:</strong> Canastas Navideñas E.I.R.L.</li>
                <li><strong>RUC:</strong> 20601234567</li>
                <li><strong>Domicilio fiscal:</strong> Jr. Santo Tomás, Mz C Lt. 16-B, Asoc. Fundo Garagay Bajo, Los Olivos - Lima - Perú</li>
                <li><strong>Correo electrónico:</strong> ventas@canastanavidena.pe</li>
                <li><strong>Teléfono:</strong> 997 486 009</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">2. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar este sitio web, usted acepta plenamente los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le recomendamos no utilizar el sitio. El uso del sitio implica la aceptación de estos términos y de nuestra Política de Privacidad.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">3. Productos y Servicios</h2>
              <p>
                Ofrecemos canastas navideñas, arcones gourmet y regalos corporativos. Los productos mostrados en el sitio web son representativos y pueden variar en diseño, contenido y presentación según la disponibilidad de ingredientes y la temporada.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Las imágenes son ilustrativas y pueden diferir ligeramente del producto final.</li>
                <li>Los precios incluyen IGV (18%) y están expresados en Soles (S/) o Dólares (USD) según corresponda.</li>
                <li>La disponibilidad de productos está sujeta a existencias.</li>
                <li>Ofrecemos personalización para pedidos corporativos con un mínimo de 10 unidades.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">4. Proceso de Compra</h2>
              <p>Para realizar una compra en nuestro sitio:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Seleccione los productos deseados y agrégalos al carrito de compras.</li>
                <li>Complete los datos de envío y facturación.</li>
                <li>Seleccione el método de pago preferido.</li>
                <li>Confirme el pedido y espere la confirmación por correo electrónico.</li>
                <li>El pedido se procesará una vez confirmado el pago.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">5. Precios y Pagos</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Los precios están sujetos a cambio sin previo aviso.</li>
                <li>Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencia bancaria y PayPal.</li>
                <li>Para pedidos corporativos, ofrecemos opciones de pago contra entrega sujeto a aprobación de crédito.</li>
                <li>Los meses sin intereses están disponibles con tarjetas participantes en compras mayores a S/. 200.</li>
                <li>Todos los precios incluyen el Impuesto General a las Ventas (IGV) del 18%.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">6. Envíos y Entregas</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Realizamos envíos a todo el territorio peruano.</li>
                <li>En Lima y zona metropolitana: entrega en 24 a 48 horas hábiles.</li>
                <li>Resto del país: 3 a 8 días hábiles según la zona.</li>
                <li>El envío es gratuito para pedidos superiores a S/. 500 dentro de Lima.</li>
                <li>Los tiempos de entrega son estimados y pueden variar por circunstancias ajenas a nuestra control.</li>
                <li>El costo de envío se calcula al momento de la compra según la dirección de destino.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">7. Devoluciones y Reembolsos</h2>
              <p>
                Conforme al Código de Protección y Defensa del Consumidor (TUO del D.S. N° 006-2014-JUS), usted puede solicitar la devolución dentro de los primeros 7 días naturales posteriores a la recepción del producto, siempre que:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>El producto no haya sido abierto, consumido o dañado por el usuario.</li>
                <li>Se presente la boleta o factura de compra.</li>
                <li>El producto esté en su empaque original.</li>
              </ul>
              <p className="mt-2">
                Para productos dañados durante el transporte, deberá reportarse dentro de las primeras 24 horas con fotografías del estado en que llegó.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">8. Facturación</h2>
              <p>
                Emitimos factura electrónica conforme a las normas de la SUNAT. Para ello, deberá proporcionar sus datos fiscales (RUC, razón social, régimen tributario) al momento de la compra o dentro de los 5 días posteriores. La factura se enviará por correo electrónico.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">9. Propiedad Intelectual</h2>
              <p>
                Todo el contenido del sitio web, incluyendo textos, imágenes, logos, diseños, código fuente y marcas registradas, es propiedad de Canastas Navideñas E.I.R.L. o de terceros y está protegido por las leyes de propiedad intelectual del Perú e internacionales. Queda prohibida su reproducción, distribución o uso sin autorización expresa.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">10. Limitación de Responsabilidad</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>No nos hacemos responsables por retrasos causados por fuerza mayor o casos fortuitos.</li>
                <li>El uso del sitio web es bajo su propio riesgo.</li>
                <li>No garantizamos la disponibilidad continua del sitio web.</li>
                <li>No somos responsables por daños indirectos, lucro cesante o pérdida de datos derivados del uso del sitio.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">11. Protección de Datos Personales</h2>
              <p>
                El tratamiento de sus datos personales se rige por nuestra Política de Privacidad, conforme a la Ley N° 29733, Ley de Protección de Datos Personales del Perú. Al utilizar nuestros servicios, usted consiente el tratamiento de sus datos según lo establecido en dicha política.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">12. Ley Aplicable y Jurisdicción</h2>
              <p>
                Los presentes Términos y Condiciones se rigen por las leyes de la República del Perú. Para la resolución de cualquier controversia derivada del uso del sitio o de la compra de productos, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Lima, Perú, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">13. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en esta página y entrarán en vigor desde su publicación. Le recomendamos revisar periódicamente esta página.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-[#1A2F23] mb-3">14. Contacto</h2>
              <p>Para consultas sobre estos Términos y Condiciones:</p>
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
