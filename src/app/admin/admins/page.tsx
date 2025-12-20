"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRoleGuard } from "@/hooks/useRoleGuard";
import { ADMIN_API } from "@/lib/api";

type Admin = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  role: string;
};

export default function AdminsPage() {
  useRoleGuard(["admin"]);

  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        const res = await fetch(ADMIN_API.GET_ADMINS, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch admins");
        }

        const data = await res.json();
        setAdmins(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-sans-bold text-4xl mb-2">Admins 🛡️</h1>
          <p className="text-gray-500">
            Manage administrators with access to Saveful
          </p>
        </div>

        <Link
          href="/admin/admins/create"
          className="rounded-xl bg-[#4E267A] px-6 py-3
                     text-white font-sans-semibold
                     transition hover:scale-[1.02] hover:shadow-lg"
        >
          + Add Admin
        </Link>
      </div>

      {/* STATUS */}
      {loading && (
        <div className="bg-white rounded-xl p-6 text-gray-500">
          Loading admins...
        </div>
      )}

      {error && (
        <div className="bg-red-100 text-red-700 rounded-xl p-4">
          {error}
        </div>
      )}

      {/* TABLE */}
      {!loading && !error && (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Created</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {admins.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    No admins found
                  </td>
                </tr>
              )}

              {admins.map((admin) => (
                <tr key={admin.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-sans-semibold">
                    {admin.name}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {admin.email}
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-sans-semibold bg-blue-100 text-blue-700">
                      {admin.role}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(admin.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 text-right space-x-3 text-sm">
                    <button className="text-[#4E267A] hover:underline">
                      Edit
                    </button>
                    <button className="text-red-500 hover:underline">
                      Disable
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
