// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import Image from "next/image";
// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <div className="bg-[#4E267A] text-white">
//       {/* ================= HERO SECTION ================= */}
//       <Header />
//       <section
//         className="
//           max-w-screen-xl mx-auto
//           pt-[148px]
//           px-4 sm:px-6 lg:px-8
//           pb-16
//           grid grid-cols-1 md:grid-cols-2
//           gap-10 lg:gap-16
//           items-center
//         "
//       >
//         {/* LEFT – SPLASH IMAGE */}
//         <div className="flex justify-center md:justify-start">
//           <Image
//             src="/images/splash.png"
//             alt="Saveful App"
//             width={420}
//             height={720}
//             priority
//             className="
//               max-h-[420px] sm:max-h-[480px] md:max-h-[520px]
//               w-auto
//               object-contain
//               rounded-3xl
//             "
//           />
//         </div>

//         {/* RIGHT – TEXT */}
//         <div className="text-center md:text-left">
//           <h1 className="mb-6 font-sans-bold text-4xl sm:text-5xl lg:text-7xl leading-tight">
//             A FRIDGE <br /> FULL OF RECIPES
//           </h1>

//           <p className="mb-5 max-w-xl mx-auto md:mx-0 font-sans-semibold text-xl sm:text-2xl">
//             Turn ingredients you have into meals you&apos;ll love
//           </p>

//           <p className="mb-8 max-w-xl mx-auto md:mx-0 font-sans text-base sm:text-lg opacity-90">
//             From wilted greens to parmesan rinds — Saveful helps you create
//             money-saving meals your family will love.
//           </p>

//           {/* STORE BUTTONS */}
//           <div className="flex justify-center md:justify-start gap-4">
//             <Link
//               href="https://apps.apple.com/us/app/saveful/id6460647948"
//               target="_blank"
//             >
//               <Image
//                 src="/images/appstore.png"
//                 alt="App Store"
//                 width={150}
//                 height={50}
//               />
//             </Link>

//             <Link
//               href="https://play.google.com/store/apps/details?id=com.saveful.app"
//               target="_blank"
//             >
//               <Image
//                 src="/images/googleplay.png"
//                 alt="Google Play"
//                 width={150}
//                 height={50}
//               />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= VALUE ICONS ================= */}
//       <section className="pb-16">
//         <div
//           className="
//             max-w-5xl mx-auto
//             px-4 sm:px-6
//             grid grid-cols-1 sm:grid-cols-3
//             gap-12
//             text-center
//           "
//         >
//           <ValueIcon src="/homeImages/Save-Money.png" label="Save money" />
//           <ValueIcon src="/homeImages/Save-Food.png" label="Save food" />
//           <ValueIcon src="/homeImages/Save-Time.png" label="Save time" />
//         </div>
//       </section>

//       {/* ================= STATEMENT ================= */}
//       <section className="py-20 px-4 text-center">
//         <p className="h3 mb-4 text-white">
//           Some say we’re biting off more than we can chew.
//         </p>

//         <h2 className="h2 mb-6 text-white">
//           We say we’re just getting started.
//         </h2>

//         <div className="flex justify-center mb-8">
//           <Image
//             src="/homeImages/SmallBites-Rev2.gif"
//             alt="Saveful Seal"
//             width={90}
//             height={90}
//           />
//         </div>

//         <p className="bodyLargeRegular max-w-4xl mx-auto leading-relaxed">
//           Governments worldwide are committed to the{" "}
//           <a
//             href="https://sdgs.un.org/goals"
//             target="_blank"
//             className="underline text-blue-400"
//           >
//             UN Sustainable Development Goal
//           </a>{" "}
//           of halving food waste by 2030.
//           <br />
//           <br />
//           Australia is committed to doing its part — starting now.
//         </p>

//         <div className="bodyMediumRegular max-w-4xl mx-auto mt-6 space-y-3">
//           <p>
//             Global stats:{" "}
//             <a
//               href="https://www.dcceew.gov.au/environment/protection/waste/food-waste"
//               target="_blank"
//               className="underline text-blue-400"
//             >
//               Department of Climate Change
//             </a>
//           </p>
//           <p>
//             Australian stats:{" "}
//             <a
//               href="https://www.fial.com.au/sharing-knowledge/food-waste"
//               target="_blank"
//               className="underline text-blue-400"
//             >
//               Food Innovation Australia
//             </a>
//           </p>
//           <p>Cost of groceries: Choice</p>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// /* ================= SMALL COMPONENT ================= */

