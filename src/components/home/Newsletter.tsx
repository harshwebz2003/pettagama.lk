'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      showToast('Thank you for subscribing to Pettagama.lk VIP Craft Newsletter!');
      setEmail('');
    }
  };

  return (
    <section className="py-14 bg-royal-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-royal-800/80 rounded-3xl p-8 sm:p-12 border border-royal-700 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center space-x-2 bg-royal-700 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Join The Pettagama Craft Club</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Get Weekly Craft Tutorials & Discount Alerts
            </h2>
            <p className="text-xs text-slate-300">
              Subscribe to receive new resin mould restock notifications, VIP promo codes, and step-by-step DIY crafting guides directly in your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
            {isSubscribed ? (
              <div className="bg-emerald-600/90 text-white p-4 rounded-2xl flex items-center justify-center space-x-2 text-xs font-bold animate-in fade-in">
                <CheckCircle2 className="w-5 h-5" />
                <span>You are subscribed! Check your inbox for your 10% discount.</span>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="bg-accent-red hover:bg-accent-red-hover text-white font-extrabold px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 shrink-0 transition-colors"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
