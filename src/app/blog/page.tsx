'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogs';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center space-y-2">
          <span className="text-xs font-bold text-royal-600 uppercase tracking-wider">DIY Inspiration</span>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Craft Tutorials & Guides</h1>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Learn resin casting, pipe cleaner flower making, embroidery tips, and jewellery care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-royal-800 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-slate-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-royal-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-royal-700 hover:text-royal-800 transition-colors pt-2"
                >
                  <span>Read Tutorial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
