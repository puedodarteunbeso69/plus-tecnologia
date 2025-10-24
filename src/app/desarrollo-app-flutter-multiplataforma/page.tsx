import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, Zap, Globe, Code2, TrendingUp, ArrowRight, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo Apps Flutter Multiplataforma Madrid | iOS Android Web 2025",
  description: "Desarrollo de apps multiplataforma con Flutter. Una sola app para iOS, Android y Web. Performance nativo, UI hermosa. Desde 7.000€.",
  keywords: [
    "desarrollo app Flutter Madrid",
    "aplicaciones Flutter multiplataforma",
    "Flutter iOS Android Web",
    "desarrollo cross-platform Flutter",
    "app Flutter profesional",
    "Flutter vs React Native",
    "desarrollo Flutter España",
    "app multiplataforma Flutter",
    "Flutter Dart desarrollo",
    "aplicación Flutter empresarial"
  ],
  openGraph: {
    title: "Desarrollo Apps Flutter Multiplataforma | PLUS TECNOLOGIA",
    description: "Apps Flutter para iOS, Android y Web. Una sola base código. Desde 7.000€.",
    images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  alternates: {
    canonical: "https://plustecnologia.com/desarrollo-app-flutter-multiplataforma"
  }
};

const flutterFeatures = [
  { icon: Globe, title: "iOS + Android + Web", description: "Una sola base código para 3 plataformas. Deploy simultáneo. Mantenimiento unificado." },
  { icon: Zap, title: "Performance Nativo", description: "Compila a código nativo ARM. 60 FPS garantizados. Animaciones fluidas como apps nativas." },
  { icon: Layers, title: "UI Hermosa", description: "Material Design 3 y Cupertino. Widgets customizables. Diseños pixel-perfect multiplataforma." },
  { icon: TrendingUp, title: "Hot Reload", description: "Ver cambios en <1s. Debugging rápido. Desarrollo 40% más rápido vs nativo." },
  { icon: Code2, title: "Dart Language", description: "TypeSafe, null-safety. Sintaxis moderna. Fácil para devs JavaScript/TypeScript." },
  { icon: Smartphone, title: "Ecosistema Robusto", description: "Miles de packages pub.dev. Firebase integrado. Soporte oficial Google." }
];

const packages = [
  {
    name: "App Flutter Básica",
    price: "7.000€",
    timeline: "6-8 semanas",
    features: ["5-8 pantallas Flutter", "iOS + Android + Web", "Material Design 3", "API REST integración", "State management (Riverpod)", "Firebase backend", "Testing widgets", "3 meses soporte"],
    ideal: "MVPs, catálogos, utilities"
  },
  {
    name: "App Flutter Pro",
    price: "11.500€",
    timeline: "10-12 semanas",
    features: ["10-15 pantallas complejas", "Autenticación biométrica", "Offline-first (Hive/Drift)", "Mapas y geolocalización", "Cámara y permisos", "In-App Purchases", "Push notifications", "6 meses soporte"],
    ideal: "Apps empresariales, SaaS",
    highlighted: true
  },
  {
    name: "App Flutter Enterprise",
    price: "Desde 16.000€",
    timeline: "14-20 semanas",
    features: ["App compleja escalable", "Backend GraphQL/gRPC", "Multi-tenant architecture", "CI/CD Codemagic/Fastlane", "Testing E2E automatizado", "Desktop (Windows/Mac/Linux)", "Flavors multi-ambiente", "12 meses soporte"],
    ideal: "Productos complejos, enterprise"
  }
];

const comparison = [
  { feature: "Plataformas", flutter: "iOS, Android, Web, Desktop", reactNative: "iOS, Android", native: "Una sola" },
  { feature: "Performance", flutter: "95% nativo", reactNative: "85-90%", native: "100%" },
  { feature: "UI Quality", flutter: "Excelente (pixel-perfect)", reactNative: "Buena", native: "Perfecta" },
  { feature: "Development Speed", flutter: "Rápido (Hot Reload)", reactNative: "Rápido", native: "Lento" },
  { feature: "Cost vs Native Doble", flutter: "-50%", reactNative: "-40%", native: "Baseline" }
];

