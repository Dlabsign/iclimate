'use client';

import React, { useState } from 'react';
import { voiceReports as initialReports } from '@/data/mockData';
import { VoiceReport } from '@/types';
import {
  Inbox,
  Shield,
  MapPin,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ExternalLink,
  Lock,
  Eye,
} from 'lucide-react';

export default function AdminReportsPage() {
  const [reports, setReports] = useState(initialReports);
  const [selectedReport, setSelectedReport] = useState<VoiceReport>(reports[0]);

  const handleStatusChange = (id: string, newStatus: VoiceReport['status']) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    if (selectedReport.id === id) {
      setSelectedReport((prev) => ({ ...prev, status: newStatus }));
    }
  };

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono text-alert uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5" />
            Kotak Masuk Bukti Kejahatan Lingkungan
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Inbox Laporan Warga & Whistleblower
          </h1>
          <p className="text-xs text-[#A1A1A6] mt-1">
            Verifikasi integritas visual, koordinat satelit, dan validasi kontak lapangan sebelum rilis.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold">
            {reports.filter((r) => r.status === 'Pending').length} Menunggu Tindakan
          </span>
        </div>
      </div>

      {/* Split-Pane Layout (Master Left Pane, Detail Right Pane) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
        {/* Master Left Pane (5 cols) */}
        <div className="lg:col-span-5 rounded-[20px] bg-surface border border-white/10 p-4 overflow-y-auto max-h-[750px] space-y-2.5">
          {reports.map((rep) => {
            const isSelected = selectedReport.id === rep.id;

            return (
              <div
                key={rep.id}
                onClick={() => setSelectedReport(rep)}
                className={`p-4 rounded-[14px] border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-obsidian border-alert shadow-md'
                    : 'bg-obsidian/40 border-white/5 hover:bg-obsidian hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono text-[#A1A1A6]">
                    {rep.ticketNumber}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      rep.status === 'Verified'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : rep.status === 'Investigating'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-amber-500/20 text-amber-400'
                    }`}
                  >
                    {rep.status}
                  </span>
                </div>

                <h4 className="text-xs font-bold text-white mb-1 leading-snug line-clamp-2">
                  {rep.title}
                </h4>

                <div className="flex items-center justify-between text-[10px] text-[#A1A1A6] mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-alert" />
                    {rep.locationName.split(',')[0]}
                  </span>
                  {rep.isAnonymous ? (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Lock className="w-3 h-3" /> Anonim
                    </span>
                  ) : (
                    <span>{rep.reporterName?.split(' ')[0]}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Right Pane: Inspector View (7 cols) */}
        <div className="lg:col-span-7 rounded-[20px] bg-surface border border-white/10 p-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Top Detail Meta */}
            <div className="pb-4 border-b border-white/10 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/10 text-white font-semibold">
                    {selectedReport.ticketNumber}
                  </span>
                  <span className="text-xs text-alert font-bold uppercase">
                    {selectedReport.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug">
                  {selectedReport.title}
                </h3>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[11px] text-[#A1A1A6] block">Pelapor:</span>
                {selectedReport.isAnonymous ? (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400">
                    <Shield className="w-3.5 h-3.5" /> Identitas Terlindungi
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-white">
                    {selectedReport.reporterName}
                  </span>
                )}
              </div>
            </div>

            {/* Description & Location */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A1A1A6] font-semibold block mb-1">
                Kronologi Kejadian
              </span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed bg-obsidian p-4 rounded-[12px] border border-white/5">
                {selectedReport.description}
              </p>
            </div>

            {/* Geospatial GPS */}
            <div className="p-3.5 rounded-[12px] bg-obsidian border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-alert" />
                <span>{selectedReport.locationName}</span>
              </div>
              <span className="font-mono text-[#A1A1A6] text-[11px]">
                Lat: {selectedReport.coordinates.lat}, Lng: {selectedReport.coordinates.lng}
              </span>
            </div>

            {/* Visual Evidence Inspector */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#A1A1A6] font-semibold block mb-2">
                Bukti Visual Lapangan
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedReport.evidenceFiles.map((ev) => (
                  <div
                    key={ev.id}
                    className="rounded-[14px] overflow-hidden bg-obsidian border border-white/5 group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={ev.url}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <p className="p-2.5 text-[11px] text-[#A1A1A6] leading-snug">
                      {ev.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Step Credibility Checklist */}
            <div className="p-4 rounded-[14px] bg-white/5 border border-white/5 space-y-2">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-1">
                Standar Verifikasi 3-Langkah
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Kesesuaian Satelit</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Integritas Citra</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Kontak Lapangan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-white/10 mt-6 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-[#A1A1A6]">
              Status Saat Ini: <strong className="text-white">{selectedReport.status}</strong>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleStatusChange(selectedReport.id, 'Rejected')}
                className="px-4 py-2 rounded-full bg-rose-950/40 text-rose-300 hover:bg-rose-900/60 text-xs font-semibold transition-colors"
              >
                Tolak Laporan
              </button>
              <button
                onClick={() => handleStatusChange(selectedReport.id, 'Investigating')}
                className="px-4 py-2 rounded-full bg-blue-950/40 text-blue-300 hover:bg-blue-900/60 text-xs font-semibold transition-colors"
              >
                Investigasi Lanjut
              </button>
              <button
                onClick={() => handleStatusChange(selectedReport.id, 'Verified')}
                className="px-4 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                Validasi & Terbitkan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
