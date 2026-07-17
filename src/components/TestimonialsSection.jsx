import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "3 razones para elegir Publiventa",
    url: "https://www.tiktok.com/@publiventa_publicidad/video/7574949343745150219",
    thumbnail: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-9-4.jpg",
    videoSrc: "https://publiventa.pe/wp-content/uploads/2026/07/3-razones-para-elegir-Publiventa.mp4",
  },
  {
    id: 2,
    title: "Así se crean nuestras canastas navideñas",
    url: "https://www.tiktok.com/@publiventa_publicidad/video/7579779077989567800",
    thumbnail: "https://canastanavidena.pe/wp-content/uploads/2026/07/Asi-se-crean-nuestras-canastas-navidenass.png",
    videoSrc: "https://publiventa.pe/wp-content/uploads/2026/07/Asi-se-crean-nuestras-canastas-navidenas.mp4",
  },
  {
    id: 3,
    title: "Así es nuestro proceso de trabajo",
    url: "https://www.tiktok.com/@publiventa_publicidad/video/7579403787840867596",
    thumbnail: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-4-11.jpg",
    videoSrc: "https://publiventa.pe/wp-content/uploads/2026/07/Asi-es-nuestro-proceso-de-trabajo.mp4",
  },
  {
    id: 4,
    title: "Entregamos canastas navideñas a SENATI",
    url: "https://www.tiktok.com/@publiventa_publicidad/video/7584598261835566392",
    thumbnail: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-9-4.jpg",
    videoSrc: "https://publiventa.pe/wp-content/uploads/2026/07/Entregamos-canastas-navidenas-a-SENATI.mp4",
  },
  {
    id: 5,
    title: "En Publiventa también compartimos con quienes más lo necesitan",
    url: "https://www.tiktok.com/@publiventa_publicidad/video/7588326255032945941",
    thumbnail: "https://publiventa.pe/wp-content/uploads/2025/09/Mesa-de-trabajo-2-3.jpg",
    videoSrc: "https://publiventa.pe/wp-content/uploads/2026/07/En-Publiventa-tambien-compartimos-con-quienes-mas-lo-necesitan.mp4",
  },
];

function VideoCard({ video, isFirst }) {
  const [hovering, setHovering] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleEnter = useCallback(() => {
    if (!video.videoSrc) return;
    setHovering(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [video.videoSrc]);

  const handleLeave = useCallback(() => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  // First video: always plays
  if (isFirst && video.videoSrc) {
    return (
      <div className="group relative block aspect-[9/16] overflow-hidden">
        <video
          src={video.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A461A] via-[#0A461A]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-display text-lg text-[#FAF7F2]">
            {video.title}
          </p>
        </div>
      </div>
    );
  }

  // Videos with videoSrc: load and play on hover
  if (video.videoSrc) {
    return (
      <div
        className="group relative block aspect-[9/16] overflow-hidden"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {/* Thumbnail */}
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`absolute inset-0 w-full h-full object-contain bg-[#0A461A] transition-opacity duration-500 ${
            hovering && loaded ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video */}
        <video
          ref={videoRef}
          src={video.videoSrc}
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovering && loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A461A] via-[#0A461A]/30 to-transparent" />

        {/* Play button (hidden when playing) */}
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          hovering && loaded ? "opacity-0" : "opacity-100"
        }`}>
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#7E0E0F]/90 group-hover:bg-[#7E0E0F] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <Play size={28} className="text-[#FAF7F2] ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-display text-lg text-[#FAF7F2]">
            {video.title}
          </p>
        </div>
      </div>
    );
  }

  // Videos without videoSrc: link to TikTok
  return (
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A461A] via-[#0A461A]/30 to-transparent" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#7E0E0F]/90 group-hover:bg-[#7E0E0F] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <Play size={28} className="text-[#FAF7F2] ml-1" fill="currentColor" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-display text-lg text-[#FAF7F2]">
          {video.title}
        </p>
      </div>
    </a>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#FAF7F2] py-24 lg:py-32">
      <div className="w-full px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-4">
            Nuestro Proceso
          </p>
          <h2 className="font-display text-4xl lg:text-5xl text-[#0A461A]">
            Conoce Cómo Hacemos Nuestras Canastas
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-[#C9A96E]" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-6">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <VideoCard video={video} isFirst={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
