"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

/* ================= TYPES ================= */
type Role = "admin" | "chef";

/* ================= MOCK USERS ================= */
const MOCK_USERS = [
  {
    email: "admin@saveful.com",
    password: "admin123",
    role: "admin" as Role,
    redirect: "/admin/dashboard",
  },
  {
    email: "chef@saveful.com",
    password: "chef123",
    role: "chef" as Role,
    redirect: "/chef/dashboard",
  },
];

export default function LoginPage() {
  const router = useRouter();

  const [role, setRole] = useState<Role>("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= MOCK LOGIN ================= */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const user = MOCK_USERS.find(
        (u) =>
          u.email === email &&
          u.password === password &&
          u.role === role
      );

      if (!user) {
        setError("Invalid credentials");
        setLoading(false);
        return;
      }

      // 🔐 Mock auth persistence (matches useRoleGuard)
      localStorage.setItem("auth", "true");
      localStorage.setItem("role", user.role);

      router.push(user.redirect);
    }, 700);
  };

  return (
  <div className="relative w-screen h-screen flex items-center justify-center px-6">
    {/* ===== BACKGROUND IMAGE ===== */}
    <Image
      src="/images/splash-bg.png"
      alt="Saveful Background"
      fill
      priority
      className="object-cover"
    />

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/40" />

    {/* ===== CONTENT ===== */}
    <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-28 items-center">

      {/* ================= LEFT — INFO ================= */}
      <div className="text-white">
        <h1 className="font-sans-bold text-6xl mb-6">
          Welcome to Saveful 👋
        </h1>

        <p className="font-sans-semibold text-3xl mb-6 leading-tight">
          Saveful works best on mobile.
        </p>

        <p className="font-sans text-lg opacity-90 mb-10 max-w-xl">
          Discover recipes from ingredients you already have, reduce food
          waste, save money, and cook with confidence — all from the palm of
          your hand.
        </p>

        <ul className="space-y-4 mb-12 text-lg">
          <li className="flex gap-3">
            <span>🍳</span>
            Chef-created recipes from your ingredients
          </li>
          <li className="flex gap-3">
            <span>💸</span>
            Save money by reducing food waste
          </li>
          <li className="flex gap-3">
            <span>🌏</span>
            Track your impact on the planet
          </li>
        </ul>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="https://apps.apple.com/us/app/saveful/id6460647948"
            target="_blank"
          >
            <Image
              src="/images/appstore.png"
              alt="Download on App Store"
              width={160}
              height={52}
            />
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.saveful.app"
            target="_blank"
          >
            <Image
              src="/images/googleplay.png"
              alt="Get it on Google Play"
              width={160}
              height={52}
            />
          </Link>
        </div>
      </div>

      {/* ================= RIGHT — LOGIN (PUSHED RIGHT) ================= */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full justify-self-end">
        <h2 className="text-3xl font-sans-bold mb-2 text-center">
          Admin / Chef Login
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Verified accounts only
        </p>

        {/* ROLE SWITCH */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {(["admin", "chef"] as Role[]).map((r) => (
            <button
              key={r}
              onClick={() => {
                setRole(r);
                setEmail("");
                setPassword("");
                setError("");
              }}
              className={`py-2 rounded-xl font-sans-semibold transition ${
                role === r
                  ? "bg-[#4E267A] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {r.toUpperCase()}
            </button>
          ))}
        </div>

        {/* LOGIN FORM */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border px-4 py-3
                       focus:ring-2 focus:ring-[#4E267A]"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border px-4 py-3 pr-12
                         focus:ring-2 focus:ring-[#4E267A]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? "👁️" : "🙈"}
            </button>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#4E267A] py-3 text-white
                       font-sans-semibold text-lg transition
                       hover:scale-[1.02]"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  </div>
);
}