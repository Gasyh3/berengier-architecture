import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services d’architecture d’intérieur | Bérengier Architecture",
  description:
    "Plans techniques, rendus 3D, relevés, permis de construire et accompagnement sur mesure pour vos projets d’aménagement intérieur.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Services d’architecture d’intérieur</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Bérengier Architecture propose un accompagnement complet pour vos projets : plans techniques, rendus 3D,
        modélisation et coordination. Chaque prestation est pensée pour clarifier vos choix et sécuriser les étapes du
        chantier.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900">Plans et relevés</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Relevés, plans d’état des lieux, plans projet et plans d’exécution pour une base technique fiable.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Rendus 3D photoréalistes</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Des visuels précis pour faciliter la projection, sécuriser les décisions et valoriser le projet.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Permis de construire</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Préparation des dossiers et pièces graphiques pour les démarches administratives locales.
        </p>
      </section>
    </main>
  );
}
