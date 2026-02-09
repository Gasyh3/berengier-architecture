import localFont from "next/font/local";

export const racoleta = localFont({
  src: [
    { path: "../public/fonts/Recoleta Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/Recoleta Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Recoleta Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Recoleta SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/Recoleta Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/Recoleta Black.woff2", weight: "900", style: "normal" }
  ],
  variable: "--font-racoleta",
  display: "swap"
});

export const reboleta = localFont({
  src: [{ path: "../public/fonts/Recoleta Light.woff2", weight: "300", style: "normal" }],
  variable: "--font-reboleta",
  display: "swap"
});
