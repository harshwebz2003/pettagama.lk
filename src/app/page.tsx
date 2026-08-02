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
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNewArrival).slice(0, 4);
  const featuredCrafts = products.filter((p) => p.isFeatured).slice(4, 8);
  const giftItems = products.filter((p) => p.isGiftItem).slice(0, 4);

  return (
    <div className="space-y-0 bg-slate-950 text-white">
      
      {/* Hero Slider with Motion */}
      <HeroSlider />

      {/* Trust Benefits Bar */}
      <div className="bg-slate-900 border-y border-slate-800 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <motion.div whileHover={{ y: -3 }} className="p-4 bg-slate-950/80 rounded-2xl border border-royal-500/20 shadow-lg backdrop-blur-md">
              <Truck className="w-6 h-6 text-royal-400 mx-auto mb-2" />
              <span className="text-xs font-black text-white block">Islandwide Delivery</span>
              <span className="text-[11px] text-slate-400">Fast courier to all 25 districts</span>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="p-4 bg-slate-950/80 rounded-2xl border border-royal-500/20 shadow-lg backdrop-blur-md">
              <ShieldCheck className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <span className="text-xs font-black text-white block">100% Secure Shopping</span>
              <span className="text-[11px] text-slate-400">Trusted Sri Lankan store</span>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="p-4 bg-slate-950/80 rounded-2xl border border-royal-500/20 shadow-lg backdrop-blur-md">
              <RefreshCw className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <span className="text-xs font-black text-white block">Cash on Delivery</span>
              <span className="text-[11px] text-slate-400">Pay when order arrives</span>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="p-4 bg-slate-950/80 rounded-2xl border border-royal-500/20 shadow-lg backdrop-blur-md">
              <Zap className="w-6 h-6 text-pink-400 mx-auto mb-2" />
              <span className="text-xs font-black text-white block">WhatsApp Support</span>
              <span className="text-[11px] text-slate-400">+94 77 514 2572</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Shop by Category Circles */}
      <CategoryCircles />

      {/* Flash Deals Section */}
      <FlashDeals />

      {/* Best Sellers Grid */}
      <section id="bestsellers" className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-amber-400 uppercase tracking-wider block">Customer Favorites</span>
                <h2 className="text-3xl font-black text-white tracking-tight">Best Selling Craft Supplies</h2>
              </div>
            </div>
            <Link href="/shop" className="text-xs font-black text-royal-400 hover:text-white transition-colors bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider block">Just Arrived</span>
                <h2 className="text-3xl font-black text-white tracking-tight">New Arrivals & Fresh Stock</h2>
              </div>
            </div>
            <Link href="/shop" className="text-xs font-black text-royal-400 hover:text-white transition-colors bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Craft Products Banner Section */}
      <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-royal-500/20 text-royal-400 border border-royal-500/30">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-royal-400 uppercase tracking-wider block">Handpicked Selection</span>
                <h2 className="text-3xl font-black text-white tracking-tight">Featured Craft Highlights</h2>
              </div>
            </div>
            <Link href="/shop" className="text-xs font-black text-royal-400 hover:text-white transition-colors bg-slate-900 px-4 py-2 rounded-xl border border-slate-800">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCrafts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner & Bundle Offers */}
      <PromoBanner />

      {/* Popular Gift Items */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-pink-400 uppercase tracking-wider block">Special Keepsakes</span>
                <h2 className="text-3xl font-black text-white tracking-tight">Popular Gift Items</h2>
              </div>
            </div>
            <Link href="/category/gift-items" className="text-xs font-black text-royal-400 hover:text-white transition-colors bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
              Explore Gift Shop →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftItems.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Tutorials & Guides */}
      <TutorialCards />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Instagram Gallery */}
      <InstagramGrid />

      {/* Newsletter VIP Signup */}
      <Newsletter />

      {/* Store Location Map & Information */}
      <StoreInfoMap />
    </div>
  );
}
