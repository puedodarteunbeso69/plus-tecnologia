import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { ServiceReviews } from "@/components/ServiceReviews";
import { ciberseguridadReviews, aggregateRatings } from "@/data/reviewsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Eye,
  Bug,
  Lock,
  AlertTriangle,
  FileCheck,
  Monitor,
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Users,
  TrendingUp,
  Award,
  Clock,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ciberseguridad Empresarial | PLUS TECNOLOGIA - Pentesting, Auditorías y Protección",
  description: "Servicios integrales de ciberseguridad: pentesting ético, auditorías de seguridad, cumplimiento GDPR, monitoreo 24/7 y protección contra amenazas avanzadas.",
  keywords: [
    "ciberseguridad empresarial",
    "pentesting ético",
    "auditoría seguridad",
    "cumplimiento GDPR",
    "protección datos",
    "monitoreo seguridad",
    "consultoría ciberseguridad",
    "hacking ético"
  ],
  openGraph: {
    title: "Ciberseguridad Empresarial | PLUS TECNOLOGIA",
    description: "Protegemos tu empresa contra amenazas cibernéticas con servicios profesionales de pentesting, auditorías y monitoreo 24/7.",
    images: ["/images/ciberseguridad-og.jpg"],
    type: "website"
  }
};

const securityServices = [
  {
    icon: Bug,
    title: "Pentesting Ético",
    description: "Pruebas de penetración profesionales para identificar vulnerabilidades antes que los atacantes.",
    features: ["Web Application Testing", "Network Penetration", "Mobile App Security", "Social Engineering"],
    riskLevel: "Crítico",
    duration: "2-4 semanas",
    price: "Desde 8.000€"
  },
  {
    icon: FileCheck,
    title: "Auditorías de Seguridad",
    description: "Evaluaciones completas de infraestructura y cumplimiento normativo (ISO 27001, GDPR).",
    features: ["ISO 27001 Assessment", "GDPR Compliance", "Risk Assessment", "Security Gap Analysis"],
    riskLevel: "Alto",
    duration: "3-6 semanas",
    price: "Desde 6.000€"
  },
  {
    icon: Monitor,
    title: "Monitoreo 24/7",
    description: "Vigilancia continua de amenazas con SOC especializado y respuesta ante incidentes.",
    features: ["SIEM Monitoring", "Threat Detection", "Incident Response", "Forensic Analysis"],
    riskLevel: "Crítico",
    duration: "Servicio continuo",
    price: "Desde 2.500€/mes"
  },
  {
    icon: Lock,
    title: "Protección GDPR",
    description: "Implementación y mantenimiento del cumplimiento del Reglamento General de Protección de Datos.",
    features: ["Data Mapping", "Privacy Impact Assessment", "DPO Services", "Staff Training"],
    riskLevel: "Legal",
    duration: "2-3 meses",
    price: "Desde 5.000€"
  },
  {
    icon: Shield,
    title: "Hardening de Sistemas",
    description: "Fortalecimiento de servidores, bases de datos y aplicaciones contra ataques.",
    features: ["Server Hardening", "Database Security", "Network Segmentation", "Access Control"],
    riskLevel: "Alto",
    duration: "1-2 meses",
    price: "Desde 4.000€"
  },
  {
    icon: Users,
    title: "Formación en Seguridad",
    description: "Programas de concienciación y entrenamiento para empleados en ciberseguridad.",
    features: ["Security Awareness", "Phishing Simulation", "Security Training", "Policy Development"],
    riskLevel: "Medio",
    duration: "Programa anual",
    price: "Desde 1.500€"
  }
];

const threatStatistics = [
  {
    stat: "95%",
    description: "De las brechas involucran error humano",
    icon: Users,
    color: "text-red-600"
  },
  {
    stat: "11 seg",
    description: "Frecuencia de ataques ransomware",
    icon: AlertTriangle,
    color: "text-orange-600"
  },
  {
    stat: "€4.35M",
    description: "Costo promedio de una brecha",
    icon: TrendingUp,
    color: "text-purple-600"
  },
  {
    stat: "277 días",
    description: "Tiempo promedio para detectar",
    icon: Clock,
    color: "text-blue-600"
  }
];

const securityFrameworks = [
  {
    name: "ISO 27001",
    description: "Gestión de Seguridad de la Información",
    icon: Shield
  },
  {
    name: "NIST",
    description: "Framework de Ciberseguridad",
    icon: Target
  },
  {
    name: "GDPR",
    description: "Protección de Datos Personales",
    icon: Lock
  },
  {
    name: "OWASP",
    description: "Seguridad en Aplicaciones Web",
    icon: Globe
  },
  {
    name: "SOC 2",
    description: "Controles de Seguridad",
    icon: FileCheck
  }
];

