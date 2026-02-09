const items = [
  {
    titleLines: ["Vos envies,", "nos idées"],
    body:
      "On vous guide avec des solutions sur-mesure, adaptées à votre style et à votre quotidien.",
  },
  {
    titleLines: ["Fonctionnel", "et durable"],
    body:
      "Beau, pratique, pensé pour durer. Chaque choix allie esthétique, usage et pérennité.",
  },
  {
    titleLines: ["Un service", "abouti"],
    body:
      "Un seul interlocuteur, zéro stress. On coordonne tout, du premier croquis à la dernière finition.",
  },
];

export default function ValuesTriptych() {
  return (
    <section className="w-full bg-darkbase py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        {/* 3 colonnes dès mobile */}
        <div className="grid w-full grid-cols-3 gap-4 sm:gap-6 lg:gap-16">
          {items.map((item) => (
            <div key={item.body} className="relative pl-4 sm:pl-6 lg:pl-10">
              {/* barre verticale */}
              <span
                aria-hidden
                className="absolute left-0 top-1 bottom-1 w-[2px] bg-[#B9AB8E]/80"
              />

              {/* titre: beaucoup plus petit sur mobile */}
              <h3 className="font-racoleta italic leading-[1.05] text-[#B9AB8E] text-[clamp(14px,3.6vw,56px)]">
                <span className="block">{item.titleLines[0]}</span>
                <span className="block">{item.titleLines[1]}</span>
              </h3>

              {/* body: compact sur mobile, normal ensuite */}
              <p className="mt-3 sm:mt-5 text-white/90 leading-snug sm:leading-relaxed text-[clamp(10px,2.6vw,20px)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
