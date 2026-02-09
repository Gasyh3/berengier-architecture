import Image from "next/image";
import { Instagram, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/berengier.architecture/", Icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/quentin-bérengier-8aa092206/", Icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583934541733", Icon: Facebook }
] as const;

export default function ContactSection() {
  return (
    <section id="contact" className="w-screen min-h-screen scroll-mt-32 mt-4 pt-5 bg-darkbase">
      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 gap-14 px-6 py-14 sm:px-10 lg:grid-cols-12 lg:px-16">
        <div className="flex flex-col justify-between pt-6 lg:col-span-7">
          <div>
            <h2 className="font-racoleta text-5xl leading-none tracking-tight text-[#B9AB8E] sm:text-6xl lg:text-7xl">
              Contactez-moi
            </h2>
            <div className="mt-10 space-y-10 text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
              <p>Une question, un projet en tête ?</p>
              <p>
                Je suis à votre écoute pour en discuter
                <br className="hidden sm:block" />
                et vous accompagner pas à pas.
              </p>
            </div>
          </div>

          <div className="mt-12 w-full max-w-md rounded-2xl border border-white/10 bg-black/40 p-6 shadow-lg">
            <div className="flex h-16 w-full items-center justify-center">
              <Image
                src="/assets/logo/blanc_sf.png"
                alt="Bérengier Architecture"
                width={260}
                height={64}
                className="h-14 w-auto object-contain"
                sizes="(min-width: 1024px) 400px, 80vw"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex h-full flex-col justify-between gap-10">
            <div className="grid grid-cols-[24px_1fr] gap-6">
              <div className="flex justify-center">
                <span className="h-full w-[2px] bg-[#B9AB8E]/70" />
              </div>
              <div>
                <h3 className="font-racoleta text-4xl leading-none text-[#B9AB8E] sm:text-5xl">
                  Email
                </h3>
                <p className="mt-5 break-words text-lg text-white/90 sm:text-xl lg:text-2xl">
                  berengier.architecture@gmail.com
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[24px_1fr] gap-6">
              <div className="flex justify-center">
                <span className="h-full w-[2px] bg-[#B9AB8E]/70" />
              </div>
              <div>
                <h3 className="font-racoleta text-4xl leading-none text-[#B9AB8E] sm:text-5xl">
                  Numéro
                </h3>
                <p className="mt-5 text-lg text-white/90 sm:text-xl lg:text-2xl">
                  +33 7 70 51 61 62
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[24px_1fr] gap-6">
              <div className="flex justify-center">
                <span className="h-full w-[2px] bg-[#B9AB8E]/70" />
              </div>
              <div>
                <h3 className="font-racoleta text-4xl leading-none text-[#B9AB8E] sm:text-5xl">
                  Localisation
                </h3>
                <div className="mt-5 text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl">
                  <p>LYON</p>
                  <p>Interventions Quart Sud-Est France.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[24px_1fr] gap-6">
              <div className="flex justify-center">
                <span className="h-full w-[2px] bg-[#B9AB8E]/70" />
              </div>
              <div>
                <h3 className="font-racoleta text-4xl leading-none text-[#B9AB8E] sm:text-5xl">
                  Réseaux
                </h3>
                <div className="mt-6 flex items-center gap-8 text-4xl text-white/90 sm:gap-10 sm:text-5xl">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-white"
                    >
                      <link.Icon className="h-10 w-10 sm:h-12 sm:w-12" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
