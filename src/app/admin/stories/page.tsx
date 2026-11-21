'use client';

import React, { useState } from 'react';
import { stories as initialStories } from '@/data/mockData';
import { Plus, Eye, Edit3, Trash2, CheckCircle2, Sparkles } from 'lucide-react';

export default function AdminStoriesPage() {
  const [storiesList, setStoriesList] = useState(initialStories);

  const toggleSpotlight = (id: string) => {
    setStoriesList((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isSpotlight: !s.isSpotlight } : s))
    );
  };

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono text-alert uppercase tracking-wider">
            Manajemen Editorial
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Liputan & Cerita Viral
          </h1>
          <p className="text-xs text-[#A1A1A6] mt-1">
            Kelola artikel investigasi, scrollytelling reader, dan kendali tayang di beranda.
          </p>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-alert hover:bg-alert-ink text-white text-xs font-semibold tracking-tight transition-all shadow-sm flex items-center gap-2 self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span>Tulis Liputan Investigasi Baru</span>
        </button>
      </div>

      {/* Stories Table (Apple HIG card 20px) */}
      <div className="rounded-[20px] bg-surface border border-white/10 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-[11px] uppercase tracking-wider text-[#A1A1A6]">
                <th className="py-3.5 px-5">Artikel & Headline</th>
                <th className="py-3.5 px-4">Pilar / Kategori</th>
                <th className="py-3.5 px-4">Penulis</th>
                <th className="py-3.5 px-4">Pembaca</th>
                <th className="py-3.5 px-4">Sorot di Home</th>
                <th className="py-3.5 px-5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs text-white">
              {storiesList.map((story) => (
                <tr key={story.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-5 max-w-sm">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={story.coverImage}
                        alt=""
                        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/10"
                      />
                      <div>
                        <span className="font-semibold text-white block line-clamp-1">
                          {story.title}
                        </span>
                        <span className="text-[10px] text-[#A1A1A6]">{story.readTime}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/10 text-white border border-white/10">
                      {story.category}
                    </span>
                  </td>

                  <td className="py-4 px-4 whitespace-nowrap text-[#A1A1A6]">
                    {story.author.name}
                  </td>

                  <td className="py-4 px-4 whitespace-nowrap">
                    <span className="flex items-center gap-1.5 font-mono text-[#A1A1A6]">
                      <Eye className="w-3.5 h-3.5" />
                      {story.views.toLocaleString('id-ID')}
                    </span>
                  </td>

                  <td className="py-4 px-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleSpotlight(story.id)}
                      className={`px-3 py-1 rounded-full text-[10px] font-semibold transition-colors flex items-center gap-1.5 ${
                        story.isSpotlight
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-white/10 text-[#A1A1A6] hover:text-white'
                      }`}
                    >
                      {story.isSpotlight ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Aktif Sorot</span>
                        </>
                      ) : (
                        <span>Nonaktif</span>
                      )}
                    </button>
                  </td>

                  <td className="py-4 px-5 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A1A1A6] hover:text-white transition-colors">
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-950/40 text-[#A1A1A6] hover:text-rose-400 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
