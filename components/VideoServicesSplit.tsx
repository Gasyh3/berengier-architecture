export default function VideoServicesSplit() {
  const bodyContent = (
    <>
      <p>
        Pour valoriser un savoir-faire, rien de plus puissant qu’une vidéo claire, réaliste et bien rythmée.
      </p>

      <p className="mt-3 sm:mt-4 lg:mt-10">
        Je crée des contenus vidéos pour les professionnels de l’aménagement : cuisinistes, menuisiers, fabricants
        ou revendeurs de mobilier sur-mesure.
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
        Mon approche ? Montrer votre travail sous son meilleur angle, sans artifice. Des vidéos utiles, esthétiques,
        au service de vos objectifs.
      </p>
    </>
  );

  return (
    <section className="w-full bg-surface lg:w-screen lg:h-screen">
      {/* Mobile: titre + video en haut, texte en dessous */}
      <div className="grid w-full lg:hidden">
        <div className="grid w-full grid-cols-[55%_45%]">
          <div className="min-h-[300px] w-full p-1">
            <div className="flex h-full items-center bg-[#B9AB8E] px-4">
              <h2 className="font-racoleta leading-[1.05] tracking-tight">
                <span className="block text-[clamp(1.6rem,4.8vw,3.2rem)] font-bold text-white lg:text-[clamp(3rem,5vw,5.5rem)]">
                  Conçues pour
                </span>
                <span className="block text-[clamp(1.6rem,4.8vw,3.2rem)] font-bold text-white lg:text-[clamp(3rem,5vw,5.5rem)]">
                  convaincre.
                </span>
              </h2>
            </div>
          </div>

          <div className="min-h-[300px] w-full p-1">
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
        </div>

        <div className="min-h-[300px] w-full min-w-0 p-1">
          <div className="flex h-full bg-[#B9AB8E]">
            <div className="w-full px-4 py-4 sm:px-6 sm:py-6">
              <div className="max-w-none text-[clamp(0.85rem,2.4vw,1.1rem)] leading-snug text-white/95 sm:text-base">
                {bodyContent}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: structure actuelle conservée */}
      <div className="hidden h-full w-full lg:grid lg:grid-cols-[60%_40%]">
        <div className="h-full w-full min-w-0 p-1">
          <div className="flex h-full bg-[#B9AB8E]">
            <div className="w-full overflow-auto px-4 py-4 sm:px-6 sm:py-6 lg:flex lg:items-center lg:overflow-visible lg:px-16 lg:py-16">
              <div className="max-w-none text-[clamp(0.85rem,2.4vw,1.1rem)] leading-snug text-white/95 sm:text-base lg:max-w-2xl lg:text-3xl">
                {bodyContent}
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full p-1">
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
      </div>
    </section>
  );
}
