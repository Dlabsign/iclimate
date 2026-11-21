'use client';

import React, { useState } from 'react';
import { factSheets, dataSources } from '@/data/mockData';
import { Upload, Download, FileText, CheckCircle2, Plus, ExternalLink } from 'lucide-react';

export default function AdminResourcesPage() {
  const [sheets, setSheets] = useState(factSheets);

  return (
    <div className="p-6 sm:p-10 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono text-alert uppercase tracking-wider">
            Riset & Transparansi
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-1">
            Sumber Data & Fact Sheet PDF
          </h1>
          <p className="text-xs text-[#A1A1A6] mt-1">
            Unggah dokumen riset ilmiah, pantau analitik unduhan, dan cek status integrasi API lembaga.
          </p>
        </div>

        <button className="px-5 py-2.5 rounded-full bg-alert hover:bg-alert-ink text-white text-xs font-semibold tracking-tight transition-all shadow-sm flex items-center gap-2 self-start sm:self-auto">
          <Upload className="w-4 h-4" />
          <span>Upload Dokumen PDF Baru</span>
        </button>
      </div>

      {/* PDF Downloads Analytics Table */}
      <div className="rounded-[20px] bg-surface border border-white/10 overflow-hidden shadow-xl">
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            Dokumen Fact Sheet Terbit ({sheets.length})
          </h2>
          <span className="text-xs text-[#A1A1A6]">
            Total Unduhan:{' '}
            <strong className="text-white">
              {sheets.reduce((acc, f) => acc + f.downloadCount, 0).toLocaleString('id-ID')}
            </strong>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-[11px] uppercase tracking-wider text-[#A1A1A6]">
                <th className="py-3 px-5">Nama Dokumen Fact Sheet</th>
                <th className="py-3 px-4">Lembaga Riset</th>
                <th className="py-3 px-4">Ukuran & SHA</th>
                <th className="py-3 px-4">Total Diunduh</th>
                <th className="py-3 px-5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs text-white">
              {sheets.map((sheet) => (
                <tr key={sheet.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-5 max-w-md">
                    <span className="font-semibold text-white block line-clamp-1">
                      {sheet.title}
                    </span>
                    <span className="text-[10px] text-[#A1A1A6]">{sheet.edition}</span>
                  </td>
                  <td className="py-4 px-4 text-[#A1A1A6] whitespace-nowrap">
                    {sheet.organization.split('&')[0]}
                  </td>
                  <td className="py-4 px-4 font-mono text-[11px] text-[#A1A1A6] whitespace-nowrap">
                    {sheet.fileSize} • {sheet.checksum.slice(0, 14)}...
                  </td>
                  <td className="py-4 px-4 font-mono text-emerald-400 font-semibold whitespace-nowrap">
                    {sheet.downloadCount.toLocaleString('id-ID')} unduhan
                  </td>
                  <td className="py-4 px-5 text-right whitespace-nowrap">
                    <button className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white text-ink text-xs font-semibold transition-colors">
                      Unduh Berkas
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Research Partners API Status */}
      <div className="pt-6 border-t border-white/10">
        <h2 className="text-sm font-bold uppercase tracking-wider text-[#A1A1A6] mb-4">
          Status Integrasi API Lembaga Sains
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataSources.map((ds) => (
            <div
              key={ds.id}
              className="p-5 rounded-[16px] bg-surface border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
                    {ds.apiStatus}
                  </span>
                  <span className="text-[10px] text-[#A1A1A6]">{ds.lastSync}</span>
                </div>
                <h4 className="text-xs font-bold text-white mb-1">{ds.shortName}</h4>
                <p className="text-[11px] text-[#A1A1A6] line-clamp-2">{ds.metrics}</p>
              </div>
              <a
                href={ds.url}
                target="_blank"
                rel="noreferrer"
                className="pt-3 border-t border-white/5 mt-3 text-[11px] text-alert hover:underline flex items-center justify-between"
              >
                <span>Cek Endpoint API</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
