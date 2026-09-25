"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Search,
  MessageCircle,
  MapPin,
  Sparkles,
  Info,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActionBar from "@/components/ui/StickyActionBar";
import Chip from "@/components/ui/Chip";
import TagPill from "@/components/ui/TagPill";
import MenuCard from "@/components/ui/MenuCard";
import {
  MENU_ITEMS,
  MONSOON_HIGHLIGHTS,
  CATEGORIES,
  MenuItem,
} from "@/data/menuData";

const FILTER_OPTIONS = [
  { id: "veg", label: "Veg" },
  { id: "vegan", label: "Vegan" },
  { id: "non-coffee", label: "Non-coffee" },
  { id: "nut-free", label: "Nut-free" },
  { id: "under-150", label: "Under ₹150" },
];

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedFilters([]);
    setActiveCategory("All");
  };

  // Filtered menu items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== "All" && item.category !== activeCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCategory) {
          return false;
        }
      }

      // Multi-select filters
      if (selectedFilters.includes("veg") && !item.isVeg) return false;
      if (selectedFilters.includes("vegan") && !item.isVegan) return false;
      if (selectedFilters.includes("non-coffee") && item.isCoffee) return false;
      if (selectedFilters.includes("nut-free") && !item.isNutFree) return false;
      if (selectedFilters.includes("under-150") && item.price >= 150) return false;

      return true;
    });
  }, [searchQuery, selectedFilters, activeCategory]);

  // Group items by category
  const groupedItems = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {};
    for (const cat of CATEGORIES) {
      const items = filteredItems.filter((item) => item.category === cat);
      if (items.length > 0) {
        groups[cat] = items;
      }
    }
    return groups;
  }, [filteredItems]);

  const hasActiveFilters = searchQuery !== "" || selectedFilters.length > 0 || activeCategory !== "All";

  return (
    <div className="min-h-screen bg-[#F5EFE3] text-[#1E1E1E]">
      <Navbar />

      <main className="pt-24 pb-28 md:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Back Nav & Header */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#6B6259] hover:text-[#A6452F] font-semibold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#A6452F] font-bold">
                Oli Coffee Rajarampuri
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1E1E] mt-1">
                Our Menu
              </h1>
            </div>
            <p className="text-sm text-[#6B6259] max-w-md leading-relaxed">
              Brewed fresh daily with coconut, jaggery, cashew, kokum, and seasonal fruit. All
              prices include taxes.
            </p>
          </div>
        </div>

        {/* Search Field */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B6259]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search drinks & bites (e.g., cold brew, vegan, brownie)"
            className="w-full h-13 pl-11 pr-10 rounded-xl bg-white/70 border border-[#E4DACB] text-sm text-[#1E1E1E] placeholder-[#6B6259] focus:outline-none focus:ring-2 focus:ring-[#A6452F] focus:border-transparent transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6B6259] hover:text-[#1E1E1E]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Multi-Select Filter Chips Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
          <span className="text-xs uppercase tracking-wider text-[#6B6259] font-bold shrink-0 mr-1">
            Filter:
          </span>
          {FILTER_OPTIONS.map((f) => (
            <Chip
              key={f.id}
              label={f.label}
              active={selectedFilters.includes(f.id)}
              onClick={() => toggleFilter(f.id)}
            />
          ))}
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-xs text-[#A6452F] underline hover:text-[#8C3724] font-semibold shrink-0 ml-2"
            >
              Reset
            </button>
          )}
        </div>

        {/* Sticky Category Tabs Bar */}
        <div className="sticky top-18 z-30 bg-[#F5EFE3]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-y border-[#E4DACB]/70 mb-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory("All")}
                className={`min-h-12 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === "All"
                  ? "bg-[#1F3D33] text-[#F5EFE3] shadow-sm"
                  : "bg-white/60 text-[#1E1E1E] hover:bg-white border border-[#E4DACB]"
              }`}
            >
              All Items ({filteredItems.length})
            </button>
            {CATEGORIES.map((category) => {
              const count = filteredItems.filter((i) => i.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                    className={`min-h-12 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-[#1F3D33] text-[#F5EFE3] shadow-sm"
                      : "bg-white/60 text-[#1E1E1E] hover:bg-white border border-[#E4DACB]"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Monsoon Seasonal Specials Banner (Highlights) */}
        {(activeCategory === "All" || activeCategory === "Seasonal") && !searchQuery && selectedFilters.length === 0 && (
          <section className="mb-12 rounded-2xl bg-[#A6452F] text-[#F5EFE3] p-5 sm:p-7 shadow-md relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-md">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-widest text-[#F5EFE3] mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5EFE3]" />
                  Monsoon Menu · Limited Time
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                  Warm Rains & Seasonal Brews
                </h2>
                <p className="text-xs sm:text-sm text-[#F5EFE3]/90 leading-relaxed">
                  Crafted for wet afternoons in Rajarampuri. Handcrafted with early Ratnagiri mango
                  and fire-brewed wild kokum kadha.
                </p>
              </div>

              {/* 2 Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 shrink-0 md:max-w-lg w-full">
                {MONSOON_HIGHLIGHTS.map((special) => (
                  <div
                    key={special.id}
                    className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center gap-3.5"
                  >
                    {special.image && (
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image
                          src={special.image}
                          alt={special.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold text-sm text-white truncate">
                          {special.name}
                        </h3>
                        <span className="font-bold text-sm text-white shrink-0">
                          ₹{special.price}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#F5EFE3]/80 line-clamp-1 mt-0.5">
                        {special.description}
                      </p>
                      <a
                        href={`https://wa.me/919820012345?text=${encodeURIComponent(
                          `Hi Oli Coffee, I'd like to order: ${special.name} (₹${special.price})`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Order ${special.name} via WhatsApp`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/15 hover:bg-white/25 px-3 py-2 mt-2 rounded-lg min-h-[44px] touch-manipulation transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Order via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Menu Sections List */}
        {Object.keys(groupedItems).length > 0 ? (
          <div className="space-y-12">
            {Object.entries(groupedItems).map(([category, items]) => (
              <section key={category} id={category.toLowerCase().replace(/[^a-z0-9]/g, "-")}>
                <div className="flex items-baseline justify-between border-b border-[#E4DACB] pb-3 mb-5">
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-[#1E1E1E]">
                    {category}
                  </h2>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#6B6259]">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                {/* Responsive Grid: 1-col on mobile, 2-col on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-white/40 rounded-2xl border border-[#E4DACB]">
            <div className="w-12 h-12 rounded-full bg-[#EDE4D3] text-[#A6452F] flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1E1E1E] mb-1">
              No matches found
            </h3>
            <p className="text-sm text-[#6B6259] max-w-sm mx-auto mb-4">
              Try searching for &apos;cold brew&apos;, &apos;vegan&apos;, &apos;jaggery&apos;, or clear all active filters.
            </p>
            <button
              onClick={clearAllFilters}
              className="px-5 py-2.5 rounded-full bg-[#A6452F] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#8C3724] transition-all"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Allergen & Dietary Legend Card */}
        <section className="mt-14 p-5 sm:p-6 rounded-2xl bg-white/70 border border-[#E4DACB] shadow-2xs">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#A6452F] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#1E1E1E] mb-2">
                Allergen & Dietary Legend
              </h3>
              <div className="flex flex-wrap gap-2.5 mb-3">
                <TagPill type="veg" />
                <TagPill type="vegan" />
                <TagPill type="nuts" />
                <TagPill type="dairy" />
                <TagPill type="gluten" />
              </div>
              <p className="text-xs text-[#6B6259] leading-relaxed">
                Please tell our team about any allergies prior to ordering. Our kitchen handles
                roasted cashews, dairy, and gluten grains. Plant milks (coconut, cashew, oat) are
                prepared on dedicated frothing wands.
              </p>
            </div>
          </div>
        </section>

        {/* Bottom Barista Pick CTA Block */}
        <section className="mt-10 rounded-2xl bg-[#1F3D33] text-[#F5EFE3] p-6 sm:p-8 text-center shadow-md">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            Can&apos;t decide? Ask for today&apos;s barista pick.
          </h2>
          <p className="text-xs sm:text-sm text-[#F5EFE3]/80 max-w-md mx-auto mb-6">
            Tell us your mood—something warm and sweet, cold and citrusy, or deep and rich—and we&apos;ll
            recommend the perfect pour.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919820012345?text=Hi%20Oli%20Coffee%2C%20what%20is%20today%27s%20barista%20pick%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#A6452F] hover:bg-[#8C3724] text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#F5EFE3]" />
              <span>Order on WhatsApp</span>
            </a>
            <Link
              href="/visit"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5EFE3] text-xs font-semibold uppercase tracking-widest border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#F5EFE3]" />
              <span>Get Directions</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <StickyActionBar phone="+919820012345" whatsapp="+919820012345" mapsUrl="/visit" />
    </div>
  );
}
