import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Code2,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  BarChart3,
  Award,
  Search,
  Smartphone
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Sitios Web Corporativos | Desarrollo Web Empresarial - PLUS TECNOLOGIA",
  description: "Desarrollo de sitios web corporativos profesionales. Diseño premium, SEO optimizado, responsive, CMS integrado. Páginas web que generan confianza y conversiones.",
  keywords: [
    "sitio web corporativo",
    "página web empresarial",
    "desarrollo web corporativo",
    "diseño web profesional",
    "web empresarial madrid",
    "sitio web empresa",
    "desarrollo web negocio",
    "página corporativa"
  ],
  openGraph: {
    title: "Sitios Web Corporativos | PLUS TECNOLOGIA",
    description: "Desarrollo de sitios web corporativos profesionales que reflejan la identidad de tu marca.",
    type: "website"
  }
};

const corporateServices = [
  {
    icon: Building2,
    title: "Sitio Web Corporativo Completo",
    description: "Web profesional con todas las secciones necesarias para presentar tu empresa.",
    features: ["Homepage impactante", "Sobre nosotros", "Servicios detallados", "Portfolio/Casos de éxito"],
    price: "Desde 3.000€"
  },
  {
    icon: Users,
    title: "Web con Blog Corporativo",
    description: "Sitio web con blog integrado para content marketing y posicionamiento SEO.",
    features: ["CMS para blog", "Categorías y tags", "SEO optimizado", "Social sharing"],
    price: "Desde 4.500€"
  },
  {
    icon: Globe,
    title: "Web Multi-idioma",
    description: "Sitio corporativo en múltiples idiomas para alcance internacional.",
    features: ["Gestión multi-idioma", "SEO por idioma", "Detección automática", "Selector de idioma"],
    price: "Desde 5.500€"
  },
  {
    icon: BarChart3,
    title: "Web con Portal de Clientes",
    description: "Sitio corporativo con área privada para clientes con autenticación.",
    features: ["Login seguro", "Dashboard clientes", "Documentos privados", "Área de soporte"],
    price: "Desde 7.000€"
  }
];

const includedFeatures = [
  {
    category: "Diseño",
    features: ["Diseño UX/UI premium", "100% responsive", "Animaciones sutiles", "Tipografía profesional"]
  },
  {
    category: "SEO",
    features: ["SEO on-page", "Meta tags optimizados", "Sitemap XML", "Schema markup"]
  },
  {
    category: "Performance",
    features: ["Velocidad optimizada", "Core Web Vitals", "Lazy loading", "CDN integration"]
  },
  {
    category: "CMS",
    features: ["Panel administración", "Editor visual", "Gestión contenidos", "Blog integrado"]
  }
];

const developmentProcess = [
  {
    step: 1,
    title: "Briefing y Estrategia",
    description: "Entendemos tu empresa, competencia, objetivos y definimos la estrategia web.",
    duration: "1 semana"
  },
  {
    step: 2,
    title: "Diseño UX/UI",
    description: "Wireframes, mockups y diseño visual que refleja tu identidad corporativa.",
    duration: "2-3 semanas"
  },
  {
    step: 3,
    title: "Desarrollo",
    description: "Programación con tecnologías modernas: Next.js, responsive design, optimización.",
    duration: "3-4 semanas"
  },
  {
    step: 4,
    title: "Contenido y SEO",
    description: "Migración de contenidos, optimización SEO y configuración analytics.",
    duration: "1-2 semanas"
  },
  {
    step: 5,
    title: "Lanzamiento",
    description: "Testing final, configuración hosting, lanzamiento y formación CMS.",
    duration: "1 semana"
  }
];

const caseStudies = [
  {
    client: "Bufete de Abogados",
    industry: "Legal",
    challenge: "Sitio web anticuado que no generaba confianza ni leads.",
    solution: "Rediseño completo con diseño premium, casos de éxito destacados y blog legal.",
    results: ["300% aumento tráfico web", "150% más consultas", "Posicionamiento #1 Google"]
  },
  {
    client: "Consultoría Empresarial",
    industry: "Consultoría",
    challenge: "Web genérica que no diferenciaba de la competencia.",
    solution: "Sitio corporativo con identidad única, testimonios en video y caso estudios detallados.",
    results: ["Reconocimiento de marca +200%", "50 leads cualificados/mes", "Premio diseño web"]
  }
];

export default function CorporativoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-blue-600 text-blue-700">
              <Building2 className="w-4 h-4 mr-2 inline" />
              Sitios Web Corporativos
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Presencia Digital</span> Profesional
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Creamos sitios web corporativos que reflejan la profesionalidad de tu empresa.
              Diseño premium, SEO optimizado y resultados medibles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-700">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-8 text-lg border-gray-300">
                  Ver Portfolio
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Webs Corporativas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98/100</div>
                <div className="text-sm text-gray-600">PageSpeed Score</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">Top 3</div>
                <div className="text-sm text-gray-600">Posicionamiento Google</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Soluciones <span className="text-blue-600">Web Corporativas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corporateServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Todo lo que <span className="text-blue-600">Incluimos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includedFeatures.map((section, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{section.category}</CardTitle>
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
              Nuestro <span className="text-blue-600">Proceso</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.description}</p>
                <div className="text-xs text-blue-600 font-medium">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Casos de <span className="text-blue-600">Éxito</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{study.client}</CardTitle>
                    <Badge variant="outline">{study.industry}</Badge>
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
                    <ul className="space-y-1">
                      {study.results.map((result, i) => (
                        <li key={i} className="text-sm font-semibold text-green-600">• {result}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para tu Nuevo Sitio Web Corporativo?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Solicita un presupuesto sin compromiso y te mostraremos cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="h-12 px-8 text-lg bg-white text-blue-600 hover:bg-gray-100">
                Solicitar Presupuesto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/desarrollo-web">
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
                <Globe className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Desarrollo de sitios web corporativos profesionales que generan resultados.
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
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil" className="hover:text-white transition-colors">Desarrollo Móvil</Link></li>
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
