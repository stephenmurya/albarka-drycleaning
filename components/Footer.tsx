import Link from "next/link";
import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { business, navigation } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="content-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">{business.name}</h2>
            <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              {business.slogan}. Trusted neighborhood laundry and dry cleaning
              care for Katsina families, professionals, and cherished traditional
              garments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <Phone className="h-4 w-4" />
                {business.phoneDisplay}
              </Link>
              <Link
                href={business.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:border-amber-400 hover:text-amber-300"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Visit Us</h3>
            <div className="space-y-3 text-sm leading-7 text-slate-300">
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{business.addressLine}</span>
              </p>
              <p className="flex items-start gap-3">
                <Clock3 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{business.hoursDisplay}</span>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="grid gap-2 text-sm">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <p>
            {business.name} | {business.alternateSlogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
