import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Layers,
  Database,
  Cloud,
  Lock,
  TrendingUp,
  Code2,
  Network
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Arquitectura de Sistemas | Diseño de Software Escalable - PLUS TECNOLOGIA",
  description: "Diseño de arquitecturas de software escalables, seguras y eficientes. Arquitectura cloud, microservicios, sistemas distribuidos y modernización de aplicaciones legacy.",
  keywords: [
    "arquitectura software",
    "diseño sistemas",
    "arquitectura escalable",
    "microservicios",
    "arquitectura cloud",
    "sistemas distribuidos",
    "arquitectura empresarial",
    "modernización legacy"
  ],
  openGraph: {
    title: "Arquitectura de Sistemas | PLUS TECNOLOGIA",
    description: "Diseño de arquitecturas escalables, seguras y eficientes para aplicaciones empresariales.",
    type: "website"
  }
};

const architectureServices = [
  {
    icon: Layers,
    title: "Arquitectura de Microservicios",
    description: "Diseño de sistemas modulares, escalables y mantenibles basados en microservicios.",
    features: ["Service decomposition", "API Gateway design", "Event-driven architecture", "Service mesh"]
  },
  {
    icon: Cloud,
    title: "Arquitectura Cloud-Native",
    description: "Diseño optimizado para cloud: escalabilidad automática, alta disponibilidad y costes optimizados.",
    features: ["Cloud-first design", "Auto-scaling", "Multi-region deployment", "Serverless architecture"]
  },
  {
    icon: Database,
    title: "Arquitectura de Datos",
    description: "Diseño de flujos de datos, almacenamiento distribuido y estrategias de persistencia.",
    features: ["Data modeling", "Database sharding", "CQRS pattern", "Data lake architecture"]
  },
  {
    icon: Shield,
    title: "Arquitectura de Seguridad",
    description: "Diseño con seguridad desde el inicio: zero-trust, defensa en profundidad y compliance.",
    features: ["Zero-trust architecture", "Security by design", "Encryption at rest/transit", "Compliance frameworks"]
  }
];

const architecturePatterns = [
  {
    pattern: "Event-Driven Architecture",
    description: "Comunicación asíncrona basada en eventos para sistemas desacoplados y escalables.",
    useCases: ["Real-time processing", "IoT systems", "Microservices communication"]
  },
  {
    pattern: "CQRS + Event Sourcing",
    description: "Separación de lecturas y escrituras con historial completo de eventos.",
    useCases: ["Auditoría completa", "Sistemas financieros", "Business analytics"]
  },
  {
    pattern: "API Gateway Pattern",
    description: "Punto de entrada unificado para microservicios con autenticación, rate limiting y routing.",
    useCases: ["Microservices architecture", "Mobile backends", "Third-party integrations"]
  },
  {
    pattern: "Strangler Fig Pattern",
    description: "Modernización gradual de sistemas legacy sin reescritura completa.",
    useCases: ["Legacy modernization", "Risk mitigation", "Continuous delivery"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Análisis de Requisitos",
    description: "Entendimiento profundo de requisitos funcionales, no funcionales y restricciones del negocio.",
    duration: "1-2 semanas",
    deliverables: ["Documento de requisitos", "Análisis de restricciones", "Quality attributes", "Stakeholder needs"]
  },
  {
    step: 2,
    title: "Diseño de Alto Nivel",
    description: "Definición de componentes principales, patrones arquitectónicos y estrategia de integración.",
    duration: "2-4 semanas",
    deliverables: ["Arquitectura diagrams", "Technology stack", "Integration strategy", "Deployment architecture"]
  },
  {
    step: 3,
    title: "Diseño Detallado",
    description: "Especificación detallada de cada componente, APIs, modelos de datos y protocolos.",
    duration: "2-4 semanas",
    deliverables: ["Component specifications", "API contracts", "Data models", "Security design"]
  },
  {
    step: 4,
    title: "Validación y POC",
    description: "Validación de decisiones arquitectónicas críticas mediante pruebas de concepto.",
    duration: "2-3 semanas",
    deliverables: ["POC implementation", "Performance tests", "Risk validation", "Architecture decision records"]
  }
];

const caseStudies = [
  {
    client: "Plataforma E-commerce",
    industry: "Retail",
    challenge: "Sistema monolítico con problemas de escalabilidad y despliegues lentos.",
    solution: "Migración a arquitectura de microservicios con Kubernetes y event-driven communication.",
    results: ["10x mejora escalabilidad", "Deploy time: 2h → 15min", "99.99% uptime"]
  },
  {
    client: "Fintech Internacional",
    industry: "Finanzas",
    challenge: "Necesidad de arquitectura multi-región con consistencia y baja latencia.",
    solution: "Arquitectura distribuida con CQRS, event sourcing y replicación multi-master.",
    results: ["<50ms latency global", "Zero data loss", "Compliance certificado"]
  },
  {
    client: "Startup SaaS",
    industry: "SaaS",
    challenge: "Arquitectura inicial no escalaba para crecimiento 100x proyectado.",
    solution: "Re-arquitectura cloud-native con auto-scaling y arquitectura serverless.",
    results: ["100x capacidad usuarios", "70% reducción costes", "Escalado automático"]
  }
];

export default function ArquitecturaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-indigo-600 text-indigo-700">
              <Building2 className="w-4 h-4 mr-2 inline" />
              Arquitectura de Sistemas
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Diseño de Arquitecturas <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Escalables y Robustas</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Arquitecturas de software diseñadas para crecer con tu negocio. Escalabilidad, seguridad,
              rendimiento y mantenibilidad desde el primer día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-8 text-lg bg-indigo-600 hover:bg-indigo-700">
                  Consulta de Arquitectura
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-8 text-lg border-gray-300">
                  Ver Proyectos
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">+40</div>
                <div className="text-sm text-gray-600">Arquitecturas Diseñadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">10x</div>
                <div className="text-sm text-gray-600">Mejora Escalabilidad</div>
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
              Servicios de <span className="text-indigo-600">Arquitectura</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diseño completo de arquitecturas para diferentes necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architectureServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
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

      {/* Architecture Patterns */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Patrones <span className="text-indigo-600">Arquitectónicos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplicamos los mejores patrones de diseño según tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architecturePatterns.map((pattern, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{pattern.pattern}</CardTitle>
                  <CardDescription>{pattern.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <span className="text-sm font-semibold text-gray-700">Casos de uso:</span>
                    {pattern.useCases.map((useCase, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-indigo-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{useCase}</span>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Proceso de <span className="text-indigo-600">Diseño</span>
            </h2>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto lg:mx-0 text-xl font-bold mb-4">
                        {step.step}
                      </div>
                      <div className="text-sm text-gray-500">{step.duration}</div>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Entregables:</h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable, i) => (
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

      {/* Case Studies */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Proyectos <span className="text-indigo-600">Exitosos</span>
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Necesitas una Arquitectura Escalable?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
            Diseñamos la arquitectura perfecta para tus necesidades de negocio y objetivos de crecimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto">
              <Button className="h-12 px-8 text-lg bg-white text-indigo-600 hover:bg-gray-100">
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
                <Globe className="h-6 w-6 text-indigo-500" />
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400 text-sm">
                Especialistas en diseño de arquitecturas de software escalables y robustas.
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
