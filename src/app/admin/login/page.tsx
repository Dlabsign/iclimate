'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, KeyRound, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'credentials' | '2fa'>('credentials');
  const [email, setEmail] = useState('redaksi@iclimate.id');
  const [password, setPassword] = useState('••••••••••••');
  const [totp, setTotp] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'credentials') {
      setStep('2fa');
    } else {
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-obsidian text-white">
      {/* Left Column: Atmospheric Editorial Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-surface p-12 flex-col justify-between border-r border-white/10">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1600&q=80"
            alt="Frontline forest"
            className="w-full h-full object-cover opacity-25 filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />
        </div>

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white text-ink flex items-center justify-center font-extrabold text-sm">
            IC
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight">ICLIMATE REDAKSI</h1>
            <p className="text-[11px] text-[#A1A1A6]">Sistem Manajemen Konten & Integritas Bukti</p>
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <blockquote className="text-xl font-light text-white leading-relaxed mb-4">
            &ldquo;Data satelit tak pernah berbohong, namun tanpa keberanian jurnalis di lapangan,
            krisis hanya akan menjadi statistik di meja pejabat.&rdquo;
          </blockquote>
          <span className="text-xs text-alert font-mono">
            — Protokol Integritas Jurnalisme ICLIMATE Nusantara
          </span>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-[11px] text-[#6E6E73]">
          <span>Enkripsi AES-256</span>
          <span>•</span>
          <span>TOTP Hardware 2FA Mandatory</span>
          <span>•</span>
          <Link href="/" className="text-[#A1A1A6] hover:text-white">
            ← Kembali ke Website
          </Link>
        </div>
      </div>

      {/* Right Column: Apple HIG Login Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md p-8 sm:p-10 rounded-[24px] bg-surface border border-white/10 shadow-2xl">
          <div className="mb-8">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {step === 'credentials' ? 'Masuk ke Portal Redaksi' : 'Verifikasi Keamanan 2FA'}
            </h2>
            <p className="text-xs text-[#A1A1A6] mt-1">
              {step === 'credentials'
                ? 'Gunakan akun terdaftar superadmin atau verifikator laporan.'
                : 'Buka aplikasi authenticator Anda (Google Authenticator / YubiKey).'}
            </p>
          </div>

          <form onSubmit={handleNext} className="space-y-4">
            {step === 'credentials' ? (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#A1A1A6] mb-1.5">
                    Alamat Email Redaksi
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-[12px] bg-obsidian border border-white/10 text-white text-xs px-4 py-3 focus:outline-none focus:border-alert"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A1A1A6] mb-1.5">
                    Kata Sandi
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-[12px] bg-obsidian border border-white/10 text-white text-xs px-4 py-3 focus:outline-none focus:border-alert"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-alert hover:bg-alert-ink text-white font-semibold text-xs rounded-full py-3 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Lanjutkan ke 2FA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-semibold text-[#A1A1A6] mb-1.5">
                    6-Digit Kode TOTP Authenticator
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="Contoh: 849201"
                    value={totp}
                    onChange={(e) => setTotp(e.target.value)}
                    autoFocus
                    required
                    className="w-full text-center tracking-[0.5em] font-mono text-lg rounded-[12px] bg-obsidian border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-alert"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-alert hover:bg-alert-ink text-white font-semibold text-xs rounded-full py-3 transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verifikasi & Masuk Dashboard</span>
                </button>

                <button
                  type="button"
                  onClick={() => setStep('credentials')}
                  className="w-full text-center text-xs text-[#A1A1A6] hover:text-white pt-2"
                >
                  ← Kembali ubah email
                </button>
              </>
            )}
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link href="/" className="text-xs text-[#A1A1A6] hover:text-white">
              Bukan pengelola redaksi? Kembali ke halaman publik
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
