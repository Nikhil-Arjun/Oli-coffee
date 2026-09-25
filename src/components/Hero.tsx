"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SIGNATURE_DRINK } from "@/data/menuData";
import { CAFE_LINKS, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/data/siteConfig";

interface HeroProps {
  onOpenAuth: () => void;
}

export default function Hero({ onOpenAuth }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF7F2]">
      {/* Subtle background glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#F2E5D5]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE7DC] border border-[#DDD3C5] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#384936] animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest font-bold text-[#554A42]">
                Crafted with Precision • Sourced from the Ghats
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1E1A17] tracking-tight leading-[1.08] mb-6">
              Konkan Flavours, <br />
              <span className="italic font-light text-[#C25934]">{SIGNATURE_DRINK.name}</span>
            </h1>

            {/* Subparagraph */}
            <p className="text-base sm:text-lg text-[#6B5E55] max-w-xl font-normal leading-relaxed mb-8">
              An 18-hour cold brew steeped with kokum and orange zest, plus coffee and bakes made
              daily on Rajarampuri 5th Lane.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={CAFE_LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#C25934] hover:bg-[#A64421] text-white text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 group"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#menu"
                className="text-sm font-semibold text-[#712C1B] underline underline-offset-4 hover:text-[#4F2115] transition-colors"
              >
                <span>View Menu</span>
              </a>
            </div>

            {/* Social Proof / Rating */}
            <div className="pt-6 border-t border-[#E8E0D2] w-full max-w-lg">
              <p className="text-xs text-[#5C5047]">
                <span className="font-bold text-[#1E1A17]">{GOOGLE_RATING} ★</span> · {GOOGLE_REVIEW_COUNT} Google reviews
              </p>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual with Rain Glaze Atmosphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame */}
              <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2] ring-1 ring-[#E2D8C9]">
                <Image
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85"
                  alt="Oli Coffee warm cafe ambiance through rain window"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Rain glaze subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A17]/80 via-transparent to-black/20" />

                {/* In-photo Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/85 backdrop-blur-md border border-white/40 shadow-lg text-[#1E1A17]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-[#C25934] block">
                        Estate Direct
                      </span>
                      <h4 className="font-serif text-base font-semibold text-[#1E1A17]">
                        Ratnagiri Estate Washed
                      </h4>
                      <p className="text-xs text-[#6B5E55]">Fresh harvest roasted in micro-lots</p>
                    </div>
                    <button
                      onClick={onOpenAuth}
                      className="px-3 py-1.5 rounded-full bg-[#1E1A17] text-white text-xs font-medium hover:bg-[#C25934] transition-colors"
                    >
                      Taste
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative floating card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-[#FAF7F2] border border-[#DDD3C5] p-3 rounded-2xl shadow-lg flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-[#384936] flex items-center justify-center text-white">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#1E1A17]">100% Shade-Grown</p>
                  <p className="text-[10px] text-[#7A6E65]">Regenerative Western Ghats</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
