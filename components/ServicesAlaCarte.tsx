const cards = [
  {
    code: "EDL",
    label: "Plan d’état des lieux",
    size: "lg:w-[130px] xl:w-[150px]",
    variant: "small"
  },
  {
    code: "PRO",
    label: "Plan projet",
    size: "lg:w-[150px] xl:w-[175px]",
    variant: "small"
  },
  {
    code: "EXE",
    label: "Plans techniques",
    size: "lg:w-[170px] xl:w-[200px]",
    variant: "medium"
  },
  {
    code: "3D",
    label: "Rendus 3D",
    size: "lg:w-[195px] xl:w-[230px]",
    variant: "medium"
  },
  {
    code: "PC/DP",
    label: "Permis de construire",
    size: "lg:w-[220px] xl:w-[260px]",
    variant: "largeLong"
  }
];

export default function ServicesAlaCarte() {
  return (
    <section id="services" className="flex min-h-screen min-h-svh w-full scroll-mt-32 flex-col bg-[#B9AB8E]">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 sm:px-6 lg:px-10 lg:pb-16">
        <div className="mt-10 text-center sm:mt-12">
          <div className="mx-auto max-w-5xl pt-6 sm:pt-12 lg:pt-20">
            <h2 className="font-racoleta text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl">
              Que vous soyez professionnel ou particulier,
            </h2>
            <p className="mt-2 font-racoleta text-2xl font-bold leading-tight text-white sm:mt-4 sm:text-3xl md:text-4xl lg:text-3xl">
              Je peux aussi vous proposer mes services à la carte.
            </p>
          </div>
        </div>

        {/* Mobile: 5 blocs rectangles uniformes en colonne */}
        <div className="mt-6 flex flex-1 lg:hidden">
          <div className="grid w-full grid-rows-[repeat(5,minmax(3.75rem,1fr))] gap-2">
            {cards.map((card) => {
              return (
                <div key={card.code} className="h-full w-full">
                  <div className="flex h-full w-full items-center justify-between gap-4 border border-[#A89B80] bg-white px-4 py-2">
                    <div className="font-racoleta text-3xl font-bold leading-none text-[#A89B80]">{card.code}</div>
                    <div className="max-w-[18ch] text-right text-sm leading-tight sm:text-base text-[#A89B80]">{card.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: structure existante conservée */}
        <div className="hidden lg:mt-0 lg:flex lg:flex-1 lg:items-center lg:justify-center lg:pt-10">
          <div className="w-full lg:max-w-6xl lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-4 xl:gap-6">
            {cards.map((card) => {
              const isSmall = card.variant === "small";
              const isMedium = card.variant === "medium";
              const padding = isSmall ? "p-4" : isMedium ? "p-5" : "p-6";
              const codeSize = isSmall ? "text-4xl xl:text-5xl" : "text-5xl xl:text-6xl";
              const labelSize = isSmall ? "text-sm xl:text-base" : "text-base xl:text-lg";

              return (
                <div key={card.code} className={`shrink-0 ${card.size}`}>
                  <div className="relative aspect-square border border-[#A89B80] bg-white">
                    <div className={`absolute inset-0 flex flex-col items-center justify-center text-center ${padding}`}>
                      <div className={`font-racoleta font-bold leading-none text-[#A89B80] ${codeSize}`}>
                        {card.code}
                      </div>
                      <div className={`mt-3 max-w-[12ch] text-[#A89B80] ${labelSize}`}>
                        {card.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
