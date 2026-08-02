'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Flame, Clock } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '../common/ProductCard';

export const FlashDeals: React.FC = () => {
  const flashProducts = products.filter((p) => p.isFlashDeal || p.oldPrice).slice(0, 4);

  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 42, seconds: 18 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 pb-8 border-b border-amber-100">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white p-3.5 rounded-2xl shadow-lg">
              <Flame className="w-7 h-7 fill-current" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-orange-500 uppercase tracking-widest mb-0.5">⚡ Limited Time Only</p>
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">Flash Deals & Special Offers</h2>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-amber-200 shadow-sm">
            <Clock className="w-5 h-5 text-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ends in:</span>
            <div className="flex items-center space-x-1.5 font-mono font-black text-sm">
              {[timeLeft.hours, timeLeft.minutes, timeLeft.seconds].map((v, i) => (
                <React.Fragment key={i}>
                  <span className="bg-gradient-to-b from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-xl shadow-sm min-w-[2.5rem] text-center">
                    {String(v).padStart(2, '0')}
                  </span>
                  {i < 2 && <span className="text-orange-400 font-bold">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {flashProducts.map((product, idx) => (
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
  );
};
