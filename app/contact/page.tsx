import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { pageMetadata } from "@/lib/site";

const path = "/contact";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contactez Bérengier Architecture, architecte d’intérieur à Lyon, pour vos projets d’aménagement, plans techniques, rendus 3D et permis de construire.",
  path
});

export default function ContactPage() {
  return (
    <ContentPage
      path={path}
      title="Contact"
      intro={[
        "Une question, un projet en tête\u00a0? Je suis à votre écoute pour en discuter et vous accompagner pas à pas.",
        "Échangeons pour cadrer vos besoins techniques et esthétiques."
      ]}
      sections={[
        {
          title: "Localisation",
          paragraphs: ["Lyon — interventions dans le quart Sud-Est de la France, et à distance selon les projets."]
        }
      ]}
    />
  );
}
