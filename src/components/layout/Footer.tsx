'use client';

import React from 'react';
import Link from 'next/link';
import { PettagamaLogo } from '../common/PettagamaLogo';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck, Truck, RefreshCw, Sparkles, ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { AcceptedPaymentMethods } from '../common/AcceptedPaymentMethods';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090D16] text-slate-300 pt-16 pb-28 lg:pb-12 border-t border-slate-800 relative overflow-hidden">
      
      {/* Dark Ambient Glowing Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#29ABE2]/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Top 4 Benefits Banner — Mobile Responsive 2x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 pb-12 border-b border-slate-800/80">
          {[
            { icon: Truck, title: 'Islandwide Courier', sub: 'Fast delivery to all 25 districts', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
            { icon: ShieldCheck, title: 'Secure Shopping', sub: 'PayHere & COD verified store', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
            { icon: RefreshCw, title: 'Easy Exchanges', sub: '7-day hassle-free guarantee', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
            { icon: MessageCircle, title: 'WhatsApp Help', sub: 'Daily craft guidance & orders', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
          ].map((item) => (
            <div
              key={item.title}
              className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3 p-4 rounded-2xl border backdrop-blur-md bg-slate-900/60 ${item.bg} hover:border-slate-700 transition-all`}
            >
              <div className={`p-2.5 rounded-xl shrink-0 ${item.color} bg-slate-800/80 border border-slate-700/60`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h5 className="text-xs font-bold text-slate-100">{item.title}</h5>
                <p className="text-[10px] text-slate-400 leading-snug">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Links — Mobile Responsive 1 to 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">

          {/* Column 1 & 2: Store Info & Direct WhatsApp Contact */}
          <div className="sm:col-span-2 space-y-5">
            <PettagamaLogo />
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sri Lanka's premier craft store! Explore crystal-clear epoxy resin, 3D silicone moulds, air-dry clay, chenille stems, beads, embroidery threads & handmade luxury gift items.
            </p>

            <div className="space-y-3 text-xs pt-1">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>241 Galle Road, Kalutara, Sri Lanka</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>+94 76 330 2572</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-emerald-400">WhatsApp: +94 77 514 2572</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>onlinepettagama@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>8:30 AM – 7:30 PM (Monday – Sunday)</span>
              </div>
            </div>

            {/* Quick WhatsApp Action Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/94775142572"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-lg transition-all transform hover:scale-105 border border-emerald-400/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp Assistance</span>
              </a>
            </div>
          </div>

          {/* Column 3: Top Craft Categories */}
          <div>
            <h4 className="text-xs font-black text-sky-400 uppercase tracking-widest mb-4 border-l-2 border-sky-400 pl-2.5">
              Popular Categories
            </h4>
            <ul className="space-y-2.5 text-xs">
              {categories.slice(0, 7).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-slate-400 hover:text-sky-300 transition-colors flex items-center space-x-1"
                  >
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Customer Links */}
          <div>
            <h4 className="text-xs font-black text-sky-400 uppercase tracking-widest mb-4 border-l-2 border-sky-400 pl-2.5">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/shop" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Shop All Craft Supplies
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Track Courier Order
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-slate-400 hover:text-sky-300 transition-colors">
                  My Wishlist
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="https://wa.me/c/130129573445815"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-emerald-400 hover:text-emerald-300 font-bold bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/60 transition-colors"
                >
                  <span>📱 WhatsApp Catalog</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Store & Support Links */}
          <div>
            <h4 className="text-xs font-black text-sky-400 uppercase tracking-widest mb-4 border-l-2 border-sky-400 pl-2.5">
              About &amp; Location
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-sky-300 transition-colors">
                  About Kalutara Outlet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Contact Us &amp; Google Map
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Craft DIY Tutorials
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Account Sign In
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Accepted Payment Methods Container */}
        <div className="py-6 bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 px-6">
          <AcceptedPaymentMethods variant="footer" />
        </div>

        {/* Bottom Bar — Mobile Responsive */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} <span className="font-bold text-slate-200">Pettagama.lk</span>. All rights reserved. 241 Galle Road, Kalutara, Sri Lanka.
          </div>
          
          <div className="bg-slate-900/90 text-sky-300 text-[11px] font-bold px-4 py-2 rounded-full border border-slate-800 shadow-inner shrink-0">
            Concept Website Demo by Harsh Apex Digital Solutions
          </div>
        </div>

      </div>
    </footer>
  );
};
