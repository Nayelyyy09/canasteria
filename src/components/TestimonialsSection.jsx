import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "Elaboración de Canastas Navideñas",
    url: "https://youtu.be/BlYH-F00eL8",
    thumbnail: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-9-4.jpg",
  },
  {
    id: 2,
    title: "Proceso de Selección de Productos",
    url: "https://youtu.be/BlYH-F00eL8",
    thumbnail: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-2-3.jpg",
  },
  {
    id: 3,
    title: "Presentación y Empaque Final",
    url: "https://youtu.be/BlYH-F00eL8",
    thumbnail: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4-11.jpg",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FAF7F2] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4">
            Nuestro Proceso
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#0D2818]">
            Conoce Cómo Hacemos Nuestras Canastas
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#C9A96E]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[9/16] overflow-hidden"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2818] via-[#0D2818]/30 to-transparent" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#B22234]/90 group-hover:bg-[#B22234] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Play size={28} className="text-[#FAF7F2] ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-display text-lg text-[#FAF7F2]">
                    {video.title}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
