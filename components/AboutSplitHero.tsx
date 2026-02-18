import Image from "next/image";

export default function AboutSplitHero() {
  return (
    <section className="lg:h-screen h-[300px] bg-surface">
      {/* 2 colonnes dès mobile */}
      <div className="grid h-full w-full grid-cols-[35%_65%] lg:grid-cols-[40%_60%] lg:h-full">

        {/* IMAGE */}
        <div className="h-full w-full p-1">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/assets/sets/8.jpg"
              alt="Rendu 3D d’aménagement intérieur à Lyon"
              fill
              className="object-cover object-[50%_58%] lg:object-center"
              sizes="(min-width: 1024px) 40vw, 45vw"
              priority
            />
          </div>
        </div>

        {/* TEXTE */}
        <div className="h-full w-full p-1">
          <div className="flex h-full w-full items-center bg-[#B9AB8E]">
            <div className="w-full max-w-[18rem] px-4 sm:max-w-md sm:px-8 lg:max-w-2xl lg:px-20">
              <h2 className="font-racoleta leading-[1.05] tracking-tight">
                <span className="block text-[clamp(1.6rem,5vw,3rem)] font-semibold text-black lg:text-[clamp(3rem,5vw,5.5rem)]">
                  Derrière
                </span>
                <span className="block text-[clamp(1.6rem,5vw,3rem)] font-semibold text-black lg:text-[clamp(3rem,5vw,5.5rem)]">
                  chaque plan,
                </span>
                <span className="block text-[clamp(1.8rem,6vw,3.2rem)] font-bold text-white lg:text-[clamp(3rem,5vw,5.5rem)]">
                  Un regard
                </span>
                <span className="block text-[clamp(1.8rem,6vw,3.2rem)] font-bold text-white lg:text-[clamp(3rem,5vw,5.5rem)]">
                  de terrain.
                </span>
              </h2>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
