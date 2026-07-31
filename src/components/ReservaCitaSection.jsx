import {
  Calendar,
  Clock3,
  MessageCircle,
  BriefcaseBusiness,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const images = [
  "/trujillo/Trujillo_1.png",
  "/trujillo/Trujillo_2.png",
  "/trujillo/Trujillo_3.png",
  "/trujillo/Trujillo_4.png",
];

export default function ReservaCitaSection() {
  return (
    <section className="bg-[#F8F5F0]">

      {/* ================= HERO ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IZQUIERDA */}

          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A461A]/5 text-[#0A461A] text-sm font-medium">
              <BriefcaseBusiness size={16} />
              Reuniones Corporativas
            </span>

            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-[#0A461A]">
              Agenda una reunión
              <br />
              con nuestros
              <br />
              especialistas
            </h1>

            <p className="mt-8 text-lg leading-9 text-[#555]">
              Descubre nuestras soluciones en canastas navideñas,
              merchandising y regalos corporativos.

              Nuestro equipo comercial preparará una propuesta
              personalizada de acuerdo con el número de colaboradores,
              presupuesto y nivel de personalización que requiera tu empresa.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#0A461A]/10 flex items-center justify-center">
                  <Calendar className="text-[#0A461A]" size={22}/>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0A461A]">
                    Fecha flexible
                  </h4>

                  <p className="text-[#666]">
                    Elige el día y horario más conveniente.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#0A461A]/10 flex items-center justify-center">
                  <Clock3 className="text-[#0A461A]" size={22}/>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0A461A]">
                    Duración
                  </h4>

                  <p className="text-[#666]">
                    Reunión aproximada de 30 minutos.
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#0A461A]/10 flex items-center justify-center">
                  <Users className="text-[#0A461A]" size={22}/>
                </div>

                <div>
                  <h4 className="font-semibold text-[#0A461A]">
                    Atención personalizada
                  </h4>

                  <p className="text-[#666]">
                    Un asesor comercial atenderá exclusivamente tu proyecto.
                  </p>
                </div>

              </div>

            </div>

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="https://wa.me/51958438095"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7E0E0F] hover:bg-[#630B0C] text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition"
              >
                <MessageCircle size={20}/>
                Reservar por WhatsApp
              </a>

              <a
                href="#galeria"
                className="border border-[#0A461A] text-[#0A461A] px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-[#0A461A] hover:text-white transition"
              >
                Ver experiencias
                <ArrowRight size={18}/>
              </a>

            </div>

          </div>

          {/* DERECHA */}

          <div>

            <div className="bg-white rounded-3xl shadow-xl border border-[#E8E3D9] p-10">

              <div className="w-20 h-20 rounded-2xl bg-[#0A461A] flex items-center justify-center mx-auto">

                <Sparkles
                  size={34}
                  className="text-white"
                />

              </div>

              <h3 className="text-center text-3xl font-bold text-[#0A461A] mt-8">
                Reunión Comercial
              </h3>

              <p className="text-center text-[#666] mt-5 leading-8">
                Durante la reunión conocerás nuestras soluciones
                corporativas, recibirás asesoría personalizada y
                prepararemos una propuesta ajustada a las necesidades
                de tu organización.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex justify-between border-b pb-4">
                  <span className="text-[#666]">Modalidad</span>
                  <strong>Presencial / Virtual</strong>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-[#666]">Duración</span>
                  <strong>30 minutos</strong>
                </div>

                <div className="flex justify-between border-b pb-4">
                  <span className="text-[#666]">Costo</span>
                  <strong>Sin costo</strong>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#666]">Atención</span>
                  <strong>Personalizada</strong>
                </div>

              </div>

              <a
                href="https://wa.me/51958438095"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 w-full bg-[#0A461A] hover:bg-[#083715] text-white rounded-xl py-4 flex justify-center font-semibold transition"
              >
                Solicitar reunión
              </a>

            </div>

          </div>

        </div>

        {/* ================= GALERÍA ================= */}

        <div
          id="galeria"
          className="mt-36 text-center"
        >

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0A461A]/5 text-[#0A461A] text-sm">
            <BriefcaseBusiness size={15}/>
            Eventos Corporativos
          </span>

          <h2 className="mt-8 text-5xl font-bold text-[#0A461A]">
            Participación en
            <br />
            ferias de proveedores
          </h2>

          <p className="max-w-4xl mx-auto mt-8 text-[#666] leading-9 text-lg">
            Compartimos algunos momentos de nuestra participación en
            ferias y encuentros empresariales, donde presentamos
            soluciones en merchandising, regalos corporativos y
            campañas navideñas para empresas de diversos sectores.
          </p>

          <div className="mt-20">

            <Swiper
              effect="coverflow"
              centeredSlides
              grabCursor
              loop
              navigation
              slidesPerView={"auto"}
              autoplay={{
                delay:3500,
                disableOnInteraction:false
              }}
              coverflowEffect={{
                rotate:0,
                stretch:0,
                depth:260,
                modifier:2,
                scale:.88,
                slideShadows:false
              }}
              modules={[
                EffectCoverflow,
                Navigation,
                Autoplay
              ]}
            >
                              {images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "420px" }}
                >
                  <div className="overflow-hidden rounded-3xl shadow-2xl bg-white">
                    <img
                      src={image}
                      alt={`Evento corporativo ${index + 1}`}
                      className="w-full h-[560px] object-cover hover:scale-105 transition duration-700"
                    />
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>

          </div>

          {/* ================= BENEFICIOS ================= */}

          <div className="mt-24 grid lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#ECE7DD] hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-[#0A461A]/10 flex items-center justify-center mx-auto">
                <BriefcaseBusiness
                  size={30}
                  className="text-[#0A461A]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0A461A]">
                Asesoría Comercial
              </h3>

              <p className="mt-5 text-[#666] leading-8">
                Analizamos las necesidades de tu empresa y
                proponemos alternativas acordes a tu presupuesto,
                cantidad de colaboradores y tipo de campaña.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#ECE7DD] hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-[#0A461A]/10 flex items-center justify-center mx-auto">
                <Sparkles
                  size={30}
                  className="text-[#0A461A]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0A461A]">
                Productos Premium
              </h3>

              <p className="mt-5 text-[#666] leading-8">
                Presentamos nuestras canastas navideñas,
                panetones y regalos corporativos con opciones
                de personalización para cada organización.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-lg border border-[#ECE7DD] hover:-translate-y-2 transition duration-300">

              <div className="w-16 h-16 rounded-2xl bg-[#0A461A]/10 flex items-center justify-center mx-auto">
                <Users
                  size={30}
                  className="text-[#0A461A]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#0A461A]">
                Atención Personalizada
              </h3>

              <p className="mt-5 text-[#666] leading-8">
                Nuestro equipo acompaña todo el proceso,
                desde la selección de productos hasta la
                entrega final de cada pedido.
              </p>

            </div>

          </div>

          {/* ================= CTA FINAL ================= */}

          <div className="mt-24 rounded-[36px] bg-[#0A461A] px-10 lg:px-20 py-20 text-center">

            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Conversemos sobre
              <br />
              tu próxima campaña corporativa
            </h2>

            <p className="max-w-3xl mx-auto mt-8 text-white/80 text-lg leading-9">
              Agenda una reunión con nuestro equipo y descubre las
              mejores alternativas en canastas navideñas, regalos
              corporativos y merchandising personalizado para tu empresa.
            </p>

            <a
              href="https://wa.me/51958438095"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-10 bg-[#C9A96E] hover:bg-[#d7b77d] text-[#0A461A] font-semibold px-10 py-5 rounded-xl transition duration-300"
            >
              <MessageCircle size={20} />
              Agendar una reunión
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}