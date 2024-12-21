import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@components/JsonLd";
import { Footer } from "@components/Footer";
import { Navigation } from "@components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "...", // reemplazar ... por el nombre de la empresa
    template: `%s || ...`, // reemplazar ... por el nombre de la empresa
  },
  description: "...",
  keywords: [], // Agregar las keywords correspondientes en formato string ["keyword1", "keyword2", ...]
  openGraph: {
    type: "website",
    url: "https://....com", // reemplazar ... por la url del sitio
    title: "...",
    site_name: "...",
    description: "...",
    images: [
      {
        url: "https://....com/logo.webp", // Cargar en carpeta public logo en formato .webp
        alt: "...",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@...",
    title: "...",
    description: "...",
    images: ["https://...com/logo.webp"],
  },
};

/* JSON-LD Completar con los datos de redes*/
const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "",
  "url": "",
  "logo": "",
  "sameAs": [
    "https://www.facebook.com/...",
    "https://www.instagram.com/...",
    "https://x.com/...",
    "https://www.youtube.com/...",
    "https://www.tiktok.com/..."
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>

        {/* Meta Tags Básicas */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="montvlein" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <Navigation/>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer/>
        <JsonLd data={jsonLdData} />
      </body>
    </html>
  );
}
