import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Eye,
  Heart,
  MessageCircle,
  Code2,
  CheckCircle,
  X,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Flutter vs React Native 2024: Guía Completa para Elegir la Mejor Tecnología Móvil",
  description: "Comparativa detallada entre Flutter y React Native en 2024. Análisis de rendimiento, ecosistema, casos de uso y recomendaciones para tu próximo proyecto móvil.",
  keywords: [
    "flutter vs react native 2024",
    "desarrollo móvil multiplataforma",
    "comparativa flutter react native",
    "tecnologías desarrollo apps",
    "flutter google",
    "react native meta",
    "desarrollo apps móviles"
  ],
  authors: [{ name: "Carlos Méndez" }],
  openGraph: {
    title: "Flutter vs React Native 2024: Guía Completa",
    description: "Comparativa detallada entre Flutter y React Native en 2024. Análisis completo para elegir la mejor tecnología para tu app móvil.",
    images: ["/blog/flutter-vs-react-native-2024.jpg"],
    type: "article",
    publishedTime: "2024-01-15",
    authors: ["Carlos Méndez"]
  }
};

const relatedArticles = [
  {
    title: "Progressive Web Apps: El Futuro del Desarrollo Web",
    slug: "progressive-web-apps-futuro-desarrollo-web",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
    category: "desarrollo"
  },
  {
    title: "Optimización de Apps Móviles: Guía de Performance",
    slug: "optimizacion-performance-apps-moviles",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop",
    category: "desarrollo"
  },
  {
    title: "Tendencias en UI/UX para Apps Móviles 2024",
    slug: "tendencias-ui-ux-apps-moviles-2024",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=300&h=200&fit=crop",
    category: "desarrollo"
  }
];

