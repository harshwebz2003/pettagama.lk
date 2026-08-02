'use client';

import React, { useState, useEffect, useRef, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ShoppingBag, Star, Truck, ShieldCheck, MessageCircle, Heart } from 'lucide-react';

/* ============================================================
   BACKGROUND VIDEO COMPONENT (MEMOIZED TO PREVENT RE-RENDER FREEZES)
   ============================================================ */
const HeroBackgroundVideo = memo(() => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideos = async () => {
      try {
        if (desktopVideoRef.current && desktopVideoRef.current.paused) {
          await desktopVideoRef.current.play();
        }
        if (mobileVideoRef.current && mobileVideoRef.current.paused) {
          await mobileVideoRef.current.play();
        }
      } catch (err) {
        console.log('Autoplay handled:', err);
      }
    };

    playVideos();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideos();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#DFF7FF]">
      {/* Desktop & Tablet Video (Landscape) */}
      <video
        ref={desktopVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        // @ts-ignore
        disablePictureInPicture
        // @ts-ignore
        disableRemotePlayback
        onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
        className="hidden md:block w-full h-full object-cover opacity-85 mix-blend-multiply scale-105 transform-gpu will-change-transform"
      >
        <source src="/Create_intro_video_e-commerce_202608030043.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video (Portrait 9:16) */}
      <video
        ref={mobileVideoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        // @ts-ignore
        disablePictureInPicture
        // @ts-ignore
        disableRemotePlayback
        onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
        className="block md:hidden w-full h-full object-cover opacity-85 mix-blend-multiply scale-105 transform-gpu will-change-transform"
      >
        <source src="/Intro_video_for_පෙට්ටගම.LK_202608030108 (1).mp4" type="video/mp4" />
      </video>

      {/* Soft Glass Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/50 backdrop-blur-[1px]" />
    </div>
  );
});

HeroBackgroundVideo.displayName = 'HeroBackgroundVideo';

const heroSlides = [
  {
    id: 1,
    badge: '✨ SRI LANKA\'S PREMIUM CRAFT STORE',
    headlineTop: 'Create Beautiful',
    headlineGradient: 'Handmade Creations',
    headlineBottom: 'With Premium Craft Supplies',
    description: 'Step into a world of pure craftsmanship. Explore crystal-clear epoxy resin, 3D silicone moulds, air-dry clay, chenille stems, beads & luxury Sri Lankan gifts.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=90',
    featuredItem: {
      name: 'Crystal Epoxy Resin Coaster Set',
      price: 'Rs. 2,400',
      rating: '4.9 ★ (38 Reviews)',
    },
  },
  {
    id: 2,
    badge: '✨ SRI LANKA\'S PREMIER CRAFT STORE',
    headlineTop: 'Unleash Your Inner',
    headlineGradient: 'Handmade Creations',
    headlineBottom: 'With All-In-One Craft Kits',
    description: 'All-inclusive beginner & pro craft kits for resin jewellery, punch needle rug art, and everlasting pipe cleaner tulip bouquets delivered islandwide.',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1600&q=90',
    featuredItem: {
      name: 'DIY Pipe Cleaner Flower Kit',
      price: 'Rs. 1,350',
      rating: '5.0 ★ (44 Reviews)',
    },
  },
  {
    id: 3,
    badge: '✨ SRI LANKA\'S PREMIER CRAFT STORE',
    headlineTop: 'Thoughtful Keepsakes',
    headlineGradient: 'Handmade Creations',
    headlineBottom: 'For Every Special Moment',
    description: 'Handcrafted gift hampers, 18K gold-plated freshwater pearl necklaces, and artisanal Sri Lankan treasures packaged in luxury presentation boxes.',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=90',
    featuredItem: {
      name: 'Artisan DIY Craft & Candle Gift Box',
      price: 'Rs. 3,850',
      rating: '4.9 ★ (52 Reviews)',
    },
  },
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [-300, 300], [-15, 15]);
  const parallaxY = useTransform(mouseY, [-300, 300], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="hero-logo-bg relative text-slate-800 overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-28 border-b border-sky-100/80"
    >
      {/* Background Video (Memoized) */}
      <HeroBackgroundVideo />

      {/* 2. Layered Blurred Blobs & Light Effects */}
      <div className="absolute top-1/4 -left-24 w-[420px] h-[420px] bg-[#7FCDFF]/45 rounded-full blur-[140px] pointer-events-none animate-blob z-[1]" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#29ABE2]/30 rounded-full blur-[150px] pointer-events-none animate-blob z-[1]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#DFF7FF]/60 rounded-full blur-[170px] pointer-events-none z-[1]" />

      {/* 3. Subtle Floating Particles & Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70 shadow-[0_0_12px_rgba(41,171,226,0.4)] border border-sky-200"
            style={{
              width: `${6 + (i % 3) * 4}px`,
              height: `${6 + (i % 3) * 4}px`,
              left: `${12 + i * 11}%`,
              top: `${20 + (i % 4) * 18}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              opacity: [0.3, 0.85, 0.3],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 5 + (i % 3) * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Main Editorial Split Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >

            {/* LEFT SIDE: Editorial Typography, Badges, CTAs & Stats */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1">
              
              {/* Premium Small Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center space-x-2 bg-white/95 border border-sky-200/90 text-[#0277BD] text-xs font-extrabold px-4 py-2 rounded-full shadow-sm backdrop-blur-xl hover:shadow-md transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#29ABE2] fill-current animate-pulse" />
                <span className="tracking-widest uppercase">{slide.badge}</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-1"
              >
                <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-black tracking-tight leading-[1.08] text-slate-900">
                  {slide.headlineTop}
                  <span className="block text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.08] text-shimmer-luxury my-1">
                    {slide.headlineGradient}
                  </span>
                  <span className="block text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-800">
                    {slide.headlineBottom}
                  </span>
                </h1>
              </motion.div>

              {/* Short Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-slate-700 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              >
                {slide.description}
              </motion.p>

              {/* Two Premium Buttons with Magnetic & Glass Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              >
                <Link
                  href="/shop"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#29ABE2] via-[#0288D1] to-[#01579B] hover:from-[#0288D1] hover:to-[#01579B] text-white font-extrabold px-9 py-4 rounded-2xl shadow-xl flex items-center justify-center space-x-3 transition-all transform hover:scale-[1.03] active:scale-95 text-xs uppercase tracking-widest animate-glow-pulse border border-white/30"
                >
                  <ShoppingBag className="w-4.5 h-4.5" />
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>

                <Link
                  href="#categories"
                  className="w-full sm:w-auto glass-button text-slate-800 font-extrabold px-8 py-4 rounded-2xl transition-all text-xs text-center uppercase tracking-widest hover:bg-white/95 transform hover:scale-[1.02] active:scale-95 border border-sky-200/80"
                >
                  Explore Categories
                </Link>
              </motion.div>

              {/* Statistics Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 border-t border-sky-200/70 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center lg:text-left bg-white/40 p-4 rounded-2xl border border-white/60 backdrop-blur-md"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#0277BD] block">500+</span>
                  <span className="text-[11px] text-slate-600 uppercase font-bold tracking-wider">Products</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-amber-500 block">4.9 ★</span>
                  <span className="text-[11px] text-slate-600 uppercase font-bold tracking-wider">Customer Rating</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 block">24h</span>
                  <span className="text-[11px] text-slate-600 uppercase font-bold tracking-wider">Islandwide Delivery</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#29ABE2] block">56K+</span>
                  <span className="text-[11px] text-slate-600 uppercase font-bold tracking-wider">Happy Community</span>
                </div>
              </motion.div>

            </div>

            {/* RIGHT SIDE: Floating Luxury Editorial Showcase with Mouse Parallax */}
            <motion.div 
              style={{ x: parallaxX, y: parallaxY }}
              className="lg:col-span-5 relative order-2"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_rgba(41,171,226,0.25)] border-2 border-white/90 bg-white/70 backdrop-blur-md animate-float-gentle group"
              >
                <Image
                  src={slide.image}
                  alt={slide.headlineTop || 'Pettagama Craft Showcase'}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                
                {/* Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent opacity-80" />

                {/* Floating Glass Item Pill */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl p-4 rounded-2xl shadow-xl flex items-center justify-between border border-sky-100/90">
                  <div>
                    <div className="flex items-center space-x-1 text-amber-500 text-[10px] font-extrabold uppercase tracking-widest mb-0.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{slide.featuredItem.rating}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-800 truncate max-w-[200px]">
                      {slide.featuredItem.name}
                    </h4>
                  </div>
                  <span className="text-xs font-black text-white bg-gradient-to-r from-[#29ABE2] to-[#0277BD] px-4 py-2 rounded-xl shadow-md">
                    {slide.featuredItem.price}
                  </span>
                </div>
              </motion.div>

              {/* Slide Controls Below Showcase */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2 items-center">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-8 bg-[#29ABE2] shadow-md' : 'w-2.5 bg-sky-200'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                    className="p-2.5 rounded-xl glass-button text-slate-700 hover:text-slate-900 transition-all"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                    className="p-2.5 rounded-xl glass-button text-slate-700 hover:text-slate-900 transition-all"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>

        {/* BOTTOM OF HERO: Premium Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4"
        >
          {[
            { icon: Truck, text: '🚚 Islandwide Delivery', sub: 'Fast & trackable courier' },
            { icon: ShieldCheck, text: '🔒 Secure Checkout', sub: 'PayHere & COD verified' },
            { icon: MessageCircle, text: '💬 WhatsApp Support', sub: 'Instant daily guidance' },
            { icon: Star, text: '⭐ 56,000+ Customers', sub: 'Rated 4.9/5 in Sri Lanka' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/85 backdrop-blur-xl p-4 rounded-2xl border border-sky-200/70 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex items-center space-x-3 group"
            >
              <div className="p-2.5 rounded-xl bg-sky-50 text-[#29ABE2] group-hover:bg-[#29ABE2] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h5 className="text-xs font-black text-slate-800 truncate">{item.text}</h5>
                <p className="text-[10px] text-slate-500 font-medium truncate">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
