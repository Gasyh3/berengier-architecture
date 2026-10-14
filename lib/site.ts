import type { Metadata } from "next";

export const siteUrl = "https://atelier-berengier.fr";
export const siteName = "Bérengier Architecture";

export const contact = {
  email: "berengier.architecture@gmail.com",
  phone: "+33770516162",
  phoneDisplay: "+33 7 70 51 61 62"
} as const;

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/berengier.architecture/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/quentin-bérengier-8aa092206/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61583934541733" }
] as const;

// Pages de contenu, utilisées par le footer, le maillage interne et le sitemap.
export const seoPages = [
  { href: "/architecte-interieur-lyon", label: "Architecte d’intérieur à Lyon" },
  { href: "/services", label: "Services d’architecture d’intérieur" },
  { href: "/plans-3d-architecture", label: "Plans et rendus 3D" },
  { href: "/permis-de-construire-lyon", label: "Permis de construire à Lyon" },
  { href: "/conception-video", label: "Conception vidéo" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" }
] as const;

type PageMetadataInput = {
  // Titre court : le suffixe « | Bérengier Architecture » est ajouté par le layout.
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      locale: "fr_FR",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${siteName} — Architecte d’intérieur à Lyon` }]
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: ["/og-image.jpg"]
    }
  };
}
