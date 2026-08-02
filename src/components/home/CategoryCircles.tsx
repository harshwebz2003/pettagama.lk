'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';

export const CategoryCircles: React.FC = () => {
  return (
    <section id="categories" className="py-16 sm:py-20 section-blue-tint border-b border-blue-100/50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-200/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-black text-amber-600 uppercase tracking-widest block mb-1">✦ Explore Craft Universe</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-700 tracking-tight">Shop by Craft Category</h2>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold text-slate-400 sm:hidden">Swipe 👉</span>
            <Link href="/shop" className="text-xs font-black text-amber-700 hover:text-amber-800 transition-colors flex items-center space-x-1 bg-white/80 px-3.5 py-2 rounded-xl border border-amber-200/50 shadow-sm shrink-0">
              <span>Browse All {categories.length} Categories →</span>
            </Link>
          </div>
        </div>

        <div className="flex sm:grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="min-w-[90px] sm:min-w-0 snap-start shrink-0"
            >
              <Link href={`/category/${category.slug}`} className="group flex flex-col items-center text-center space-y-2.5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-rose-100 group-hover:border-amber-400 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(212,133,106,0.3)] group-hover:scale-110">
                  <Image src={category.image} alt={category.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 group-hover:to-transparent transition-all" />
                </div>
                <div>
                  <h3 className="text-[11px] sm:text-xs font-bold text-slate-600 group-hover:text-amber-700 transition-colors leading-tight line-clamp-2">{category.name}</h3>
                  <span className="text-[10px] text-slate-400 block mt-0.5 font-medium">{category.itemCount} items</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
