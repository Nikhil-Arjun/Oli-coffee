"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import LocationSection from "@/components/LocationSection";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";

export default function VisitPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5EFE3]">
      <Navbar />
      <main className="pt-20">
        <LocationSection />
      </main>
      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
}
