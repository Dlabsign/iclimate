'use client';

import React, { useState } from 'react';
import { petitions as initialPetitions, grassrootsCommunities } from '@/data/mockData';
import { Flame, Plus, CheckCircle2, Sliders, ExternalLink } from 'lucide-react';

export default function AdminMovementsPage() {
  const [petitionsList, setPetitionsList] = useState(initialPetitions);

  const toggleHome = (id: string) => {
    setPetitionsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isFeaturedHome: !p.isFeaturedHome } : p))
    );
  };

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono text-alert uppercase tracking-wider">
            Aksi Sipil & Komunitas
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Petisi & Jaringan Akar Rumput
          </h1>
          <p className="text-xs text-[#A1A1A6] mt-1">
            Monitor capaian petisi terbuka dan kelola direktori kelompok relawan lokal.
          </p>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-alert hover:bg-alert-ink text-white text-xs font-semibold tracking-tight transition-all shadow-sm flex items-center gap-2 self-start sm:self-auto">
          <Plus className="w-4 h-4" />
          <span>Buat Petisi Resmi Baru</span>
        </button>
      </div>

      {/* Petitions Roster */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#A1A1A6]">
          Daftar Petisi Berjalan ({petitionsList.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {petitionsList.map((petisi) => {
            const pct = Math.round((petisi.currentSignatures / petisi.targetSignatures) * 100);

            return (
              <div
                key={petisi.id}
                className="rounded-[20px] bg-surface border border-white/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#A1A1A6] mb-3">
                    <span className="text-alert font-semibold">{petisi.urgencyLevel} Urgency</span>
                    <button
                      onClick={() => toggleHome(petisi.id)}
                      className={`px-3 py-1 rounded-full text-[10px] font-semibold transition-colors ${
                        petisi.isFeaturedHome
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-white/10 text-[#A1A1A6]'
                      }`}
                    >
                      {petisi.isFeaturedHome ? 'Tayang di Home' : 'Hanya di Movements'}
                    </button>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {petisi.title}
                  </h3>
                  <p className="text-xs text-[#A1A1A6] mb-4 line-clamp-2">
                    {petisi.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5 text-white">
                    <span>{petisi.currentSignatures.toLocaleString('id-ID')} Tanda Tangan</span>
                    <span className="text-[#A1A1A6]">
                      Target {petisi.targetSignatures.toLocaleString('id-ID')} ({pct}%)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-obsidian overflow-hidden mb-4">
                    <div
                      className="h-full bg-alert rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="text-[11px] text-[#A1A1A6]">
                    Sasaran: <span className="text-white font-medium">{petisi.targetEntity}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Grassroots Directory */}
      <div className="pt-6 border-t border-white/10">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#A1A1A6] mb-4">
          Direktori Komunitas Akar Rumput ({grassrootsCommunities.length})
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {grassrootsCommunities.map((comm) => (
            <div
              key={comm.id}
              className="p-5 rounded-[16px] bg-surface border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <h4 className="text-xs font-bold text-white">{comm.name}</h4>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                </div>
                <p className="text-[11px] text-[#A1A1A6] mb-2">{comm.focus}</p>
                <span className="text-[10px] font-mono text-white/70 block">
                  {comm.location}
                </span>
              </div>
              <div className="pt-3 border-t border-white/5 mt-3 flex items-center justify-between text-[11px]">
                <span className="text-[#A1A1A6]">{comm.memberCount}</span>
                <a
                  href={comm.contactUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-alert hover:underline flex items-center gap-1"
                >
                  <span>Detail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
