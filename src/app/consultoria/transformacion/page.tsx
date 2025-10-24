import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
  Settings,
  BarChart3,
  Lightbulb,
  Target,
  Award,
  Rocket
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Transformación Digital | Modernización Empresarial - PLUS TECNOLOGIA",
  description: "Acompañamiento completo en transformación digital: digitalización de procesos, automatización, modernización de sistemas legacy, change management y cultura digital.",
  keywords: [
    "transformacion digital",
    "digitalizacion empresas",
    "modernizacion tecnologica",
    "automatizacion procesos",
    "change management",
    "cultura digital",
    "transformacion empresarial",
    "innovacion digital"
  ],
  openGraph: {
    title: "Transformación Digital | PLUS TECNOLOGIA",
    description: "Acompañamiento completo en procesos de digitalización y modernización tecnológica.",
    type: "website"
  }
};

const transformationPillars = [
  {
    icon: Settings,
    title: "Procesos Digitales",
    description: "Digitalización y automatización de procesos manuales y repetitivos.",
    areas: ["Process mining", "RPA implementation", "Workflow automation", "Digital forms"]
  },
  {
    icon: Users,
    title: "Cultura y Personas",
    description: "Change management, formación y adopción de mentalidad digital.",
    areas: ["Change management", "Digital skills training", "Cultural transformation", "Leadership coaching"]
  },
  {
    icon: Zap,
    title: "Tecnología",
    description: "Modernización de sistemas legacy y adopción de tecnologías cloud.",
    areas: ["Legacy modernization", "Cloud migration", "API-first architecture", "Integration platforms"]
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Toma de decisiones basada en datos con analytics y BI.",
    areas: ["Data strategy", "BI implementation", "Predictive analytics", "Real-time dashboards"]
  }
];

const transformationPhases = [
  {
    phase: 1,
    title: "Diagnóstico Digital",
    description: "Evaluación del nivel de madurez digital actual y definición de visión objetivo.",
    duration: "2-4 semanas",
    activities: ["Assessment de madurez", "Gap analysis", "Benchmarking sector", "Quick wins identification"],
    outcome: "Digital maturity report"
  },
  {
    phase: 2,
    title: "Estrategia y Roadmap",
    description: "Diseño de la estrategia de transformación y hoja de ruta priorizada.",
    duration: "3-6 semanas",
    activities: ["Digital strategy design", "Roadmap creation", "ROI analysis", "Change plan"],
    outcome: "Transformation roadmap"
  },
  {
    phase: 3,
    title: "Implementación",
    description: "Ejecución por fases con quick wins iniciales y proyectos estratégicos.",
    duration: "6-18 meses",
    activities: ["Quick wins delivery", "Technology deployment", "Process redesign", "Training programs"],
    outcome: "Digital capabilities"
  },
  {
    phase: 4,
    title: "Optimización Continua",
    description: "Mejora continua, medición de resultados y ajustes según evolución.",
    duration: "Continuo",
    activities: ["KPI monitoring", "Continuous improvement", "Innovation pipeline", "Scaling successes"],
    outcome: "Digital-first organization"
  }
];

const benefits = [
  {
    metric: "40%",
    description: "Reducción de costes operativos promedio",
    icon: TrendingUp
  },
  {
    metric: "3x",
    description: "Mejora en velocidad de procesos",
    icon: Zap
  },
  {
    metric: "60%",
    description: "Aumento en satisfacción de clientes",
    icon: Award
  },
  {
    metric: "85%",
    description: "Adopción de nuevas herramientas digitales",
    icon: Users
  }
];

const caseStudies = [
  {
    client: "Empresa Manufacturera",
    industry: "Industria",
    challenge: "Procesos manuales, falta de visibilidad y comunicación entre departamentos.",
    solution: "Transformación completa: ERP cloud, automatización de workflows, BI dashboards.",
    results: ["50% reducción tiempo procesos", "Visibilidad real-time", "€500K ahorro anual"],
    duration: "12 meses"
  },
  {
    client: "Cadena de Retail",
    industry: "Retail",
    challenge: "Experiencia de cliente fragmentada, datos dispersos en silos.",
    solution: "Customer 360 platform, omnicanalidad, analytics predictivo.",
    results: ["35% aumento ventas online", "NPS +25 puntos", "Experiencia unificada"],
    duration: "18 meses"
  },
  {
    client: "Compañía de Seguros",
    industry: "Seguros",
    challenge: "Sistemas legacy de 20 años, procesos en papel, alta ineficiencia.",
    solution: "Modernización progresiva, digitalización de procesos, portal self-service.",
    results: ["80% procesos digitalizados", "70% reducción paperwork", "Time-to-market -60%"],
    duration: "24 meses"
  }
];

const services = [
  {
    title: "Digital Assessment",
    description: "Evaluación completa de madurez digital y definición de objetivos.",
    price: "Desde 5.000€"
  },
  {
    title: "Roadmap de Transformación",
    description: "Estrategia detallada y hoja de ruta priorizada de transformación.",
    price: "Desde 12.000€"
  },
  {
    title: "Implementación Completa",
    description: "Acompañamiento end-to-end en todo el proceso de transformación.",
    price: "Desde 50.000€"
  },
  {
    title: "Change Management",
    description: "Gestión del cambio, formación y adopción de cultura digital.",
    price: "Desde 15.000€"
  }
];

export default function TransformacionDigitalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-emerald-600 text-emerald-700">
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              Transformación Digital
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transformamos tu Empresa para la <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Era Digital</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Acompañamiento completo en tu proceso de transformación digital: de la estrategia a
              la ejecución, con foco en procesos, tecnología, personas y cultura.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-lg bg-emerald-600 hover:bg-emerald-700">
                  Iniciar Transformación
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-8 text-lg border-gray-300">
                  Ver Transformaciones
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4 sm:gap-8 pt-8 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-600">{benefit.metric}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Los 4 Pilares de la <span className="text-emerald-600">Transformación Digital</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enfoque integral para una transformación exitosa y sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transformationPillars.map((pillar, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <pillar.icon className="h-12 w-12 text-emerald-600 mb-4" />
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {pillar.areas.map((area, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Proceso de <span className="text-emerald-600">Transformación</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodología probada en decenas de empresas
            </p>
          </div>

          <div className="space-y-8">
            {transformationPhases.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-5 gap-6 items-start">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto lg:mx-0 text-xl font-bold mb-4">
                        {phase.phase}
                      </div>
                      <div className="text-sm text-gray-500">{phase.duration}</div>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                        {phase.outcome}
                      </Badge>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-2">Actividades:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{activity}</span>
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

      {/* Case Studies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Transformaciones <span className="text-emerald-600">Exitosas</span>
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
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    {study.duration}
                  </Badge>
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

      {/* Services & Pricing */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-emerald-600">Transformación</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-emerald-600">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Lista tu Empresa para la Transformación Digital?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-100">
            Agenda una sesión estratégica gratuita para evaluar tu madurez digital y diseñar tu roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="h-12 px-8 text-lg bg-white text-emerald-600 hover:bg-gray-100">
                Sesión Estratégica Gratuita
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
                <Globe className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Expertos en transformación digital y modernización empresarial.
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
