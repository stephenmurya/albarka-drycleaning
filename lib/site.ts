import {
  BedDouble,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Shirt,
  Sparkles,
  Users,
  Wallet,
  WashingMachine,
  type LucideIcon
} from "lucide-react";

export type SiteImage = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export type SiteCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  note?: string;
};

const pexels = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const business = {
  name: "Albarka Dry Cleaning",
  shortName: "Albarka",
  slogan: "Albarka: Blessings in Every Clean Garment",
  alternateSlogan: "Spotless, Reliable Care for Your Wardrobe",
  description:
    "Albarka Dry Cleaning is a trusted neighborhood laundry and dry cleaning service in Kabren, Dorowa Road, Katsina, offering careful garment care for everyday wear, office outfits, and cherished Northern traditional fabrics.",
  phoneDisplay: "0812 304 0085",
  phoneHref: "tel:+2348123040085",
  whatsappHref:
    "https://wa.me/2348123040085?text=Hello%20Albarka%20Dry%20Cleaning%2C%20I%27d%20like%20to%20book%20a%20laundry%20service.",
  addressLine: "Kabren, Dorowa Road, Katsina 820211, Katsina State, Nigeria",
  areaLabel: "Your Trusted Spot in Kabren, Katsina",
  hoursDisplay: "Mon-Sat 8:00 AM - 6:00 PM | Sunday Closed",
  hoursNote: "Easy to adjust",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Kabren%2C%20Dorowa%20Road%2C%20Katsina%2C%20Katsina%20State%2C%20Nigeria&output=embed",
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=Kabren%2C%20Dorowa%20Road%2C%20Katsina%2C%20Katsina%20State%2C%20Nigeria",
  formspreeAction: "https://formspree.io/f/your-form-id"
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const siteImages = {
  homeHero: {
    src: pexels("7219907"),
    alt: "Representative image of a Black African woman holding freshly folded garments for Albarka Dry Cleaning in Katsina",
    title: "Fresh garments, neatly prepared",
    caption:
      "Representative stock-style image of a Black African woman carrying carefully folded clothing in a bright wardrobe setting."
  },
  servicesHero: {
    src: pexels("8484131"),
    alt: "Representative image of a Black African woman standing beside a clothing rack with neatly arranged garments",
    title: "Wardrobe care with a professional touch",
    caption:
      "Representative stock-style image of a Black African garment professional presenting neatly arranged clothing."
  },
  aboutHero: {
    src: pexels("33955568"),
    alt: "Representative image of a smiling Black Nigerian woman in a blue hijab and modest dress",
    title: "Warm, familiar service for Katsina families",
    caption:
      "Representative Nigerian portrait reflecting the modest, welcoming feel Albarka brings to every customer interaction."
  },
  contactHero: {
    src: pexels("5331115"),
    alt: "Representative image of a Black African woman checking a clean garment before pickup",
    title: "Every piece checked before it reaches you",
    caption:
      "Representative stock-style image of a Black African woman inspecting clean clothing with care."
  },
  folding: {
    src: pexels("7219905"),
    alt: "Representative image of a Black African woman folding freshly cleaned garments on a bed",
    title: "Careful folding for everyday and special wear",
    caption:
      "Representative stock-style image of a Black African woman folding well-finished garments in a clean home setting."
  },
  ironing: {
    src: pexels("7641257"),
    alt: "Representative image of a Black African man ironing dark trousers with focused attention",
    title: "Expert pressing and finishing",
    caption:
      "Representative stock-style image of a Black African man carefully ironing clothing for a crisp finish."
  },
  outdoorLaundry: {
    src: pexels("6624121"),
    alt: "Representative image of a Black African woman hanging laundered knitwear neatly outdoors",
    title: "Fresh fabric handling and drying care",
    caption:
      "Representative stock-style image of a Black African woman handling freshly washed garments with care."
  }
};

export const teaserServices: SiteCard[] = [
  {
    title: "Dry Cleaning",
    description:
      "Clean finishing for delicate pieces, office wear, and event outfits that need extra attention.",
    icon: Sparkles
  },
  {
    title: "Laundry & Washing",
    description:
      "Reliable wash-and-fold service for households, students, and busy professionals around Katsina.",
    icon: WashingMachine
  },
  {
    title: "Expert Pressing",
    description:
      "Smooth, crisp ironing for shirts, trousers, kaftans, school uniforms, and occasion wear.",
    icon: CheckCircle2
  },
  {
    title: "Traditional Wear Care",
    description:
      "Gentle handling for babban riga, atamfa, wrappers, lace, and other treasured Northern fabrics.",
    icon: Shirt
  }
];

export const allServices: SiteCard[] = [
  {
    title: "Dry Cleaning",
    description:
      "Trusted dry cleaning for garments that deserve careful stain treatment, fabric-safe finishing, and a polished look.",
    icon: Sparkles,
    note: "Ideal for special outfits, delicate fabrics, and occasion wear."
  },
  {
    title: "Laundry Wash & Fold",
    description:
      "Convenient washing, drying, folding, and sorting for weekly household loads and busy work schedules.",
    icon: WashingMachine,
    note: "A dependable option for families, hostels, and professionals."
  },
  {
    title: "Expert Pressing & Ironing",
    description:
      "Neat pressing that keeps your clothes sharp, fresh, and ready for school, office, mosque, or events.",
    icon: CheckCircle2,
    note: "Great for uniforms, shirts, trousers, kaftans, and wrappers."
  },
  {
    title: "Shirt & Suit Care",
    description:
      "Detailed finishing for shirts, jackets, trousers, and complete suit sets to help you look confident every day.",
    icon: BriefcaseBusiness,
    note: "Perfect for business wear, interviews, and ceremonies."
  },
  {
    title: "Traditional Wear Cleaning",
    description:
      "Specialized care for babban riga, atamfa, lace, wrappers, and other garments that carry cultural and family value.",
    icon: Shirt,
    note: "Handled with extra attention to embroidery, texture, and color."
  },
  {
    title: "Bedding & Household Items",
    description:
      "Freshening for bedsheets, duvets, pillowcases, curtains, and other home essentials that need a clean reset.",
    icon: BedDouble,
    note: "Helpful before visitors arrive or after a busy week at home."
  }
];

export const benefits: SiteCard[] = [
  {
    title: "Spotless Results",
    description:
      "Each item is handled with a finish-first mindset so your wardrobe comes back clean, fresh, and presentable.",
    icon: Sparkles
  },
  {
    title: "Careful Traditional Wear Handling",
    description:
      "We respect Northern styles and treat embroidered, flowing, and layered garments with the caution they deserve.",
    icon: ShieldCheck
  },
  {
    title: "Affordable & Reliable",
    description:
      "Straightforward service, dependable turnaround, and helpful communication for everyday Katsina routines.",
    icon: Wallet
  },
  {
    title: "Community Trusted in Katsina",
    description:
      "Albarka is positioned as the neighborhood option families and professionals can return to with confidence.",
    icon: Users
  }
];

export const processSteps = [
  {
    title: "Drop-off or Call Ahead",
    description:
      "Bring your items to our Kabren location or reach us on phone or WhatsApp so we can prepare for your garments.",
    image: siteImages.homeHero
  },
  {
    title: "Cleaning & Pressing",
    description:
      "We sort, clean, dry, and press each item with extra attention for traditional fabrics and formal wear.",
    image: siteImages.ironing
  },
  {
    title: "Pickup with Confidence",
    description:
      "Collect your refreshed clothing ready for work, worship, school runs, family visits, and special moments.",
    image: siteImages.contactHero
  }
];

export const galleryImages: SiteImage[] = [
  siteImages.homeHero,
  siteImages.folding,
  siteImages.ironing,
  siteImages.outdoorLaundry,
  siteImages.contactHero,
  siteImages.servicesHero
];

export const contactGallery: SiteImage[] = [
  siteImages.contactHero,
  siteImages.ironing,
  siteImages.folding,
  siteImages.aboutHero
];

export const aboutValues: SiteCard[] = [
  {
    title: "Rooted in Katsina",
    description:
      "A warm neighborhood tone, modest presentation, and practical service shaped for local households and professionals.",
    icon: MapPin
  },
  {
    title: "Steady, Respectful Service",
    description:
      "We prioritize consistency, clear communication, and careful garment handling over rushed shortcuts.",
    icon: Clock3
  },
  {
    title: "Quality You Can Feel",
    description:
      "The Albarka promise is simple: clothes should return cleaner, better finished, and ready for your next moment.",
    icon: ShieldCheck
  }
];

export const teamMembers = [
  {
    name: "Aisha",
    role: "Client Care & Garment Intake",
    bio: "A warm first point of contact who helps customers explain fabric needs, stain concerns, and timing for special outfits.",
    image: siteImages.aboutHero
  },
  {
    name: "Sani",
    role: "Pressing & Finishing Specialist",
    bio: "Focused on neat lines, smooth collars, and the sharp final look professionals and families expect.",
    image: siteImages.ironing
  },
  {
    name: "Maryam",
    role: "Laundry & Fold Care Assistant",
    bio: "Supports careful sorting, folding, and presentation so garments return tidy, fresh, and easy to organize at home.",
    image: siteImages.servicesHero
  }
];

export const homeHighlights = [
  "Serving Katsina families and professionals",
  "Traditional wear expertise for babban riga and atamfa",
  "Friendly call and WhatsApp support throughout the week"
];
