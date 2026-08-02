'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { ProductCard } from '@/components/common/ProductCard';
import { useShop } from '@/context/ShopContext';
import {
  Star,
  ShoppingBag,
  Heart,
  MessageCircle,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  Plus,
  Minus,
} from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product, relatedProducts }) => {
  const router = useRouter();
  const { addToCart, toggleWishlist, isInWishlist } = useShop();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'delivery' | 'reviews'>('description');
  const [isZoomed, setIsZoomed] = useState(false);

  const isWishlisted = isInWishlist(product.id);

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleOptionSelect = (name: string, val: string) => {
    setSelectedOptions((prev) => ({ ...prev, [name]: val }));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedOptions);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedOptions);
    router.push('/checkout');
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello Pettagama.lk, I would like to order: ${product.name} (SKU: ${product.sku}) - Price: Rs. ${product.price.toLocaleString()} x ${quantity}`
    );
    window.open(`https://wa.me/94775142572?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-sky-700">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-sky-700">Shop</Link>
          <span>/</span>
          <Link href={`/category/${product.categorySlug}`} className="hover:text-sky-700">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
        </div>

        {/* Top Product Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Image Gallery & Zoom */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image Container */}
            <div
              className="relative aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 cursor-zoom-in"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                fill
                className={`object-cover transition-transform duration-300 ${
                  isZoomed ? 'scale-125' : 'scale-100'
                }`}
                priority
              />

              {discountPercent > 0 && (
                <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  -{discountPercent}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? 'border-sky-600 scale-95' : 'border-slate-200'
                    }`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Meta & Purchase Panel */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">SKU: {product.sku}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-3">
                {product.name}
              </h1>

              {/* Ratings */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'fill-amber-400' : 'text-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-slate-800">{product.rating}</span>
                <span className="text-xs text-slate-400">({product.reviewCount} Reviews)</span>
                <span className="text-slate-300">|</span>
                <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5" />
                  <span>In Stock ({product.stock} units)</span>
                </span>
              </div>

              {/* Price Box */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-baseline space-x-3 mb-6">
                <span className="text-3xl font-black text-sky-800">
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span className="text-base text-slate-400 line-through">
                    Rs. {product.oldPrice.toLocaleString()}
                  </span>
                )}
                <span className="text-xs text-slate-500 ml-auto">Inclusive of all taxes</span>
              </div>

              {/* Option Selectors */}
              {product.options && product.options.map((opt) => (
                <div key={opt.name} className="mb-6">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {opt.name}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {opt.values.map((val) => {
                      const isSelected = selectedOptions[opt.name] === val || (!selectedOptions[opt.name] && opt.values[0] === val);
                      return (
                        <button
                          key={val}
                          onClick={() => handleOptionSelect(opt.name, val)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                            isSelected
                              ? 'border-sky-600 bg-sky-600 text-white shadow-sm'
                              : 'border-slate-200 text-slate-700 hover:border-slate-300'
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
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Quantity
                </span>
                <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2.5 text-slate-600 hover:bg-slate-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 py-1 text-sm font-black text-slate-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2.5 text-slate-600 hover:bg-slate-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#29ABE2] hover:bg-[#0277BD] text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center space-x-2 text-xs uppercase tracking-wider transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center space-x-2 text-xs uppercase tracking-wider transition-all"
                >
                  <span>Buy Now</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-2xl border transition-colors flex items-center justify-center ${
                    isWishlisted
                      ? 'border-rose-500 bg-rose-500 text-white'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className="w-5 h-5 fill-current" />
                </button>
              </div>

              {/* Direct WhatsApp Order Button */}
              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-md flex items-center justify-center space-x-2 text-xs uppercase tracking-wider transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Directly on WhatsApp (+94 77 514 2572)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Tabs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex border-b border-slate-200 overflow-x-auto space-x-8">
            {(['description', 'specs', 'delivery', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 text-xs font-extrabold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-sky-600 text-sky-700'
                    : 'border-transparent text-slate-400 hover:text-slate-700'
                }`}
              >
                {tab === 'description'
                  ? 'Product Description'
                  : tab === 'specs'
                  ? 'Specifications'
                  : tab === 'delivery'
                  ? 'Delivery & Returns'
                  : `Customer Reviews (${product.reviewCount})`}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-700 leading-relaxed pt-2">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p>{product.longDescription || product.description}</p>
                {product.features && (
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {product.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'specs' && (
              <div className="max-w-md">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {product.specifications &&
                      Object.entries(product.specifications).map(([key, val]) => (
                        <tr key={key} className="border-b border-slate-100">
                          <td className="py-2.5 font-bold text-slate-900 w-1/3">{key}</td>
                          <td className="py-2.5 text-slate-600">{val}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2">
                  <Truck className="w-6 h-6 text-sky-600" />
                  <h4 className="font-bold text-slate-900">Islandwide Courier</h4>
                  <p className="text-slate-500">Delivered within 2-4 working days across Sri Lanka via Prompt / DOMEX courier.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  <h4 className="font-bold text-slate-900">Store Pickup Available</h4>
                  <p className="text-slate-500">Free pickup at Pettagama.lk retail outlet: 241 Galle Road, Kalutara.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2">
                  <RotateCcw className="w-6 h-6 text-amber-600" />
                  <h4 className="font-bold text-slate-900">Easy Returns</h4>
                  <p className="text-slate-500">7-day exchange guarantee on damaged or defective craft items.</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-sm">
                  <span className="text-4xl font-black text-sky-800">{product.rating}</span>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500">Based on {product.reviewCount} verified reviews</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">Kavindi Wickramasinghe</span>
                      <span className="text-[11px] text-slate-400">2 days ago</span>
                    </div>
                    <p className="text-slate-600">Great quality product! Super fast delivery to Galle. Will definitely buy again from Pettagama.lk.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-900">Related Craft Supplies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

        {/* Fixed Mobile Purchase Bar */}
        <div className="fixed bottom-[60px] left-0 right-0 z-30 bg-white/95 backdrop-blur-md p-3 border-t border-slate-200 shadow-2xl flex items-center gap-2 lg:hidden">
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-slate-400 uppercase font-bold truncate">{product.name}</div>
            <div className="text-sm font-black text-sky-700">Rs. {product.price.toLocaleString()}</div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md flex items-center space-x-1 shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>
          <button
            onClick={handleWhatsAppOrder}
            className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl shadow-md flex items-center justify-center shrink-0"
            aria-label="Order via WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
