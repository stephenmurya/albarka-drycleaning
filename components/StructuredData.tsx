import { business } from "@/lib/site";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: business.name,
    description: business.description,
    telephone: business.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kabren, Dorowa Road",
      addressLocality: "Katsina",
      addressRegion: "Katsina State",
      postalCode: "820211",
      addressCountry: "NG"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00"
      }
    ],
    areaServed: ["Katsina", "Katsina State"],
    availableLanguage: ["English", "Hausa"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.phoneDisplay,
        contactType: "customer service",
        areaServed: "NG"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
