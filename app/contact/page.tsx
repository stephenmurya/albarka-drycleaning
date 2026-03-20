import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { ContactActions } from "@/components/ContactActions";
import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { business, contactGallery, siteImages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact Albarka"
        title="Call, WhatsApp, or stop by our Kabren location for trusted garment care"
        description="Whether you need weekly laundry help, polished workwear, or careful cleaning for traditional fabrics, Albarka Dry Cleaning is ready to help with warm, responsive local service."
        highlight="Call/WhatsApp 0812 304 0085 Now"
        pills={[
          "Quick call support",
          "WhatsApp-friendly enquiries",
          "Easy-to-find Katsina location"
        ]}
        details={[
          {
            label: "Phone",
            value: business.phoneDisplay,
            Icon: Phone
          },
          {
            label: "Address",
            value: business.addressLine,
            Icon: MapPin
          },
          {
            label: "Hours",
            value: business.hoursDisplay,
            Icon: Clock3
          }
        ]}
        image={siteImages.contactHero}
      />

      <section className="section-space">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="Reach Us"
            title="Everything you need to contact Albarka quickly"
            description="The contact page is structured for mobile-first use, so customers can tap to call, tap to open WhatsApp, or pull up directions with minimal effort."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <Phone className="h-6 w-6 text-emerald-700" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Call us
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                Speak with Albarka directly for pricing, availability, or service
                questions.
              </p>
              <Link
                href={business.phoneHref}
                className="mt-4 inline-flex font-semibold text-emerald-700 hover:text-emerald-800"
              >
                {business.phoneDisplay}
              </Link>
            </article>

            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <MessageCircle className="h-6 w-6 text-emerald-700" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                WhatsApp us
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                Send a quick message about laundry loads, pressing needs, or
                traditional garments.
              </p>
              <Link
                href={business.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Start WhatsApp chat
              </Link>
            </article>

            <article className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <MapPin className="h-6 w-6 text-emerald-700" />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                Visit our shop
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                {business.addressLine}
              </p>
              <Link
                href={business.directionsHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex font-semibold text-emerald-700 hover:text-emerald-800"
              >
                Open in Google Maps
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="content-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ContactForm />

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Albarka Dry Cleaning map"
                src={business.mapsEmbedSrc}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900">
                Prefer a quick call or chat first?
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                Use the direct contact buttons below for the fastest way to reach
                Albarka Dry Cleaning.
              </p>
              <ContactActions className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="content-shell space-y-10">
          <SectionHeading
            eyebrow="More Authentic Visuals"
            title="Representative Black and African customer-facing care moments"
            description="A second gallery keeps the contact page warm and reassuring instead of feeling purely functional."
          />
          <Gallery items={contactGallery} />
        </div>
      </section>

      <CTASection
        title="Call or WhatsApp 0812 304 0085 Now"
        description="If your wardrobe needs fresh care, crisp pressing, or careful handling for traditional attire, Albarka Dry Cleaning is ready."
      />
    </>
  );
}
