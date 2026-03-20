import ContactForm from '@/components/ContactForm';
import Gallery from '@/components/Gallery';

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">Contact Albarka Dry Cleaning</h1>
          <p className="text-sm text-slate-600">Get in touch via phone or WhatsApp and visit our branch at Kabren, Dorowa Road, Katsina.</p>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="font-semibold text-slate-800">Address</p>
            <p className="text-sm text-slate-600">Kabren, Dorowa Road, Katsina 820211, Katsina State, Nigeria</p>
            <p className="mt-3 font-semibold text-slate-800">Phone / WhatsApp</p>
            <a href="tel:+2348123040085" className="block text-sm text-brand.green">0812 304 0085</a>
            <a href="https://wa.me/2348123040085" target="_blank" rel="noreferrer" className="block text-sm text-brand.green">WhatsApp 0812 304 0085</a>
            <p className="mt-3 text-sm text-slate-600">Hours: Mon–Sat 8:00 AM – 6:00 PM | Sunday Closed</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.6554647082737!2d7.624300215285197!3d12.98804933873037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae6152bb5b9d73%3A0x43bae51462e8e053!2sDorowa%20Rd%2C%20Katsina%2C%20Katsina%20State!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
              width="100%"
              height="320"
              loading="lazy"
              className="border-0"
              title="Google Map of Kabren Dorowa Road Katsina"
            />
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>

      <div className="mt-10">
        <Gallery
          items={[
            {
              src: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1200&q=80',
              alt: 'Smiling Black Nigerian mother collecting clean clothes in Katsina'
            },
            {
              src: 'https://images.unsplash.com/photo-1580414056630-c175d0f3d0b6?auto=format&fit=crop&w=1200&q=80',
              alt: 'Main Hausa laundry technician preparing clothes in Katsina'
            },
            {
              src: 'https://images.unsplash.com/photo-1520970066890-79d02d2a1be5?auto=format&fit=crop&w=1200&q=80',
              alt: 'Young Nigerian man happy with his suit after dry cleaning'
            }
          ]}
        />
      </div>

      <div className="mt-8 rounded-2xl bg-brand.green p-5 text-center text-white shadow-sm">
        <h2 className="text-xl font-bold">Ready for Spotless Care?</h2>
        <p className="mt-1 text-sm">Call or WhatsApp 0812 304 0085 now and let us bless your wardrobe.</p>
      </div>
    </section>
  );
}
