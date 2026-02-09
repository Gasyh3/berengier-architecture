import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import IntroStatement from "@/components/IntroStatement";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import ProcessStatement from "@/components/ProcessStatement";
import ValuesTriptych from "@/components/ValuesTriptych";
import GallerySplit from "@/components/GallerySplit";
import ServicesAlaCarte from "@/components/ServicesAlaCarte";
import AboutIntro from "@/components/AboutIntro";
import AboutSplitHero from "@/components/AboutSplitHero";
import AboutBioSplit from "@/components/AboutBioSplit";
import GalleryMosaicTall from "@/components/GalleryMosaicTall";
import ProjectionIntro from "@/components/ProjectionIntro";
import ProjectionVideoSplit from "@/components/ProjectionVideoSplit";
import VideoServicesSplit from "@/components/VideoServicesSplit";
import ContactSection from "@/components/ContactSection";
import ServiceCard from "@/components/ServiceCard";
import ReelCard from "@/components/ReelCard";
import Image from "next/image";

const images = [
  {
    src: "/assets/3D/14ce0d00-514b-4e02-988d-92754cbed77b.png"
  },
  {
    src: "/assets/DukeDSC_4803.jpg"
  }
];

const services = [
  {
    title: "Prise de côtes + EDL",
    description: "Relevés précis, synthèses claires et livrables prêts à partager."
  },
  {
    title: "Plan projet",
    description: "Organisation spatiale optimisée, annotations et variantes rapides."
  },
  {
    title: "Plan d’execution",
    description: "Plans détaillés et normalisés pour les équipes chantier."
  },
  {
    title: "Rendus 3D",
    description: "Visuels photoréalistes pour convaincre vos clients et investisseurs."
  }
];

const partners = ["2B Prestige", "BatiNova", "Atelier 3G", "Link Travaux", "Horizon Bois", "Quartus Local"];

const contactInfo = [
  { label: "Email", value: "berengier.architecture@gmail.com", icon: "✉" },
  { label: "Téléphone", value: "+33 7 70 51 61 62", icon: "☎" },
  { label: "Disponibilités", value: "Lundi - Vendredi · 8h / 19h", icon: "⌛" },
  { label: "Localisation", value: "Lyon · Interventions France entière", icon: "📍" }
];

const reels = [
  {
    title: "Rendu 3D · Programme tertiaire",
    src: "/assets/videos/vd11.mp4",
    description: "Organisation de plateaux bureaux, circulation optimisée et matériaux premium."
  },
  {
    title: "Rendu 3D · Réhabilitation patrimoniale",
    src: "/assets/videos/vd222.mp4",
    description: "Projection photo-réaliste pour convaincre sur un projet de réhabilitation lourde."
  }
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <IntroStatement />
      <ShowcaseGrid />
      <ProcessStatement />
      <ValuesTriptych />
      <GallerySplit />
      <ServicesAlaCarte />
      <AboutIntro />
      <AboutSplitHero />
      <AboutBioSplit />
      <GalleryMosaicTall />
      <ProjectionIntro />
      <ProjectionVideoSplit />
      <VideoServicesSplit />
      <ContactSection />


    </div>
  );
}
