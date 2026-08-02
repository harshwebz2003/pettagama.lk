'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import { ProductCard } from '@/components/common/ProductCard';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const category = categories.find((c) => c.slug === slug) || {
    id: slug,
    name: slug ? slug.replace(/-/g, ' ').toUpperCase() : 'Category',
    slug: slug || '',
    description: 'Explore high-quality craft items and supplies in this collection.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    itemCount: 0,
  };

  const categoryProducts = products.filter(
    (p) => p.categorySlug === slug || p.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/shop"
          className="inline-flex items-center space-x-2 text-xs font-extrabold text-royal-700 hover:text-royal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Categories</span>
        </Link>

        {/* Category Hero Banner */}
        <div className="relative rounded-3xl bg-royal-900 text-white overflow-hidden shadow-xl p-8 sm:p-12 border border-royal-700">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-1.5 bg-royal-700/80 backdrop-blur-md px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Category Collection</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">{category.name}</h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {category.description}
            </p>
            <span className="inline-block text-xs font-bold bg-white/10 px-3 py-1 rounded-full text-white border border-white/20">
              {categoryProducts.length} Items Available
            </span>
          </div>
        </div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl text-center space-y-4 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">No products currently listed in {category.name}</h3>
            <p className="text-xs text-slate-500">Check back soon or explore our other craft categories!</p>
            <Link
              href="/shop"
              className="inline-block bg-royal-600 text-white font-bold text-xs px-6 py-3 rounded-2xl hover:bg-royal-700 transition-colors"
            >
              Shop All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
