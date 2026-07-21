import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { collections } from "@/lib/data";
import ProductConfigurator from "@/components/ProductConfigurator";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) return {};
  return {
    title: `${collection.name} Collar`,
    description: collection.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);
  if (!collection) notFound();

  const galleryShots = [
    collection.image,
    "/images/simba-collar.PNG",
    "/images/nala-collar.JPG",
  ];

  return (
    <div className="container-fede py-10 md:py-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-4xl shadow-card">
            <Image
              src={galleryShots[0]}
              alt={`${collection.name} collar, full lifestyle shot`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {galleryShots.slice(1).map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-3xl">
                <Image src={src} alt={`${collection.name} collar, detail shot`} fill sizes="300px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <ProductConfigurator collection={collection} />
      </div>
    </div>
  );
}
