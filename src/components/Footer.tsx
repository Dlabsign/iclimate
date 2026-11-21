'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Shield, HeartHandshake, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // Do not render public footer on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="w-full bg-[#EAEAEF] text-ink border-t border-black/10 mt-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-black/10">
          {/* Brand Manifesto Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-obsidian text-white flex items-center justify-center font-bold text-xs">
                IC
              </div>
              <span className="font-extrabold text-base tracking-[-0.03em] text-ink">
                ICLIMATE NUSANTARA
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed max-w-sm">
              Platform independen jurnalisme investigasi lingkungan, visualisasi data satelit, dan
              mobilisasi aksi warga untuk menyelamatkan ekosistem kritis dari Sumatra hingga Papua.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-white/70 border border-black/5 text-ink">
                <Shield className="w-3 h-3 text-alert" />
                Perlindungan Whistleblower Terenkripsi
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">Eksplorasi</h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <Link href="/stories" className="text-ink/80 hover:text-alert transition-colors">
                  Investigasi & Liputan
                </Link>
              </li>
              <li>
                <Link href="/movements" className="text-ink/80 hover:text-alert transition-colors">
                  Petisi & Aksi Warga
                </Link>
              </li>
              <li>
                <Link href="/movements#suarakan" className="text-ink/80 hover:text-alert transition-colors">
                  Lapor Kerusakan Lapangan
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink/80 hover:text-alert transition-colors">
                  Tentang & Sumber Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Pillars Column */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">3 Pilar Krisis</h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <span className="text-ink font-medium">Hutan & Gambut</span>
                <p className="text-[10px] text-muted">Sumatra & Kalimantan</p>
              </li>
              <li>
                <span className="text-ink font-medium">Satwa Endemik Kritis</span>
                <p className="text-[10px] text-muted">Badak Jawa & Harimau</p>
              </li>
              <li>
                <span className="text-ink font-medium">Krisis Pesisir & Adat</span>
                <p className="text-[10px] text-muted">Pantura & Tanah Papua</p>
              </li>
            </ul>
          </div>

          {/* Sources & Transparency Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Rujukan Terbuka Ilmiah
            </h4>
            <ul className="flex flex-col gap-2 text-xs">
              <li>
                <a
                  href="https://sipongi.menlhk.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-ink/80 hover:text-alert"
                >
                  <span>KLHK Sipongi+ (Hotspot)</span>
                  <ArrowUpRight className="w-3 h-3 text-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://firms.modaps.eosdis.nasa.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-ink/80 hover:text-alert"
                >
                  <span>NASA FIRMS & VIIRS Thermal</span>
                  <ArrowUpRight className="w-3 h-3 text-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://bmkg.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-ink/80 hover:text-alert"
                >
                  <span>BMKG Iklim & Kelautan</span>
                  <ArrowUpRight className="w-3 h-3 text-muted" />
                </a>
              </li>
              <li>
                <a
                  href="https://brin.go.id"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-ink/80 hover:text-alert"
                >
                  <span>BRIN Biosistematika & IUCN</span>
                  <ArrowUpRight className="w-3 h-3 text-muted" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted">
          <p>© 2026 ICLIMATE Nusantara. Didukung oleh Jaringan Jurnalis & Penjaga Alam Indonesia.</p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-ink">
              Metodologi Verifikasi
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-ink">
              Etika & Anonimitas
            </Link>
            <span>•</span>
            <Link href="/admin/login" className="hover:text-alert flex items-center gap-1 font-medium">
              <span>Admin CMS</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
