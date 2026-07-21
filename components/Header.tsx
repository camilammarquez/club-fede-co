"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Shop Collars", href: "/#collection" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-cream/90 backdrop-blur-md shadow-softer" : "bg-transparent"}`}>
      <div className="container-fede flex items-center justify-between py-2">
        <Link href="/" className="flex items-center">
          <Image src="/images/club-fede-wordmark.PNG" alt="Club Fede Co." width={720} height={230} className="h-40 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-body text-[15px] font-medium text-navy-dark/80 hover:text-navy transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button aria-label="View cart" className="relative rounded-full p-2.5 text-navy hover:bg-navy/5 transition-colors">
            <ShoppingBag size={20} strokeWidth={2} />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-bead-coral text-[10px] font-bold text-white">0</span>
          </button>
          <Link href="/product/biscayne-blue" className="rounded-full bg-navy px-6 py-2.5 font-display text-sm font-semibold text-cream shadow-soft hover:bg-navy-dark hover:-translate-y-0.5 transition-all">
            Build Yours
          </Link>
        </div>

        <button className="md:hidden rounded-full p-2 text-navy" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-md border-t border-navy/10"
          >
            <div className="container-fede flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 font-display text-base font-medium text-navy-dark border-b border-navy/5">
                  {link.label}
                </Link>
              ))}
              <Link href="/product/biscayne-blue" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-navy px-6 py-3 text-center font-display text-sm font-semibold text-cream">
                Build Yours
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
