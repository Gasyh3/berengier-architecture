import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { racoleta, reboleta } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialLoader from "@/components/InitialLoader";
import { contact, siteName, siteUrl, socialLinks } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const defaultTitle = "Architecte d’intérieur à Lyon | Bérengier Architecture";
const defaultDescription =
  "Architecte d’intérieur à Lyon : plans d’état des lieux, plans techniques, rendus 3D photoréalistes et permis de construire, pour particuliers et professionnels.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Quentin Bérengier" }],
  creator: siteName,
  formatDetection: { telephone: false, email: false, address: false },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bérengier Architecture — Architecte d’intérieur à Lyon"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: "/assets/favicon.ico",
    apple: "/assets/logo/ico.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0E0E0E"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "fr-FR",
      publisher: { "@id": `${siteUrl}/#business` }
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/og-image.jpg`,
      logo: `${siteUrl}/assets/logo/noir_sf.png`,
      description: defaultDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.764,
        longitude: 4.8357
      },
      areaServed: [
        { "@type": "City", name: "Lyon" },
        { "@type": "AdministrativeArea", name: "Métropole de Lyon" },
        { "@type": "AdministrativeArea", name: "Auvergne-Rhône-Alpes" },
        { "@type": "Country", name: "France" }
      ],
      priceRange: "€€",
      telephone: contact.phone,
      email: contact.email,
      sameAs: socialLinks.map((link) => link.href),
      founder: {
        "@type": "Person",
        name: "Quentin Bérengier",
        jobTitle: "Architecte d’intérieur",
        alumniOf: "Institut CREAD Lyon"
      },
      knowsAbout: [
        "Architecture d’intérieur",
        "Plans techniques",
        "Rendus 3D photoréalistes",
        "Permis de construire",
        "Déclaration préalable",
        "Vidéo architecturale"
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services à la carte",
        itemListElement: [
          "Plan d’état des lieux (EDL)",
          "Plan projet",
          "Plans techniques et d’exécution",
          "Rendus 3D photoréalistes",
          "Permis de construire et déclaration préalable",
          "Conception vidéo pour professionnels de l’aménagement"
        ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } }))
      }
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${racoleta.variable} ${reboleta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <InitialLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
