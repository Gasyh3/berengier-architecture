export default function VideoServicesSplit() {
  return (
    <section className="w-full bg-surface h-[400px] lg:w-screen lg:h-screen">
      <div className="grid h-full w-full grid-cols-[55%_45%] lg:grid-cols-[60%_40%]">
        {/* TEXTE */}
        <div className="w-full bg-[#B9AB8E] h-full min-w-0">
          <div className="flex h-full">
            {/* scroll interne sur mobile si trop de texte pour 400px */}
            <div className="w-full overflow-auto px-4 py-4 sm:px-6 sm:py-6 lg:overflow-visible lg:px-16 lg:py-16 lg:flex lg:items-center">
              <div className="max-w-none text-[clamp(0.85rem,2.4vw,1.1rem)] leading-snug text-white/95 sm:text-base lg:max-w-2xl lg:text-3xl">
                <p>
                  Pour valoriser un savoir-faire, rien de plus puissant qu’une vidéo claire, réaliste et bien rythmée.
                </p>

                <p className="mt-3 sm:mt-4 lg:mt-10">
                  Je crée des contenus vidéos pour les professionnels de l’aménagement : cuisinistes, menuisiers,
                  fabricants ou revendeurs de mobilier sur-mesure.
                </p>

                <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-3 lg:mt-10">
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
                    <span>Mise en avant de vos produits dans des ambiances réalistes</span>
                  </li>
                </ul>

                <p className="mt-3 sm:mt-4 lg:mt-10">
                  Mon approche ? Montrer votre travail sous son meilleur angle, sans artifice. Des vidéos utiles,
                  esthétiques, au service de vos objectifs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="relative h-full w-full overflow-hidden">
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
