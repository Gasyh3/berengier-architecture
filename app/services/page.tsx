import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { pageMetadata } from "@/lib/site";

const path = "/services";

export const metadata: Metadata = pageMetadata({
  title: "Services d’architecture d’intérieur",
  description:
    "Services à la carte à Lyon : plan d’état des lieux, plan projet, plans techniques, rendus 3D photoréalistes et permis de construire, pour particuliers et professionnels.",
  path
});

export default function ServicesPage() {
  return (
    <ContentPage
      path={path}
      title="Services d’architecture d’intérieur"
      intro={[
        "Que vous soyez professionnel ou particulier, Bérengier Architecture vous accompagne sur l’ensemble du projet ou vous propose ses services à la carte.",
        "Chaque prestation est pensée pour clarifier vos choix et sécuriser les étapes du chantier."
      ]}
      sections={[
        {
          title: "EDL — Plan d’état des lieux",
          paragraphs: [
            "Prise de cotes et relevés précis de l’existant, avec des synthèses claires et des livrables prêts à partager. C’est la base technique fiable de tout projet."
          ]
        },
        {
          title: "PRO — Plan projet",
          paragraphs: [
            "Organisation spatiale optimisée, annotations et variantes rapides pour comparer les options d’aménagement avant de vous engager."
          ]
        },
        {
          title: "EXE — Plans techniques",
          paragraphs: [
            "Plans d’exécution détaillés et normalisés, destinés aux équipes chantier, pour que chaque intervenant dispose d’informations précises."
          ]
        },
        {
          title: "3D — Rendus 3D photoréalistes",
          paragraphs: [
            "Des visuels photoréalistes pour se projeter, sécuriser les décisions et convaincre vos clients ou vos investisseurs."
          ]
        },
        {
          title: "PC/DP — Permis de construire et déclaration préalable",
          paragraphs: [
            "Préparation des dossiers et des pièces graphiques nécessaires aux démarches administratives locales."
          ]
        },
        {
          title: "Pour les professionnels de l’aménagement",
          paragraphs: [
            "Cuisinistes, menuisiers, fabricants ou revendeurs de mobilier sur-mesure : je réalise aussi vos plans, rendus 3D et contenus vidéo pour présenter vos projets à vos clients."
          ]
        }
      ]}
    />
  );
}
