import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { pageMetadata } from "@/lib/site";

const path = "/permis-de-construire-lyon";

export const metadata: Metadata = pageMetadata({
  title: "Permis de construire à Lyon",
  description:
    "Permis de construire et déclaration préalable à Lyon : plans, coupes, façades et pièces graphiques préparés pour faciliter l’instruction de votre dossier.",
  path
});

export default function PermisConstruirePage() {
  return (
    <ContentPage
      path={path}
      title="Permis de construire à Lyon"
      intro={[
        "Préparation complète des pièces graphiques et des plans nécessaires au dépôt d’un permis de construire ou d’une déclaration préalable.",
        "Une approche claire, conforme aux exigences locales, pour un dépôt plus fluide."
      ]}
      sections={[
        {
          title: "Des dossiers complets et lisibles",
          paragraphs: [
            "Chaque élément est pensé pour faciliter l’instruction du dossier par les services d’urbanisme."
          ],
          items: ["Plans de situation et plans de masse", "Plans, coupes et façades", "Documents d’intégration du projet"]
        },
        {
          title: "Coordination locale",
          paragraphs: [
            "Connaissance des règles urbaines à Lyon et dans le quart Sud-Est de la France pour anticiper les points de vigilance avant le dépôt."
          ]
        },
        {
          title: "Un projet cohérent de bout en bout",
          paragraphs: [
            "Les pièces administratives s’appuient sur les mêmes relevés et plans que le reste du projet : plans techniques et rendus 3D restent cohérents avec le dossier déposé."
          ]
        }
      ]}
    />
  );
}
