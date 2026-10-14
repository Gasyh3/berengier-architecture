import Link from "next/link";
import { contact, seoPages, siteUrl } from "@/lib/site";

export type ContentSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type ContentPageProps = {
  path: string;
  title: string;
  intro: string[];
  sections: ContentSection[];
};

export default function ContentPage({ path, title, intro, sections }: ContentPageProps) {
  const related = seoPages.filter((page) => page.href !== path && page.href !== "/contact");

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: title, item: `${siteUrl}${path}` }
    ]
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <nav aria-label="Fil d’Ariane" className="text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition hover:text-slate-900 hover:underline">
              Accueil
            </Link>
          </li>
          <li aria-hidden>›</li>
          <li aria-current="page" className="text-slate-700">
            {title}
          </li>
        </ol>
      </nav>

      <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">{title}</h1>
      {intro.map((paragraph, index) => (
        <p key={index} className={`${index === 0 ? "mt-6" : "mt-4"} text-lg leading-relaxed text-slate-700`}>
          {paragraph}
        </p>
      ))}

      {sections.map((section, index) => (
        <section key={section.title} className={index === 0 ? "mt-12" : "mt-10"}>
          <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
          {section.paragraphs?.map((paragraph, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-slate-700">
              {paragraph}
            </p>
          ))}
          {section.items && (
            <ul className="mt-4 space-y-2 text-base leading-relaxed text-slate-700">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="text-[#A89B80]">
                    –
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="mt-14 bg-[#B9AB8E] px-6 py-8 sm:px-10">
        <h2 className="font-racoleta text-2xl text-black sm:text-3xl">
          Un projet&nbsp;? <span className="whitespace-nowrap">Parlons-en.</span>
        </h2>
        <p className="mt-3 text-base leading-relaxed text-black/80">
          Basé à Lyon, j’interviens dans la métropole lyonnaise et le quart Sud-Est de la France, et à distance selon
          la nature du projet.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-base font-semibold text-black sm:flex-row sm:flex-wrap sm:gap-8">
          <a href={`mailto:${contact.email}`} className="[overflow-wrap:anywhere] hover:underline">
            {contact.email}
          </a>
          <a href={`tel:${contact.phone}`} className="hover:underline">
            {contact.phoneDisplay}
          </a>
          <Link href="/#contact" className="hover:underline">
            Me contacter →
          </Link>
        </div>
      </section>

      <nav aria-label="À découvrir aussi" className="mt-12">
        <h2 className="text-xl font-semibold text-slate-900">À découvrir aussi</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {related.map((page) => (
            <li key={page.href}>
              <Link href={page.href} className="text-slate-700 underline-offset-4 transition hover:text-slate-900 hover:underline">
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
