import React from 'react';
import Image from 'next/image';
import { Award, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Card */}
        <div className="bg-gradient-to-r from-[#0277BD] via-[#29ABE2] to-[#0288D1] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-sky-300/40">
          <div className="max-w-2xl space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-white text-xs font-bold uppercase tracking-wider border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Our Craft Heritage</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Empowering Sri Lanka’s Creative Artisans &amp; Hobbyists
            </h1>
            <p className="text-xs sm:text-sm text-sky-50 leading-relaxed">
              Located at 241 Galle Road, Kalutara, Pettagama.lk is Sri Lanka’s premier destination for high quality epoxy resin supplies, silicone moulds, air-dry clay, pipe cleaners, beads, embroidery threads, fashion jewellery, and curated gift items.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">The Pettagama.lk Journey</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              From Kalutara Storefront to Islandwide Craft Platform
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Founded with a passion for creative expression, Pettagama.lk began as a local retail shop in Kalutara providing handmade craft supplies to local artists. Today, we supply thousands of crafters, small business owners, and DIY enthusiasts across all 25 Sri Lankan districts.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              We carefully curate every resin pigment, silicone mould, and embroidery skein to ensure top quality, safety, and durability for your creative projects.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-sky-800">10,000+</span>
                <span className="text-xs text-slate-500 block">Happy Crafters</span>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-sky-800">1,000+</span>
                <span className="text-xs text-slate-500 block">Craft Products</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
              alt="Pettagama Craft Studio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-sky-50 text-sky-600 inline-block">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Uncompromising Quality</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Only non-yellowing crystal resin and food-grade durable silicone moulds.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 inline-block">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Fast Islandwide Courier</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Prompt delivery to Colombo, Kandy, Galle, Jaffna, and all island districts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-600 inline-block">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Dedicated Support</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Friendly WhatsApp guidance for craft beginners (+94 77 514 2572).
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 inline-block">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">Handmade Gift Shop</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Personalized gift boxes, 18K gold-plated jewellery, and custom keepsakes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
