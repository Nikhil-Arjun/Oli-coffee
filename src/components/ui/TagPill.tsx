"use client";

import React from "react";

export type TagType =
  | "signature"
  | "most-ordered"
  | "chefs-pick"
  | "new"
  | "veg"
  | "vegan"
  | "nuts"
  | "dairy"
  | "gluten"
  | "sold-out";

interface TagPillProps {
  type: TagType;
  label?: string;
}

const TAG_CONFIG: Record<TagType, { bg: string; text: string; defaultLabel: string }> = {
  signature: { bg: "bg-[#A6452F]/10", text: "text-[#A6452F]", defaultLabel: "Signature" },
  "most-ordered": { bg: "bg-[#C2870E]/10", text: "text-[#8A6108]", defaultLabel: "Most Ordered" },
  "chefs-pick": { bg: "bg-[#1F3D33]/10", text: "text-[#1F3D33]", defaultLabel: "Chef's Pick" },
  new: { bg: "bg-[#2E7D4F]/10", text: "text-[#2E7D4F]", defaultLabel: "New" },
  veg: { bg: "bg-[#2E7D4F]/10", text: "text-[#2E7D4F]", defaultLabel: "Veg" },
  vegan: { bg: "bg-[#1F3D33]/10", text: "text-[#1F3D33]", defaultLabel: "Vegan" },
  nuts: { bg: "bg-[#C2870E]/10", text: "text-[#8A6108]", defaultLabel: "Contains Nuts" },
  dairy: { bg: "bg-[#6B6259]/10", text: "text-[#6B6259]", defaultLabel: "Contains Dairy" },
  gluten: { bg: "bg-[#6B6259]/10", text: "text-[#6B6259]", defaultLabel: "Contains Gluten" },
  "sold-out": { bg: "bg-[#1E1E1E]/8", text: "text-[#9A9188]", defaultLabel: "Sold Out Today" },
};

export default function TagPill({ type, label }: TagPillProps) {
  const config = TAG_CONFIG[type];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold tracking-wide uppercase ${config.bg} ${config.text}`}
    >
      {label || config.defaultLabel}
    </span>
  );
}
