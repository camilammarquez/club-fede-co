export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="container-fede py-14 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-navy md:text-4xl">{title}</h1>
        <div className="mt-8 space-y-4 font-body text-[15px] leading-relaxed text-navy-dark/75">
          {children}
        </div>
      </div>
    </div>
  );
}
