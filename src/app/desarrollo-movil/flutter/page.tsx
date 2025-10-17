import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Code2,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Layers,
  Star,
  Clock,
  Award,
  Globe
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo de Apps Flutter | Aplicaciones Multiplataforma - PLUS TECNOLOGIA",
  description: "Desarrollo de aplicaciones móviles con Flutter. Apps nativas para iOS y Android desde un único código. Performance superior, UI consistente, desarrollo rápido.",
  keywords: [
    "desarrollo flutter",
    "apps flutter",
    "flutter desarrollo",
    "aplicaciones flutter",
    "desarrollo multiplataforma",
    "flutter ios android",
    "dart development",
    "apps flutter madrid"
  ],
  openGraph: {
    title: "Desarrollo de Apps Flutter | PLUS TECNOLOGIA",
    description: "Desarrollo de aplicaciones móviles multiplataforma con Flutter. Performance nativo, desarrollo rápido.",
    type: "website"
  }
};

const flutterBenefits = [
  {
    icon: Zap,
    title: "Desarrollo Rápido",
    description: "Hot reload, widgets personalizables y desarrollo hasta 50% más rápido que nativo.",
    metrics: ["50% menos tiempo dev", "Único código base", "Hot reload instantáneo"]
  },
  {
    icon: Layers,
    title: "UI Consistente",
    description: "Interfaz pixel-perfect idéntica en iOS y Android con Material Design y Cupertino.",
    metrics: ["Diseño consistente", "Widgets personalizados", "Animaciones fluidas"]
  },
  {
    icon: Zap,
    title: "Performance Nativo",
    description: "Compilación a código nativo ARM, 60fps garantizados, performance superior a híbridas.",
    metrics: ["60fps fluidos", "Startup rápido", "Memoria optimizada"]
  },
  {
    icon: Globe,
    title: "Multiplataforma",
    description: "iOS, Android, Web y Desktop desde un único código Dart.",
    metrics: ["4+ plataformas", "85% código compartido", "Mantenimiento simple"]
  }
];

const flutterFeatures = [
  {
    category: "Framework",
    features: ["Dart language", "Material Design 3", "Cupertino widgets", "Custom widgets"]
  },
  {
    category: "State Management",
    features: ["Provider", "Riverpod", "Bloc/Cubit", "GetX"]
  },
  {
    category: "Backend & APIs",
    features: ["Firebase", "REST APIs", "GraphQL", "SQLite local"]
  },
  {
    category: "Features",
    features: ["Push notifications", "In-app purchases", "Maps & location", "Camera & gallery"]
  }
];

const developmentProcess = [
  {
    step: 1,
    title: "Diseño UI/UX",
    description: "Wireframes, mockups y diseño visual adaptado a Material Design y Cupertino.",
    duration: "2-3 semanas"
  },
  {
    step: 2,
    title: "Desarrollo Flutter",
    description: "Programación con Dart, widgets personalizados e integración de APIs.",
    duration: "4-8 semanas"
  },
  {
    step: 3,
    title: "Testing Multiplataforma",
    description: "Pruebas exhaustivas en dispositivos iOS y Android reales.",
    duration: "1-2 semanas"
  },
  {
    step: 4,
    title: "Despliegue Dual",
    description: "Publicación simultánea en App Store y Google Play.",
    duration: "1 semana"
  }
];

const useCases = [
  {
    type: "E-commerce & Retail",
    description: "Apps de compras con catálogos, carrito y pagos integrados.",
    examples: ["Tienda online", "Marketplace", "Delivery apps"]
  },
  {
    type: "Fintech & Banking",
    description: "Apps financieras con seguridad avanzada y transacciones.",
    examples: ["Banking apps", "Crypto wallets", "Payment apps"]
  },
  {
    type: "Social & Media",
    description: "Redes sociales, streaming y contenido multimedia.",
    examples: ["Social networks", "Video streaming", "Content platforms"]
  },
  {
    type: "Productivity & Business",
    description: "Herramientas empresariales y gestión de tareas.",
    examples: ["Task management", "CRM móvil", "Project tools"]
  }
];

const caseStudies = [
  {
    client: "E-commerce Fashion",
    challenge: "Necesitaban app iOS y Android en 3 meses con presupuesto limitado.",
    solution: "App Flutter con catálogo dinámico, carrito, pagos Stripe y notificaciones push.",
    results: ["Lanzada en 2.5 meses", "iOS + Android", "50,000+ descargas", "4.7★ rating"],
    tech: ["Flutter", "Firebase", "Stripe", "FCM"]
  },
  {
    client: "Startup Fintech",
    challenge: "App financiera con requisitos de performance y seguridad alta.",
    solution: "Flutter con arquitectura limpia, biometría, encriptación y offline-first.",
    results: ["Performance nativo", "Touch/Face ID", "100% seguro", "€2M funding"],
    tech: ["Flutter", "Riverpod", "SQLite", "Biometric"]
  }
];

