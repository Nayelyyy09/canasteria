import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ_DATA = [
  {
    category: "Sobre Nuestras Canastas",
    questions: [
      {
        q: "¿Qué incluyen las canastas navideñas?",
        a: "Cada canasta incluye una selección curada de productos premium: vinos, chocolates artesanales, dulces típicos, quesos, embutidos, frutas secas y elementos decorativos navideños. El contenido varía según la categoría y personalización elegida.",
      },
      {
        q: "¿Las canastas se entregan armadas?",
        a: "Sí, todas nuestras canastas llegan completamente armadas y decoradas con detalles navideños. Cada pieza está cuidadosamente acomodada y protegida para garantizar una presentación impecable al momento de la entrega.",
      },
      {
        q: "¿Puedo personalizar el contenido de una canasta?",
        a: "Claro que sí. Ofrecemos opciones de personalización donde puedes elegir productos específicos, agregar mensajes personalizados, cambiar el tipo de canasta y seleccionar el estilo de decoración. Contáctanos para diseñar la canasta perfecta.",
      },
      {
        q: "¿Qué tamaños están disponibles?",
        a: "Contamos con tres tamaños principales: Pequeña (para 2-3 personas), Mediana (para 4-6 personas) y Grande (para 8-10 personas). También ofrecemos canastas corporativas de tamaño especial para empresas.",
      },
      {
        q: "¿Cuánto tiempo antes debo hacer mi pedido?",
        a: "Recomendamos realizar tu pedido con al menos 5 días de anticipación. Para pedidos personalizados o grandes volúmenes corporativos, te sugerimos hacerlo con 2-3 semanas de anticipación para garantizar disponibilidad.",
      },
    ],
  },
  {
    category: "Pedidos y Entregas",
    questions: [
      {
        q: "¿Realizan envíos a toda la república?",
        a: "Sí, realizamos envíos a todo el país. Contamos con servicio de mensajería especializada para garantizar que tu canasta llegue en perfectas condiciones. Los tiempos de entrega varían según la zona geográfica.",
      },
      {
        q: "¿Cuánto tarda en llegar mi pedido?",
        a: "En la  Lima y zona metropolitana, la entrega es de 24 a 48 horas. Para otras ciudades principales, el tiempo es de 3 a 5 días hábiles. En localidades remotas puede tomar hasta 7 días hábiles.",
      },
      {
        q: "¿Puedo programar la fecha de entrega?",
        a: "Sí, puedes programar la fecha y franja horaria de entrega. Esto es especialmente útil para regalos corporativos o si necesitas que llegue en una fecha específica antes de Navidad.",
      },
      {
        q: "¿Qué pasa si la canasta llega dañada?",
        a: "Si tu canasta llega con algún daño, contáctanos dentro de las primeras 24 horas con fotos del estado en que llegó. Haremos un reenvío sin costo o un reembolso completo según tu preferencia.",
      },
      {
        q: "¿Puedo hacer un pedido para recoger en tienda?",
        a: "Sí, ofrecemos la opción de recoger en nuestra tienda ubicada en Lima. Al hacer tu pedido selecciona 'Recoger en tienda' y te notificaremos cuando esté listo.",
      },
    ],
  },
  {
    category: "Pagos y Seguridad",
    questions: [
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencia bancaria, PayPal y pago en efectivo al momento de la entrega en la  Lima.",
      },
      {
        q: "¿Es seguro comprar en su página?",
        a: "Absolutamente. Utilizamos encriptación SSL de 256 bits y procesamos los pagos a través de pasarelas de pago certificadas PCI DSS. Tus datos personales y financieros están completamente protegidos.",
      },
      {
        q: "¿Ofrecen meses sin intereses?",
        a: "Sí, con tarjetas participantes puedes dividir tu compra en 3, 6 o 12 meses sin intereses en compras mayores a $2,000 USD. Consulta las condiciones al momento de tu compra.",
      },
      {
        q: "¿Puedo solicitar factura?",
        a: "Sí, emitimos factura fiscal por cada compra. Solo necesitas proporcionar tus datos fislicos (RFC, razón social, régimen fiscal) al momento de realizar tu pedido o dentro de los 5 días posteriores a la compra.",
      },
      {
        q: "¿Cuál es su política de reembolsos?",
        a: "Si no estás satisfecho con tu compra, ofrecemos reembolso completo dentro de los primeros 7 días después de la entrega, siempre que la canasta no haya sido abierta o consumida. El reembolso se procesa en un plazo de 5-10 días hábiles.",
      },
    ],
  },
  {
    category: "Canastas Corporativas",
    questions: [
      {
        q: "¿Ofrecen descuentos para pedidos corporativos?",
        a: "Sí, ofrecemos descuentos escalonados: 10% para pedidos de 10-25 canastas, 15% para 26-50 canastas y 20% para más de 50 canastas. Contáctanos para una cotización personalizada según tus necesidades.",
      },
      {
        q: "¿Pueden incluir logotipos de mi empresa?",
        a: "Por supuesto. Ofrecemos personalización corporativa que incluye: tarjetas con tu logotipo, cintas personalizadas, empaques con imagen de marca y mensajes personalizados. Envíanos tu branding y lo integramos en cada detalle.",
      },
      {
        q: "¿Manejan pedidos de grandes volúmenes?",
        a: "Sí, tenemos capacidad para procesar pedidos corporativos de cualquier volumen. Contamos con almacén propio y equipo dedicado para proyectos grandes. Para pedidos mayores a 100 canastas, te asignamos un asesor de cuentas dedicado.",
      },
    ],
  },
];

