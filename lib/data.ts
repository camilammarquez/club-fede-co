// Central content/data layer.
// Structured so each shape maps cleanly onto a future Shopify Storefront API
// response (product -> Product, variant -> size/color options, etc).

export type BeadColor = {
  name: string;
  hex: string;
  swatchClass: string;
};

export const beadColors: BeadColor[] = [
  { name: "Sky Blue", hex: "#7FD1E0", swatchClass: "bg-bead-sky" },
  { name: "Mint", hex: "#9FE3C8", swatchClass: "bg-bead-mint" },
  { name: "Coral", hex: "#FF8A6B", swatchClass: "bg-bead-coral" },
  { name: "Hot Pink", hex: "#FF6FA0", swatchClass: "bg-bead-pink" },
  { name: "Lavender", hex: "#C6B6EE", swatchClass: "bg-bead-lavender" },
  { name: "Butter Yellow", hex: "#FFDE8A", swatchClass: "bg-bead-butter" },
  { name: "Peach", hex: "#FFC49B", swatchClass: "bg-bead-peach" },
  { name: "Navy", hex: "#1C2EA4", swatchClass: "bg-navy" },
];

export type Size = {
  label: string;
  detail: string;
  beadSize: string;
};

export const sizes: Size[] = [
  { label: "XS", detail: "Perfect for kittens & toy breeds", beadSize: "12mm beads" },
  { label: "S/M", detail: "Small & medium breeds", beadSize: "15mm beads" },
  { label: "L/XL", detail: "Large & extra large breeds", beadSize: "15mm beads" },
];

export type Collection = {
  slug: string;
  name: string;
  description: string;
  status: "available" | "coming-soon";
  image: string;
  accent: string;
};

export const collections: Collection[] = [
  {
    slug: "biscayne-blue",
    name: "Build Your Own Collar",
    description: "Pick your colors, add a name, and we'll hand-make it in Miami.",
    status: "available",
    image: "/images/Blue-collar-example.PNG",
    accent: "bg-bead-sky",
  },
  {
    slug: "palm-green",
    name: "Palm Green",
    description: "Lush mint and butter yellow, palm-shaded and playful.",
    status: "coming-soon",
    image: "/images/milo-collar.PNG",
    accent: "bg-bead-mint",
  },
  {
    slug: "sunset-coral",
    name: "Sunset Coral",
    description: "Warm coral and peach, golden hour on South Beach.",
    status: "coming-soon",
    image: "/images/bella-collar.PNG",
    accent: "bg-bead-coral",
  },
  {
    slug: "lemon-sorbet",
    name: "Lemon Sorbet",
    description: "Butter yellow and cream, sweet and sunny.",
    status: "coming-soon",
    image: "/images/luna-collar.PNG",
    accent: "bg-bead-butter",
  },
];

export const reviews = [
  {
    name: "Simba",
    quote: "The clasp calmed my nerves more than any collar I've bought. It genuinely looks handmade, not printed.",
    image: "/images/simba-collar.PNG",
    rating: 5,
  },
  {
    name: "Nala",
    quote: "First collar Nala hasn't tried to scratch off. The beads sit so lightly she forgets it's there.",
    image: "/images/nala-collar.JPG",
    rating: 5,
  },
  {
    name: "Tucker, Golden Retriever",
    quote: "Compliments every single walk. Ordered a second one in Pink Flamingo the day it drops.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop",
    rating: 5,
  },
  {
    name: "The pack",
    quote: "Matching sets for two very different personalities. Somehow both fit perfectly.",
    image: "/images/dog-pack-collars.JPG",
    rating: 5,
  },
];

export const galleryImages = [
  "/images/simba-collar.PNG",
  "/images/nala-collar.JPG",
  "/images/dog-pack-collars.JPG",
];

export const faqs = [
  {
    q: "How do I find the right size?",
    a: "XS fits kittens and toy breeds with 12mm beads. S/M and L/XL use 15mm beads for small through extra-large dogs. Measure your pet's current collar or neck circumference and add half an inch for comfort. If you're between sizes, size up.",
  },
  {
    q: "How long does shipping take?",
    a: "Every collar is handmade to order in Miami, so please allow 3-5 business days to craft yours before it ships. Domestic orders arrive within 2-4 business days after that.",
  },
  {
    q: "What's your returns policy?",
    a: "Because each collar is personalized with your pet's name, we can't accept returns on custom pieces. If yours arrives with a defect or the wrong size, email us within 14 days and we'll make it right.",
  },
  {
    q: "Can I fully customize the color combination?",
    a: "Yes. Mix any of our silicone bead colors and pair them with acrylic letter beads to spell your pet's name. Use the color picker on the product page to preview your combination before you order.",
  },
  {
    q: "What are the collars made from?",
    a: "Premium, lightweight silicone beads strung on a durable nylon-coated cord, finished with a personalized acrylic name and a certified safety breakaway clasp.",
  },
  {
    q: "What is a breakaway clasp and why does it matter?",
    a: "It's a safety buckle that pops open under sudden pressure, so your pet can't get caught or choked if the collar snags on something. Every Club Fede collar includes one standard.",
  },
];
