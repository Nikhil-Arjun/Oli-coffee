"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Sparkles,
  Wifi,
  Zap,
  Users,
  Heart,
  Leaf,
  HeartHandshake,
  Wheat,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActionBar from "@/components/ui/StickyActionBar";
import { KONKAN_INGREDIENTS } from "@/data/ingredientData";
import {
  FOUNDER_DATA,
  TEAM_MEMBERS,
  CAFE_VALUES,
  SPACE_AMENITIES,
} from "@/data/teamData";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5EFE3] text-[#1E1E1E]">
      <Navbar />

      {/* 1. Hero Section: Full-bleed photo with overlay */}
      <section className="relative h-[65vh] min-h-[460px] max-h-[640px] w-full flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80"
          alt="Oli Coffee cafe interior on a rainy afternoon"
          fill
          priority
          className="object-cover"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3D33] via-[#1F3D33]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-[#F5EFE3]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs uppercase tracking-widest font-semibold text-[#F5EFE3] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Our Story & Heritage
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15]">
            A Slower Way to Connect
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#F5EFE3]/90 max-w-xl leading-relaxed">
            Konkan&apos;s rain, red earth, orchards, and generous tables, brewed into every cup in
            Rajarampuri, Kolhapur.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* 2. Our Story: "Why Oli" */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#A6452F] font-bold">
              The Origin
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1E]">
              Why Oli
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#6B6259] leading-relaxed">
              <p>
                We grew up between the wild, salt-sprayed spice orchards of the Konkan coast and the
                ancient wrestling akharas of Kolhapur. In monsoon, life stopped for hours under tin
                roofs while the rain roared and coffee was poured piping hot into brass dabarahs.
              </p>
              <p>
                As specialty coffee culture grew in metro cities, it often came packaged in stark
                white concrete and rushed takeaways. We missed the warmth of true regional hospitality
                and wanted to build something quieter, friendlier, and grounded in our soil.
              </p>
              <p>
                Oli Coffee was born in Rajarampuri as an everyday neighborhood living room. Here,
                locally roasted micro-lots meet fresh coconut milk, wild kokum reductions, and dark
                Kolhapur sugarcane jaggery.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="pt-4 border-l-3 border-[#A6452F] pl-5 mt-6">
              <blockquote className="font-serif text-xl sm:text-2xl italic text-[#A6452F] leading-snug">
                &ldquo;Oli means that soft, rain-soaked feeling. We wanted a café that feels like
                it.&rdquo;
              </blockquote>
              <span className="block text-xs uppercase tracking-wider font-semibold text-[#6B6259] mt-2">
                — Tanvi Sawant, Founder
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg border border-[#E4DACB]">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                alt="Coffee brewing in Oli Coffee"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-[#FAF6EE] p-4 rounded-xl border border-[#E4DACB] shadow-md hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F3D33] text-[#F5EFE3] flex items-center justify-center font-serif font-bold text-lg">
                ओ
              </div>
              <div className="text-xs">
                <p className="font-bold text-[#1E1E1E]">ओली (Oli)</p>
                <p className="text-[#6B6259]">Rain-soaked, tender, alive</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Ingredients We Love: "Rooted in Konkan" (Horizontal Scroll Cards) */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A6452F] font-bold">
                Terroir & Provenance
              </span>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1E1E1E]">
                Rooted in Konkan
              </h2>
            </div>
            <p className="text-xs text-[#6B6259] max-w-sm">
              Sourced directly from grower families across Sindhudurg, Ratnagiri, and Kolhapur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {KONKAN_INGREDIENTS.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white/70 border border-[#E4DACB] overflow-hidden shadow-2xs hover:shadow-md transition-all group flex flex-col"
              >
                <div className="relative h-44 w-full overflow-hidden bg-[#EDE4D3]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 text-white backdrop-blur-xs">
                    {item.origin.split(",")[0]}
                  </span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#1E1E1E] mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#A6452F] font-semibold mb-2">
                      {item.origin}
                    </p>
                    <p className="text-xs text-[#6B6259] leading-relaxed">
                      {item.useCase}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Founder & Team */}
        <section>
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-[#A6452F] font-bold">
              Our Community
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1E]">
              The People Behind the Counter
            </h2>
            <p className="text-sm text-[#6B6259] mt-2">
              Every morning we measure bean density, press fresh milk, and steam batches of modak
              pastry before the shutters lift.
            </p>
          </div>

          {/* Founder Card */}
          <div className="rounded-2xl bg-white/80 border border-[#E4DACB] p-6 sm:p-8 mb-8 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 relative h-72 sm:h-80 rounded-xl overflow-hidden">
                <Image
                  src={FOUNDER_DATA.photo}
                  alt={FOUNDER_DATA.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#A6452F] font-bold">
                    Founder
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
                    {FOUNDER_DATA.name}
                  </h3>
                  <p className="text-sm text-[#6B6259] font-medium">{FOUNDER_DATA.role}</p>
                </div>
                <blockquote className="font-serif text-lg italic text-[#1F3D33] leading-relaxed">
                  {FOUNDER_DATA.quote}
                </blockquote>
                <p className="text-sm text-[#6B6259] leading-relaxed">
                  {FOUNDER_DATA.story}
                </p>
              </div>
            </div>
          </div>

          {/* 3 Team Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="rounded-xl bg-white/60 border border-[#E4DACB] p-4 flex items-center gap-3.5 shadow-2xs"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-[#A6452F]">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-serif font-bold text-base text-[#1E1E1E] truncate">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#6B6259] font-medium truncate">{member.role}</p>
                  <p className="text-[11px] text-[#A6452F] truncate mt-0.5">
                    Drink: {member.favoriteDrink}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. The Space: "Made for Staying Awhile" */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A6452F] font-bold">
                The Atmosphere
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1E]">
                Made for Staying Awhile
              </h2>
            </div>
            <p className="text-sm text-[#6B6259] max-w-sm">
              Warm terracotta tiles, teakwood sharing tables, quiet rainy corners, and pet-friendly
              porches.
            </p>
          </div>

          {/* Asymmetric Photo Grid: 1 tall + 2 small, then 2 wide */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            {/* Tall item */}
            <div className="md:col-span-5 relative h-80 md:h-[420px] rounded-2xl overflow-hidden border border-[#E4DACB]">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                alt="Quiet window work seats"
                fill
                className="object-cover hover:scale-102 transition-transform duration-500"
              />
              <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-xs">
                Window Nook & Books
              </span>
            </div>

            {/* 2 Small items stacked */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-48 md:h-[200px] rounded-2xl overflow-hidden border border-[#E4DACB]">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=600&q=80"
                  alt="Espresso station"
                  fill
                  className="object-cover hover:scale-102 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-xs">
                  Brew Station
                </span>
              </div>
              <div className="relative h-48 md:h-[200px] rounded-2xl overflow-hidden border border-[#E4DACB]">
                <Image
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80"
                  alt="Outdoor pet friendly porch"
                  fill
                  className="object-cover hover:scale-102 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-xs">
                  Pet-Friendly Porch
                </span>
              </div>

              {/* 2 Wide items */}
              <div className="sm:col-span-2 relative h-48 md:h-[204px] rounded-2xl overflow-hidden border border-[#E4DACB]">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Community wooden sharing table"
                  fill
                  className="object-cover hover:scale-102 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md bg-black/60 text-white backdrop-blur-xs">
                  Community Tables & Power Plugs
                </span>
              </div>
            </div>
          </div>

          {/* Icon Amenity Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SPACE_AMENITIES.map((amenity, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/70 border border-[#E4DACB] text-center flex flex-col items-center justify-center gap-1.5"
              >
                <div className="w-9 h-9 rounded-full bg-[#EDE4D3] text-[#A6452F] flex items-center justify-center mb-1">
                  {i === 0 && <Wifi className="w-4 h-4" />}
                  {i === 1 && <Zap className="w-4 h-4" />}
                  {i === 2 && <Users className="w-4 h-4" />}
                  {i === 3 && <Heart className="w-4 h-4" />}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1E1E]">
                  {amenity.name}
                </h4>
                <p className="text-[11px] text-[#6B6259]">{amenity.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Values: 3 stacked rows */}
        <section className="rounded-2xl bg-white/80 border border-[#E4DACB] p-6 sm:p-10 shadow-2xs">
          <div className="max-w-md mb-8">
            <span className="text-xs uppercase tracking-widest text-[#A6452F] font-bold">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-[#1E1E1E]">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAFE_VALUES.map((val, idx) => (
              <div key={val.id} className="space-y-2 p-4 rounded-xl bg-[#FAF6EE] border border-[#E4DACB]">
                <div className="w-9 h-9 rounded-full bg-[#1F3D33] text-[#F5EFE3] flex items-center justify-center mb-2">
                  {idx === 0 && <Wheat className="w-4 h-4" />}
                  {idx === 1 && <HeartHandshake className="w-4 h-4" />}
                  {idx === 2 && <Leaf className="w-4 h-4" />}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1E1E1E]">{val.title}</h3>
                <p className="text-xs text-[#6B6259] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. CTA Block (Deep Green Background #1F3D33) */}
        <section className="rounded-2xl bg-[#1F3D33] text-[#F5EFE3] p-8 sm:p-12 text-center shadow-lg">
          <span className="text-xs uppercase tracking-widest text-[#F5EFE3]/70 font-semibold">
            Rajarampuri 5th Lane, Kolhapur
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2 mb-3 text-white">
            Come In From the Rain
          </h2>
          <p className="text-sm text-[#F5EFE3]/80 max-w-lg mx-auto mb-8 leading-relaxed">
            Take a corner seat by the window, let the fog roll across the street, and let us brew
            something comforting for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/visit"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#A6452F] hover:bg-[#8C3724] text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions</span>
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[#F5EFE3] text-xs font-semibold uppercase tracking-widest border border-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>See the Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <StickyActionBar phone="+919820012345" whatsapp="+919820012345" mapsUrl="/visit" />
    </div>
  );
}
