import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Code2,
  ShoppingCart,
  Zap,
  Search,
  Smartphone,
  Users,
  ArrowRight,
  CheckCircle,
  Monitor,
  Star,
  Clock,
  Award,
  TrendingUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo Web Profesional | PLUS TECNOLOGIA - Next.js, React, E-commerce, SEO",
  description: "Desarrollo de sitios web profesionales, e-commerce y aplicaciones web. Next.js, React, WordPress, Shopify. SEO optimizado y responsive design.",
  keywords: [
    "desarrollo web profesional",
    "paginas web madrid",
    "desarrollo ecommerce",
    "next.js development",
    "react development",
    "wordpress desarrollo",
    "shopify desarrollo",
    "seo web",
    "diseño responsive"
  ],
  openGraph: {
    title: "Desarrollo Web Profesional | PLUS TECNOLOGIA",
    description: "Especialistas en desarrollo web moderno. Sitios corporativos, e-commerce y aplicaciones web escalables.",
    images: ["/images/desarrollo-web-og.jpg"],
    type: "website"
  }
};

const webServices = [
  {
    icon: Globe,
    title: "Sitios Web Corporativos",
    description: "Páginas web profesionales que reflejan la identidad de tu marca y convierten visitantes en clientes.",
    features: ["Diseño Responsive", "SEO Optimizado", "CMS Integrado", "Analytics"],
    complexity: "Media",
    timeline: "4-8 semanas",
    price: "Desde 3.000€"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Tiendas Online",
    description: "Tiendas online completas con gestión de productos, pagos seguros y experiencia de compra optimizada.",
    features: ["Shopify", "WooCommerce", "Pagos Seguros", "Inventario"],
    complexity: "Alta",
    timeline: "6-12 semanas",
    price: "Desde 8.000€"
  },
  {
    icon: Code2,
    title: "Aplicaciones Web SaaS",
    description: "Aplicaciones web escalables con Next.js, autenticación, dashboards y funcionalidades avanzadas.",
    features: ["Next.js", "Authentication", "Dashboards", "APIs"],
    complexity: "Alta",
    timeline: "8-16 semanas",
    price: "Desde 15.000€"
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "Aplicaciones web que funcionan como apps nativas. Instalables, offline y notificaciones push.",
    features: ["PWA", "Service Workers", "Offline Mode", "Push Notifications"],
    complexity: "Media",
    timeline: "6-10 semanas",
    price: "Desde 6.000€"
  },
  {
    icon: Search,
    title: "Landing Pages & SEO",
    description: "Páginas de aterrizaje optimizadas para conversión y posicionamiento en buscadores.",
    features: ["SEO On-Page", "Core Web Vitals", "Conversión", "A/B Testing"],
    complexity: "Media",
    timeline: "2-4 semanas",
    price: "Desde 2.000€"
  },
  {
    icon: TrendingUp,
    title: "Migración & Modernización",
    description: "Migración de sitios web antiguos a tecnologías modernas y mejoras de performance.",
    features: ["Migration", "Performance", "Security", "Modern Stack"],
    complexity: "Alta",
    timeline: "4-8 semanas",
    price: "Desde 5.000€"
  }
];

const webTechnologies = [
  {
    category: "Frontend",
    tools: ["Next.js", "React", "Vue.js", "TypeScript", "Tailwind CSS", "SCSS"]
  },
  {
    category: "Backend",
    tools: ["Node.js", "PHP", "Python", "Laravel", "Express", "FastAPI"]
  },
  {
    category: "CMS & E-commerce",
    tools: ["WordPress", "Shopify", "WooCommerce", "Strapi", "Sanity", "Contentful"]
  },
  {
    category: "Hosting & Cloud",
    tools: ["Vercel", "Netlify", "AWS", "DigitalOcean", "Cloudflare", "Firebase"]
  },
  {
    category: "SEO & Analytics",
    tools: ["Google Analytics", "Search Console", "Lighthouse", "GTM", "Schema Markup", "Sitemap"]
  }
];

