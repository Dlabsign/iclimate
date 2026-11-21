'use client';

import React, { useState } from 'react';
import { Sliders, Users, Shield, Save, CheckCircle2 } from 'lucide-react';

export default function AdminSettingsPage() {
  const [headline, setHeadline] = useState('Selamatkan Nafas Terakhir');
  const [accentWord, setAccentWord] = useState('Nusantara.');
  const [enableGraffiti, setEnableGraffiti] = useState(true);
  const [heroImage, setHeroImage] = useState(
    'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80'
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  const teamMembers = [
    {
      name: 'Rian Pratama',
      email: 'rian@iclimate.id',
      role: 'Superadmin',
      roleColor: 'bg-emerald-500/20 text-emerald-400',
      lastActive: 'Aktif sekarang',
    },
    {
      name: 'Nadia Sitompul',
      email: 'nadia@iclimate.id',
      role: 'Editor Berita',
      roleColor: 'bg-blue-500/20 text-blue-400',
      lastActive: '2 jam yang lalu',
    },
    {
      name: 'Bambang Triyono',
      email: 'bambang@iclimate.id',
      role: 'Verifikator Laporan',
      roleColor: 'bg-amber-500/20 text-amber-400',
      lastActive: 'Kemarin, 19:30',
    },
  ];

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono text-alert uppercase tracking-wider">
            Konfigurasi Sistem
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Pengaturan Homepage & Akses Tim (RBAC)
          </h1>
          <p className="text-xs text-[#A1A1A6] mt-1">
            Atur visual headline beranda publik dan otorisasi hak akses staf redaksi.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-5 py-2.5 rounded-full bg-alert hover:bg-alert-ink text-white text-xs font-semibold tracking-tight transition-all shadow-sm flex items-center gap-2 self-start sm:self-auto"
        >
          {savedSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-white" />
              <span>Perubahan Tersimpan!</span>
            </>
          ) : (
            <>
              <Save className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Visual Customizer */}
      <div className="rounded-[20px] bg-surface border border-white/10 p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-white/10">
          <Sliders className="w-4 h-4 text-alert" />
          <h2 className="text-base font-bold text-white">Kustomisasi Hero Beranda Utama</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#A1A1A6] mb-1.5">
                Headline Utama (Teks Standar)
              </label>
              <input
                type="text"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className="w-full rounded-[12px] bg-obsidian border border-white/10 text-white text-xs px-4 py-3 focus:outline-none focus:border-alert"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#A1A1A6] mb-1.5">
                Kata Aksen (Gaya Brush Street Graffiti)
              </label>
              <input
                type="text"
                value={accentWord}
                onChange={(e) => setAccentWord(e.target.value)}
                className="w-full rounded-[12px] bg-obsidian border border-white/10 text-white text-xs px-4 py-3 focus:outline-none focus:border-alert"
              />
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-[12px] bg-obsidian border border-white/5">
              <div>
                <span className="text-xs font-semibold text-white block">
                  Aktifkan Font Aksen Graffiti (Permanent Marker)
                </span>
                <span className="text-[10px] text-[#A1A1A6]">
                  Rasio 10–15% untuk memberikan aksen urgensi emosional
                </span>
              </div>
              <input
                type="checkbox"
                checked={enableGraffiti}
                onChange={(e) => setEnableGraffiti(e.target.checked)}
                className="rounded text-alert focus:ring-0 w-4 h-4"
              />
            </div>
          </div>

          {/* Live Preview Card */}
          <div className="p-6 rounded-[16px] bg-obsidian border border-white/10 flex flex-col justify-center">
            <span className="text-[10px] font-mono text-[#A1A1A6] uppercase tracking-wider mb-3 block">
              Pratinjau Tampilan Hero Langsung:
            </span>
            <div className="p-6 rounded-[16px] bg-[#141815] border border-white/10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {headline}{' '}
                <span
                  className={
                    enableGraffiti
                      ? 'font-graffiti text-alert tracking-normal'
                      : 'text-alert underline'
                  }
                >
                  {accentWord}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Team Role-Based Access Control (RBAC) */}
      <div className="rounded-[20px] bg-surface border border-white/10 p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-400" />
            <h2 className="text-base font-bold text-white">
              Otorisasi Akses Tim & Peran (RBAC)
            </h2>
          </div>
          <button className="text-xs font-semibold text-alert hover:underline">
            + Tambah Anggota Baru
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs text-white">
            <thead>
              <tr className="border-b border-white/10 text-[11px] uppercase tracking-wider text-[#A1A1A6]">
                <th className="py-3 px-4">Nama Anggota</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Peran (Role)</th>
                <th className="py-3 px-4">Aktivitas Terakhir</th>
                <th className="py-3 px-4 text-right">Opsi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {teamMembers.map((member) => (
                <tr key={member.email} className="hover:bg-white/[0.02]">
                  <td className="py-3.5 px-4 font-semibold">{member.name}</td>
                  <td className="py-3.5 px-4 text-[#A1A1A6] font-mono text-[11px]">
                    {member.email}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${member.roleColor}`}>
                      {member.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-[#A1A1A6]">{member.lastActive}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="text-xs text-[#A1A1A6] hover:text-white">Ubah Peran</button>
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
