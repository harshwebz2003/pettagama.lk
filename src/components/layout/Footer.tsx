'use client';

import React from 'react';
import Link from 'next/link';
import { PettagamaLogo } from '../common/PettagamaLogo';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { categories } from '@/data/categories';
import { AcceptedPaymentMethods } from '../common/AcceptedPaymentMethods';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fdf8f4] text-slate-600 pt-16 pb-24 lg:pb-12 border-t border-rose-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top 4 Benefits Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pb-12 mb-12 border-b border-rose-100/60">
          {[
            { icon: Truck, title: 'Islandwide Delivery', sub: 'Fast courier to all 25 districts', bg: 'bg-blue-50 border-blue-100', iconBg: 'bg-blue-100 text-blue-500' },
            { icon: ShieldCheck, title: 'Secure Shopping', sub: 'Trusted Sri Lankan store', bg: 'bg-emerald-50 border-emerald-100', iconBg: 'bg-emerald-100 text-emerald-500' },
            { icon: RefreshCw, title: 'Easy Returns', sub: 'Hassle-free exchange policy', bg: 'bg-amber-50 border-amber-100', iconBg: 'bg-amber-100 text-amber-500' },
            { icon: MessageCircle, title: 'Friendly Support', sub: 'WhatsApp assistance daily', bg: 'bg-rose-50 border-rose-100', iconBg: 'bg-rose-100 text-rose-500' },
          ].map((item) => (
            <div key={item.title} className={`flex items-center space-x-3 p-4 rounded-2xl border ${item.bg}`}>
              <div className={`p-2.5 rounded-xl shrink-0 ${item.iconBg}`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-700">{item.title}</h5>
                <p className="text-[10px] text-slate-400 leading-snug">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-rose-100/60">

          {/* Store Info */}
          <div className="lg:col-span-2 space-y-4">
            <PettagamaLogo />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Everything you need for your creativity! Sri Lanka's premier destination for resin crafts, moulds, clay, pipe cleaners, beads, embroidery, jewellery & gift items.
            </p>
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start space-x-3 text-slate-500"><MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /><span>241 Galle Road, Kalutara, Sri Lanka</span></div>
              <div className="flex items-center space-x-3 text-slate-500"><Phone className="w-4 h-4 text-amber-500 shrink-0" /><span>+94 76 330 2572</span></div>
              <div className="flex items-center space-x-3 text-slate-500"><MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" /><span>WhatsApp: +94 77 514 2572</span></div>
              <div className="flex items-center space-x-3 text-slate-500"><Mail className="w-4 h-4 text-amber-500 shrink-0" /><span>onlinepettagama@gmail.com</span></div>
              <div className="flex items-center space-x-3 text-slate-500"><Clock className="w-4 h-4 text-amber-500 shrink-0" /><span>8:30 AM – 7:30 PM (Mon–Sun)</span></div>
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-4 border-l-2 border-amber-400 pl-2">Popular Categories</h4>
            <ul className="space-y-2 text-xs">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.id}><Link href={`/category/${cat.slug}`} className="text-slate-400 hover:text-amber-700 transition-colors">{cat.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-4 border-l-2 border-amber-400 pl-2">Customer Service</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/shop" className="text-slate-400 hover:text-amber-700 transition-colors">Shop All Products</Link></li>
              <li><Link href="/track-order" className="text-slate-400 hover:text-amber-700 transition-colors">Track Your Order</Link></li>
              <li><Link href="/cart" className="text-slate-400 hover:text-amber-700 transition-colors">Shopping Cart</Link></li>
              <li><Link href="/wishlist" className="text-slate-400 hover:text-amber-700 transition-colors">My Wishlist</Link></li>
              <li>
                <a href="https://wa.me/c/130129573445815" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 font-bold transition-colors">
                  📱 WhatsApp Catalog
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-4 border-l-2 border-amber-400 pl-2">About Us</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="text-slate-400 hover:text-amber-700 transition-colors">Our Kalutara Store</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-amber-700 transition-colors">Contact Us & Map</Link></li>
              <li><Link href="/login" className="text-slate-400 hover:text-amber-700 transition-colors">Account Sign In</Link></li>
            </ul>
          </div>
        </div>

        {/* Accepted Payment Methods */}
        <div className="py-6 border-b border-rose-100/60 my-2">
          <AcceptedPaymentMethods variant="footer" />
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>© {new Date().getFullYear()} Pettagama.lk. All rights reserved. 241 Galle Road, Kalutara, Sri Lanka.</div>
          <div className="bg-white px-3.5 py-1.5 rounded-full border border-rose-100 text-amber-700 text-[11px] font-medium shadow-sm">
            Concept Website Demo by Harsh Apex Digital Solutions
          </div>
        </div>
      </div>
    </footer>
  );
};
