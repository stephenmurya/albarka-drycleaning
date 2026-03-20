import Image from 'next/image';

export default function Hero({
  title,
  subtitle,
  cta1,
  cta2,
  image
}: {
  title: string;
  subtitle: string;
  cta1: { label: string; href: string };
  cta2?: { label: string; href: string };
  image: { src: string; alt: string };
}) {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:gap-8 sm:px-6">
        <div className="w-full sm:w-1/2">
          <p className="rounded-full bg-brand.offwhite px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand.green">
            Albarka in Katsina
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={cta1.href}
              className="rounded-lg bg-brand.green px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
            >
              {cta1.label}
            </a>
            {cta2 && (
              <a
                href={cta2.href}
                className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-gray-50"
              >
                {cta2.label}
              </a>
            )}
          </div>
        </div>
        <div className="relative h-64 w-full sm:w-1/2 sm:h-80">
          <Image src={image.src} alt={image.alt} fill className="rounded-2xl object-cover shadow-lg" sizes="(max-width: 640px) 100vw, 50vw" />
        </div>
      </div>
    </section>
  );
}
