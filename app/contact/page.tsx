import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Bérengier Architecture",
  description:
    "Contactez Bérengier Architecture pour vos projets d’aménagement intérieur, plans techniques et rendus 3D à Lyon.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">Contact</h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        Une question, un projet en tête ? Échangeons pour cadrer vos besoins techniques et esthétiques.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-slate-900">Coordonnées</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700">
          berengier.architecture@gmail.com
          <br />
          +33 7 70 51 61 62
          <br />
          Lyon — Interventions quart Sud-Est France.
        </p>
      </section>
    </main>
  );
}
