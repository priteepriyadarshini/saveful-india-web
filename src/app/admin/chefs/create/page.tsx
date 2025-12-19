"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRoleGuard } from "@/hooks/useRoleGuard";

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

export default function CreateChefPage() {
  useRoleGuard(["admin"]);

  const router = useRouter();

  /* ================= STATES ================= */
  const [countryCode, setCountryCode] = useState("+91");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  /* HANDLERS */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const fullPhoneNumber = form.phoneNumber
  ? `${countryCode}${form.phoneNumber}`
  : null;

if (fullPhoneNumber && !/^\+\d{8,15}$/.test(fullPhoneNumber)) {
  setError("Invalid phone number format");
  setLoading(false);
  return;
}


    try {
      // MOCK API CALL
      await new Promise((resolve) => setTimeout(resolve, 800));

      console.log("Create Chef Payload:", form);

      setSuccess("Chef added successfully 🎉");
      setLoading(false);

      setTimeout(() => {
      }, 1500);
    } catch {
      setError("Failed to create chef. Try again later");
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-8 py-10">
      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-6"
      >
        ← Back to Chefs
      </button>

      {/* PAGE HEADER */}
      <div className="mb-10">
        <h1 className="font-sans-bold text-4xl mb-2">Onboard New Chef 👨‍🍳</h1>
        <p className="text-gray-500 max-w-2xl">
          Create chef login credentials. Chefs can log in using these details
          and start adding recipes to Saveful.
        </p>
      </div>

      {/* FORM CONTAINER */}
      <div className="rounded-3xl shadow-md p-10 max-w-5xl bg-[#FFCDF5]">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* SUCCESS */}
          {success && (
            <div className="md:col-span-2 rounded-xl bg-green-100 text-green-800 px-4 py-3 font-sans-semibold">
              {success}
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="md:col-span-2 rounded-xl bg-red-100 text-red-700 px-4 py-3">
              {error}
            </div>
          )}

          {/* FULL NAME */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-sans-semibold text-gray-700">
              Chef Full Name
            </label>
            <input
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              required
              placeholder="Chef full name"
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#4E267A]"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm font-sans-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="chef@saveful.com"
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#4E267A]"
            />
          </div>

          {/* PHONE NUMBER */}
          <div>
            <label className="block mb-2 text-sm font-sans-semibold text-gray-700">
              Phone Number (optional)
            </label>

            <div className="flex gap-3">
              {/* COUNTRY CODE */}
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

              {/* PHONE NUMBER */}
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Phone number"
                value={form.phoneNumber}
                onChange={(e) =>
                  setForm({ ...form, phoneNumber: e.target.value })
                }
                className="flex-1 rounded-xl border px-4 py-3 focus:ring-2 focus:ring-[#4E267A]"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-sans-semibold text-gray-700">
              Temporary Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Temporary password"
                className="w-full rounded-xl border px-4 py-3 pr-12 focus:ring-2 focus:ring-[#4E267A]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
              >
                {showPassword ? "👁️" : "🙈"}
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-2">
              Chef should change this password on first login
            </p>
          </div>

          {/* ACTIONS */}
          <div className="md:col-span-2 flex items-center gap-6 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#4E267A] text-white px-10 py-3 rounded-xl font-sans-semibold text-lg transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Chef"}
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="text-sm text-gray-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
