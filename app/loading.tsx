import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen w-full items-center justify-center bg-darkbase">
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
        <span className="sr-only" role="status" aria-live="polite">
          Chargement…
        </span>
      </div>
    </div>
  );
}
