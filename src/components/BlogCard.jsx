import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-[#FAF7F2] border border-[#C9A96E]/20 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative overflow-hidden aspect-[16/10]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A461A]/60 via-transparent to-transparent" />
          <span className="absolute top-4 left-4 px-3 py-1 bg-[#7E0E0F] text-[#FAF7F2] text-xs font-body tracking-widest uppercase">
            {post.category}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 mb-3 text-[#0A461A]/50">
            <time className="font-body text-xs">
              {new Date(post.date).toLocaleDateString("es-MX", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="flex items-center gap-1 font-body text-xs">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-display text-xl text-[#0A461A] group-hover:text-[#7E0E0F] transition-colors line-clamp-2 mb-3">
            {post.title}
          </h3>

          <p className="font-body text-sm text-[#0A461A]/60 line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <span className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-[#7E0E0F] group-hover:text-[#7E0E0F] transition-colors">
            Leer más
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
