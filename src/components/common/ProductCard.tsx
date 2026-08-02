'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye, Star, Zap } from 'lucide-react';
import { Product } from '@/types';
import { useShop } from '@/context/ShopContext';

interface ProductCardProps {
  product: Product;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80';

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, openQuickView } = useShop();

  const [imgSrc, setImgSrc] = useState(product.images[0] || FALLBACK_IMAGE);

  const isWishlisted = isInWishlist(product.id);

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-royal-400/50 transition-all duration-300 flex flex-col overflow-hidden relative"
    >
      
      {/* Product Image Container */}
      <div className="relative aspect-square bg-slate-50 overflow-hidden">
        
        {/* Main Image */}
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            onError={() => setImgSrc(FALLBACK_IMAGE)}
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {discountPercent > 0 && (
            <span className="bg-gradient-to-r from-accent-red to-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider animate-pulse">
              -{discountPercent}% OFF
            </span>
          )}
          {product.badge && (
            <span
              className={`text-[10px] font-black px-3 py-1 rounded-full shadow-md uppercase tracking-wider ${
                product.badge === 'BEST SELLER'
                  ? 'bg-amber-500 text-white'
                  : product.badge === 'NEW'
                  ? 'bg-emerald-600 text-white'
                  : product.badge === 'EXCLUSIVE'
                  ? 'bg-purple-600 text-white'
                  : 'bg-royal-600 text-white'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Floating Actions: Wishlist & Quick View */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => toggleWishlist(product)}
            className={`p-2.5 rounded-full shadow-lg backdrop-blur-md transition-all ${
              isWishlisted
                ? 'bg-accent-red text-white'
                : 'bg-white/90 text-slate-700 hover:bg-accent-red hover:text-white'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4 fill-current" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => openQuickView(product)}
            className="p-2.5 rounded-full bg-white/90 text-slate-700 hover:bg-royal-600 hover:text-white shadow-lg backdrop-blur-md transition-all hidden sm:flex items-center justify-center"
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Low Stock Indicator */}
        {product.stock <= 15 && (
          <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[10px] font-extrabold text-center py-1 rounded-xl border border-amber-500/30 flex items-center justify-center space-x-1">
            <Zap className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>Only {product.stock} left in stock!</span>
          </div>
        )}
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-[11px] font-bold text-royal-600 uppercase tracking-wider block mb-1">
            {product.category}
          </span>

          <Link
            href={`/product/${product.slug}`}
            className="text-sm font-extrabold text-slate-900 hover:text-royal-700 transition-colors line-clamp-2 leading-snug"
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="flex items-center space-x-1 mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-slate-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-700 ml-1">
              {product.rating}
            </span>
            <span className="text-xs text-slate-400">({product.reviewCount})</span>
          </div>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-base font-black text-royal-800">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-slate-400 line-through">
                  Rs. {product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product)}
            className="bg-royal-600 hover:bg-royal-700 text-white p-3 rounded-2xl shadow-md hover:shadow-royal-500/30 transition-all flex items-center justify-center shrink-0"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
