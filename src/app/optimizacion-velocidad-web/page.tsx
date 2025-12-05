import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, TrendingUp, Search, DollarSign, Clock, ArrowRight, Gauge, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Optimización Velocidad Web Madrid | Core Web Vitals 90+ | Mejora WPO 2025",
  description: "Servicio de optimización de velocidad web. PageSpeed 90+, Core Web Vitals optimizados. Mejora SEO y conversión. Auditoría gratuita. Desde 800€.",
  keywords: [
    "optimización velocidad web Madrid",
    "mejorar velocidad página web",
    "Core Web Vitals optimización",
    "PageSpeed 90+ score",
    "WPO web performance optimization",
    "acelerar carga web",
    "optimizar WordPress velocidad",
    "reducir tiempo carga web",
    "mejora velocidad SEO Google",
    "web lenta solución"
  ],
  openGraph: {
    title: "Optimización Velocidad Web | Core Web Vitals 90+ | PLUS TECNOLOGIA",
    description: "Tu web carga en <1 segundo. PageSpeed 90+, más conversiones, mejor SEO. Desde 800€.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  alternates: {
    canonical: "https://plustecnologia.com/optimizacion-velocidad-web"
  }
};

const speedBenefits = [
  {
    icon: TrendingUp,
    title: "+25% Conversiones",
    description: "1 segundo menos = 7% más conversiones. Usuarios compran más en webs rápidas. ROI inmediato."
  },
  {
    icon: Search,
    title: "Mejor Posicionamiento SEO",
    description: "Google prioriza webs rápidas. Core Web Vitals es factor ranking. Más visibilidad orgánica."
  },
  {
    icon: DollarSign,
    title: "Menor Bounce Rate",
    description: "53% usuarios abandonan si carga >3seg. Velocidad = retención. Menos rebote, más engagement."
  },
  {
    icon: Zap,
    title: "Experiencia Superior",
    description: "UX fluida. Navegación instantánea. Usuarios satisfechos regresan y recomiendan."
  },
  {
    icon: Clock,
    title: "Mobile Performance",
    description: "60% tráfico es móvil. Optimización 4G/5G. Carga rápida en cualquier dispositivo."
  },
  {
    icon: Gauge,
    title: "PageSpeed 90+ Score",
    description: "Certificado Google PageSpeed Insights verde. Core Web Vitals 'Good'. Lighthouse 90+."
  }
];

const optimizationTechniques = [
  {
    title: "Imágenes Optimizadas",
    description: "WebP/AVIF, lazy loading, responsive images, CDN delivery",
    impact: "60-70% reducción peso"
  },
  {
    title: "CSS/JS Minificado",
    description: "Minify, tree shaking, code splitting, eliminación CSS no usado",
    impact: "40-50% menos código"
  },
  {
    title: "Caché Estratégico",
    description: "Browser cache, server cache, CDN cache, service workers",
    impact: "80% visitas instantáneas"
  },
  {
    title: "Server Optimization",
    description: "HTTP/2, Gzip/Brotli, database optimization, PHP 8+",
    impact: "3x respuesta servidor"
  },
  {
    title: "Font Optimization",
    description: "Font-display swap, subsetting, preload critical fonts",
    impact: "Elimina FOIT/FOUT"
  },
  {
    title: "Critical CSS Inline",
    description: "Above-fold CSS inline, async non-critical, preconnect CDN",
    impact: "First Paint <0.5s"
  }
];

const packages = [
  {
    name: "Auditoría + Quick Wins",
    price: "800€",
    timeline: "1 semana",
    features: [
      "Auditoría PageSpeed detallada",
      "Optimización imágenes",
      "Minificación CSS/JS",
      "Caché navegador setup",
      "Reporte pre/post",
      "Mejora 30-50 puntos típica"
    ],
    ideal: "Webs pequeñas, WordPress básico",
    improvement: "+30-50 pts"
  },
  {
    name: "Optimización Completa",
    price: "1.800€",
    timeline: "2-3 semanas",
    features: [
      "Todo de Auditoría +",
      "CDN CloudFlare setup",
      "Lazy loading avanzado",
      "Database optimization",
      "Critical CSS inline",
      "Core Web Vitals 'Good'",
      "3 meses monitoreo"
    ],
    ideal: "E-commerce, webs corporativas",
    highlighted: true,
    improvement: "+50-70 pts"
  },
  {
    name: "Performance Enterprise",
    price: "Desde 3.500€",
    timeline: "4-6 semanas",
    features: [
      "Todo de Completa +",
      "Migración a Next.js/Astro",
      "Server-side optimization",
      "Custom caching strategy",
      "A/B testing performance",
      "PageSpeed 95+ garantizado",
      "6 meses soporte"
    ],
    ideal: "Portales grandes, apps web",
    improvement: "+70-90 pts"
  }
];

const caseStudies = [
  {
    client: "E-commerce Moda",
    before: { score: 32, load: "5.8s", conversions: "2.1%" },
    after: { score: 94, load: "0.9s", conversions: "3.2%" },
    impact: "+52% ventas en 3 meses"
  },
  {
    client: "Blog Tecnología",
    before: { score: 45, load: "4.2s", bounce: "68%" },
    after: { score: 96, load: "1.1s", bounce: "42%" },
    impact: "+120% páginas/sesión"
  }
];

