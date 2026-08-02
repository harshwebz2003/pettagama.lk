'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Dilini Senanayake',
    location: 'Colombo',
    rating: 5,
    comment: 'Pettagama.lk has the highest quality crystal resin and alphabet silicone moulds in Sri Lanka! Received my order in Kalutara delivery within 24 hours.',
    verified: true,
    avatar: '🧑‍🎨',
  },
  {
    id: 2,
    name: 'Sanjeewa Perera',
    location: 'Kandy',
    rating: 5,
    comment: 'The pipe cleaner tulip DIY kit was so complete! Included everything from stems to floral tape. My daughter loved making her bouquet.',
    verified: true,
    avatar: '👨‍🎨',
  },
  {
    id: 3,
    name: 'Ruvini Fernando',
    location: 'Galle',
    rating: 5,
    comment: 'Loved the 18K gold-plated pearl necklace and fast WhatsApp support (+94 77 514 2572). Packaged in a beautiful gift pouch. Highly recommend!',
    verified: true,
    avatar: '👩‍🎨',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-rose-50 border-b border-amber-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-4 py-1.5 rounded-full border border-amber-100">
            <Quote className="w-3.5 h-3.5" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">
            Loved By Thousands of Sri Lankan Artisans
          </h2>
          <p className="text-sm text-slate-400">
            Read real feedback from crafters, resin artists & gift lovers across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{rev.avatar}</span>
                  <div>
                    <h4 className="text-xs font-black text-slate-800">{rev.name}</h4>
                    <span className="text-[11px] text-slate-400">{rev.location}, Sri Lanka</span>
                  </div>
                </div>
                {rev.verified && (
                  <span className="flex items-center space-x-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
