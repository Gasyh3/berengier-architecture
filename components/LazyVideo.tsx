"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

// Vidéo d'ambiance chargée seulement à l'approche de l'écran : la page d'accueil
// n'a plus à télécharger les vidéos au chargement initial.
export default function LazyVideo({ src, poster, label, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setLoad(true);
        observer.disconnect();
      },
      { rootMargin: "300px 0px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!load || !video) return;
    video.load();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.play().catch(() => {});
    }
  }, [load]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
    >
      {load && <source src={src} type="video/mp4" />}
    </video>
  );
}
