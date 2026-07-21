import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-poppins", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-dmsans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://clubfedeco.com"),
  title: { default: "Club Fede Co. | Handmade Personalized Pet Collars, Miami", template: "%s | Club Fede Co." },
  description: "Colorful, handmade personalized dog and cat collars made with premium silicone beads. Designed and handcrafted in Miami.",
  keywords: ["personalized dog collar", "personalized cat collar", "silicone bead collar", "handmade pet accessories Miami"],
  openGraph: {
    title: "Club Fede Co. | Handmade just for your best friend.",
    description: "Colorful, handmade personalized dog and cat collars made with premium silicone beads.",
    url: "https://clubfedeco.com",
    siteName: "Club Fede Co.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-cream">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
