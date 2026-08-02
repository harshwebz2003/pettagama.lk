'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, Sparkles, Gift, Layers, PackageCheck, ExternalLink, MessageCircle } from 'lucide-react';
import { categories } from '@/data/categories';

export const Navbar: React.FC = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  return (
    <nav className="hidden lg:block bg-gradient-to-r from-[#0277BD] via-[#29ABE2] to-[#0288D1] text-white border-b border-sky-300/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 gap-3">

          {/* All Category Dropdown Button — Clean Single Line */}
          <div className="relative shrink-0">
            <button
              onMouseEnter={() => setIsCategoryDropdownOpen(true)}
              onMouseLeave={() => setIsCategoryDropdownOpen(false)}
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="bg-black/20 hover:bg-black/30 text-white px-4 py-2 font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 transition-all rounded-xl border border-white/20 whitespace-nowrap"
            >
              <Menu className="w-4 h-4 text-sky-200" />
              <span className="whitespace-nowrap">All Craft Categories</span>
              <ChevronDown className="w-3.5 h-3.5 text-sky-200" />
            </button>

            {isCategoryDropdownOpen && (
              <div
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                className="absolute top-full left-0 w-64 bg-white text-slate-700 shadow-2xl rounded-b-2xl border border-sky-100 py-2 z-50 animate-in fade-in duration-150"
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold hover:bg-sky-50 hover:text-[#0277BD] transition-colors"
                  >
                    <span className="truncate">{cat.name}</span>
                    <span className="text-[10px] bg-sky-100/80 text-[#0277BD] px-2 py-0.5 rounded-full font-bold">{cat.itemCount}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Center Nav Links — Single Line with whitespace-nowrap */}
          <div className="flex items-center space-x-3 xl:space-x-5 text-xs font-bold whitespace-nowrap overflow-x-auto scrollbar-none py-1">
            <Link href="/" className="hover:text-amber-200 transition-colors whitespace-nowrap px-1">
              Home
            </Link>
            <Link href="/shop" className="hover:text-amber-200 transition-colors whitespace-nowrap flex items-center space-x-1.5 px-1">
              <Layers className="w-3.5 h-3.5 text-sky-200 shrink-0" />
              <span>Shop All Products</span>
            </Link>
            <Link href="/category/resin-products" className="hover:text-amber-200 transition-colors whitespace-nowrap px-1">
              Resin &amp; Moulds
            </Link>
            <Link href="/category/craft-kits" className="hover:text-amber-200 transition-colors whitespace-nowrap flex items-center space-x-1.5 px-1">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
              <span>Craft Kits</span>
            </Link>
            <Link href="/category/gift-items" className="hover:text-amber-200 transition-colors whitespace-nowrap flex items-center space-x-1.5 px-1">
              <Gift className="w-3.5 h-3.5 text-rose-200 shrink-0" />
              <span>Gift Items</span>
            </Link>
            <Link href="/blog" className="hover:text-amber-200 transition-colors whitespace-nowrap px-1">
              Craft Tutorials
            </Link>
            <Link href="/about" className="hover:text-amber-200 transition-colors whitespace-nowrap px-1">
              About Us
            </Link>
          </div>

          {/* Right Action Buttons — Single Line */}
          <div className="flex items-center space-x-2.5 shrink-0">
            <a
              href="https://wa.me/c/130129573445815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 text-xs font-extrabold text-white bg-emerald-600/90 hover:bg-emerald-500 px-3.5 py-1.5 rounded-xl border border-emerald-300/40 shadow-sm transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-200 shrink-0" />
              <span className="whitespace-nowrap">WhatsApp Catalog</span>
              <ExternalLink className="w-3 h-3 text-emerald-200 shrink-0" />
            </a>

            <Link
              href="/track-order"
              className="flex items-center space-x-1.5 text-xs font-extrabold text-white bg-white/15 hover:bg-white/25 px-3.5 py-1.5 rounded-xl border border-white/25 transition-all whitespace-nowrap"
            >
              <PackageCheck className="w-3.5 h-3.5 text-sky-200 shrink-0" />
              <span className="whitespace-nowrap">Track Order</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};