const webProjects = [
  {
    type: "E-commerce Moda",
    description: "Tienda online con 1000+ productos",
    metrics: ["300% ↑ ventas online", "2.5s tiempo carga", "98% mobile score"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
  },
  {
    type: "Plataforma SaaS",
    description: "Dashboard empresarial con 10k+ usuarios",
    metrics: ["10,000+ usuarios activos", "99.9% uptime", "95% satisfacción"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
  },
  {
    type: "Portal Inmobiliario",
    description: "Web con 5000+ propiedades",
    metrics: ["5,000+ propiedades", "250% ↑ leads", "3x tiempo sesión"],
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=400&h=250&fit=crop"
  },
  {
    type: "Marketplace B2B",
    description: "Plataforma conecta proveedores",
    metrics: ["500+ empresas", "€2M+ transacciones", "4.8/5 rating"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  }
];

const webFeatures = [
  {
    icon: Zap,
    title: "Performance Optimizada",
    description: "Core Web Vitals perfectos, carga en menos de 3 segundos y optimización completa."
  },
  {
    icon: Search,
    title: "SEO Avanzado",
    description: "Posicionamiento orgánico garantizado con técnicas SEO white hat y content strategy."
  },
  {
    icon: Smartphone,
    title: "100% Responsive",
    description: "Diseño adaptativo perfecto en móvil, tablet y desktop con UX optimizada."
  },
  {
    icon: Monitor,
    title: "CMS Intuitivo",
    description: "Panel de administración fácil de usar para que gestiones tu contenido sin complicaciones."
  },
  {
    icon: Users,
    title: "Escalabilidad",
    description: "Arquitectura preparada para crecer con tu negocio y manejar miles de usuarios."
  },
  {
    icon: CheckCircle,
    title: "Seguridad Avanzada",
    description: "Protección contra ataques, SSL, backups automáticos y actualizaciones de seguridad."
  }
];

export default function DesarrolloWebPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Desarrollo Web</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <Globe className="w-4 h-4 mr-2" />
                  Desarrollo Web Profesional
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Sitios Web que <span className="text-green-600">Convierten</span> y Venden
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Desarrollamos sitios web profesionales, e-commerce y aplicaciones web modernas. Next.js, React, SEO optimizado y performance superior que impulsa tu negocio online.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Link href="/contacto">
                  <Button className="h-12 px-6 text-base bg-green-600 hover:bg-green-700">
                    Consulta Web Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="default" className="h-12 px-6 text-base" variant="outline">
                    Ver Portfolio Web
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-600">98% Google PageSpeed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">+100 Webs Entregadas</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Desarrollo web profesional"
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-green-600">Desarrollo Web</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde sitios corporativos hasta complejas aplicaciones web SaaS
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {webServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                      <span className="font-semibold text-green-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto bg-green-600 hover:bg-green-700">
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              ¿Por qué Elegir Nuestro <span className="text-green-600">Desarrollo Web</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {webFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow p-6">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mx-auto text-green-600 mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Proyectos <span className="text-green-600">Destacados</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {webProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-24 sm:h-32sm:h-40">
                  <Image
                    src={project.image}
                    alt={project.type}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.type}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-sm font-medium text-green-600">
                        • {metric}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="text-green-600">Tecnologías</span> que Dominamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {webTechnologies.map((tech, index) => (
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Nuestro <span className="text-green-600">Proceso</span> de Trabajo
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Estrategia",
                description: "Análisis de objetivos, audiencia y definición de arquitectura web."
              },
              {
                step: "02",
                title: "Diseño",
                description: "Wireframes, mockups y prototipos interactivos responsive."
              },
              {
                step: "03",
                title: "Desarrollo",
                description: "Programación con tecnologías modernas y mejores prácticas."
              },
              {
                step: "04",
                title: "Optimización",
                description: "SEO, performance, testing y optimización para conversión."
              },
              {
                step: "05",
                title: "Lanzamiento",
                description: "Deploy, configuración hosting y formación para gestión."
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para Crear tu Web Perfecta?
            </h2>
            <p className="text-xl text-green-100">
              Solicita una consulta gratuita y descubre cómo podemos llevar tu negocio online al siguiente nivel.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-green-600 text-lg px-8">
                  Ver Portfolio
                </Button>
              </Link>
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
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en desarrollo web que convierte visitantes en clientes y hace crecer tu negocio online.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Desarrollo Web</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-web/corporativo" className="hover:text-white transition-colors">Sitios Corporativos</Link></li>
                <li><Link href="/desarrollo-web/ecommerce" className="hover:text-white transition-colors">E-commerce</Link></li>
                <li><Link href="/desarrollo-web/landing" className="hover:text-white transition-colors">Landing Pages</Link></li>
                <li><Link href="/desarrollo-web/aplicaciones" className="hover:text-white transition-colors">Aplicaciones Web</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Otros Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil" className="hover:text-white transition-colors">Desarrollo Móvil</Link></li>
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Software Empresarial</Link></li>
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

      {/* WhatsApp Chat */}
      <WhatsAppChat />
    </div>
  );
}
