"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MAX_WAIT_MS = 1200;

export default function InitialLoader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    html.style.overflow = "hidden";

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const hide = () => {
      setFadeOut(true);
      timeoutId = setTimeout(() => {
        setVisible(false);
        html.style.overflow = previousOverflow;
      }, 450);
    };

    const onReady = () => hide();

    if (document.readyState === "complete" || document.readyState === "interactive") {
      hide();
    } else {
      window.addEventListener("DOMContentLoaded", onReady, { once: true });
      timeoutId = setTimeout(() => hide(), MAX_WAIT_MS);
    }

    return () => {
      window.removeEventListener("DOMContentLoaded", onReady);
      if (timeoutId) clearTimeout(timeoutId);
      html.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex min-h-screen w-full items-center justify-center bg-darkbase transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-8">
        <Image
          src="/assets/logo/blanc_sf.png"
          alt="Bérengier Architecture"
          width={180}
          height={60}
          className="h-14 w-auto"
          priority
        />
        <div className="h-1 w-56 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/3 animate-loader bg-white/70" />
        </div>
        <span className="sr-only">Chargement…</span>
      </div>
    </div>
  );
}
