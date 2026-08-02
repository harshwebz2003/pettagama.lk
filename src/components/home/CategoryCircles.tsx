'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { categories } from '@/data/categories';
import { Sparkles, Layers } from 'lucide-react';

export const CategoryCircles: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-slate-900 text-white relative border-b border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-royal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-royal-400 font-black text-xs uppercase tracking-wider bg-royal-950 px-3.5 py-1.5 rounded-full border border-royal-800 mb-2">
              <Sparkles className="w-4 h-4 text-amber-400 fill-current" />
              <span>Futuristic Craft Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Explore 14 Craft Collections
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-black text-royal-400 hover:text-white transition-colors flex items-center space-x-1.5 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700"
          >
            <span>View All Categories ({categories.length}) →</span>
          </Link>
        </div>

        {/* Circular Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center text-center space-y-3"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-royal-500/30 group-hover:border-royal-400 transition-all duration-500 shadow-xl group-hover:scale-110 group-hover:shadow-royal-500/30 bg-slate-950 overflow-hidden">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-extrabold text-slate-100 group-hover:text-amber-400 transition-colors leading-tight line-clamp-1">
                    {category.name}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-full inline-block mt-1">
                    {category.itemCount} Items
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
