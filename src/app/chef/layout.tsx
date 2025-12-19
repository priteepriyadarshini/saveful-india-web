"use client";

import { useRoleGuard } from "@/hooks/useRoleGuard";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useRoleGuard(["chef"]);
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* <AdminSidebar /> */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