const pricing = [
  {
    name: "App Básica",
    description: "App simple con funcionalidades estándar",
    price: "Desde 12.000€",
    features: ["5-7 pantallas", "Firebase backend", "Push notifications", "Analytics básico"],
    timeline: "8-10 semanas"
  },
  {
    name: "App Completa",
    description: "App robusta con features avanzadas",
    price: "Desde 20.000€",
    features: ["10-15 pantallas", "Backend custom", "Pagos integrados", "Geolocalización"],
    timeline: "12-16 semanas",
    popular: true
  },
  {
    name: "App Empresarial",
    description: "Solución enterprise completa",
    price: "Desde 35.000€",
    features: ["15+ pantallas", "Arquitectura escalable", "Integraciones múltiples", "Admin panel"],
    timeline: "16-24 semanas"
  }
];

export default function FlutterPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-cyan-600 text-cyan-700">
              <Layers className="w-4 h-4 mr-2 inline" />
              Desarrollo Flutter
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Apps <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Multiplataforma</span> con Flutter
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Desarrollo de aplicaciones móviles con Flutter: un código, dos plataformas.
              Performance nativo, UI consistente y desarrollo hasta 50% más rápido.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-lg bg-cyan-600 hover:bg-cyan-700">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-8 text-lg border-gray-300">
                  Ver Apps Flutter
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">50%</div>
                <div className="text-sm text-gray-600">Menos Tiempo Dev</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">60fps</div>
                <div className="text-sm text-gray-600">Performance Fluida</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600">2 OS</div>
                <div className="text-sm text-gray-600">Desde 1 Código</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              ¿Por qué <span className="text-cyan-600">Flutter</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flutterBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-cyan-600 mb-4" />
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {benefit.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Tecnologías <span className="text-cyan-600">Flutter</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {flutterFeatures.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-cyan-600">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Proceso de <span className="text-cyan-600">Desarrollo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-cyan-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.description}</p>
                <Badge variant="outline" className="text-cyan-600">{phase.duration}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Casos de <span className="text-cyan-600">Uso</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.type}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-600">• {example}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Proyectos <span className="text-cyan-600">Exitosos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{study.client}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {study.tech.map((tech, i) => (
                      <Badge key={i} className="text-xs bg-cyan-100 text-cyan-700">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Desafío:</span>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Solución:</span>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Resultados:</span>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {study.results.map((result, i) => (
                        <Badge key={i} variant="secondary" className="text-xs justify-center">
                          {result}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Precios <span className="text-cyan-600">Transparentes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`hover:shadow-xl transition-shadow ${plan.popular ? 'border-2 border-cyan-600' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-600 text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                    MÁS POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold text-cyan-600 mt-4">{plan.price}</div>
                  <Badge variant="outline" className="mt-2">{plan.timeline}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Desarrollar tu App Flutter?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-cyan-100">
            Solicita un presupuesto y descubre cómo Flutter puede acelerar tu desarrollo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="h-12 px-8 text-lg bg-white text-cyan-600 hover:bg-gray-100">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/desarrollo-movil">
              <Button variant="outline" className="h-12 px-8 text-lg border-white text-white hover:bg-white/10">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Layers className="h-6 w-6 text-cyan-500" />
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Desarrollo de aplicaciones móviles multiplataforma con Flutter.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Desarrollo Móvil</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil/flutter" className="hover:text-white transition-colors">Flutter</Link></li>
                <li><Link href="/desarrollo-movil/ios" className="hover:text-white transition-colors">iOS Nativo</Link></li>
                <li><Link href="/desarrollo-movil/android" className="hover:text-white transition-colors">Android Nativo</Link></li>
                <li><Link href="/desarrollo-movil/react-native" className="hover:text-white transition-colors">React Native</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-web" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/cloud-computing" className="hover:text-white transition-colors">Cloud Computing</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/consultoria-it" className="hover:text-white transition-colors">Consultoría IT</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@plustecologia.es</li>
                <li>915 493 616</li>
                <li>C. de Orense, 68, 12º</li>
                <li>Tetuán, 28020 Madrid</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <WhatsAppChat />
    </div>
  );
}
