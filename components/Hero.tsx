import Image from "next/image";
import { Sparkles, type LucideIcon } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";
import type { SiteImage } from "@/lib/site";

type HeroDetail = {
  label: string;
  value: string;
  Icon: LucideIcon;
};

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlight?: string;
  pills?: string[];
  details?: HeroDetail[];
  image: SiteImage;
  priority?: boolean;
};

export function Hero({
  eyebrow,
  title,
  description,
  highlight,
  pills,
  details,
  image,
  priority = false
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-emerald-50/80 via-white to-white">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_58%)]" />
      <div className="content-shell section-space relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            {highlight ? (
              <div className="inline-flex rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                {highlight}
              </div>
            ) : null}
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                {eyebrow}
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>

            <ContactActions large />

            {pills?.length ? (
              <div className="flex flex-wrap gap-3">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            ) : null}

            {details?.length ? (
              <div className="grid gap-4 sm:grid-cols-3">
                {details.map(({ label, value, Icon }) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-semibold text-slate-900">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-100/70 via-emerald-50 to-white blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={priority}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
              </div>
              <div className="flex items-start justify-between gap-4 px-2 pt-4">
                <div className="space-y-1">
                  <p className="font-semibold text-slate-900">{image.title}</p>
                  <p className="text-sm leading-6 text-slate-600">{image.caption}</p>
                </div>
                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 sm:inline-flex">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
