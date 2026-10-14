import Image from "next/image";
import Link from "next/link";
import { contact, seoPages } from "@/lib/site";

const quickLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#apropos", label: "A Propos" },
  { href: "/#conception-video", label: "Conception Vidéo" },
  { href: "/#contact", label: "Contact" }
];

const serviceLinks = seoPages.filter((page) => page.href !== "/a-propos" && page.href !== "/contact");

export default function Footer() {
  return (
    <footer className="w-full bg-[#B9AB8E] text-black">
      <div className="mx-auto max-w-7xl space-y-12 px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-10">
          <div className="sm:col-span-2 lg:col-span-12 xl:col-span-3">
            <Image
              src="/assets/logo/noir_sf.png"
              alt="Bérengier Architecture"
              width={260}
              height={72}
              className="h-14 w-auto sm:h-16"
            />
            <p className="mt-10 max-w-md text-lg leading-relaxed text-black/80 sm:text-xl">
              Bérengier Architecture accompagne aujourd’hui les particuliers dans la transformation de leur intérieur
              avec des plans précis, des visuels 3D réalistes et des conseils sur-mesure.
            </p>
          </div>

          <div className="lg:col-span-4 xl:col-span-3">
            <p className="font-racoleta text-2xl uppercase tracking-wide text-black sm:text-3xl">
              Contact
            </p>
            <div className="mt-8 space-y-6 text-lg text-black/80">
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold [overflow-wrap:anywhere] transition hover:text-black hover:underline"
                >
                  berengier.architecture<wbr />@gmail.com
                </a>
              </p>
              <p>
                <a href={`tel:${contact.phone}`} className="transition hover:text-black hover:underline">
                  {contact.phoneDisplay}
                </a>
              </p>
              <p>Lyon et quart Sud-Est FRANCE.</p>
            </div>
          </div>

          <div className="lg:col-span-4 xl:col-span-3">
            <p className="font-racoleta text-2xl uppercase tracking-wide text-black sm:text-3xl">
              Navigation
            </p>
            <div className="mt-8 grid gap-4">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-lg text-black/80 transition hover:text-black">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Prestations" className="sm:col-span-2 lg:col-span-4 xl:col-span-3">
            <p className="font-racoleta text-2xl uppercase tracking-wide text-black sm:text-3xl">
              Prestations
            </p>
            <div className="mt-8 grid gap-4">
              {serviceLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-lg text-black/80 transition hover:text-black">
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="h-px w-full bg-black/30" />
        <p className="text-lg text-black/70 sm:text-xl">2026 Bérengier Architecture. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
