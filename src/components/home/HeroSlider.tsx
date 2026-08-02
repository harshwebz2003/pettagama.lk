'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Zap, ShieldCheck } from 'lucide-react';

const slides = [
  {
    id: 1,
    badge: 'Futuristic Crafting Hub Sri Lanka',
    title: 'Everything You Need for Your Creativity',
    subtitle: 'Step into the future of arts & crafts. Explore crystal-clear epoxy resin, precision 3D moulds, air-dry clay, pipe cleaners & embroidery tools.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    primaryCtaText: 'Explore Craft Universe',
    primaryCtaLink: '/shop',
    secondaryCtaText: 'View 14 Collections',
    secondaryCtaLink: '#categories',
  },
  {
    id: 2,
    badge: 'Next-Gen DIY Craft Kits',
    title: 'Unleash Your Inner Artist Today',
    subtitle: 'All-inclusive beginner & pro craft kits for resin jewellery, punch needle rugs, and everlasting pipe cleaner bouquets.',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80',
    primaryCtaText: 'Discover Craft Kits',
    primaryCtaLink: '/category/craft-kits',
    secondaryCtaText: 'Browse Best Sellers',
    secondaryCtaLink: '#bestsellers',
  },
  {
    id: 3,
    badge: 'Kalutara Retail Showroom',
    title: 'Handcrafted Gifts & Dainty Jewellery',
    subtitle: 'Customized luxury hampers, 18K gold-plated pearl necklaces, and artisanal Sri Lankan keepsakes for every occasion.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
    primaryCtaText: 'Explore Gift Gallery',
    primaryCtaLink: '/category/gift-items',
    secondaryCtaText: 'Contact Store',
    secondaryCtaLink: '/contact',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-16 md:py-24 border-b border-royal-900/40">
      
      {/* Cinematic Ambient Glow Spheres */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-royal-600/30 rounded-full blur-[120px] pointer-events-none animate-ambient" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-red/20 rounded-full blur-[120px] pointer-events-none animate-ambient" />
      <div className="absolute top-10 right-1/3 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Futuristic Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center space-x-2.5 bg-royal-900/80 border border-royal-500/50 text-amber-300 text-xs font-black px-4 py-2 rounded-full shadow-2xl backdrop-blur-xl"
              >
                <Zap className="w-4 h-4 text-amber-400 fill-current animate-pulse" />
                <span className="tracking-wider uppercase text-[11px]">{slide.badge}</span>
              </motion.div>

              {/* Title with Shimmer Gradient */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-shimmer drop-shadow-2xl"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <Link
                  href={slide.primaryCtaLink}
                  className="w-full sm:w-auto bg-gradient-to-r from-accent-red via-red-600 to-accent-red hover:from-red-600 hover:to-accent-red text-white font-extrabold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-red-500/30 flex items-center justify-center space-x-3 transform hover:-translate-y-1 transition-all text-xs uppercase tracking-wider animate-pulse-glow"
                >
                  <span>{slide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={slide.secondaryCtaLink}
                  className="w-full sm:w-auto glass-panel hover:bg-white/10 text-white font-bold px-7 py-4 rounded-2xl border border-white/20 transition-all text-xs text-center uppercase tracking-wider backdrop-blur-xl"
                >
                  {slide.secondaryCtaText}
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Floating 3D Image Preview Card */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-royal-500/30 glass-card-dark group animate-float"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  priority
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating Glass Label */}
                <div className="absolute bottom-5 left-5 right-5 glass-panel p-4 rounded-2xl shadow-2xl flex items-center justify-between border border-white/20">
                  <div>
                    <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block mb-0.5">
                      ★ Featured Item
                    </span>
                    <h4 className="text-xs font-bold text-white truncate max-w-[200px]">
                      Crystal Epoxy Resin Coaster Kit
                    </h4>
                  </div>
                  <span className="text-xs font-black text-white bg-royal-600/90 px-3.5 py-1.5 rounded-xl border border-royal-400/50 shadow-md">
                    Rs. 2,400
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators & Controls */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-800/80">
          <div className="flex space-x-3 items-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-10 bg-amber-400 shadow-md' : 'w-2.5 bg-slate-700'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="p-3 rounded-2xl glass-panel hover:bg-royal-600/50 text-white transition-all border border-slate-700"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-3 rounded-2xl glass-panel hover:bg-royal-600/50 text-white transition-all border border-slate-700"
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
