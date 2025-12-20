"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRoleGuard } from "@/hooks/useRoleGuard";
import { AUTH_API } from "@/lib/api";

/* ================= COUNTRY CODES ================= */
const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 India" },
  { code: "+1", label: "🇺🇸 USA" },
  { code: "+44", label: "🇬🇧 UK" },
  { code: "+61", label: "🇦🇺 Australia" },
  { code: "+49", label: "🇩🇪 Germany" },
  { code: "+33", label: "🇫🇷 France" },
  { code: "+81", label: "🇯🇵 Japan" },
  { code: "+971", label: "🇦🇪 UAE" },
  { code: "+65", label: "🇸🇬 Singapore" },
  { code: "+86", label: "🇨🇳 China" },
];

export default function CreateAdminPage() {
  useRoleGuard(["admin"]);

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [countryCode, setCountryCode] = useState("+91");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const fullPhoneNumber = `${countryCode}${form.phoneNumber}`;

    if (!/^\+\d{8,15}$/.test(fullPhoneNumber)) {
      setError("Invalid phone number format");
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");

      const res = await fetch(AUTH_API.CREATE_ADMIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fullname: form.name,
          email: form.email,
          password: form.password,
          phoneNumber: fullPhoneNumber,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to create admin");
      }

      setSuccess("Admin created successfully 🎉");

      setTimeout(() => {
        router.push("/admin/admins");
      }, 1200);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] px-10 py-8 flex flex-col">
      {/* BACK NAV */}
      <div className="mb-6">
        <button
          onClick={() => router.push("/admin/admins")}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#4E267A]"
        >
          ← <span className="font-sans-semibold">Back to Admins</span>
        </button>
      </div>

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="font-sans-bold text-3xl">Add New Admin 🛡️</h1>
        <p className="text-gray-500">
          Create another admin account for Saveful.
        </p>
      </div>

      {/* FORM */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-4xl bg-[#FFCDF5] rounded-3xl shadow-md p-8">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {(success || error) && (
              <div
                className={`md:col-span-2 rounded-xl px-4 py-3 font-sans-semibold ${
                  success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {success || error}
              </div>
            )}

            {/* NAME */}
            <div className="md:col-span-2">
              <label className="block text-sm font-sans-semibold mb-1">
                Full Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#4E267A]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-sans-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#4E267A]"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm font-sans-semibold mb-1">
                Phone Number
              </label>
              <div className="flex gap-3">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="rounded-xl border px-3 py-3 focus:ring-2 focus:ring-[#4E267A]"
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.label} {c.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={form.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Phone number"
                  className="flex-1 rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#4E267A]"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="md:col-span-2">
              <label className="block text-sm font-sans-semibold mb-1">
                Temporary Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border px-4 py-3 pr-12 focus:ring-2 focus:ring-[#4E267A]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Admin must change password on first login
              </p>
            </div>

            {/* ACTIONS */}
            <div className="md:col-span-2 flex items-center gap-6 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#4E267A] text-white px-10 py-3 rounded-xl font-sans-semibold text-lg hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Creating..." : "Create Admin"}
              </button>

              <Link
                href="/admin/admins"
                className="text-sm text-gray-600 hover:underline"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
