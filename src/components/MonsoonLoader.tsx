"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Leaf } from "lucide-react";

interface MonsoonLoaderProps {
  /** Callback when loader finishes exiting */
  onComplete?: () => void;
  /** Force show regardless of sessionStorage */
  forceShow?: boolean;
}

export default function MonsoonLoader({ onComplete, forceShow = false }: MonsoonLoaderProps) {
  const [loading, setLoading] = useState(true);
  const [phaseIndex, setPhaseIndex] = useState(0);

  const poeticPhases = [
    { en: "Rainfall on laterite earth", mr: "पावसाची चाहूल व तांबडी माती" },
    { en: "Shade-grown beans from the Ghats", mr: "घाटमाथ्याची सावलीतील कॉफी" },
    { en: "Slow coastal drip steeping", mr: "हळुवार सुगंधी फिल्टर कापी" },
    { en: "Welcome to Oli Coffee", mr: "ओली कॉफीमध्ये आपले स्वागत" },
  ];

  useEffect(() => {
    // Check if user already saw the loader in this session (in production only)
    if (!forceShow && typeof window !== "undefined" && process.env.NODE_ENV === "production") {
      const hasSeen = sessionStorage.getItem("oli_monsoon_loader_seen");
      if (hasSeen === "true") {
        const skipTimer = window.setTimeout(() => {
          setLoading(false);
          onComplete?.();
        }, 0);
        return () => window.clearTimeout(skipTimer);
      }
    }

    // Lock body scroll during intro
    document.body.style.overflow = "hidden";

    // Progress counter animation calibrated to exactly 3.0 seconds
    const startTime = Date.now();
    const duration = 3000; // 3.0 seconds

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));

      if (pct < 25) setPhaseIndex(0);
      else if (pct < 55) setPhaseIndex(1);
      else if (pct < 85) setPhaseIndex(2);
      else setPhaseIndex(3);

      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "";
          onComplete?.();
        }, 200);
      }
    }, 20);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, [forceShow, onComplete]);

  const handleSkip = () => {
    setLoading(false);
    document.body.style.overflow = "";
    if (typeof window !== "undefined") {
      sessionStorage.setItem("oli_monsoon_loader_seen", "true");
    }
    onComplete?.();
  };

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="monsoon-loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -28,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#141A17] text-[#FAF7F2] select-none overflow-hidden"
        >
          {/* ─── Ambient Monsoon Environment ─── */}
          {/* Deep forest and laterite radial glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#1F3D33]/60 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#A6452F]/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C25934]/12 rounded-full blur-[140px] pointer-events-none" />

          {/* ─── Animated Raindrops Canvas ─── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
            {[...Array(28)].map((_, i) => {
              const left = (i * 3.7 + (i % 3) * 1.5) % 100;
              const duration = 0.9 + (i % 5) * 0.22;
              const delay = (i * 0.13) % 1.5;
              const height = 18 + (i % 4) * 12;
              const opacity = 0.25 + (i % 3) * 0.25;

              return (
                <motion.div
                  key={`raindrop-${i}`}
                  initial={{ y: -60, opacity: 0 }}
                  animate={{
                    y: ["0vh", "110vh"],
                    opacity: [0, opacity, opacity, 0],
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    left: `${left}%`,
                    height: `${height}px`,
                  }}
                  className="absolute w-[1.5px] bg-gradient-to-b from-transparent via-[#E2EDDE]/70 to-[#C9DAC4]"
                />
              );
            })}
          </div>

          {/* ─── Skip Button ─── */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] uppercase tracking-widest text-[#DDD4C5] hover:text-white backdrop-blur-md transition-all cursor-pointer"
          >
            Skip Intro →
          </button>

          {/* ─── Central Coffee & Nature Core Emblem ─── */}
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            {/* Medallion / Illustration */}
            <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
              {/* Concentric rain ripples behind cup */}
              <motion.div
                animate={{
                  scale: [1, 1.45, 1.8],
                  opacity: [0.6, 0.25, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute w-24 h-24 rounded-full border border-[#C25934]/40"
              />
              <motion.div
                animate={{
                  scale: [1, 1.5, 2],
                  opacity: [0.5, 0.2, 0],
                }}
                transition={{
                  duration: 2.2,
                  delay: 0.7,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute w-24 h-24 rounded-full border border-[#4E7A60]/30"
              />

              {/* Decorative Nature Flora / Coffee Leaves Wings */}
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none opacity-70">
                {/* Left Leaf branch */}
                <motion.div
                  initial={{ rotate: -15, opacity: 0 }}
                  animate={{ rotate: [-15, -8, -15], opacity: 0.8 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-8 h-8 text-[#5E8C70] -ml-2"
                >
                  <Leaf className="w-full h-full transform -scale-x-100" />
                </motion.div>
                {/* Right Leaf branch */}
                <motion.div
                  initial={{ rotate: 15, opacity: 0 }}
                  animate={{ rotate: [15, 8, 15], opacity: 0.8 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="w-8 h-8 text-[#5E8C70] -mr-2"
                >
                  <Leaf className="w-full h-full" />
                </motion.div>
              </div>

              {/* Handcrafted Coffee Cup & Filter Brass Tumbler SVG */}
              <div className="relative z-10">
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-[0_12px_24px_rgba(0,0,0,0.4)]"
                >
                  {/* Rising Aromatic Steam Waves */}
                  <motion.path
                    d="M44 26 C42 20 48 16 46 10 C45 7 42 5 44 2"
                    stroke="#E4DACB"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0, y: 4 }}
                    animate={{
                      pathLength: [0, 1, 1],
                      opacity: [0, 0.7, 0],
                      y: [-2, -10],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.path
                    d="M56 26 C58 20 52 16 54 10 C55 7 58 5 56 2"
                    stroke="#E29272"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0, y: 4 }}
                    animate={{
                      pathLength: [0, 1, 1],
                      opacity: [0, 0.65, 0],
                      y: [-1, -11],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  />

                  {/* Falling Raindrop / Single Coffee Drip into Cup */}
                  <motion.ellipse
                    cx="50"
                    cy="20"
                    rx="2"
                    ry="3.5"
                    fill="#C25934"
                    animate={{
                      y: [0, 18],
                      opacity: [0, 1, 0],
                      scaleY: [1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeIn",
                    }}
                  />

                  {/* Cup Saucer Plate */}
                  <ellipse cx="50" cy="80" rx="34" ry="7" fill="#1F1A17" stroke="#3D332D" strokeWidth="2" />
                  <ellipse cx="50" cy="79" rx="26" ry="4.5" fill="#2D2520" />

                  {/* Ceramic Cup Body */}
                  <path
                    d="M26 42 C26 62 35 74 50 74 C65 74 74 62 74 42 Z"
                    fill="url(#cupGradient)"
                    stroke="#DDD4C5"
                    strokeWidth="1.8"
                  />

                  {/* Cup Inner Rim & Coffee Crema Liquid */}
                  <ellipse cx="50" cy="42" rx="24" ry="7.5" fill="#1C140F" stroke="#EFE7DC" strokeWidth="1.5" />
                  <ellipse cx="50" cy="42" rx="20" ry="5.5" fill="url(#coffeeLiquid)" />

                  {/* Golden Crema Center Swirl */}
                  <ellipse cx="50" cy="42.5" rx="11" ry="2.8" fill="#C2870E" opacity="0.85" />
                  <ellipse cx="49" cy="42.5" rx="5" ry="1.2" fill="#FAF6EE" opacity="0.9" />

                  {/* Cup Handle */}
                  <path
                    d="M72 46 C83 46 84 62 70 65"
                    stroke="#DDD4C5"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="cupGradient" x1="26" y1="42" x2="74" y2="74" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FAF7F2" />
                      <stop offset="0.5" stopColor="#EDE4D3" />
                      <stop offset="1" stopColor="#C4B7AB" />
                    </linearGradient>
                    <radialGradient id="coffeeLiquid" cx="50" cy="42" r="20" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8C3724" />
                      <stop offset="0.7" stopColor="#4A1E14" />
                      <stop offset="1" stopColor="#2A0F0A" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* ─── Brand Heading ─── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-1">
                Oli Coffee
              </h1>

              <p className="text-[11px] uppercase tracking-widest text-[#C4B7AB] font-medium mb-3">
                Rajarampuri · Kolhapur
              </p>
            </motion.div>

            {/* ─── Cycling Poetic Narrative ─── */}
            <div className="h-12 flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={phaseIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center"
                >
                  <span className="text-sm sm:text-base text-[#FAF7F2] font-serif tracking-wide text-center">
                    &quot;{poeticPhases[phaseIndex].en}&quot;
                  </span>
                  <span className="text-xs sm:text-sm text-[#E29272] font-serif tracking-wide mt-1 text-center font-normal">
                    {poeticPhases[phaseIndex].mr}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ─── Bottom Ambient Tag ─── */}
          <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-2 text-[10px] tracking-widest uppercase text-[#73685F] pointer-events-none">
            <Sparkles className="w-3 h-3 text-[#A6452F]" />
            <span>Rain on Rajarampuri windows</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
