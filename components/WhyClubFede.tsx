"use client";

import { motion } from "framer-motion";
import { MapPin, Heart, Feather } from "lucide-react";
import BeadStrand from "./ui/BeadStrand";

const cards = [
  {
    icon: MapPin,
    title: "Handmade in Miami",
    body: "Every collar is strung and finished by hand in our Miami studio, not mass produced overseas.",
    bg: "bg-bead-sky/25",
  },
  {
    icon: Heart,
    title: "Personalized for every pet",
    body: "Your pet's name in acrylic letter beads, in a color combination only they wear.",
    bg: "bg-bead-pink/25",
  },
  {
    icon: Feather,
    title: "Premium silicone materials",
    body: "Lightweight, waterproof silicone beads that stay comfortable through every walk and swim.",
    bg: "bg-bead-mint/25",
  },
];

export default function WhyClubFede() {
  return (
    <section className="py-8 md:py-14">
      <div className="container-fede">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-4xl ${card.bg} p-8`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-softer">
                <card.icon size={22} className="text-navy" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-navy">{card.title}</h3>
              <p className="mt-2 font-body text-[15px] leading-relaxed text-navy-dark/70">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <BeadStrand className="mt-14" />
    </section>
  );
}
