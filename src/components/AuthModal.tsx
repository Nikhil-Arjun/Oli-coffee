"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, ArrowRight, CheckCircle2, Sparkles, Coffee } from "lucide-react";
import Link from "next/link";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<"signin" | "register">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1E1A17]/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-[#FAF7F2] border border-[#E7DFD3] shadow-2xl p-6 sm:p-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full text-[#756A63] hover:text-[#1E1A17] hover:bg-[#EFE8DD] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F3E8DF] text-[#C25934] mb-3">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1A17] font-semibold">
                Welcome to Oli Coffee
              </h3>
              <p className="text-sm text-[#756A63] mt-1">
                Your coastal coffee table awaits
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="relative flex rounded-xl bg-[#EDE5D8] p-1 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab("signin")}
                className={`relative flex-1 py-2 text-sm font-medium transition-colors z-10 ${
                  activeTab === "signin" ? "text-[#1E1A17]" : "text-[#756A63] hover:text-[#1E1A17]"
                }`}
              >
                Sign In
                {activeTab === "signin" && (
                  <motion.div
                    layoutId="authModalTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("register")}
                className={`relative flex-1 py-2 text-sm font-medium transition-colors z-10 ${
                  activeTab === "register" ? "text-[#1E1A17]" : "text-[#756A63] hover:text-[#1E1A17]"
                }`}
              >
                Join the Club
                {activeTab === "register" && (
                  <motion.div
                    layoutId="authModalTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </div>

            {/* Success State */}
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E2F0D9] text-[#384936] mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl text-[#1E1A17] font-semibold">
                  {activeTab === "signin" ? "Signed in successfully!" : "Account created!"}
                </h4>
                <p className="text-sm text-[#756A63] mt-1">
                  Brewing your personalized coffee journey...
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {activeTab === "register" && (
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#756A63] mb-1.5">
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
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDD4C5] bg-white text-[#1E1A17] text-sm placeholder:text-[#BBB0A4] focus:outline-none focus:ring-2 focus:ring-[#C25934] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#756A63] mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89E96]" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rohan@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDD4C5] bg-white text-[#1E1A17] text-sm placeholder:text-[#BBB0A4] focus:outline-none focus:ring-2 focus:ring-[#C25934] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#756A63]">
                      Password
                    </label>
                    {activeTab === "signin" && (
                      <a href="#forgot" className="text-xs text-[#C25934] hover:underline font-medium">
                        Forgot?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89E96]" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DDD4C5] bg-white text-[#1E1A17] text-sm placeholder:text-[#BBB0A4] focus:outline-none focus:ring-2 focus:ring-[#C25934] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 py-3 px-5 rounded-xl bg-[#C25934] hover:bg-[#A64421] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{activeTab === "signin" ? "Sign In to Oli Coffee" : "Create My Account"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}

            {/* Social Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E2D8C9]" />
              </div>
              <span className="relative px-3 bg-[#FAF7F2] text-xs uppercase tracking-wider text-[#9E9287]">
                Or continue with
              </span>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#DDD4C5] bg-white hover:bg-[#F7F2EA] text-xs font-medium text-[#1E1A17] transition-colors"
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
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#DDD4C5] bg-white hover:bg-[#F7F2EA] text-xs font-medium text-[#1E1A17] transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.92-.93.04-2.06.63-2.73 1.4-.59.67-1.11 1.77-.97 2.82 1.04.08 2.13-.53 2.76-1.3z" />
                </svg>
                Apple
              </button>
            </div>

            {/* Direct Link to Standalone Login Page */}
            <div className="mt-6 pt-4 border-t border-[#E7DFD3] text-center">
              <Link
                href="/login"
                onClick={onClose}
                className="text-xs text-[#756A63] hover:text-[#C25934] transition-colors inline-flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Prefer dedicated full-screen login experience? Click here</span>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
