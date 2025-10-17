import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Code2,
  Zap,
  TrendingUp,
  Calendar,
  Clock,
  User,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Settings,
  BarChart3,
  Share2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo con IA Generativa en 2025: El Futuro de la Programación | PLUS TECNOLOGIA",
  description: "Descubre cómo la IA generativa está revolucionando el desarrollo de software en 2025. GitHub Copilot, Claude, GPT-4 y nuevas herramientas que transforman la programación.",
  keywords: [
    "IA generativa 2025",
    "desarrollo software IA",
    "GitHub Copilot",
    "programación con IA",
    "Claude desarrollo",
    "GPT-4 programación",
    "herramientas IA desarrollo",
    "futuro programación",
    "inteligencia artificial desarrollo",
    "automatización código"
  ],
  openGraph: {
    title: "Desarrollo con IA Generativa en 2025: El Futuro de la Programación",
    description: "La IA generativa está transformando el desarrollo de software. Conoce las últimas tendencias y herramientas de 2025.",
    images: ["/images/blog/ia-generativa-desarrollo-2025.jpg"],
    type: "article"
  }
};

export default function DesarrolloIAGenerativa2025Page() {
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
            <span className="text-gray-900">Desarrollo con IA Generativa en 2025</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            {/* Article Header */}
            <div className="text-center space-y-6 mb-12">
              <Badge className="bg-purple-100 text-purple-700">
                <Brain className="w-4 h-4 mr-2" />
                IA & Desarrollo
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Desarrollo con IA Generativa en 2025: El Futuro de la Programación
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                La inteligencia artificial generativa está revolucionando cómo desarrollamos software. Descubre las herramientas y técnicas que están transformando la programación en 2025.
              </p>
            </div>

            {/* Article Meta */}
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                15 Enero 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                12 min lectura
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Carlos Herrera, CTO
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
                alt="Desarrollo con IA generativa - Programador usando herramientas de inteligencia artificial"
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-sm sm:prose-lg max-w-none space-y-8">
              <p className="text-xl font-medium text-gray-800">
                La inteligencia artificial generativa ha pasado de ser una curiosidad tecnológica a convertirse en la herramienta más transformadora en el desarrollo de software desde la creación de los frameworks modernos.
              </p>

              <p>
                En 2025, más del <strong>75% de los desarrolladores</strong> utilizan herramientas de IA para acelerar su trabajo diario, desde la generación de código hasta la depuración y optimización. Esta revolución no solo está cambiando <em>cómo</em> programamos, sino también <em>qué</em> es posible desarrollar.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Dato Clave</h3>
                <p className="text-blue-800">
                  En PLUS TECNOLOGIA, hemos integrado estas tecnologías en nuestros procesos de desarrollo, logrando incrementos de productividad del 60% mientras mejoramos la calidad del código.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                🛠️ Herramientas de IA que Están Redefiniendo el Desarrollo
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">GitHub Copilot X</CardTitle>
                    <CardDescription>Asistente de código más avanzado con capacidades conversacionales</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Características principales:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Generación de código contextual
                          </li>
                          <li className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Explicación de funciones complejas
                          </li>
                          <li className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Testing automático
                          </li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <span className="text-sm font-semibold text-purple-700">
                          Impacto: 80% reducción tiempo desarrollo
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">Claude 3.5 Sonnet</CardTitle>
                    <CardDescription>IA de Anthropic especializada en análisis y generación de código complejo</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Características principales:</h4>
                        <ul className="space-y-1">
                          <li className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Análisis arquitectural profundo
                          </li>
                          <li className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Revisión de código avanzada
                          </li>
                          <li className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            Documentación automática
                          </li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <span className="text-sm font-semibold text-purple-700">
                          Impacto: 95% precisión en code reviews
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                🚀 El Impacto Real de la IA en el Desarrollo
              </h2>

              <p>
                Los datos no mienten: las empresas que han adoptado herramientas de IA generativa reportan aumentos promedio del <strong>45% en productividad</strong> y una reducción del <strong>60% en bugs</strong> que llegan a producción.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Caso de Éxito: Startup FinTech</h3>
                <p className="text-green-800">
                  Una startup fintech logró reducir el tiempo de desarrollo de su MVP de 6 meses a 2.5 meses utilizando GitHub Copilot y Claude para la generación de APIs y componentes frontend. El resultado: lanzamiento más rápido y €500K ahorrados en costos de desarrollo.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                🎯 Casos de Uso Prácticos en 2025
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg">Desarrollo Frontend Automatizado</CardTitle>
                    <CardDescription>IA genera componentes React/Vue desde diseños Figma</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">React</Badge>
                        <Badge variant="secondary" className="text-xs">Vue.js</Badge>
                        <Badge variant="secondary" className="text-xs">Figma</Badge>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <span className="text-sm font-semibold text-green-700">
                          ✅ 70% reducción tiempo frontend
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-500">
                  <CardHeader>
                    <CardTitle className="text-lg">APIs Inteligentes</CardTitle>
                    <CardDescription>Generación automática de endpoints REST y GraphQL</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Node.js</Badge>
                        <Badge variant="secondary" className="text-xs">GraphQL</Badge>
                        <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                      </div>
                      <div className="bg-green-50 p-2 rounded">
                        <span className="text-sm font-semibold text-green-700">
                          ✅ 50% menos código boilerplate
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                ⚠️ Desafíos y Consideraciones
              </h2>

              <p>
                A pesar de los beneficios evidentes, la implementación de IA en desarrollo no está exenta de desafíos:
              </p>

              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-800 mb-2">🔒 Seguridad y Privacidad</h3>
                  <p className="text-yellow-700 text-sm">
                    Es crucial asegurar que el código generado no contenga vulnerabilidades y que los datos sensibles no se filtren a los modelos de IA.
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">👥 Dependencia Tecnológica</h3>
                  <p className="text-orange-700 text-sm">
                    Los equipos deben mantener sus habilidades fundamentales de programación para no depender completamente de la IA.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                🔮 Tendencias para el Resto de 2025
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">IA Especializada por Lenguaje</h3>
                    <p className="text-gray-600 text-sm">Modelos específicos para Python, JavaScript, Rust, etc., con mayor precisión en cada ecosistema.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Testing Automático Avanzado</h3>
                    <p className="text-gray-600 text-sm">IA que genera tests completos incluyendo casos edge y scenarios de error complejos.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Desarrollo Visual con IA</h3>
                    <p className="text-gray-600 text-sm">Interfaces que permiten crear aplicaciones completas mediante descripciones en lenguaje natural.</p>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Conclusión</h2>
                <p className="text-gray-700 mb-4">
                  La IA generativa no es solo una herramienta más en el arsenal del desarrollador; es un cambio de paradigma que está redefiniendo qué significa ser programador en 2025. Las empresas que adopten estas tecnologías de manera estratégica no solo ganarán en productividad, sino que podrán innovar más rápido y mantener una ventaja competitiva sostenible.
                </p>
                <p className="text-gray-700">
                  En PLUS TECNOLOGIA, creemos que el futuro del desarrollo es colaborativo: humanos y IA trabajando juntos para crear software excepcional. ¿Estás listo para dar el salto?
                </p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {["IA Generativa", "Desarrollo Software", "GitHub Copilot", "Claude", "GPT-4", "Automatización", "Productividad", "Futuro Programación"].map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Ciberseguridad Empresarial 2025: Nuevas Amenazas",
                  excerpt: "Las últimas tendencias en ciberseguridad y cómo proteger tu empresa.",
                  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
                  href: "/blog/ciberseguridad-empresarial-2025"
                },
                {
                  title: "Web 3.0 y Desarrollo Frontend 2025",
                  excerpt: "Cómo las tecnologías Web 3.0 están cambiando el desarrollo.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
                  href: "/blog/web3-desarrollo-frontend-2025"
                },
                {
                  title: "Edge Computing vs Cloud Computing 2025",
                  excerpt: "La nueva batalla tecnológica que define el futuro.",
                  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
                  href: "/blog/edge-computing-vs-cloud-2025"
                }
              ].map((article, index) => (
                <Link key={index} href={article.href}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <div className="relative h-24 sm:h-32overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">
                ¿Quieres Implementar IA en tu Desarrollo?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Nuestro equipo te ayuda a integrar herramientas de IA generativa en tus proyectos
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
                <Link href="/contacto">
                  <Button className="h-12 px-6 text-base bg-white text-purple-600 hover:bg-gray-100">
                    Consulta Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/ia-big-data">
                  <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-purple-600">
                    Ver Servicios IA
                  </Button>
                </Link>
              </div>
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
                Expertos en desarrollo con IA y tecnologías emergentes. Transformamos ideas en soluciones innovadoras.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios IA</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/ia-big-data" className="hover:text-white transition-colors">IA & Big Data</Link></li>
                <li><Link href="/desarrollo-movil" className="hover:text-white transition-colors">Desarrollo Móvil</Link></li>
                <li><Link href="/desarrollo-web" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/consultoria-it" className="hover:text-white transition-colors">Consultoría IT</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Blog</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Últimos Artículos</Link></li>
                <li><Link href="/blog?category=ia" className="hover:text-white transition-colors">IA & Machine Learning</Link></li>
                <li><Link href="/blog?category=desarrollo" className="hover:text-white transition-colors">Desarrollo</Link></li>
                <li><Link href="/blog?category=tendencias" className="hover:text-white transition-colors">Tendencias Tech</Link></li>
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
