"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = {
  band1: "/assets/sets/9.png",
  band2Left: "/assets/sets/10.png",
  band2Right: "/assets/sets/11.png",
  band3Left: "/assets/sets/12.png",
  band3Right: "/assets/sets/13.png",
};

export default function GalleryMosaicTall() {
  const band1Ref = useRef<HTMLDivElement | null>(null);
  const band2LeftRef = useRef<HTMLDivElement | null>(null);
  const band2RightRef = useRef<HTMLDivElement | null>(null);
  const band3LeftRef = useRef<HTMLDivElement | null>(null);
  const band3RightRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const targets = [
      { key: "band1", ref: band1Ref },
      { key: "band2Left", ref: band2LeftRef },
      { key: "band2Right", ref: band2RightRef },
      { key: "band3Left", ref: band3LeftRef },
      { key: "band3Right", ref: band3RightRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const key = entry.target.getAttribute("data-key");
          if (!key) return;
          setVisible((prev) =>
            prev[key] === entry.isIntersecting
              ? prev
              : { ...prev, [key]: entry.isIntersecting }
          );
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    targets.forEach(({ key, ref }) => {
      if (!ref.current) return;
      ref.current.setAttribute("data-key", key);
      observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const revealBase =
    "transition-all duration-700 ease-out will-change-transform";
  const revealFromLeft = "opacity-0 -translate-x-6";
  const revealFromRight = "opacity-0 translate-x-6";
  const revealVisible = "opacity-100 translate-x-0";

  return (
    <section className="relative isolate w-full bg-white p-3 sm:p-4 lg:w-screen lg:h-[300vh]">
      <h2 className="sr-only">Galerie immersive de rendus 3D</h2>

      <div className="grid w-full gap-3 sm:gap-4 lg:h-full lg:grid-rows-[1.2fr_1fr_1fr]">
        {/* Bande 1 (mobile ok) */}
        <div
          ref={band1Ref}
          className={`relative w-full overflow-hidden rounded-sm aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full ${revealBase} ${
            visible.band1 ? revealVisible : revealFromLeft
          }`}
        >
          <Image
            src={images.band1}
            alt="Rendu 3D panoramique d’un projet d’aménagement"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 100vw, 100vw"
            priority
          />
        </div>

        {/* Bande 2 — MOBILE: 45/55 avec hauteur imposée (mosaïque parfaite) */}
        <div className="grid w-full gap-3 sm:gap-4 lg:h-full lg:grid-cols-3">
          <div className="grid w-full grid-cols-[45%_55%] gap-3 sm:gap-4 aspect-[16/9] lg:aspect-auto lg:col-span-3 lg:grid-cols-3 lg:h-full">
            <div
              ref={band2LeftRef}
              className={`relative h-full overflow-hidden rounded-sm lg:col-span-1 ${revealBase} ${
                visible.band2Left ? revealVisible : revealFromLeft
              }`}
            >
              <Image
                src={images.band2Left}
                alt="Rendu 3D salle de bain"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 45vw"
              />
            </div>
            <div
              ref={band2RightRef}
              className={`relative h-full overflow-hidden rounded-sm lg:col-span-2 ${revealBase} ${
                visible.band2Right ? revealVisible : revealFromRight
              }`}
            >
              <Image
                src={images.band2Right}
                alt="Rendu 3D chambre sous combles"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 67vw, 55vw"
              />
            </div>
          </div>
        </div>

        {/* Bande 3 — MOBILE: 55/45 avec hauteur imposée (mosaïque parfaite) */}
        <div className="grid w-full gap-3 sm:gap-4 lg:h-full lg:grid-cols-3">
          <div className="grid w-full grid-cols-[55%_45%] gap-3 sm:gap-4 aspect-[16/9] lg:aspect-auto lg:col-span-3 lg:grid-cols-3 lg:h-full">
            <div
              ref={band3LeftRef}
              className={`relative h-full overflow-hidden rounded-sm lg:col-span-2 ${revealBase} ${
                visible.band3Left ? revealVisible : revealFromLeft
              }`}
            >
              <Image
                src={images.band3Left}
                alt="Rendu 3D bureau contemporain"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 67vw, 55vw"
              />
            </div>
            <div
              ref={band3RightRef}
              className={`relative h-full overflow-hidden rounded-sm lg:col-span-1 ${revealBase} ${
                visible.band3Right ? revealVisible : revealFromRight
              }`}
            >
              <Image
                src={images.band3Right}
                alt="Rendu 3D salon"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
