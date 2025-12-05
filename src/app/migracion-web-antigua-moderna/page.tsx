import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, RefreshCw, Zap, TrendingUp, Shield, Search, ArrowRight, AlertTriangle, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Migración Web Antigua a Moderna sin Perder SEO | Actualización WordPress 2025",
  description: "Migración de webs antiguas a tecnologías modernas. Next.js, React, WordPress actualizado. Sin perder posicionamiento SEO. Desde 3.000€.",
  keywords: [
    "migración web antigua moderna",
    "actualizar web antigua sin perder SEO",
    "migrar WordPress a Next.js",
    "modernizar página web obsoleta",
    "rediseño web manteniendo posicionamiento",
    "migración web sin perder tráfico",
    "actualización tecnológica web",
    "migrar de PHP antiguo a moderno",
    "renovar web antigua Madrid",
    "migración web preservando SEO"
  ],
  openGraph: {
    title: "Migración Web Antigua a Moderna sin Perder SEO | PLUS TECNOLOGIA",
    description: "Moderniza tu web obsoleta. +200% velocidad, SEO preservado, tecnologías actuales. Desde 3.000€.",
    images: ["https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  alternates: {
    canonical: "https://plustecnologia.com/migracion-web-antigua-moderna"
  }
};

const migrationBenefits = [
  {
    icon: Zap,
    title: "+200% Velocidad",
    description: "De 5 segundos a <1 segundo. Tecnologías modernas optimizadas. Core Web Vitals 90+."
  },
  {
    icon: Search,
    title: "SEO Preservado al 100%",
    description: "Redirects 301 estratégicos. Mismo contenido optimizado. URLs preservadas o mapeadas. Sin pérdida de rankings."
  },
  {
    icon: Shield,
    title: "Seguridad Actualizada",
    description: "Elimina vulnerabilidades PHP/WordPress antiguos. HTTPS moderno. Protección contra ataques."
  },
  {
    icon: TrendingUp,
    title: "Conversión Mejorada",
    description: "UX moderna. Mobile-first. CTAs optimizados. Aumento de conversiones 30-50%."
  },
  {
    icon: RefreshCw,
    title: "Fácil Mantenimiento",
    description: "Código limpio y documentado. CMS moderno. Actualizaciones automáticas. Menos costes futuros."
  },
  {
    icon: Code2,
    title: "Stack Moderno",
    description: "Next.js, React, WordPress 6+. Hosting cloud optimizado. Escalabilidad garantizada."
  }
];

const migrationProcess = [
  {
    step: "1",
    title: "Auditoría SEO Inicial",
    description: "Análisis completo de rankings actuales, backlinks, tráfico orgánico, keywords. Mapeo URLs críticas."
  },
  {
    step: "2",
    title: "Backup & Extracción",
    description: "Backup completo sitio actual. Extracción contenido, imágenes, metadata. Base de datos exportada."
  },
  {
    step: "3",
    title: "Desarrollo Nuevo Stack",
    description: "Construcción en tecnología moderna (Next.js/WordPress moderno). Diseño responsive actualizado."
  },
  {
    step: "4",
    title: "Migración Contenido",
    description: "Importación contenido optimizado. Redirects 301 configurados. Schema.org actualizado."
  },
  {
    step: "5",
    title: "Testing Pre-Launch",
    description: "Testing exhaustivo: velocidad, SEO, móvil, enlaces. Comparativa rankings. Ajustes finales."
  },
  {
    step: "6",
    title: "Go-Live + Monitoreo",
    description: "Lanzamiento coordinado. Monitoreo rankings 30 días. Ajustes post-migración. Soporte completo."
  }
];

const packages = [
  {
    name: "Migración Básica",
    price: "3.000€",
    timeline: "3-4 semanas",
    features: [
      "Web hasta 20 páginas",
      "WordPress 6+ o Next.js",
      "Redirects 301 setup",
      "SEO preservation",
      "Diseño responsive moderno",
      "Hosting 1 año incluido",
      "1 mes soporte post-launch"
    ],
    ideal: "Webs corporativas pequeñas"
  },
  {
    name: "Migración Profesional",
    price: "5.500€",
    timeline: "5-7 semanas",
    features: [
      "Web hasta 50 páginas",
      "Stack Next.js/React avanzado",
      "Mapeo URLs completo",
      "Auditoría SEO pre/post",
      "Rediseño UX/UI completo",
      "Optimización velocidad",
      "Analytics migrado",
      "3 meses soporte"
    ],
    ideal: "E-commerce, blogs grandes",
    highlighted: true
  },
  {
    name: "Migración Enterprise",
    price: "Desde 8.000€",
    timeline: "8-12 semanas",
    features: [
      "Web +50 páginas complejas",
      "Headless CMS personalizado",
      "Migración base datos",
      "Integraciones API externas",
      "Testing A/B pre-launch",
      "Formación equipo CMS",
      "CDN y optimización global",
      "6 meses soporte premium"
    ],
    ideal: "Empresas, portales grandes"
  }
];

