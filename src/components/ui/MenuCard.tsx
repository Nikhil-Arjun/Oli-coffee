"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import TagPill, { TagType } from "./TagPill";

export interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: TagType[];
  badge?: TagType;
  isSoldOut?: boolean;
}

interface MenuCardProps {
  item: MenuItemData;
}

export default function MenuCard({ item }: MenuCardProps) {
  const isSoldOut = item.isSoldOut === true;

  return (
    <div
      className={`flex items-start gap-3.5 p-4 rounded-xl border transition-colors ${
        isSoldOut
          ? "bg-[#F0ECE6] border-[#E4DACB] opacity-60"
          : "bg-white border-[#E4DACB] hover:border-[#D4C8B5] hover:shadow-sm"
      }`}
    >
      {/* Thumbnail */}
      {item.image && (
        <div className="relative w-[72px] h-[72px] rounded-lg overflow-hidden shrink-0 bg-[#EDE4D3]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="72px"
            className={`object-cover ${isSoldOut ? "grayscale" : ""}`}
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className={`text-base font-semibold leading-snug ${isSoldOut ? "text-[#9A9188]" : "text-[#1E1E1E]"}`}>
              {item.name}
            </h3>
            <p className={`text-sm mt-0.5 line-clamp-1 ${isSoldOut ? "text-[#B5ADA4]" : "text-[#6B6259]"}`}>
              {item.description}
            </p>
          </div>
          <span className={`text-base font-bold whitespace-nowrap ${isSoldOut ? "text-[#9A9188]" : "text-[#1E1E1E]"}`}>
            ₹{item.price}
          </span>
        </div>

        {/* Tags Row */}
        <div className="flex items-center flex-wrap gap-1.5 mt-2">
          {item.badge && <TagPill type={item.badge} />}
          {(item.tags ?? []).map((tag) => (
            <TagPill key={tag} type={tag} />
          ))}
          {isSoldOut && <TagPill type="sold-out" />}
        </div>

        {/* Order Button - 44px min tap target for mobile conversion */}
        {!isSoldOut && (
          <a
            href={`https://wa.me/919820012345?text=${encodeURIComponent(
              `Hi Oli Coffee, I'd like to order: ${item.name} (₹${item.price})`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${item.name} on WhatsApp`}
            className="inline-flex items-center justify-center gap-2 mt-3 min-h-[44px] px-3.5 py-2 rounded-lg bg-[#2E7D4F]/10 hover:bg-[#2E7D4F]/20 text-xs font-semibold text-[#2E7D4F] active:scale-[0.98] transition-all touch-manipulation"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Order on WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  );
}
