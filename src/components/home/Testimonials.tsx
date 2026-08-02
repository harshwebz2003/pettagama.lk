'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Dilini Senanayake',
    location: 'Colombo',
    rating: 5,
    comment: 'Pettagama.lk has the highest quality crystal resin and alphabet silicone moulds in Sri Lanka! Received my order in Kalutara delivery within 24 hours.',
    verified: true,
  },
  {
    id: 2,
    name: 'Sanjeewa Perera',
    location: 'Kandy',
    rating: 5,
    comment: 'The pipe cleaner tulip DIY kit was so complete! Included everything from stems to floral tape. My daughter loved making her bouquet.',
    verified: true,
  },
  {
    id: 3,
    name: 'Ruvini Fernando',
    location: 'Galle',
    rating: 5,
    comment: 'Loved the 18K gold-plated pearl necklace and fast WhatsApp support (+94 77 514 2572). Packaged in a beautiful gift pouch. Highly recommend!',
    verified: true,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-1 text-xs font-bold text-royal-600 uppercase tracking-wider bg-royal-100 px-3 py-1 rounded-full">
            <Quote className="w-3.5 h-3.5" />
            <span>Sri Lankan Crafter Reviews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Loved By Thousands of Artisans
          </h2>
          <p className="text-xs text-slate-500">
            Read real customer feedback from crafters, resin artists & gift lovers across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{rev.name}</h4>
                  <span className="text-[11px] text-slate-400">{rev.location}, Sri Lanka</span>
                </div>
                {rev.verified && (
                  <span className="flex items-center space-x-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Buyer</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
