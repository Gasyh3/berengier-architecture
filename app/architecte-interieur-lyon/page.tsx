import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecte d’intérieur à Lyon | Bérengier Architecture",
  description:
    "Architecte d’intérieur basé à Lyon. Plans techniques, rendus 3D, permis de construire et accompagnement sur mesure pour vos projets d’aménagement.",
  alternates: {
    canonical: "/architecte-interieur-lyon"
  }
};

export default function ArchitecteInterieurLyonPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
        Architecte d’intérieur à Lyon
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Bérengier Architecture accompagne les particuliers et professionnels pour transformer les espaces de vie et de
        travail à Lyon et en Auvergne-Rhône-Alpes. Plans techniques, rendus 3D photoréalistes et coordination sur mesure
        : chaque projet est pensé pour être clair, fonctionnel et durable.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900">Un accompagnement complet</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          De la prise de brief à la livraison, je propose un suivi précis du projet : plans, variantes, conseils
          techniques et visuels 3D pour vous aider à prendre les bonnes décisions.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Services proposés</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Plans d’exécution, rendus 3D, permis de construire, modélisations BIM et conception vidéo pour valoriser vos
          projets.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Zone d’intervention</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Lyon, métropole lyonnaise et quart Sud-Est de la France. Interventions possibles à distance selon les besoins.
        </p>
      </section>
    </main>
  );
}
