import Image from "next/image";

export default function AboutBioSplit() {
  return (
    <section className="w-full bg-surface lg:h-screen">
      <h2 className="sr-only">À propos de Bérengier Architecture</h2>

      <div className="grid w-full grid-cols-1 lg:h-full lg:grid-cols-12">
        {/* TEXTE */}
        <div className="w-full min-w-0 p-1 lg:col-span-8 lg:h-full">
          <div className="bg-[#B9AB8E] lg:flex lg:h-full">
            <div className="w-full px-4 py-4 text-white/95 sm:px-8 sm:py-6 lg:px-16 lg:py-16">
              <div className="pr-0 lg:h-auto lg:overflow-visible lg:pr-0">
                <div className="text-[clamp(0.9rem,2.8vw,1.15rem)] leading-[1.35] sm:text-base lg:text-4xl lg:leading-tight">
                  <p>
                    Diplômé de l’Institut CREAD à Lyon, j’ai grandi dans une famille d’entrepreneurs du bâtiment. Les
                    chantiers, je les connais de l’intérieur — plans à la main comme mains dans le ciment.
                  </p>

                  <p className="mt-3 sm:mt-4 lg:mt-10">
                    Aujourd’hui, j’accompagne les particuliers qui souhaitent transformer leur intérieur avec sens,
                    confort et cohérence. Rénover, réagencer, optimiser un espace : au-delà de l’esthétique, je propose
                    des solutions claires, fonctionnelles et durables.
                  </p>

                  <p className="mt-3 sm:mt-4 lg:mt-10">
                    Ma mission ? Vous guider dans chaque étape de votre projet, avec une approche personnalisée, des
                    visuels concrets, et une vraie compréhension de
                    <span className="font-bold"> vos besoins.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PHOTO */}
        <div className="h-[320px] w-full p-1 lg:col-span-4 lg:h-full">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/assets/DukeDSC_4803.jpg"
              alt="Portrait de Bérengier"
              fill
              className="object-cover object-[60%_center] sm:object-[55%_center] lg:object-center"
              sizes="(min-width: 1024px) 33vw, 40vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
