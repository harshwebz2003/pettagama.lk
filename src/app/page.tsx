'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroSlider } from '@/components/home/HeroSlider';
import { CategoryCircles } from '@/components/home/CategoryCircles';
import { FeaturedEditorial } from '@/components/home/FeaturedEditorial';
import { LifestyleTrustSection } from '@/components/home/LifestyleTrustSection';
import { FlashDeals } from '@/components/home/FlashDeals';
import { PromoBanner } from '@/components/home/PromoBanner';
import { TutorialCards } from '@/components/home/TutorialCards';
import { Testimonials } from '@/components/home/Testimonials';
import { InstagramGrid } from '@/components/home/InstagramGrid';
import { Newsletter } from '@/components/home/Newsletter';
import { StoreInfoMap } from '@/components/home/StoreInfoMap';
import { ProductCard } from '@/components/common/ProductCard';
import { products } from '@/data/products';
import { Award, TrendingUp, Sparkles, Gift } from 'lucide-react';

export default function HomePage() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const trendingProducts = products.filter((p) => p.isNewArrival || p.badge === 'HOT').slice(0, 4);
  const giftItems = products.filter((p) => p.isGiftItem || p.categorySlug === 'resin-products').slice(0, 4);

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-16 lg:pb-0">

      {/* 2. Luxury Cinematic Hero */}
      <HeroSlider />

      {/* 3. Categories */}
      <CategoryCircles />

      {/* 4. Featured Collections (Magazine Editorial Layout) */}
      <FeaturedEditorial />

      {/* 5. Best Sellers */}
      <section id="bestsellers" className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-amber-400 uppercase tracking-widest block">CUSTOMER FAVORITES</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Best Selling Craft Supplies</h2>
              </div>
            </div>
            <Link href="/shop" className="text-xs font-black text-amber-400 hover:text-amber-300 transition-colors glass-button px-4 py-2.5 rounded-xl">
              View All Best Sellers →
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {bestSellers.map((product) => (
              <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Craft Inspiration & Tutorials */}
      <TutorialCards />

      {/* 7. Lifestyle Banner & Trust Metrics */}
      <LifestyleTrustSection />

      {/* 8. Trending Products & Flash Deals */}
      <FlashDeals />

      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-royal-500/10 text-royal-400 border border-royal-500/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-royal-400 uppercase tracking-widest block">FRESH STOCK</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Trending Craft Arrivals</h2>
              </div>
            </div>
            <Link href="/shop" className="text-xs font-black text-royal-400 hover:text-royal-300 transition-colors glass-button px-4 py-2.5 rounded-xl">
              Shop All Trending →
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {trendingProducts.map((product) => (
              <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Discount Banner */}
      <PromoBanner />

      {/* 9. Customer Reviews */}
      <Testimonials />

      {/* 10. Instagram Showcase */}
      <InstagramGrid />

      {/* 11. Newsletter */}
      <Newsletter />

      {/* Store Location & Map */}
      <StoreInfoMap />

    </div>
  );
}
