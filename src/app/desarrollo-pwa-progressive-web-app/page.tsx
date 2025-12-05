import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Zap, DollarSign, Star, Wifi, ArrowRight, Download, Bell, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo PWA Progressive Web App Madrid | Apps Web sin Tiendas 2025",
  description: "Desarrollo de PWA Progressive Web Apps en Madrid. Apps web que funcionan offline, notificaciones push, instalables. Sin App Store ni Google Play. Desde 4.000€.",
  keywords: [
    "desarrollo PWA Madrid",
    "Progressive Web App desarrollo",
    "app web instalable",
    "PWA offline first",
    "aplicación web progresiva",
    "PWA notificaciones push",
    "desarrollo web app Madrid",
    "PWA vs app nativa",
    "app sin tienda aplicaciones",
    "Progressive Web Application"
  ],
  openGraph: {
    title: "Desarrollo PWA Progressive Web App | PLUS TECNOLOGIA",
    description: "PWA profesionales. Apps web instalables, offline, push notifications. Sin stores. Desde 4.000€.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo PWA - Apps Web Progresivas sin Tiendas de Apps",
    description: "PWA instalables, offline, push notifications. Más económico que apps nativas.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://plustecnologia.com/desarrollo-pwa-progressive-web-app"
  }
};

const pwaFeatures = [
  {
    icon: Download,
    title: "Instalable sin Tiendas",
    description: "Usuarios instalan desde navegador. Sin App Store ni Google Play. Actualizaciones automáticas instantáneas."
  },
  {
    icon: Wifi,
    title: "Funciona Offline",
    description: "Service Workers para modo offline. Caché inteligente. Sincronización background cuando vuelve conexión."
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Notificaciones push nativas. Engagement igual que app nativa. Compatible iOS 16.4+ y Android."
  },
  {
    icon: DollarSign,
    title: "60% Más Económico",
    description: "Sin comisiones App Store (30%). Un solo desarrollo web responsive. Mantenimiento simplificado."
  },
  {
    icon: Zap,
    title: "Performance Nativo",
    description: "Carga instantánea con caché. Transiciones fluidas. Core Web Vitals optimizados. Lighthouse 90+."
  },
  {
    icon: Globe,
    title: "SEO + Discoverabilidad",
    description: "Indexable en Google. URLs compartibles. Instalación desde búsqueda web. Mejor que apps para SEO."
  }
];

const packages = [
  {
    name: "PWA Básica",
    price: "4.000€",
    timeline: "4-6 semanas",
    features: [
      "5-7 pantallas responsive",
      "Instalable en dispositivos",
      "Modo offline básico",
      "Service Worker optimizado",
      "Caché estratégico",
      "Manifest PWA completo",
      "3 meses soporte"
    ],
    ideal: "Blogs, portfolios, catálogos"
  },
  {
    name: "PWA Profesional",
    price: "7.000€",
    timeline: "6-9 semanas",
    features: [
      "10-12 pantallas complejas",
      "Push notifications setup",
      "Offline-first architecture",
      "Sincronización background",
      "IndexedDB persistencia",
      "Lighthouse 95+ score",
      "Analytics integrado",
      "6 meses soporte"
    ],
    ideal: "E-commerce, servicios, SaaS",
    highlighted: true
  },
  {
    name: "PWA Enterprise",
    price: "Desde 12.000€",
    timeline: "10-14 semanas",
    features: [
      "App compleja escalable",
      "API GraphQL/REST custom",
      "Authentication avanzada",
      "Real-time WebSockets",
      "Geolocalización y mapas",
      "Payment integration",
      "CI/CD automatizado",
      "12 meses soporte premium"
    ],
    ideal: "Startups, productos complejos"
  }
];

const useCases = [
  {
    title: "E-commerce",
    description: "Tienda online instalable. Notificaciones de ofertas. Navegación offline del catálogo.",
    savings: "Sin comisión 30% stores"
  },
  {
    title: "Noticias/Blogs",
    description: "Contenido descargable offline. Push de noticias. SEO superior a app nativa.",
    savings: "Más tráfico orgánico"
  },
  {
    title: "Servicios B2B",
    description: "CRM/ERP web accesible. Funciona sin internet. Sincroniza cuando hay conexión.",
    savings: "Un solo desarrollo"
  },
  {
    title: "Booking/Reservas",
    description: "Sistema reservas instalable. Notificaciones recordatorios. Actualizaciones instantáneas.",
    savings: "Sin reviews stores"
  }
];

