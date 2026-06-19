import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { BackToTop } from "@/components/ui/BackToTop";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nuisicontrole.fr"),
  title: {
    default: "Nuisi Contrôle | Dératisation, désinsectisation, désinfection & dépigeonnage",
    template: "%s | Nuisi Contrôle",
  },
  description:
    "Nuisi Contrôle intervient dans l’Ain, la Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais pour la dératisation, désinsectisation, désinfection et dépigeonnage.",
  openGraph: {
    title: "Nuisi Contrôle",
    description:
      "Dératisation, désinsectisation, désinfection et dépigeonnage dans l’Ain et la région lyonnaise.",
    url: "https://www.nuisicontrole.fr",
    siteName: "Nuisi Contrôle",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo/logo-nuisi-controle.png",
        width: 1200,
        height: 630,
        alt: "Nuisi Contrôle",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nuisi Contrôle",
              image:
                "https://www.nuisicontrole.fr/logo/logo-nuisi-controle.png",
              url: "https://www.nuisicontrole.fr",
              telephone: "+33662332036",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toussieux",
                addressRegion: "Ain",
                addressCountry: "FR",
              },
              areaServed: [
                "Toussieux",
                "Ain",
                "Dombes",
                "Val de Saône",
                "Nord Lyonnais",
                "Bassin lyonnais",
                "Lyon",
                "Villeurbanne",
                "Caluire-et-Cuire",
                "Rillieux-la-Pape",
                "Villefranche-sur-Saône",
                "Trévoux",
                "Reyrieux",
              ],
              priceRange: "€€",
              description:
                "Entreprise spécialisée en dératisation, désinsectisation, désinfection et dépigeonnage dans l’Ain et la région lyonnaise.",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
