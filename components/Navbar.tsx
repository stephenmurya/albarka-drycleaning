import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-brand.deeptext">
          Albarka Dry Cleaning
        </Link>
        <nav className="hidden items-center gap-4 text-sm font-medium text-gray-700 sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-2 py-1 hover:bg-brand.offwhite">
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/2348123040085"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-brand.green px-3 py-2 text-white shadow-sm transition hover:bg-emerald-600"
          >
            WhatsApp
          </a>
        </nav>
        <div className="sm:hidden">
          <Link
            href="https://wa.me/2348123040085"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-brand.green px-3 py-2 text-sm text-white"
          >
            WA
          </Link>
        </div>
      </div>
    </header>
  );
}
