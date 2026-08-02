'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Tag, ArrowRight, Gift, Percent, Zap } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '../common/ProductCard';

export const PromoBanner: React.FC = () => {
  const bundleProducts = products.filter((p) => p.isCraftKit || p.badge === 'EXCLUSIVE').slice(0, 3);

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* High-Converting Promotional Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-royal-950 via-royal-900 to-slate-950 text-white overflow-hidden shadow-2xl p-8 sm:p-14 border border-royal-700/50"
        >
          <div className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-royal-600/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                <Percent className="w-4 h-4 fill-current" />
                <span>Special VIP Demo Offer</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-shimmer">
                Get 10% OFF Your First Craft Order!
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Use promo code <span className="font-mono bg-white/10 px-3 py-1 rounded-xl text-amber-300 font-bold border border-amber-400/30">PETTAGAMA10</span> at checkout to claim your 10% discount on resin moulds, beads, embroidery floss, and DIY craft kits.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/shop"
                  className="bg-gradient-to-r from-accent-red to-red-600 hover:from-red-600 hover:to-accent-red text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl flex items-center space-x-2 text-xs uppercase tracking-wider transition-all transform hover:-translate-y-1"
                >
                  <span>Claim Discount Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center space-x-2 text-xs font-bold text-slate-200 bg-slate-900/80 px-4 py-3.5 rounded-2xl border border-slate-800 backdrop-blur-md">
                  <Tag className="w-4 h-4 text-amber-400" />
                  <span>Coupon: PETTAGAMA10</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-royal-500/30 group">
              <Image
                src="https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=800&q=80"
                alt="Craft Supplies Bundle"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Bundle Offers Section */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-pink-400 font-black text-xs uppercase tracking-wider bg-pink-950/60 px-3.5 py-1 rounded-full border border-pink-800/40 mb-2">
                <Gift className="w-4 h-4 fill-current" />
                <span>Save Up To 25%</span>
              </div>
              <h3 className="text-3xl font-black text-white tracking-tight">
                All-In-One DIY Craft Bundle Kits
              </h3>
            </div>
            <Link
              href="/category/craft-kits"
              className="text-xs font-black text-royal-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <span>Explore All Craft Bundles →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bundleProducts.map((product, idx) => (
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
      </div>
    </section>
  );
};
