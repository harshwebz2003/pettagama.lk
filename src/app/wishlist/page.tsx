'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { Heart, ShoppingBag, Trash2, ArrowLeft } from 'lucide-react';

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useShop();

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Your Wishlist</h1>
            <p className="text-xs text-slate-500">Saved craft supplies & gift items for later.</p>
          </div>
          <span className="text-xs font-bold bg-royal-100 text-royal-700 px-3 py-1 rounded-full">
            {wishlist.length} Saved Items
          </span>
        </div>

        {wishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex flex-col justify-between space-y-4 relative group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-50">
                  <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-2 right-2 p-2 rounded-full bg-white/90 text-accent-red hover:bg-accent-red hover:text-white shadow-md transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-royal-600 uppercase tracking-wider block">
                    {product.category}
                  </span>
                  <h3 className="text-xs font-bold text-slate-900 line-clamp-2">
                    <Link href={`/product/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <span className="text-sm font-black text-royal-800 block pt-1">
                    Rs. {product.price.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    addToCart(product);
                    toggleWishlist(product);
                  }}
                  className="w-full bg-royal-600 hover:bg-royal-700 text-white font-extrabold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Move to Cart</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-xl font-black text-slate-900">Your Wishlist is Empty</h2>
            <p className="text-xs text-slate-500">
              Save your favorite resin moulds, beads, and craft supplies by clicking the heart icon while shopping.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-royal-600 text-white font-bold text-xs px-8 py-3.5 rounded-2xl hover:bg-royal-700 transition-colors shadow-md"
            >
              Explore Shop
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
