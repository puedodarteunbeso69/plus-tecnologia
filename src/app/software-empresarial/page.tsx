import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { ServiceReviews } from "@/components/ServiceReviews";
import { softwareEmpresarialReviews, aggregateRatings } from "@/data/reviewsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Database,
  Settings,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Shield,
  Zap,
  FileText,
  Workflow,
  Globe,
  Code2,
  Award,
  Clock,
  Target
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Software Empresarial a Medida | PLUS TECNOLOGIA - ERP, CRM y Sistemas de Gestión",
  description: "Desarrollo de software empresarial personalizado: ERP, CRM, sistemas de gestión, automatización de procesos y business intelligence. Soluciones escalables para empresas.",
  keywords: [
    "software empresarial",
    "desarrollo ERP",
    "sistemas CRM",
    "gestión empresarial",
    "automatización procesos",
    "business intelligence",
    "software a medida",
    "sistemas integración"
  ],
  openGraph: {
    title: "Software Empresarial a Medida | PLUS TECNOLOGIA",
    description: "Desarrollamos software empresarial personalizado para optimizar tus procesos de negocio. ERP, CRM, BI y automatización.",
    images: ["/images/software-empresarial-og.jpg"],
    type: "website"
  }
};

const softwareServices = [
  {
    icon: Building2,
    title: "ERP Personalizado",
    description: "Sistemas de planificación de recursos empresariales adaptados a tu modelo de negocio específico.",
    features: ["Gestión Financiera", "Control de Inventario", "Recursos Humanos", "Reportes Avanzados"],
    complexity: "Alta",
    timeline: "6-12 meses",
    price: "Desde 25.000€"
  },
  {
    icon: Users,
    title: "CRM Avanzado",
    description: "Plataformas de gestión de relaciones con clientes que mejoran ventas y fidelización.",
    features: ["Lead Management", "Pipeline de Ventas", "Automatización Marketing", "Analytics"],
    complexity: "Media",
    timeline: "3-6 meses",
    price: "Desde 15.000€"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Soluciones de análisis de datos y dashboards ejecutivos para toma de decisiones informadas.",
    features: ["Dashboards Interactivos", "KPIs en Tiempo Real", "Data Mining", "Reportes Predictivos"],
    complexity: "Alta",
    timeline: "4-8 meses",
    price: "Desde 20.000€"
  },
  {
    icon: Workflow,
    title: "Automatización RPA",
    description: "Robots de automatización de procesos para eliminar tareas manuales repetitivas.",
    features: ["Process Mining", "Bot Development", "Workflow Automation", "Integration APIs"],
    complexity: "Media",
    timeline: "2-4 meses",
    price: "Desde 10.000€"
  },
  {
    icon: Database,
    title: "Gestión de Datos",
    description: "Sistemas de gestión, migración e integración de datos empresariales complejos.",
    features: ["Data Warehousing", "ETL Processes", "Data Integration", "Master Data Management"],
    complexity: "Alta",
    timeline: "3-6 meses",
    price: "Desde 18.000€"
  },
  {
    icon: Globe,
    title: "Portales Corporativos",
    description: "Plataformas web internas para empleados, clientes y proveedores con funcionalidades avanzadas.",
    features: ["Intranet Empresarial", "Portal de Clientes", "Self-Service", "Colaboración"],
    complexity: "Media",
    timeline: "3-5 meses",
    price: "Desde 12.000€"
  }
];

const technologies = [
  {
    category: "Backend",
    techs: ["Java Spring", "C# .NET", "Python Django", "Node.js", "PHP Laravel"]
  },
  {
    category: "Frontend",
    techs: ["React", "Angular", "Vue.js", "Next.js", "TypeScript"]
  },
  {
    category: "Bases de Datos",
    techs: ["PostgreSQL", "SQL Server", "Oracle", "MySQL", "MongoDB"]
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    category: "BI & Analytics",
    techs: ["Power BI", "Tableau", "Qlik", "Apache Spark", "Elasticsearch"]
  }
];

