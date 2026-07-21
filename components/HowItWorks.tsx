"use client";

import { motion } from "framer-motion";
import { Palette, PenLine, Scissors, PackageCheck } from "lucide-react";

const steps = [
  { icon: Palette, title: "Choose your colors", body: "Pick from 7 silicone bead colors and mix your own combination." },
  { icon: PenLine, title: "Add your pet's name", body: "Personalized acrylic letter beads, spelled exactly how you want." },
  { icon: Scissors, title: "We handcraft your collar", body: "Strung, measured, and finished by hand in our Miami studio." },
  { icon: PackageCheck, title: "Delivered with love", body: "Carefully packed and shipped straight to your door." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="container-fede">
        <div className="text-center">
          <p className="font-body text-sm font-medium uppercase tracking-wide text-navy/50">How it works</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">From studio to collar in four steps</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cream shadow-softer">
                <step.icon size={26} className="text-navy" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-navy-dark/70">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
