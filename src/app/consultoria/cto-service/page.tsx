import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Globe,
  Briefcase,
  Code2,
  Shield,
  Zap,
  BarChart3,
  Settings,
  Award
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "CTO as a Service | Director de Tecnología Externo - PLUS TECNOLOGIA",
  description: "Servicio de CTO externo para startups y empresas. Liderazgo técnico estratégico, gestión de equipos de desarrollo, decisiones tecnológicas y ejecución de roadmap.",
  keywords: [
    "CTO as a service",
    "CTO externo",
    "director tecnologia",
    "liderazgo tecnico",
    "CTO startup",
    "gestion equipos desarrollo",
    "estrategia tecnologica",
    "fractional CTO"
  ],
  openGraph: {
    title: "CTO as a Service | PLUS TECNOLOGIA",
    description: "Director de tecnología externo para empresas que necesitan liderazgo técnico estratégico.",
    type: "website"
  }
};

const ctoServices = [
  {
    icon: Target,
    title: "Liderazgo Técnico Estratégico",
    description: "Visión y dirección tecnológica alineada con objetivos de negocio.",
    features: ["Technology roadmap", "Strategic planning", "Budget management", "Vendor selection"]
  },
  {
    icon: Users,
    title: "Gestión de Equipos",
    description: "Construcción, liderazgo y desarrollo de equipos técnicos de alto rendimiento.",
    features: ["Team building", "Hiring & onboarding", "Performance management", "Career development"]
  },
  {
    icon: Code2,
    title: "Decisiones Tecnológicas",
    description: "Selección de tecnologías, arquitecturas y herramientas óptimas.",
    features: ["Tech stack selection", "Architecture decisions", "Tool evaluation", "Best practices"]
  },
  {
    icon: BarChart3,
    title: "Gestión de Proyectos",
    description: "Supervisión de ejecución, plazos, calidad y entrega de proyectos.",
    features: ["Project oversight", "Agile methodology", "Quality assurance", "Delivery management"]
  }
];

const idealFor = [
  {
    type: "Startups en Crecimiento",
    description: "Empresas que necesitan liderazgo técnico senior pero no pueden costear un CTO full-time.",
    challenges: ["Budget limitado", "Crecimiento rápido", "Decisiones técnicas críticas"],
    benefits: ["Expertise senior a fracción del coste", "Flexible según crecimiento", "Red de contactos y partners"]
  },
  {
    type: "Scale-ups",
    description: "Empresas en fase de escalado que necesitan estructurar sus equipos y procesos.",
    challenges: ["Escalado de equipos", "Procesos técnicos", "Arquitectura escalable"],
    benefits: ["Experiencia en escalado", "Mejores prácticas implementadas", "Team building efectivo"]
  },
  {
    type: "Empresas en Transformación",
    description: "Organizaciones tradicionales que necesitan modernizar su tecnología.",
    challenges: ["Legacy systems", "Modernización", "Change management"],
    benefits: ["Experiencia en transformación", "Gestión del cambio", "Roadmap de modernización"]
  }
];

const responsibilities = [
  {
    area: "Estrategia",
    tasks: ["Definir visión tecnológica", "Crear technology roadmap", "Alinear IT con negocio", "Gestionar presupuesto IT"]
  },
  {
    area: "Equipo",
    tasks: ["Reclutar talento técnico", "Desarrollar cultura de ingeniería", "Mentoría y coaching", "Gestión de performance"]
  },
  {
    area: "Arquitectura",
    tasks: ["Decisiones arquitectónicas", "Code reviews estratégicos", "Estándares y mejores prácticas", "Deuda técnica"]
  },
  {
    area: "Operaciones",
    tasks: ["Procesos de desarrollo", "CI/CD y DevOps", "Seguridad y compliance", "Métricas y KPIs"]
  }
];

