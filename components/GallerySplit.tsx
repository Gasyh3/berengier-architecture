"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = {
  left: "/assets/sets/5.png",
  topRight: "/assets/sets/6.png",
  bottomRight: "/assets/sets/7.png",
};

export default function GallerySplit() {
  const mobileLeftRef = useRef<HTMLDivElement | null>(null);
  const mobileTopRef = useRef<HTMLDivElement | null>(null);
  const mobileBottomRef = useRef<HTMLDivElement | null>(null);
  const desktopLeftRef = useRef<HTMLDivElement | null>(null);
  const desktopTopRef = useRef<HTMLDivElement | null>(null);
  const desktopBottomRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const targets = [
      { key: "mLeft", ref: mobileLeftRef },
      { key: "mTop", ref: mobileTopRef },
      { key: "mBottom", ref: mobileBottomRef },
      { key: "dLeft", ref: desktopLeftRef },
      { key: "dTop", ref: desktopTopRef },
      { key: "dBottom", ref: desktopBottomRef },
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
    <section className="w-full bg-darkbase p-3 sm:p-4 lg:w-screen lg:h-screen lg:p-3">
      <h2 className="sr-only">Galerie de projets en 3D</h2>

      {/* MOBILE / TABLET (jusqu'à lg) */}
      <div className="mx-auto max-w-7xl lg:hidden">
        <div className="grid grid-cols-[45%_55%] gap-3 items-stretch">
          {/* LEFT (allongée) */}
          <div
            ref={mobileLeftRef}
            className={`relative h-full min-h-[420px] sm:min-h-[520px] overflow-hidden ${revealBase} ${
              visible.mLeft ? revealVisible : revealFromLeft
            }`}
          >
            <Image
              src={images.left}
              alt="Rendu 3D d’un intérieur contemporain"
              fill
              className="object-cover"
              sizes="45vw"
              priority
            />
          </div>

          {/* RIGHT (2 rows) */}
          <div className="grid grid-rows-2 gap-3">
            <div
              ref={mobileTopRef}
              className={`relative overflow-hidden min-h-[200px] sm:min-h-[250px] ${revealBase} ${
                visible.mTop ? revealVisible : revealFromRight
              }`}
            >
              <Image
                src={images.topRight}
                alt="Rendu 3D d’un salon haut de gamme"
                fill
                className="object-cover"
                sizes="55vw"
                priority
              />
            </div>

            <div
              ref={mobileBottomRef}
              className={`relative overflow-hidden min-h-[200px] sm:min-h-[250px] ${revealBase} ${
                visible.mBottom ? revealVisible : revealFromRight
              }`}
            >
              <Image
                src={images.bottomRight}
                alt="Rendu 3D d’un espace de vie"
                fill
                className="object-cover"
                sizes="55vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP (lg et +) => plein écran largeur + hauteur */}
      <div className="hidden lg:block h-full w-full">
        <div className="grid h-full w-full grid-cols-3 gap-3">
          {/* left = 1/3 hauteur totale */}
          <div
            ref={desktopLeftRef}
            className={`relative overflow-hidden col-span-1 ${revealBase} ${
              visible.dLeft ? revealVisible : revealFromLeft
            }`}
          >
            <Image
              src={images.left}
              alt="Rendu 3D d’un intérieur contemporain"
              fill
              className="object-cover"
              sizes="33vw"
              priority
            />
          </div>

          {/* right = 2/3, split en 2 rows */}
          <div className="grid col-span-2 grid-rows-2 gap-3">
            <div
              ref={desktopTopRef}
              className={`relative overflow-hidden ${revealBase} ${
                visible.dTop ? revealVisible : revealFromRight
              }`}
            >
              <Image
                src={images.topRight}
                alt="Rendu 3D d’un salon haut de gamme"
                fill
                className="object-cover"
                sizes="67vw"
                priority
              />
            </div>

            <div
              ref={desktopBottomRef}
              className={`relative overflow-hidden ${revealBase} ${
                visible.dBottom ? revealVisible : revealFromRight
              }`}
            >
              <Image
                src={images.bottomRight}
                alt="Rendu 3D d’un espace de vie"
                fill
                className="object-cover"
                sizes="67vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
