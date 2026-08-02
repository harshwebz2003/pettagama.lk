'use client';

import React from 'react';
import Image from 'next/image';

interface AcceptedPaymentMethodsProps {
  variant?: 'footer' | 'checkout';
}

export const AcceptedPaymentMethods: React.FC<AcceptedPaymentMethodsProps> = ({
  variant = 'footer',
}) => {
  return (
    <div className={`flex flex-col items-center space-y-3 ${variant === 'checkout' ? 'mt-4 pt-4 border-t border-blue-100' : ''}`}>

      {/* Section Label */}
      <div className="flex items-center space-x-2">
        <div className="h-px w-8 bg-slate-300" />
        <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">
          🔒 Payment Methods
        </span>
        <div className="h-px w-8 bg-slate-300" />
      </div>

      {/* Payment Logos Row */}
      <div className="flex flex-wrap items-center justify-center gap-5">

        {/* PayHere Official Short Banner */}
        <a
          href="https://www.payhere.lk"
          target="_blank"
          rel="noopener noreferrer"
          title="PayHere — Secure Online Payments"
          className="hover:opacity-90 transition-opacity flex items-center justify-center max-w-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.payhere.lk/downloads/images/payhere_short_banner.png"
            alt="PayHere"
            width={700}
            className="w-full max-w-[700px] h-auto object-contain drop-shadow-sm"
          />
        </a>

        {/* Divider */}
        <div className="h-10 w-px bg-slate-200 hidden sm:block" />

        {/* Cash on Delivery Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/payments/cod.jpg"
            alt="Cash on Delivery Available"
            width={56}
            height={56}
            className="w-14 h-14 object-contain drop-shadow-md hover:scale-110 transition-transform duration-300"
          />
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest leading-tight">Cash on</span>
            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest leading-tight">Delivery ✓</span>
          </div>
        </div>

      </div>

    </div>
  );
};
