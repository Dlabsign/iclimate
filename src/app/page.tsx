import React from 'react';
import Link from 'next/link';
import { stories, petitions, voiceReports } from '@/data/mockData';
import { ArrowRight, Flame, ShieldAlert, Sparkles, Trees, PawPrint, Users } from 'lucide-react';

export default function HomePage() {
  const featuredStory = stories.find((s) => s.isSpotlight) || stories[0];
  const homeStories = stories.filter((s) => s.isFeaturedHome);
  const homePetitions = petitions.filter((p) => p.isFeaturedHome);

  return (
    <main className="w-full pt-24 pb-16">
      {/* Hero Section Container (Apple squircle 28px) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
        <div className="relative overflow-hidden rounded-[28px] bg-obsidian text-white border border-white/10 shadow-2xl p-8 sm:p-12 lg:p-16">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/30 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-alert/20 blur-[100px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wide text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-alert animate-ping" />
              <span>KRISIS EKOSISTEM INDONESIA 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[1.08] text-white mb-6">
              Selamatkan Nafas Terakhir{' '}
              <span className="font-graffiti text-alert tracking-normal block sm:inline">
                Nusantara.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A1A1A6] font-normal leading-relaxed mb-8 max-w-2xl">
              Platform independen jurnalisme investigasi, pemantauan satelit, dan suara warga dari
              gambut Sumatra & Kalimantan, habitat badak Jawa Ujung Kulon, hingga pesisir Pantura yang
              tenggelam.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/movements"
                className="bg-alert hover:bg-alert-ink text-white rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 shadow-lg flex items-center gap-2 active:scale-95"
              >
                <Flame className="w-4 h-4" />
                <span>Ikuti Petisi Darurat</span>
              </Link>

              <Link
                href="/stories"
                className="glass-pill-dark hover:bg-white/10 text-white rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-200 flex items-center gap-2"
              >
                <span>Baca Laporan Investigasi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars Bento Grid (Apple squircle 20px) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-alert">
              Fokus Utama Krisis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink mt-1">
              3 Pilar Garis Depan
            </h2>
          </div>
          <Link
            href="/stories"
            className="text-xs font-semibold text-muted hover:text-ink flex items-center gap-1"
          >
            Lihat Semua Arsip <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Forest */}
          <div className="rounded-[20px] bg-white p-7 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
              <Trees className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              Pilar 01
            </span>
            <h3 className="text-lg font-bold text-ink tracking-tight mt-1 mb-2">
              For the Forest
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-4">
              Deforestasi, bara api gambut bawah tanah Sumatra & Kalimantan, serta pemantauan titik
              panas satelit VIIRS NASA.
            </p>
            <Link
              href="/stories"
              className="text-xs font-semibold text-emerald-800 hover:underline flex items-center gap-1"
            >
              Jelajahi Liputan Hutan →
            </Link>
          </div>

          {/* Pillar 2: Animal */}
          <div className="rounded-[20px] bg-white p-7 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-5">
              <PawPrint className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
              Pilar 02
            </span>
            <h3 className="text-lg font-bold text-ink tracking-tight mt-1 mb-2">
              For the Animal
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-4">
              Status kritis 78 badak Jawa Ujung Kulon, koridor jelajah gajah Sumatra, dan pencegahan
              perburuan liar satwa langka.
            </p>
            <Link
              href="/stories"
              className="text-xs font-semibold text-amber-800 hover:underline flex items-center gap-1"
            >
              Jelajahi Liputan Satwa →
            </Link>
          </div>

          {/* Pillar 3: People */}
          <div className="rounded-[20px] bg-white p-7 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center mb-5">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              Pilar 03
            </span>
            <h3 className="text-lg font-bold text-ink tracking-tight mt-1 mb-2">
              For the People
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-4">
              Krisis rob pesisir Pantura Jawa, tanah ambles 14 cm/tahun di Demak, serta perjuangan hak
              hutan adat masyarakat Papua.
            </p>
            <Link
              href="/stories"
              className="text-xs font-semibold text-blue-800 hover:underline flex items-center gap-1"
            >
              Jelajahi Liputan Warga →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Story Callout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="rounded-[24px] bg-[#141815] text-white p-6 sm:p-10 border border-white/10 flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 aspect-video rounded-[18px] overflow-hidden relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featuredStory.coverImage}
              alt={featuredStory.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-alert text-white text-[10px] font-bold">
              {featuredStory.urgentBadge}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col">
            <span className="text-xs text-[#A1A1A6] font-medium mb-2">
              {featuredStory.categoryLabel} • {featuredStory.readTime}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              {featuredStory.title}
            </h3>
            <p className="text-sm text-[#A1A1A6] leading-relaxed mb-6">
              {featuredStory.excerpt}
            </p>
            <Link
              href={`/stories`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-alert hover:text-white transition-colors"
            >
              Baca Selengkapnya di Edisi Investigasi →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
