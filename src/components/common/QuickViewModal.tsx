'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ShoppingBag, Heart, Check, Plus, Minus, ArrowRight } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, toggleWishlist, isInWishlist } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  if (!quickViewProduct) return null;

  const isWishlisted = isInWishlist(quickViewProduct.id);

  const handleOptionSelect = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: value }));
  };

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, selectedOptions);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeQuickView}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 animate-in zoom-in-95 duration-200 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image */}
        <div className="md:w-1/2 relative bg-slate-50 min-h-[250px] md:min-h-[400px]">
          <Image
            src={quickViewProduct.images[0]}
            alt={quickViewProduct.name}
            fill
            className="object-cover"
          />
          {quickViewProduct.badge && (
            <span className="absolute top-4 left-4 bg-royal-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              {quickViewProduct.badge}
            </span>
          )}
        </div>

        {/* Right Column: Details & Actions */}
        <div className="md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold text-royal-600 uppercase tracking-wider block mb-1">
              {quickViewProduct.category}
            </span>

            <h3 className="text-xl font-extrabold text-slate-900 leading-tight mb-2">
              {quickViewProduct.name}
            </h3>

            {/* Rating & SKU */}
            <div className="flex items-center space-x-3 mb-4 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(quickViewProduct.rating) ? 'fill-amber-400' : 'text-slate-200'
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-slate-700">{quickViewProduct.rating}</span>
              <span className="text-slate-400">SKU: {quickViewProduct.sku}</span>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline space-x-2 mb-4">
              <span className="text-2xl font-black text-royal-800">
                Rs. {quickViewProduct.price.toLocaleString()}
              </span>
              {quickViewProduct.oldPrice && (
                <span className="text-sm text-slate-400 line-through">
                  Rs. {quickViewProduct.oldPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
              {quickViewProduct.description}
            </p>

            {/* Options Selectors */}
            {quickViewProduct.options && quickViewProduct.options.map((opt) => (
              <div key={opt.name} className="mb-4">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Select {opt.name}
                </label>
                <div className="flex flex-wrap gap-2">
                  {opt.values.map((val) => {
                    const isSelected = selectedOptions[opt.name] === val || (!selectedOptions[opt.name] && opt.values[0] === val);
                    return (
                      <button
                        key={val}
                        onClick={() => handleOptionSelect(opt.name, val)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          isSelected
                            ? 'border-royal-600 bg-royal-50 text-royal-700'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {val}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-6">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Quantity
              </label>
              <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-slate-600 hover:bg-slate-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-1 text-sm font-bold text-slate-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-slate-600 hover:bg-slate-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-slate-100">
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-royal-600 hover:bg-royal-700 text-white py-3 px-4 rounded-2xl font-bold text-sm shadow-md flex items-center justify-center space-x-2 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                className={`p-3 rounded-2xl border transition-colors ${
                  isWishlisted
                    ? 'border-accent-red bg-accent-red text-white'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>

            <Link
              href={`/product/${quickViewProduct.slug}`}
              onClick={closeQuickView}
              className="block text-center text-xs font-bold text-royal-700 hover:text-royal-800 transition-colors"
            >
              View Full Product Page & Reviews →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
