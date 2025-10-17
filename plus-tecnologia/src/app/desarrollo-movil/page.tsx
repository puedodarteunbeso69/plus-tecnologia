import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Code2,
  Apple,
  Monitor,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
  Star,
  Clock,
  Award,
  Layers
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo de Apps Móviles | PLUS TECNOLOGIA - iOS, Android, React Native, Flutter",
  description: "Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android. React Native, Flutter, Swift, Kotlin. Apps empresariales y consumer con UX/UI premium.",
  keywords: [
    "desarrollo apps moviles",
    "aplicaciones iOS",
    "desarrollo android",
    "react native",
    "flutter",
    "apps nativas",
    "desarrollo swift",
    "kotlin development",
    "apps empresariales"
  ],
  openGraph: {
    title: "Desarrollo de Apps Móviles | PLUS TECNOLOGIA",
    description: "Especialistas en desarrollo de aplicaciones móviles para iOS y Android. React Native, Flutter y tecnologías nativas.",
    images: ["/images/desarrollo-movil-og.jpg"],
    type: "website"
  }
};

const mobileServices = [
  {
    icon: Apple,
    title: "Desarrollo iOS Nativo",
    description: "Apps nativas para iPhone y iPad con Swift y SwiftUI. Máximo rendimiento y integración con el ecosistema Apple.",
    features: ["Swift 5.0+", "SwiftUI", "Core Data", "CloudKit"],
    complexity: "Alta",
    timeline: "3-6 meses",
    price: "Desde 15.000€"
  },
  {
    icon: Monitor,
    title: "Desarrollo Android Nativo",
    description: "Aplicaciones Android nativas con Kotlin y Jetpack Compose. Optimizadas para el ecosistema Google.",
    features: ["Kotlin", "Jetpack Compose", "Room Database", "Firebase"],
    complexity: "Alta",
    timeline: "3-6 meses",
    price: "Desde 15.000€"
  },
  {
    icon: Layers,
    title: "React Native",
    description: "Desarrollo multiplataforma con una sola base de código. Rendimiento nativo con JavaScript/TypeScript.",
    features: ["TypeScript", "Redux", "Navigation", "Expo"],
    complexity: "Media",
    timeline: "2-4 meses",
    price: "Desde 12.000€"
  },
  {
    icon: Zap,
    title: "Flutter",
    description: "Framework de Google para apps multiplataforma con rendimiento superior y UI consistente.",
    features: ["Dart", "Material Design", "Cupertino", "Firebase"],
    complexity: "Media",
    timeline: "2-4 meses",
    price: "Desde 12.000€"
  },
  {
    icon: Globe,
    title: "Progressive Web Apps",
    description: "Aplicaciones web que funcionan como apps nativas. Instalables y con funcionalidad offline.",
    features: ["Service Workers", "Web App Manifest", "Push Notifications", "Offline First"],
    complexity: "Media",
    timeline: "2-3 meses",
    price: "Desde 8.000€"
  },
  {
    icon: Shield,
    title: "Apps Empresariales",
    description: "Soluciones móviles corporativas con seguridad avanzada e integración con sistemas existentes.",
    features: ["Single Sign-On", "MDM Integration", "Enterprise APIs", "Security"],
    complexity: "Alta",
    timeline: "4-8 meses",
    price: "Desde 20.000€"
  }
];

const appTypes = [
  {
    type: "E-commerce & Retail",
    description: "Apps de venta online con pagos seguros",
    examples: ["Tiendas online", "Marketplaces", "Apps de delivery"]
  },
  {
    type: "Fintech & Banca",
    description: "Aplicaciones financieras y de pagos",
    examples: ["Apps bancarias", "Carteras digitales", "Trading apps"]
  },
  {
    type: "Salud & Bienestar",
    description: "Soluciones de telemedicina y fitness",
    examples: ["Telemedicina", "Apps fitness", "Seguimiento salud"]
  },
  {
    type: "Educación & E-learning",
    description: "Plataformas educativas interactivas",
    examples: ["Apps educativas", "Cursos online", "Gamificación"]
  },
  {
    type: "Entretenimiento & Media",
    description: "Apps de contenido y streaming",
    examples: ["Streaming video", "Música", "Juegos casuales"]
  },
  {
    type: "Productividad & Empresa",
    description: "Herramientas para optimizar trabajo",
    examples: ["Gestión tareas", "CRM móvil", "Apps corporativas"]
  }
];

