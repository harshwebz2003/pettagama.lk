'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ShoppingBag, Star } from 'lucide-react';

function FloatingPaths() {
  const paths = Array.from({ length: 32 }, (_, i) => {
    const scale = 180 + i * 12;
    const offsetX = 348;
    const offsetY = 158;

    const d = `
      M ${offsetX - scale} ${offsetY}
      C ${offsetX - scale} ${offsetY - scale * 0.5}, 
        ${offsetX - scale * 0.5} ${offsetY - scale * 0.5}, 
        ${offsetX} ${offsetY}
      C ${offsetX + scale * 0.5} ${offsetY + scale * 0.5}, 
        ${offsetX + scale} ${offsetY + scale * 0.5}, 
        ${offsetX + scale} ${offsetY}
      C ${offsetX + scale} ${offsetY - scale * 0.5}, 
        ${offsetX + scale * 0.5} ${offsetY - scale * 0.5}, 
        ${offsetX} ${offsetY}
      C ${offsetX - scale * 0.5} ${offsetY + scale * 0.5}, 
        ${offsetX - scale} ${offsetY + scale * 0.5}, 
        ${offsetX - scale} ${offsetY}
    `.replace(/\s+/g, ' ').trim();

    return {
      id: i,
      d,
      width: 0.5 + i * 0.03,
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="w-full h-full text-[#8D93E8]"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Infinity Paths</title>
        {paths.map((path, index) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.15 + path.id * 0.015}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.7, 0.7, 0],
            }}
            transition={{
              duration: 14 + index * 0.4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

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
    <section className="hero-logo-bg relative text-slate-800 overflow-hidden py-12 pb-20 sm:py-24 md:py-32 border-b border-sky-100/60">
      
      {/* Animated Infinity SVG Paths Background */}
      <FloatingPaths />

      {/* Ocean Breeze Ambient Glowing Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-300/30 via-blue-400/20 to-teal-300/25 blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >

            {/* Left Editorial Content Column */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left order-1">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center space-x-2 bg-white/95 border border-[#B8C0FF] text-[#5A60C8] text-xs font-black px-4 py-2 rounded-full shadow-sm backdrop-blur-xl"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8D93E8] fill-current animate-pulse" />
                <span className="tracking-widest uppercase">{slide.badge}</span>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-1"
              >
                <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.08] text-slate-800">
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
                className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
              >
                {slide.description}
              </motion.p>

              {/* Soft CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              >
                <Link
                  href={slide.primaryCta.link}
                  className="w-full sm:w-auto bg-gradient-to-r from-[#8D93E8] via-[#6C72E0] to-[#4A4FB0] hover:from-[#6C72E0] hover:to-[#4A4FB0] text-white font-extrabold px-9 py-4 rounded-2xl shadow-lg flex items-center justify-center space-x-3 transition-all transform hover:-translate-y-1 text-xs uppercase tracking-widest animate-glow-pulse"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{slide.primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={slide.secondaryCta.link}
                  className="w-full sm:w-auto glass-button text-slate-700 font-bold px-8 py-4 rounded-2xl transition-all text-xs text-center uppercase tracking-widest hover:bg-white/90"
                >
                  {slide.secondaryCta.text}
                </Link>
              </motion.div>

              {/* Metrics Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-sky-200/50 flex items-center justify-center lg:justify-start gap-8"
              >
                <div>
                  <span className="text-2xl font-black text-slate-800 block">500+</span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Craft Supplies</span>
                </div>
                <div className="h-8 w-px bg-sky-200/60" />
                <div>
                  <span className="text-2xl font-black text-amber-500 block">4.9 ★</span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">2,000+ Reviews</span>
                </div>
                <div className="h-8 w-px bg-sky-200/60" />
                <div>
                  <span className="text-2xl font-black text-emerald-600 block">24h</span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider">Fast Courier</span>
                </div>
              </motion.div>

            </div>

            {/* Right Column: Floating Luxury Card */}
            <div className="lg:col-span-5 relative order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(41,171,226,0.2)] border border-sky-200/60 bg-white/70 backdrop-blur-md animate-float-gentle group"
              >
                <Image
                  src={slide.image}
                  alt={slide.headlineMain}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-70" />

                {/* Floating Glass Item Pill */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-lg p-4 rounded-2xl shadow-xl flex items-center justify-between border border-sky-100">
                  <div>
                    <div className="flex items-center space-x-1 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{slide.featuredItem.rating}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-700 truncate max-w-[200px]">
                      {slide.featuredItem.name}
                    </h4>
                  </div>
                  <span className="text-xs font-black text-white bg-[#29ABE2] px-3.5 py-2 rounded-xl shadow-md">
                    {slide.featuredItem.price}
                  </span>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Carousel Slide Indicators */}
        <div className="flex items-center justify-between mt-12 pt-6 border-t border-sky-200/50">
          <div className="flex space-x-3 items-center">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-10 bg-[#29ABE2] shadow-md' : 'w-2.5 bg-sky-200'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
              className="p-3 rounded-2xl glass-button text-slate-600 hover:text-slate-800 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
              className="p-3 rounded-2xl glass-button text-slate-600 hover:text-slate-800 transition-all"
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
