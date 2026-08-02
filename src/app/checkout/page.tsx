'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useShop } from '@/context/ShopContext';
import { ShieldCheck, Truck, CreditCard, Banknote, Building2, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { AcceptedPaymentMethods } from '@/components/common/AcceptedPaymentMethods';

export default function CheckoutPage() {
  const { cart, cartSubtotal, clearCart } = useShop();

  const [formData, setFormData] = useState({
    fullName: 'Dilshan Silva',
    phone: '+94 77 123 4567',
    email: 'dilshan@example.com',
    address: '15/A, Temple Road, South Kalutara',
    province: 'Western Province',
    district: 'Kalutara',
    postalCode: '12000',
    deliveryMethod: 'courier', // courier | pickup
    paymentMethod: 'cod', // cod | card | bank
    orderNotes: 'Please call before delivery.',
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [demoOrderNumber, setDemoOrderNumber] = useState('');

  const shippingFee = formData.deliveryMethod === 'pickup' ? 0 : cartSubtotal >= 5000 ? 0 : 350;
  const finalTotal = cartSubtotal + shippingFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert('Please fill in all required customer contact details.');
      return;
    }

    const orderNum = `PET-${Math.floor(10000 + Math.random() * 90000)}`;
    setDemoOrderNumber(orderNum);
    setIsSuccessModalOpen(true);
    clearCart();
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Checkout Demo</h1>
            <p className="text-xs text-slate-500">Fast & Secure Delivery across Sri Lanka.</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            🔒 Demo Checkout Mode
          </span>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Customer Info & Payment Options */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Section 1: Customer Contact Details */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                1. Customer & Delivery Address
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Street Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Province *</label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  >
                    <option value="Western Province">Western Province</option>
                    <option value="Southern Province">Southern Province</option>
                    <option value="Central Province">Central Province</option>
                    <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
                    <option value="North Western Province">North Western Province</option>
                    <option value="North Central Province">North Central Province</option>
                    <option value="Uva Province">Uva Province</option>
                    <option value="Eastern Province">Eastern Province</option>
                    <option value="Northern Province">Northern Province</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">District *</label>
                  <select
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  >
                    <option value="Kalutara">Kalutara</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Galle">Galle</option>
                    <option value="Matara">Matara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Ratnapura">Ratnapura</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Delivery Option */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                2. Select Delivery Method
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start space-x-3 ${
                    formData.deliveryMethod === 'courier'
                      ? 'border-royal-600 bg-royal-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="courier"
                    checked={formData.deliveryMethod === 'courier'}
                    onChange={handleChange}
                    className="mt-1 accent-royal-600"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block flex items-center space-x-1">
                      <Truck className="w-4 h-4 text-royal-600 mr-1" />
                      Standard Courier Delivery
                    </span>
                    <span className="text-[11px] text-slate-500 block">Prompt / DOMEX courier to your door (2-3 days).</span>
                    <span className="text-xs font-black text-royal-800 block mt-1">Rs. 350 (Free over Rs. 5,000)</span>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start space-x-3 ${
                    formData.deliveryMethod === 'pickup'
                      ? 'border-royal-600 bg-royal-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={formData.deliveryMethod === 'pickup'}
                    onChange={handleChange}
                    className="mt-1 accent-royal-600"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block flex items-center space-x-1">
                      <Building2 className="w-4 h-4 text-emerald-600 mr-1" />
                      Store Pickup (Kalutara)
                    </span>
                    <span className="text-[11px] text-slate-500 block">Collect from 241 Galle Road, Kalutara.</span>
                    <span className="text-xs font-black text-emerald-600 block mt-1">FREE</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Section 3: Payment Method */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-3">
                3. Payment Option (Demo)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <label
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    formData.paymentMethod === 'cod'
                      ? 'border-royal-600 bg-royal-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Banknote className="w-5 h-5 text-emerald-600" />
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="accent-royal-600"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Cash on Delivery</span>
                    <span className="text-[10px] text-slate-500">Pay cash upon courier arrival</span>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    formData.paymentMethod === 'card'
                      ? 'border-royal-600 bg-royal-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <CreditCard className="w-5 h-5 text-royal-600" />
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="accent-royal-600"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Card Payment</span>
                    <span className="text-[10px] text-slate-500">Visa / Mastercard (Demo)</span>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex flex-col justify-between ${
                    formData.paymentMethod === 'bank'
                      ? 'border-royal-600 bg-royal-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <Building2 className="w-5 h-5 text-amber-600" />
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleChange}
                      className="accent-royal-600"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Bank Transfer</span>
                    <span className="text-[10px] text-slate-500">BOC / Commercial Bank</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Notes */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                Order Notes / Special Delivery Instructions
              </label>
              <textarea
                name="orderNotes"
                rows={2}
                value={formData.orderNotes}
                onChange={handleChange}
                placeholder="e.g. Call before delivery, gift message details..."
                className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
              />
            </div>
          </div>

          {/* Right Column: Order Summary Box & CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 sticky top-24">
              <h3 className="text-base font-black text-slate-900 border-b border-slate-100 pb-3">
                Order Summary ({cart.length} Items)
              </h3>

              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center text-xs">
                    <div className="flex items-center space-x-2 truncate max-w-[200px]">
                      <span className="font-bold text-royal-700">{item.quantity}x</span>
                      <span className="truncate text-slate-700">{item.product.name}</span>
                    </div>
                    <span className="font-bold text-slate-900 shrink-0">
                      Rs. {(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">Rs. {cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Courier Shipping</span>
                  <span className="font-bold text-slate-900">
                    {shippingFee === 0 ? 'FREE' : `Rs. ${shippingFee}`}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
                  <span className="text-sm font-black text-slate-900">Total Payable</span>
                  <span className="text-2xl font-black text-royal-800">
                    Rs. {finalTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-red hover:bg-accent-red-hover text-white font-extrabold py-4 px-6 rounded-2xl shadow-xl flex items-center justify-center space-x-2 text-xs uppercase tracking-wider transition-all"
              >
                <span>Place Demo Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Accepted Payment Methods & Trust Section */}
              <AcceptedPaymentMethods variant="checkout" />

              <div className="text-[11px] text-slate-400 text-center leading-tight pt-2">
                By clicking "Place Demo Order", you confirm this is a presentation simulation.
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Demo Order Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full z-10 text-center space-y-4 border border-slate-200 animate-in zoom-in-95">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-slate-900">Demo Order Confirmed!</h3>

            <div className="bg-royal-50 p-3 rounded-2xl border border-royal-200 text-royal-900 font-mono font-bold text-sm">
              Order ID: #{demoOrderNumber}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Thank you {formData.fullName}! Your demo order has been placed.
            </p>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] font-medium text-amber-800">
              ⚠️ <strong>Presentation Note:</strong> This is a website demonstration template for Pettagama.lk. No actual order or payment was processed.
            </div>

            <div className="pt-2">
              <Link
                href={`/track-order?id=${demoOrderNumber}`}
                className="w-full bg-royal-700 hover:bg-royal-800 text-white font-bold py-3 px-6 rounded-2xl text-xs block"
              >
                Track Order Progress →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
