'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, Star } from 'lucide-react';

export const StoreInfoMap: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Physical Store Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-royal-100 text-royal-700 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Our Kalutara Outlet</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Pettagama.lk Physical Store &amp; Showroom
            </h2>

            {/* Google Rating Badge */}
            <div className="flex items-center space-x-2 bg-amber-50 border border-amber-200/80 px-4 py-2 rounded-2xl w-fit">
              <div className="flex items-center space-x-1 text-amber-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xs font-black text-slate-800">4.9 / 5.0 Google Reviews</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Prefer to see our craft supplies in person? Visit our main retail outlet located right on Galle Road in Kalutara. Explore 1,000+ resin moulds, clay tools, beads, and jewellery findings in-store.
            </p>

            <div className="space-y-4 pt-2 text-xs">
              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <MapPin className="w-5 h-5 text-royal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Physical Address</h4>
                  <p className="text-slate-600">241 Galle Road, Kalutara, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Phone className="w-5 h-5 text-royal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Phone Support</h4>
                  <p className="text-slate-600">+94 76 330 2572</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp Inquiry</h4>
                  <p className="text-slate-600">+94 77 514 2572</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900">Store Opening Hours</h4>
                  <p className="text-slate-600">8:30 AM – 7:30 PM (Open 7 Days a Week)</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/mPckimUh8G6KcZ299"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-royal-700 hover:bg-royal-800 text-white font-bold text-xs px-6 py-3.5 rounded-2xl shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map for Pettagama.lk */}
          <div className="lg:col-span-7 relative h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-100">
            <iframe
              title="Pettagama.lk Kalutara Store Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5295120031374!2d79.9615262!3d6.5808944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae237fb4d31e1d5%3A0xb85760ef2bca0bbc!2sPettagama.lk!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[10%] contrast-[105%]"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-200 text-slate-900 text-xs">
              <div className="font-black text-royal-800 flex items-center space-x-1">
                <span>Pettagama.lk Store</span>
                <span className="text-amber-500">★ 4.9</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">241 Galle Road, Kalutara, Sri Lanka</div>
              <a
                href="https://maps.app.goo.gl/mPckimUh8G6KcZ299"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-royal-700 font-bold hover:underline block mt-1"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
