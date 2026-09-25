"use client";

import React from "react";
import Link from "next/link";
import { Coffee, MapPin, Phone, Mail, Star } from "lucide-react";
import { SIGNATURE_DRINK, SIGNATURE_COOLER } from "@/data/menuData";
import { CAFE_LINKS } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-[#F5EFE3] border-t border-[#E4DACB] pt-16 pb-28 md:pb-14 text-[#6B6259]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#E4DACB]">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-[#1F3D33] flex items-center justify-center text-[#F5EFE3] transition-transform group-hover:scale-105">
                <Coffee className="w-5 h-5 text-[#F5EFE3]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#1E1E1E]">
                  Oli Coffee
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#6B6259] font-medium -mt-1">
                  Rajarampuri · Kolhapur
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#6B6259] max-w-sm mb-6 leading-relaxed">
              A contemporary Konkan café. Konkan&apos;s rain, red earth, orchards, and generous
              tables, brewed fresh daily into every single cup.
            </p>

            <div className="space-y-2.5 text-xs text-[#6B6259]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A6452F] shrink-0 mt-0.5" />
                <span>
                  Shop 4, Ground Floor, Rajarampuri 5th Lane, Kolhapur, Maharashtra 416008
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#A6452F] shrink-0" />
                <a href={CAFE_LINKS.phone}>[PHONE] (Tue–Sun, 8 AM – 10 PM)</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#A6452F] shrink-0" />
                <span>hello@olicoffee.in</span>
              </p>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#1E1E1E] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#A6452F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#A6452F] transition-colors">
                  Full Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#A6452F] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-[#A6452F] transition-colors">
                  Visit & Location
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-[#A6452F] transition-colors">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#1E1E1E] mb-4">
              Signatures
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/menu" className="hover:text-[#A6452F] transition-colors">
                  {SIGNATURE_DRINK.name}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#A6452F] transition-colors">
                  Coconut Jaggery Latte
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#A6452F] transition-colors">
                  {SIGNATURE_COOLER.name}
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#A6452F] transition-colors">
                  Cashew Jaggery Brownie
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#A6452F] transition-colors">
                  Alphonso Mango Shake
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#1E1E1E] mb-4">
              Brews & Hours
            </h4>
            <div className="text-xs space-y-1.5 text-[#6B6259] mb-4">
              <p className="font-semibold text-[#1E1E1E]">Tue – Fri:</p>
              <p>8:00 AM – 10:00 PM</p>
              <p className="font-semibold text-[#1E1E1E] pt-1">Sat – Sun:</p>
              <p>7:30 AM – 11:00 PM</p>
              <p className="text-[#A6452F] font-semibold pt-1">Mon: Closed</p>
            </div>
            <a
              href={CAFE_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#A6452F] font-semibold hover:underline"
            >
              <Star className="w-3.5 h-3.5" />
              <span>@olicoffee</span>
            </a>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6259]">
          <p>© {new Date().getFullYear()} Oli Coffee. All rights reserved. Sourced from the Western Ghats.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#A6452F] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#A6452F] transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#9A9188] hidden sm:inline">|</span>
            <span className="text-[#6B6259] italic">Thoda paus. Thoda coffee.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