export default function FlutterVsReactNativeArticle() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-blue-600">Blog</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Flutter vs React Native 2024</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </Link>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge className="bg-green-500 text-white">
                  <Code2 className="w-3 h-3 mr-1" />
                  Desarrollo
                </Badge>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  15 de Enero, 2024
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  8 min lectura
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Eye className="w-4 h-4 mr-1" />
                  2,340 vistas
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                El Futuro del Desarrollo Móvil: Flutter vs React Native en 2024
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Análisis comparativo de las dos principales tecnologías para desarrollo móvil multiplataforma. Descubre cuál elegir para tu próximo proyecto y las tendencias que marcarán el año.
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                    alt="Carlos Méndez"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Carlos Méndez</h3>
                    <p className="text-gray-600">Senior Mobile Developer en PLUS TECNOLOGIA</p>
                    <p className="text-gray-500 text-sm">+8 años desarrollando apps móviles</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartir
                  </Button>
                  <Button size="sm" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop"
                alt="Desarrollo móvil con Flutter y React Native"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 prose prose-sm sm:prose-lg max-w-none">
                <div className="space-y-8 text-gray-700 leading-relaxed">

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Introducción: El Estado Actual del Desarrollo Móvil</h2>
                    <p>
                      En 2024, el panorama del desarrollo móvil multiplataforma está dominado por dos tecnologías principales: <strong>Flutter de Google</strong> y <strong>React Native de Meta</strong>. Ambas prometen permitir a los desarrolladores crear aplicaciones nativas para iOS y Android con una sola base de código, pero cada una tiene sus propias ventajas y desafíos.
                    </p>
                    <p>
                      Este análisis exhaustivo te ayudará a tomar la mejor decisión para tu próximo proyecto, considerando factores como rendimiento, ecosistema, curva de aprendizaje y casos de uso específicos.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Flutter: La Apuesta de Google</h2>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Ventajas de Flutter</h3>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Rendimiento Superior:</strong> Compilación directa a código nativo sin puente JavaScript
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Hot Reload:</strong> Desarrollo más rápido con recarga instantánea de cambios
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>UI Consistente:</strong> Mismo aspecto en todas las plataformas
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Dart Language:</strong> Lenguaje moderno optimizado para UI
                          </div>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Desventajas de Flutter</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Tamaño de App:</strong> Apps más pesadas que las nativas
                          </div>
                        </li>
                        <li className="flex items-start">
                          <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Curva de Aprendizaje:</strong> Nuevo lenguaje (Dart) para muchos desarrolladores
                          </div>
                        </li>
                        <li className="flex items-start">
                          <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Ecosistema Menos Maduro:</strong> Menos librerías que React Native
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">React Native: La Solución de Meta</h2>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Ventajas de React Native</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>JavaScript/TypeScript:</strong> Aprovecha el conocimiento existente de desarrolladores web
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Ecosistema Maduro:</strong> Amplia variedad de librerías y componentes
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Componentes Nativos:</strong> Usa elementos UI nativos de cada plataforma
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Comunidad Grande:</strong> Soporte extenso y recursos abundantes
                          </div>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Desventajas de React Native</h3>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Puente JavaScript:</strong> Puede afectar el rendimiento en apps complejas
                          </div>
                        </li>
                        <li className="flex items-start">
                          <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Inconsistencias de UI:</strong> Comportamiento diferente entre plataformas
                          </div>
                        </li>
                        <li className="flex items-start">
                          <X className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Actualizaciones Frecuentes:</strong> Cambios que pueden romper compatibilidad
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparativa de Rendimiento 2024</h2>
                    <p>
                      En nuestras pruebas internas realizadas en PLUS TECNOLOGIA, hemos observado que <strong>Flutter mantiene una ventaja significativa</strong> en aplicaciones que requieren animaciones complejas y renderizado intensivo de UI.
                    </p>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Métricas de Rendimiento (Promedio)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">Flutter</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Tiempo de arranque: 1.2s</li>
                            <li>• FPS en animaciones: 58-60</li>
                            <li>• Uso de memoria: 45MB</li>
                            <li>• Tamaño de APK: 8.5MB</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900 mb-2">React Native</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Tiempo de arranque: 1.8s</li>
                            <li>• FPS en animaciones: 45-55</li>
                            <li>• Uso de memoria: 52MB</li>
                            <li>• Tamaño de APK: 6.2MB</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cuándo Elegir Cada Tecnología?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-green-700">Elige Flutter Si:</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Necesitas máximo rendimiento en UI</li>
                            <li>• Quieres una apariencia consistente</li>
                            <li>• Tu equipo puede aprender Dart</li>
                            <li>• Desarrollas apps con muchas animaciones</li>
                            <li>• El proyecto es de largo plazo</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-blue-700">Elige React Native Si:</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Tu equipo domina JavaScript/React</li>
                            <li>• Necesitas desarrollo rápido (MVP)</li>
                            <li>• Quieres look&feel nativo</li>
                            <li>• Requieres muchas integraciones</li>
                            <li>• El presupuesto es limitado</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tendencias y Futuro 2024-2025</h2>
                    <p>
                      Mirando hacia el futuro, ambas tecnologías están evolucionando rápidamente:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li><strong>Flutter</strong> está expandiéndose hacia web y desktop con Flutter 3.x</li>
                      <li><strong>React Native</strong> está mejorando el rendimiento con la nueva arquitectura Fabric</li>
                      <li>Ambas están integrando mejor soporte para <strong>IA y Machine Learning</strong></li>
                      <li>El enfoque se está moviendo hacia <strong>desarrollo multiplataforma completo</strong></li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Recomendación de PLUS TECNOLOGIA</h3>
                    <p className="text-gray-700">
                      Para proyectos empresariales que priorizan <strong>rendimiento y escalabilidad a largo plazo</strong>, recomendamos Flutter.
                      Para startups y proyectos que necesitan <strong>desarrollo rápido</strong> aprovechando talento web existente, React Native sigue siendo una excelente opción.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Article Stats */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Estadísticas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Vistas</span>
                        <span className="font-semibold">2,340</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Me gusta</span>
                        <span className="font-semibold">156</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Compartidos</span>
                        <span className="font-semibold">89</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Comentarios</span>
                        <span className="font-semibold">23</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Tags */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tags</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {["Flutter", "React Native", "Mobile Development", "Cross-platform", "Dart", "JavaScript", "Performance"].map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Share */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Compartir</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm" variant="outline" className="justify-start">
                          <Share2 className="w-4 h-4 mr-2" />
                          Twitter
                        </Button>
                        <Button size="sm" variant="outline" className="justify-start">
                          <Share2 className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button size="sm" variant="outline" className="justify-start">
                          <Share2 className="w-4 h-4 mr-2" />
                          Facebook
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-24 sm:h-32overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      <Link href={`/blog/${article.slug}`} className="hover:text-blue-600">
                        {article.title}
                      </Link>
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              ¿Necesitas Desarrollar una App Móvil?
            </h2>
            <p className="text-xl text-blue-100">
              Nuestro equipo de expertos te ayudará a elegir la mejor tecnología y desarrollar tu aplicación móvil exitosa.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Button className="h-12 px-6 text-base bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
                Ver Portfolio Apps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en desarrollo de aplicaciones móviles y soluciones tecnológicas empresariales.
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
              <h3 className="font-semibold mb-4">Blog</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Todos los Artículos</Link></li>
                <li><Link href="/blog?category=desarrollo" className="hover:text-white transition-colors">Desarrollo</Link></li>
                <li><Link href="/blog?category=ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/blog?category=tendencias" className="hover:text-white transition-colors">Tendencias</Link></li>
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
    </div>
  );
}
