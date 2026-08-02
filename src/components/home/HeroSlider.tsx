'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ShoppingBag, Heart, ShieldCheck, Star } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    badge: '✦ SRI LANKA\'S PREMIER CRAFT STORE',
    headlineMain: 'Everything You Need',
    headlineSub: 'For Your Creativity',
    description: 'Step into a world of pure craftsmanship. Explore crystal-clear epoxy resin, 3D silicone moulds, air-dry clay, chenille stems, beads & luxury Sri Lankan gifts.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=90',
    featuredItem: {
      name: 'Crystal Epoxy Resin Coaster Set',
      price: 'Rs. 2,400',
      rating: '4.9 ★ (38 Reviews)',
    },
    primaryCta: { text: 'Shop Now', link: '/shop' },
    secondaryCta: { text: 'Browse Collections', link: '#categories' },
  },
  {
    id: 2,
    badge: '🎨 ALL-IN-ONE DIY CRAFT KITS',
    headlineMain: 'Unleash Your Inner',
    headlineSub: 'Master Artisan',
    description: 'All-inclusive beginner & pro craft kits for resin jewellery, punch needle rug art, and everlasting pipe cleaner tulip bouquets delivered islandwide.',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1600&q=90',
    featuredItem: {
      name: 'DIY Pipe Cleaner Flower Kit',
      price: 'Rs. 1,350',
      rating: '5.0 ★ (44 Reviews)',
    },
    primaryCta: { text: 'Explore Craft Kits', link: '/category/craft-kits' },
    secondaryCta: { text: 'View Best Sellers', link: '#bestsellers' },
  },
  {
    id: 3,
    badge: '💝 LUXURY HANDMADE GIFTS',
    headlineMain: 'Thoughtful Keepsakes',
    headlineSub: 'For Every Moment',
    description: 'Handcrafted gift hampers, 18K gold-plated freshwater pearl necklaces, and artisanal Sri Lankan treasures packaged in luxury presentation boxes.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=90',
    featuredItem: {
      name: 'Artisan DIY Craft & Candle Gift Box',
      price: 'Rs. 3,850',
      rating: '4.9 ★ (52 Reviews)',
    },
    primaryCta: { text: 'Shop Gift Gallery', link: '/category/gift-items' },
    secondaryCta: { text: 'Visit Store', link: '/contact' },
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24 md:py-32 border-b border-slate-800/80">
      
      {/* Background Ambient Glowing Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-royal-600/30 rounded-full blur-[140px] pointer-events-none animate-blob" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/20 rounded-full blur-[140px] pointer-events-none animate-blob" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Noise Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >

            {/* Left Editorial Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
              
              {/* Luxury Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center space-x-2 bg-slate-900/90 border border-royal-500/40 text-amber-300 text-xs font-black px-4 py-2 rounded-full shadow-2xl backdrop-blur-xl"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-current animate-pulse" />
                <span className="tracking-widest uppercase">{slide.badge}</span>
              </motion.div>

              {/* Editorial Large Typography */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-1"
              >
                <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.08] text-white">
                  {slide.headlineMain}
                </h1>
                <span className="block text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.08] text-shimmer-luxury">
                  {slide.headlineSub}
                </span>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
              >
                {slide.description}
              </motion.p>

              {/* Glass CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <Link
                  href={slide.primaryCta.link}
                  className="w-full sm:w-auto bg-gradient-to-r from-royal-600 via-royal-500 to-indigo-600 hover:from-royal-500 hover:to-royal-700 text-white font-extrabold px-9 py-4 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1 text-xs uppercase tracking-widest animate-glow-pulse"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{slide.primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={slide.secondaryCta.link}
                  className="w-full sm:w-auto glass-button text-white font-bold px-8 py-4 rounded-2xl transition-all text-xs text-center uppercase tracking-widest"
                >
                  {slide.secondaryCta.text}
                </Link>
              </motion.div>

              {/* Metrics Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-slate-800/80 flex items-center justify-center lg:justify-start gap-8"
              >
                <div>
                  <span className="text-2xl font-black text-white block">500+</span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Craft Supplies</span>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <span className="text-2xl font-black text-amber-400 block">4.9 ★</span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">2,000+ Reviews</span>
                </div>
                <div className="h-8 w-px bg-slate-800" />
                <div>
                  <span className="text-2xl font-black text-emerald-400 block">24h</span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Fast Courier</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Floating Luxury 3D Card */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-royal-500/30 glass-card-dark animate-float-gentle group"
              >
                <Image
                  src={slide.image}
                  alt={slide.headlineMain}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  priority
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Floating Glass Item Pill */}
                <div className="absolute bottom-5 left-5 right-5 glass-card-dark p-4 rounded-2xl shadow-2xl flex items-center justify-between border border-white/20">
                  <div>
                    <div className="flex items-center space-x-1 text-amber-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{slide.featuredItem.rating}</span>
                    </div>
                    <h4 className="text-xs font-bold text-white truncate max-w-[200px]">
                      {slide.featuredItem.name}
                    </h4>
                  </div>
                  <span className="text-xs font-black text-white bg-royal-600 px-3.5 py-2 rounded-xl shadow-md border border-royal-400/50">
                    {slide.featuredItem.price}
                  </span>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel Slide Indicators */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-slate-800/80">
          <div className="flex space-x-3 items-center">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-10 bg-amber-400 shadow-md' : 'w-2.5 bg-slate-800'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
              className="p-3 rounded-2xl glass-button text-white transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="p-3 rounded-2xl glass-button text-white transition-all"
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
