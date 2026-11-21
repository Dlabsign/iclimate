'use client';

import React from 'react';
import Link from 'next/link';
import { petitions, grassrootsCommunities } from '@/data/mockData';
import { Flame, Shield, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function MovementsPage() {
  return (
    <main className="w-full pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-alert">
            Gerakan Sipil & Aksi Nyata
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-ink mt-2 mb-4">
            Suarakan & Tuntut Perubahan
          </h1>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Dari penandatanganan petisi perlindungan kawasan konservasi hingga pelaporan langsung
            kejahatan lingkungan di daerahmu.
          </p>
        </div>

        {/* Active Petitions Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold tracking-tight text-ink flex items-center gap-2">
              <Flame className="w-5 h-5 text-alert" />
              Petisi Darurat Terbuka
            </h2>
            <span className="text-xs text-muted">
              {petitions.length} Petisi Membutuhkan Tandatangan
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {petitions.map((petisi) => {
              const percentage = Math.min(
                Math.round((petisi.currentSignatures / petisi.targetSignatures) * 100),
                100
              );

              return (
                <div
                  key={petisi.id}
                  className="rounded-[20px] bg-white border border-black/5 p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-muted mb-3">
                      <span className="font-semibold text-alert">{petisi.urgencyLevel} Urgency</span>
                      <span>Sisa {petisi.daysLeft} Hari</span>
                    </div>

                    <h3 className="text-lg font-bold text-ink tracking-tight mb-2 leading-snug">
                      {petisi.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-6">
                      {petisi.description}
                    </p>
                  </div>

                  <div>
                    {/* Progress Bar (Apple HIG capsule) */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                        <span className="text-ink">
                          {petisi.currentSignatures.toLocaleString('id-ID')} Tanda Tangan
                        </span>
                        <span className="text-muted">
                          Target {petisi.targetSignatures.toLocaleString('id-ID')}
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-black/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-alert transition-all duration-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                      <span className="text-[11px] text-muted">Target: {petisi.targetEntity}</span>
                      <button className="bg-ink hover:bg-black text-white text-xs font-semibold rounded-full px-4 py-2 transition-colors">
                        Tandatangani Petisi
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Suarakan Kondisi Alam di Daerahmu (Public Report Form Container - Squircle 28px) */}
        <section id="suarakan" className="mb-16">
          <div className="rounded-[28px] bg-obsidian text-white p-8 sm:p-12 border border-white/10 shadow-2xl">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-alert flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                Kanal Pelaporan Publik Terenkripsi
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-2 mb-3">
                Suarakan Kondisi Alam di Daerahmu
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1A6] leading-relaxed">
                Kirimkan bukti visual (foto/video/koordinat) kerusakan hutan, pencemaran air, atau
                perburuan liar. Redaksi ICLIMATE memverifikasi setiap laporan dengan data satelit
                sebelum dipublikasikan.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-[#A1A1A6] mb-2">
                  Kategori Kerusakan Lingkungan *
                </label>
                <select className="w-full rounded-[12px] bg-surface border border-white/10 text-white text-xs px-4 py-3 focus:outline-none focus:border-alert">
                  <option>Pembalakan Liar (Illegal Logging)</option>
                  <option>Kebakaran Gambut & Hutan (Karhutla)</option>
                  <option>Perburuan & Jerat Satwa Terancam</option>
                  <option>Pencemaran Limbah Pesisir / Tambang</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A1A1A6] mb-2">
                  Nama Lokasi & Kabupaten / Titik GPS *
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Muara Cigenter, Kab. Pandeglang (-6.754, 105.342)"
                  className="w-full rounded-[12px] bg-surface border border-white/10 text-white text-xs px-4 py-3 placeholder:text-muted focus:outline-none focus:border-alert"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-[#A1A1A6] mb-2">
                  Deskripsi Kejadian / Kronologi *
                </label>
                <textarea
                  rows={4}
                  placeholder="Jelaskan apa yang Anda lihat, perkiraan waktu kejadian, dan pihak-pihak terkait..."
                  className="w-full rounded-[12px] bg-surface border border-white/10 text-white text-xs px-4 py-3 placeholder:text-muted focus:outline-none focus:border-alert"
                />
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-[#A1A1A6]">
                  <input type="checkbox" defaultChecked className="rounded border-white/20 text-alert focus:ring-0" />
                  <span>Kirim secara anonim (Sembunyikan identitas saya dari publik)</span>
                </label>

                <button
                  type="button"
                  className="w-full sm:w-auto bg-alert hover:bg-alert-ink text-white font-semibold text-xs rounded-full px-6 py-3 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Laporan Lapangan</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Grassroots Community Directory */}
        <section>
          <div className="mb-6">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Direktori Komunitas Akar Rumput
            </h2>
            <p className="text-xs text-muted">
              Terhubung langsung dengan simpul relawan dan pemuda penjaga ekosistem di daerah.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {grassrootsCommunities.map((comm) => (
              <div
                key={comm.id}
                className="p-5 rounded-[16px] bg-white border border-black/5 flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-ink">{comm.name}</h4>
                    {comm.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    )}
                  </div>
                  <p className="text-xs text-muted mb-2">{comm.focus}</p>
                  <span className="text-[11px] font-mono text-ink/70 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-alert" />
                    {comm.location}
                  </span>
                </div>
                <a
                  href={comm.contactUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-alert hover:underline shrink-0"
                >
                  Kontak →
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
