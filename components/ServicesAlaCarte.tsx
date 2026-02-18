const cards = [
  {
    code: "EDL",
    label: "Plan d’état des lieux",
    size: "w-[180px] sm:w-[220px] lg:w-[150px]",
    variant: "small"
  },
  {
    code: "PRO",
    label: "Plan projet",
    size: "w-[200px] sm:w-[240px] lg:w-[175px]",
    variant: "small"
  },
  {
    code: "EXE",
    label: "Plans techniques",
    size: "w-[220px] sm:w-[260px] lg:w-[200px]",
    variant: "medium"
  },
  {
    code: "3D",
    label: "Rendus 3D",
    size: "w-[240px] sm:w-[280px] lg:w-[230px]",
    variant: "medium"
  },
  {
    code: "PC/DP",
    label: "Permis de construire",
    size: "w-[260px] sm:w-[300px] lg:w-[260px]",
    variant: "largeLong"
  }
];

export default function ServicesAlaCarte() {
  return (
    <section id="services" className="h-screen w-screen scroll-mt-32 bg-[#B9AB8E] lg:h-auto lg:min-h-screen">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-10">
        <div className="mt-10 text-center sm:mt-16">
          <div className="mx-auto max-w-5xl pt-6 sm:pt-[120px] lg:pt-20">
            <h2 className="font-racoleta text-3xl font-semibold leading-tight text-black sm:text-5xl lg:text-5xl">
              Que vous soyez professionnel ou particulier,
            </h2>
            <p className="mt-2 font-racoleta text-2xl font-bold leading-tight text-white sm:mt-4 sm:text-5xl lg:text-3xl">
              Je peux aussi vous proposer mes services à la carte.
            </p>
          </div>
        </div>

        {/* Mobile: 5 blocs rectangles uniformes en colonne */}
        <div className="mt-4 flex flex-1 min-h-0 lg:hidden">
          <div className="grid h-full w-full grid-rows-5 gap-2 pb-3">
            {cards.map((card) => {
              return (
                <div key={card.code} className="h-full w-full">
                  <div className="flex h-full w-full items-center justify-between border border-[#A89B80] bg-white px-4 py-2">
                    <div className="font-racoleta text-3xl font-bold leading-none text-[#A89B80]">{card.code}</div>
                    <div className="max-w-[18ch] text-right text-sm leading-tight text-[#A89B80]">{card.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: structure existante conservée */}
        <div className="hidden lg:mt-0 lg:flex lg:flex-1 lg:items-center lg:justify-center lg:pt-10">
          <div className="w-full lg:max-w-6xl lg:flex lg:flex-row lg:items-end lg:justify-center lg:gap-6">
            {cards.map((card) => {
              const isSmall = card.variant === "small";
              const isMedium = card.variant === "medium";
              const padding = isSmall ? "p-4" : isMedium ? "p-5" : "p-6";
              const codeSize = isSmall
                ? "text-4xl sm:text-5xl"
                : isMedium
                  ? "text-5xl sm:text-6xl"
                  : "text-5xl sm:text-6xl";
              const labelSize = isSmall
                ? "text-sm sm:text-base"
                : isMedium
                  ? "text-base sm:text-lg"
                  : "text-base sm:text-lg";

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
