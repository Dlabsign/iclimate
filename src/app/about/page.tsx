import React from 'react';
import { dataSources, factSheets } from '@/data/mockData';
import { Shield, Database, Download, ExternalLink, FileCheck, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="w-full pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Editorial Manifesto Header */}
        <section className="max-w-3xl mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-alert">
            Manifesto Redaksi
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.03em] text-ink mt-2 mb-6">
            Jurnalisme Sains & Suara Garis Depan Nusantara
          </h1>
          <div className="space-y-4 text-sm sm:text-base text-ink/80 leading-relaxed font-normal">
            <p>
              ICLIMATE lahir dari kegelisahan mendalam melihat jurang pemisah antara data satelit
              lingkungan yang dingin dan kenyataan pahit yang dihadapi masyarakat adat, petani, dan
              jagawana di pelosok Nusantara.
            </p>
            <p>
              Kami menolak pelaporan iklim yang hanya berputar pada retorika konferensi. Setiap kata,
              peta, dan angka yang kami publikasikan berakar pada verifikasi silang: mencocokkan
              kesaksian saksi mata lapangan dengan sensor termal VIIRS NASA, radar cuaca BMKG, dan
              kajian keanekaragaman hayati BRIN.
            </p>
          </div>
        </section>

        {/* 4 Official Scientific Sources */}
        <section className="mb-16">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Integritas & Akurasi
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-ink mt-1">
              4 Sumber Data & Verifikasi Ilmiah
            </h2>
            <p className="text-xs text-muted">
              Sumber terbuka terakreditasi yang kami gunakan dalam seluruh liputan investigasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataSources.map((source) => (
              <div
                key={source.id}
                className="p-6 rounded-[20px] bg-white border border-black/5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {source.apiStatus}
                    </span>
                    <span className="text-[11px] text-muted">Sinkron: {source.lastSync}</span>
                  </div>

                  <h3 className="text-base font-bold text-ink mb-1">{source.name}</h3>
                  <span className="text-xs text-muted block mb-3">{source.agency}</span>
                  <p className="text-xs text-ink/80 leading-relaxed mb-4">
                    {source.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs">
                  <span className="font-mono text-[11px] text-muted">{source.metrics}</span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-alert hover:underline flex items-center gap-1"
                  >
                    <span>Kunjungi Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Downloadable PDF Fact Sheets */}
        <section>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-alert">
                Arsip Terbuka
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-ink mt-1">
                Download PDF Fact Sheets
              </h2>
            </div>
            <span className="text-xs text-muted">Bebas diunduh untuk riset & advokasi</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {factSheets.map((fact) => (
              <div
                key={fact.id}
                className="p-6 rounded-[18px] bg-white border border-black/5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-muted mb-2">
                    <span>{fact.edition}</span>
                    <span className="font-mono">{fact.fileSize}</span>
                  </div>
                  <h4 className="text-sm font-bold text-ink leading-snug mb-2">{fact.title}</h4>
                  <p className="text-xs text-muted leading-relaxed mb-4">{fact.description}</p>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted">{fact.checksum}</span>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink text-white hover:bg-black text-xs font-semibold transition-colors">
                    <Download className="w-3 h-3" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
