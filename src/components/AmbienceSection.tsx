"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Check } from "lucide-react";
import { useState } from "react";
import { AMBIENCE_SPACES } from "@/data/cafeData";

export default function AmbienceSection() {
  const [reserved, setReserved] = useState(false);

  return (
    <section id="spaces" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C25934]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#C25934]">
              Designed for Solitude & Community
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E1A17] tracking-tight">
            Spaces for Every Weather
          </h2>
          <p className="text-sm sm:text-base text-[#6B5E55] mt-3">
            Cane chairs, rain-muted windows, and a brass brew bar shape three distinct ways to spend an afternoon.
          </p>
        </div>

        {/* 3 Ambience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AMBIENCE_SPACES.map((space, idx) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className="group relative rounded-3xl overflow-hidden bg-[#1E1A17] shadow-xl aspect-[3/4] flex flex-col justify-end p-7"
            >
              {/* Background Photo */}
              <Image
                src={space.image}
                alt={space.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-95"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-[#1E1A17]/60 to-transparent" />

              {/* Tag Pill */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] uppercase font-bold tracking-wider">
                  {space.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2 group-hover:text-[#F0B84A] transition-colors">
                  {space.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#DDD4C5] leading-relaxed line-clamp-3">
                  {space.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setReserved((current) => !current)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1A17] hover:bg-[#384936] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            {reserved ? <Check className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
            <span>{reserved ? "Rainy Corner Reserved" : "Reserve a Rainy Corner"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
