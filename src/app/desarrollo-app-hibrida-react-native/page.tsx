import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, Zap, DollarSign, Star, Clock, ArrowRight, Code2, Layers, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo Apps Híbridas React Native Madrid | iOS + Android 2025",
  description: "Desarrollo de apps híbridas con React Native. Una sola app para iOS y Android. Ahorra 40% vs nativo. Desde 6.000€. Entrega rápida.",
  keywords: [
    "desarrollo app híbrida React Native",
    "aplicación React Native Madrid",
    "app iOS Android misma base código",
    "desarrollo multiplataforma React Native",
    "app híbrida profesional",
    "React Native Madrid",
    "desarrollo cross-platform",
    "app JavaScript TypeScript",
    "aplicación híbrida empresarial",
    "React Native vs nativo"
  ],
  openGraph: {
    title: "Desarrollo Apps Híbridas React Native | PLUS TECNOLOGIA",
    description: "Apps iOS + Android con React Native. 40% más económico que nativo. Desde 6.000€.",
    images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Apps Híbridas React Native - iOS + Android en una sola base de código",
    description: "React Native desarrollo profesional. Ahorra tiempo y dinero.",
    images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://plustecnologia.com/desarrollo-app-hibrida-react-native"
  }
};

const reactNativeFeatures = [
  {
    icon: Globe,
    title: "iOS + Android Simultáneo",
    description: "Una sola base de código para ambas plataformas. Deployment simultáneo App Store y Google Play."
  },
  {
    icon: DollarSign,
    title: "40% Más Económico",
    description: "Ahorra vs desarrollo nativo doble. Mantenimiento unificado, un solo equipo, actualizaciones rápidas."
  },
  {
    icon: Clock,
    title: "Desarrollo Más Rápido",
    description: "Hot reload instantáneo. Reutilización componentes. Time-to-market 50% menor que nativo."
  },
  {
    icon: Zap,
    title: "Performance Casi Nativo",
    description: "Renderizado nativo. Animaciones 60 FPS. Acceso APIs nativas via bridges optimizados."
  },
  {
    icon: Layers,
    title: "Ecosistema Robusto",
    description: "Miles de librerías npm. Expo framework. Comunidad activa. Soporte Facebook/Meta."
  },
  {
    icon: Star,
    title: "UX Adaptativa",
    description: "Material Design para Android, iOS Human Interface. Mismo look&feel nativo de cada plataforma."
  }
];

const packages = [
  {
    name: "App Híbrida Básica",
    price: "6.000€",
    timeline: "5-7 semanas",
    features: [
      "5-8 pantallas React Native",
      "iOS + Android incluidos",
      "API REST integración",
      "Push notifications",
      "Persistencia AsyncStorage",
      "Publicación 2 stores",
      "3 meses soporte"
    ],
    ideal: "Apps sencillas, MVPs, catálogos"
  },
  {
    name: "App Híbrida Pro",
    price: "10.000€",
    timeline: "8-10 semanas",
    features: [
      "10-15 pantallas complejas",
      "Autenticación biométrica",
      "Sincronización cloud Firebase",
      "Mapas y geolocalización",
      "Cámara y permisos nativos",
      "In-App Purchases ambas plataformas",
      "Analytics y crashlytics",
      "6 meses soporte"
    ],
    ideal: "Apps empresariales, servicios",
    highlighted: true
  },
  {
    name: "App Híbrida Enterprise",
    price: "Desde 15.000€",
    timeline: "12-18 semanas",
    features: [
      "App compleja escalable",
      "Backend Node.js custom",
      "Módulos nativos custom",
      "Offline-first architecture",
      "CI/CD automatizado",
      "Testing E2E automatizado",
      "Code Push updates",
      "12 meses soporte premium"
    ],
    ideal: "Startups, productos escalables"
  }
];

const comparisonTable = [
  { feature: "Precio desarrollo", native: "10.000€", hybrid: "6.000€", diff: "-40%" },
  { feature: "Time to market", native: "12 semanas", hybrid: "7 semanas", diff: "-42%" },
  { feature: "Mantenimiento anual", native: "3.000€", hybrid: "1.800€", diff: "-40%" },
  { feature: "Performance", native: "100%", hybrid: "90-95%", diff: "-5%" },
  { feature: "Acceso APIs nativas", native: "Total", hybrid: "95%", diff: "OK" }
];