const faqs = [
  {
    question: "¿Perderé posicionamiento SEO al migrar mi web antigua?",
    answer: "No si se hace correctamente. Implementamos redirects 301 de todas las URLs antiguas a las nuevas, preservamos títulos/meta descriptions optimizados, mantenemos estructura de enlaces internos, y configuramos Search Console para notificar a Google del cambio. Monitoreamos rankings durante 30 días post-migración para detectar y corregir cualquier variación. Nuestras migraciones típicamente mejoran SEO por la velocidad superior."
  },
  {
    question: "¿Cuánto tiempo tarda una migración sin que mi web caiga?",
    answer: "Migración básica: 3-4 semanas. Profesional: 5-7 semanas. El sitio antiguo permanece 100% funcional durante todo el desarrollo. El switch final (go-live) se hace en horario de bajo tráfico y tarda solo 2-4 horas. Incluimos período de doble verificación donde ambos sitios corren en paralelo para asegurar cero downtime."
  },
  {
    question: "Mi web es muy antigua (PHP 5, WordPress 3.x). ¿Es migratable?",
    answer: "Sí, sin importar qué tan antigua sea. Hemos migrado webs desde PHP 5.2, Joomla 1.5, WordPress 2.x, incluso HTML estático de los 2000s. El proceso implica extracción manual del contenido si es necesario, limpieza de código legacy, y reconstrucción completa en stack moderno. Cuanto más antigua, más valor aporta la migración."
  },
  {
    question: "¿Qué pasa con mis emails y dominio durante la migración?",
    answer: "Cero impacto. Los emails son independientes del hosting web. Configuramos DNS para que el dominio apunte al nuevo hosting solo para la web, mientras los registros MX (email) permanecen inalterados. Todo el proceso de migración es transparente para tus cuentas de email y otros servicios del dominio."
  }
];

export default function MigracionWebAntiguaModernaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Migración Web Antigua a Moderna",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PLUS TECNOLOGIA",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madrid",
                "addressCountry": "ES"
              },
              "telephone": "+34915493616"
            },
            "areaServed": "España",
            "description": "Migración profesional de webs antiguas a tecnologías modernas sin perder SEO",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€€",
              "priceCurrency": "EUR",
              "price": "3000"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-amber-600 text-white border-amber-700">
                <RefreshCw className="w-4 h-4 mr-2" />
                Migración Web Moderna
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Migración Web Antigua a <span className="text-amber-600">Moderna</span> sin Perder SEO
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Actualiza tu web obsoleta a <strong>tecnologías modernas</strong>.
                Next.js, React, WordPress 6+. <strong className="text-amber-600">+200% velocidad</strong>,
                SEO preservado al 100%, seguridad actualizada.
                <strong className="text-amber-600"> Desde 3.000€</strong>.
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-sm text-red-800">
                    <strong>¿Tu web es anterior a 2018?</strong> Probablemente tenga vulnerabilidades de seguridad
                    y esté perdiendo visitas por velocidad lenta. Auditoría gratuita.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                  <Link href="/contacto">
                    Auditoría Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">
                    Calcular Migración
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">SEO Preservado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Cero Downtime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">+200% Rápida</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop"
                alt="Migración web antigua a moderna sin perder SEO posicionamiento"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beneficios de <span className="text-amber-600">Modernizar tu Web</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología antigua = pérdida de ventas, visitas y seguridad. Moderniza ahora.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proceso de <span className="text-amber-600">Migración</span>
            </h2>
            <p className="text-xl text-gray-600">
              6 fases para migración exitosa sin perder tráfico
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {migrationProcess.map((phase, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg mt-2">{phase.title}</CardTitle>
                  <CardDescription className="text-sm">{phase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes <span className="text-amber-600">Migración Web</span>
            </h2>
            <p className="text-xl text-gray-600">
              Precio fijo según tamaño y complejidad de tu web actual
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-amber-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && (
                    <Badge className="bg-amber-600 text-white mb-2 w-fit">Más Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-amber-600 mt-4">{pkg.price}</div>
                  <CardDescription className="text-gray-600">{pkg.timeline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-4">Ideal: <strong>{pkg.ideal}</strong></p>
                    <Button asChild className={pkg.highlighted ? "w-full bg-amber-600" : "w-full"}>
                      <Link href="/contacto">Solicitar Auditoría</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preguntas <span className="text-amber-600">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Moderniza tu Web sin Perder SEO
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Auditoría gratuita de tu web actual. Te mostramos qué mejorar, tiempo estimado y presupuesto sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contacto">
                Auditoría Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white/20">
              <Link href="tel:+34915493616">
                Llamar: 915 493 616
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
