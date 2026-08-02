'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Heart, ShoppingBag, User, Menu, X } from 'lucide-react';
import { PettagamaLogo } from '../common/PettagamaLogo';
import { useShop } from '@/context/ShopContext';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { Product } from '@/types';

export const Header: React.FC = () => {
  const router = useRouter();
  const { wishlistCount, cartCount, cartSubtotal } = useShop();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchResults: Product[] = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchFocused(false);
    }
  };

  return (
    <>
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-rose-100/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          
          {/* Mobile Menu & Logo */}
          <div className="flex items-center space-x-3 lg:space-x-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-500 hover:text-slate-700 hover:bg-rose-50 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <PettagamaLogo />
          </div>

          {/* Search Bar */}
          <div ref={searchRef} className="hidden md:flex flex-1 max-w-2xl relative">
            <form onSubmit={handleSearchSubmit} className="flex w-full rounded-2xl overflow-hidden border border-rose-200/60 bg-[#fdf8f5] focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-200/40 transition-all shadow-inner">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#fdf8f5] text-slate-500 text-xs font-semibold px-3.5 py-2.5 border-r border-rose-200/50 focus:outline-none cursor-pointer hidden lg:block"
              >
                <option value="All">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>{c.name}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Search resin, moulds, clay, pipe cleaners, beads, jewellery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 bg-transparent focus:outline-none"
              />

              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white px-5 flex items-center justify-center transition-colors"
                aria-label="Search products"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Live Search Suggestions */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden z-50 animate-in fade-in">
                <div className="p-3 bg-[#fdf8f5] border-b border-rose-100 text-xs font-bold text-slate-500">
                  Search Results for &quot;{searchQuery}&quot;
                </div>

                {searchResults.length > 0 ? (
                  <div className="divide-y divide-rose-50">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={() => setIsSearchFocused(false)}
                        className="flex items-center gap-3 p-3 hover:bg-rose-50/60 transition-colors"
                      >
                        <div className="w-12 h-12 relative rounded-xl overflow-hidden shrink-0 bg-rose-50 border border-rose-100">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-700 truncate">{product.name}</h4>
                          <p className="text-[10px] text-amber-600 font-semibold">{product.category}</p>
                        </div>
                        <span className="text-xs font-black text-slate-700">Rs. {product.price.toLocaleString()}</span>
                      </Link>
                    ))}
                    <Link
                      href={`/shop?q=${encodeURIComponent(searchQuery)}`}
                      onClick={() => setIsSearchFocused(false)}
                      className="block p-3 text-center text-xs font-bold text-amber-600 bg-amber-50/60 hover:bg-amber-50 transition-colors"
                    >
                      View all results →
                    </Link>
                  </div>
                ) : (
                  <div className="p-6 text-center text-xs text-slate-400">
                    No products found matching &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href="/login"
              className="hidden sm:flex flex-col items-center p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-rose-50 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5">Account</span>
            </Link>

            <Link
              href="/wishlist"
              className="relative p-2.5 rounded-2xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 transition-colors border border-rose-100"
              aria-label="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link
              href="/cart"
              className="flex items-center gap-2.5 p-2 rounded-2xl text-slate-600 hover:bg-rose-50 transition-colors border border-rose-100"
              aria-label="View Shopping Cart"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-amber-600 to-orange-500 text-white p-2.5 rounded-xl shadow-md">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">My Cart</span>
                <span className="text-xs font-black text-amber-700">Rs. {cartSubtotal.toLocaleString()}</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="flex rounded-xl overflow-hidden border border-rose-200/60 bg-[#fdf8f5]">
            <input
              type="text"
              placeholder="Search resin, moulds, clay, beads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 text-xs text-slate-700 placeholder-slate-400 bg-transparent focus:outline-none"
            />
            <button type="submit" className="bg-amber-600 text-white px-4 flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </header>

      {/* Mobile Drawer — outside <header> to escape sticky stacking context */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] flex lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer Panel */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto border-r border-rose-100">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-rose-100 bg-[#fdf8f5]">
              <PettagamaLogo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl hover:bg-rose-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="p-4 flex flex-col gap-1">
              {[
                { href: '/', label: '🏠  Home' },
                { href: '/shop', label: '🛍️  Shop All Products' },
                { href: '/track-order', label: '📦  Track Order' },
                { href: '/about', label: 'ℹ️  About Pettagama.lk' },
                { href: '/contact', label: '📍  Contact Us' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-bold text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* WhatsApp Catalog */}
              <a
                href="https://wa.me/c/130129573445815"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-xl text-sm font-extrabold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200 mt-2"
              >
                📱  WhatsApp Catalog
              </a>
            </div>

            {/* Categories */}
            <div className="px-4 pb-24">
              <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3 px-1 border-l-2 border-amber-400 pl-2">
                Shop By Category
              </h4>
              <div className="grid grid-cols-2 gap-1.5">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-colors border border-rose-100 bg-[#fdf8f5]"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
