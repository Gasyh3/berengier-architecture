import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import { pageMetadata } from "@/lib/site";

const path = "/conception-video";

export const metadata: Metadata = pageMetadata({
  title: "Conception vidéo pour l’aménagement",
  description:
    "Vidéos architecturales pour cuisinistes, menuisiers et fabricants de mobilier sur-mesure : présentations clients, vidéos courtes pour les réseaux et mises en ambiance.",
  path
});

export default function ConceptionVideoPage() {
  return (
    <ContentPage
      path={path}
      title="Conception vidéo pour l’aménagement"
      intro={[
        "Pour valoriser un savoir-faire, rien de plus puissant qu’une vidéo claire, réaliste et bien rythmée.",
        "La vidéo permet de montrer les volumes, la circulation et les ambiances d’un projet de manière immersive."
      ]}
      sections={[
        {
          title: "Pensées pour vendre, conçues pour convaincre",
          paragraphs: [
            "Je crée des contenus vidéo pour les professionnels de l’aménagement : cuisinistes, menuisiers, fabricants ou revendeurs de mobilier sur-mesure."
          ],
          items: [
            "Présentation de projets pour vos clients",
            "Vidéos courtes pour animer vos réseaux sociaux",
            "Mise en avant de vos produits dans des ambiances réalistes"
          ]
        },
        {
          title: "Un rendu fidèle et soigné",
          paragraphs: [
            "Rythme, lumière, textures : chaque détail est maîtrisé pour transmettre l’intention du projet.",
            "Mon approche\u00a0? Montrer votre travail sous son meilleur angle, sans artifice. Des vidéos utiles, esthétiques, au service de vos objectifs."
          ]
        }
      ]}
    />
  );
}
