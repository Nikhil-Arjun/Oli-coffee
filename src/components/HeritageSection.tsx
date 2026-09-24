"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Trees } from "lucide-react";

export default function HeritageSection() {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#F4EFE6]/70 border-t border-[#E8E0D2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cafe Atmosphere Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-[#DDD3C5]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
                alt="Oli Coffee serene minimalist wooden cafe interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Badge overlay */}
              <div className="absolute bottom-5 left-5 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-sm flex items-center gap-2">
                <Trees className="w-4 h-4 text-[#384936]" />
                <span className="text-xs font-semibold text-[#1E1A17]">Western Ghats Agroforestry</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25934]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#C25934]">
                The Roots & Origin
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E1A17] tracking-tight leading-[1.15] mb-6">
              Between red earth <br />
              <span className="italic font-light text-[#C25934]">and blue water</span>
            </h2>

            <p className="text-base text-[#6B5E55] leading-relaxed mb-5">
              On mist-laden plantation ridges where high-altitude Western Ghats forest slopes descend
              toward coastal Konkan shores, coffee plants drink from monsoonal downpours and cool maritime
              winds. The nutrient-dense red laterite soil imparts a distinctive, velvety mouthfeel found
              nowhere else on earth.
            </p>

            <p className="text-base text-[#6B5E55] leading-relaxed mb-8">
              We partner directly with multigenerational estate growers committed to sustainable agroforestry,
              preserving native flora and fauna while celebrating slow roasting rituals that honor Indian coffee culture.
            </p>

            {/* Quote Box */}
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#DDD3C5] mb-8 w-full">
              <p className="font-serif italic text-[#1E1A17] text-base">
                “Every cup is an invitation to pause, breathe the scent of wet red soil, and listen to the rain.”
              </p>
              <span className="text-[11px] uppercase tracking-wider text-[#9E9287] font-bold block mt-2">
                — Head Roaster & Founder
              </span>
            </div>

            <a
              href="#spaces"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1E1A17] hover:text-[#C25934] transition-colors group"
            >
              <span>Explore Our Spaces & Philosophy</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
