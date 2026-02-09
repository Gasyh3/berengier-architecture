const cards = [
  {
    code: "EDL",
    label: "Plan d’état des lieux",
    size: "w-[200px] sm:w-[220px] lg:w-[150px]",
    variant: "small"
  },
  {
    code: "PRO",
    label: "Plan projet",
    size: "w-[220px] sm:w-[240px] lg:w-[175px]",
    variant: "small"
  },
  {
    code: "EXE",
    label: "Plans techniques",
    size: "w-[240px] sm:w-[260px] lg:w-[200px]",
    variant: "medium"
  },
  {
    code: "3D",
    label: "Rendus 3D",
    size: "w-[260px] sm:w-[280px] lg:w-[230px]",
    variant: "medium"
  },
  {
    code: "PC/DP",
    label: "Permis de construire",
    size: "w-[280px] sm:w-[300px] lg:w-[260px]",
    variant: "largeLong"
  }
];

export default function ServicesAlaCarte() {
  return (
    <section id="services" className="w-screen min-h-screen scroll-mt-32 bg-[#B9AB8E]">
      <div className="mx-auto flex h-full max-w-7xl flex-col px-4 sm:px-6 lg:px-10">
        <div className="mt-16 text-center">
          <div className="mx-auto max-w-5xl pt-[120px]">
            <h2 className="font-racoleta text-3xl font-semibold leading-tight text-black sm:text-5xl lg:text-5xl">
              Que vous soyez professionnel ou particulier,
            </h2>
            <p className="mt-4 font-racoleta text-2xl font-bold leading-tight text-white sm:text-5xl lg:text-3xl">
              Je peux aussi vous proposer mes services à la carte.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center pb-5 lg:mt-0 lg:flex-1 lg:items-center lg:justify-center">
          <div className="flex w-full flex-col items-center gap-6 lg:max-w-6xl lg:flex-row lg:items-end lg:justify-center lg:gap-6">
            {cards.map((card) => {
              const isSmall = card.variant === "small";
              const isMedium = card.variant === "medium";
              const isLargeLong = card.variant === "largeLong";

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
