import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conception vidéo pour l’architecture | Bérengier Architecture",
  description:
    "Création de vidéos architecturales pour valoriser vos projets : animation, mise en scène et contenus immersifs.",
  alternates: {
    canonical: "/conception-video"
  }
};

export default function ConceptionVideoPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Conception vidéo</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        La vidéo est un format puissant pour présenter un projet architectural. Elle permet de montrer les volumes,
        la circulation et les ambiances de manière immersive.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900">Vidéos pour vendre et convaincre</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Présentations clients, contenus réseaux sociaux ou supports commerciaux : chaque vidéo est pensée pour
          valoriser votre savoir-faire.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Un rendu fidèle et soigné</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Rythme, lumière, textures : chaque détail est maîtrisé pour transmettre l’intention du projet.
        </p>
      </section>
    </main>
  );
}
