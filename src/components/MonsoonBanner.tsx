"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CloudRain, ArrowRight } from "lucide-react";

interface MonsoonBannerProps {
  onOpenAuth: () => void;
}

export default function MonsoonBanner({ onOpenAuth }: MonsoonBannerProps) {
  return (
    <section id="monsoon" className="relative py-20 overflow-hidden bg-[#C25934] text-white">
      {/* Background with tropical leaves texture & dark overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay">
        <Image
          src="https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1600&q=85"
          alt="Monsoon rain droplets on tropical leaves"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9A3817] via-[#C25934]/90 to-[#7D290D] -z-0" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 mb-4 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <CloudRain className="w-3.5 h-3.5 text-amber-200" />
            <span>Limited Seasonal Harvest</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white mb-4">
            Monsoon Menu
          </h2>

          <p className="text-base sm:text-xl text-white/90 max-w-2xl font-light leading-relaxed mb-8">
            Warm sips and coastal comfort bites made for rainy days, misty windows,
            and unhurried afternoon drizzles.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="px-8 py-3.5 rounded-full bg-white text-[#C25934] hover:bg-[#FAF7F2] text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>Explore Monsoon Specials</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenAuth}
              className="px-7 py-3.5 rounded-full bg-black/25 hover:bg-black/35 text-white border border-white/30 text-xs sm:text-sm uppercase tracking-wider font-medium transition-all backdrop-blur-sm"
            >
              Reserve a Rainy Corner
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