const pricingPlans = [
  {
    name: "Part-Time",
    commitment: "2-3 días/mes",
    price: "Desde 3.000€/mes",
    ideal: "Startups early-stage",
    includes: ["Sesiones estratégicas mensuales", "Disponibilidad async", "Code review selectivo", "Hiring support"]
  },
  {
    name: "Fractional",
    commitment: "8-10 días/mes",
    price: "Desde 6.000€/mes",
    ideal: "Scale-ups y empresas medias",
    includes: ["Presencia regular en empresa", "Gestión activa de equipo", "Decisiones arquitectónicas", "Vendor management"],
    popular: true
  },
  {
    name: "Full-Service",
    commitment: "15-20 días/mes",
    price: "Desde 10.000€/mes",
    ideal: "Empresas en transformación",
    includes: ["Liderazgo técnico completo", "Gestión día a día", "Todas las responsabilidades CTO", "On-call availability"]
  }
];

const caseStudies = [
  {
    client: "Startup Fintech",
    industry: "Finanzas",
    situation: "Serie A sin liderazgo técnico senior. Equipo de 5 developers sin dirección clara.",
    solution: "CTO fractional 10 días/mes: roadmap tecnológico, hiring de tech leads, arquitectura escalable.",
    results: ["Equipo escalado a 15 developers", "Product-market fit alcanzado", "Serie B exitosa €8M"]
  },
  {
    client: "E-commerce B2B",
    industry: "Retail",
    situation: "Empresa tradicional necesitando digitalización. Sin expertise técnico interno.",
    solution: "CTO full-service: estrategia digital, construcción de equipo, modernización de sistemas.",
    results: ["Equipo técnico de 0 a 20", "Plataforma B2B lanzada", "€2M ARR primer año"]
  }
];

export default function CTOServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-purple-600 text-purple-700">
              <Briefcase className="w-4 h-4 mr-2 inline" />
              CTO as a Service
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Director de Tecnología</span> Cuando lo Necesitas
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Liderazgo técnico estratégico sin el coste de un CTO full-time. Experiencia senior,
              decisiones acertadas y ejecución efectiva desde el primer día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-lg bg-purple-600 hover:bg-purple-700">
                  Agendar Consulta Gratuita
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
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-sm text-gray-600">Empresas Asesoradas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Años Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">€50M+</div>
                <div className="text-sm text-gray-600">Funding Levantado</div>
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
              ¿Qué hace un <span className="text-purple-600">CTO as a Service</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ctoServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-purple-600 mb-4" />
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

      {/* Ideal For Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Ideal Para <span className="text-purple-600">Tu Empresa</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {idealFor.map((scenario, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{scenario.type}</CardTitle>
                  <CardDescription>{scenario.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Desafíos:</span>
                    <ul className="mt-2 space-y-1">
                      {scenario.challenges.map((challenge, i) => (
                        <li key={i} className="text-sm text-gray-600">• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Beneficios:</span>
                    <ul className="mt-2 space-y-1">
                      {scenario.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-green-600 font-medium">✓ {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Áreas de <span className="text-purple-600">Responsabilidad</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responsibilities.map((resp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">{resp.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Planes <span className="text-purple-600">Flexibles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adaptamos nuestro servicio a tus necesidades y presupuesto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`hover:shadow-xl transition-shadow ${plan.popular ? 'border-2 border-purple-600' : ''}`}>
                {plan.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 text-sm font-semibold rounded-t-lg">
                    MÁS POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-lg">{plan.commitment}</CardDescription>
                  <div className="text-3xl font-bold text-purple-600 mt-4">{plan.price}</div>
                  <Badge variant="outline" className="mt-2">{plan.ideal}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.includes.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              Casos de <span className="text-purple-600">Éxito</span>
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
                    <span className="text-sm font-semibold text-gray-700">Situación:</span>
                    <p className="text-sm text-gray-600">{study.situation}</p>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesitas Liderazgo Técnico Estratégico?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Agenda una consulta gratuita de 30 minutos para evaluar tus necesidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="h-12 px-8 text-lg bg-white text-purple-600 hover:bg-gray-100">
                Agendar Consulta Gratuita
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
                <Globe className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Liderazgo técnico estratégico para startups y empresas en crecimiento.
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
