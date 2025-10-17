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
  Database,
  Cloud,
  Users,
  BarChart3,
  Lock,
  Smartphone
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo de Aplicaciones Web | Web Apps Personalizadas - PLUS TECNOLOGIA",
  description: "Desarrollo de aplicaciones web a medida: SaaS, plataformas web, dashboards, CRM, ERP. Tecnologías modernas: React, Next.js, Node.js. Escalables y seguras.",
  keywords: [
    "desarrollo aplicaciones web",
    "web apps personalizadas",
    "aplicaciones SaaS",
    "plataformas web",
    "desarrollo React",
    "Next.js desarrollo",
    "aplicaciones escalables",
    "web applications"
  ],
  openGraph: {
    title: "Desarrollo de Aplicaciones Web | PLUS TECNOLOGIA",
    description: "Desarrollo de aplicaciones web a medida con tecnologías modernas y arquitecturas escalables.",
    type: "website"
  }
};

const webAppTypes = [
  {
    icon: Cloud,
    title: "Aplicaciones SaaS",
    description: "Plataformas SaaS multi-tenant con facturación, gestión de usuarios y escalabilidad.",
    features: ["Multi-tenancy", "Subscription billing", "User management", "Auto-scaling"],
    examples: ["CRM personalizado", "Project management", "Accounting software"]
  },
  {
    icon: BarChart3,
    title: "Dashboards y BI",
    description: "Paneles de control interactivos para visualización de datos y analytics.",
    features: ["Real-time data", "Interactive charts", "Custom reports", "Data export"],
    examples: ["Business intelligence", "Analytics dashboards", "KPI monitoring"]
  },
  {
    icon: Database,
    title: "Plataformas de Gestión",
    description: "Sistemas de gestión empresarial personalizados según tus procesos.",
    features: ["Workflow automation", "Role-based access", "Audit logs", "Integration APIs"],
    examples: ["ERP customizado", "Inventory management", "Order management"]
  },
  {
    icon: Users,
    title: "Portales Web",
    description: "Portales de clientes, proveedores o empleados con autenticación segura.",
    features: ["SSO integration", "User profiles", "Document management", "Notifications"],
    examples: ["Customer portal", "Supplier portal", "Employee self-service"]
  }
];

const techStack = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"]
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Vercel", "Docker", "CI/CD", "Monitoring"]
  },
  {
    category: "APIs & Integration",
    technologies: ["REST APIs", "GraphQL", "Webhooks", "Third-party APIs"]
  }
];

const developmentProcess = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "Definición de requisitos, user stories, arquitectura y tecnologías.",
    duration: "1-2 semanas",
    deliverables: ["Requirements doc", "User stories", "Technical architecture", "Project plan"]
  },
  {
    step: 2,
    title: "Diseño UX/UI",
    description: "Wireframes, prototipos interactivos y diseño visual de la aplicación.",
    duration: "2-3 semanas",
    deliverables: ["Wireframes", "Interactive prototype", "UI design system", "Design specs"]
  },
  {
    step: 3,
    title: "Desarrollo Iterativo",
    description: "Desarrollo en sprints de 2 semanas con demos y feedback continuo.",
    duration: "8-16 semanas",
    deliverables: ["Working software", "Sprint demos", "Code reviews", "Testing"]
  },
  {
    step: 4,
    title: "Testing & Launch",
    description: "Testing completo, corrección de bugs, deployment y training.",
    duration: "2-3 semanas",
    deliverables: ["QA testing", "Bug fixes", "Production deployment", "User training"]
  }
];

const features = [
  {
    feature: "Responsive Design",
    description: "Adaptación perfecta a desktop, tablet y móvil"
  },
  {
    feature: "Performance Optimizado",
    description: "Carga rápida y experiencia fluida"
  },
  {
    feature: "Seguridad Avanzada",
    description: "Autenticación, autorización y encriptación"
  },
  {
    feature: "Escalabilidad",
    description: "Arquitectura preparada para crecer"
  },
  {
    feature: "APIs Integradas",
    description: "Conexión con sistemas externos y third-party"
  },
  {
    feature: "Real-time Updates",
    description: "Actualizaciones en tiempo real con WebSockets"
  }
];

const caseStudies = [
  {
    client: "Plataforma de Gestión Educativa",
    industry: "Educación",
    challenge: "Sistema legacy lento y difícil de usar para gestionar 10,000+ estudiantes.",
    solution: "Aplicación web moderna con React + Node.js: gestión de cursos, calificaciones, comunicación.",
    results: ["90% mejora en velocidad", "95% satisfacción usuarios", "Adoptada por 50+ escuelas"],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    client: "Dashboard Analytics B2B",
    industry: "Marketing",
    challenge: "Clientes necesitaban visibilidad en tiempo real de campañas y métricas.",
    solution: "Dashboard interactivo con visualizaciones avanzadas y reportes automáticos.",
    results: ["Real-time data refresh", "500+ clientes activos", "40% reducción churn"],
    tech: ["Next.js", "Chart.js", "API REST", "Redis"]
  }
];

export default function AplicacionesWebPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="border-blue-600 text-blue-700">
              <Code2 className="w-4 h-4 mr-2 inline" />
              Aplicaciones Web
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Desarrollo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Aplicaciones Web</span> a Medida
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Creamos aplicaciones web potentes, escalables y seguras. Desde SaaS hasta plataformas
              de gestión empresarial con tecnologías modernas y arquitecturas robustas.
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
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Web Apps Creadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">&lt;1s</div>
                <div className="text-sm text-gray-600">Load Time</div>
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
              Tipos de <span className="text-blue-600">Aplicaciones Web</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webAppTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <type.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Características:</span>
                      <div className="mt-2 space-y-2">
                        {type.features.map((feature, i) => (
                          <div key={i} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-gray-700">Ejemplos:</span>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {type.examples.map((example, i) => (
                          <Badge key={i} variant="secondary">{example}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Tecnologías <span className="text-blue-600">Modernas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((stack, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{stack.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Funcionalidades <span className="text-blue-600">Incluidas</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.feature}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Proceso de <span className="text-blue-600">Desarrollo</span>
            </h2>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto lg:mx-0 text-xl font-bold mb-4">
                        {phase.step}
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Proyectos <span className="text-blue-600">Exitosos</span>
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
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, i) => (
                      <Badge key={i} className="text-xs bg-blue-100 text-blue-700">{tech}</Badge>
                    ))}
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para Desarrollar tu Aplicación Web?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Cuéntanos tu idea y te ayudamos a convertirla en realidad.
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
                Ver Otros Servicios Web
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
                Desarrollo de aplicaciones web profesionales y escalables.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Desarrollo Web</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-web/aplicaciones" className="hover:text-white transition-colors">Aplicaciones Web</Link></li>
                <li><Link href="/desarrollo-web/corporativos" className="hover:text-white transition-colors">Sitios Corporativos</Link></li>
                <li><Link href="/desarrollo-web/ecommerce" className="hover:text-white transition-colors">E-commerce</Link></li>
                <li><Link href="/desarrollo-web/landing" className="hover:text-white transition-colors">Landing Pages</Link></li>
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
