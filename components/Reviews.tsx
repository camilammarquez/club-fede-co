"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-fede">
        <div className="text-center">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/50">Loved by pets & their people</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">What the pack is saying</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-4xl bg-cream shadow-softer"
            >
              <div className="relative aspect-[4/3]">
                <Image src={r.image} alt={`${r.name} wearing a Club Fede Co. collar`} fill sizes="280px" className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex gap-0.5 text-bead-butter">
                  {Array.from({ length: r.rating }).map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-3 font-body text-sm leading-relaxed text-navy-dark/80">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-4 font-display text-sm font-semibold text-navy">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
