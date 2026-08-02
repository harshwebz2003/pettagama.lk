'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown, Sparkles, Gift, Layers, PackageCheck, ExternalLink } from 'lucide-react';
import { categories } from '@/data/categories';

export const Navbar: React.FC = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);

  return (
    <nav className="hidden lg:block bg-royal-800 text-white border-b border-royal-700 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Left Category Mega Button */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsCategoryDropdownOpen(true)}
              onMouseLeave={() => setIsCategoryDropdownOpen(false)}
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="bg-royal-600 hover:bg-royal-700 text-white px-5 py-3 font-bold text-xs uppercase tracking-wider flex items-center space-x-2 transition-colors rounded-t-lg"
            >
              <Menu className="w-4 h-4" />
              <span>All Craft Categories</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {/* Category Dropdown Menu */}
            {isCategoryDropdownOpen && (
              <div
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                className="absolute top-full left-0 w-64 bg-white text-slate-800 shadow-2xl rounded-b-2xl border border-slate-200 py-2 z-50 animate-in fade-in duration-150"
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold hover:bg-royal-50 hover:text-royal-700 transition-colors"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                      {cat.itemCount}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-5 text-xs font-semibold">
            <Link href="/" className="hover:text-amber-300 transition-colors py-3">
              Home
            </Link>
            <Link href="/shop" className="hover:text-amber-300 transition-colors py-3 flex items-center space-x-1">
              <Layers className="w-3.5 h-3.5 text-royal-300" />
              <span>Shop All Products</span>
            </Link>
            <Link href="/category/resin-products" className="hover:text-amber-300 transition-colors py-3">
              Resin & Moulds
            </Link>

            <Link href="/category/craft-kits" className="hover:text-amber-300 transition-colors py-3 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Craft Kits</span>
            </Link>

            <Link href="/category/gift-items" className="hover:text-amber-300 transition-colors py-3 flex items-center space-x-1">
              <Gift className="w-3.5 h-3.5 text-pink-400" />
              <span>Gift Items</span>
            </Link>

            <Link href="/blog" className="hover:text-amber-300 transition-colors py-3">
              Craft Tutorials
            </Link>
            <Link href="/about" className="hover:text-amber-300 transition-colors py-3">
              About Us
            </Link>
          </div>

          {/* Right Action: WhatsApp Catalog & Track Order */}
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/c/130129573445815"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-xs font-extrabold text-emerald-300 hover:text-white transition-colors bg-emerald-950/70 px-3 py-1.5 rounded-full border border-emerald-700/60"
            >
              <span>📱 WhatsApp Catalog</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <Link
              href="/track-order"
              className="flex items-center space-x-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors bg-royal-900/60 px-3 py-1.5 rounded-full border border-royal-700"
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
