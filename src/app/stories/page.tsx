'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { stories } from '@/data/mockData';
import { Clock, Eye, Sparkles, Tag, ArrowRight } from 'lucide-react';

export default function StoriesPage() {
  const featured = stories[0];
  const regularStories = stories.slice(1);

  const categories = [
    'Semua',
    'For the Forest',
    'For the Animal',
    'For the People',
  ];

  return (
    <main className="w-full pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-alert">
            Jurnalisme Investigasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-ink mt-2 mb-4">
            Cerita & Investigasi Lapangan
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Menelusuri kebenaran dari titik terdepan: data satelit, kesaksian masyarakat adat, dan
            riset mendalam kondisi ekologi Nusantara.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-tight whitespace-nowrap transition-all ${
                idx === 0
                  ? 'bg-ink text-white shadow-sm'
                  : 'bg-white/80 hover:bg-white text-ink border border-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Deep-Dive Story Card (Apple squircle 24px) */}
        <div className="rounded-[24px] bg-[#0D100E] text-white overflow-hidden border border-white/10 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-alert text-white text-[11px] font-bold tracking-wide">
                {featured.urgentBadge || 'LIPUTAN UTAMA'}
              </div>
            </div>
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#A1A1A6] mb-3">
                  <span className="text-accent font-semibold">{featured.categoryLabel}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.author.avatar}
                    alt={featured.author.name}
                    className="w-8 h-8 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      {featured.author.name}
                    </span>
                    <span className="text-[10px] text-[#A1A1A6]">
                      {featured.author.role}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-alert hover:underline cursor-pointer">
                  Baca Investigasi →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Curated Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regularStories.map((story) => (
            <article
              key={story.id}
              className="rounded-[20px] bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-video w-full overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={story.coverImage}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {story.urgentBadge && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-alert text-white text-[10px] font-bold">
                      {story.urgentBadge}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-muted mb-2">
                    <span className="font-semibold text-ink/80">{story.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {story.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-ink leading-snug tracking-tight mb-2 group-hover:text-alert transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-xs text-muted line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between text-xs text-muted border-t border-black/5 mt-4 pt-3">
                <span className="text-[11px]">{story.author.name}</span>
                <span className="flex items-center gap-1 text-[11px]">
                  <Eye className="w-3 h-3" /> {story.views.toLocaleString('id-ID')}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
