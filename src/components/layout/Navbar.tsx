'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, Sparkles, Gift, Layers, PackageCheck, ExternalLink } from 'lucide-react';
import { categories } from '@/data/categories';

export const Navbar: React.FC = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  return (
    <nav className="hidden lg:block bg-gradient-to-r from-[#0277BD] via-[#29ABE2] to-[#0288D1] text-white border-b border-sky-300/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">

          {/* Category Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsCategoryDropdownOpen(true)}
              onMouseLeave={() => setIsCategoryDropdownOpen(false)}
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="bg-black/15 hover:bg-black/25 text-white px-5 py-2.5 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-colors rounded-t-lg"
            >
              <Menu className="w-4 h-4" />
              <span>All Craft Categories</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {isCategoryDropdownOpen && (
              <div
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                className="absolute top-full left-0 w-64 bg-white text-slate-700 shadow-2xl rounded-b-2xl border border-rose-100 py-2 z-50 animate-in fade-in duration-150"
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold hover:bg-amber-50 hover:text-amber-700 transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] bg-rose-50 text-slate-400 px-2 py-0.5 rounded-full">{cat.itemCount}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-5 text-xs font-semibold">
            <Link href="/" className="hover:text-amber-200 transition-colors py-2.5">Home</Link>
            <Link href="/shop" className="hover:text-amber-200 transition-colors py-2.5 flex items-center space-x-1">
              <Layers className="w-3.5 h-3.5 text-amber-200" />
              <span>Shop All Products</span>
            </Link>
            <Link href="/category/resin-products" className="hover:text-amber-200 transition-colors py-2.5">Resin & Moulds</Link>
            <Link href="/category/craft-kits" className="hover:text-amber-200 transition-colors py-2.5 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Craft Kits</span>
            </Link>
            <Link href="/category/gift-items" className="hover:text-amber-200 transition-colors py-2.5 flex items-center space-x-1">
              <Gift className="w-3.5 h-3.5 text-rose-200" />
              <span>Gift Items</span>
            </Link>
            <Link href="/blog" className="hover:text-amber-200 transition-colors py-2.5">Craft Tutorials</Link>
            <Link href="/about" className="hover:text-amber-200 transition-colors py-2.5">About Us</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/c/130129573445815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs font-extrabold text-white hover:text-emerald-200 transition-colors bg-emerald-600/40 hover:bg-emerald-600/60 px-3 py-1.5 rounded-full border border-emerald-300/30"
            >
              <span>📱 WhatsApp Catalog</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <Link
              href="/track-order"
              className="flex items-center space-x-1.5 text-xs font-bold text-white hover:text-amber-200 transition-colors bg-amber-800/30 hover:bg-amber-800/50 px-3 py-1.5 rounded-full border border-white/20"
            >
              <PackageCheck className="w-3.5 h-3.5" />
              <span>Track Order</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
