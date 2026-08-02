'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroSlider } from '@/components/home/HeroSlider';
import { CategoryCircles } from '@/components/home/CategoryCircles';
import { FlashDeals } from '@/components/home/FlashDeals';
import { PromoBanner } from '@/components/home/PromoBanner';
import { TutorialCards } from '@/components/home/TutorialCards';
import { Testimonials } from '@/components/home/Testimonials';
import { InstagramGrid } from '@/components/home/InstagramGrid';
import { Newsletter } from '@/components/home/Newsletter';
import { StoreInfoMap } from '@/components/home/StoreInfoMap';
import { ProductCard } from '@/components/common/ProductCard';
import { products } from '@/data/products';
import { Award, Sparkles, TrendingUp, Gift, Zap, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export default function HomePage() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 6);
  const newArrivals = products.filter((p) => p.isNewArrival || p.badge === 'HOT').slice(0, 6);
  const featuredCrafts = products.filter((p) => p.isFeatured).slice(0, 6);
  const giftItems = products.filter((p) => p.isGiftItem || p.categorySlug === 'resin-products').slice(0, 6);

  return (
    <div className="bg-rose-50 pb-16 lg:pb-0">

      {/* Hero Slider */}
      <HeroSlider />

      {/* Trust Benefits Bar */}
      <div className="bg-white border-y border-slate-100 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { icon: Truck, color: 'text-royal-600 bg-royal-50', label: 'Islandwide Delivery', sub: 'Courier to all 25 districts' },
              { icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50', label: '100% Secure Shopping', sub: 'Trusted Sri Lankan store' },
              { icon: RefreshCw, color: 'text-amber-600 bg-amber-50', label: 'Cash on Delivery', sub: 'Pay when order arrives' },
              { icon: Zap, color: 'text-rose-500 bg-rose-50', label: 'WhatsApp Support', sub: '+94 77 514 2572' },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -3 }}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className={`p-2 sm:p-2.5 rounded-xl shrink-0 ${item.color}`}>
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-black text-slate-800 block leading-tight">{item.label}</span>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 leading-tight block mt-0.5">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Shop by Category Circles */}
      <CategoryCircles />

      {/* Flash Deals Section */}
      <FlashDeals />

      {/* Best Sellers (Horizontal Swipe on Mobile / Grid on Desktop) */}
      <section id="bestsellers" className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-10">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-extrabold text-amber-600 uppercase tracking-wider block">Customer Favorites</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">Best Selling Craft Supplies</h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-slate-400 sm:hidden">Swipe 👉</span>
              <Link href="/shop" className="text-xs font-black text-royal-600 hover:text-royal-700 transition-colors bg-royal-50 px-3 sm:px-4 py-2 rounded-xl border border-royal-100 shrink-0">
                View All →
              </Link>
            </div>
          </div>

          {/* Swipeable Container on Mobile */}
          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {bestSellers.map((product, idx) => (
              <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals (Horizontal Swipe on Mobile / Grid on Desktop) */}
      <section className="py-14 sm:py-20 bg-purple-50/60 border-b border-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-10">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-extrabold text-emerald-600 uppercase tracking-wider block">Just Arrived</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">New Arrivals & Fresh Stock</h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-slate-400 sm:hidden">Swipe 👉</span>
              <Link href="/shop" className="text-xs font-black text-royal-600 hover:text-royal-700 bg-white px-3 sm:px-4 py-2 rounded-xl border border-slate-200 shrink-0">
                View All →
              </Link>
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {newArrivals.map((product, idx) => (
              <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Crafts (Horizontal Swipe on Mobile / Grid on Desktop) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-10">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-royal-50 text-royal-600 border border-royal-100">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-extrabold text-royal-600 uppercase tracking-wider block">Handpicked For You</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">Featured Craft Highlights</h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-slate-400 sm:hidden">Swipe 👉</span>
              <Link href="/shop" className="text-xs font-black text-royal-600 hover:text-royal-700 bg-royal-50 px-3 sm:px-4 py-2 rounded-xl border border-royal-100 shrink-0">
                View All →
              </Link>
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {featuredCrafts.map((product, idx) => (
              <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner & Bundle Offers */}
      <PromoBanner />

      {/* Gift Items (Horizontal Swipe on Mobile / Grid on Desktop) */}
      <section className="py-14 sm:py-20 bg-rose-50/70 border-b border-rose-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-10">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-pink-50 text-pink-600 border border-pink-100">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-extrabold text-pink-600 uppercase tracking-wider block">Special Keepsakes</span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">Popular Gift Items</h2>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold text-slate-400 sm:hidden">Swipe 👉</span>
              <Link href="/category/gift-items" className="text-xs font-black text-royal-600 hover:text-royal-700 bg-white px-3 sm:px-4 py-2 rounded-xl border border-slate-200 shrink-0">
                Explore Gift Shop →
              </Link>
            </div>
          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {giftItems.map((product, idx) => (
              <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials, Testimonials, Instagram, Newsletter, Map */}
      <TutorialCards />
      <Testimonials />
      <InstagramGrid />
      <Newsletter />
      <StoreInfoMap />
    </div>
  );
}
