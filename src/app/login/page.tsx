"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Mail,
  Lock,
  User,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginPage() {
  const [mode, setMode] = useState<"signin" | "register">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-[#FAF7F2]">
      {/* Left Column: Atmospheric Brand Visual (Desktop) */}
      <div className="hidden lg:relative lg:col-span-6 lg:flex flex-col justify-between p-12 bg-[#1E1A17] text-white overflow-hidden">
        {/* Background Image with Rain Window Cafe Glow */}
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=85"
          alt="Oli Coffee sanctuary interior"
          fill
          priority
          sizes="50vw"
          className="object-cover opacity-60"
        />

        {/* Ambient Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14110F] via-[#1E1A17]/70 to-[#14110F]/80" />

        {/* Top Header Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#FAF7F2] text-[#1E1A17] flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <Coffee className="w-6 h-6 text-[#1E1A17]" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                Oli Coffee
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4C8B8] font-medium">
                Artisanal Roasters
              </span>
            </div>
          </Link>
        </div>

        {/* Center Quote */}
        <div className="relative z-10 max-w-lg my-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-[#E29272] uppercase tracking-widest font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sanctuary Portal</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight text-white mb-6">
              Konkan Flavours, <br />
              <span className="italic text-[#E29272]">Thoughtfully</span> Brewed.
            </h2>

            <p className="text-base text-[#D4C8B8] leading-relaxed mb-8">
              Save your favorite orders, hear about seasonal drops, and make your next visit feel
              like coming home.
            </p>

            <div className="flex items-center gap-4 pt-6 border-t border-white/15">
              <div className="w-10 h-10 rounded-full bg-[#384936] flex items-center justify-center text-emerald-300">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Direct-to-Estate Traceability</p>
                <p className="text-[11px] text-[#A89E96]">100% shade-grown regenerative coffee</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Location Tag */}
        <div className="relative z-10 flex items-center justify-between text-xs text-[#A89E96]">
          <span>Rajarampuri • Kolhapur</span>
          <span>© {new Date().getFullYear()} Oli Coffee</span>
        </div>
      </div>

      {/* Right Column: Interactive Login / Register Form */}
      <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 lg:py-20 relative">
        {/* Back Link */}
        <div className="max-w-md mx-auto w-full mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#756A63] hover:text-[#C25934] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Sanctuary</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto w-full bg-white rounded-3xl p-8 sm:p-10 border border-[#E7DFD3] shadow-xl relative"
        >
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-full bg-[#1E1A17] text-white flex items-center justify-center">
              <Coffee className="w-4 h-4" />
            </div>
            <span className="font-serif text-xl font-bold text-[#1E1A17]">Oli Coffee</span>
          </div>

          <div className="mb-6">
            <h1 className="font-serif text-3xl font-semibold text-[#1E1A17] tracking-tight">
              {mode === "signin" ? "Welcome Back" : "Join the Fellowship"}
            </h1>
            <p className="text-xs sm:text-sm text-[#756A63] mt-1.5">
              {mode === "signin"
                ? "Enter your credentials to enter your coffee dashboard."
                : "Create your account for exclusive coffee drops & table bookings."}
            </p>
          </div>

          {/* Tab Switcher with Motion Layout */}
          <div className="relative flex rounded-xl bg-[#F4EFE6] p-1 mb-8">
            <button
              type="button"
              onClick={() => {
                setMode("signin");
                setIsSuccess(false);
              }}
              className={`relative flex-1 py-2.5 text-xs sm:text-sm font-semibold transition-colors z-10 cursor-pointer ${
                mode === "signin" ? "text-[#1E1A17]" : "text-[#756A63] hover:text-[#1E1A17]"
              }`}
            >
              Sign In
              {mode === "signin" && (
                <motion.div
                  layoutId="loginPageTab"
                  className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("register");
                setIsSuccess(false);
              }}
              className={`relative flex-1 py-2.5 text-xs sm:text-sm font-semibold transition-colors z-10 cursor-pointer ${
                mode === "register" ? "text-[#1E1A17]" : "text-[#756A63] hover:text-[#1E1A17]"
              }`}
            >
              Create Account
              {mode === "register" && (
                <motion.div
                  layoutId="loginPageTab"
                  className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}
            </button>
          </div>

          {/* Form */}
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#E2F0D9] text-[#384936] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-[#1E1A17]">
                {mode === "signin" ? "Signed in successfully!" : "Account Created!"}
              </h3>
              <p className="text-xs sm:text-sm text-[#756A63] mt-2 mb-6">
                Welcome to Oli Coffee. Your next coastal coffee experience is ready.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C25934] hover:bg-[#A64421] text-white text-xs uppercase tracking-wider font-bold shadow-md transition-all"
              >
                <span>Return to Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <AnimatePresence mode="wait">
                {mode === "register" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5E55] mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89E96]" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rohan Deshmukh"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#DDD4C5] bg-[#FAF7F2] text-[#1E1A17] text-sm placeholder:text-[#BBB0A4] focus:outline-none focus:ring-2 focus:ring-[#C25934] focus:bg-white transition-all"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5E55] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89E96]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@konkancoffee.in"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#DDD4C5] bg-[#FAF7F2] text-[#1E1A17] text-sm placeholder:text-[#BBB0A4] focus:outline-none focus:ring-2 focus:ring-[#C25934] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B5E55]">
                    Password
                  </label>
                  {mode === "signin" && (
                    <a href="#forgot" className="text-xs text-[#C25934] hover:underline font-medium">
                      Forgot Password?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89E96]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-11 py-3 rounded-xl border border-[#DDD4C5] bg-[#FAF7F2] text-[#1E1A17] text-sm placeholder:text-[#BBB0A4] focus:outline-none focus:ring-2 focus:ring-[#C25934] focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A89E96] hover:text-[#1E1A17]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-[#DDD4C5] text-[#C25934] focus:ring-[#C25934]"
                  />
                  <span className="text-xs text-[#756A63]">Remember this sanctuary</span>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 py-3.5 px-6 rounded-xl bg-[#C25934] hover:bg-[#A64421] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{mode === "signin" ? "Sign In to Sanctuary" : "Complete Registration"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Social Login */}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E8E0D2]" />
                </div>
                <span className="relative px-3 bg-white text-[11px] uppercase tracking-wider text-[#A89E96]">
                  Or authenticate with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-[#DDD4C5] hover:bg-[#F4EFE6] text-xs font-medium text-[#1E1A17] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-[#DDD4C5] hover:bg-[#F4EFE6] text-xs font-medium text-[#1E1A17] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.92-.93.04-2.06.63-2.73 1.4-.59.67-1.11 1.77-.97 2.82 1.04.08 2.13-.53 2.76-1.3z" />
                  </svg>
                  Apple
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </main>
  );
}
