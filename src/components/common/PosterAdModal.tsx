'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MessageCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

const posters = [
  {
    id: 1,
    title: 'Weekend Special 10% OFF On All Raw Materials',
    image: '/ads/poster2.jpg',
    badge: '10% DISCOUNT',
    tagline: 'August 1 & 2 Special Weekend Offer',
    whatsappMessage: 'Hi Pettagama.lk, I saw your 10% OFF Weekend Special Raw Materials offer poster and would like to order!',
  },
  {
    id: 2,
    title: 'Soap Starter Kit Offer',
    image: '/ads/poster3.jpg',
    price: 'Rs. 855/=',
    originalPrice: 'Rs. 950/=',
    badge: '10% OFF',
    tagline: 'Basic handmade soap making package',
    whatsappMessage: 'Hi Pettagama.lk, I would like to order the Soap Starter Kit (Offer Price: Rs. 855/=)!',
  },
  {
    id: 3,
    title: 'Daisy Candles Package',
    image: '/ads/poster4.jpg',
    price: 'Rs. 1,665/=',
    originalPrice: 'Rs. 1,850/=',
    badge: 'SPECIAL OFFER',
    tagline: 'Complete Daisy Candle Mould & Wax Package',
    whatsappMessage: 'Hi Pettagama.lk, I would like to order the Daisy Candles Package (Offer Price: Rs. 1,665/=)!',
  },
  {
    id: 4,
    title: 'Bubble Candle Starter Kit',
    image: '/ads/poster5.jpg',
    price: 'Rs. 1,035/=',
    originalPrice: 'Rs. 1,150/=',
    badge: '10% OFF',
    tagline: 'Create Beautiful Bubble Candles at Home',
    whatsappMessage: 'Hi Pettagama.lk, I would like to order the Bubble Candle Starter Kit (Offer Price: Rs. 1,035/=)!',
  },
  {
    id: 5,
    title: 'Soap Starter Kit Standard Pack',
    image: '/ads/poster1.jpg',
    price: 'Rs. 950/=',
    badge: 'POPULAR',
    tagline: 'Kalutara Pettagama Shop Special',
    whatsappMessage: 'Hi Pettagama.lk, I would like to order the Soap Starter Kit (Rs. 950/=)!',
  },
];

export const PosterAdModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show modal 1.2s after load if user hasn't closed it in this session
    const hasClosed = sessionStorage.getItem('pettagama_ad_closed');
    if (!hasClosed) {
      const timer = setTimeout(() => setIsOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('pettagama_ad_closed', 'true');
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posters.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? posters.length - 1 : prev - 1));
  };

  if (!isOpen) return null;

  const activePoster = posters[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
        
        {/* Backdrop Click to Close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0"
        />

        {/* Poster Modal Dialog Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-rose-200 z-10 flex flex-col"
        >
          
          {/* Top Header Bar with Prominent CLOSE BUTTON */}
          <div className="bg-gradient-to-r from-royal-600 via-royal-700 to-indigo-700 text-white px-5 py-3.5 flex items-center justify-between shadow-sm">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="text-xs font-black uppercase tracking-wider">
                Special Weekend Offer ({currentIndex + 1}/{posters.length})
              </span>
            </div>

            {/* PROMINENT CLOSE BUTTON */}
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all transform hover:scale-110 flex items-center justify-center border border-white/30"
              aria-label="Close Advertisement"
              title="Close Ad"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* Poster Image Container */}
          <div className="relative aspect-[3/4] w-full bg-slate-100 overflow-hidden group">
            <Image
              src={activePoster.image}
              alt={activePoster.title}
              fill
              className="object-contain bg-slate-900"
              priority
            />

            {/* Left & Right Slide Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-royal-600 text-white transition-all shadow-lg backdrop-blur-md"
              aria-label="Previous Offer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 hover:bg-royal-600 text-white transition-all shadow-lg backdrop-blur-md"
              aria-label="Next Offer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Poster Badge */}
            <div className="absolute top-3 left-3 bg-gradient-to-r from-accent-red to-red-600 text-white font-black text-[11px] px-3.5 py-1 rounded-full shadow-md uppercase tracking-wider">
              {activePoster.badge}
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col gap-3">
            
            {/* Carousel Dots */}
            <div className="flex items-center justify-center space-x-2">
              {posters.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-7 bg-royal-600' : 'w-2 bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              {/* WhatsApp Direct Order Button */}
              <a
                href={`https://wa.me/94775142572?text=${encodeURIComponent(activePoster.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl shadow-md flex items-center justify-center space-x-2 text-xs uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </a>

              {/* CLOSE AD BUTTON */}
              <button
                onClick={handleClose}
                className="px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                Close Ad
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
