"use client";

import React from "react";
import { Check } from "lucide-react";

interface ChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function Chip({ label, active, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer border ${
        active
          ? "bg-[#1F3D33] text-white border-[#1F3D33] shadow-sm"
          : "bg-white text-[#6B6259] border-[#E4DACB] hover:border-[#A6452F] hover:text-[#A6452F]"
      }`}
    >
      {active && <Check className="w-3.5 h-3.5" />}
      {label}
    </button>
  );
}
