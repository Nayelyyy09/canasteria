import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, TreePine, ChevronRight } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Blog Canastas Navideñas`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", post.excerpt);
      }

      // Inject schema
      const existingSchema = document.getElementById("blog-schema");
      if (existingSchema) existingSchema.remove();
      const script = document.createElement("script");
      script.id = "blog-schema";
      script.type = "application/ld+json";
      script.text = JSON.stringify(post.schema);
      document.head.appendChild(script);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F9F4EB] flex items-center justify-center">
        <div className="text-center">
          <TreePine size={48} className="mx-auto text-[#B39359]/30 mb-4" />
          <h1 className="font-display text-3xl text-[#1A2F23] mb-4">
            Artículo no encontrado
          </h1>
          <p className="font-body text-sm text-[#1A2F23]/50 mb-8">
            El artículo que buscas no existe o fue movido.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#841B2D] text-[#F9F4EB] font-body text-xs tracking-widest uppercase hover:bg-[#6d1625] transition-colors"
          >
            <ArrowLeft size={14} />
            Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content) => {
    const lines = content.split("\n").filter((line) => line.trim());
    const elements = [];
    let inList = false;
    let listItems = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("### ")) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-[#1A2F23]/70 font-body text-sm">
              {listItems.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, "")}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <h3 key={index} className="font-display text-xl text-[#1A2F23] mt-8 mb-4">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("## ")) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-[#1A2F23]/70 font-body text-sm">
              {listItems.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, "")}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <h2 key={index} className="font-display text-2xl text-[#1A2F23] mt-12 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        inList = true;
        listItems.push(trimmed);
      } else if (trimmed.startsWith("**") && trimmed.includes("**:")) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-[#1A2F23]/70 font-body text-sm">
              {listItems.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, "")}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        const parts = trimmed.split("**:");
        elements.push(
          <p key={index} className="font-body text-sm text-[#1A2F23]/70 mb-4">
            <strong className="text-[#1A2F23]">{parts[0].replace(/\*\*/g, "")}:</strong>
            {parts.slice(1).join(":")}
          </p>
        );
      } else if (trimmed.startsWith("**")) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-[#1A2F23]/70 font-body text-sm">
              {listItems.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, "")}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <p key={index} className="font-body text-sm text-[#1A2F23]/70 mb-4">
            <strong className="text-[#1A2F23]">
              {trimmed.replace(/\*\*/g, "")}
            </strong>
          </p>
        );
      } else if (trimmed.startsWith("|")) {
        // Skip table formatting for simplicity
      } else if (trimmed) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`list-${index}`} className="list-disc list-inside space-y-2 mb-6 text-[#1A2F23]/70 font-body text-sm">
              {listItems.map((item, i) => (
                <li key={i}>{item.replace(/^[-*]\s*/, "")}</li>
              ))}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <p key={index} className="font-body text-sm text-[#1A2F23]/70 mb-4 leading-relaxed">
            {trimmed}
          </p>
        );
      }
    });

    if (listItems.length > 0) {
      elements.push(
        <ul key="final-list" className="list-disc list-inside space-y-2 mb-6 text-[#1A2F23]/70 font-body text-sm">
          {listItems.map((item, i) => (
            <li key={i}>{item.replace(/^[-*]\s*/, "")}</li>
          ))}
        </ul>
      );
    }

    return elements;
  };

  return (
    <div className="min-h-screen bg-[#F9F4EB]">
      <Navbar />
      {/* Hero */}
      <section className="relative bg-[#1A2F23] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${post.image})` }}
          onError={(e) => {
            e.target.style.backgroundImage =
              "url(https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&h=600&fit=crop)";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F23] via-[#1A2F23]/80 to-[#1A2F23]/60" />

        <div className="max-w-4xl mx-auto px-6 lg:px-16 py-16 lg:py-24 relative">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link
              to="/"
              className="font-body text-xs text-[#F9F4EB]/50 hover:text-[#B39359] transition-colors"
            >
              Inicio
            </Link>
            <ChevronRight size={12} className="text-[#F9F4EB]/30" />
            <Link
              to="/blog"
              className="font-body text-xs text-[#F9F4EB]/50 hover:text-[#B39359] transition-colors"
            >
              Blog
            </Link>
            <ChevronRight size={12} className="text-[#F9F4EB]/30" />
            <span className="font-body text-xs text-[#B39359]">
              {post.category}
            </span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#841B2D] text-[#F9F4EB] text-xs font-body tracking-widest uppercase mb-4">
              {post.category}
            </span>

            <h1 className="font-display text-3xl lg:text-5xl text-[#F9F4EB] leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-[#F9F4EB]/50">
              <span className="flex items-center gap-2 font-body text-sm">
                <Calendar size={14} />
                {new Date(post.date).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2 font-body text-sm">
                <Clock size={14} />
                {post.readTime} de lectura
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none"
        >
          {renderContent(post.content)}
        </motion.div>
      </section>

      {/* Back to Blog */}
      <section className="max-w-4xl mx-auto px-6 lg:px-16 pb-16">
        <div className="border-t border-[#B39359]/20 pt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-[#841B2D] hover:text-[#6d1625] transition-colors"
          >
            <ArrowLeft size={16} />
            Volver al Blog
          </Link>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#1A2F23] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="text-center mb-12">
              <span className="font-body text-xs tracking-[0.4em] uppercase text-[#B39359] mb-4 block">
                Artículos Relacionados
              </span>
              <h2 className="font-display text-3xl text-[#F9F4EB]">
                Sigue <span className="italic text-[#841B2D]">Leyendo</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterSection />
    </div>
  );
}
