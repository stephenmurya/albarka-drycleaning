import Image from 'next/image';

const defaultItems = [
  {
    src: 'https://images.unsplash.com/photo-1592991605796-a3ecf1ea777e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Smiling Black Nigerian woman at Albarka Dry Cleaning inspecting a clean babban riga in Katsina'
  },
  {
    src: 'https://images.unsplash.com/photo-1555529771-94c39f34de4d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Black African Nigerian man folding traditional wrappers at Albarka in Katsina'
  },
  {
    src: 'https://images.unsplash.com/photo-1560416590-0867f4bc9eb1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Hausa Nigerian customer collecting spotless garments from Albarka Dry Cleaning'
  },
  {
    src: 'https://images.unsplash.com/photo-1548444895-5fadd38b352c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Black Nigerian laundry professionals in Katsina pressing high-value atamfa'
  },
  {
    src: 'https://images.unsplash.com/photo-1611095955918-8aa0fed1510f?auto=format&fit=crop&w=1200&q=80',
    alt: 'African family smiling with clean laundry from Albarka Dry Cleaning'
  }
];

export default function Gallery({ items = defaultItems }: { items?: Array<{ src: string; alt: string }> }) {
  return (
    <section className="bg-brand.offwhite py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-slate-900 sm:text-3xl">Authentic Katsina Cleaning Moments</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-slate-600">
          Visuals of Black Nigerian staff and customers dedicated to traditional and modern wardrobe care.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.src} className="relative h-48 overflow-hidden rounded-2xl shadow-sm">
              <Image src={item.src} alt={item.alt} fill className="object-cover object-center transition-transform duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
