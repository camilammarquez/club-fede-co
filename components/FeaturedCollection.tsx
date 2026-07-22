"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/lib/data";
import CollarPreview from "@/components/CollarPreview";

export default function FeaturedCollection() {
  const [live, ...comingSoon] = collections;

  return (
    <section id="collection" className="py-8 md:py-14">
      <div className="container-fede">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/50">Current collection</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">Shop the launch color</h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <Link
            href={`/product/${live.slug}`}
            className="group grid grid-cols-1 overflow-hidden rounded-5xl bg-white shadow-card md:grid-cols-2"
          >
            <div className="relative aspect-[4/3] p-8 md:aspect-auto">
              <CollarPreview colors={["Sky Blue", "Mint", "Coral"]} petName="YOUR PET" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className={`inline-flex w-fit items-center rounded-full ${live.accent} px-4 py-1 font-body text-xs font-semibold text-navy`}>
                Available now
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-navy">{live.name}</h3>
              <p className="mt-2 max-w-sm font-body text-navy-dark/70">{live.description}</p>
              <span className="mt-6 inline-flex items-center gap-1 font-display text-sm font-semibold text-navy">
                Start customizing
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </motion.div>

        <p className="mt-14 font-body text-sm font-medium uppercase tracking-wide text-navy/50">Coming soon</p>
        <div className="mt-5 flex flex-wrap justify-center gap-6">
          {comingSoon.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative w-full max-w-[280px] overflow-hidden rounded-3xl transition-transform duration-300 hover:scale-105"
            >
              <div className="relative aspect-square">
                <Image
                  src={c.image}
                  alt={`${c.name} preview, coming soon`}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="font-display text-sm font-semibold text-white">{c.name}</p>
                <p className="font-body text-[11px] text-white/80">Coming soon</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
