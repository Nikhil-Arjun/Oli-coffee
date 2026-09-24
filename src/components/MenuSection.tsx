"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, Check } from "lucide-react";
import { MENU_ITEMS } from "@/data/cafeData";

interface MenuSectionProps {
  onOpenAuth: () => void;
}

export default function MenuSection({ onOpenAuth }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Offerings" },
    { id: "cold-brew", label: "Cold Brews" },
    { id: "specialty", label: "Specialty Espresso" },
    { id: "traditional", label: "Coastal Kaapi" },
    { id: "bakes", label: "Artisanal Bakes" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  const handleQuickAdd = (itemId: string) => {
    setAddedItem(itemId);
    setTimeout(() => {
      setAddedItem(null);
    }, 1800);
  };

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25934]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#C25934]">
                Curated Daily Selections
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E1A17] tracking-tight">
              Signature Sips & <br className="hidden sm:inline" />
              Konkan Bites
            </h2>
            <p className="text-sm sm:text-base text-[#6B5E55] mt-3 max-w-xl">
              Handcrafted coffee creations paired with authentic regional culinary accompaniments,
              celebrating native terroir and coastal harvest.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAuth}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#C25934] hover:text-[#A64421] transition-colors group"
            >
              <span>View Full Menu & Pricing</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? "text-white bg-[#1E1A17] shadow-sm"
                  : "text-[#6B5E55] bg-[#F4EFE6] hover:bg-[#EAE2D3] hover:text-[#1E1A17]"
              }`}
            >
              {cat.label}
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="menuCatPill"
                  className="absolute inset-0 bg-[#1E1A17] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E7DFD3] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4EFE6]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  {/* Tag Pill */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1E1A17]/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-[#FAF7F2] border border-white/20">
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg font-semibold text-[#1E1A17] group-hover:text-[#C25934] transition-colors leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5C5047] line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-3 border-t border-[#F2ECE3] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6B6259] font-medium block">
                        Price
                      </span>
                      <span className="font-serif text-lg font-bold text-[#1E1A17]">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(item.id)}
                      className={`p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        addedItem === item.id
                          ? "bg-[#384936] text-white scale-110"
                          : "bg-[#F4EFE6] text-[#1E1A17] hover:bg-[#C25934] hover:text-white"
                      }`}
                      aria-label={`Order ${item.name}`}
                    >
                      {addedItem === item.id ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