const faqs = [
  {
    question: "¿Cuánto se puede mejorar la velocidad de mi web?",
    answer: "Depende del estado actual. Webs con PageSpeed 20-40 pueden llegar a 85-95 (mejora +50-70 puntos). Webs ya optimizadas (60-70) pueden alcanzar 90-95 (+20-30 puntos). Hacemos auditoría gratuita previa para darte estimación exacta. La mayoría de webs WordPress estándar pasan de ~40 a ~90 puntos."
  },
  {
    question: "¿La optimización afecta al diseño o funcionalidades de mi web?",
    answer: "No. La optimización es 100% bajo el capó: compresión imágenes, minificación código, configuración servidor, caché estratégico. Todo invisible para el usuario final. El diseño, funcionalidades, contenido permanecen idénticos, solo que cargan 3-5x más rápido. Si algún plugin causa lentitud extrema, te proponemos alternativa ligera equivalente."
  },
  {
    question: "¿Cuánto tarda en verse el impacto en SEO y conversiones?",
    answer: "Inmediato en conversiones (usuarios notan velocidad al instante). SEO tarda 2-4 semanas: Google re-crawlea tu web, actualiza Core Web Vitals en Search Console, y ajusta rankings. Típicamente vemos +15-25% tráfico orgánico en 60 días post-optimización, especialmente en búsquedas móviles donde velocidad pesa más."
  },
  {
    question: "¿Necesito mantenimiento continuo o es una sola vez?",
    answer: "Optimización inicial es one-time. Pero webs cambian: nuevos plugins, imágenes, contenido. Recomendamos monitoreo trimestral (incluido 3-6 meses según paquete) para mantener score alto. Después, auditoría anual (300€) asegura que nuevas actualizaciones WordPress/plugins no degraden performance."
  }
];

export default function OptimizacionVelocidadWebPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Optimización de Velocidad Web",
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
            "description": "Optimización profesional de velocidad web y Core Web Vitals",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€",
              "priceCurrency": "EUR",
              "price": "800"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-green-600 text-white border-green-700">
                <Zap className="w-4 h-4 mr-2" />
                Optimización Velocidad Web
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Optimización de <span className="text-green-600">Velocidad Web</span> PageSpeed 90+
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Tu web cargando en <strong>menos de 1 segundo</strong>.
                Core Web Vitals optimizados, PageSpeed 90+, <strong className="text-green-600">+25% conversiones</strong>.
                Mejora SEO Google y experiencia de usuario.
                <strong className="text-green-600"> Desde 800€</strong>.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-sm text-amber-900">
                  <strong>¿Tu web tarda más de 3 segundos?</strong> Estás perdiendo 50% de visitantes.
                  Auditoría gratuita para ver tu puntuación actual.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                  <Link href="/contacto">
                    Auditoría Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">
                    Ver Precio
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Score 90+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Más SEO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">+25% Ventas</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Optimización velocidad web PageSpeed Core Web Vitals profesional"
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
              Por qué <span className="text-green-600">Optimizar Velocidad</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Velocidad no es lujo, es necesidad. Impacto directo en ventas y SEO.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speedBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
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

      {/* Optimization Techniques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Técnicas de <span className="text-green-600">Optimización</span>
            </h2>
            <p className="text-xl text-gray-600">
              Más de 20 optimizaciones técnicas para máxima velocidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {optimizationTechniques.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <ImageIcon className="w-8 h-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">{tech.title}</CardTitle>
                  <CardDescription className="text-sm mb-2">{tech.description}</CardDescription>
                  <Badge variant="secondary" className="w-fit">{tech.impact}</Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Resultados <span className="text-green-600">Reales</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl">{study.client}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded">
                      <div className="text-sm text-gray-600 mb-1">Antes</div>
                      <div className="text-2xl font-bold text-red-600">Score {study.before.score}</div>
                      <div className="text-sm text-gray-600">{study.before.load}</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded">
                      <div className="text-sm text-gray-600 mb-1">Después</div>
                      <div className="text-2xl font-bold text-green-600">Score {study.after.score}</div>
                      <div className="text-sm text-gray-600">{study.after.load}</div>
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded">
                    <div className="text-lg font-semibold text-blue-700">{study.impact}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes <span className="text-green-600">Optimización</span>
            </h2>
            <p className="text-xl text-gray-600">
              Precio fijo según nivel de optimización necesaria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-green-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && (
                    <Badge className="bg-green-600 text-white mb-2 w-fit">Más Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-600 mt-4">{pkg.price}</div>
                  <CardDescription className="text-gray-600">{pkg.timeline}</CardDescription>
                  <Badge variant="outline" className="mt-2 w-fit border-green-600 text-green-600">
                    {pkg.improvement}
                  </Badge>
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
                    <Button asChild className={pkg.highlighted ? "w-full bg-green-600" : "w-full"}>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preguntas <span className="text-green-600">Frecuentes</span>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Acelera tu Web Hoy
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Auditoría gratuita de PageSpeed. Te mostramos puntuación actual, qué optimizar, y presupuesto exacto.
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
