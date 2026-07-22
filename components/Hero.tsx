"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-fede grid grid-cols-1 items-center gap-12 py-4 md:grid-cols-2 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-bead-butter/40 px-4 py-1.5 font-body text-sm font-medium text-navy">
            <Sparkles size={14} /> Handmade in Miami
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-navy md:text-6xl">
            Handmade just for your best friend.
          </h1>
          <p className="mt-5 max-w-md font-body text-lg text-navy-dark/70">
            Colorful personalized collars for dogs & cats, hand-strung with premium silicone beads.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/product/biscayne-blue" variant="primary">
              <ShoppingBag size={18} /> Shop Now
            </Button>
            <Button href="/product/biscayne-blue" variant="secondary">
              Build Yours
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-4xl shadow-card md:aspect-square">
            <Image
              src="/images/dog-pack-collars.JPG"
              alt="Three dogs wearing colorful Club Fede Co. silicone bead collars"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden animate-float rounded-full bg-white px-5 py-3 font-display text-sm font-semibold text-navy shadow-soft md:block">
            Made to order
          </div>
        </motion.div>
      </div>
    </section>
  );
}
