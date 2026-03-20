import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <>
      <Hero
        title="Albarka Dry Cleaning"
        subtitle="Spotless, Reliable Care for Your Wardrobe in Kabren, Katsina."
        cta1={{ label: 'Call/WhatsApp 0812 304 0085 Now', href: 'tel:+2348123040085' }}
        cta2={{ label: 'Book WhatsApp', href: 'https://wa.me/2348123040085' }}
        image={{
          src: 'https://images.unsplash.com/photo-1626522325991-c46f6ce8e2c4?auto=format&fit=crop&w=1200&q=80',
          alt: 'Smiling Black Nigerian man at Albarka Dry Cleaning pressing traditional attire in Katsina'
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900">Our Premium Services</h2>
        <p className="mx-auto mt-2 mb-6 max-w-2xl text-center text-sm text-slate-600">
          We serve Katsina families and professionals with trusted care on every garment.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={<span>🧼</span>}
            title="Dry Cleaning & Specialist Care"
            description="Professional dry clean for suits, gowns, and atamfa with safe fabric handling."
          />
          <ServiceCard
            icon={<span>🧺</span>}
            title="Laundry & Washing"
            description="Full wash, rinse, and gentle handling for everyday and designer garments."
          />
          <ServiceCard
            icon={<span>🧷</span>}
            title="Expert Pressing/Ironing"
            description="Perfectly pressed shirts, suits and traditional wear for sharp Katsina style."
          />
          <ServiceCard
            icon={<span>🧕</span>}
            title="Traditional Wear Cleaning"
            description="Babban riga, atamfa, wrappers: special care with Hausa fabric expertise."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900">Why Albarka is Trusted</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: 'Spotless Results', icon: '✨', desc: 'Quality results every pickup.' },
            { title: 'Care for Traditional Wear', icon: '🪙', desc: 'Hausa fabric care with respect.' },
            { title: 'Affordable & Reliable', icon: '💰', desc: 'Transparent pricing, on-time service.' },
            { title: 'Katsina Community Trusted', icon: '🤝', desc: 'Chosen by neighbours and professionals.' }
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-2xl">{item.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <Gallery />

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
          <h3 className="text-xl font-bold text-slate-900">Get Your Clothes Blessed with Cleanliness Today</h3>
          <p className="mt-2 text-sm text-slate-600">Call or WhatsApp 0812 304 0085 and experience Albarka care.</p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="tel:+2348123040085" className="rounded-lg bg-brand.green px-5 py-3 text-white shadow-sm hover:bg-emerald-600">Call Now</a>
            <a href="https://wa.me/2348123040085" className="rounded-lg border border-brand.green px-5 py-3 text-brand.green hover:bg-brand.offwhite">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
