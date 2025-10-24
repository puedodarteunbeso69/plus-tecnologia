import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, Zap, Shield, Star, TrendingUp, ArrowRight, Apple, Code2, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo de Apps iOS con Swift en Madrid | Aplicaciones iPhone Nativas 2025",
  description: "Desarrollo de aplicaciones iOS nativas con Swift en Madrid. Apps iPhone profesionales, rápidas y seguras. App Store optimization incluido. Desde 8.000€.",
  keywords: [
    "desarrollo app iOS Swift Madrid",
    "aplicaciones iPhone nativas",
    "programador Swift Madrid",
    "desarrollo iOS profesional",
    "app nativa iPhone",
    "Swift UI desarrollo",
    "aplicación iOS empresarial",
    "desarrollo App Store",
    "programación Swift Madrid",
    "app iOS a medida"
  ],
  openGraph: {
    title: "Desarrollo Apps iOS Swift Madrid | PLUS TECNOLOGIA",
    description: "Apps iPhone nativas con Swift. Rendimiento superior, UX perfecta. Desde 8.000€.",
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Apps iOS Swift - Aplicaciones iPhone Profesionales",
    description: "Apps iOS nativas con Swift. Máximo rendimiento y calidad App Store.",
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://plustecnologia.com/desarrollo-app-ios-swift"
  }
};

const iosFeatures = [
  {
    icon: Apple,
    title: "100% Nativo Swift",
    description: "Código Swift puro. Máximo rendimiento, acceso completo a APIs de iOS, integración perfecta con el ecosistema Apple."
  },
  {
    icon: Zap,
    title: "SwiftUI Moderno",
    description: "Interfaces con SwiftUI. Animaciones fluidas, diseño declarativo, compatibilidad iOS 15+."
  },
  {
    icon: Shield,
    title: "Seguridad Apple",
    description: "Face ID, Touch ID, Keychain, encriptación nativa. Cumplimiento estricto de Apple Guidelines."
  },
  {
    icon: Layers,
    title: "Arquitectura MVVM",
    description: "Código mantenible y escalable. Combine framework, dependency injection, testing automatizado."
  },
  {
    icon: Star,
    title: "App Store Optimization",
    description: "Preparación completa para App Store: screenshots, descripción ASO, keywords, gestión de releases."
  },
  {
    icon: TrendingUp,
    title: "Analytics Integrado",
    description: "Firebase Analytics, Apple Analytics, crash reporting. Datos en tiempo real del comportamiento de usuarios."
  }
];

const packages = [
  {
    name: "App iOS Básica",
    price: "8.000€",
    timeline: "6-8 semanas",
    features: [
      "5-8 pantallas Swift nativo",
      "SwiftUI interfaces",
      "API REST integración",
      "Push notifications",
      "Persistencia CoreData/Realm",
      "Publicación App Store",
      "3 meses soporte"
    ],
    ideal: "Apps sencillas, catálogos, portfolios"
  },
  {
    name: "App iOS Profesional",
    price: "12.000€",
    timeline: "10-12 semanas",
    features: [
      "10-15 pantallas complejas",
      "Autenticación (Face/Touch ID)",
      "Sincronización CloudKit",
      "Mapa y geolocalización",
      "Cámara y galería integrada",
      "In-App Purchases (IAP)",
      "Analytics Firebase",
      "6 meses soporte"
    ],
    ideal: "Apps empresariales, servicios",
    highlighted: true
  },
  {
    name: "App iOS Enterprise",
    price: "Desde 18.000€",
    timeline: "14-20 semanas",
    features: [
      "App compleja multi-módulo",
      "Integración backend custom",
      "Apple Watch companion app",
      "Widgets iOS 16+",
      "ARKit/CoreML (IA/AR)",
      "Modo offline completo",
      "Testing QA exhaustivo",
      "12 meses soporte premium"
    ],
    ideal: "Startups, productos complejos"
  }
];

