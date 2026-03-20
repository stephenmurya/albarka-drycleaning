import { ContactActions } from "@/components/ContactActions";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="content-shell">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 px-6 py-10 text-white shadow-soft sm:px-10 sm:py-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100">
              Albarka Dry Cleaning
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg">
              {description}
            </p>
          </div>
          <ContactActions className="mt-8" inverse />
        </div>
      </div>
    </section>
  );
}
