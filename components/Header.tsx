"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#apropos", label: "A propos" },
  { href: "/#conception-video", label: "Conception vidéo" }
];

export default function Header() {
  // Sur l'accueil le header flotte sur le hero sombre ; ailleurs il prend sa place
  // dans le flux avec un fond sombre pour rester lisible et ne pas recouvrir le titre.
  const isHome = usePathname() === "/";

  return (
    <header
      className={`${isHome ? "absolute left-0 top-0" : "relative bg-darkbase"} z-50 w-full text-white`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex shrink-0 items-center 2xl:-ml-10">
          <Image
            src="/assets/logo/ico_sf.png"
            alt="Atelier Bérengier logo"
            width={128}
            height={128}
            className="h-12 w-auto md:h-24"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-white/90 md:flex md:text-base lg:gap-8 lg:text-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition hover:text-white hover:underline"
            >
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="whitespace-nowrap font-bold text-white transition hover:underline">
            Contactez-moi
          </a>
        </nav>
      </div>
    </header>
  );
}
