"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-fede">
        <div className="text-center">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/50">Club Fede family</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">Real pets, real color</h2>
        </div>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 md:columns-4 [&>div]:mb-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="break-inside-avoid overflow-hidden rounded-3xl"
            >
              <div className="relative w-full" style={{ aspectRatio: i % 3 === 0 ? "3/4" : "1/1" }}>
                <Image
                  src={src}
                  alt="A happy Club Fede Co. customer pet wearing a colorful personalized collar"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
