import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { racoleta, reboleta } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InitialLoader from "@/components/InitialLoader";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const siteUrl = "https://atelier-berengier.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bérengier Architecture | Architecte à Lyon · Plans & Rendus 3D",
    template: "%s | Bérengier Architecture"
  },
  description:
    "Bérengier Architecture accompagne les entreprises du bâtiment à Lyon et en France : plans techniques, relevés, modélisations BIM et rendus 3D photoréalistes.",
  keywords: [
    "Bérengier",
    "Berengier architecture",
    "architecte lyon",
    "architecte d'intérieur lyon",
    "plans techniques lyon",
    "rendus 3D lyon",
    "atelier berengier",
    "architecte indépendant lyon"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Bérengier Architecture | Architecte à Lyon · Plans & Rendus 3D",
    description:
      "Plans techniques, relevés et rendus 3D pour les professionnels du bâtiment à Lyon et partout en France.",
    url: siteUrl,
    siteName: "Bérengier Architecture",
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
    title: "Bérengier Architecture | Architecte à Lyon · Plans & Rendus 3D",
    description:
      "Architecte indépendant basé à Lyon : plans techniques, modélisations et rendus 3D pour entreprises du bâtiment.",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: "/assets/favicon.ico"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bérengier Architecture",
  url: siteUrl,
  image: `${siteUrl}/assets/logo/noir_sf.png`,
  logo: `${siteUrl}/assets/logo/noir_sf.png`,
  description:
    "Architecte d’intérieur à Lyon spécialisé en plans techniques, rendus 3D photoréalistes et conception sur mesure.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lyon",
    addressCountry: "FR"
  },
  areaServed: ["Lyon", "Auvergne-Rhône-Alpes", "France"],
  priceRange: "€€",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.764,
    longitude: 4.8357
  },
  telephone: "+33770516162",
  email: "berengier.architecture@gmail.com",
  sameAs: ["https://www.instagram.com/", "https://www.linkedin.com/", "https://www.facebook.com/"],
  founder: {
    "@type": "Person",
    name: "Bérengier"
  }
} as const;

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
