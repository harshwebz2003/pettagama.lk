'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Headphones, HeartHandshake, ArrowRight, Sparkles } from 'lucide-react';

export const LifestyleTrustSection: React.FC = () => {
  return (
    <section className="py-20 section-red-tint border-b border-red-100/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-red-200/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

        {/* Cinematic Lifestyle Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden border border-rose-100 shadow-xl bg-white grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch"
        >
          {/* Left Text */}
          <div className="lg:col-span-7 p-8 sm:p-14 space-y-5 text-center lg:text-left flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 bg-amber-50 border border-amber-200/60 text-amber-700 text-xs font-black px-4 py-1.5 rounded-full self-center lg:self-start">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CEYLON CRAFT HERITAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-700">
              Crafted with Passion in Sri Lanka
            </h2>
            <p className="text-sm text-slate-500 max-w-xl leading-relaxed">
              From our workshop store at <span className="text-amber-700 font-bold">241 Galle Road, Kalutara</span> to homes across all 25 Sri Lankan districts — we empower local crafters, resin artists, and DIY lovers with top-tier materials.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg flex items-center space-x-2 text-xs uppercase tracking-widest transition-all"
              >
                <span>Shop All Craft Materials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=90"
              alt="Sri Lankan Craft Workspace"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { icon: Truck, metric: '25 Districts', label: 'Islandwide Fast Delivery', bg: 'bg-blue-50 border-blue-100', iconColor: 'text-blue-500 bg-blue-100' },
            { icon: ShieldCheck, metric: '100% Safe', label: 'Guaranteed Secure Checkout', bg: 'bg-emerald-50 border-emerald-100', iconColor: 'text-emerald-500 bg-emerald-100' },
            { icon: Headphones, metric: 'Daily 8:30–7:30', label: 'WhatsApp & Phone Support', bg: 'bg-amber-50 border-amber-100', iconColor: 'text-amber-500 bg-amber-100' },
            { icon: HeartHandshake, metric: '2,000+', label: 'Happy Sri Lankan Artisans', bg: 'bg-rose-50 border-rose-100', iconColor: 'text-rose-500 bg-rose-100' },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border ${item.bg} flex flex-col items-center text-center space-y-3 shadow-sm`}
            >
              <div className={`p-3 rounded-2xl ${item.iconColor}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black text-slate-700 block">{item.metric}</span>
                <span className="text-xs text-slate-400 font-medium block mt-1 leading-snug">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
