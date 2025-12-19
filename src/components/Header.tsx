"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

  return (
    <>
      <header className="bg-[#4E267A] text-white fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-start justify-between">
          {/* LEFT */}
          <div className="flex gap-4 mt-10">
            <Link
              href="https://instagram.com/savefulorg/?hl=en"
              target="_blank"
            >
              <Image
                src="/footerImages/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
            <Link href="https://facebook.com/Savefulorg" target="_blank">
              <Image
                src="/footerImages/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link
              href="https://youtube.com/channel/UCkT2gI4t-eKS2Y5yC8tc4UQ"
              target="_blank"
            >
              <Image
                src="/footerImages/youtube.png"
                alt="YouTube"
                width={20}
                height={20}
              />
            </Link>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center">
            <Link href="/" className="mb-4">
              <Image
                src="/headerImages/Saveful-logo.png"
                alt="Saveful"
                width={120}
                height={40}
              />
            </Link>

            <nav className="flex flex-col md:flex-row gap-4 md:gap-6 bodyMediumBold uppercase items-center text-white">
              <Link href="/">Home</Link>
              <Link href="/kitchen">Kitchen</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/leftover-legend">Leftover Legend</Link>
              <Link href="/schools">Schools</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="mt-8">
            <Link
              href="/auth/login"
              className="px-6 py-2 rounded-full bg-white text-[#4E267A]
             font-sans-semibold text-sm uppercase
             transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
