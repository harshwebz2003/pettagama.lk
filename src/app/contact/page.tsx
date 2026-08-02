'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function ContactPage() {
  const { showToast } = useShop();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setIsSubmitted(true);
      showToast('Thank you! Your message has been sent to Pettagama.lk team.');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center space-y-2">
          <span className="text-xs font-bold text-royal-600 uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Contact Pettagama.lk</h1>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            We are here to assist with craft orders, resin inquiries, or store visits in Kalutara.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-black text-slate-900 border-b pb-3">Send Us a Message</h3>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900">Message Received!</h4>
                <p className="text-xs text-slate-600">
                  Our Kalutara support team will respond to your email or WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Kasun Silva"
                      className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+94 77..."
                      className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Inquiry about resin moulds, bulk order..."
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your question or craft item requirement..."
                    className="w-full px-3.5 py-2.5 border rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-royal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-royal-700 hover:bg-royal-800 text-white font-extrabold py-3.5 px-8 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-md"
                >
                  <span>Submit Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Card & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-slate-900 border-b pb-3">Store Contact Info</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-royal-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Physical Store Location:</strong>
                    <span>241 Galle Road, Kalutara, Sri Lanka</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <Phone className="w-5 h-5 text-royal-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Phone Number:</strong>
                    <span>+94 76 330 2572</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">WhatsApp Direct:</strong>
                    <span>+94 77 514 2572</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <Mail className="w-5 h-5 text-royal-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Email Address:</strong>
                    <span>onlinepettagama@gmail.com</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Opening Hours:</strong>
                    <span>8:30 AM – 7:30 PM (Daily)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="h-[260px] rounded-3xl overflow-hidden shadow-md border-2 border-slate-200 relative">
              <iframe
                title="Pettagama.lk Kalutara Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5295120031374!2d79.9615262!3d6.5808944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae237fb4d31e1d5%3A0xb85760ef2bca0bbc!2sPettagama.lk!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
              <a
                href="https://maps.app.goo.gl/mPckimUh8G6KcZ299"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-royal-800 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 shadow-md hover:bg-royal-50 transition-colors"
              >
                📍 Open Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
