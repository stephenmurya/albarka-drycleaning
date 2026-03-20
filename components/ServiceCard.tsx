import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  note?: string;
};

export function ServiceCard({
  title,
  description,
  Icon,
  note
}: ServiceCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
      {note ? (
        <p className="mt-4 text-sm font-medium text-amber-700">{note}</p>
      ) : null}
    </article>
  );
}
