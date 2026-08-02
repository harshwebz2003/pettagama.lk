'use client';

import React from 'react';
import Link from 'next/link';
import { PettagamaLogo } from '../common/PettagamaLogo';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';
import { categories } from '@/data/categories';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Benefits Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 mb-12 border-b border-slate-800 text-center md:text-left">
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="p-3 rounded-xl bg-royal-600/20 text-royal-400 shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Islandwide Delivery</h5>
              <p className="text-xs text-slate-400">Fast courier to all 25 districts</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Secure Shopping</h5>
              <p className="text-xs text-slate-400">Trusted Sri Lankan store</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="p-3 rounded-xl bg-amber-600/20 text-amber-400 shrink-0">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Easy Returns</h5>
              <p className="text-xs text-slate-400">Hassle-free exchange policy</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
            <div className="p-3 rounded-xl bg-pink-600/20 text-pink-400 shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">Friendly Support</h5>
              <p className="text-xs text-slate-400">WhatsApp assistance daily</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Store Details */}
          <div className="lg:col-span-2 space-y-4">
            <PettagamaLogo />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Everything you need for your creativity! Pettagama.lk is Sri Lanka’s premier destination for high quality resin crafts, moulds, clay, pipe cleaners, beads, embroidery, fashion jewellery, and gift items.
            </p>
            
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-royal-400 shrink-0 mt-0.5" />
                <span>241 Galle Road, Kalutara, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-royal-400 shrink-0" />
                <span>+94 76 330 2572</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: +94 77 514 2572</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-royal-400 shrink-0" />
                <span>onlinepettagama@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Opening Hours: 8:30 AM – 7:30 PM (Mon-Sun)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Top Categories */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-royal-500 pl-2">
              Popular Craft Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/category/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Customer Care & Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-royal-500 pl-2">
              Customer Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-white transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white transition-colors">
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-white transition-colors">
                  Checkout Demo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Craft Guides & Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: About & Store */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-royal-500 pl-2">
              About Pettagama.lk
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Kalutara Store
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us & Map
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Account Sign In
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">Accepted Payment Methods</span>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300 font-bold">
                <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Cash on Delivery</span>
                <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Visa / Mastercard</span>
                <span className="bg-slate-800 px-2 py-1 rounded border border-slate-700">Bank Transfer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Rights & Required Agency Credit Label */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Pettagama.lk. All rights reserved. 241 Galle Road, Kalutara, Sri Lanka.
          </div>

          {/* REQUIRED AGENCY CREDIT LABEL */}
          <div className="bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700 text-royal-300 text-[11px] font-medium">
            Concept Website Demo by Harsh Apex Digital Solutions
          </div>
        </div>
      </div>
    </footer>
  );
};
