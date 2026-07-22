import Image from "next/image";
import type { Metadata } from "next";
import BeadStrand from "@/components/ui/BeadStrand";

export const metadata: Metadata = {
  title: "About Us",
  description: "The story behind Club Fede Co., a handmade pet accessories brand from Miami, inspired by our dog Federico.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="container-fede py-10 md:py-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/50">Our story</p>
            <h1 className="mt-2 font-display text-3xl font-bold text-navy md:text-5xl">
              Started for one dog. Made for every pet.
            </h1>
            <p className="mt-6 font-body text-lg leading-relaxed text-navy-dark/70">
              Club Fede Co. started in Miami, named after our dog, Federico.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-navy-dark/70">
              After searching for a collar that felt as special as he was, and coming up short, we started
              making them ourselves: premium silicone beads, hand-strung, personalized with his name. What began
              as one collar for one dog became Club Fede Co., colorful, personalized accessories that celebrate
              every pet&apos;s personality.
            </p>
            <p className="mt-4 font-body text-lg leading-relaxed text-navy-dark/70">
              Every piece is still handmade with love, right here in Miami.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-5xl shadow-card">
            <Image
              src="/images/federico-neck-collar.jpeg"
              alt="Federico, the dog who inspired Club Fede Co., wearing his colorful silicone bead collar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <BeadStrand />

      <div className="bg-white py-16 md:py-24">
        <div className="container-fede grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {[
            { label: "Handmade", value: "100%" },
            { label: "Based in", value: "Miami, FL" },
            { label: "Bead colors", value: "7+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold text-navy md:text-4xl">{stat.value}</p>
              <p className="mt-1 font-body text-sm text-navy-dark/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
