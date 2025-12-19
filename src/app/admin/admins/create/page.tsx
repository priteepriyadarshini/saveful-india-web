"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateAdminPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-3xl space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="font-sans-bold text-4xl mb-2">
          Add New Admin
        </h1>
        <p className="text-gray-500">
          Grant administrative access to another user
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <form className="space-y-6">
          {/* ADMIN NAME */}
          <div>
            <label className="block mb-2 text-sm font-sans-semibold text-gray-700">
              Admin Name
            </label>
            <input
              type="text"
              placeholder="Enter admin full name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-[#4E267A]"
            />
          </div>

          {/* EMAIL / USER ID */}
          <div>
            <label className="block mb-2 text-sm font-sans-semibold text-gray-700">
              Admin Email / User ID
            </label>
            <input
              type="email"
              placeholder="admin@saveful.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-[#4E267A]"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block mb-2 text-sm font-sans-semibold text-gray-700">
              Temporary Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Set temporary password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-12
                           focus:outline-none focus:ring-2 focus:ring-[#4E267A]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           text-gray-400 hover:text-black"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              Admin will be asked to change this password on first login
            </p>
          </div>

          {/* ROLE */}
          <div>
            <label className="block mb-2 text-sm font-sans-semibold text-gray-700">
              Admin Role
            </label>
            <select
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-[#4E267A]"
            >
              <option value="admin">Admin</option>
              <option value="super-admin">Super Admin</option>
            </select>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="rounded-xl bg-[#4E267A] px-8 py-3
                         text-white font-sans-semibold text-lg
                         transition hover:scale-[1.02] hover:shadow-lg"
            >
              Create Admin
            </button>

            <Link
              href="/admin/admins"
              className="text-sm text-gray-500 hover:underline"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
