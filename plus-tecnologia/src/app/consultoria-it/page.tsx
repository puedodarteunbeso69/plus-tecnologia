import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Target,
  TrendingUp,
  Settings,
  Lightbulb,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Building2,
  Clock,
  Award,
  DollarSign,
  Briefcase,
  MapPin,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Consultoría IT y Transformación Digital | PLUS TECNOLOGIA - Estrategia Tecnológica",
  description: "Consultoría IT especializada: estrategia tecnológica, transformación digital, arquitectura de sistemas, migración cloud y asesoramiento CTO para empresas.",
  keywords: [
    "consultoria IT",
    "transformacion digital",
    "estrategia tecnologica",
    "arquitectura sistemas",
    "CTO as a Service",
    "migracion tecnologica",
    "consultoria cloud",
    "auditoria tecnologica"
  ],
  openGraph: {
    title: "Consultoría IT y Transformación Digital | PLUS TECNOLOGIA",
    description: "Asesoramiento estratégico en tecnología. Transformamos tu visión en roadmap tecnológico ejecutable.",
    images: ["/images/consultoria-it-og.jpg"],
    type: "website"
  }
};

const consultingServices = [
  {
    icon: Target,
    title: "Estrategia Tecnológica",
    description: "Definición de roadmap tecnológico alineado con objetivos de negocio y visión a largo plazo.",
    features: ["Technology Roadmap", "Business Alignment", "ROI Analysis", "Risk Assessment"],
    outcome: "Hoja de ruta tecnológica clara",
    duration: "4-8 semanas",
    price: "Desde 8.000€"
  },
  {
    icon: Building2,
    title: "Arquitectura de Sistemas",
    description: "Diseño de arquitecturas escalables, seguras y eficientes para aplicaciones empresariales.",
    features: ["System Architecture", "Scalability Design", "Security Architecture", "Integration Strategy"],
    outcome: "Arquitectura robusta y escalable",
    duration: "6-12 semanas",
    price: "Desde 12.000€"
  },
  {
    icon: TrendingUp,
    title: "Transformación Digital",
    description: "Acompañamiento completo en procesos de digitalización y modernización tecnológica.",
    features: ["Digital Strategy", "Process Automation", "Change Management", "Technology Adoption"],
    outcome: "Organización digitalizada",
    duration: "3-12 meses",
    price: "Desde 15.000€"
  },
  {
    icon: Users,
    title: "CTO as a Service",
    description: "Director de tecnología externo para empresas que necesitan liderazgo técnico estratégico.",
    features: ["Technical Leadership", "Team Management", "Strategic Planning", "Vendor Management"],
    outcome: "Liderazgo técnico experto",
    duration: "Servicio continuo",
    price: "Desde 5.000€/mes"
  },
  {
    icon: BarChart3,
    title: "Auditoría Tecnológica",
    description: "Evaluación completa de infraestructura, aplicaciones y procesos tecnológicos actuales.",
    features: ["Technology Assessment", "Gap Analysis", "Best Practices Review", "Improvement Plan"],
    outcome: "Plan de mejora detallado",
    duration: "2-6 semanas",
    price: "Desde 6.000€"
  },
  {
    icon: Lightbulb,
    title: "Innovación & R+D",
    description: "Identificación de oportunidades tecnológicas emergentes y estrategias de innovación.",
    features: ["Innovation Strategy", "Technology Scouting", "POC Development", "R&D Planning"],
    outcome: "Ventaja competitiva tecnológica",
    duration: "6-16 semanas",
    price: "Desde 10.000€"
  }
];

const industryExpertise = [
  {
    industry: "Fintech & Banking",
    description: "Regulación, seguridad y escalabilidad",
    specialties: ["PCI Compliance", "Open Banking", "Blockchain", "RegTech"]
  },
  {
    industry: "Healthcare & MedTech",
    description: "Interoperabilidad y cumplimiento normativo",
    specialties: ["HIPAA", "HL7/FHIR", "Telemedicine", "Medical Devices"]
  },
  {
    industry: "E-commerce & Retail",
    description: "Experiencia omnicanal y personalización",
    specialties: ["Omnichannel", "Personalization", "Supply Chain", "Analytics"]
  },
  {
    industry: "Manufacturing & Industry 4.0",
    description: "Automatización y IoT industrial",
    specialties: ["IoT", "Predictive Maintenance", "ERP Integration", "Automation"]
  },
  {
    industry: "Startups & Scale-ups",
    description: "Tecnología escalable y ágil",
    specialties: ["MVP Development", "Scalability", "Cloud Native", "DevOps"]
  },
  {
    industry: "Enterprise & Corporate",
    description: "Modernización de sistemas legacy",
    specialties: ["Legacy Migration", "Digital Transformation", "Enterprise Architecture", "Governance"]
  }
];

const consultingAreas = [
  {
    area: "Cloud Strategy",
    description: "Migración y optimización cloud",
    icon: Globe
  },
  {
    area: "Security & Compliance",
    description: "Ciberseguridad empresarial",
    icon: Award
  },
  {
    area: "DevOps & Automation",
    description: "Automatización de procesos",
    icon: Settings
  },
  {
    area: "Data & Analytics",
    description: "Estrategia de datos",
    icon: BarChart3
  },
  {
    area: "AI & Innovation",
    description: "Inteligencia artificial",
    icon: Lightbulb
  }
];

