'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Lock, ExternalLink } from 'lucide-react';

interface AcceptedPaymentMethodsProps {
  variant?: 'footer' | 'checkout';
}

export const AcceptedPaymentMethods: React.FC<AcceptedPaymentMethodsProps> = ({
  variant = 'footer',
}) => {
  return (
    <div className={`space-y-3 ${variant === 'checkout' ? 'mt-4 pt-4 border-t border-slate-200' : ''}`}>
      
      {/* Trust Element Header */}
      <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-slate-700">
        <Lock className="w-3.5 h-3.5 text-emerald-600" />
        <span className="tracking-wide">100% Guaranteed Safe & Secure Checkout</span>
      </div>

      {/* Payment Badges Grid / Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        
        {/* Visa */}
        <div className="h-8 px-2.5 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center hover:border-slate-300 transition-all">
          <span className="font-extrabold italic text-blue-900 tracking-tighter text-sm">
            VISA
          </span>
        </div>

        {/* Mastercard */}
        <div className="h-8 px-2.5 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center space-x-0.5 hover:border-slate-300 transition-all">
          <div className="flex items-center -space-x-1.5">
            <div className="w-4 h-4 rounded-full bg-red-500 opacity-90" />
            <div className="w-4 h-4 rounded-full bg-amber-400 opacity-90" />
          </div>
          <span className="font-black text-[11px] text-slate-800 tracking-tight ml-1">
            mastercard
          </span>
        </div>

        {/* LANKAQR */}
        <div className="h-8 px-2.5 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-lg shadow-sm flex items-center justify-center space-x-1 hover:opacity-95 transition-all">
          <span className="font-black text-[10px] tracking-widest uppercase">LANKAQR</span>
        </div>

        {/* PayHere */}
        <div className="h-8 px-2.5 bg-royal-900 text-white rounded-lg shadow-sm flex items-center justify-center space-x-1 hover:bg-royal-800 transition-all">
          <span className="font-black text-[10px] text-blue-300 tracking-wider">PayHere</span>
        </div>

        {/* Bank Transfer */}
        <div className="h-8 px-2.5 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center space-x-1 hover:border-slate-300 transition-all">
          <span className="text-xs">🏦</span>
          <span className="font-bold text-[10px] text-slate-700">Bank Transfer</span>
        </div>

        {/* Custom Cash on Delivery (COD) Highlight Badge */}
        <div className="h-8 px-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg shadow-sm flex items-center justify-center space-x-1.5 hover:bg-emerald-100 transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-extrabold text-[10px] uppercase tracking-wider">
            Cash on Delivery Available
          </span>
        </div>
      </div>

      {/* WhatsApp Catalog Link */}
      <div className="text-center pt-1">
        <a
          href="https://wa.me/c/130129573445815"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-black text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200 transition-all"
        >
          <span>📱 Browse Official WhatsApp Catalog</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
