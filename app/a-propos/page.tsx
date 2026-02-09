import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Bérengier Architecture",
  description:
    "Architecte d’intérieur à Lyon : parcours, vision et méthode de travail pour des projets clairs, durables et sur mesure.",
  alternates: {
    canonical: "/a-propos"
  }
};

export default function AProposPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">À propos</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Diplômé de l’Institut CREAD à Lyon, je conçois des espaces fonctionnels et élégants, en gardant une approche
        terrain et pragmatique. Chaque projet est guidé par la clarté, l’usage et la durabilité.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900">Méthode de travail</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Analyse des besoins, conception, plans techniques et rendus 3D : une méthode structurée pour sécuriser chaque
          étape.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Zone d’intervention</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Lyon et quart Sud-Est de la France. Intervention possible à distance selon la nature du projet.
        </p>
      </section>
    </main>
  );
}