const successCases = [
  {
    client: "Banco Seguro Digital",
    challenge: "25 vulnerabilidades críticas detectadas",
    solution: "Pentesting + Remediación",
    result: "100% vulnerabilidades resueltas",
    timeline: "3 meses"
  },
  {
    client: "E-commerce Plus",
    challenge: "Cumplimiento GDPR requerido",
    solution: "Auditoría + Implementación",
    result: "Certificación ISO 27001",
    timeline: "6 meses"
  },
  {
    client: "TechStart Solutions",
    challenge: "Ataques de phishing frecuentes",
    solution: "Formación + Monitoreo",
    result: "90% reducción incidentes",
    timeline: "12 meses"
  }
];

export default function CiberseguridadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Ciberseguridad</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-100 text-red-700 border-red-200">
                  <Shield className="w-4 h-4 mr-2" />
                  Ciberseguridad Empresarial
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Protege tu Empresa de las <span className="text-red-600">Amenazas Cibernéticas</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Servicios integrales de ciberseguridad: pentesting ético, auditorías de seguridad, cumplimiento normativo y protección avanzada contra amenazas digitales.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Link href="/contacto">
                  <Button className="h-12 px-6 text-base bg-red-600 hover:bg-red-700">
                    Auditoría de Seguridad
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button size="default" className="h-12 px-6 text-base" variant="outline">
                    Evaluación Gratuita
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Certificados CISSP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-red-500" />
                  <span className="text-gray-600">+200 Auditorías</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
                alt="Ciberseguridad empresarial"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Threat Statistics */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              El Panorama Actual de <span className="text-red-400">Amenazas</span>
            </h2>
            <p className="text-xl text-gray-300">
              Estadísticas que demuestran la importancia crítica de la ciberseguridad
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {threatStatistics.map((threat, index) => (
              <div key={index} className="text-center space-y-4">
                <threat.icon className={`h-12 w-12 mx-auto ${threat.color}`} />
                <div className={`text-4xl font-bold ${threat.color}`}>{threat.stat}</div>
                <p className="text-gray-300">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-red-600">Ciberseguridad</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protección integral contra amenazas avanzadas con metodologías probadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {securityServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                      <span className="text-gray-500">Nivel de Riesgo:</span>
                      <Badge variant={service.riskLevel === "Crítico" ? "destructive" : "secondary"}>
                        {service.riskLevel}
                      </Badge>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duración:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precio:</span>
                      <span className="font-semibold text-red-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto bg-red-600 hover:bg-red-700">
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Frameworks */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="text-red-600">Frameworks</span> y Estándares
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con los principales estándares internacionales de seguridad
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {securityFrameworks.map((framework, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <framework.icon className="h-12 w-12 mx-auto text-red-600 mb-2" />
                  <CardTitle className="text-lg">{framework.name}</CardTitle>
                  <CardDescription className="text-sm">{framework.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Casos de <span className="text-red-600">Éxito</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {successCases.map((case_item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{case_item.client}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Desafío:</span>
                      <p className="text-sm text-gray-600">{case_item.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Solución:</span>
                      <p className="text-sm text-gray-600">{case_item.solution}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Resultado:</span>
                      <p className="text-sm font-semibold text-green-600">{case_item.result}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Tiempo:</span>
                      <p className="text-sm text-gray-600">{case_item.timeline}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-yellow-400 animate-pulse" />
              <h3 className="text-2xl font-bold">¿Sospechas un Ataque en Curso?</h3>
            </div>
            <p className="text-red-100 text-lg">
              Servicio de respuesta a incidentes disponible 24/7
            </p>
            <a href="tel:+34915493616">
              <Button className="h-12 px-6 text-base bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-bold">
                EMERGENCIA: 915493616
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ServiceReviews
        serviceName="Ciberseguridad"
        reviews={ciberseguridadReviews}
        aggregateRating={aggregateRatings.ciberseguridad}
      />

      {/* Main CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              No Esperes a ser Víctima de un Ataque
            </h2>
            <p className="text-xl text-red-100">
              Solicita una evaluación gratuita de seguridad y protege tu empresa hoy mismo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
                  Auditoría Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+34915493616">
                <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-red-600 text-lg px-8">
                  Consulta de Emergencia
                </Button>
              </a>
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
                <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en ciberseguridad empresarial y protección de infraestructuras críticas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios Seguridad</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/ciberseguridad/pentesting" className="hover:text-white transition-colors">Pentesting Ético</Link></li>
                <li><Link href="/ciberseguridad/auditorias" className="hover:text-white transition-colors">Auditorías</Link></li>
                <li><Link href="/ciberseguridad/gdpr" className="hover:text-white transition-colors">Cumplimiento GDPR</Link></li>
                <li><Link href="/ciberseguridad/monitoreo" className="hover:text-white transition-colors">Monitoreo 24/7</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog?category=ciberseguridad" className="hover:text-white transition-colors">Blog Seguridad</Link></li>
                <li><Link href="/whitepapers" className="hover:text-white transition-colors">Whitepapers</Link></li>
                <li><Link href="/alertas" className="hover:text-white transition-colors">Alertas de Seguridad</Link></li>
                <li><Link href="/formacion" className="hover:text-white transition-colors">Formación</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>security@plustecologia.es</li>
                <li>915493616</li>
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
