import React from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-obsidian text-white flex">
      <AdminSidebar />
      <div className="flex-1 min-w-0 flex flex-col bg-[#111412]">
        {children}
      </div>
    </div>
  );
}