const technicalStack = [
  { name: "Swift 5.9+", description: "Lenguaje principal iOS" },
  { name: "SwiftUI", description: "Framework UI declarativo" },
  { name: "UIKit", description: "Compatibilidad legacy" },
  { name: "Combine", description: "Programación reactiva" },
  { name: "CoreData", description: "Base de datos local" },
  { name: "CloudKit", description: "Sync Apple Cloud" },
  { name: "Firebase", description: "Backend y analytics" },
  { name: "Alamofire", description: "Networking avanzado" }
];

const faqs = [
  {
    question: "¿Cuánto cuesta desarrollar una app iOS con Swift en Madrid?",
    answer: "Desde 8.000€ para apps básicas (5-8 pantallas) hasta 18.000€+ para apps empresariales complejas. El precio depende de funcionalidades: autenticación, mapas, pagos in-app, integraciones con APIs externas, y complejidad del diseño UX."
  },
  {
    question: "¿Cuánto tarda el desarrollo de una app iPhone nativa?",
    answer: "App básica: 6-8 semanas. App profesional: 10-12 semanas. App enterprise: 14-20 semanas. Incluye diseño UX/UI, desarrollo Swift, testing QA, y publicación en App Store. La revisión de Apple suele tardar 2-3 días adicionales."
  },
  {
    question: "¿Por qué elegir Swift nativo vs React Native o Flutter?",
    answer: "Swift nativo ofrece máximo rendimiento (60 FPS garantizados), acceso inmediato a nuevas APIs de iOS, integración perfecta con Face ID/Apple Pay, y mejor experiencia de usuario. Ideal si tu app es solo iOS o necesitas rendimiento crítico."
  },
  {
    question: "¿Incluye publicación en App Store y mantenimiento?",
    answer: "Sí. Incluimos creación de cuenta Apple Developer (si no tienes), preparación de assets App Store, screenshots, descripción ASO optimizada, y gestión completa del proceso de review. Mantenimiento post-lanzamiento incluido según paquete (3-12 meses)."
  }
];

export default function DesarrolloAppIosSwiftPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Desarrollo de Aplicaciones iOS Swift",
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
            "description": "Desarrollo profesional de aplicaciones iOS nativas con Swift",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€€€",
              "priceCurrency": "EUR",
              "price": "8000"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-gray-900 text-white border-gray-800">
                <Apple className="w-4 h-4 mr-2" />
                Desarrollo iOS Nativo
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo de Apps <span className="text-blue-600">iOS con Swift</span> en Madrid
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Aplicaciones iPhone <strong>100% nativas</strong> con Swift y SwiftUI.
                Máximo rendimiento, diseño Apple perfecto, publicación en App Store incluida.
                <strong className="text-blue-600"> Desde 8.000€</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
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
                  <span className="text-gray-700">Swift 5.9+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">SwiftUI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">App Store</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
                alt="Desarrollo de aplicaciones iOS Swift iPhone profesionales"
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
              Por qué Elegir <span className="text-blue-600">Swift Nativo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desarrollo iOS profesional con las últimas tecnologías Apple. Rendimiento superior y experiencia perfecta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iosFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
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

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes <span className="text-blue-600">Desarrollo iOS</span>
            </h2>
            <p className="text-xl text-gray-600">
              Precio fijo según complejidad. Sin sorpresas, todo incluido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-blue-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && (
                    <Badge className="bg-blue-600 text-white mb-2 w-fit">Más Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mt-4">{pkg.price}</div>
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
                    <Button asChild className={pkg.highlighted ? "w-full bg-blue-600" : "w-full"}>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stack <span className="text-blue-600">Tecnológico</span>
            </h2>
            <p className="text-xl text-gray-600">
              Las mejores tecnologías Apple para tu app iOS
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technicalStack.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                  <CardDescription className="text-sm">{tech.description}</CardDescription>
                </CardHeader>
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
              Preguntas <span className="text-blue-600">Frecuentes</span>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Crear tu App iOS?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita con nuestros expertos en Swift. Te mostramos portfolio, presupuesto personalizado y roadmap de desarrollo.
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
