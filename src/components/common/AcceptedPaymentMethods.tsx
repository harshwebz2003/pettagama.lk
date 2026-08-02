'use client';

import React from 'react';
import Image from 'next/image';
import { Lock, ExternalLink } from 'lucide-react';

interface AcceptedPaymentMethodsProps {
  variant?: 'footer' | 'checkout';
}

export const AcceptedPaymentMethods: React.FC<AcceptedPaymentMethodsProps> = ({
  variant = 'footer',
}) => {
  return (
    <div className={`space-y-3 ${variant === 'checkout' ? 'mt-4 pt-4 border-t border-rose-100' : ''}`}>

      {/* Trust Header */}
      <div className="flex items-center justify-center space-x-1.5 text-xs font-bold text-slate-600">
        <Lock className="w-3.5 h-3.5 text-emerald-500" />
        <span className="tracking-wide">100% Guaranteed Safe &amp; Secure Checkout</span>
      </div>

      {/* Payment Badges Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">

        {/* Visa */}
        <div className="h-9 px-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 transition-all">
          <span className="font-extrabold italic text-blue-900 tracking-tighter text-base leading-none">
            VISA
          </span>
        </div>

        {/* Mastercard */}
        <div className="h-9 px-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center space-x-1.5 hover:border-red-200 transition-all">
          <div className="flex items-center -space-x-2">
            <div className="w-5 h-5 rounded-full bg-red-500 opacity-90" />
            <div className="w-5 h-5 rounded-full bg-amber-400 opacity-90" />
          </div>
          <span className="font-black text-[11px] text-slate-700 tracking-tight">mastercard</span>
        </div>

        {/* LankaQR — Real Official Logo */}
        <div className="h-9 px-2 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center hover:border-amber-300 hover:shadow-md transition-all">
          <Image
            src="/payments/lankaqr.png"
            alt="LankaQR"
            width={72}
            height={28}
            className="object-contain h-7 w-auto"
          />
        </div>

        {/* PayHere */}
        <div className="h-9 px-3 bg-[#1a237e] text-white rounded-xl shadow-sm flex items-center justify-center hover:bg-[#283593] transition-all">
          <span className="font-black text-[11px] text-blue-200 tracking-wider">PayHere</span>
        </div>

        {/* Bank Transfer */}
        <div className="h-9 px-3 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center space-x-1 hover:border-slate-300 transition-all">
          <span className="text-base">🏦</span>
          <span className="font-bold text-[10px] text-slate-600">Bank Transfer</span>
        </div>

        {/* Cash on Delivery — Green Highlight Badge */}
        <div className="h-9 px-3 bg-emerald-50 border border-emerald-300 text-emerald-700 rounded-xl shadow-sm flex items-center justify-center space-x-1.5 hover:bg-emerald-100 transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-extrabold text-[10px] uppercase tracking-wider">Cash on Delivery</span>
        </div>

      </div>

      {/* WhatsApp Catalog Link */}
      <div className="text-center pt-1">
        <a
          href="https://wa.me/c/130129573445815"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1.5 text-xs font-black text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-4 py-1.5 rounded-full border border-emerald-200 transition-all"
        >
          <span>📱 Browse Official WhatsApp Catalog</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
