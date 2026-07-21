import Link from "next/link";
import Image from "next/image";
import { Camera, Music, Mail } from "lucide-react";
import BeadStrand from "./ui/BeadStrand";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream pt-4">
      <BeadStrand count={20} />
      <div className="container-fede grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/images/club-fede-wordmark.PNG"
            alt="Club Fede Co."
            width={220}
            height={70}
            className="h-40 w-auto brightness-0 invert"
          />
          <p className="mt-3 max-w-[220px] font-body text-sm text-cream/70">Handmade pet accessories, personalized in Miami with love.</p>
          <div className="mt-5 flex gap-3">
            <a href="https://instagram.com" aria-label="Club Fede Co. on Instagram" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20 transition-colors"><Camera size={18} /></a>
            <a href="https://tiktok.com" aria-label="Club Fede Co. on TikTok" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20 transition-colors"><Music size={18} /></a>
            <a href="mailto:hello@clubfedeco.com" aria-label="Email Club Fede Co." className="rounded-full bg-white/10 p-2.5 hover:bg-white/20 transition-colors"><Mail size={18} /></a>
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-cream/50">Shop</p>
          <ul className="mt-4 space-y-3 font-body text-sm text-cream/80">
            <li><Link href="/product/biscayne-blue" className="hover:text-cream">Dog Collars</Link></li>
            <li><Link href="/product/biscayne-blue" className="hover:text-cream">Cat Collars</Link></li>
            <li><Link href="/#collection" className="hover:text-cream">Collections</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-cream/50">Company</p>
          <ul className="mt-4 space-y-3 font-body text-sm text-cream/80">
            <li><Link href="/about" className="hover:text-cream">About Us</Link></li>
            <li><Link href="/#faq" className="hover:text-cream">FAQ</Link></li>
            <li><Link href="mailto:hello@clubfedeco.com" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-cream/50">Legal</p>
          <ul className="mt-4 space-y-3 font-body text-sm text-cream/80">
            <li><Link href="/privacy" className="hover:text-cream">Privacy</Link></li>
            <li><Link href="/shipping" className="hover:text-cream">Shipping</Link></li>
            <li><Link href="/terms" className="hover:text-cream">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <p className="container-fede font-body text-xs text-cream/50">© {new Date().getFullYear()} Club Fede Co. Handmade in Miami, FL.</p>
      </div>
    </footer>
  );
}
