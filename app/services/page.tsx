import type { Metadata } from "next";
import { CheckCircle2, Clock3, MapPin } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { allServices, business, processSteps, siteImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services"
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Laundry Services"
        title="Professional care for everyday wear, office outfits, and cherished traditional garments"
        description="Albarka Dry Cleaning combines dependable laundry support with polished finishing, helping Katsina households keep clothes fresh, presentable, and ready for daily life or special occasions."
        highlight="Reliable cleaning and pressing for Katsina wardrobes"
        pills={[
          "Dry cleaning and wash & fold",
          "Pressing for shirts, kaftans, and suits",
          "Traditional fabric care with respect"
        ]}
        details={[
          {
            label: "Convenient location",
            value: business.addressLine,
            Icon: MapPin
          },
          {
            label: "Steady schedule",
            value: business.hoursDisplay,
            Icon: Clock3
          },
          {
            label: "Care promise",
            value: "We focus on neat finishing and fabric-conscious handling.",
            Icon: CheckCircle2
          }
        ]}
        image={siteImages.servicesHero}
      />

      <section className="section-space">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Service Menu"
            title="Six core services built around what Katsina customers need most"
            description="The service mix covers quick weekly laundry, polished professional wear, and careful handling for cultural garments and bedding."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {allServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                note={service.note}
                Icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50/80">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Simple Process"
            title="Drop-off, careful cleaning, and ready-for-pickup finishing"
            description="We kept the process clear and reassuring so new customers immediately understand how Albarka works."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                index={index + 1}
                title={step.title}
                description={step.description}
                image={step.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need clean, pressed clothes for work, school, prayer, or an event?"
        description="Reach Albarka Dry Cleaning today and let us help you keep your wardrobe fresh, respectful, and ready."
      />
    </>
  );
}
