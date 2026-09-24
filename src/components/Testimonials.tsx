"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/cafeData";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-[#F4EFE6]/60 border-t border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1 text-[#D89B37] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1A17] tracking-tight">
            Voices from the Sanctuary
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5047] mt-2">
            Shared stories from coffee lovers, artists, and creators who find their pace with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl p-7 border border-[#E7DFD3] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D89B37] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif text-base text-[#1E1A17] leading-relaxed italic mb-6">
                  “{review.quote}”
                </p>
              </div>

              {/* Reviewer Bio */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-[#F2ECE3]">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#E2D8C9]">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E1A17]">{review.name}</h4>
                  <p className="text-xs text-[#5C5047]">{review.role} • {review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
