"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductGalleryCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <div className="relative">
      <div className="relative aspect-square overflow-hidden rounded-3xl">
        <Image src={images[index]} alt={`${alt} - photo ${index + 1}`} fill sizes="400px" className="object-cover" />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(index - 1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-navy shadow-softer hover:bg-white"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => goTo(index + 1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-navy shadow-softer hover:bg-white"
          >
            <ChevronRight size={18} />
          </button>

          <div className="mt-3 flex justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-navy" : "w-2 bg-navy/20"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
