"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import MenuSection from "@/components/MenuSection";
import HeritageSection from "@/components/HeritageSection";
import MonsoonBanner from "@/components/MonsoonBanner";
import AmbienceSection from "@/components/AmbienceSection";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import GallerySection from "@/components/GallerySection";
import CtaNewsletter from "@/components/CtaNewsletter";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import MonsoonLoader from "@/components/MonsoonLoader";

export default function HomePage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
      {/* Monsoon Rain & Coffee Nature Introductory Loader */}
      <MonsoonLoader />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenAuth={() => setAuthModalOpen(true)} />
        <FeatureStrip />
        <MenuSection />
        <HeritageSection />
        <MonsoonBanner onOpenAuth={() => setAuthModalOpen(true)} />
        <AmbienceSection />
        <Testimonials />
        <LocationSection />
        <GallerySection />
        <CtaNewsletter onOpenAuth={() => setAuthModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Animated Motion Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </div>
  );
}
