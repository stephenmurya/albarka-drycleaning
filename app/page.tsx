import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3, MapPin, ShieldCheck } from "lucide-react";
import { BenefitCard } from "@/components/BenefitCard";
import { CTASection } from "@/components/CTASection";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import {
  benefits,
  business,
  galleryImages,
  homeHighlights,
  siteImages,
  teaserServices
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Home"
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Trusted Laundry & Dry Cleaning in Katsina"
        title="Albarka Dry Cleaning"
        description="Warm, reliable laundry and dry cleaning service for Katsina families, professionals, and cherished traditional garments. From babban riga and atamfa to shirts, suits, bedding, and everyday wear, Albarka brings careful handling and spotless finishing to your wardrobe."
        highlight={business.areaLabel}
        pills={homeHighlights}
        details={[
          {
            label: "Find us",
            value: business.addressLine,
            Icon: MapPin
          },
          {
            label: "Opening hours",
            value: business.hoursDisplay,
            Icon: Clock3
          },
          {
            label: "Why locals choose us",
            value: "Careful garment handling with extra respect for traditional wear.",
            Icon: ShieldCheck
          }
        ]}
        image={siteImages.homeHero}
        priority
      />

      <section className="section-space">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="What We Do"
            title="Everyday laundry help and special garment care in one trusted neighborhood shop"
            description="Albarka is built for real Katsina routines: work clothes, school uniforms, prayer wear, family events, and treasured fabrics that need gentle handling."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {teaserServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.icon}
              />
            ))}
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section-space bg-slate-50/80">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Professional finishing with the steady, respectful service neighbors appreciate"
            description="We designed the site voice and service story around what matters most for a trusted local laundry brand in Katsina: cleanliness, care, affordability, and consistency."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <BenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                Icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Authentic Gallery"
            title="Representative visuals centered on Black and African garment care moments"
            description="The gallery keeps the site visually aligned with Katsina customers by using only Black and African subjects in professional, household, and clothing-care scenes."
          />
          <Gallery items={galleryImages} featured />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="content-shell">
          <div className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[1fr_0.8fr] lg:p-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Visit Albarka
              </p>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Your trusted spot on Dorowa Road for fresh, well-finished clothes
              </h2>
              <p className="text-base leading-7 text-slate-600 sm:text-lg">
                Need your clothes ready for work, Juma&apos;ah, school, travel, or a
                family occasion? Albarka Dry Cleaning is positioned to feel
                dependable, approachable, and firmly local.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-slate-50 p-6">
              <div className="space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
                <p>
                  <span className="font-semibold text-slate-900">Address:</span>{" "}
                  {business.addressLine}
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Hours:</span>{" "}
                  {business.hoursDisplay}
                </p>
                <Link
                  href={business.directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                  Open Google Maps
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Get Your Clothes Blessed with Cleanliness Today"
        description="Call or WhatsApp Albarka Dry Cleaning now for dependable cleaning, careful pressing, and trusted garment care in Katsina."
      />
    </>
  );
}
