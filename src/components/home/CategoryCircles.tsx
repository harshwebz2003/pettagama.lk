'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';

export const CategoryCircles: React.FC = () => {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-royal-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <span className="text-xs font-black text-royal-400 uppercase tracking-widest block mb-1">
              ✦ EXPLORE CRAFT UNIVERSE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Shop by Craft Category
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-black text-royal-400 hover:text-royal-300 transition-colors flex items-center space-x-1 glass-button px-4 py-2.5 rounded-xl border border-royal-500/30 shrink-0"
          >
            <span>Browse All {categories.length} Categories →</span>
          </Link>
        </div>

        {/* Circular Category Row / Grid (Swipeable on Mobile) */}
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
              <Link
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center text-center space-y-3"
              >
                {/* 3D Floating Circle image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-royal-400 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] group-hover:scale-110">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/60 group-hover:to-transparent transition-all" />
                </div>

                <div>
                  <h3 className="text-[11px] sm:text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors leading-tight line-clamp-2">
                    {category.name}
                  </h3>
                  <span className="text-[10px] text-slate-500 block mt-0.5 font-medium">{category.itemCount} items</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