const successStories = [
  {
    client: "Banco Digital Emergente",
    challenge: "Arquitectura para 100k usuarios en 6 meses",
    solution: "Microservicios cloud-native + DevOps",
    results: ["500k usuarios escalados", "99.9% uptime", "50% reducción costos"],
    industry: "Fintech"
  },
  {
    client: "Cadena Retail Nacional",
    challenge: "Transformación digital omnicanal",
    solution: "Estrategia digital + modernización sistemas",
    results: ["300% ↑ ventas online", "Experiencia unificada", "Real-time inventory"],
    industry: "Retail"
  },
  {
    client: "Startup HealthTech",
    challenge: "Escalabilidad y cumplimiento GDPR",
    solution: "CTO as a Service + arquitectura HIPAA",
    results: ["Ronda Series A €10M", "Compliance certificada", "10x crecimiento usuarios"],
    industry: "Healthcare"
  }
];

const consultingProcess = [
  {
    phase: "01",
    title: "Discovery & Assessment",
    description: "Análisis profundo del estado actual, objetivos de negocio y desafíos tecnológicos.",
    duration: "1-2 semanas",
    deliverables: ["Current State Analysis", "Business Requirements", "Technology Assessment"]
  },
  {
    phase: "02",
    title: "Strategy Definition",
    description: "Definición de estrategia tecnológica, roadmap y plan de implementación.",
    duration: "2-4 semanas",
    deliverables: ["Technology Strategy", "Implementation Roadmap", "Resource Planning"]
  },
  {
    phase: "03",
    title: "Implementation Planning",
    description: "Planificación detallada de fases, recursos y gestión de riesgos.",
    duration: "1-2 semanas",
    deliverables: ["Detailed Plan", "Risk Management", "Success Metrics"]
  },
  {
    phase: "04",
    title: "Execution Support",
    description: "Acompañamiento durante la implementación con supervisión y ajustes.",
    duration: "Variable",
    deliverables: ["Implementation Support", "Progress Monitoring", "Course Correction"]
  },
  {
    phase: "05",
    title: "Optimization & Evolution",
    description: "Optimización continua y evolución de la estrategia tecnológica.",
    duration: "Continuo",
    deliverables: ["Performance Optimization", "Strategy Evolution", "Ongoing Support"]
  }
];

export default function ConsultoriaITPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Consultoría IT</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200">
                  <Users className="w-4 h-4 mr-2" />
                  Consultoría IT Estratégica
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Transformamos tu <span className="text-indigo-600">Visión</span> en Estrategia Tecnológica
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Consultoría IT especializada que convierte objetivos de negocio en roadmap tecnológico ejecutable. CTO as a Service, arquitectura de sistemas y transformación digital estratégica.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                    Consulta Estratégica Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    Ver Casos de Éxito
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">+15 años experiencia CTO</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-indigo-500" />
                  <span className="text-gray-600">300% ROI promedio</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Consultoría IT estratégica"
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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-indigo-600">Consultoría IT</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Asesoramiento estratégico que convierte tecnología en ventaja competitiva
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                    <div className="text-sm">
                      <span className="text-gray-500">Resultado:</span>
                      <p className="font-semibold text-green-600">{service.outcome}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duración:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precio:</span>
                      <span className="font-semibold text-indigo-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto bg-indigo-600 hover:bg-indigo-700">
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Experiencia por <span className="text-indigo-600">Industrias</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryExpertise.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{industry.industry}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {industry.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Áreas de <span className="text-indigo-600">Especialización</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {consultingAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <area.icon className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                  <CardTitle className="text-lg">{area.area}</CardTitle>
                  <CardDescription className="text-sm">{area.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Casos de <span className="text-indigo-600">Éxito</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{story.client}</CardTitle>
                    <Badge variant="outline">{story.industry}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Desafío:</span>
                      <p className="text-sm text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Solución:</span>
                      <p className="text-sm text-gray-600">{story.solution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Resultados:</span>
                      <ul className="space-y-1">
                        {story.results.map((result, i) => (
                          <li key={i} className="text-sm font-semibold text-green-600">• {result}</li>
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Nuestro <span className="text-indigo-600">Proceso</span> de Consultoría
            </h2>
          </div>

          <div className="space-y-8">
            {consultingProcess.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto lg:mx-0 text-xl font-bold mb-4">
                        {phase.phase}
                      </div>
                      <div className="text-sm text-gray-500">{phase.duration}</div>
                    </div>

                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Entregables:</h4>
                      <ul className="space-y-1">
                        {phase.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
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

      {/* CTO as a Service CTA */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <Briefcase className="h-8 w-8 text-indigo-300" />
              <h3 className="text-2xl font-bold">¿Necesitas un CTO?</h3>
            </div>
            <p className="text-indigo-100 text-lg">
              CTO as a Service: liderazgo técnico experto sin los costos de contratación permanente
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-400">
                Consulta CTO as a Service
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Convierte Tecnología en Ventaja Competitiva
            </h2>
            <p className="text-xl text-indigo-100">
              Solicita una consulta estratégica gratuita y descubre cómo acelerar tu transformación digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8">
                  Consulta Estratégica Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8">
                  Hablar con CTO
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Consultoría IT estratégica que transforma visiones de negocio en realidades tecnológicas exitosas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Consultoría IT</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/consultoria/estrategia" className="hover:text-white transition-colors">Estrategia Tecnológica</Link></li>
                <li><Link href="/consultoria/arquitectura" className="hover:text-white transition-colors">Arquitectura Sistemas</Link></li>
                <li><Link href="/consultoria/cto-service" className="hover:text-white transition-colors">CTO as a Service</Link></li>
                <li><Link href="/consultoria/transformacion" className="hover:text-white transition-colors">Transformación Digital</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Otros Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Software Empresarial</Link></li>
                <li><Link href="/cloud-computing" className="hover:text-white transition-colors">Cloud Computing</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/ia-big-data" className="hover:text-white transition-colors">IA & Big Data</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>consultoria@plustecologia.es</li>
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
