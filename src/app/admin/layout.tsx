"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";
import { useRoleGuard } from "@/hooks/useRoleGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useRoleGuard(["admin"]); // Protect admin routes

  return (
    <div className="flex h-screen">
      {/* Sidebar always full height */}
        <AdminSidebar />

      {/* Main content scrollable */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
}
