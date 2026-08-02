'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useShop } from '@/context/ShopContext';
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight, Tag, ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart, clearCart, cartSubtotal, showToast } = useShop();

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'PETTAGAMA10') {
      setDiscountPercent(10);
      showToast('Promo code "PETTAGAMA10" applied! 10% discount subtracted.');
    } else {
      showToast('Invalid coupon code. Try PETTAGAMA10');
    }
  };

  const discountAmount = Math.round((cartSubtotal * discountPercent) / 100);
  const shippingFee = cartSubtotal >= 5000 || cartSubtotal === 0 ? 0 : 350;
  const finalTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Your Shopping Cart</h1>
            <p className="text-xs text-slate-500">Review items before proceeding to demo checkout.</p>
          </div>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs font-bold text-accent-red hover:text-red-700 flex items-center space-x-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Cart Items Table */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.product.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
                    
                    {/* Thumbnail */}
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-slate-50 shrink-0 border border-slate-200">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                    </div>

                    {/* Meta */}
                    <div className="flex-1 text-center sm:text-left space-y-1 min-w-0">
                      <span className="text-[10px] font-bold text-royal-600 uppercase tracking-wider">
                        {item.product.category}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 truncate">
                        <Link href={`/product/${item.product.slug}`} className="hover:text-royal-700">
                          {item.product.name}
                        </Link>
                      </h3>
                      {item.selectedOptions && (
                        <div className="text-[11px] text-slate-500">
                          {Object.entries(item.selectedOptions).map(([k, v]) => `${k}: ${v}`).join(' | ')}
                        </div>
                      )}
                      <span className="text-xs font-black text-royal-800 sm:hidden block">
                        Rs. {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          className="p-1.5 text-slate-600 hover:bg-slate-200"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-slate-800">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          className="p-1.5 text-slate-600 hover:bg-slate-200"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total */}
                      <span className="text-sm font-black text-royal-800 hidden sm:block w-24 text-right">
                        Rs. {(item.product.price * item.quantity).toLocaleString()}
                      </span>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-slate-400 hover:text-accent-red transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center space-x-2 text-xs font-bold text-royal-700 hover:text-royal-800"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>

            {/* Right: Order Summary & Coupon Box */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Coupon Box */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center space-x-2">
                  <Tag className="w-4 h-4 text-amber-500" />
                  <span>Have a Promo Coupon?</span>
                </h4>
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code (PETTAGAMA10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-xl text-xs font-mono uppercase focus:outline-none focus:ring-2 focus:ring-royal-500"
                  />
                  <button
                    type="submit"
                    className="bg-royal-700 hover:bg-royal-800 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors shrink-0"
                  >
                    Apply
                  </button>
                </form>
                {discountPercent > 0 && (
                  <div className="text-[11px] font-bold text-emerald-600 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>10% Discount Coupon Applied!</span>
                  </div>
                )}
              </div>

              {/* Summary Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
                  Order Summary
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal ({cart.length} items)</span>
                    <span className="font-bold text-slate-900">Rs. {cartSubtotal.toLocaleString()}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-accent-red font-bold">
                      <span>Promo Discount ({discountPercent}%)</span>
                      <span>- Rs. {discountAmount.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-600">
                    <span>Courier Shipping Fee</span>
                    <span className="font-bold text-slate-900">
                      {shippingFee === 0 ? (
                        <span className="text-emerald-600 font-extrabold uppercase">FREE (Over Rs. 5,000)</span>
                      ) : (
                        `Rs. ${shippingFee}`
                      )}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="text-sm font-black text-slate-900">Total Amount</span>
                  <span className="text-2xl font-black text-royal-800">
                    Rs. {finalTotal.toLocaleString()}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-accent-red hover:bg-accent-red-hover text-white font-extrabold py-4 px-6 rounded-2xl shadow-xl flex items-center justify-center space-x-2 text-xs uppercase tracking-wider transition-all block text-center"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-royal-50 text-royal-600 rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-black text-slate-900">Your Cart is Currently Empty</h2>
            <p className="text-xs text-slate-500">
              Explore our resin moulds, beads, pipe cleaners, and gift collections to start crafting.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-royal-600 text-white font-bold text-xs px-8 py-3.5 rounded-2xl hover:bg-royal-700 transition-colors shadow-md"
            >
              Start Shopping Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
