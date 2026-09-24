"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Coffee } from "lucide-react";

interface CtaNewsletterProps {
  onOpenAuth: () => void;
}

export default function CtaNewsletter({ onOpenAuth }: CtaNewsletterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="py-24 bg-[#171412] text-white relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C25934]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Coffee className="w-4 h-4 text-[#C25934]" />
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#E29272]">
              Coastal Hospitality
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white mb-4">
            Come In From the Rain
          </h2>

          <p className="text-base sm:text-lg text-[#C7B9AC] max-w-xl mx-auto font-light leading-relaxed mb-10">
            Whether looking for quiet contemplation with a single-origin pour-over or sharing laughter
            over warm coastal filter kaapi, our doors are always open.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenAuth}
              className="px-8 py-3.5 rounded-full bg-[#C25934] hover:bg-[#A64421] text-white text-xs sm:text-sm uppercase tracking-wider font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              Order For Pickup
            </button>

            <a
              href="#location"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all backdrop-blur-sm"
            >
              Find a Cafe
            </a>
          </div>

          {/* Sunday Brew Club Newsletter */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl mx-auto">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-2">
              Join the Sunday Brew Club
            </h3>
            <p className="text-xs sm:text-sm text-[#BDB0A3] mb-6">
              Receive secret seasonal recipes, invite-only cupping sessions, and first access to limited micro-lot roast drops.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-[#384936] text-emerald-200 text-sm font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>You&apos;re on the list! Welcome to the fellowship.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 px-5 py-3.5 rounded-full bg-black/40 border border-white/15 text-sm text-white placeholder:text-[#8C8075] focus:outline-none focus:ring-2 focus:ring-[#C25934] transition-all"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#C25934] hover:bg-[#A64421] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