const faqs = [
  {
    question: "¿Cuánto más barato es React Native vs desarrollo nativo doble?",
    answer: "Ahorras aproximadamente 40% vs desarrollar iOS nativo + Android nativo por separado. Por ejemplo: app nativa iOS (8.000€) + Android (7.500€) = 15.500€. Mismo proyecto en React Native: 9.000€. Además, el mantenimiento y actualizaciones futuras también son más económicos al ser una sola base de código."
  },
  {
    question: "¿El performance de React Native es igual que nativo?",
    answer: "React Native alcanza 90-95% del performance nativo. Para la mayoría de apps (redes sociales, e-commerce, servicios) la diferencia es imperceptible. Solo apps con gráficos 3D intensivos o procesamiento pesado en tiempo real necesitan 100% nativo. Apps como Instagram, Uber Eats, Discord usan React Native."
  },
  {
    question: "¿Qué pasa si necesito funcionalidad muy específica de iOS o Android?",
    answer: "React Native permite escribir módulos nativos custom en Swift/Kotlin para funcionalidades específicas. Combinamos lo mejor de ambos mundos: 95% código compartido React Native + 5% módulos nativos específicos si son necesarios. Coste adicional según complejidad del módulo nativo."
  },
  {
    question: "¿Se puede publicar en App Store y Google Play sin problemas?",
    answer: "Sí, React Native genera apps 100% nativas compiladas. Apple y Google no distinguen entre app nativa pura vs React Native. Incluimos publicación en ambas stores, cumplimiento de todas las guidelines, y preparación de assets optimizados para cada plataforma."
  }
];

export default function DesarrolloAppHibridaReactNativePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Desarrollo de Aplicaciones Híbridas React Native",
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
            "description": "Desarrollo profesional de aplicaciones híbridas iOS y Android con React Native",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€€",
              "priceCurrency": "EUR",
              "price": "6000"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-purple-600 text-white border-purple-700">
                <Smartphone className="w-4 h-4 mr-2" />
                Apps Híbridas React Native
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo de Apps <span className="text-purple-600">iOS + Android</span> con React Native
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Aplicaciones <strong>híbridas profesionales</strong> para iOS y Android desde una sola base de código.
                Ahorra <strong className="text-purple-600">40% vs desarrollo nativo</strong> y lanza más rápido.
                <strong className="text-purple-600"> Desde 6.000€</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
                  <Link href="/contacto">
                    Consulta Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">
                    Calcular Precio App
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">iOS + Android</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">-40% Coste</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Rápido</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
                alt="Desarrollo apps híbridas React Native iOS Android profesionales"
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
              Ventajas de <span className="text-purple-600">React Native</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La mejor solución cross-platform para lanzar rápido sin sacrificar calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reactNativeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-purple-600" />
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

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              React Native vs <span className="text-purple-600">Nativo</span>
            </h2>
            <p className="text-xl text-gray-600">
              Comparación objetiva: precio, tiempo, performance
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Criterio</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Nativo (iOS + Android)</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-purple-600">React Native</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">Diferencia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-700">{row.native}</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-purple-600">{row.hybrid}</td>
                        <td className="px-6 py-4 text-sm text-center font-semibold text-green-600">{row.diff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes <span className="text-purple-600">React Native</span>
            </h2>
            <p className="text-xl text-gray-600">
              iOS + Android incluidos. Precio fijo, sin sorpresas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-purple-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && (
                    <Badge className="bg-purple-600 text-white mb-2 w-fit">Más Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mt-4">{pkg.price}</div>
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
                    <Button asChild className={pkg.highlighted ? "w-full bg-purple-600" : "w-full"}>
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
              Preguntas <span className="text-purple-600">Frecuentes</span>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Lanza tu App iOS + Android
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Te asesoramos si React Native es ideal para tu proyecto y te mostramos presupuesto detallado.
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
