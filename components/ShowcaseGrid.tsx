"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = {
  r1Left: "/assets/sets/1.png",
  r1Right: "/assets/sets/2.png",
  r2Left: "/assets/sets/3.png",
  r2Right: "/assets/sets/4.png",
};

export default function ShowcaseGrid() {
  const r1LeftRef = useRef<HTMLDivElement | null>(null);
  const r1RightRef = useRef<HTMLDivElement | null>(null);
  const r2LeftRef = useRef<HTMLDivElement | null>(null);
  const r2RightRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const targets = [
      { key: "r1Left", ref: r1LeftRef },
      { key: "r1Right", ref: r1RightRef },
      { key: "r2Left", ref: r2LeftRef },
      { key: "r2Right", ref: r2RightRef },
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
    "relative h-full w-full overflow-hidden transition-all duration-700 ease-out will-change-transform";
  const revealFromLeft = "opacity-0 -translate-x-6";
  const revealFromRight = "opacity-0 translate-x-6";
  const revealVisible = "opacity-100 translate-x-0";

  return (
    <section className="w-full bg-darkbase px-3 py-3 lg:h-[calc(150vh+2.25rem)]">
      <h2 className="sr-only">Mosaïque de rendus 3D</h2>

      {/* 2 rangées, identiques au desktop, mais hauteurs adaptées mobile */}
      <div className="grid gap-3">
        {/* Row 1: 35/65 (mobile) -> 1/2/ (lg) */}
        <div className="grid items-stretch gap-3 grid-cols-[35%_65%] h-[28vh] sm:h-[32vh] md:h-[38vh] lg:h-[75vh] lg:grid-cols-3">
          <div
            ref={r1LeftRef}
            className={`${revealBase} ${
              visible.r1Left ? revealVisible : revealFromLeft
            }`}
          >
            <Image
              src={images.r1Left}
              alt="Rendu 3D salle de bain contemporaine"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 35vw"
              priority
            />
          </div>

          <div
            ref={r1RightRef}
            className={`${revealBase} ${
              visible.r1Right ? revealVisible : revealFromRight
            } lg:col-span-2`}
          >
            <Image
              src={images.r1Right}
              alt="Rendu 3D salon lumineux"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 67vw, 65vw"
              priority
            />
          </div>
        </div>

        {/* Row 2: 65/35 (mobile) -> 2/1 (lg) */}
        <div className="grid items-stretch gap-3 grid-cols-[65%_35%] h-[28vh] sm:h-[32vh] md:h-[38vh] lg:h-[75vh] lg:grid-cols-3">
          <div
            ref={r2LeftRef}
            className={`${revealBase} ${
              visible.r2Left ? revealVisible : revealFromLeft
            } lg:col-span-2`}
          >
            <Image
              src={images.r2Left}
              alt="Rendu 3D espace de vie moderne"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 67vw, 65vw"
            />
          </div>

          <div
            ref={r2RightRef}
            className={`${revealBase} ${
              visible.r2Right ? revealVisible : revealFromRight
            }`}
          >
            <Image
              src={images.r2Right}
              alt="Rendu 3D cuisine et séjour"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, 35vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
