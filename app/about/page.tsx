import type { Metadata } from "next";
import Image from "next/image";
import { Clock3, MapPin, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { aboutValues, business, siteImages, teamMembers } from "@/lib/site";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Albarka"
        title="A reliable local laundry service shaped for Katsina families and professionals"
        description="Albarka Dry Cleaning is your reliable local laundry and dry cleaning service at Kabren, Dorowa Road, Katsina. We provide professional care for all your garments - from everyday clothes to cherished traditional wear - delivering spotless results with the blessing of quality and trust to the Katsina community."
        highlight="Warm, trustworthy, community-oriented care"
        pills={[
          "Local neighborhood service",
          "Traditional wear handled with care",
          "Professional finishing for daily confidence"
        ]}
        details={[
          {
            label: "Our location",
            value: business.addressLine,
            Icon: MapPin
          },
          {
            label: "Working hours",
            value: business.hoursDisplay,
            Icon: Clock3
          },
          {
            label: "Our standard",
            value: "Spotless results paired with steady, respectful service.",
            Icon: ShieldCheck
          }
        ]}
        image={siteImages.aboutHero}
      />

      <section className="section-space">
        <div className="content-shell grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Our Approach"
              title="A brand story that feels familiar, modest, and dependable for Northern customers"
              description="The website tone and content were crafted around Albarka as a trusted neighborhood business rather than a flashy startup. That means calm language, useful service detail, and an emphasis on care for fabrics people genuinely value."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {aboutValues.map((value) => (
                <ServiceCard
                  key={value.title}
                  title={value.title}
                  description={value.description}
                  Icon={value.icon}
                />
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src={siteImages.folding.src}
                alt={siteImages.folding.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="space-y-3 p-2 pt-5">
              <h2 className="text-2xl font-bold text-slate-900">
                Easy to find. Easy to trust.
              </h2>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                Albarka is presented as the kind of laundry service people can
                recommend to a relative, a coworker, or a neighbor without
                hesitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50/80">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Meet The Team"
            title="Placeholder staff profiles that match the warm, professional identity of the brand"
            description="These cards use Black and Nigerian-aligned imagery only, keeping the visual language culturally relevant and aligned with your brief."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                    {member.role}
                  </p>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Spotless, Reliable Care for Your Wardrobe"
        description="Albarka Dry Cleaning is ready to serve households and professionals who want clothing handled with patience, respect, and visible quality."
      />
    </>
  );
}
