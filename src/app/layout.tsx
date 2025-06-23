import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "../styles/globals.scss";


const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Olivier Bretaud",
  description: "Je développe des applications JavaScript au sein de l'agence Bakasable depuis 6 ans.",
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
