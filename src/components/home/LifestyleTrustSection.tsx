'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Headphones, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';

export const LifestyleTrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

        {/* Cinematic Lifestyle Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl p-8 sm:p-14 bg-slate-900 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-royal-900/80 border border-royal-500/40 text-amber-300 text-xs font-black px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CEYLON CRAFT HERITAGE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Crafted with Passion in Sri Lanka
            </h2>

            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              From our retail workshop store at <span className="text-amber-300 font-bold">241 Galle Road, Kalutara</span> to homes across all 25 Sri Lankan districts — we empower local crafters, resin artists, and DIY lovers with top-tier materials.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="bg-royal-600 hover:bg-royal-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-xl flex items-center space-x-2 text-xs uppercase tracking-widest transition-all"
              >
                <span>Shop All Craft Materials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=90"
              alt="Sri Lankan Craft Workspace"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Animated Trust Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, metric: '25 Districts', label: 'Islandwide Fast Delivery', color: 'text-royal-400 bg-royal-950 border-royal-800' },
            { icon: ShieldCheck, metric: '100% Safe', label: 'Guaranteed Secure Checkout', color: 'text-emerald-400 bg-emerald-950 border-emerald-800' },
            { icon: Headphones, metric: 'Daily 8:30-7:30', label: 'WhatsApp & Phone Support', color: 'text-amber-400 bg-amber-950 border-amber-800' },
            { icon: HeartHandshake, metric: '2,000+', label: 'Happy Sri Lankan Artisans', color: 'text-rose-400 bg-rose-950 border-rose-800' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border ${item.color} flex flex-col items-center text-center space-y-3 shadow-lg`}
            >
              <div className="p-3 rounded-2xl bg-white/5 backdrop-blur-md">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-white block">{item.metric}</span>
                <span className="text-xs text-slate-400 font-medium block mt-1">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
