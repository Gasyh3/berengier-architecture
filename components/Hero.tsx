import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden text-white lg:min-h-screen">
      <Image
        src="/assets/hero.jpg"
        alt="Vue panoramique de Lyon au coucher du soleil"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <h1 className="font-racoleta text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl xl:text-8xl">
          <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-[0.3em] text-white/80 sm:mb-6 sm:text-sm lg:text-base">
            Architecte d’intérieur à Lyon
          </span>
          <span className="block">Créer l'évidence,</span>
          <span className="block text-[#C9B99A]">Sublimer l'existant.</span>
        </h1>
      </div>
    </section>
  );
}
