'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Megaphone, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Do not render public navbar on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const navLinks = [
    { label: 'Investigasi & Cerita', href: '/stories' },
    { label: 'Gerakan & Petisi', href: '/movements' },
    { label: 'Sumber Data & Riset', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-5xl pointer-events-auto">
        <nav className="glass-pill px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/60">
          {/* Brand Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-obsidian text-white flex items-center justify-center font-bold text-xs tracking-wider transition-transform duration-200 group-hover:scale-105">
              IC
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-[-0.03em] text-ink flex items-center gap-1">
                ICLIMATE
                <span className="w-1.5 h-1.5 rounded-full bg-alert inline-block animate-pulse" />
              </span>
              <span className="text-[10px] uppercase font-semibold text-muted tracking-wider hidden sm:inline-block">
                Nusantara Voice
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 ${
                    active
                      ? 'bg-ink text-white shadow-sm'
                      : 'text-ink/80 hover:text-ink hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/movements#suarakan"
              className="bg-alert hover:bg-alert-ink text-white rounded-full px-4 sm:px-5 py-2 text-xs font-semibold tracking-tight transition-all duration-200 shadow-sm flex items-center gap-1.5 active:scale-95"
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Suarakan Sekarang</span>
            </Link>

            <Link
              href="/admin/login"
              className="hidden lg:flex items-center gap-1 text-[11px] text-muted hover:text-ink font-medium px-2 py-1 transition-colors"
              title="Portal Redaksi & Admin"
            >
              <span>Redaksi</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-ink hover:bg-black/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-white/95 backdrop-blur-2xl rounded-2xl border border-black/10 shadow-xl flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium ${
                pathname === '/' ? 'bg-ink text-white' : 'text-ink hover:bg-black/5'
              }`}
            >
              Halaman Utama
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium ${
                  isActive(link.href) ? 'bg-ink text-white' : 'text-ink hover:bg-black/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-black/5 flex items-center justify-between text-xs text-muted px-2">
              <span>Portal Editorial & 2FA:</span>
              <Link
                href="/admin/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-alert underline"
              >
                Masuk Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
