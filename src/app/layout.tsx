import type { Metadata } from "next";
import Link from "next/link";
import "../../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";


export const metadata: Metadata = {
  title: "Saveful",
  description: "Save food. Save money.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {/* <main className="pt-[148px]">{children}</main> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
