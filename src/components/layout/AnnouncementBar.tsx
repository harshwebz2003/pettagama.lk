'use client';

import React from 'react';
import { Truck, ShieldCheck, PhoneCall, Clock } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-royal-900 text-white text-xs py-2 px-4 border-b border-royal-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left Side Features */}
        <div className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-0.5">
          <div className="flex items-center space-x-1.5 shrink-0">
            <Truck className="w-3.5 h-3.5 text-accent-red" />
            <span>Islandwide Fast Courier Delivery</span>
          </div>
          <div className="hidden sm:flex items-center space-x-1.5 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Secure Shopping Demo</span>
          </div>
          <div className="hidden lg:flex items-center space-x-1.5 shrink-0">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Open Daily: 8:30 AM – 7:30 PM</span>
          </div>
        </div>

        {/* Right Side Support */}
        <div className="flex items-center space-x-4 shrink-0">
          <a
            href="https://wa.me/94775142572"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 hover:text-emerald-400 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-medium">WhatsApp Support: +94 77 514 2572</span>
          </a>
        </div>
      </div>
    </div>
  );
};
