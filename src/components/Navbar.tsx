"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Menu, X, ArrowUpRight, User } from "lucide-react";

interface NavbarProps {
  onOpenAuth?: () => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Visit & Hours", href: "/visit" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5EFE3]/95 backdrop-blur-md shadow-sm border-b border-[#E4DACB] py-3.5"
          : "bg-[#F5EFE3]/80 backdrop-blur-sm py-4 border-b border-[#E4DACB]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-[#1F3D33] flex items-center justify-center text-[#F5EFE3] transition-transform group-hover:scale-105 duration-300 shadow-sm">
              <Coffee className="w-5 h-5 text-[#F5EFE3]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E1E1E]">
                Oli Coffee
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#6B6259] font-medium -mt-1">
                Rajarampuri · Kolhapur
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest font-semibold transition-colors relative py-1 ${
                    isActive
                      ? "text-[#A6452F] after:w-full"
                      : "text-[#1E1E1E] hover:text-[#A6452F] after:w-0"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#A6452F] hover:after:w-full after:transition-all after:duration-300`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenAuth ? (
              <button
                onClick={onOpenAuth}
                className="text-xs uppercase tracking-widest font-semibold text-[#1E1E1E] hover:text-[#A6452F] transition-colors px-3 py-2 flex items-center gap-1.5 cursor-pointer"
              >
                <User className="w-4 h-4 text-[#A6452F]" />
                <span>Sign In</span>
              </button>
            ) : (
              <Link
                href="/login"
                className="text-xs uppercase tracking-widest font-semibold text-[#1E1E1E] hover:text-[#A6452F] transition-colors px-3 py-2 flex items-center gap-1.5"
              >
                <User className="w-4 h-4 text-[#A6452F]" />
                <span>Sign In</span>
              </Link>
            )}

            <Link
              href="/menu"
              className="px-5 py-2.5 rounded-full bg-[#A6452F] hover:bg-[#8C3724] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>Order Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenAuth ? (
              <button
                onClick={onOpenAuth}
                className="p-2 text-[#1E1E1E] hover:text-[#A6452F]"
                aria-label="Sign In"
              >
                <User className="w-5 h-5" />
              </button>
            ) : (
              <Link
                href="/login"
                className="p-2 text-[#1E1E1E] hover:text-[#A6452F]"
                aria-label="Sign In"
              >
                <User className="w-5 h-5" />
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1E1E1E] hover:bg-[#E4DACB]/50 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#F5EFE3] border-b border-[#E4DACB] px-4 pt-3 pb-6 shadow-lg"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 px-3 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#EDE4D3] text-[#A6452F]"
                        : "text-[#1E1E1E] hover:bg-[#EDE4D3]/60"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-[#E4DACB] flex flex-col gap-2">
                <Link
                  href="/visit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-[#1F3D33] text-[#F5EFE3] text-sm font-semibold shadow-sm"
                >
                  Visit Café · Get Directions
                </Link>
                <Link
                  href="/menu"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-[#A6452F] text-white text-sm font-semibold shadow-sm"
                >
                  View Full Menu
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
