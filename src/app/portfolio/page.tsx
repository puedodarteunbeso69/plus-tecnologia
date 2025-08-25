import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Globe,
  Shield,
  Building2,
  Cloud,
  Brain,
  TrendingUp,
  ArrowRight,
  Eye,
  Calendar,
  Users,
  Target,
  Code2,
  Star,
  ExternalLink
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Portfolio de Proyectos | PLUS TECNOLOGIA - Casos de Éxito en Desarrollo",
  description: "Descubre nuestros casos de éxito en desarrollo de apps móviles, web, ciberseguridad y soluciones empresariales. Portfolio completo de proyectos realizados.",
  keywords: [
    "portfolio tecnologia",
    "casos de exito",
    "proyectos desarrollo",
    "apps moviles portfolio",
    "desarrollo web casos",
    "ciberseguridad proyectos",
    "plus tecnologia portfolio"
  ],
};

const portfolioCategories = [
  { id: "all", name: "Todos los Proyectos", icon: Target, count: 25 },
  { id: "mobile", name: "Apps Móviles", icon: Smartphone, count: 8 },
  { id: "web", name: "Desarrollo Web", icon: Globe, count: 7 },
  { id: "enterprise", name: "Software Empresarial", icon: Building2, count: 4 },
  { id: "security", name: "Ciberseguridad", icon: Shield, count: 3 },
  { id: "cloud", name: "Cloud Computing", icon: Cloud, count: 2 },
  { id: "ai", name: "IA & Big Data", icon: Brain, count: 1 }
];

const portfolioProjects = [
  {
    id: 1,
    title: "FinanceApp Pro",
    category: "mobile",
    client: "TechStart Solutions",
    industry: "Fintech",
    description: "Aplicación móvil para gestión financiera personal con IA para análisis predictivo de gastos y recomendaciones de ahorro.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Machine Learning"],
    duration: "4 meses",
    team: "5 desarrolladores",
    results: [
      "50,000+ descargas en 3 meses",
      "4.8 estrellas en App Store",
      "Reducción 40% en tiempo de gestión financiera",
      "Incremento 25% en ahorro de usuarios"
    ],
    features: [
      "Análisis predictivo con IA",
      "Sincronización bancaria segura",
      "Notificaciones inteligentes",
      "Dashboard personalizado",
      "Exportación de reportes"
    ],
    testimonial: {
      text: "PLUS TECNOLOGIA superó nuestras expectativas. La app es intuitiva, segura y ha revolucionado cómo nuestros usuarios gestionan sus finanzas.",
      author: "Ana García, CTO TechStart Solutions"
    },
    url: "https://financeapp.demo",
    status: "Publicada"
  },
  {
    id: 2,
    title: "E-commerce Mediterráneo",
    category: "web",
    client: "Industrias Mediterráneo",
    industry: "Manufactura",
    description: "Plataforma e-commerce B2B con catálogo de 10,000+ productos industriales, sistema de cotizaciones y integración ERP.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Shopify Plus", "Stripe", "SAP Integration", "Redis"],
    duration: "6 meses",
    team: "6 desarrolladores",
    results: [
      "200% incremento en ventas online",
      "35% reducción en tiempo de cotización",
      "10,000+ productos catalogados",
      "95% satisfacción del cliente"
    ],
    features: [
      "Catálogo inteligente con filtros",
      "Sistema de cotizaciones automático",
      "Integración ERP en tiempo real",
      "Portal de clientes personalizado",
      "Analytics avanzados"
    ],
    testimonial: {
      text: "La plataforma ha transformado nuestro negocio. Ahora nuestros clientes pueden cotizar y comprar 24/7. Las ventas online se han triplicado.",
      author: "Carlos Mendoza, Director General"
    },
    url: "https://mediterráneo-shop.demo",
    status: "Activa"
  },
  {
    id: 3,
    title: "SecureBank Audit",
    category: "security",
    client: "Banco Seguro Digital",
    industry: "Banca",
    description: "Auditoría completa de ciberseguridad con pentesting, análisis de vulnerabilidades y implementación de medidas de protección.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    technologies: ["Metasploit", "Burp Suite", "OWASP ZAP", "Nessus", "Custom Scripts"],
    duration: "3 meses",
    team: "4 especialistas",
    results: [
      "25 vulnerabilidades críticas detectadas",
      "100% de vulnerabilidades remediadas",
      "Certificación ISO 27001 obtenida",
      "0 incidentes de seguridad post-auditoría"
    ],
    features: [
      "Pentesting completo de infraestructura",
      "Análisis de código fuente",
      "Pruebas de ingeniería social",
      "Plan de remediación detallado",
      "Capacitación del equipo interno"
    ],
    testimonial: {
      text: "La auditoría de PLUS TECNOLOGIA fue exhaustiva y profesional. Nos ayudaron a identificar y resolver vulnerabilidades que podrían haber sido catastróficas.",
      author: "Miguel Torres, CISO"
    },
    url: "#confidencial",
    status: "Completado"
  },
  {
    id: 4,
    title: "HealthBot IA",
    category: "ai",
    client: "HealthTech Innovations",
    industry: "Healthcare",
    description: "Chatbot inteligente con IA para primera consulta médica, triaje de síntomas y programación de citas automática.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenAI GPT", "FastAPI", "PostgreSQL"],
    duration: "5 meses",
    team: "4 desarrolladores",
    results: [
      "85% precisión en triaje médico",
      "60% reducción en llamadas telefónicas",
      "2,000+ consultas procesadas/día",
      "95% satisfacción de pacientes"
    ],
    features: [
      "Procesamiento de lenguaje natural",
      "Triaje inteligente de síntomas",
      "Integración con agenda médica",
      "Historial clínico automático",
      "Escalado a médico humano"
    ],
    testimonial: {
      text: "El chatbot ha revolucionado nuestra atención al paciente. La IA es increíblemente precisa y ha mejorado significativamente la experiencia del usuario.",
      author: "Carmen López, Fundadora"
    },
    url: "https://healthbot.demo",
    status: "Activa"
  },
  {
    id: 5,
    title: "LogisticPro Cloud",
    category: "cloud",
    client: "LogisticPro",
    industry: "Logística",
    description: "Migración completa a AWS de sistema de gestión logística con microservicios, auto-scaling y monitoreo 24/7.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CloudWatch"],
    duration: "4 meses",
    team: "5 ingenieros",
    results: [
      "300% mejora en performance",
      "40% reducción en costos IT",
      "99.9% uptime garantizado",
      "Escalabilidad automática implementada"
    ],
    features: [
      "Arquitectura de microservicios",
      "Auto-scaling automático",
      "Backup y recovery automatizado",
      "Monitoreo en tiempo real",
      "CI/CD pipeline completo"
    ],
    testimonial: {
      text: "La migración fue perfecta. Cero downtime y un rendimiento espectacular. PLUS TECNOLOGIA demostró un dominio excepcional de AWS.",
      author: "Roberto Sánchez, Operations Director"
    },
    url: "https://logisticpro-cloud.demo",
    status: "Activa"
  },
  {
    id: 6,
    title: "RetailPlus ERP",
    category: "enterprise",
    client: "E-commerce Plus",
    industry: "Retail",
    description: "Sistema ERP personalizado para gestión integral de inventario, ventas, CRM y analytics para cadena de retail.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Elasticsearch"],
    duration: "8 meses",
    team: "7 desarrolladores",
    results: [
      "50% reducción en tiempo de inventario",
      "30% incremento en eficiencia operativa",
      "Integración de 15 tiendas físicas",
      "Dashboard ejecutivo en tiempo real"
    ],
    features: [
      "Gestión de inventario multi-tienda",
      "CRM integrado",
      "Analytics predictivos",
      "Facturación electrónica",
      "Gestión de proveedores"
    ],
    testimonial: {
      text: "El ERP ha centralizado todas nuestras operaciones. La visibilidad que tenemos ahora del negocio es invaluable para la toma de decisiones.",
      author: "Laura Ruiz, Marketing Manager"
    },
    url: "#privado",
    status: "Activo"
  }
];

