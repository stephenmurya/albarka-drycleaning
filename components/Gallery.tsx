import Image from "next/image";
import type { SiteImage } from "@/lib/site";
import { cn } from "@/lib/utils";

type GalleryProps = {
  items: SiteImage[];
  featured?: boolean;
};

export function Gallery({ items, featured = false }: GalleryProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <figure
          key={`${item.title}-${index}`}
          className={cn(
            "overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm",
            featured && index === 0 && "sm:col-span-2"
          )}
        >
          <div
            className={cn(
              "relative overflow-hidden bg-slate-100",
              featured && index === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes={
                featured && index === 0
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
            />
          </div>
          <figcaption className="space-y-2 p-5">
            <p className="font-semibold text-slate-900">{item.title}</p>
            <p className="text-sm leading-6 text-slate-600">{item.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
