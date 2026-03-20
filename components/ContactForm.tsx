import { Send } from "lucide-react";
import { business } from "@/lib/site";

export function ContactForm() {
  return (
    <form
      action={business.formspreeAction}
      method="POST"
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-slate-900">Send us a message</h3>
        <p className="text-sm leading-6 text-slate-600">
          Share your laundry needs and we will get back to you. Replace the
          placeholder Formspree endpoint in <code>lib/site.ts</code> before
          going live.
        </p>
      </div>

      <input
        type="hidden"
        name="_subject"
        value="New enquiry from Albarka Dry Cleaning website"
      />

      <div className="mt-8 grid gap-5">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
            required
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Phone</span>
          <input
            type="tel"
            name="phone"
            placeholder="0812 304 0085"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
            required
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-slate-900">Message</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us what you want cleaned or pressed."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 focus:bg-white"
            required
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 font-semibold text-white transition hover:bg-emerald-700"
      >
        <Send className="h-4 w-4" />
        Send Enquiry
      </button>
    </form>
  );
}
