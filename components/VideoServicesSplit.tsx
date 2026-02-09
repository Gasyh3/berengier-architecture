export default function VideoServicesSplit() {
  return (
    <section className="w-screen h-screen bg-surface">
      <div className="grid h-full w-full grid-cols-1 lg:grid-cols-[60%_40%]">
        <div className="w-full bg-[#B9AB8E] h-[110vw] sm:h-[95vw] lg:h-full">
          <div className="flex h-full items-center">
            <div className="w-full px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-16">
              <div className="max-w-[22rem] text-base leading-snug text-white/95 sm:max-w-md sm:text-lg lg:max-w-2xl lg:text-3xl">
                <p>
                  Pour valoriser un savoir-faire, rien de plus puissant qu’une vidéo claire, réaliste et bien rythmée.
                </p>
                <p className="mt-5 sm:mt-6 lg:mt-10">
                  Je crée des contenus vidéos pour les professionnels de l’aménagement : cuisinistes, menuisiers,
                  fabricants ou revendeurs de mobilier sur-mesure.
                </p>
                <ul className="mt-5 space-y-2 sm:mt-6 sm:space-y-3 lg:mt-10">
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-1">
                      –
                    </span>
                    <span>Présentation de projets pour vos clients</span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-1">
                      –
                    </span>
                    <span>Vidéos courtes pour animer vos réseaux sociaux</span>
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden className="mt-1">
                      –
                    </span>
                    <span>
                      Mise en avant de vos produits dans des ambiances réalistes
                    </span>
                  </li>
                </ul>
                <p className="mt-5 sm:mt-6 lg:mt-10">
                  Mon approche ? Montrer votre travail sous son meilleur angle, sans artifice. Des vidéos utiles,
                  esthétiques, au service de vos objectifs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-square overflow-hidden lg:aspect-auto lg:h-full">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/assets/videos/vd11.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
