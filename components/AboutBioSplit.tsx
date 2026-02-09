import Image from "next/image";

export default function AboutBioSplit() {
  return (
    <section className="w-screen h-screen bg-surface">
      <h2 className="sr-only">À propos de Bérengier Architecture</h2>
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-12">
        <div className="w-full bg-[#B9AB8E] h-[110vw] sm:h-[95vw] lg:col-span-8 lg:h-full">
          <div className="flex h-full items-center">
            <div className="w-full max-w-[22rem] px-6 py-8 text-white/95 sm:max-w-md sm:px-10 sm:py-10 lg:max-w-none lg:px-16 lg:py-16">
              <div className="text-base font-normal leading-snug sm:text-lg lg:text-4xl">
                <p>
                  Diplômé de l’Institut CREAD à Lyon, j’ai grandi dans une famille d’entrepreneurs du bâtiment. Les
                  chantiers, je les connais de l’intérieur — plans à la main comme mains dans le ciment.
                </p>
                <p className="mt-5 sm:mt-6 lg:mt-10">
                  Aujourd’hui, j’accompagne les particuliers qui souhaitent transformer leur intérieur avec sens,
                  confort et cohérence. Rénover, réagencer, optimiser un espace : au-delà de l’esthétique, je propose
                  des solutions claires, fonctionnelles et durables.
                </p>
                <p className="mt-5 sm:mt-6 lg:mt-10">
                  Ma mission ? Vous guider dans chaque étape de votre projet, avec une approche personnalisée, des
                  visuels concrets, et une vraie compréhension de
                  <span className="font-bold"> vos besoins.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-square lg:col-span-4 lg:aspect-auto lg:h-full">
          <Image
            src="/assets/DukeDSC_4803.jpg"
            alt="Portrait de Bérengier"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
