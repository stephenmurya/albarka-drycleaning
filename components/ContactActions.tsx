import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { business } from "@/lib/site";
import { cn } from "@/lib/utils";

type ContactActionsProps = {
  className?: string;
  large?: boolean;
  centered?: boolean;
  inverse?: boolean;
};

export function ContactActions({
  className,
  large = false,
  centered = false,
  inverse = false
}: ContactActionsProps) {
  const sharedClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform duration-200 hover:-translate-y-0.5",
    large ? "min-h-14 px-6 text-base" : "min-h-12 px-5 text-sm"
  );

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row",
        centered && "sm:justify-center",
        className
      )}
    >
      <Link
        href={business.phoneHref}
        className={cn(
          sharedClasses,
          inverse
            ? "bg-white text-emerald-700 shadow-sm hover:bg-emerald-50"
            : "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700"
        )}
      >
        <Phone className="h-4 w-4" />
        <span>Call {business.phoneDisplay} Now</span>
      </Link>
      <Link
        href={business.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className={cn(
          sharedClasses,
          inverse
            ? "bg-amber-400 text-slate-950 shadow-sm hover:bg-amber-300"
            : "bg-amber-500 text-slate-950 shadow-sm hover:bg-amber-400"
        )}
      >
        <MessageCircle className="h-4 w-4" />
        <span>WhatsApp {business.phoneDisplay}</span>
      </Link>
    </div>
  );
}
