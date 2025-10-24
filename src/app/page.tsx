import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import Image from "next/image";
import {
  Code2,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Settings,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <Badge variant="outline" className="border-blue-200 text-blue-700">
                  🚀 Transformación Digital
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Desarrollo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Aplicaciones</span> y Soluciones IT Profesionales
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Especialistas en desarrollo de aplicaciones móviles, desarrollo web y soluciones tecnológicas empresariales. Transformamos ideas en soluciones digitales innovadoras que impulsan el crecimiento de tu negocio.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Link href="/contacto">
                  <Button className="h-12 px-6 text-base bg-blue-600 hover:bg-blue-700 text-lg px-8">
                    Consulta Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" className="h-12 px-6 text-base text-lg px-8 border-gray-300">
                    Ver Proyectos
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">+500 Proyectos Exitosos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-600">5.0 Calificación</span>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3" />
              <div className="relative z-10 aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&auto=format&q=85"
                  alt="Equipo de desarrollo de PLUS TECNOLOGIA trabajando en proyectos innovadores"
                  fill
                  className="object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              Nuestros Servicios
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Soluciones Tecnológicas <span className="text-blue-600">Integrales</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos servicios completos de desarrollo tecnológico para empresas que buscan innovar y crecer en el mundo digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: Smartphone,
                title: "Desarrollo de Apps Móviles",
                description: "Aplicaciones nativas e híbridas para iOS y Android. Desarrollo con React Native, Flutter y tecnologías nativas.",
                features: ["iOS & Android", "React Native", "Flutter", "UX/UI Optimizado"],
                href: "/desarrollo-movil"
              },
              {
                icon: Globe,
                title: "Desarrollo Web Profesional",
                description: "Sitios web modernos, e-commerce y aplicaciones web escalables con las últimas tecnologías.",
                features: ["Next.js", "React", "E-commerce", "SEO Optimizado"],
                href: "/desarrollo-web"
              },
              {
                icon: Settings,
                title: "Sistemas Empresariales",
                description: "Software a medida, ERP, CRM y sistemas de gestión empresarial para optimizar procesos.",
                features: ["ERP/CRM", "APIs", "Integración", "Cloud"],
                href: "/software-empresarial"
              },
              {
                icon: Shield,
                title: "Ciberseguridad",
                description: "Auditorías de seguridad, implementación de protocolos y protección de datos empresariales.",
                features: ["Auditorías", "GDPR", "Protección", "Monitoreo"],
                href: "/ciberseguridad"
              },
              {
                icon: Zap,
                title: "Optimización & Performance",
                description: "Mejora del rendimiento de aplicaciones existentes y optimización de infraestructura.",
                features: ["Performance", "Escalabilidad", "Monitoreo", "Analytics"],
                href: "/optimizacion-performance"
              },
              {
                icon: Users,
                title: "Consultoría IT",
                description: "Asesoramiento estratégico en transformación digital y arquitectura tecnológica.",
                features: ["Estrategia", "Arquitectura", "Migración", "Formación"],
                href: "/consultoria-it"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md cursor-pointer h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">Ver más detalles</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-3xl -z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format&q=85"
                alt="Equipo profesional trabajando en desarrollo tecnológico"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl w-full h-auto"
                quality={85}
                priority={true}
              />
            </div>

            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <Badge variant="outline" className="border-blue-200 text-blue-700">
                  ¿Por qué PLUS TECNOLOGIA?
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                  Experiencia y <span className="text-blue-600">Calidad Garantizada</span>
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl">
                  Con más de 10 años de experiencia en el sector tecnológico, somos el socio ideal para tu transformación digital.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {[
                  {
                    icon: Award,
                    title: "Experiencia Comprobada",
                    description: "Más de 50 proyectos exitosos y clientes satisfechos en diferentes industrias."
                  },
                  {
                    icon: TrendingUp,
                    title: "Tecnologías Innovadoras",
                    description: "Utilizamos las últimas tecnologías y mejores prácticas del mercado."
                  },
                  {
                    icon: Shield,
                    title: "Seguridad & Calidad",
                    description: "Código limpio, seguro y escalable con procesos de calidad certificados."
                  },
                  {
                    icon: Users,
                    title: "Soporte Continuo",
                    description: "Acompañamiento técnico y soporte post-lanzamiento garantizado."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog/Centro de Conocimiento Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              Centro de Conocimiento
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Aprende de los <span className="text-blue-600">Expertos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente al día con las últimas tendencias, mejores prácticas y casos de éxito en desarrollo tecnológico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {[
              {
                category: "Inteligencia Artificial",
                title: "IA y Machine Learning para Empresas en 2025: Transformación Digital Real",
                excerpt: "Casos de uso reales, ROI medible y guía práctica para implementar IA en tu empresa. Desde análisis predictivo hasta chatbots inteligentes.",
                readTime: "12 min lectura",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&auto=format&q=85",
                href: "/blog/ia-machine-learning-empresas-2025",
                tags: ["IA", "Machine Learning", "Automatización"]
              },
              {
                category: "DevOps & CI/CD",
                title: "DevOps y CI/CD: Guía Completa 2025 para Equipos Modernos",
                excerpt: "Pipeline completo desde código hasta producción. GitHub Actions, Docker, Kubernetes y métricas DORA para teams de alto rendimiento.",
                readTime: "16 min lectura",
                image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=200&fit=crop&auto=format&q=85",
                href: "/blog/devops-cicd-guia-completa-2025",
                tags: ["DevOps", "CI/CD", "Kubernetes"]
              },
              {
                category: "Blockchain & Web3",
                title: "Blockchain y Web3 en 2025: La Revolución Descentralizada Ya Está Aquí",
                excerpt: "DeFi, NFTs utilitarios, smart contracts y casos de uso empresariales reales. El futuro descentralizado con ROI medible.",
                readTime: "14 min lectura",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop&auto=format&q=85",
                href: "/blog/blockchain-web3-2025",
                tags: ["Blockchain", "Web3", "DeFi"]
              },
              {
                category: "Realidad Virtual",
                title: "Realidad Virtual en Desarrollo Web 2025: WebXR y el Metaverso Empresarial",
                excerpt: "WebXR, showrooms virtuales, formación VR y metaverso empresarial. El futuro inmersivo de la web ya está aquí.",
                readTime: "10 min lectura",
                image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=400&h=200&fit=crop&auto=format&q=85",
                href: "/blog/realidad-virtual-desarrollo-web-2025",
                tags: ["WebXR", "VR", "Metaverso"]
              },
              {
                category: "Automatización",
                title: "Automatización de Procesos con IA en 2025: RPA Inteligente y Workflows Adaptativos",
                excerpt: "RPA inteligente, automatización con IA generativa y workflows adaptativos. Casos reales con 400% ROI documentado.",
                readTime: "11 min lectura",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop&auto=format&q=85",
                href: "/blog/automatizacion-procesos-ia-2025",
                tags: ["RPA", "Automatización", "Workflows"]
              }
            ].map((article, index) => (
              <Link key={index} href={article.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden">
                  <div className="relative h-48 sm:h-52 lg:h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-blue-600 text-white">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button variant="outline" className="h-12 px-6 text-base border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Ver Todos los Artículos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700">
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Resolvemos tus <span className="text-blue-600">Dudas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Respuestas a las preguntas más comunes sobre desarrollo de aplicaciones, precios y procesos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Desarrollo y Tecnología</h3>
              {[
                {
                  question: "¿Cuánto tiempo toma desarrollar una aplicación móvil?",
                  answer: "El tiempo de desarrollo varía según la complejidad. Una app básica puede tomar 2-3 meses, mientras que aplicaciones complejas con funcionalidades avanzadas pueden requerir 6-8 meses. Proporcionamos un cronograma detallado después del análisis inicial."
                },
                {
                  question: "¿Es mejor desarrollar nativo o multiplataforma?",
                  answer: "Depende de tus objetivos. Apps nativas (iOS/Android separadas) ofrecen mejor rendimiento y acceso completo a funcionalidades del dispositivo. Multiplataforma (React Native/Flutter) es más económico y rápido para lanzar en ambas plataformas simultáneamente."
                },
                {
                  question: "¿Qué tecnologías utilizan para desarrollo web?",
                  answer: "Utilizamos tecnologías modernas como Next.js, React, TypeScript para frontend, y Node.js, Python, PHP para backend. Seleccionamos la stack tecnológica según los requerimientos específicos de cada proyecto."
                },
                {
                  question: "¿Incluyen el diseño UX/UI en el desarrollo?",
                  answer: "Sí, incluimos diseño UX/UI profesional en todos nuestros proyectos. Nuestro proceso incluye investigación de usuarios, wireframes, prototipos interactivos y diseño visual optimizado para conversiones."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Precios y Procesos</h3>
              {[
                {
                  question: "¿Cuál es el costo de desarrollar una aplicación móvil?",
                  answer: "Los precios varían según funcionalidades y complejidad. Apps básicas desde 8.000€, apps medias desde 15.000€, y apps complejas desde 25.000€. Ofrecemos presupuesto detallado gratuito después de analizar tus requerimientos específicos."
                },
                {
                  question: "¿Cómo es su proceso de desarrollo?",
                  answer: "Seguimos metodología ágil con 5 fases: 1) Análisis y planificación, 2) Diseño UX/UI, 3) Desarrollo con entregas parciales, 4) Testing y QA, 5) Lanzamiento y soporte. Mantienes visibilidad completa del progreso."
                },
                {
                  question: "¿Ofrecen soporte después del lanzamiento?",
                  answer: "Sí, incluimos 3 meses de soporte técnico gratuito post-lanzamiento. Posteriormente ofrecemos planes de mantenimiento mensuales que incluyen actualizaciones, backup, seguridad y soporte técnico 24/7."
                },
                {
                  question: "¿Trabajan con startups o solo con grandes empresas?",
                  answer: "Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones. Adaptamos nuestros servicios y modelos de pago a las necesidades y presupuesto de cada cliente, incluyendo opciones de pago por fases."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 p-6 bg-blue-50 rounded-xl">
              <Users className="h-8 w-8 text-blue-600" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-900">¿No encuentras tu respuesta?</h4>
                <p className="text-gray-600">Contacta con nuestro equipo para una consulta personalizada</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Consulta Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para Transformar tu Negocio?
            </h2>
            <p className="text-xl text-blue-100">
              Contacta con nuestro equipo de expertos y recibe una consulta gratuita para tu proyecto.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+34915493616">
                <Button className="h-12 px-6 text-base bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  915 493 616
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
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
              <h3 className="font-semibold mb-4">Desarrollo</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil/ios" className="hover:text-white transition-colors">Apps iOS</Link></li>
                <li><Link href="/desarrollo-movil/android" className="hover:text-white transition-colors">Apps Android</Link></li>
                <li><Link href="/desarrollo-web/corporativos" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/desarrollo-web/ecommerce" className="hover:text-white transition-colors">E-commerce</Link></li>
                <li><Link href="/desarrollo-movil/react-native" className="hover:text-white transition-colors">React Native</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Software Empresarial</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/cloud-computing" className="hover:text-white transition-colors">Cloud Computing</Link></li>
                <li><Link href="/ia-big-data" className="hover:text-white transition-colors">IA & Big Data</Link></li>
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
                <li><Link href="/testimonios" className="hover:text-white transition-colors">Testimonios</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:info@plustecologia.es" className="hover:text-white transition-colors">info@plustecologia.es</a></li>
                <li><a href="tel:+34915493616" className="hover:text-white transition-colors">915 493 616</a></li>
                <li>C. de Orense, 68, 12º</li>
                <li>Tetuán, 28020 Madrid</li>
              </ul>
              <div className="mt-4">
                <Link href="/contacto">
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                    Consulta Gratis
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat */}
      <WhatsAppChat />
    </div>
  );
}
