import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/data/blogs';
import { ArrowLeft, Clock, User, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((b) => b.slug === params.slug) || blogPosts[0];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-bold text-sky-700 hover:text-sky-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Tutorials</span>
        </Link>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-3">
            <span className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 border-b border-slate-100 pb-4">
              <span className="flex items-center space-x-1 font-semibold text-slate-700">
                <User className="w-3.5 h-3.5 text-sky-600" />
                <span>{post.author}</span>
              </span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-4 text-slate-700">
            {post.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {post.tags && (
            <div className="pt-6 border-t border-slate-100 flex items-center space-x-2">
              <Tag className="w-4 h-4 text-slate-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
