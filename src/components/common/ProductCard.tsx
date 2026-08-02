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
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-3xl border border-rose-100/70 shadow-md hover:shadow-[0_12px_32px_rgba(160,97,109,0.14)] hover:border-amber-200/60 transition-all duration-300 flex flex-col overflow-hidden relative"
    >
      {/* Image */}
      <div className="relative aspect-square bg-[#fdf8f5] overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            onError={() => setImgSrc(FALLBACK_IMAGE)}
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {discountPercent > 0 && (
            <span className="bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-widest">
              -{discountPercent}% OFF
            </span>
          )}
          {product.badge && (
            <span
              className={`text-[10px] font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-widest ${
                product.badge === 'BEST SELLER'
                  ? 'bg-amber-400 text-white'
                  : product.badge === 'NEW'
                  ? 'bg-emerald-400 text-white'
                  : product.badge === 'EXCLUSIVE'
                  ? 'bg-purple-400 text-white'
                  : 'bg-blue-400 text-white'
              }`}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => toggleWishlist(product)}
            className={`p-2.5 rounded-full shadow-md backdrop-blur-md transition-all ${
              isWishlisted
                ? 'bg-rose-500 text-white'
                : 'bg-white/90 text-slate-400 hover:bg-rose-500 hover:text-white border border-rose-100'
            }`}
            aria-label="Add to wishlist"
          >
            <Heart className="w-4 h-4 fill-current" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => openQuickView(product)}
            className="p-2.5 rounded-full bg-white/90 text-slate-400 hover:bg-amber-500 hover:text-white shadow-md backdrop-blur-md transition-all hidden sm:flex items-center justify-center border border-rose-100"
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Low Stock */}
        {product.stock <= 15 && (
          <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md text-amber-600 text-[10px] font-extrabold text-center py-1 rounded-xl border border-amber-200/60 flex items-center justify-center space-x-1">
            <Zap className="w-3 h-3 animate-pulse" />
            <span>Only {product.stock} left in stock!</span>
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-4 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest block mb-1">
            {product.category}
          </span>
          <Link
            href={`/product/${product.slug}`}
            className="text-xs sm:text-sm font-bold text-slate-700 hover:text-amber-700 transition-colors line-clamp-2 leading-snug"
          >
            {product.name}
          </Link>
          <div className="flex items-center space-x-1 mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-slate-200'}`} />
              ))}
            </div>
            <span className="text-[11px] font-bold text-slate-500 ml-1">{product.rating}</span>
            <span className="text-[11px] text-slate-300">({product.reviewCount})</span>
          </div>
        </div>

        <div className="pt-3 border-t border-rose-50 flex items-center justify-between gap-2">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:space-x-1.5">
              <span className="text-sm sm:text-base font-black text-slate-700">
                Rs. {product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span className="text-[11px] text-slate-300 line-through">
                  Rs. {product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white p-3 rounded-2xl shadow-md hover:shadow-amber-200/60 transition-all flex items-center justify-center shrink-0"
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
