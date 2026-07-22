"use client";

import { useMemo } from "react";
import { beadColors } from "@/lib/data";

const hexByName: Record<string, string> = Object.fromEntries(
  beadColors.map((c) => [c.name, c.hex])
);

type Bead =
  | { kind: "color"; hex: string; size: number }
  | { kind: "letter"; char: string };

export default function CollarPreview({
  colors,
  petName,
}: {
  colors: string[];
  petName: string;
}) {
  const beads: Bead[] = useMemo(() => {
    const name = (petName || "YOUR PET").toUpperCase().slice(0, 12);
    const lettersInOrder: Bead[] = name.split("").map((char) => ({ kind: "letter", char }));
    const letters: Bead[] = [...lettersInOrder].reverse();

    const colorPalette = colors.length > 0 ? colors : [beadColors[0].name];
    const colorCount = 18;
    const colorBeads: Bead[] = Array.from({ length: colorCount }, (_, i) => {
      const name = colorPalette[i % colorPalette.length];
      const size = i % 3 === 0 ? 20 : i % 3 === 1 ? 16 : 14;
      return { kind: "color", hex: hexByName[name] || "#1C2EA4", size };
    });

    const half = Math.floor(colorBeads.length / 2);
    return [...colorBeads.slice(0, half), ...letters, ...colorBeads.slice(half)];
  }, [colors, petName]);

  const total = beads.length;
  const gapDegrees = 14;
  const usableDegrees = 360 - gapDegrees;
  const startDegrees = -90 + gapDegrees / 2;
  const radius = 118;
  const center = 150;

  const round = (n: number) => Math.round(n * 1000) / 1000;

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-4xl">
      <svg viewBox="0 0 300 300" className="h-full w-full">
        <rect x="138" y="18" width="24" height="34" rx="10" fill="#2B2B2B" />

        {beads.map((bead, i) => {
          const angle = startDegrees + (usableDegrees * i) / (total - 1);
          const rad = (angle * Math.PI) / 180;
          const x = round(center + radius * Math.cos(rad));
          const y = round(center + radius * Math.sin(rad));

          if (bead.kind === "letter") {
            return (
              <g key={i} transform={`translate(${x}, ${y})`}>
                <rect x={-9} y={-9} width={18} height={18} rx={4} fill="white" stroke="#1C2EA4" strokeWidth="1.5" />
                <text
                  x={0}
                  y={1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="#1C2EA4"
                  fontFamily="var(--font-display)"
                >
                  {bead.char}
                </text>
              </g>
            );
          }

          return <circle key={i} cx={x} cy={y} r={bead.size / 2} fill={bead.hex} />;
        })}
      </svg>
    </div>
  );
}
