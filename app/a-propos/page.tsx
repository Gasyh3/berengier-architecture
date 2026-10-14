import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { pageMetadata } from "@/lib/site";

const path = "/a-propos";

export const metadata: Metadata = pageMetadata({
  title: "À propos",
  description:
    "Quentin Bérengier, architecte d’intérieur à Lyon diplômé de l’Institut CREAD, issu d’une famille d’entrepreneurs du bâtiment : parcours, vision et méthode de travail.",
  path
});

export default function AProposPage() {
  return (
    <ContentPage
      path={path}
      title="À propos"
      intro={[
        "Diplômé de l’Institut CREAD à Lyon, j’ai grandi dans une famille d’entrepreneurs du bâtiment. Les chantiers, je les connais de l’intérieur — plans à la main comme mains dans le ciment.",
        "Derrière chaque plan, un regard de terrain : je conçois des espaces fonctionnels et élégants, avec une approche pragmatique."
      ]}
      sections={[
        {
          title: "Ma mission",
          paragraphs: [
            "Vous guider dans chaque étape de votre projet, avec une approche personnalisée, des visuels concrets et une vraie compréhension de vos besoins.",
            "J’accompagne les particuliers qui souhaitent transformer leur intérieur avec sens, confort et cohérence, ainsi que les professionnels du bâtiment et de l’aménagement."
          ]
        },
        {
          title: "Méthode de travail",
          paragraphs: [
            "Analyse des besoins, conception, plans techniques et rendus 3D : une méthode structurée pour sécuriser chaque étape, de l’audit de vos espaces à la livraison du chantier."
          ]
        },
        {
          title: "Zone d’intervention",
          paragraphs: [
            "Lyon et quart Sud-Est de la France. Intervention possible à distance selon la nature du projet."
          ]
        }
      ]}
    />
  );
}
