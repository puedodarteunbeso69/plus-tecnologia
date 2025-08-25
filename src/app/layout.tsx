import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientBody from "./ClientBody";
import { Analytics } from "@/components/Analytics";
import { StructuredData } from "@/components/StructuredData";

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
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "pending-verification",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "pending-verification",
  },
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "pending-verification",
    "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "pending-verification",
    "yandex-verification": process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "pending-verification",
    "pinterest-verification": process.env.NEXT_PUBLIC_PINTEREST_VERIFICATION || "",
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
        <StructuredData type="organization" />
        <StructuredData type="website" />
        <Analytics />
      </head>
      <ClientBody className={inter.className}>{children}</ClientBody>
    </html>
  );
}
