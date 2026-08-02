'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';

export const CategoryCircles: React.FC = () => {
  return (
    <section id="categories" className="py-14 sm:py-20 bg-gradient-to-br from-purple-50 via-white to-rose-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <p className="text-xs font-extrabold text-royal-500 uppercase tracking-widest mb-1">✦ Explore Our Collections</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Shop by Craft Category
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-bold text-slate-400 sm:hidden">Swipe 👉</span>
            <Link
              href="/shop"
              className="text-xs font-black text-royal-600 hover:text-royal-700 transition-colors flex items-center space-x-1 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-sm shrink-0"
            >
              <span>Browse All {categories.length} Categories →</span>
            </Link>
          </div>
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
              className="min-w-[85px] sm:min-w-0 snap-start shrink-0"
            >
              <Link
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center text-center space-y-2.5"
              >
                {/* Circle image */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-royal-400 transition-all duration-300 shadow-md group-hover:shadow-royal-200 group-hover:scale-110">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 group-hover:to-black/0 transition-all" />
                </div>

                <div>
                  <h3 className="text-[11px] sm:text-xs font-extrabold text-slate-700 group-hover:text-royal-700 transition-colors leading-tight line-clamp-2">
                    {category.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 block mt-0.5">{category.itemCount} items</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