const SITE_URL = "https://canastanavidena.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_DATA.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Preguntas Frecuentes",
      item: `${SITE_URL}/faq`,
    },
  ],
};

export default function FAQ() {
  return (
    <>
      <head>
        <title>Preguntas Frecuentes - Canastas Navideñas | Resolvemos tus Dudas</title>
        <meta
          name="description"
          content="Encuentra respuestas a las preguntas más frecuentes sobre nuestras canastas navideñas: envíos, pagos, personalización, pedidos corporativos y más."
        />
        <meta
          name="keywords"
          content="preguntas frecuentes, canastas navideñas, envíos navideños, regalos corporativos, FAQ canastas"
        />
        <link rel="canonical" href={`${SITE_URL}/faq`} />
        <meta property="og:title" content="Preguntas Frecuentes - Canastas Navideñas" />
        <meta
          property="og:description"
          content="Resolvemos todas tus dudas sobre canastas navideñas, envíos, pagos y pedidos corporativos."
        />
        <meta property="og:url" content={`${SITE_URL}/faq`} />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </head>

      <div className="min-h-screen bg-[#F9F4EB]">
        <Navbar />

        {/* Hero */}
        <section className="bg-[#1A2F23] pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 mb-6 text-xs font-body">
              <Link to="/" className="text-[#F9F4EB]/50 hover:text-[#B39359] transition-colors">
                Inicio
              </Link>
              <ChevronRight size={12} className="text-[#F9F4EB]/30" />
              <span className="text-[#B39359]">Preguntas Frecuentes</span>
            </nav>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-[#F9F4EB] leading-tight"
            >
              Preguntas{" "}
              <span className="italic text-[#841B2D]">Frecuentes</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-4 font-body text-sm text-[#F9F4EB]/50 max-w-lg mx-auto"
            >
              Encuentra respuestas a todo lo que necesitas saber sobre nuestras
              canastas navideñas.
            </motion.p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          {FAQ_DATA.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl md:text-3xl text-[#1A2F23] mb-6">
                {cat.category}
              </h2>
              <Accordion type="single" collapsible className="border-t border-[#1A2F23]/10">
                {cat.questions.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`${catIdx}-${idx}`}
                    className="border-b border-[#1A2F23]/10"
                  >
                    <AccordionTrigger className="font-body text-base text-[#1A2F23] hover:text-[#841B2D] hover:no-underline py-5">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-sm text-[#1A2F23]/70 leading-relaxed pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center bg-[#1A2F23] rounded-sm p-10"
          >
            <h3 className="font-display text-2xl text-[#F9F4EB] mb-3">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="font-body text-sm text-[#F9F4EB]/50 mb-6">
              Nuestro equipo está listo para ayudarte con cualquier duda adicional.
            </p>
            <a
              href="mailto:ventas@publiventa.com"
              className="inline-block px-8 py-3 bg-[#841B2D] text-[#F9F4EB] font-body text-sm hover:bg-[#6d1625] transition-colors"
            >
              Contáctanos
            </a>
          </motion.div>
        </section>

        <FooterSection />
      </div>
    </>
  );
}
