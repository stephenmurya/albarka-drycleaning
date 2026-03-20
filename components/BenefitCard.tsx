import type { LucideIcon } from "lucide-react";

type BenefitCardProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export function BenefitCard({
  title,
  description,
  Icon
}: BenefitCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </article>
  );
}
