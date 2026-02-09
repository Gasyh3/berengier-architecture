import Image from "next/image";

const images = {
  r1Left: "/assets/sets/1.png",
  r1Right: "/assets/sets/2.png",
  r2Left: "/assets/sets/3.png",
  r2Right: "/assets/sets/4.png"
};

export default function ShowcaseGrid() {
  return (
    <section className="w-screen bg-darkbase p-3 lg:h-[calc(150vh+2.25rem)]">
      <div className="grid h-full gap-3 lg:grid-rows-2">
        <div className="grid gap-3 lg:h-[75vh] lg:grid-cols-3">
          <div className="relative min-h-[40vh] w-full overflow-hidden lg:min-h-0">
            <Image
              src={images.r1Left}
              alt="3D interior rendering 1"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
          <div className="relative min-h-[40vh] w-full overflow-hidden lg:col-span-2 lg:min-h-0">
            <Image
              src={images.r1Right}
              alt="3D interior rendering 2"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 67vw, 100vw"
            />
          </div>
        </div>

        <div className="grid gap-3 lg:h-[75vh] lg:grid-cols-3">
          <div className="relative min-h-[40vh] w-full overflow-hidden lg:col-span-2 lg:min-h-0">
            <Image
              src={images.r2Left}
              alt="3D interior rendering 3"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 67vw, 100vw"
            />
          </div>
          <div className="relative min-h-[40vh] w-full overflow-hidden lg:min-h-0">
            <Image
              src={images.r2Right}
              alt="3D interior rendering 4"
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
