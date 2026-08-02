'use client';

import React from 'react';
import TestimonialMarqueeDemo from '@/components/ui/marquee-01';
import { Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 section-blue-tint border-b border-sky-100/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-black text-sky-700 uppercase tracking-widest bg-white/80 px-4 py-1.5 rounded-full border border-sky-200 shadow-sm backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-current" />
            <span>Artisan Love &amp; Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
            Loved By Thousands of Sri Lankan Crafters
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Real reviews from resin artists, DIY crafters, and gift buyers across all 25 districts of Sri Lanka.
          </p>
        </div>

        {/* Marquee Component */}
        <TestimonialMarqueeDemo />

      </div>
    </section>
  );
};
