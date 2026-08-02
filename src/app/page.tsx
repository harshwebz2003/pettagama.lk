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
import { Award, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
  const trendingProducts = products.filter((p) => p.isNewArrival || p.badge === 'HOT').slice(0, 4);

  return (
    <div className="text-slate-700 min-h-screen pb-16 lg:pb-0">

      {/* 1. Luxury Cinematic Hero */}
      <HeroSlider />

      {/* 2. Categories */}
      <CategoryCircles />

      {/* 3. Featured Collections (Magazine Editorial Layout) */}
      <FeaturedEditorial />

      {/* 4. Best Sellers */}
      <section id="bestsellers" className="py-20 section-blue-tint border-b border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-amber-50 text-amber-500 border border-amber-100">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-amber-600 uppercase tracking-widest block">Customer Favorites</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-700 tracking-tight">Best Selling Craft Supplies</h2>
              </div>
            </div>
            <Link href="/shop" className="text-xs font-black text-amber-700 hover:text-amber-800 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200/50 shrink-0">
              View All →
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {bestSellers.map((product) => (
              <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Craft Inspiration & Tutorials */}
      <TutorialCards />

      {/* 6. Lifestyle Banner & Trust Metrics */}
      <LifestyleTrustSection />

      {/* 7. Flash Deals */}
      <FlashDeals />

      {/* 8. Trending Products */}
      <section className="py-20 section-red-tint border-b border-red-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-2xl bg-purple-50 text-purple-500 border border-purple-100">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-black text-purple-600 uppercase tracking-widest block">Fresh Stock</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-700 tracking-tight">Trending Craft Arrivals</h2>
              </div>
            </div>
            <Link href="/shop" className="text-xs font-black text-purple-700 hover:text-purple-800 bg-purple-50 px-4 py-2.5 rounded-xl border border-purple-100 shrink-0">
              Shop All →
            </Link>
          </div>

          <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {trendingProducts.map((product) => (
              <div key={product.id} className="min-w-[70vw] sm:min-w-[45vw] md:min-w-0 snap-start shrink-0">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Promo Discount Banner */}
      <PromoBanner />

      {/* 10. Customer Reviews */}
      <Testimonials />

      {/* 11. Instagram Showcase */}
      <InstagramGrid />

      {/* 12. Newsletter */}
      <Newsletter />

      {/* Store Location */}
      <StoreInfoMap />
    </div>
  );
}
