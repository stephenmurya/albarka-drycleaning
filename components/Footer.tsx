import Link from 'next/link';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-6xl space-y-4 px-4 text-sm text-gray-600 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-semibold text-slate-800">Albarka Dry Cleaning</p>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand.green">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <p>
          Kabren, Dorowa Road, Katsina 820211 · Mon–Sat 8:00 AM – 6:00 PM · Sun Closed
        </p>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Albarka Dry Cleaning. All rights reserved.</p>
      </div>
    </footer>
  );
}
