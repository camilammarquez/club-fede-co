"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Ruler } from "lucide-react";
import { beadColors, sizes, type Collection } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CollarPreview from "@/components/CollarPreview";
import ProductGalleryCarousel from "@/components/ProductGalleryCarousel";

const sizePrices: Record<string, number> = {
  XS: 16,
  "S/M": 19,
  "L/XL": 21,
};

const sizeGuideRows = [
  { label: "XS", in: "8\" – 11\"", cm: "20 – 28 cm", breeds: "Chihuahuas, Yorkies, Papillons, toy breeds, cats", maxIn: 11 },
  { label: "S/M", in: "11\" – 17\"", cm: "28 – 43 cm", breeds: "French Bulldogs, Pugs, Corgis, Border Collies, Cocker Spaniels", maxIn: 17 },
  { label: "L/XL", in: "17\" – 24\"", cm: "43 – 60 cm", breeds: "Labradors, Golden Retrievers, German Shepherds, Great Danes", maxIn: Infinity },
];

function recommendSize(valueIn: number) {
  return sizeGuideRows.find((row) => valueIn < row.maxIn)?.label ?? "L/XL";
}

function SizingGuide() {
  const [unit, setUnit] = useState<"in" | "cm">("in");
  return (
    <div>
      <p>
        XS uses 12mm beads and fits kittens and toy breeds. S/M and L/XL use 15mm beads for small through extra-large dogs.
      </p>
      <div className="mt-3 inline-flex rounded-full border border-navy/15 p-0.5">
        <button
          onClick={() => setUnit("in")}
          aria-pressed={unit === "in"}
          className={`rounded-full px-3 py-1 font-body text-xs font-semibold transition-colors ${unit === "in" ? "bg-navy text-cream" : "text-navy"}`}
        >
          Inches
        </button>
        <button
          onClick={() => setUnit("cm")}
          aria-pressed={unit === "cm"}
          className={`rounded-full px-3 py-1 font-body text-xs font-semibold transition-colors ${unit === "cm" ? "bg-navy text-cream" : "text-navy"}`}
        >
          Centimeters
        </button>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-navy/10">
        {sizeGuideRows.map((row, i) => (
          <div key={row.label} className={`flex flex-col gap-1 p-3 sm:flex-row sm:items-center sm:gap-4 ${i !== 0 ? "border-t border-navy/10" : ""}`}>
            <span className="w-14 shrink-0 font-display text-sm font-semibold text-navy">{row.label}</span>
            <span className="w-32 shrink-0 font-body text-xs font-medium text-navy-dark/70">{unit === "in" ? row.in : row.cm}</span>
            <span className="font-body text-xs text-navy-dark/50">{row.breeds}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-start gap-3 rounded-2xl bg-cream p-4">
        <Ruler size={20} className="mt-0.5 shrink-0 text-navy" />
        <div>
          <p className="font-display text-sm font-semibold text-navy">How to measure your pet&apos;s neck</p>
          <ol className="mt-2 list-decimal space-y-2 pl-4 text-navy-dark/70">
            <li>Wrap a soft measuring tape (or a piece of string, then measure the string against a ruler) around the base of your pet&apos;s neck, where a collar naturally sits.</li>
            <li>Keep the tape snug but not tight; you should be able to slip two fingers underneath it comfortably.</li>
            <li>Note the measurement and enter it below — we&apos;ll pick the right size automatically.</li>
            <li>If your pet is between two sizes, size up for comfort, especially for growing puppies or kittens.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default function ProductConfigurator({
  collection,
  galleryImages,
}: {
  collection: Collection;
  galleryImages: string[];
}) {
  const { addItem } = useCart();
  const [selectedColors, setSelectedColors] = useState<string[]>([beadColors[0].name]);
  const [size, setSize] = useState(sizes[1].label);
  const [sizeAutoSet, setSizeAutoSet] = useState(false);
  const [petName, setPetName] = useState("");
  const [neckSize, setNeckSize] = useState("");
  const [neckUnit, setNeckUnit] = useState<"in" | "cm">("in");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const unitPrice = sizePrices[size] ?? sizePrices["S/M"];
  const total = useMemo(() => (unitPrice * quantity).toFixed(2), [unitPrice, quantity]);

  useEffect(() => {
    const parsed = parseFloat(neckSize);
    if (Number.isNaN(parsed) || parsed <= 0) {
      setSizeAutoSet(false);
      return;
    }
    const valueIn = neckUnit === "cm" ? parsed / 2.54 : parsed;
    setSize(recommendSize(valueIn));
    setSizeAutoSet(true);
  }, [neckSize, neckUnit]);

  const toggleColor = (name: string) => {
    setSelectedColors((prev) => {
      if (prev.includes(name)) {
        return prev.length === 1 ? prev : prev.filter((c) => c !== name);
      }
      return prev.length >= 3 ? [...prev.slice(1), name] : [...prev, name];
    });
  };

  const handleAddToCart = () => {
    addItem({
      collectionName: collection.name,
      collectionSlug: collection.slug,
      colors: selectedColors,
      size,
      petName,
      neckSize: neckSize ? neckSize : undefined,
      neckUnit,
      quantity,
      price: unitPrice,
      image: collection.image,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div>
        <CollarPreview colors={selectedColors} petName={petName} />
        <p className="mt-2 text-center font-body text-xs text-navy-dark/50">Live preview — updates as you customize</p>

        <div className="mt-6">
          <p className="mb-3 font-body text-sm font-semibold text-navy">Real collars, real pets</p>
          <ProductGalleryCarousel images={galleryImages} alt={`${collection.name} collar`} />
        </div>
      </div>

      <div>
        <span className={`inline-flex w-fit items-center rounded-full ${collection.accent} px-4 py-1 font-body text-xs font-semibold text-navy`}>
          {collection.status === "available" ? "Available now" : "Coming soon"}
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-navy md:text-4xl">{collection.name} Collar</h1>
        <p className="mt-2 font-body text-navy-dark/70">{collection.description}</p>
        <p className="mt-5 font-display text-2xl font-semibold text-navy">${unitPrice.toFixed(2)}</p>

        <div className="mt-8">
          <p className="font-body text-sm font-semibold text-navy">
            Bead colors <span className="font-normal text-navy-dark/50">— choose up to 3</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {beadColors.map((color) => {
              const isSelected = selectedColors.includes(color.name);
              return (
                <button
                  key={color.name}
                  onClick={() => toggleColor(color.name)}
                  aria-pressed={isSelected}
                  aria-label={color.name}
                  title={color.name}
                  className={`relative h-11 w-11 rounded-full ${color.swatchClass} transition-transform duration-200 ${
                    isSelected ? "ring-2 ring-navy ring-offset-2 ring-offset-cream scale-105" : "hover:scale-105"
                  }`}
                />
              );
            })}
          </div>
          <p className="mt-2 font-body text-xs text-navy-dark/50">
            Selected: {selectedColors.join(", ")}
          </p>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <p className="font-body text-sm font-semibold text-navy">Size</p>
            {sizeAutoSet && (
              <span className="font-body text-xs font-medium text-navy/60">Auto-selected from neck size</span>
            )}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {sizes.map((s) => {
              const isSelected = size === s.label;
              return (
                <button
                  key={s.label}
                  onClick={() => {
                    setSize(s.label);
                    setSizeAutoSet(false);
                  }}
                  aria-pressed={isSelected}
                  className={`rounded-2xl border-2 px-4 py-3 text-left transition-colors duration-200 ${
                    isSelected ? "border-navy bg-navy text-cream" : "border-navy/15 text-navy hover:border-navy/40"
                  }`}
                >
                  <span className="block font-display text-sm font-semibold">{s.label}</span>
                  <span className={`block font-body text-[11px] ${isSelected ? "text-cream/70" : "text-navy-dark/50"}`}>
                    ${sizePrices[s.label]?.toFixed(2)}
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-2 font-body text-xs text-navy-dark/50">
            {sizes.find((s) => s.label === size)?.detail}
          </p>
        </div>

        <div className="mt-8">
          <p className="font-body text-sm font-semibold text-navy">
            Neck measurement <span className="font-normal text-navy-dark/50">(optional, for a precise fit)</span>
          </p>
          <div className="mt-3 flex items-center gap-3">
            <input
              type="number"
              min="0"
              step="0.1"
              inputMode="decimal"
              value={neckSize}
              onChange={(e) => setNeckSize(e.target.value)}
              placeholder={neckUnit === "in" ? "e.g. 13" : "e.g. 33"}
              className="w-32 rounded-2xl border-2 border-navy/15 bg-white px-4 py-3 font-body text-navy placeholder:text-navy-dark/30 focus:border-navy"
            />
            <div className="inline-flex rounded-full border border-navy/15 p-0.5">
              <button
                onClick={() => setNeckUnit("in")}
                aria-pressed={neckUnit === "in"}
                className={`rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-colors ${neckUnit === "in" ? "bg-navy text-cream" : "text-navy"}`}
              >
                in
              </button>
              <button
                onClick={() => setNeckUnit("cm")}
                aria-pressed={neckUnit === "cm"}
                className={`rounded-full px-3 py-1.5 font-body text-xs font-semibold transition-colors ${neckUnit === "cm" ? "bg-navy text-cream" : "text-navy"}`}
              >
                cm
              </button>
            </div>
          </div>
          <p className="mt-2 font-body text-xs text-navy-dark/50">
            Enter the exact neck size and we&apos;ll automatically select the right size above, and make your collar to fit perfectly.
          </p>
        </div>

        <div className="mt-8">
          <label htmlFor="pet-name" className="font-body text-sm font-semibold text-navy">
            Pet&apos;s name
          </label>
          <input
            id="pet-name"
            type="text"
            maxLength={12}
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            placeholder="e.g. Federico"
            className="mt-3 w-full rounded-2xl border-2 border-navy/15 bg-white px-4 py-3 font-body text-navy placeholder:text-navy-dark/30 focus:border-navy"
          />
          <p className="mt-2 font-body text-xs text-navy-dark/50">Up to 12 letters, shown exactly as typed.</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-full border-2 border-navy/15">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="p-3 text-navy hover:bg-navy/5 rounded-l-full"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-display text-sm font-semibold text-navy">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => Math.min(10, q + 1))}
              aria-label="Increase quantity"
              className="p-3 text-navy hover:bg-navy/5 rounded-r-full"
            >
              <Plus size={16} />
            </button>
          </div>

          <Button onClick={handleAddToCart} variant="primary" className="flex-1 sm:flex-none">
            <ShoppingBag size={18} />
            {added ? "Added to cart" : `Add to cart — $${total}`}
          </Button>
        </div>

        {added && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 font-body text-sm font-medium text-navy"
          >
            {petName || "Your collar"} was added to your cart{neckSize ? ` — neck size ${neckSize}${neckUnit}` : ""}.
          </motion.p>
        )}

        <div className="mt-12">
          <Accordion
            items={[
              { title: "Materials", content: "Premium, lightweight silicone beads on a nylon-coated cord, with personalized acrylic letter beads for the name." },
              { title: "Sizing", content: <SizingGuide /> },
              { title: "Shipping", content: "Handmade to order in Miami. Allow 3-5 business days to craft your collar, then 2-4 business days for domestic delivery." },
              { title: "Care", content: "Wipe clean with a damp cloth. Silicone beads are waterproof and safe for swimming, but remove before machine washing your pet's bedding." },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