const faqs = [
  {
    question: "¿Qué es una PWA y en qué se diferencia de una app nativa?",
    answer: "Una PWA (Progressive Web App) es una aplicación web que se comporta como app nativa: instalable en home screen, funciona offline, envía notificaciones push. Diferencia clave: se desarrolla con tecnologías web (HTML/CSS/JavaScript) y no requiere App Store ni Google Play. El usuario la instala directamente desde el navegador."
  },
  {
    question: "¿Las PWA funcionan igual de bien que apps nativas?",
    answer: "Para el 80% de casos de uso, sí. PWAs modernas alcanzan 95% del performance nativo y tienen acceso a casi todas las APIs: cámara, geolocalización, sensores, notificaciones. Limitaciones: no son ideales para juegos 3D intensivos, apps con procesamiento pesado, o funcionalidades muy específicas de iOS/Android que requieran APIs privadas."
  },
  {
    question: "¿Por qué una PWA es más económica que una app nativa?",
    answer: "Múltiples razones: 1) Un solo desarrollo web vs iOS+Android separados (ahorro 50-60%). 2) Sin comisiones App Store/Google Play (30% de ventas). 3) Actualizaciones instantáneas sin aprobación de stores. 4) Mantenimiento simplificado (una sola base código). 5) Hosting web estándar vs infraestructura app compleja."
  },
  {
    question: "¿Las PWA aparecen en App Store o Google Play?",
    answer: "No necesitan estar en tiendas (esa es su ventaja). Los usuarios las instalan directamente desde el navegador o desde búsquedas Google. Sin embargo, si por estrategia quieres presencia en stores, Google Play ahora permite publicar PWAs via TWA (Trusted Web Activities). Apple no permite PWAs en App Store, pero funcionan perfectamente en iOS 16.4+."
  }
];

export default function DesarrolloPWAProgressiveWebAppPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Desarrollo de Progressive Web Apps (PWA)",
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
            "description": "Desarrollo profesional de Progressive Web Apps instalables con modo offline",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€€",
              "priceCurrency": "EUR",
              "price": "4000"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-indigo-600 text-white border-indigo-700">
                <Globe className="w-4 h-4 mr-2" />
                Progressive Web Apps
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo de <span className="text-indigo-600">PWA</span> Progressive Web Apps
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Apps web <strong>instalables</strong> que funcionan offline y envían notificaciones.
                Sin App Store ni Google Play. <strong className="text-indigo-600">60% más económico</strong> que apps nativas.
                <strong className="text-indigo-600"> Desde 4.000€</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8">
                  <Link href="/contacto">
                    Consulta Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">
                    Calcular Precio PWA
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Instalable</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Offline</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Push Notif.</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Desarrollo PWA Progressive Web App instalable offline profesional"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ventajas de las <span className="text-indigo-600">PWA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lo mejor de la web + lo mejor de las apps nativas, sin sus inconvenientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pwaFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Casos de Uso <span className="text-indigo-600">Ideales para PWA</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Smartphone className="w-8 h-8 text-indigo-600 mb-2" />
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                  <CardDescription className="text-sm">{useCase.description}</CardDescription>
                  <Badge variant="secondary" className="mt-2 w-fit">{useCase.savings}</Badge>
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
              Paquetes <span className="text-indigo-600">Desarrollo PWA</span>
            </h2>
            <p className="text-xl text-gray-600">
              Precio fijo. Todo incluido: hosting, SSL, actualizaciones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-indigo-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && (
                    <Badge className="bg-indigo-600 text-white mb-2 w-fit">Más Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-indigo-600 mt-4">{pkg.price}</div>
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
                    <Button asChild className={pkg.highlighted ? "w-full bg-indigo-600" : "w-full"}>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
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
              Preguntas <span className="text-indigo-600">Frecuentes</span>
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Lanza tu PWA sin Tiendas de Apps
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Te explicamos si PWA es ideal para tu proyecto y te mostramos demos reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contacto">
                Consulta Gratuita
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