const successStories = [
  {
    client: "Industrias Mediterráneo",
    industry: "Manufactura",
    solution: "ERP Integral + BI",
    results: "40% reducción costos operativos",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop"
  },
  {
    client: "TechStart Solutions",
    industry: "Tecnología",
    solution: "CRM + Automatización",
    results: "300% incremento en conversiones",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop"
  },
  {
    client: "LogisticPro",
    industry: "Logística",
    solution: "Sistema de Gestión",
    results: "60% mejora en eficiencia",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop"
  }
];

export default function SoftwareEmpresarialPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Software Empresarial</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                  <Building2 className="w-4 h-4 mr-2" />
                  Software Empresarial
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-blue-600">Software a Medida</span> para tu Empresa
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Desarrollamos soluciones de software empresarial personalizadas: ERP, CRM, Business Intelligence y automatización de procesos que optimizan tu operación y aumentan la productividad.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Link href="/contacto">
                  <Button className="h-12 px-6 text-base bg-blue-600 hover:bg-blue-700">
                    Consulta Personalizada
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="default" className="h-12 px-6 text-base" variant="outline">
                    Ver Casos de Éxito
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">+50 Sistemas Implementados</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-600">ROI Promedio 250%</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Desarrollo de software empresarial"
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
              Soluciones de <span className="text-blue-600">Software Empresarial</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desarrollamos sistemas que se adaptan perfectamente a tus procesos de negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {softwareServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                      <span className="font-semibold text-blue-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Nuestro <span className="text-blue-600">Proceso de Desarrollo</span>
            </h2>
            <p className="text-xl text-gray-600">
              Metodología ágil probada para entregar software empresarial de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "Análisis de Requerimientos",
                description: "Estudiamos tus procesos actuales y definimos especificaciones técnicas detalladas.",
                icon: FileText
              },
              {
                step: "02",
                title: "Diseño de Arquitectura",
                description: "Creamos la arquitectura técnica y diseños de interfaz adaptados a tu negocio.",
                icon: Settings
              },
              {
                step: "03",
                title: "Desarrollo Ágil",
                description: "Programación por sprints con entregas parciales y feedback continuo.",
                icon: Code2
              },
              {
                step: "04",
                title: "Testing & QA",
                description: "Pruebas exhaustivas de funcionalidad, rendimiento y seguridad.",
                icon: Shield
              },
              {
                step: "05",
                title: "Implementación",
                description: "Despliegue, migración de datos, capacitación y soporte continuo.",
                icon: Zap
              }
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {process.step}
                </div>
                <process.icon className="h-6 w-6 mx-auto text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="text-blue-600">Tecnologías</span> que Dominamos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {technologies.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.techs.map((tech, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Casos de <span className="text-blue-600">Éxito</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.client}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{story.client}</CardTitle>
                  <CardDescription>{story.industry}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <strong>Solución:</strong> {story.solution}
                    </p>
                    <p className="text-sm font-semibold text-green-600">
                      {story.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ServiceReviews
        serviceName="Software Empresarial"
        reviews={softwareEmpresarialReviews}
        aggregateRating={aggregateRatings.softwareEmpresarial}
      />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para Optimizar tu Empresa?
            </h2>
            <p className="text-xl text-blue-100">
              Solicita una consulta gratuita y descubre cómo nuestro software puede transformar tu negocio.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  Consulta Personalizada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+34915493616">
                <Button className="h-12 px-6 text-base bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  915 493 616
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
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en desarrollo de software empresarial a medida que optimiza procesos y aumenta la productividad.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Software Empresarial</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/software/erp" className="hover:text-white transition-colors">ERP Personalizado</Link></li>
                <li><Link href="/software/crm" className="hover:text-white transition-colors">CRM Avanzado</Link></li>
                <li><Link href="/software/bi" className="hover:text-white transition-colors">Business Intelligence</Link></li>
                <li><Link href="/software/rpa" className="hover:text-white transition-colors">Automatización RPA</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil" className="hover:text-white transition-colors">Desarrollo Móvil</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/cloud-computing" className="hover:text-white transition-colors">Cloud Computing</Link></li>
                <li><Link href="/ia-big-data" className="hover:text-white transition-colors">IA & Big Data</Link></li>
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
