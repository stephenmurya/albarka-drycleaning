import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { business } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <Link
      href={business.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Albarka Dry Cleaning on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg ring-4 ring-emerald-100 transition hover:bg-emerald-700"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
