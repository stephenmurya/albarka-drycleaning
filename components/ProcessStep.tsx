import Image from "next/image";
import type { SiteImage } from "@/lib/site";

type ProcessStepProps = {
  index: number;
  title: string;
  description: string;
  image: SiteImage;
};

export function ProcessStep({
  index,
  title,
  description,
  image
}: ProcessStepProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-emerald-700 shadow-sm">
          {index}
        </div>
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
