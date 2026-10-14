import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { pageMetadata } from "@/lib/site";

const path = "/architecte-interieur-lyon";

export const metadata: Metadata = pageMetadata({
  title: "Architecte d’intérieur à Lyon",
  description:
    "Architecte d’intérieur à Lyon : rénovation, réagencement, plans techniques, rendus 3D et permis de construire. Un seul interlocuteur, du premier croquis à la livraison.",
  path
});

export default function ArchitecteInterieurLyonPage() {
  return (
    <ContentPage
      path={path}
      title="Architecte d’intérieur à Lyon"
      intro={[
        "Bérengier Architecture accompagne les particuliers et les professionnels qui souhaitent transformer leurs espaces de vie et de travail à Lyon et en Auvergne-Rhône-Alpes.",
        "Rénover, réagencer, optimiser un espace : au-delà de l’esthétique, je propose des solutions claires, fonctionnelles et durables, appuyées par des plans précis et des visuels 3D réalistes."
      ]}
      sections={[
        {
          title: "Un regard de terrain",
          paragraphs: [
            "Diplômé de l’Institut CREAD à Lyon, j’ai grandi dans une famille d’entrepreneurs du bâtiment. Les chantiers, je les connais de l’intérieur — plans à la main comme mains dans le ciment.",
            "Cette double culture, conception et chantier, permet d’anticiper les contraintes techniques dès les premières esquisses et d’éviter les erreurs coûteuses."
          ]
        },
        {
          title: "Un accompagnement complet",
          paragraphs: [
            "De l’audit de vos espaces à la livraison du chantier, je vous guide pas à pas : prise de brief, relevés, plans, variantes, conseils techniques et visuels 3D pour vous aider à prendre les bonnes décisions."
          ],
          items: [
            "Vos envies, nos idées : des solutions sur-mesure, adaptées à votre style et à votre quotidien",
            "Fonctionnel et durable : chaque choix allie esthétique, usage et pérennité",
            "Un service abouti : un seul interlocuteur, du premier croquis à la dernière finition"
          ]
        },
        {
          title: "Services proposés",
          items: [
            "Plan d’état des lieux (relevés et prise de cotes)",
            "Plan projet et variantes d’aménagement",
            "Plans techniques et plans d’exécution",
            "Rendus 3D photoréalistes",
            "Permis de construire et déclaration préalable",
            "Conception vidéo pour valoriser vos projets"
          ]
        },
        {
          title: "Zone d’intervention",
          paragraphs: [
            "Lyon, métropole lyonnaise et quart Sud-Est de la France. Interventions possibles à distance selon la nature du projet."
          ]
        }
      ]}
    />
  );
}
