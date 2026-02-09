import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans 3D architecture | Bérengier Architecture",
  description:
    "Plans 3D et rendus photoréalistes pour vos projets d’architecture intérieure à Lyon. Visualisez vos espaces avant travaux.",
  alternates: {
    canonical: "/plans-3d-architecture"
  }
};

export default function Plans3DPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Plans 3D architecture</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Les plans 3D et rendus photoréalistes permettent de sécuriser les choix esthétiques et techniques avant le
        chantier. Ils offrent une vision claire des volumes, matériaux et ambiances.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900">Visualiser avant de construire</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Chaque visuel est conçu pour refléter fidèlement votre projet, faciliter la validation et accélérer les
          décisions.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-slate-900">Rendus adaptés à vos besoins</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          Présentations clients, dossiers de vente, communication sur les réseaux : les rendus 3D s’adaptent à chaque
          usage.
        </p>
      </section>
    </main>
  );
}
