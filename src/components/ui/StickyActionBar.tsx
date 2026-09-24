"use client";

import React from "react";
import { Phone, Navigation, MessageCircle } from "lucide-react";

interface StickyActionBarProps {
  phone?: string;
  whatsapp?: string;
  mapsUrl?: string;
}

export default function StickyActionBar({
  phone = "tel:+91XXXXXXXXXX",
  whatsapp = "https://wa.me/91XXXXXXXXXX",
  mapsUrl = "https://maps.google.com/?q=Rajarampuri+5th+Lane+Kolhapur",
}: StickyActionBarProps) {
  /*
    Design Token Hierarchy:
    - Primary Café Actions: Terracotta / Laterite (#A6452F / #C25934)
    - Secondary Actions: Outlined / Cream (#EDE4D3)
    - Direct Chat / WhatsApp: #2E7D4F (deliberately preserved for immediate WhatsApp brand recognition)
  */
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-nav border-t border-[#E4DACB] px-4 py-2.5 sm:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={phone}
          aria-label="Call Oli Coffee"
          className="flex flex-col items-center justify-center gap-1 min-h-[48px] py-1.5 rounded-xl text-[#1E1E1E] hover:bg-[#EDE4D3] active:scale-[0.98] transition-all touch-manipulation"
        >
          <Phone className="w-5 h-5 text-[#A6452F]" />
          <span className="text-[11px] font-semibold">Call</span>
        </a>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions to Rajarampuri cafe"
          className="flex flex-col items-center justify-center gap-1 min-h-[48px] py-1.5 rounded-xl text-[#1E1E1E] hover:bg-[#EDE4D3] active:scale-[0.98] transition-all touch-manipulation"
        >
          <Navigation className="w-5 h-5 text-[#A6452F]" />
          <span className="text-[11px] font-semibold">Directions</span>
        </a>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Oli Coffee on WhatsApp"
          className="flex flex-col items-center justify-center gap-1 min-h-[48px] py-1.5 rounded-xl bg-[#2E7D4F] text-white hover:bg-[#256b42] active:scale-[0.98] transition-all shadow-sm touch-manipulation"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
