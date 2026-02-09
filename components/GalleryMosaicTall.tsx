import Image from "next/image";

const images = {
  band1: "/assets/sets/9.png",
  band2Left: "/assets/sets/10.png",
  band2Right: "/assets/sets/11.png",
  band3Left: "/assets/sets/12.png",
  band3Right: "/assets/sets/13.png"
};

export default function GalleryMosaicTall() {
  return (
    <section className="w-screen h-[300vh] bg-white p-3 sm:p-4">
      <div className="grid h-full w-full grid-rows-[1.2fr_1fr_1fr] gap-3 sm:gap-4">
        <div className="relative w-full overflow-hidden">
          <Image
            src={images.band1}
            alt="3D interior wide rendering"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 100vw, 100vw"
          />
        </div>

        <div className="grid h-full w-full grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden lg:col-span-1">
            <Image
              src={images.band2Left}
              alt="3D bathroom rendering"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <div className="relative overflow-hidden lg:col-span-2">
            <Image
              src={images.band2Right}
              alt="3D attic bedroom rendering"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 67vw, 100vw"
            />
          </div>
        </div>

        <div className="grid h-full w-full grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
          <div className="relative overflow-hidden lg:col-span-2">
            <Image
              src={images.band3Left}
              alt="3D office rendering"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 67vw, 100vw"
            />
          </div>
          <div className="relative overflow-hidden lg:col-span-1">
            <Image
              src={images.band3Right}
              alt="3D living room rendering"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
