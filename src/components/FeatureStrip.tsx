"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Sparkles, HeartHandshake, Compass } from "lucide-react";
import { VALUE_PROPOSITIONS } from "@/data/cafeData";

export default function FeatureStrip() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Coffee":
        return <Coffee className="w-6 h-6 text-[#C25934]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#C25934]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#C25934]" />;
      default:
        return <Compass className="w-6 h-6 text-[#C25934]" />;
    }
  };

  return (
    <section className="py-12 border-y border-[#E8E0D2] bg-[#F4EFE6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#DDD4C5]">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`flex flex-col items-start ${idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}
            >
              <div className="mb-4 p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E2D8C9] shadow-sm">
                {getIcon(prop.icon)}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#C25934] mb-1">
                {prop.badge}
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#1E1A17] mb-2">
                {prop.title}
              </h3>
              <p className="text-sm text-[#6B5E55] leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
