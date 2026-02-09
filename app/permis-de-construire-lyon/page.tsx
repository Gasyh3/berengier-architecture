import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permis de construire à Lyon | Bérengier Architecture",
  description:
    "Accompagnement pour les dossiers de permis de construire à Lyon : plans, pièces graphiques et coordination avec les contraintes locales.",
  alternates: {
    canonical: "/permis-de-construire-lyon"
  }
};

export default function PermisConstruirePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Permis de construire à Lyon</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Préparation complète des pièces graphiques et plans nécessaires au dépôt de permis de construire. Une approche
        claire, conforme aux exigences locales.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900">Dossiers complets et lisibles</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Plans, coupes, façades et documents d’intégration : chaque élément est pensé pour faciliter l’instruction.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Coordination locale</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Connaissance des règles urbaines à Lyon et dans le quart Sud-Est pour un dépôt plus fluide.
        </p>
      </section>
    </main>
  );
}