export default function PortfolioPage() {
  const getProjectsByCategory = (categoryId: string) => {
    if (categoryId === "all") return portfolioProjects;
    return portfolioProjects.filter(project => project.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Portfolio</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              <Eye className="w-4 h-4 mr-2" />
              Portfolio de Proyectos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Nuestros <span className="text-blue-600">Casos de Éxito</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Descubre cómo hemos ayudado a empresas de diferentes sectores a transformar sus ideas en soluciones tecnológicas exitosas que impulsan el crecimiento.
            </p>

            <div className="grid md:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <p className="text-gray-600">Proyectos Completados</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">98%</div>
                <p className="text-gray-600">Tasa de Éxito</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">25+</div>
                <p className="text-gray-600">Industrias Atendidas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">4.9</div>
                <p className="text-gray-600">Calificación Promedio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioCategories.map((category) => (
              <button
                key={category.id}
                className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
              >
                <category.icon className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                <span className="text-gray-700 group-hover:text-blue-600 font-medium">{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {portfolioProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-blue-600 text-white">
                        {portfolioCategories.find(cat => cat.id === project.category)?.name}
                      </Badge>
                      <Badge variant="outline" className="bg-white/90 text-gray-700">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {project.client} • {project.industry}
                      </CardDescription>
                    </div>
                    {project.url !== "#confidencial" && project.url !== "#privado" && (
                      <Link href={project.url} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>

                  {/* Project Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {project.team}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Resultados Clave:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.results.slice(0, 4).map((result, index) => (
                        <div key={index} className="flex items-start text-sm">
                          <Star className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 italic text-sm mb-2">"{project.testimonial.text}"</p>
                    <p className="text-gray-600 text-xs font-medium">— {project.testimonial.author}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex space-x-3">
                    <Link href="/contacto">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        Ver Caso Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/contacto">
                      <Button variant="outline" size="sm">
                        Proyecto Similar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para Crear tu Propio Caso de Éxito?
            </h2>
            <p className="text-xl text-blue-100">
              Cada proyecto es único. Cuéntanos tu idea y te mostraremos cómo convertirla en realidad.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  Iniciar mi Proyecto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
                  Agendar Consulta
                </Button>
              </Link>
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
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Transformamos ideas en soluciones tecnológicas exitosas que impulsan el crecimiento empresarial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-movil" className="hover:text-white transition-colors">Desarrollo Móvil</Link></li>
                <li><Link href="/desarrollo-web" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Sistemas Empresariales</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Portfolio</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Casos de Éxito</Link></li>
                <li><Link href="/testimonios" className="hover:text-white transition-colors">Testimonios</Link></li>
                <li><Link href="/tecnologias" className="hover:text-white transition-colors">Tecnologías</Link></li>
                <li><Link href="/industrias" className="hover:text-white transition-colors">Industrias</Link></li>
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
