import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Code2,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
  Apple,
  Star,
  Clock,
  Award
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo de Apps iOS Nativas | PLUS TECNOLOGIA - Aplicaciones iPhone Profesionales",
  description: "Especialistas en desarrollo de aplicaciones iOS nativas para iPhone. Swift, SwiftUI, Core Data. Apps empresariales con diseño premium y rendimiento optimizado.",
  keywords: [
    "desarrollo apps ios",
    "aplicaciones iphone",
    "swift development",
    "swiftui",
    "ios nativo",
    "apps empresariales ios",
    "desarrollo swift madrid",
    "aplicaciones ios profesionales"
  ],
};

export default function DesarrolloiOSPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/desarrollo-movil" className="text-gray-500 hover:text-blue-600">Desarrollo Móvil</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Apps iOS Nativas</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Apple className="w-4 h-4 mr-2" />
                  Desarrollo iOS Nativo
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Desarrollo de <span className="text-blue-600">Apps iOS</span> Profesionales
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Creamos aplicaciones iPhone nativas con Swift y SwiftUI. Diseño premium, rendimiento optimizado y experiencia de usuario excepcional para tu negocio.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Ver Portfolio iOS
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-600">4.9/5 en App Store</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">+20 Apps Publicadas</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
                alt="Desarrollo de aplicaciones iOS con Swift"
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
              Servicios de <span className="text-blue-600">Desarrollo iOS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones completas para el ecosistema Apple con las últimas tecnologías
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Apps iOS Nativas",
                description: "Desarrollo con Swift y SwiftUI para máximo rendimiento y integración con iOS.",
                features: ["Swift 5.0+", "SwiftUI", "UIKit", "Core Data"]
              },
              {
                icon: Code2,
                title: "Apps Empresariales",
                description: "Soluciones corporativas con integración a sistemas existentes y seguridad avanzada.",
                features: ["Single Sign-On", "API Integration", "Enterprise MDM", "Analytics"]
              },
              {
                icon: Zap,
                title: "Optimización Performance",
                description: "Apps ultrarrápidas optimizadas para cada dispositivo iOS y versión del sistema.",
                features: ["Memory Management", "CPU Optimization", "Battery Life", "Launch Time"]
              },
              {
                icon: Shield,
                title: "Seguridad Avanzada",
                description: "Implementación de las mejores prácticas de seguridad y protección de datos.",
                features: ["Keychain Services", "Touch/Face ID", "Encryption", "App Transport Security"]
              },
              {
                icon: Users,
                title: "UX/UI Premium",
                description: "Diseños que siguen las Human Interface Guidelines de Apple al detalle.",
                features: ["HIG Compliance", "Dark Mode", "Accessibility", "Responsive Design"]
              },
              {
                icon: Clock,
                title: "Mantenimiento 24/7",
                description: "Soporte continuo, actualizaciones y monitoreo proactivo de tu aplicación.",
                features: ["Bug Fixes", "iOS Updates", "Performance Monitoring", "Crash Analytics"]
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
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
              Nuestro <span className="text-blue-600">Proceso de Desarrollo</span>
            </h2>
            <p className="text-xl text-gray-600">
              Metodología ágil probada para entregar apps iOS de alta calidad
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Análisis & Diseño",
                description: "Definimos funcionalidades, wireframes y arquitectura técnica de tu app iOS."
              },
              {
                step: "02",
                title: "Desarrollo Swift",
                description: "Programación nativa con Swift, implementación de funcionalidades y integración APIs."
              },
              {
                step: "03",
                title: "Testing & QA",
                description: "Pruebas exhaustivas en dispositivos reales, optimización y corrección de bugs."
              },
              {
                step: "04",
                title: "App Store & Soporte",
                description: "Publicación en App Store, marketing app y soporte técnico continuo."
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-blue-600">Tecnologías</span> iOS que Dominamos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Apple className="h-6 w-6 mr-2 text-blue-600" />
                  Lenguajes & Frameworks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Swift 5.0+", "SwiftUI", "UIKit", "Objective-C", "Combine", "Core Data"].map((tech, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code2 className="h-6 w-6 mr-2 text-blue-600" />
                  APIs & Servicios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["CloudKit", "Core Location", "MapKit", "HealthKit", "ARKit", "Core ML"].map((tech, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-600" />
                  Seguridad & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["Keychain Services", "Touch/Face ID", "Certificate Pinning", "Xcode Cloud", "Firebase", "TestFlight"].map((tech, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para Desarrollar tu App iOS?
            </h2>
            <p className="text-xl text-blue-100">
              Solicita una consulta gratuita y descubre cómo podemos llevar tu idea a la App Store
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                915 493 616
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Reuse from main page */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en desarrollo de aplicaciones móviles, desarrollo web y soluciones tecnológicas empresariales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil" className="hover:text-white transition-colors">Desarrollo Móvil</Link></li>
                <li><Link href="/desarrollo-web" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Sistemas Empresariales</Link></li>
                <li><Link href="/consultoria-it" className="hover:text-white transition-colors">Consultoría IT</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
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
