import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Award,
  Search,
  Clock
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Landing Pages Profesionales | Páginas de Aterrizaje - PLUS TECNOLOGIA",
  description: "Diseño y desarrollo de landing pages optimizadas para conversión. SEO, A/B testing, analytics. Páginas de aterrizaje que generan leads y ventas.",
  keywords: [
    "landing page",
    "página de aterrizaje",
    "diseño landing page",
    "landing page conversión",
    "desarrollo landing madrid",
    "página captación leads",
    "landing page SEO",
    "optimización conversión"
  ],
  openGraph: {
    title: "Landing Pages Profesionales | PLUS TECNOLOGIA",
    description: "Landing pages optimizadas para conversión. Más leads, más ventas, mejor ROI.",
    type: "website"
  }
};

const landingTypes = [
  {
    icon: Target,
    title: "Lead Generation",
    description: "Landing page enfocada en captar leads cualificados con formularios optimizados.",
    features: ["Formulario optimizado", "CTA persuasivo", "Social proof", "Lead magnet"],
    conversion: "15-25% tasa conversión",
    price: "Desde 1.500€"
  },
  {
    icon: TrendingUp,
    title: "Product Launch",
    description: "Lanzamiento de productos o servicios con diseño impactante y storytelling.",
    features: ["Storytelling visual", "Video hero", "Early bird pricing", "Countdown timer"],
    conversion: "10-20% tasa conversión",
    price: "Desde 2.000€"
  },
  {
    icon: Users,
    title: "Event Registration",
    description: "Registro para eventos, webinars o cursos con información clara y CTA urgente.",
    features: ["Agenda detallada", "Speakers destacados", "Limited seats", "Easy registration"],
    conversion: "20-30% tasa conversión",
    price: "Desde 1.200€"
  },
  {
    icon: BarChart3,
    title: "Sales Page",
    description: "Página de ventas larga con copy persuasivo y múltiples puntos de conversión.",
    features: ["Long-form copy", "Testimonios reales", "Pricing tiers", "FAQs completo"],
    conversion: "5-15% tasa conversión",
    price: "Desde 2.500€"
  }
];

const conversionElements = [
  {
    element: "Hero Section Impactante",
    description: "Primera impresión que captura atención en 3 segundos",
    impact: "300% mejora engagement"
  },
  {
    element: "Propuesta de Valor Clara",
    description: "Beneficios específicos y diferenciadores únicos",
    impact: "150% mejor comprensión"
  },
  {
    element: "Social Proof",
    description: "Testimonios, casos de éxito, logos de clientes",
    impact: "270% aumento confianza"
  },
  {
    element: "CTA Optimizado",
    description: "Call-to-action visible, copy accionable, color destacado",
    impact: "200% más clicks"
  },
  {
    element: "Formulario Simple",
    description: "Mínimos campos necesarios, validación en tiempo real",
    impact: "180% más conversiones"
  },
  {
    element: "Urgencia y Escasez",
    description: "Ofertas limitadas, countdown timers, stock limitado",
    impact: "250% más urgencia"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Estrategia y Copy",
    description: "Definimos mensaje, audiencia objetivo y estructura persuasiva.",
    duration: "3-5 días"
  },
  {
    step: 2,
    title: "Diseño Conversion-Focused",
    description: "Diseño enfocado 100% en conversión con psicología aplicada.",
    duration: "5-7 días"
  },
  {
    step: 3,
    title: "Desarrollo Optimizado",
    description: "Programación con performance y SEO optimizado desde el inicio.",
    duration: "5-7 días"
  },
  {
    step: 4,
    title: "Testing y Launch",
    description: "A/B testing, analytics setup y optimización continua.",
    duration: "2-3 días"
  }
];

const includedFeatures = [
  "Diseño responsive premium",
  "SEO on-page optimizado",
  "Velocidad de carga <2s",
  "Integración analytics",
  "Formulario validado",
  "Thank you page",
  "Email automation setup",
  "A/B testing básico",
  "Heatmaps configurado",
  "Optimización conversión"
];

const caseStudies = [
  {
    client: "SaaS B2B",
    objective: "Generar demos cualificadas",
    before: "2.3% conversión",
    after: "18.7% conversión",
    improvement: "713% mejora",
    timeframe: "30 días"
  },
  {
    client: "Curso Online",
    objective: "Inscripciones webinar",
    before: "5.1% conversión",
    after: "32.4% conversión",
    improvement: "535% mejora",
    timeframe: "15 días"
  },
  {
    client: "E-commerce",
    objective: "Lanzamiento producto",
    before: "Sin referencia",
    after: "€45k ventas",
    improvement: "Meta superada 180%",
    timeframe: "7 días"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-orange-600 text-orange-700">
              <Target className="w-4 h-4 mr-2 inline" />
              Landing Pages
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Landing Pages que <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Convierten</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Diseñamos páginas de aterrizaje optimizadas para conversión. Más leads, más ventas,
              mejor ROI. Cada elemento diseñado con un único objetivo: convertir visitantes en clientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-lg bg-orange-600 hover:bg-orange-700">
                  Solicitar Landing Page
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-8 text-lg border-gray-300">
                  Ver Ejemplos
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">25%</div>
                <div className="text-sm text-gray-600">Conversión Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">2 sem</div>
                <div className="text-sm text-gray-600">Tiempo Entrega</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">300%</div>
                <div className="text-sm text-gray-600">ROI Promedio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Tipos de <span className="text-orange-600">Landing Pages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {landingTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <type.icon className="h-12 w-12 text-orange-600 mb-4" />
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {type.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <Badge className="bg-green-100 text-green-700">{type.conversion}</Badge>
                    <div className="text-xl font-bold text-orange-600">{type.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Elements */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Elementos que <span className="text-orange-600">Convierten</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversionElements.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.element}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-orange-100 text-orange-700">{item.impact}</Badge>
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
              Proceso <span className="text-orange-600">Rápido</span>
            </h2>
            <p className="text-xl text-gray-600">De la idea a conversión en 2 semanas</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((phase, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.description}</p>
                <Badge variant="outline" className="text-orange-600">{phase.duration}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Todo <span className="text-orange-600">Incluido</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Resultados <span className="text-orange-600">Reales</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{study.client}</CardTitle>
                  <CardDescription>{study.objective}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded">
                      <div className="text-xs text-gray-600 mb-1">ANTES</div>
                      <div className="text-lg font-bold text-red-600">{study.before}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded">
                      <div className="text-xs text-gray-600 mb-1">DESPUÉS</div>
                      <div className="text-lg font-bold text-green-600">{study.after}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{study.improvement}</div>
                    <div className="text-sm text-gray-600">en {study.timeframe}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Multiplicar tus Conversiones?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Solicita tu landing page optimizada y empieza a generar más leads y ventas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="h-12 px-8 text-lg bg-white text-orange-600 hover:bg-gray-100">
                Solicitar Landing Page
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
                <Target className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Landing pages optimizadas para conversión que generan resultados medibles.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Desarrollo Web</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-web/landing" className="hover:text-white transition-colors">Landing Pages</Link></li>
                <li><Link href="/desarrollo-web/corporativo" className="hover:text-white transition-colors">Sitios Corporativos</Link></li>
                <li><Link href="/desarrollo-web/ecommerce" className="hover:text-white transition-colors">E-commerce</Link></li>
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
