import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "../styles/globals.scss";
import { year } from "@/ressources/projects";


const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
});

const description = `Depuis ${year} ans, je crée des applications web pensées pour offrir une expérience utilisateur de qualité.`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Olivier Bretaud",
  description,
  openGraph: {
    title: "Olivier Bretaud — Développeur React.js/Node.js",
    description,
    url: "/",
    siteName: "Olivier Bretaud",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivier Bretaud — Développeur React.js/Node.js",
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark">
      <body
        className={`${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
