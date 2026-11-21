'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  Flame,
  Inbox,
  FolderDown,
  Settings,
  ExternalLink,
  LogOut,
  ShieldCheck,
} from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();

  // Hide sidebar on admin login page
  if (pathname === '/admin/login') {
    return null;
  }

  const navItems = [
    {
      label: 'Ringkasan Dashboard',
      shortLabel: 'Overview',
      href: '/admin',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      label: 'Manajemen Cerita & Viral',
      shortLabel: 'Cerita',
      href: '/admin/stories',
      icon: FileText,
      badge: '38',
    },
    {
      label: 'Petisi & Gerakan Warga',
      shortLabel: 'Petisi',
      href: '/admin/movements',
      icon: Flame,
      badge: '4 Aktif',
    },
    {
      label: 'Inbox Laporan Publik',
      shortLabel: 'Laporan',
      href: '/admin/reports',
      icon: Inbox,
      badge: '17 Baru',
      badgeAlert: true,
    },
    {
      label: 'Sumber Data & Fact Sheet',
      shortLabel: 'Sumber Data',
      href: '/admin/resources',
      icon: FolderDown,
      badge: null,
    },
    {
      label: 'Pengaturan Home & Tim',
      shortLabel: 'Pengaturan',
      href: '/admin/settings',
      icon: Settings,
      badge: null,
    },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') return pathname === '/admin';
    return pathname?.startsWith(href);
  };

  return (
    <aside className="w-64 shrink-0 hidden md:flex flex-col bg-obsidian text-white border-r border-white/10 min-h-screen p-5 select-none">
      {/* Brand Header */}
      <div className="pb-6 mb-6 border-b border-white/10 flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-sm tracking-wider text-white">
            IC
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-tight text-white flex items-center gap-1.5">
              ICLIMATE
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-alert text-white">
                CMS
              </span>
            </span>
            <span className="text-[11px] text-[#A1A1A6]">Ruang Kendali Redaksi</span>
          </div>
        </Link>
      </div>

      {/* Admin User Info Pill */}
      <div className="mb-6 p-3 rounded-xl bg-surface border border-white/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="text-xs font-semibold text-white truncate">Superadmin Redaksi</span>
          <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            2FA Terverifikasi
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col gap-1.5">
        <span className="text-[10px] uppercase font-bold tracking-wider text-[#6E6E73] px-3 mb-1">
          Menu Manajemen
        </span>
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-150 ${
                active
                  ? 'bg-white text-ink font-semibold shadow-sm'
                  : 'text-[#A1A1A6] hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${active ? 'text-ink' : 'text-[#A1A1A6]'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-medium ${
                    item.badgeAlert
                      ? 'bg-alert text-white'
                      : active
                      ? 'bg-black/10 text-ink'
                      : 'bg-white/10 text-[#A1A1A6]'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#A1A1A6] hover:text-white hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            Lihat Website Publik
          </span>
          <span className="text-[10px] text-[#6E6E73] font-mono">↗</span>
        </Link>

        <Link
          href="/admin/login"
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/30 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Keluar Sesi</span>
        </Link>
      </div>
    </aside>
  );
}