const technologies = [
  {
    category: "iOS Nativo",
    tools: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "Combine"]
  },
  {
    category: "Android Nativo",
    tools: ["Kotlin", "Jetpack Compose", "Room", "Firebase", "Retrofit", "Dagger"]
  },
  {
    category: "Multiplataforma",
    tools: ["React Native", "Flutter", "Xamarin", "Ionic", "Cordova", "PWA"]
  },
  {
    category: "Backend & APIs",
    tools: ["Node.js", "Firebase", "AWS", "GraphQL", "REST APIs", "WebSockets"]
  },
  {
    category: "Testing & DevOps",
    tools: ["Jest", "Detox", "Fastlane", "CodePush", "App Center", "CI/CD"]
  }
];

export default function DesarrolloMovilPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Desarrollo Móvil</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Desarrollo de Apps Móviles
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Desarrollamos <span className="text-blue-600">Apps Móviles</span> que Transforman Negocios
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Especialistas en desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android. React Native, Flutter, Swift, Kotlin. UX/UI premium y performance optimizada.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Consulta tu App Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    Ver Portfolio Apps
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-600">4.9/5 en App Stores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">+30 Apps Publicadas</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Desarrollo de aplicaciones móviles"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-blue-600">Desarrollo Móvil</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cubrimos todas las tecnologías y plataformas móviles del mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1">
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Complejidad:</span>
                      <span className="font-medium">{service.complexity}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duración:</span>
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precio:</span>
                      <span className="font-semibold text-blue-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto bg-blue-600 hover:bg-blue-700">
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tipos de <span className="text-blue-600">Aplicaciones</span> que Desarrollamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{type.type}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-600">• {example}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-blue-600">Tecnologías</span> que Utilizamos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-center">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tech.tools.map((tool, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestro <span className="text-blue-600">Proceso</span> de Desarrollo
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Descubrimiento",
                description: "Análisis de requerimientos, definición de funcionalidades y wireframes."
              },
              {
                step: "02",
                title: "Diseño UX/UI",
                description: "Creación de prototipos interactivos y diseño visual premium."
              },
              {
                step: "03",
                title: "Desarrollo",
                description: "Programación ágil con entregas parciales y feedback continuo."
              },
              {
                step: "04",
                title: "Testing & QA",
                description: "Pruebas exhaustivas en dispositivos reales y simuladores."
              },
              {
                step: "05",
                title: "Lanzamiento",
                description: "Publicación en stores, marketing app y soporte post-lanzamiento."
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para Desarrollar tu App?
            </h2>
            <p className="text-xl text-blue-100">
              Solicita una consulta gratuita y convierte tu idea en una app exitosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
                  Ver Casos de Éxito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en desarrollo de aplicaciones móviles que transforman ideas en apps exitosas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Desarrollo Móvil</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil/ios" className="hover:text-white transition-colors">Apps iOS</Link></li>
                <li><Link href="/desarrollo-movil/android" className="hover:text-white transition-colors">Apps Android</Link></li>
                <li><Link href="/desarrollo-movil/react-native" className="hover:text-white transition-colors">React Native</Link></li>
                <li><Link href="/desarrollo-movil/flutter" className="hover:text-white transition-colors">Flutter</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Otros Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-web" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Software Empresarial</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/consultoria-it" className="hover:text-white transition-colors">Consultoría IT</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@plustecologia.es</li>
                <li>915493616</li>
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
    </div>
  );
}
