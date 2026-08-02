'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PackageCheck, Search, CheckCircle2, Clock, Truck, Home, MapPin } from 'lucide-react';

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get('id') || 'PET-89421';

  const [orderId, setOrderId] = useState(initialId);
  const [phone, setPhone] = useState('+94 77 123 4567');
  const [isSearched, setIsSearched] = useState(true);

  const steps = [
    { label: 'Order Received', date: 'Today, 09:30 AM', completed: true, active: false },
    { label: 'Confirmed', date: 'Today, 10:15 AM', completed: true, active: false },
    { label: 'Processing in Kalutara', date: 'Today, 01:45 PM', completed: true, active: true },
    { label: 'Packed & Sealed', date: 'Pending', completed: false, active: false },
    { label: 'Shipped via Courier', date: 'Pending', completed: false, active: false },
    { label: 'Delivered', date: 'Expected Tomorrow', completed: false, active: false },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) {
      setIsSearched(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Card */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center space-y-4">
          <div className="w-16 h-16 bg-royal-100 text-royal-700 rounded-full flex items-center justify-center mx-auto">
            <PackageCheck className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Track Your Pettagama.lk Order
          </h1>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Enter your Order ID (e.g. #PET-89421) and registered phone number to view real-time courier status.
          </p>

          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto pt-2">
            <input
              type="text"
              required
              placeholder="Order ID (#PET-89421)"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="flex-1 px-4 py-3 border rounded-2xl text-xs font-mono uppercase focus:ring-2 focus:ring-royal-500"
            />
            <input
              type="text"
              required
              placeholder="Phone Number (+94...)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-3 border rounded-2xl text-xs focus:ring-2 focus:ring-royal-500"
            />
            <button
              type="submit"
              className="bg-royal-700 hover:bg-royal-800 text-white font-extrabold text-xs px-6 py-3 rounded-2xl shadow-md transition-colors shrink-0"
            >
              Track Status
            </button>
          </form>
        </div>

        {/* Tracking Timeline Result */}
        {isSearched && (
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            
            {/* Meta bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-6 border-b border-slate-100 gap-2">
              <div>
                <span className="text-[10px] font-bold text-royal-600 uppercase tracking-wider block">
                  Demo Order Tracking
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 font-mono">#{orderId}</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Status: Processing in Kalutara
                </span>
              </div>
            </div>

            {/* Timeline Progress Bar */}
            <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 py-2">
              {steps.map((step, idx) => (
                <div key={idx} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                      step.completed
                        ? 'bg-royal-600 border-royal-600 text-white'
                        : step.active
                        ? 'bg-amber-500 border-amber-500 text-white animate-pulse'
                        : 'bg-white border-slate-300 text-slate-400'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <span className="text-xs font-bold">{idx + 1}</span>
                    )}
                  </div>

                  <div>
                    <h4 className={`text-sm font-bold ${step.completed || step.active ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step.label}
                    </h4>
                    <span className="text-xs text-slate-400">{step.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-royal-600" />
                <span>Destination: Kalutara, Western Province, Sri Lanka</span>
              </div>
              <span className="font-bold text-slate-900">Standard Courier (Prompt)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm font-semibold">Loading Tracking...</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}