// function ValueIcon({ src, label }: { src: string; label: string }) {
//   return (
//     <div>
//       <Image
//         src={src}
//         alt={label}
//         width={200}
//         height={200}
//         className="mx-auto mb-4"
//       />
//       <p className="h3 uppercase text-white">{label}</p>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeContent from "@/components/home/HomeContent";
import NavLinks from "@/components/nav/NavLinks";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-[#4E267A] text-white fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-start justify-between">
          {/* LEFT: Social icons (desktop only) */}
          <div className="hidden md:flex gap-4 mt-10">
            <SocialIcon
              href="https://instagram.com/savefulorg/?hl=en"
              src="/footerImages/instagram.png"
            />
            <SocialIcon
              href="https://facebook.com/Savefulorg"
              src="/footerImages/facebook.png"
            />
            <SocialIcon
              href="https://youtube.com/channel/UCkT2gI4t-eKS2Y5yC8tc4UQ"
              src="/footerImages/youtube.png"
            />
          </div>

          {/* CENTER: Logo + Desktop Navbar */}
          <div className="flex flex-col items-center">
            <Link href="/" className="mb-4">
              <Image
                src="/headerImages/Saveful-logo.png"
                alt="Saveful"
                width={120}
                height={40}
              />
            </Link>

            {/* ✅ THIS WAS MISSING */}
            <nav className="hidden md:flex gap-6 bodyMediumBold uppercase text-white">
              <NavLinks />
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 mt-8">
            {/* Desktop Login */}
            <Link
              href="/auth/login"
              className="hidden md:inline-block px-6 py-2 rounded-full bg-white text-[#4E267A]
        font-sans-semibold text-sm uppercase transition-all hover:scale-105"
            >
              Login
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="absolute right-0 top-0 h-full w-72 bg-[#4E267A] text-white p-6 flex flex-col">
            {/* Close */}
            <button
              className="text-2xl mb-6 self-end"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Nav */}
            <nav className="flex flex-col gap-6 bodyMediumBold text-white uppercase">
              <MobileNavLink href="/" onClick={setMenuOpen}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/kitchen" onClick={setMenuOpen}>
                Kitchen
              </MobileNavLink>
              <MobileNavLink href="/insights" onClick={setMenuOpen}>
                Insights
              </MobileNavLink>
              <MobileNavLink href="/leftover-legend" onClick={setMenuOpen}>
                Leftover Legend
              </MobileNavLink>
              <MobileNavLink href="/schools" onClick={setMenuOpen}>
                Schools
              </MobileNavLink>
              <MobileNavLink href="/faq" onClick={setMenuOpen}>
                FAQ
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={setMenuOpen}>
                Contact
              </MobileNavLink>

              <Link
                href="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="mt-6 px-6 py-3 rounded-full bg-white text-[#4E267A] text-center font-sans-semibold"
              >
                Login
              </Link>
            </nav>

            {/* Social icons */}
            <div className="flex gap-4 mt-auto">
              <SocialIcon
                href="https://facebook.com/Savefulorg"
                src="/footerImages/facebook.png"
              />
              <SocialIcon
                href="https://instagram.com/savefulorg/?hl=en"
                src="/footerImages/instagram.png"
              />
              <SocialIcon
                href="https://youtube.com/channel/UCkT2gI4t-eKS2Y5yC8tc4UQ"
                src="/footerImages/youtube.png"
              />
            </div>
          </div>
        </div>
      )}

      {/* ================= PAGE CONTENT ================= */}
      <HomeContent />

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/footerImages/SavefulFooter.png"
              alt="Saveful"
              width={240}
              height={40}
            />
            <div className="flex gap-4 mt-6">
              <Image
                src="/images/appstore.png"
                alt="App Store"
                width={140}
                height={46}
              />
              <Image
                src="/images/googleplay.png"
                alt="Google Play"
                width={140}
                height={46}
              />
            </div>
          </div>

          <div />

          {/* ================= RIGHT ================= */}
          <div className="flex flex-col items-start md:items-end space-y-6 text-white">
            {/* Links */}
            <div className="bodySmallRegular space-y-3 text-left md:text-right">
              <Link href="/faq" className="bodyMediumRegular block underline text-white">
                FAQ
              </Link>
              <Link href="/contact" className="bodyMediumRegular block underline text-white">
                Contact us
              </Link>
              <Link href="https://www.saveful.com/privacy-policy" className="bodyMediumRegular block underline text-white">
                Privacy Policy
              </Link>
              <Link href="https://www.saveful.com/terms-of-service" className="bodyMediumRegular block underline text-white ">
                Terms of Service
              </Link>
            </div>

            {/* ✅ Social icons UNDER links */}
            <div className="flex gap-6 pt-2">
              <a
                href="https://www.facebook.com/Savefulorg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footerImages/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </a>

              <a
                href="https://www.instagram.com/savefulorg/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footerImages/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>

              <a
                href="https://www.youtube.com/channel/UCkT2gI4t-eKS2Y5yC8tc4UQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/footerImages/youtube.png"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ================= HELPERS ================= */

function SocialIcon({ href, src }: { href: string; src: string }) {
  return (
    <Link href={href} target="_blank">
      <Image src={src} alt="social" width={20} height={20} />
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: (v: boolean) => void;
}) {
  return (
    <Link href={href} onClick={() => onClick(false)}>
      {children}
    </Link>
  );
}
