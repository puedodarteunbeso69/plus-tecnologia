import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  TrendingUp,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Lightbulb,
  Zap,
  Building2,
  Clock,
  Award,
  Users,
  Calendar,
  DollarSign
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Estrategia Tecnológica | Consultoría IT - PLUS TECNOLOGIA",
  description: "Definimos tu roadmap tecnológico alineado con objetivos de negocio. Estrategia IT, análisis de ROI, evaluación de riesgos y planificación tecnológica a largo plazo.",
  keywords: [
    "estrategia tecnologica",
    "roadmap tecnologico",
    "planificacion IT",
    "consultoria estrategica",
    "transformacion digital",
    "alineacion tecnologia negocio",
    "ROI tecnologico",
    "evaluacion riesgos IT"
  ],
  openGraph: {
    title: "Estrategia Tecnológica | PLUS TECNOLOGIA",
    description: "Definimos tu roadmap tecnológico alineado con objetivos de negocio y visión a largo plazo.",
    type: "website"
  }
};

const strategyServices = [
  {
    icon: Target,
    title: "Roadmap Tecnológico",
    description: "Planificación estratégica de tecnología a 1-5 años alineada con objetivos empresariales.",
    features: ["Análisis de situación actual", "Definición de objetivos", "Planificación por fases", "Quick wins identificados"]
  },
  {
    icon: BarChart3,
    title: "Análisis ROI",
    description: "Evaluación del retorno de inversión de iniciativas tecnológicas y priorización.",
    features: ["Cálculo de ROI", "Análisis coste-beneficio", "Priorización de proyectos", "Métricas de éxito"]
  },
  {
    icon: TrendingUp,
    title: "Alineación Negocio-IT",
    description: "Aseguramos que la tecnología sea un habilitador estratégico del negocio.",
    features: ["Business alignment", "Objetivos compartidos", "KPIs tecnológicos", "Gobierno IT"]
  },
  {
    icon: Zap,
    title: "Evaluación de Riesgos",
    description: "Identificación y mitigación de riesgos tecnológicos y de negocio.",
    features: ["Risk assessment", "Análisis de amenazas", "Plan de mitigación", "Continuidad de negocio"]
  }
];

const processPhases = [
  {
    phase: 1,
    title: "Diagnóstico Inicial",
    description: "Análisis profundo de la situación tecnológica actual y objetivos de negocio.",
    duration: "1-2 semanas",
    deliverables: ["Estado actual tecnología", "Análisis gaps", "Objetivos de negocio", "Stakeholder mapping"]
  },
  {
    phase: 2,
    title: "Definición Estratégica",
    description: "Diseño del roadmap tecnológico y priorización de iniciativas.",
    duration: "2-3 semanas",
    deliverables: ["Technology roadmap", "Iniciativas priorizadas", "Análisis ROI", "Quick wins plan"]
  },
  {
    phase: 3,
    title: "Plan de Implementación",
    description: "Detalle de fases, recursos, tiempos y presupuestos necesarios.",
    duration: "1-2 semanas",
    deliverables: ["Plan de ejecución", "Cronograma detallado", "Presupuesto estimado", "Recursos necesarios"]
  },
  {
    phase: 4,
    title: "Seguimiento y Ajuste",
    description: "Acompañamiento en la ejecución y ajustes según evolución del negocio.",
    duration: "Continuo",
    deliverables: ["Revisiones trimestrales", "Ajustes de roadmap", "Reporting de avances", "Optimización continua"]
  }
];

const benefits = [
  {
    title: "Visión Clara",
    description: "Roadmap tecnológico claro y compartido por toda la organización.",
    icon: Target
  },
  {
    title: "Inversión Optimizada",
    description: "Priorización de iniciativas con mayor retorno de inversión.",
    icon: DollarSign
  },
  {
    title: "Reducción de Riesgos",
    description: "Identificación temprana de amenazas y planes de mitigación.",
    icon: CheckCircle
  },
  {
    title: "Alineación Estratégica",
    description: "Tecnología alineada con objetivos de negocio y visión corporativa.",
    icon: TrendingUp
  }
];

const caseStudies = [
  {
    client: "Empresa Retail Nacional",
    industry: "Retail",
    challenge: "Transformación digital sin estrategia clara ni priorización de inversiones.",
    solution: "Roadmap tecnológico a 3 años con fases priorizadas y análisis ROI de cada iniciativa.",
    results: ["40% reducción costes IT", "Roadmap ejecutado al 85%", "ROI superior al proyectado"]
  },
  {
    client: "Startup Fintech",
    industry: "Fintech",
    challenge: "Crecimiento rápido sin planificación tecnológica escalable.",
    solution: "Estrategia tecnológica enfocada en escalabilidad y time-to-market.",
    results: ["3x capacidad de usuarios", "50% reducción time-to-market", "Arquitectura preparada para IPO"]
  },
  {
    client: "Grupo Industrial",
    industry: "Industria",
    challenge: "Múltiples sistemas legacy sin visión de modernización.",
    solution: "Plan de modernización progresiva con quick wins identificados.",
    results: ["Modernización completada", "Zero downtime", "30% ahorro operativo"]
  }
];

export default function EstrategiaTecnologicaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-blue-600 text-blue-700">
              <Target className="w-4 h-4 mr-2 inline" />
              Estrategia Tecnológica
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Definimos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Roadmap Tecnológico</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Transformamos tu visión de negocio en una estrategia tecnológica ejecutable.
              Planificación a largo plazo, análisis de ROI y alineación con objetivos empresariales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-lg bg-blue-600 hover:bg-blue-700">
                  Solicitar Consulta Estratégica
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-8 text-lg border-gray-300">
                  Ver Casos de Éxito
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">+50</div>
                <div className="text-sm text-gray-600">Roadmaps Definidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">85%</div>
                <div className="text-sm text-gray-600">Tasa Ejecución</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3-5 años</div>
                <div className="text-sm text-gray-600">Horizonte Planificación</div>
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
              Componentes de la <span className="text-blue-600">Estrategia Tecnológica</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enfoque integral para definir tu hoja de ruta tecnológica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategyServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
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
              Nuestro <span className="text-blue-600">Proceso</span> de Trabajo
            </h2>
          </div>

          <div className="space-y-8">
            {processPhases.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto lg:mx-0 text-xl font-bold mb-4">
                        {phase.phase}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center justify-center lg:justify-start">
                        <Clock className="h-4 w-4 mr-1" />
                        {phase.duration}
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Entregables:</h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Beneficios de una <span className="text-blue-600">Estrategia Clara</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Definir tu Estrategia Tecnológica?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a crear tu roadmap tecnológico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="h-12 px-8 text-lg bg-white text-blue-600 hover:bg-gray-100">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/consultoria-it">
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
                Especialistas en consultoría IT y transformación digital para empresas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Consultoría</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/consultoria/estrategia" className="hover:text-white transition-colors">Estrategia Tecnológica</Link></li>
                <li><Link href="/consultoria/arquitectura" className="hover:text-white transition-colors">Arquitectura Sistemas</Link></li>
                <li><Link href="/consultoria/cto-service" className="hover:text-white transition-colors">CTO as a Service</Link></li>
                <li><Link href="/consultoria/transformacion" className="hover:text-white transition-colors">Transformación Digital</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-web" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/desarrollo-movil" className="hover:text-white transition-colors">Desarrollo Móvil</Link></li>
                <li><Link href="/cloud-computing" className="hover:text-white transition-colors">Cloud Computing</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
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
