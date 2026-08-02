'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
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
  const [isSearchExpandedMobile, setIsSearchExpandedMobile] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter live search suggestions
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
      setIsSearchExpandedMobile(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4 lg:gap-8">
          
          {/* Mobile Menu Trigger & Logo */}
          <div className="flex items-center space-x-3 lg:space-x-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            <PettagamaLogo />
          </div>

          {/* Expandable Luxury Search Bar */}
          <div ref={searchRef} className="hidden md:flex flex-1 max-w-2xl relative">
            <form onSubmit={handleSearchSubmit} className="flex w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900/90 focus-within:border-royal-500 focus-within:ring-2 focus-within:ring-royal-500/30 transition-all shadow-inner">
              {/* Category Selector */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-slate-900 text-slate-300 text-xs font-semibold px-3.5 py-2.5 border-r border-slate-700 focus:outline-none cursor-pointer hidden lg:block"
              >
                <option value="All">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>

              {/* Input field */}
              <input
                type="text"
                placeholder="Search resin, moulds, clay, pipe cleaners, beads, jewellery..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-2.5 text-sm text-white placeholder-slate-500 bg-transparent focus:outline-none"
              />

              {/* Search Button */}
              <button
                type="submit"
                className="bg-royal-600 hover:bg-royal-500 text-white px-5 flex items-center justify-center transition-colors"
                aria-label="Search products"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Live Search Suggestions Dropdown */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden z-50 animate-in fade-in">
                <div className="p-3 bg-slate-950 border-b border-slate-800 text-xs font-bold text-slate-400">
                  Search Results for "{searchQuery}"
                </div>

                {searchResults.length > 0 ? (
                  <div className="divide-y divide-slate-800">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.slug}`}
                        onClick={() => setIsSearchFocused(false)}
                        className="flex items-center gap-3 p-3 hover:bg-slate-800 transition-colors"
                      >
                        <div className="w-12 h-12 relative rounded-xl overflow-hidden shrink-0 bg-slate-950 border border-slate-800">
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">
                            {product.name}
                          </h4>
                          <p className="text-[10px] text-amber-400 font-semibold">{product.category}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-black text-white">
                            Rs. {product.price.toLocaleString()}
                          </span>
                        </div>
                      </Link>
                    ))}
                    <Link
                      href={`/shop?q=${encodeURIComponent(searchQuery)}`}
                      onClick={() => setIsSearchFocused(false)}
                      className="block p-3 text-center text-xs font-bold text-royal-400 bg-slate-950 hover:bg-royal-950 transition-colors"
                    >
                      View all results →
                    </Link>
                  </div>
                ) : (
                  <div className="p-6 text-center text-xs text-slate-400">
                    No products found matching "{searchQuery}".
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Icons (Wishlist, Cart, Login) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            {/* Account */}
            <Link
              href="/login"
              className="hidden sm:flex flex-col items-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5">Account</span>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="relative p-2.5 rounded-2xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
              aria-label="View Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon & Price Display */}
            <Link
              href="/cart"
              className="flex items-center gap-2.5 p-2 rounded-2xl text-white hover:bg-slate-800/80 transition-colors border border-slate-800"
              aria-label="View Shopping Cart"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-royal-600 to-indigo-600 text-white p-2.5 rounded-xl shadow-lg">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full border-2 border-slate-950 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  My Cart
                </span>
                <span className="text-xs font-black text-amber-400">
                  Rs. {cartSubtotal.toLocaleString()}
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearchSubmit} className="flex rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
            <input
              type="text"
              placeholder="Search resin, moulds, clay, beads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2 text-xs text-white placeholder-slate-500 bg-transparent focus:outline-none"
            />
            <button type="submit" className="bg-royal-600 text-white px-4 flex items-center justify-center">
              <Search className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-slate-900 h-full shadow-2xl flex flex-col z-10 overflow-y-auto border-r border-slate-800">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950 text-white">
              <PettagamaLogo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-800"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="p-4 divide-y divide-slate-800">
              <div className="py-2 space-y-1">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-royal-900/50 hover:text-amber-400"
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-royal-900/50 hover:text-amber-400"
                >
                  Shop All Products
                </Link>
                <Link
                  href="/track-order"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-royal-900/50 hover:text-amber-400"
                >
                  Track Order
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-royal-900/50 hover:text-amber-400"
                >
                  About Pettagama.lk
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-royal-900/50 hover:text-amber-400"
                >
                  Contact Us
                </Link>
              </div>

              <div className="py-4">
                <h4 className="px-3 text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-2">
                  Shop By Category
                </h4>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/category/${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
