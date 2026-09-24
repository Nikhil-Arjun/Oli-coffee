"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";
import { GALLERY_PHOTOS } from "@/data/cafeData";

export default function GallerySection() {
  return (
    <section className="py-20 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25934]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#C25934]">
                Moments & Memories
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E1A17] tracking-tight">
              Life at Oli Coffee
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1E1A17] hover:text-[#C25934] transition-colors group"
          >
            <svg className="w-4 h-4 text-[#C25934]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>Follow @konkanbrew on Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 3 Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GALLERY_PHOTOS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-[#E8E0D2] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#1E1A17]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 text-rose-300 mb-2">
                  <Heart className="w-4 h-4 fill-current" />
                  <span className="text-xs font-semibold">{item.likes} saves</span>
                </div>
                <p className="text-xs sm:text-sm text-white/95 font-medium leading-snug">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
