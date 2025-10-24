import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  TrendingUp,
  Monitor,
  Database,
  Settings,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Globe,
  Server,
  Clock,
  Target,
  Award,
  Users,
  DollarSign,
  AlertTriangle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Optimización y Performance Web | PLUS TECNOLOGIA - Acelera tu Sitio Web y Aplicaciones",
  description: "Servicios de optimización y performance: mejora velocidad web, optimización Core Web Vitals, escalabilidad, monitoreo y análisis de rendimiento aplicaciones.",
  keywords: [
    "optimización web",
    "performance web",
    "core web vitals",
    "velocidad sitio web",
    "optimización aplicaciones",
    "escalabilidad web",
    "monitoreo performance",
    "análisis rendimiento"
  ],
  openGraph: {
    title: "Optimización y Performance Web | PLUS TECNOLOGIA",
    description: "Especialistas en optimización de performance. Acelera tu sitio web y aplicaciones para mejorar conversiones y experiencia de usuario.",
    images: ["/images/optimizacion-performance-og.jpg"],
    type: "website"
  }
};

const optimizationServices = [
  {
    icon: Zap,
    title: "Optimización Core Web Vitals",
    description: "Mejora de métricas fundamentales de Google para posicionamiento SEO y experiencia de usuario.",
    features: ["LCP Optimization", "FID Improvement", "CLS Reduction", "INP Enhancement"],
    impact: "Mejora SEO y conversiones",
    duration: "2-4 semanas",
    price: "Desde 3.000€"
  },
  {
    icon: TrendingUp,
    title: "Performance Audit & Analysis",
    description: "Análisis completo de rendimiento con herramientas profesionales y recomendaciones detalladas.",
    features: ["Lighthouse Audit", "WebPageTest", "GTmetrix Analysis", "Performance Report"],
    impact: "Identificación cuellos de botella",
    duration: "1-2 semanas",
    price: "Desde 1.500€"
  },
  {
    icon: Database,
    title: "Optimización de Base de Datos",
    description: "Mejora del rendimiento de consultas, índices optimizados y estrategias de caché avanzadas.",
    features: ["Query Optimization", "Index Tuning", "Caching Strategy", "Connection Pooling"],
    impact: "50% reducción tiempo respuesta",
    duration: "3-6 semanas",
    price: "Desde 4.000€"
  },
  {
    icon: Server,
    title: "Escalabilidad & Infrastructure",
    description: "Arquitectura escalable para manejar picos de tráfico y crecimiento sostenido del negocio.",
    features: ["Auto-scaling", "Load Balancing", "CDN Implementation", "Microservices"],
    impact: "Soporte 10x más usuarios",
    duration: "4-8 semanas",
    price: "Desde 6.000€"
  },
  {
    icon: Monitor,
    title: "Monitoreo & Alertas",
    description: "Sistemas de monitoreo 24/7 con alertas proactivas y dashboards de rendimiento en tiempo real.",
    features: ["Real-time Monitoring", "Performance Alerts", "Custom Dashboards", "SLA Tracking"],
    impact: "99.9% uptime garantizado",
    duration: "2-3 semanas",
    price: "Desde 2.500€"
  },
  {
    icon: Globe,
    title: "Optimización Frontend",
    description: "Mejora del rendimiento frontend con técnicas avanzadas de carga y renderizado optimizado.",
    features: ["Code Splitting", "Lazy Loading", "Image Optimization", "Bundle Analysis"],
    impact: "70% mejora tiempo carga",
    duration: "3-5 semanas",
    price: "Desde 3.500€"
  }
];

const performanceMetrics = [
  {
    metric: "3 seg",
    description: "Tiempo de carga objetivo",
    icon: Clock,
    color: "text-green-600"
  },
  {
    metric: "98+",
    description: "Google PageSpeed Score",
    icon: TrendingUp,
    color: "text-blue-600"
  },
  {
    metric: "50%",
    description: "Mejora conversiones promedio",
    icon: Target,
    color: "text-purple-600"
  },
  {
    metric: "99.9%",
    description: "Uptime garantizado",
    icon: Server,
    color: "text-orange-600"
  }
];

const optimizationTools = [
  {
    category: "Analysis",
    tools: ["Google Lighthouse", "WebPageTest", "GTmetrix", "Pingdom", "New Relic"]
  },
  {
    category: "Monitoring",
    tools: ["DataDog", "Pingdom", "UptimeRobot", "StatusPage", "Grafana"]
  },
  {
    category: "CDN & Caching",
    tools: ["Cloudflare", "AWS CloudFront", "Redis", "Memcached", "Varnish"]
  },
  {
    category: "Database",
    tools: ["MySQL Tuner", "PostgreSQL", "MongoDB", "ElasticSearch", "InfluxDB"]
  },
  {
    category: "Infrastructure",
    tools: ["Docker", "Kubernetes", "AWS", "Azure", "Google Cloud"]
  }
];

