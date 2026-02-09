import Image from "next/image";

export default function AboutSplitHero() {
  return (
    <section className="w-screen h-screen bg-surface">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-[40%_60%]">
        <div className="relative w-full aspect-square lg:aspect-auto lg:h-full">
          <Image
            src="/assets/sets/8.jpg"
            alt="About visual"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="w-full aspect-square bg-[#B9AB8E] lg:aspect-auto lg:h-full">
          <div className="flex h-full items-center">
            <div className="w-full max-w-[22rem] px-6 sm:max-w-md sm:px-10 lg:max-w-2xl lg:px-20">
              <h2 className="font-racoleta leading-[1.08] tracking-tight break-words">
                <span className="block text-[clamp(2rem,7vw,3rem)] font-semibold text-black lg:text-[clamp(3rem,5vw,5.5rem)]">
                  Derrière
                </span>
                <span className="block text-[clamp(2rem,7vw,3rem)] font-semibold text-black lg:text-[clamp(3rem,5vw,5.5rem)]">
                  chaque plan,
                </span>
                <span className="block text-[clamp(2.2rem,8vw,3.2rem)] font-bold text-white lg:text-[clamp(3rem,5vw,5.5rem)]">
                  Un regard
                </span>
                <span className="block text-[clamp(2.2rem,8vw,3.2rem)] font-bold text-white lg:text-[clamp(3rem,5vw,5.5rem)]">
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
