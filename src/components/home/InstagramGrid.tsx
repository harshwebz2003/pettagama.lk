'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Heart } from 'lucide-react';

const igPosts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80', likes: 142 },
  { id: 2, img: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=600&q=80', likes: 218 },
  { id: 3, img: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80', likes: 98 },
  { id: 4, img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80', likes: 310 },
  { id: 5, img: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=600&q=80', likes: 175 },
  { id: 6, img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80', likes: 264 },
];

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-pink-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Instagram className="w-4 h-4" />
              <span>@pettagama.lk</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Follow Us on Instagram
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center space-x-1.5"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow #PettagamaCrafts</span>
          </a>
        </div>

        {/* 6 Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {igPosts.map((post) => (
            <div key={post.id} className="relative aspect-square rounded-2xl overflow-hidden group">
              <Image
                src={post.img}
                alt="Pettagama Craft Showcase"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white space-x-1.5 text-xs font-bold">
                <Heart className="w-4 h-4 fill-current text-pink-500" />
                <span>{post.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
