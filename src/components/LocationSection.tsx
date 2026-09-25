"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { CAFE_LINKS } from "@/data/siteConfig";

export default function LocationSection() {
  return (
    <section id="location" className="py-20 md:py-24 bg-[#1E1A17] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C25934]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Details & Actions */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#384936]/60 border border-[#4E664B] text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Open Now • Dine-In & Takeaway</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-4">
              Visit Our Living Room <br />
              <span className="italic text-[#E29272]">In Rajarampuri</span>
            </h2>

            <p className="text-sm sm:text-base text-[#C4B7AB] leading-relaxed mb-8">
              Step inside our neighborhood living room in Rajarampuri. Our baristas are ready with
              steaming pour-overs and seasonal infusions.
            </p>

            {/* Address & Hours Cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-[#C25934] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-1">
                    Café Address
                  </h4>
                  <p className="text-sm text-[#DDD4C5]">
                    Shop 4, Ground Floor, Rajarampuri 5th Lane, Kolhapur, Maharashtra 416008
                  </p>
                  <p className="text-xs text-[#9E9287] mt-0.5">
                    Easy walk from the Rajarampuri main road
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-[#C25934] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-1">
                    Brew Hours
                  </h4>
                  <p className="text-sm text-[#DDD4C5]">
                    Tuesday – Friday: 8:00 AM – 10:00 PM
                  </p>
                  <p className="text-xs text-[#9E9287] mt-0.5">
                    Saturday – Sunday: 7:30 AM – 11:00 PM · Monday closed
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CAFE_LINKS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#C25934] hover:bg-[#A64421] text-white text-xs uppercase tracking-wider font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={CAFE_LINKS.phone}
                className="px-5 py-3 rounded-full bg-transparent hover:bg-white/5 text-[#DDD4C5] border border-white/10 text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stylized Minimalist Map Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#28221D] aspect-[4/3] flex items-center justify-center p-6 text-center">
              {/* Background Map Grid Pattern */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#FAF7F2 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Decorative Map Ring */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#C25934]/20 animate-ping absolute inset-0" />
                  <div className="w-20 h-20 rounded-full bg-[#C25934] flex items-center justify-center shadow-lg shadow-[#C25934]/40 relative">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>

                <span className="text-[11px] uppercase tracking-widest font-bold text-[#C25934] block mb-1">
                  Rajarampuri, Kolhapur
                </span>
                <h3 className="font-serif text-2xl text-white font-medium mb-1">
                  Oli Coffee Neighborhood Café
                </h3>
                <p className="text-xs text-[#B5A799] max-w-sm mb-5">
                  Fresh Konkan ingredients • Takeaway and dine-in available
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white">
                  <span>Rainfall today: 18mm • Steaming roasts ready</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
