import Image from "next/image";

const images = {
  left: "/assets/sets/5.png",
  topRight: "/assets/sets/6.png",
  bottomRight: "/assets/sets/7.png"
};

export default function GallerySplit() {
  return (
    <section className="w-screen h-[140vh] bg-darkbase p-3 sm:p-4">
      <h2 className="sr-only">Galerie de projets en 3D</h2>
      <div className="grid h-full grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="relative h-[50vh] overflow-hidden lg:col-span-1 lg:h-full">
          <Image
            src={images.left}
            alt="Rendu 3D d’un intérieur contemporain"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="grid h-[80vh] grid-rows-2 gap-3 lg:col-span-2 lg:h-full">
          <div className="relative h-[40vh] overflow-hidden lg:h-auto">
          <Image
            src={images.topRight}
            alt="Rendu 3D d’un salon haut de gamme"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 67vw, 100vw"
            />
          </div>
          <div className="relative h-[40vh] overflow-hidden lg:h-auto">
          <Image
            src={images.bottomRight}
            alt="Rendu 3D d’un espace de vie"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 67vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
