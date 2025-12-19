import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* LEFT */}
        <div>
          {/* Logo + badge */}
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/footerImages/SavefulFooter.png"
              alt="Saveful"
              width={240}
              height={40}
            />
          </div>

          {/* Awards */}
          <div className="flex gap-6 mb-8">
            <Image
              src="/footerImages/GoodDesign.png"
              alt="Good Design Award"
              width={150}
              height={40}
            />
            <Image
              src="/footerImages/PremiersAward.png"
              alt="Victorian Premier Award"
              width={150}
              height={40}
            />
          </div>

          {/* Store buttons */}
          <div className="flex gap-4">
            <Image
              src="/images/appstore.png"
              alt="Download on App Store"
              width={140}
              height={46}
            />
            <Image
              src="/images/googleplay.png"
              alt="Get it on Google Play"
              width={140}
              height={46}
            />
          </div>
        </div>

        {/* CENTER LINKS */}
        <div />

        {/* RIGHT SOCIAL */}
        <div className="flex flex-col items-start md:items-end space-y-8 text-white">
          {/* Links (moved from center) */}
          <div className="bodySmallRegular space-y-3 text-left md:text-left text-white">
            <Link href="/faq" className="block underline">
              FAQ
            </Link>
            <Link href="/contact" className="block underline">
              Contact us
            </Link>
            <Link href="/privacy-policy" className="block underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block underline">
              Terms of service
            </Link>
          </div>

          {/* Social buttons*/}
          <div className="flex gap-6 ">
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
  );
}
