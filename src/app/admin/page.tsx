import React from 'react';
import Link from 'next/link';
import { stories, petitions, voiceReports } from '@/data/mockData';
import {
  FileText,
  Flame,
  Inbox,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Eye,
  Sliders,
} from 'lucide-react';

export default function AdminOverviewPage() {
  const pendingReports = voiceReports.filter((r) => r.status === 'Pending' || r.status === 'Investigating');
  const totalSignatures = petitions.reduce((acc, p) => acc + p.currentSignatures, 0);

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Sistem Aktif & Terhubung Supabase Mock
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Ringkasan Ruang Kendali
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/stories"
            className="px-4 py-2 rounded-full bg-alert hover:bg-alert-ink text-white text-xs font-semibold tracking-tight transition-all shadow-sm"
          >
            + Tulis Liputan Baru
          </Link>
        </div>
      </div>

      {/* 4 KPI Summary Cards (Apple squircle 20px) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-6 rounded-[20px] bg-surface border border-white/10 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-[#A1A1A6] font-medium">Total Tanda Tangan</span>
            <div className="w-8 h-8 rounded-xl bg-alert/20 text-alert flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {totalSignatures.toLocaleString('id-ID')}
            </span>
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12.4% minggu ini
            </p>
          </div>
        </div>

        <div className="p-6 rounded-[20px] bg-surface border border-white/10 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-[#A1A1A6] font-medium">Liputan Investigasi</span>
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {stories.length} Terbit
            </span>
            <p className="text-[11px] text-[#A1A1A6] mt-1">
              {stories.reduce((acc, s) => acc + s.views, 0).toLocaleString('id-ID')} total dibaca
            </p>
          </div>
        </div>

        <div className="p-6 rounded-[20px] bg-surface border border-white/10 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-[#A1A1A6] font-medium">Laporan Lapangan Baru</span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              {pendingReports.length} Perlu Review
            </span>
            <p className="text-[11px] text-amber-400 mt-1 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" /> Menunggu verifikasi GPS
            </p>
          </div>
        </div>

        <div className="p-6 rounded-[20px] bg-surface border border-white/10 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-[#A1A1A6] font-medium">Respon Advokasi Kebijakan</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-extrabold text-white tracking-tight">
              84.6%
            </span>
            <p className="text-[11px] text-emerald-400 mt-1">Ditindaklanjuti KLHK/DLH</p>
          </div>
        </div>
      </div>

      {/* Grid: Pending Reports Queue & Homepage Spotlight Toggles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Pending Reports Queue (7 cols) */}
        <div className="lg:col-span-7 rounded-[20px] bg-surface border border-white/10 p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-base font-bold text-white">Antrean Laporan Masuk Terkini</h2>
              <p className="text-xs text-[#A1A1A6]">Perlu verifikasi silang koordinat satelit</p>
            </div>
            <Link
              href="/admin/reports"
              className="text-xs font-semibold text-alert hover:underline flex items-center gap-1"
            >
              Buka Semua Laporan →
            </Link>
          </div>

          <div className="space-y-3">
            {voiceReports.slice(0, 3).map((rep) => (
              <div
                key={rep.id}
                className="p-4 rounded-[14px] bg-obsidian border border-white/5 flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white">
                      {rep.ticketNumber}
                    </span>
                    <span className="text-[10px] text-amber-400 font-semibold">{rep.category}</span>
                  </div>
                  <h4 className="text-xs font-semibold text-white leading-snug mb-1">
                    {rep.title}
                  </h4>
                  <p className="text-[11px] text-[#A1A1A6]">{rep.locationName}</p>
                </div>
                <Link
                  href="/admin/reports"
                  className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white text-ink text-[11px] font-medium transition-colors shrink-0"
                >
                  Periksa Bukti
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Homepage Spotlight Controls (5 cols) */}
        <div className="lg:col-span-5 rounded-[20px] bg-surface border border-white/10 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-white">Sorotan Homepage (Live)</h2>
                <p className="text-xs text-[#A1A1A6]">Status penayangan hero carousel</p>
              </div>
              <Sliders className="w-4 h-4 text-[#A1A1A6]" />
            </div>

            <div className="space-y-3">
              {stories.slice(0, 3).map((st) => (
                <div
                  key={st.id}
                  className="p-3 rounded-[12px] bg-obsidian border border-white/5 flex items-center justify-between gap-3"
                >
                  <div className="overflow-hidden">
                    <span className="text-xs font-medium text-white block truncate">
                      {st.title}
                    </span>
                    <span className="text-[10px] text-[#A1A1A6]">{st.categoryLabel}</span>
                  </div>
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold shrink-0 ${
                      st.isSpotlight
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-white/10 text-[#A1A1A6]'
                    }`}
                  >
                    {st.isSpotlight ? 'Sorotan Aktif' : 'Standar'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 mt-4 text-xs text-[#A1A1A6] flex items-center justify-between">
            <span>Ubah di Manajemen Cerita</span>
            <Link href="/admin/stories" className="text-alert font-semibold hover:underline">
              Kelola Sorotan →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
