'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Heart, ShoppingBag } from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: '✨ Sri Lanka\'s #1 Craft Store',
    title: 'Everything You Need for Your Creativity',
    subtitle: 'Discover premium resin moulds, embroidery threads, colorful beads, clay, jewellery supplies and handmade gifts — all crafted for Sri Lankan artisans.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1400&q=90',
    accent: 'from-rose-100 to-purple-50',
    primaryCtaText: 'Shop All Crafts',
    primaryCtaLink: '/shop',
    secondaryCtaText: 'View Collections',
    secondaryCtaLink: '#categories',
    featured: { name: 'Resin Jewellery Starter Kit', price: 'Rs. 4,500' },
    stats: [
      { label: 'Products', value: '500+' },
      { label: 'Craft Categories', value: '14' },
      { label: 'Happy Crafters', value: '2,000+' },
    ],
  },
  {
    id: 2,
    badge: '🎨 DIY Craft Kits',
    title: 'Unleash Your Inner Artist Today',
    subtitle: 'All-inclusive beginner & pro craft kits for resin jewellery, punch needle art, and beautiful pipe cleaner flower bouquets.',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1400&q=90',
    accent: 'from-amber-50 to-rose-50',
    primaryCtaText: 'Explore Craft Kits',
    primaryCtaLink: '/category/craft-kits',
    secondaryCtaText: 'Best Sellers',
    secondaryCtaLink: '#bestsellers',
    featured: { name: 'DIY Pipe Cleaner Bouquet Kit', price: 'Rs. 1,350' },
    stats: [
      { label: 'Kits Available', value: '26+' },
      { label: 'Beginner Friendly', value: '100%' },
      { label: 'Customer Rating', value: '4.9 ★' },
    ],
  },
  {
    id: 3,
    badge: '💝 Gift Shop',
    title: 'Handcrafted Gifts & Dainty Jewellery',
    subtitle: 'Thoughtful luxury hampers, 18K gold-plated pearl necklaces, and artisanal Sri Lankan keepsakes for every special occasion.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=90',
    accent: 'from-purple-50 to-pink-50',
    primaryCtaText: 'Explore Gift Gallery',
    primaryCtaLink: '/category/gift-items',
    secondaryCtaText: 'Visit Our Store',
    secondaryCtaLink: '/contact',
    featured: { name: 'Artisan Gift Surprise Box', price: 'Rs. 3,850' },
    stats: [
      { label: 'Gift Items', value: '55+' },
      { label: 'Custom Orders', value: 'Yes' },
      { label: 'Delivery', value: 'Islandwide' },
    ],
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgSrc, setImgSrc] = useState(slides[0].image);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  useEffect(() => {
    setImgSrc(slide.image);
  }, [slide]);

  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 text-slate-800 overflow-hidden border-b border-rose-100">
      
      {/* Soft Ambient Background Blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-rose-200/30 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/3 animate-ambient" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[130px] pointer-events-none translate-x-1/3 translate-y-1/3 animate-ambient" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >

            {/* ——— LEFT: Text Content ——— */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-2 lg:order-1">

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-rose-200 text-rose-700 text-xs font-black px-4 py-2 rounded-full shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-current" />
                <span>{slide.badge}</span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-slate-800"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-500 text-base leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2"
              >
                <Link
                  href={slide.primaryCtaLink}
                  className="w-full sm:w-auto bg-royal-600 hover:bg-royal-700 text-white font-extrabold px-8 py-4 rounded-2xl shadow-lg hover:shadow-royal-500/20 flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-0.5 text-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={slide.secondaryCtaLink}
                  className="w-full sm:w-auto bg-white/80 hover:bg-white text-slate-700 font-bold px-7 py-4 rounded-2xl border border-slate-200 hover:border-rose-300 transition-all text-sm text-center backdrop-blur-md"
                >
                  {slide.secondaryCtaText}
                </Link>
              </motion.div>

              {/* Trust Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-6 pt-4"
              >
                {slide.stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-xl font-black text-royal-700">{stat.value}</div>
                    <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ——— RIGHT: Product Image Card ——— */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">

              {/* Decorative ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-200/40 via-purple-200/30 to-blue-200/40 rounded-[2.5rem] blur-xl" />

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/60 bg-white animate-float"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={imgSrc}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    onError={() => setImgSrc('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=90')}
                    priority
                  />
                  {/* Soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                </div>

                {/* Floating product pill */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-xl rounded-2xl px-5 py-3.5 shadow-xl border border-white flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-widest block mb-0.5">⭐ Featured Item</span>
                    <span className="text-sm font-black text-slate-800">{slide.featured.name}</span>
                  </div>
                  <div className="bg-royal-600 text-white text-xs font-black px-4 py-2 rounded-xl shadow-md">
                    {slide.featured.price}
                  </div>
                </motion.div>

                {/* Wishlist button */}
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-md hover:bg-rose-500 hover:text-white text-rose-400 transition-all">
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </motion.div>

              {/* Floating decorative pill cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-rose-100 hidden lg:flex items-center space-x-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center text-white text-sm">🎨</div>
                <div>
                  <div className="text-xs font-black text-slate-800">14 Categories</div>
                  <div className="text-[10px] text-slate-400">Crafts & Gifts</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-purple-100 hidden lg:flex items-center space-x-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-royal-400 flex items-center justify-center text-white text-sm">🚚</div>
                <div>
                  <div className="text-xs font-black text-slate-800">Free Delivery</div>
                  <div className="text-[10px] text-slate-400">Orders above Rs. 5,000</div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-rose-100/80">
          <div className="flex space-x-2.5 items-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-royal-600 shadow-sm' : 'w-2 bg-slate-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="p-2.5 rounded-xl bg-white/80 hover:bg-royal-600 hover:text-white text-slate-600 shadow-sm border border-slate-200 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-2.5 rounded-xl bg-white/80 hover:bg-royal-600 hover:text-white text-slate-600 shadow-sm border border-slate-200 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