const faqs = [
  { question: "¿Flutter es mejor que React Native?", answer: "Depende: Flutter tiene mejor performance (compila a nativo vs JavaScript bridge), UI más consistente entre plataformas, y soporte Web/Desktop nativo. React Native tiene ecosistema más maduro y más desarrolladores disponibles. Recomendamos Flutter si priorizas: performance, UI pixel-perfect, o necesitas versión Web/Desktop además de móvil. React Native si tu equipo ya domina JavaScript/React." },
  { question: "¿Puedo publicar apps Flutter en App Store y Google Play?", answer: "Sí, sin restricciones. Flutter genera binarios nativos 100% válidos para ambas stores. Apps como Alibaba, BMW, Google Pay usan Flutter en producción. Incluimos publicación en ambas stores, preparación de assets, y cumplimiento de guidelines Apple/Google." },
  { question: "¿Qué tan difícil es aprender Dart para mi equipo?", answer: "Si tu equipo sabe JavaScript/TypeScript: 1-2 semanas. Dart es similar sintácticamente. Si saben Java/Kotlin/Swift: aún más fácil (Dart es orientado a objetos). Curva aprendizaje menor que SwiftUI o Jetpack Compose. Incluimos transferencia conocimiento y documentación para tu equipo." },
  { question: "¿Flutter funciona bien para apps con muchos datos o complejas?", answer: "Sí. Flutter maneja apps complejas excelentemente: Alibaba (millones usuarios), Google Pay, BMW app. Arquitecturas recomendadas: BLoC/Riverpod para state management, Drift/Hive para offline, GraphQL para backend eficiente. Performance superior a React Native para listas largas y animaciones complejas gracias a Skia rendering engine." }
];

export default function DesarrolloAppFlutterMultiplataformaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "serviceType": "Desarrollo Apps Flutter", "provider": { "@type": "LocalBusiness", "name": "PLUS TECNOLOGIA", "telephone": "+34915493616" }, "offers": { "@type": "Offer", "price": "7000", "priceCurrency": "EUR" } }) }} />

      <section className="relative py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-sky-600 text-white"><Globe className="w-4 h-4 mr-2" />Desarrollo Flutter</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo Apps <span className="text-sky-600">Flutter</span> Multiplataforma
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Apps <strong>iOS, Android y Web</strong> desde una sola base de código Flutter.
                Performance nativo, <strong className="text-sky-600">UI hermosa</strong>, desarrollo rápido.
                <strong className="text-sky-600"> Desde 7.000€</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700 text-lg px-8">
                  <Link href="/contacto">Consulta Gratuita<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">Calcular Precio</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                {["Flutter", "3 Plataformas", "Nativo"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop" alt="Desarrollo apps Flutter multiplataforma iOS Android Web" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ventajas <span className="text-sky-600">Flutter</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flutterFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flutter vs <span className="text-sky-600">Otras Opciones</span></h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      {["", "Flutter", "React Native", "Nativo"].map((h, i) => (
                        <th key={i} className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {comparison.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium">{row.feature}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-sky-600">{row.flutter}</td>
                        <td className="px-6 py-4 text-sm">{row.reactNative}</td>
                        <td className="px-6 py-4 text-sm">{row.native}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paquetes <span className="text-sky-600">Flutter</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-sky-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && <Badge className="bg-sky-600 text-white mb-2 w-fit">Más Popular</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-sky-600 mt-4">{pkg.price}</div>
                  <CardDescription>{pkg.timeline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-4">Ideal: <strong>{pkg.ideal}</strong></p>
                    <Button asChild className={pkg.highlighted ? "w-full bg-sky-600" : "w-full"}>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas <span className="text-sky-600">Frecuentes</span></h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader><CardTitle className="text-lg">{faq.question}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-700">{faq.answer}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Lanza tu App Flutter</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Te mostramos apps Flutter reales y presupuesto personalizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contacto">Consulta Gratuita<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white/20">
              <Link href="tel:+34915493616">Llamar: 915 493 616</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
