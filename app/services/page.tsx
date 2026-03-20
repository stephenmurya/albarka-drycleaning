import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Image from 'next/image';

export default function Services() {
  return (
    <div className="space-y-8">
      <Hero
        title="Full-Service Dry Cleaning in Katsina"
        subtitle="Expert wet laundry, pressing, and traditional wardrobe care for busy households."
        cta1={{ label: 'Call 0812 304 0085', href: 'tel:+2348123040085' }}
        cta2={{ label: 'WhatsApp Us', href: 'https://wa.me/2348123040085' }}
        image={{
          src: 'https://images.unsplash.com/photo-1555529771-94c39f34de4d?auto=format&fit=crop&w=1200&q=80',
          alt: 'Black African Nigerian woman receiving folded clean clothes in Katsina'
        }}
      />

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900">Our Detailed Service Offerings</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard icon={<span>👔</span>} title="Expert Pressing" description="Folding and pressing for all fabrics, including work shirts and suits." />
          <ServiceCard icon={<span>🧼</span>} title="Dry Cleaning for Babban Riga & Atamfa" description="Cultural fabric-safe solvents and hand finishing." />
          <ServiceCard icon={<span>🧺</span>} title="Laundry Wash & Fold" description="Family load handling with soft detergent and deodorizing rinse." />
          <ServiceCard icon={<span>🧻</span>} title="Shirt & Suit Care" description="Color-safe, wrinkle-free, ready-to-wear finish." />
          <ServiceCard icon={<span>🛏️</span>} title="Bedding & Household Items" description="Covers, sheets, curtains, and robes washed and sanitized." />
          <ServiceCard icon={<span>🤲</span>} title="Careful Handling" description="Every item is inspected, tagged, and packaged with love." />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900">3-Step Process for Hassle-Free Service</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            {
              title: 'Drop-off in Kabren',
              desc: 'Bring your garments to Dorowa Road shop or request pickup.',
              img: 'https://images.unsplash.com/photo-1587134904217-d35f4ed87c43?auto=format&fit=crop&w=1200&q=80',
              alt: 'Hausa Nigerian customer dropping off clothing at a local laundry counter'
            },
            {
              title: 'Clean, Press, Pack',
              desc: 'We process with gentle wash, expert dry clean and precise pressing.',
              img: 'https://images.unsplash.com/photo-1611095955918-8aa0fed1510f?auto=format&fit=crop&w=1200&q=80',
              alt: 'Hausa laundry staff carefully handling folded garments in Katsina'
            },
            {
              title: 'Pickup or Delivery',
              desc: 'Collect at your convenience, or choose fast local delivery in Katsina.',
              img: 'https://images.unsplash.com/photo-1610794736159-9b906f4f85b8?auto=format&fit=crop&w=1200&q=80',
              alt: 'Happy Nigerian client holding packaged clean clothes at pickup'
            }
          ].map((step) => (
            <article key={step.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="relative h-40 overflow-hidden rounded-xl">
                <Image src={step.img} alt={step.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
