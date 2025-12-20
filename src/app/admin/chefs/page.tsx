"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRoleGuard } from "@/hooks/useRoleGuard";
import { ADMIN_API } from "@/lib/api"; // you add this constant

type Chef = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: string;
};

export default function ChefsPage() {
  useRoleGuard(["admin"]);

  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          throw new Error("Unauthorized");
        }

        const res = await fetch(ADMIN_API.GET_CHEFS, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            Array.isArray(data.message)
              ? data.message.join(", ")
              : data.message || "Failed to fetch chefs"
          );
        }

        setChefs(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchChefs();
  }, []);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-sans-bold text-4xl mb-2">Chefs 👨‍🍳</h1>
          <p className="text-gray-500">
            Manage chefs onboarded to Saveful
          </p>
        </div>

        <Link
          href="/admin/chefs/create"
          className="rounded-xl bg-[#4E267A] px-6 py-3
                     text-white font-sans-semibold
                     transition hover:scale-[1.02] hover:shadow-lg"
        >
          + Add Chef
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-sm text-gray-500">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email / User ID</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {loading && (
              <tr>
                <td colSpan={5} className="px-6 py-6 text-center text-gray-500">
                  Loading chefs...
                </td>
              </tr>
            )}

            {error && (
              <tr>
                <td colSpan={5} className="px-6 py-6 text-center text-red-500">
                  {error}
                </td>
              </tr>
            )}

            {!loading && !error && chefs.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-6 text-center text-gray-500">
                  No chefs found
                </td>
              </tr>
            )}

            {chefs.map((chef) => (
              <tr key={chef.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-sans-semibold">
                  {chef.name}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {chef.email}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-sans-semibold ${
                      chef.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {chef.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(chef.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
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
    </div>
  );
}
