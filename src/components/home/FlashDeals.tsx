'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock, Zap } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '../common/ProductCard';

export const FlashDeals: React.FC = () => {
  const flashProducts = products.filter((p) => p.isFlashDeal || p.oldPrice).slice(0, 4);

  // Live Countdown State
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-royal-950 to-slate-950 text-white relative overflow-hidden border-b border-royal-900/50">
      
      {/* Background Neon Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-red/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Live Countdown */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-accent-red to-red-600 text-white p-3.5 rounded-2xl shadow-2xl animate-pulse">
              <Flame className="w-7 h-7 fill-current" />
            </div>
            <div>
              <div className="inline-flex items-center space-x-1 text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-0.5">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Limited Time Discount</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Flash Deals & Special Offers
              </h2>
            </div>
          </div>

          {/* Futuristic Countdown Clock */}
          <div className="flex items-center space-x-2 bg-slate-900/90 px-6 py-3.5 rounded-2xl border border-accent-red/30 shadow-2xl backdrop-blur-xl">
            <Clock className="w-5 h-5 text-accent-red mr-1 animate-pulse" />
            <span className="text-xs font-bold text-slate-300 mr-2 uppercase tracking-wider">Ends In:</span>
            
            <div className="flex items-center space-x-1.5 font-mono font-black text-base">
              <span className="bg-gradient-to-b from-red-600 to-accent-red text-white px-3 py-1 rounded-xl shadow-md border border-red-400/30">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-accent-red font-bold animate-pulse">:</span>
              <span className="bg-gradient-to-b from-red-600 to-accent-red text-white px-3 py-1 rounded-xl shadow-md border border-red-400/30">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-accent-red font-bold animate-pulse">:</span>
              <span className="bg-gradient-to-b from-red-600 to-accent-red text-white px-3 py-1 rounded-xl shadow-md border border-red-400/30">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Product Cards Grid with Animated Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
