const items = [
  {
    titleLines: ["Vos envies,", "nos idées"],
    body: "On vous guide avec des solutions sur-mesure, adaptées à votre style et à votre quotidien."
  },
  {
    titleLines: ["Fonctionnel", "et durable"],
    body: "Beau, pratique, pensé pour durer. Chaque choix allie esthétique, usage et pérennité."
  },
  {
    titleLines: ["Un service", "abouti"],
    body: "Un seul interlocuteur, zéro stress. On coordonne tout, du premier croquis à la dernière finition."
  }
];

export default function ValuesTriptych() {
  return (
    <section className="w-screen h-screen bg-darkbase">
      <div className="mx-auto flex h-full max-w-7xl items-center px-6 sm:px-10 lg:px-16">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          {items.map((item) => (
            <div key={item.body} className="relative pl-10">
              <span
                aria-hidden
                className="absolute left-0 top-2 bottom-2 w-[2px] bg-[#B9AB8E]/80"
              />
              <h3 className="font-racoleta text-3xl italic leading-tight text-[#B9AB8E] sm:text-4xl lg:text-5xl">
                <span className="block">{item.titleLines[0]}</span>
                <span className="block">{item.titleLines[1]}</span>
              </h3>
              <p className="mt-8 text-lg leading-relaxed text-white/90 sm:text-xl">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
