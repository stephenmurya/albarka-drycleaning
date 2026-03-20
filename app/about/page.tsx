import Hero from '@/components/Hero';
import Image from 'next/image';

export default function About() {
  const team = [
    { name: 'Hajiya Hauwa', role: 'Head Textile Specialist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=900&q=80', alt: 'Hausa female laundry expert at Albarka Dry Cleaning' },
    { name: 'Bala Musa', role: 'Quality Control Lead', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80', alt: 'Black Nigerian man inspecting cleaned traditional clothes' },
    { name: 'Zainab Sani', role: 'Customer Service', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80', alt: 'Smiling Hausa customer service representative' }
  ];

  return (
    <div className="space-y-8">
      <Hero
        title="Our Story in Katsina"
        subtitle="Albarka Dry Cleaning is your reliable local laundry and dry cleaning service in Kabren, Dorowa Road, Katsina."
        cta1={{ label: 'Call 0812 304 0085', href: 'tel:+2348123040085' }}
        cta2={{ label: 'WhatsApp Us', href: 'https://wa.me/2348123040085' }}
        image={{ src: 'https://images.unsplash.com/photo-1589721228317-21a14b96eea9?auto=format&fit=crop&w=1200&q=80', alt: 'Team of Black Nigerian laundry professionals in Katsina' }}
      />

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900">Trusted by Katsina Families and Professionals</h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-slate-600">
          We provide professional care for all garments – from everyday shirts to cherished traditional wear. Each item gets individual attention, safe fabric treatment, and a blessing of quality before delivery.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <div className="grid gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-brand.deeptext">Location</h3>
            <p className="mt-1 text-sm text-slate-600">Kabren, Dorowa Road, Katsina 820211, Katsina State, Nigeria</p>
            <h3 className="mt-4 text-xl font-semibold text-brand.deeptext">Hours</h3>
            <p className="mt-1 text-sm text-slate-600">Mon–Sat: 8:00 AM – 6:00 PM</p>
            <p className="text-sm text-slate-600">Sunday: Closed (Easy update in layout)</p>
            <h3 className="mt-4 text-xl font-semibold text-brand.deeptext">Phone</h3>
            <p className="mt-1 text-sm text-slate-600">0812 304 0085</p>
          </div>
          <div className="space-y-2">
            {team.map((member) => (
              <article key={member.name} className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image src={member.img} alt={member.alt} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{member.name}</p>
                  <p className="text-xs text-slate-600">{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
