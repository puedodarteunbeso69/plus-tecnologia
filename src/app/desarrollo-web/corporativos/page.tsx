import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Navigation } from "@/components/Navigation";
import {
  Building2,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Search,
  Monitor,
  Award,
  Star,
  Clock
} from "lucide-react";

export const metadata = {
  title: "Sitios Web Corporativos | PLUS TECNOLOGIA",
  description:
    "Diseño y desarrollo de webs corporativas modernas: performance, SEO y accesibilidad para empresas.",
};

const corporateServices = [
  {
    icon: Building2,
    title: "Sitios Corporativos Premium",
    description: "Websites institucionales que proyectan autoridad, confianza y profesionalidad para grandes empresas.",
    features: ["Diseño Premium", "CMS Avanzado", "Multiidioma", "Integración CRM"],
    price: "Desde 8.000€",
    timeline: "6-10 semanas"
  },
  {
    icon: Users,
    title: "Portales de Empleados",
    description: "Intranets corporativas y portales internos para mejorar la comunicación y productividad del equipo.",
    features: ["Portal Interno", "Gestión Usuarios", "Documentos", "Comunicación"],
    price: "Desde 12.000€",
    timeline: "8-12 semanas"
  },
  {
    icon: TrendingUp,
    title: "Sitios de Inversores",
    description: "Páginas especializadas para relación con inversores, informes financieros y comunicación corporativa.",
    features: ["Informes Financieros", "Centro Prensa", "Eventos", "Compliance"],
    price: "Desde 15.000€",
    timeline: "10-14 semanas"
  }
];

const corporateFeatures = [
  {
    icon: Shield,
    title: "Seguridad Empresarial",
    description: "Cumplimiento GDPR, SSL, auditorías de seguridad y protección avanzada de datos corporativos."
  },
  {
    icon: Search,
    title: "SEO Corporativo",
    description: "Estrategia SEO integral para posicionar tu marca como líder del sector y atraer leads cualificados."
  },
  {
    icon: Monitor,
    title: "Diseño Responsive Premium",
    description: "Experiencia de usuario optimizada en todos los dispositivos con diseño exclusivo para tu marca."
  },
  {
    icon: Zap,
    title: "Performance Empresarial",
    description: "Optimización avanzada para cargas ultra-rápidas y Core Web Vitals perfectos."
  }
];

const pricingPlans = [
  {
    name: "Corporativo Esencial",
    price: "8.000€",
    description: "Sitio web corporativo completo para empresas establecidas",
    features: [
      "Hasta 15 páginas",
      "Diseño responsive premium",
      "CMS WordPress/Sanity",
      "SEO básico incluido",
      "Formularios de contacto",
      "3 meses soporte gratuito"
    ]
  },
  {
    name: "Corporativo Avanzado",
    price: "15.000€",
    description: "Solución completa para grandes corporaciones",
    features: [
      "Páginas ilimitadas",
      "Portal empleados básico",
      "Multiidioma (3 idiomas)",
      "SEO avanzado + Analytics",
      "Integración CRM/ERP",
      "6 meses soporte premium"
    ],
    popular: true
  },
  {
    name: "Enterprise Custom",
    price: "Consultar",
    description: "Desarrollo a medida para multinacionales",
    features: [
      "Arquitectura personalizada",
      "Integraciones complejas",
      "Compliance sectorial",
      "Soporte 24/7",
      "SLA garantizado",
      "Equipo dedicado"
    ]
  }
];

export default function CorporativosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/desarrollo-web" className="text-gray-500 hover:text-blue-600">Desarrollo Web</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Corporativos</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <Badge className="bg-green-100 text-green-700 border-green-200">
              <Building2 className="w-4 h-4 mr-2" /> Web Corporativa
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Presencia Digital <span className="text-green-600">Corporativa</span>
            </h1>
            <p className="text-lg text-gray-600">
              Desarrollamos sitios web corporativos que reflejan la excelencia de tu empresa, posicionan tu marca como líder del sector y generan confianza en clientes e inversores.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-green-600 hover:bg-green-700">
                  Consulta Estratégica Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="default" className="h-12 px-6 text-base" variant="outline">Ver Portfolio Corporativo</Button>
              </Link>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-600">100+ Empresas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">98% Satisfacción</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=900&h=600&fit=crop&auto=format&q=85"
              alt="Oficina corporativa moderna"
              width={900}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Soluciones <span className="text-green-600">Corporativas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde sitios institucionales hasta portales complejos para grandes empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {corporateServices.map((service, index) => (
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
                      Más Información
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
              ¿Por qué Elegirnos para tu <span className="text-green-600">Web Corporativa</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {corporateFeatures.map((feature, index) => (
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

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Planes <span className="text-green-600">Corporativos</span>
            </h2>
            <p className="text-xl text-gray-600">Soluciones adaptadas al tamaño y necesidades de tu empresa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-green-500 shadow-xl scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white">Más Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-green-600">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contacto">
                    <Button className={`w-full mt-6 ${plan.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Nuestro <span className="text-green-600">Proceso</span> Corporativo
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Análisis Estratégico",
                description: "Auditoría de marca, competencia y definición de objetivos corporativos."
              },
              {
                step: "02",
                title: "Arquitectura Corporativa",
                description: "Diseño de la estructura, navegación y experiencia de usuario premium."
              },
              {
                step: "03",
                title: "Desarrollo Premium",
                description: "Programación con tecnologías enterprise y estándares corporativos."
              },
              {
                step: "04",
                title: "Optimización Avanzada",
                description: "SEO corporativo, performance y testing exhaustivo."
              },
              {
                step: "05",
                title: "Lanzamiento y Soporte",
                description: "Deploy seguro, formación del equipo y soporte continuado."
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
              ¿Listo para Elevar tu Presencia Corporativa?
            </h2>
            <p className="text-xl text-green-100">
              Solicita una consulta estratégica gratuita y descubre cómo podemos posicionar tu empresa como líder del sector.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
                  Consulta Estratégica Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-green-600 text-lg px-8">
                  Ver Portfolio Corporativo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
