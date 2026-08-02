'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Tag, Gift, Percent } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '../common/ProductCard';

export const PromoBanner: React.FC = () => {
  const bundleProducts = products.filter((p) => p.isCraftKit || p.badge === 'EXCLUSIVE').slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-royal-50 via-purple-50 to-blue-50 border-b border-royal-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Promo Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-r from-royal-600 via-royal-700 to-indigo-700 text-white overflow-hidden shadow-2xl p-8 sm:p-14"
        >
          {/* Soft glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">

              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white font-black text-xs px-4 py-1.5 rounded-full border border-white/30">
                <Percent className="w-4 h-4" />
                <span>Special Demo Promo Code</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Get 10% OFF Your First Craft Order!
              </h2>

              <p className="text-sm text-blue-100 max-w-xl leading-relaxed">
                Use coupon code <span className="font-mono bg-white/20 px-3 py-1 rounded-xl text-white font-bold border border-white/30">PETTAGAMA10</span> at checkout to claim your 10% discount on any craft supplies order.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/shop"
                  className="bg-white text-royal-700 hover:bg-blue-50 font-extrabold px-8 py-4 rounded-2xl shadow-lg flex items-center space-x-2 text-sm transition-all transform hover:-translate-y-0.5"
                >
                  <span>Claim Discount Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center space-x-2 text-sm font-bold text-blue-100 bg-white/10 px-4 py-3.5 rounded-2xl border border-white/20">
                  <Tag className="w-4 h-4 text-amber-300" />
                  <span>Code: PETTAGAMA10</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
                alt="Craft Supplies"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-90"
              />
            </div>
          </div>
        </motion.div>

        {/* Bundle Kits */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-extrabold text-pink-500 uppercase tracking-widest mb-1">
                <Gift className="w-4 h-4 inline mr-1" /> Save Up To 25%
              </p>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">All-In-One DIY Craft Bundle Kits</h3>
            </div>
            <Link href="/category/craft-kits" className="text-xs font-black text-royal-600 hover:text-royal-700 bg-white px-4 py-2 rounded-xl border border-slate-200">
              Explore All Craft Bundles →
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
