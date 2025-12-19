"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Admins", href: "/admin/admins" },
  { label: "Chefs", href: "/admin/chefs" },
  { label: "Ingredients", href: "/admin/ingredients" },
  { label: "Recipes", href: "/admin/recipes" },
  { label: "Hacks", href: "/admin/hacks" },
  { label: "Analytics", href: "/admin/analytics" },
];

export default function AdminSidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("role"); // Clear the role
    router.push("/home"); // Redirect to home page
  };

  return (
    <aside className="w-48 bg-[#4E267A] text-white flex flex-col p-6">
      <div>
        {/* LOGO */}
        <div className="mb-10 flex flex-col items-center gap-2">
          <Image
            src="/headerImages/Saveful-logo.png"
            alt="Saveful"
            width={120}
            height={40}
          />
          <span className="font-sans-bold text-2xl">Admin</span>
        </div>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 font-sans-regular rounded-lg hover:bg-white/10 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Bottom Section: Logout Button */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg text-white font-sans-bold uppercase tracking-wide hover:scale-105 hover:shadow-2xl transition-transform"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
