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

  const galleryImages = [
    collection.image,
    "/images/simba-collar.PNG",
    "/images/nala-collar.JPG",
    "/images/dog-pack-collars.JPG",
  ];

  return (
    <div className="container-fede py-10 md:py-16">
      <ProductConfigurator collection={collection} galleryImages={galleryImages} />
    </div>
  );
}
