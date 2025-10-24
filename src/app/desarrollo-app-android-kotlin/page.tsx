import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, Zap, Shield, Star, TrendingUp, ArrowRight, Code2, Layers, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo de Apps Android con Kotlin en Madrid | Aplicaciones Nativas 2025",
  description: "Desarrollo de aplicaciones Android nativas con Kotlin en Madrid. Apps profesionales, Material Design 3, Google Play optimization. Desde 7.500€.",
  keywords: [
    "desarrollo app Android Kotlin Madrid",
    "aplicaciones Android nativas",
    "programador Kotlin Madrid",
    "desarrollo Android profesional",
    "app nativa Android",
    "Jetpack Compose desarrollo",
    "aplicación Android empresarial",
    "desarrollo Google Play",
    "programación Kotlin Madrid",
    "app Android a medida"
  ],
  openGraph: {
    title: "Desarrollo Apps Android Kotlin Madrid | PLUS TECNOLOGIA",
    description: "Apps Android nativas con Kotlin. Material Design 3, Jetpack Compose. Desde 7.500€.",
    images: ["https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Apps Android Kotlin - Aplicaciones Nativas Profesionales",
    description: "Apps Android nativas con Kotlin. Máximo rendimiento y calidad Google Play.",
    images: ["https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://plustecnologia.com/desarrollo-app-android-kotlin"
  }
};

const androidFeatures = [
  {
    icon: Cpu,
    title: "100% Kotlin Nativo",
    description: "Código Kotlin moderno. Null safety, coroutines, performance superior. Compatibilidad Android 8.0+."
  },
  {
    icon: Zap,
    title: "Jetpack Compose",
    description: "UI declarativa moderna. Menos código, más productividad. Material Design 3 nativo."
  },
  {
    icon: Shield,
    title: "Seguridad Android",
    description: "Biometric API, EncryptedSharedPreferences, ProGuard/R8. Cumplimiento Google Play Policies."
  },
  {
    icon: Layers,
    title: "Arquitectura MVVM/Clean",
    description: "Código mantenible con MVVM. Room database, Hilt dependency injection, testing completo."
  },
  {
    icon: Star,
    title: "Google Play ASO",
    description: "Optimización completa para Google Play: screenshots, video preview, descripción ASO, keywords."
  },
  {
    icon: TrendingUp,
    title: "Analytics Avanzado",
    description: "Firebase Analytics, Crashlytics, Performance Monitoring. Datos en tiempo real de usuarios."
  }
];

const packages = [
  {
    name: "App Android Básica",
    price: "7.500€",
    timeline: "6-8 semanas",
    features: [
      "5-8 pantallas Kotlin nativo",
      "Jetpack Compose UI",
      "API REST integración",
      "Push notifications FCM",
      "Room database local",
      "Publicación Google Play",
      "3 meses soporte"
    ],
    ideal: "Apps sencillas, catálogos, utilidades"
  },
  {
    name: "App Android Pro",
    price: "11.000€",
    timeline: "10-12 semanas",
    features: [
      "10-15 pantallas complejas",
      "Autenticación biométrica",
      "Sincronización cloud",
      "Mapas y geolocalización",
      "Cámara ML Kit integrado",
      "In-App Billing",
      "Firebase Analytics",
      "6 meses soporte"
    ],
    ideal: "Apps empresariales, servicios",
    highlighted: true
  },
  {
    name: "App Android Enterprise",
    price: "Desde 16.000€",
    timeline: "14-20 semanas",
    features: [
      "App compleja multi-módulo",
      "Backend custom integrado",
      "Wear OS companion app",
      "Widgets Android 12+",
      "TensorFlow Lite (ML/IA)",
      "Modo offline avanzado",
      "Testing QA exhaustivo",
      "12 meses soporte premium"
    ],
    ideal: "Startups, productos escalables"
  }
];

const technicalStack = [
  { name: "Kotlin 1.9+", description: "Lenguaje oficial Android" },
  { name: "Jetpack Compose", description: "UI toolkit moderno" },
  { name: "Material Design 3", description: "Diseño Google" },
  { name: "Coroutines", description: "Asincronía moderna" },
  { name: "Room Database", description: "SQLite abstracto" },
  { name: "Retrofit", description: "Networking HTTP" },
  { name: "Firebase", description: "Backend Google" },
  { name: "Hilt", description: "Dependency injection" }
];

const faqs = [
  {
    question: "¿Cuánto cuesta desarrollar una app Android con Kotlin en Madrid?",
    answer: "Desde 7.500€ para apps básicas (5-8 pantallas) hasta 16.000€+ para apps enterprise. El precio varía según funcionalidades: autenticación biométrica, mapas, pagos in-app, integración ML Kit, sincronización cloud, y complejidad del backend."
  },
  {
    question: "¿Cuánto tarda el desarrollo de una app Android nativa?",
    answer: "App básica: 6-8 semanas. App profesional: 10-12 semanas. App enterprise: 14-20 semanas. Incluye diseño Material Design 3, desarrollo Kotlin/Compose, testing QA, y publicación en Google Play. La revisión de Google suele tardar 1-2 días."
  },
  {
    question: "¿Por qué Kotlin nativo vs React Native o Flutter?",
    answer: "Kotlin nativo ofrece máximo rendimiento, acceso inmediato a nuevas APIs de Android, integración perfecta con Google services, y mejor soporte de Material Design 3. Ideal si tu app es solo Android o necesitas funcionalidades avanzadas como ML Kit, Wear OS, o widgets."
  },
  {
    question: "¿Incluye publicación en Google Play y mantenimiento?",
    answer: "Sí. Incluimos configuración cuenta Google Play Console (si no tienes), preparación assets, screenshots, video preview, descripción ASO optimizada, y gestión completa del proceso de revisión. Mantenimiento incluido según paquete (3-12 meses) con actualizaciones Android."
  }
];

export default function DesarrolloAppAndroidKotlinPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Desarrollo de Aplicaciones Android Kotlin",
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
            "description": "Desarrollo profesional de aplicaciones Android nativas con Kotlin",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€€€",
              "priceCurrency": "EUR",
              "price": "7500"
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
                <Smartphone className="w-4 h-4 mr-2" />
                Desarrollo Android Nativo
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo de Apps <span className="text-green-600">Android con Kotlin</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Aplicaciones Android <strong>100% nativas</strong> con Kotlin y Jetpack Compose.
                Material Design 3, máximo rendimiento, publicación en Google Play incluida.
                <strong className="text-green-600"> Desde 7.500€</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
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
                  <span className="text-gray-700">Kotlin 1.9+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Jetpack Compose</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Google Play</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&h=600&fit=crop"
                alt="Desarrollo aplicaciones Android Kotlin nativas profesionales"
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
              Ventajas de <span className="text-green-600">Kotlin Nativo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desarrollo Android profesional con las últimas tecnologías Google. Rendimiento y experiencia superiores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {androidFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-green-600" />
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
              Paquetes <span className="text-green-600">Desarrollo Android</span>
            </h2>
            <p className="text-xl text-gray-600">
              Precio fijo según complejidad. Todo incluido, sin costes ocultos.
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
              Stack <span className="text-green-600">Tecnológico Android</span>
            </h2>
            <p className="text-xl text-gray-600">
              Las mejores tecnologías Google para tu app Android
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technicalStack.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
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
            ¿Listo para tu App Android?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita con expertos Kotlin. Portfolio de apps, presupuesto personalizado y roadmap completo.
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