const beforeAfter = [
  {
    client: "E-commerce Fashion",
    before: "8.5s tiempo carga",
    after: "2.1s tiempo carga",
    improvement: "75% mejora",
    conversion: "320% ↑ conversiones"
  },
  {
    client: "Portal Inmobiliario",
    before: "Score 45/100",
    after: "Score 98/100",
    improvement: "118% mejora",
    conversion: "180% ↑ engagement"
  },
  {
    client: "SaaS Platform",
    before: "500 usuarios max",
    after: "50,000 usuarios",
    improvement: "100x escalabilidad",
    conversion: "99.9% uptime"
  }
];

const optimizationProcess = [
  {
    phase: "01",
    title: "Performance Audit",
    description: "Análisis exhaustivo del estado actual con herramientas profesionales.",
    deliverables: ["Performance Report", "Bottleneck Analysis", "Optimization Plan"]
  },
  {
    phase: "02",
    title: "Strategy Definition",
    description: "Definición de estrategia y priorización de optimizaciones por impacto.",
    deliverables: ["Optimization Strategy", "Timeline", "Success Metrics"]
  },
  {
    phase: "03",
    title: "Implementation",
    description: "Implementación de mejoras con testing continuo y medición de resultados.",
    deliverables: ["Code Optimization", "Infrastructure Setup", "Performance Testing"]
  },
  {
    phase: "04",
    title: "Monitoring Setup",
    description: "Configuración de monitoreo continuo y alertas proactivas.",
    deliverables: ["Monitoring Dashboard", "Alert Configuration", "Performance Reports"]
  },
  {
    phase: "05",
    title: "Optimization & Support",
    description: "Optimización continua basada en datos y soporte técnico especializado.",
    deliverables: ["Continuous Optimization", "Technical Support", "Monthly Reports"]
  }
];

export default function OptimizacionPerformancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Optimización & Performance</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                  <Zap className="w-4 h-4 mr-2" />
                  Optimización & Performance
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Acelera tu <span className="text-yellow-600">Sitio Web</span> y Aplicaciones
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Especialistas en optimización de performance web y aplicaciones. Mejoramos Core Web Vitals, velocidad de carga, escalabilidad y experiencia de usuario para maximizar conversiones.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700">
                    Audit Gratuito de Performance
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    Ver Casos de Mejora
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">98+ PageSpeed Score</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-600">50% Mejora Promedio</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Optimización de performance web"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-yellow-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Resultados que <span className="text-yellow-300">Impactan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="text-center space-y-4">
                <metric.icon className={`h-12 w-12 mx-auto ${metric.color}`} />
                <div className={`text-4xl font-bold ${metric.color}`}>{metric.metric}</div>
                <p className="text-yellow-100">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-yellow-600">Optimización</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mejoramos cada aspecto del rendimiento de tu sitio web y aplicaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                      <span className="text-gray-500">Impacto:</span>
                      <p className="font-semibold text-green-600">{service.impact}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duración:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precio:</span>
                      <span className="font-semibold text-yellow-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto bg-yellow-600 hover:bg-yellow-700">
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Transformaciones <span className="text-yellow-600">Reales</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfter.map((case_item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{case_item.client}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">ANTES</div>
                      <div className="text-lg font-bold text-red-600">{case_item.before}</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">DESPUÉS</div>
                      <div className="text-lg font-bold text-green-600">{case_item.after}</div>
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-yellow-600">{case_item.improvement}</div>
                    <div className="text-sm font-semibold text-green-600">{case_item.conversion}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-yellow-600">Herramientas</span> Profesionales
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {optimizationTools.map((tool, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-center">{tool.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tool.tools.map((item, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{item}</span>
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proceso de <span className="text-yellow-600">Optimización</span>
            </h2>
          </div>

          <div className="space-y-8">
            {optimizationProcess.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center mx-auto lg:mx-0 text-xl font-bold mb-4">
                        {phase.phase}
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

      {/* Emergency CTA */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-yellow-400 animate-pulse" />
              <h3 className="text-2xl font-bold">¿Tu Sitio es Muy Lento?</h3>
            </div>
            <p className="text-red-100 text-lg">
              Cada segundo de demora cuesta ventas. Actúa ahora.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-yellow-500 text-gray-900 hover:bg-yellow-400 font-bold">
                AUDIT GRATUITO URGENTE
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Acelera tu Negocio Online
            </h2>
            <p className="text-xl text-yellow-100">
              Solicita un audit gratuito y descubre cómo optimizar el rendimiento de tu sitio web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-8">
                  Audit Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-yellow-600 text-lg px-8">
                  Hablar con Experto
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
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en optimización de performance que aceleran sitios web y mejoran conversiones.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Optimización</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/optimizacion/core-web-vitals" className="hover:text-white transition-colors">Core Web Vitals</Link></li>
                <li><Link href="/optimizacion/velocidad" className="hover:text-white transition-colors">Velocidad Web</Link></li>
                <li><Link href="/optimizacion/base-datos" className="hover:text-white transition-colors">Base de Datos</Link></li>
                <li><Link href="/optimizacion/escalabilidad" className="hover:text-white transition-colors">Escalabilidad</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Otros Servicios</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/desarrollo-web" className="hover:text-white transition-colors">Desarrollo Web</Link></li>
                <li><Link href="/software-empresarial" className="hover:text-white transition-colors">Software Empresarial</Link></li>
                <li><Link href="/ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/consultoria-it" className="hover:text-white transition-colors">Consultoría IT</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>performance@plustecologia.es</li>
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
