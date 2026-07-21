const PALETTE = ["bg-bead-sky", "bg-bead-mint", "bg-bead-coral", "bg-bead-pink", "bg-bead-lavender", "bg-bead-butter", "bg-bead-peach", "bg-navy"];

export default function BeadStrand({ count = 24, className = "" }: { count?: number; className?: string }) {
  const beads = Array.from({ length: count }, (_, i) => i);
  const renderBeads = (keyPrefix: string) =>
    beads.map((i) => {
      const color = PALETTE[i % PALETTE.length];
      const size = i % 3 === 0 ? 22 : i % 3 === 1 ? 16 : 12;
      return <span key={`${keyPrefix}-${i}`} className={`bead ${color}`} style={{ width: size, height: size }} />;
    });

  return (
    <div aria-hidden="true" className={`w-full overflow-hidden py-6 ${className}`}>
      <div className="bead-strand w-max animate-marquee motion-reduce:animate-none">
        {renderBeads("a")}
        {renderBeads("b")}
      </div>
    </div>
  );
}
