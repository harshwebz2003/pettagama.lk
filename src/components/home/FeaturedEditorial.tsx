'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '../common/ProductCard';

export const FeaturedEditorial: React.FC = () => {
  const editorialProducts = products.slice(0, 4);

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-black text-amber-400 uppercase tracking-widest block mb-1">
              ✦ EDITORIAL EDITION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Resin & Craft Showcase
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs font-black text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1 glass-button px-5 py-3 rounded-2xl"
          >
            <span>Explore Editorial Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Magazine Editorial Layout: Feature Banner Left + Product Grid Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Magazine Large Feature Banner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl min-h-[420px] flex flex-col justify-end p-8 group"
          >
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=90"
              alt="Craft Studio"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-85"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="relative z-10 space-y-3">
              <span className="inline-flex items-center space-x-1.5 bg-amber-400 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3 h-3 fill-current" />
                <span>Handcrafted Excellence</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                Artisanal Resin Moulds & Gold Leaf Flakes
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed">
                Elevate your home decor and resin jewellery creations with high-gloss mirror-finish silicone moulds and 100% crystal-clear epoxy resin.
              </p>

              <div className="pt-2">
                <Link
                  href="/category/resin-products"
                  className="inline-flex items-center space-x-2 text-xs font-black text-white bg-royal-600 hover:bg-royal-700 px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  <span>Shop Resin Series</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Products Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
            {editorialProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
