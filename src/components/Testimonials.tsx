"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { CAFE_LINKS, GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/data/siteConfig";

const SAMPLE_TESTIMONIALS = [
  {
    textBefore: "The Kokum Citrus Cold Brew has a bright, unusual taste that made the visit memorable. ",
    emphasis: "A genuinely unique drink.",
    name: "[Customer Name]",
    month: "[Month 2026]",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
  },
  {
    textBefore: "Working from Oli was easy with quiet tables, reliable Wi-Fi, and useful plug points. ",
    emphasis: "Just right for a workday.",
    name: "[Customer Name]",
    month: "[Month 2026]",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
  },
  {
    textBefore: "Our family enjoyed the Konkan Filter Coffee and Modak Tart, with warm service and fair prices. ",
    emphasis: "A lovely family stop.",
    name: "[Customer Name]",
    month: "[Month 2026]",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
  },
] as const;

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-[#F4EFE6]/60 border-t border-[#E8E0D2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1E1A17] tracking-tight">
            Google Reviews
          </h2>
          <p className="text-xs sm:text-sm text-[#5C5047] mt-2">
            <span className="font-semibold text-[#1E1A17]">{GOOGLE_RATING} ★ · {GOOGLE_REVIEW_COUNT} Google reviews</span>
          </p>
          <a
            href={CAFE_LINKS.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-4 text-xs uppercase tracking-widest font-bold text-[#712C1B] hover:text-[#4F2115] transition-colors"
          >
            Read Reviews on Google
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_TESTIMONIALS.map((review) => (
            <div
              key={review.emphasis}
              className="min-h-52 rounded-2xl border border-[#CFC3B3] bg-white/60 p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#DDD3C5] shrink-0">
                      <Image
                        src={review.avatar}
                        alt="Sample reviewer profile"
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1E1A17]">{review.name}</p>
                      <p className="text-[11px] text-[#6B6259]">{review.month}</p>
                    </div>
                  </div>
                  <span className="text-[#4285F4] text-sm font-bold" aria-label="Google review">
                    G
                  </span>
                </div>

                <div className="flex items-center gap-0.5 text-[#D49A19] mt-5" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="font-serif text-base text-[#1E1A17] leading-relaxed mt-5">
                  “{review.textBefore}<strong className="font-semibold">{review.emphasis}</strong>”
                </p>
              </div>
              <span className="inline-flex self-start px-2.5 py-1 rounded-full bg-[#EDE4D3] text-[10px] uppercase tracking-wider font-bold text-[#712C1B] mt-6">
                SAMPLE – replace before launch
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
