import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#apropos", label: "A propos" },
  { href: "#conception-video", label: "Conception vidéo" }
];

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo/ico_sf.png"
            alt="Atelier Bérengier logo"
            width={128}
            height={128}
            className="h-12 w-auto md:h-20"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex md:text-base lg:text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="font-bold text-white transition hover:underline">
            Contactez-moi
          </a>
        </nav>
      </div>
    </header>
  );
}
