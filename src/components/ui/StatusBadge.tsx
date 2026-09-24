"use client";

import React from "react";

type BadgeVariant = "open" | "closing-soon" | "closed";

interface StatusBadgeProps {
  variant: BadgeVariant;
  label: string;
}

const variantStyles: Record<BadgeVariant, { dot: string; bg: string; text: string }> = {
  open: {
    dot: "bg-[#2E7D4F]",
    bg: "bg-[#E8F5EC] border-[#C5E5CF]",
    text: "text-[#1F5C38]",
  },
  "closing-soon": {
    dot: "bg-[#C2870E]",
    bg: "bg-[#FFF6E0] border-[#F0DFA3]",
    text: "text-[#7A5506]",
  },
  closed: {
    dot: "bg-[#9A9188]",
    bg: "bg-[#F0ECE6] border-[#E4DACB]",
    text: "text-[#6B6259]",
  },
};

export default function StatusBadge({ variant, label }: StatusBadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-semibold border ${styles.bg} ${styles.text}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        {variant === "open" && (
          <span className={`absolute inset-0 rounded-full ${styles.dot} animate-ping opacity-60`} />
        )}
        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${styles.dot}`} />
      </span>
      {label}
    </span>
  );
}
