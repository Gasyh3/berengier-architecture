import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { pageMetadata } from "@/lib/site";

const path = "/plans-3d-architecture";

export const metadata: Metadata = pageMetadata({
  title: "Plans et rendus 3D d’architecture",
  description:
    "Plans 3D et rendus photoréalistes à Lyon pour visualiser volumes, matériaux et ambiances avant travaux. Pour particuliers, architectes et entreprises du bâtiment.",
  path
});

export default function Plans3DPage() {
  return (
    <ContentPage
      path={path}
      title="Plans et rendus 3D d’architecture"
      intro={[
        "Les plans 3D et les rendus photoréalistes permettent de sécuriser les choix esthétiques et techniques avant le chantier.",
        "Ils offrent une vision claire des volumes, des matériaux et des ambiances, bien plus parlante qu’un plan 2D seul."
      ]}
      sections={[
        {
          title: "Visualiser avant de construire",
          paragraphs: [
            "Chaque visuel est conçu pour refléter fidèlement votre projet, faciliter la validation et accélérer les décisions. Les variantes de matériaux, de couleurs ou d’agencement se comparent facilement."
          ]
        },
        {
          title: "Des rendus adaptés à chaque usage",
          items: [
            "Présentations clients et validation de projet",
            "Dossiers de vente et supports commerciaux",
            "Communication sur les réseaux sociaux",
            "Mise en avant de produits dans des ambiances réalistes"
          ]
        },
        {
          title: "Une base technique solide",
          paragraphs: [
            "Les rendus s’appuient sur des relevés et des plans précis : ce que vous voyez en 3D correspond à ce qui peut être réalisé sur le chantier."
          ]
        }
      ]}
    />
  );
}
