export default function ContactForm() {
  return (
    <form
      action="https://wa.me/2348123040085"
      method="GET"
      className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <label className="text-sm font-medium text-slate-700">
        Name
        <input
          type="text"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand.green focus:outline-none focus:ring-2 focus:ring-brand.green/20"
          placeholder="Amina Abubakar"
        />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Phone or WhatsApp
        <input
          type="tel"
          name="phone"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand.green focus:outline-none focus:ring-2 focus:ring-brand.green/20"
          placeholder="+2348123040085"
        />
      </label>
      <label className="text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand.green focus:outline-none focus:ring-2 focus:ring-brand.green/20"
          placeholder="Please help me with traditional wear cleaning for babban riga and atamfa."
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-lg bg-brand.green px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
