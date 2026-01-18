import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Le Toucan | Bar & Restaurant à Narbonne",
  description: "Bienvenue au Toucan, brasserie historique et bar vivant au cœur de Narbonne (Place des Quatre Fontaines). Découvrez notre cuisine locale, nos tapas et l'histoire de Duncan Boyer.",
  keywords: ["Le Toucan", "Bar Narbonne", "Restaurant Narbonne", "Quatre Fontaines", "Duncan Boyer", "Tapas Narbonne", "Brasserie Narbonne"],
  openGraph: {
    title: "Le Toucan | Bar & Restaurant à Narbonne",
    description: "Cuisine locale, tapas et convivialité au cœur de Narbonne.",
    url: "https://letoucan-narbonne.fr",
    siteName: "Le Toucan Narbonne",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Le Toucan",
    "image": "https://letoucan-narbonne.fr/logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 place Albert Thomas",
      "addressLocality": "Narbonne",
      "postalCode": "11100",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.1833,
      "longitude": 3.0000
    },
    "url": "https://letoucan-narbonne.fr",
    "telephone": "+33680751161",
    "servesCuisine": ["French", "Tapas", "Brasserie"],
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "22:00"
      }
    ]
  };

  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-gray-900 bg-[#faf9f6]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
