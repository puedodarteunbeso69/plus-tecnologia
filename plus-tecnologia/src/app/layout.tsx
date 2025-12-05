import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLUS TECNOLOGIA | Desarrollo de Aplicaciones y Servicios IT Profesionales",
  description: "PLUS TECNOLOGIA ofrece desarrollo de aplicaciones móviles, desarrollo web profesional y soluciones IT empresariales. Especialistas en software a medida con más de 10 años de experiencia.",
  keywords: [
    "desarrollo de aplicaciones móviles",
    "desarrollo web profesional",
    "servicios tecnológicos",
    "soluciones IT empresariales",
    "desarrollo de software a medida",
    "aplicaciones Android iOS",
    "páginas web responsive",
    "sistemas empresariales",
    "consultoría tecnológica",
    "PLUS TECNOLOGIA"
  ],
  authors: [{ name: "PLUS TECNOLOGIA" }],
  creator: "PLUS TECNOLOGIA",
  publisher: "PLUS TECNOLOGIA",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://plustecnologia.com",
    siteName: "PLUS TECNOLOGIA",
    title: "PLUS TECNOLOGIA | Desarrollo de Aplicaciones y Servicios IT",
    description: "Especialistas en desarrollo de aplicaciones móviles, desarrollo web y soluciones tecnológicas empresariales. Transformamos ideas en soluciones digitales innovadoras.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PLUS TECNOLOGIA - Servicios de Desarrollo Tecnológico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PLUS TECNOLOGIA | Desarrollo de Aplicaciones y Servicios IT",
    description: "Especialistas en desarrollo de aplicaciones móviles, desarrollo web y soluciones tecnológicas empresariales.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://plustecnologia.com",
    languages: {
      "es-ES": "https://plustecnologia.com",
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "PLUS TECNOLOGIA",
              "description": "Empresa especializada en desarrollo de aplicaciones móviles, desarrollo web y soluciones IT empresariales",
              "url": "https://plustecnologia.com",
              "logo": "https://plustecnologia.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "915493616",
                "contactType": "ventas",
                "availableLanguage": "Spanish",
                "email": "info@plustecologia.es"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C. de Orense, 68, 12º",
                "addressLocality": "Madrid",
                "addressRegion": "Tetuán",
                "postalCode": "28020",
                "addressCountry": "ES"
              },
              "sameAs": [
                "https://linkedin.com/company/plustecnologia",
                "https://twitter.com/plustecnologia"
              ],
              "offers": {
                "@type": "Service",
                "serviceType": [
                  "Desarrollo de Aplicaciones Móviles",
                  "Desarrollo Web",
                  "Consultoría IT",
                  "Soluciones Empresariales"
                ]
              }
            })
          }}
        />
      </head>
      <ClientBody className={inter.className}>{children}</ClientBody>
    </html>
  );
}
