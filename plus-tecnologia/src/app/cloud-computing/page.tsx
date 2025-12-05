import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cloud,
  Server,
  Database,
  Shield,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Globe,
  Monitor,
  Settings,
  Layers,
  Award,
  Users,
  DollarSign,
  Clock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Cloud Computing y Migración a la Nube | PLUS TECNOLOGIA - AWS, Azure, Google Cloud",
  description: "Servicios de cloud computing: migración a la nube, arquitectura cloud nativa, AWS, Azure, Google Cloud. Infraestructura escalable y optimización de costos.",
  keywords: [
    "cloud computing",
    "migración nube",
    "AWS servicios",
    "Microsoft Azure",
    "Google Cloud",
    "infraestructura cloud",
    "arquitectura nube",
    "optimización costos cloud"
  ],
  openGraph: {
    title: "Cloud Computing y Migración a la Nube | PLUS TECNOLOGIA",
    description: "Expertos en cloud computing. Migramos tu infraestructura a AWS, Azure o Google Cloud con máxima eficiencia y seguridad.",
    images: ["/images/cloud-computing-og.jpg"],
    type: "website"
  }
};

const cloudServices = [
  {
    icon: Cloud,
    title: "Migración a la Nube",
    description: "Transición completa de tu infraestructura on-premise a cloud con cero downtime.",
    features: ["Assessment & Planning", "Data Migration", "App Modernization", "Cut-over Strategy"],
    complexity: "Alta",
    duration: "3-8 meses",
    price: "Desde 15.000€"
  },
  {
    icon: Server,
    title: "Infraestructura Cloud",
    description: "Diseño y implementación de arquitecturas cloud escalables y resilientes.",
    features: ["Cloud Architecture", "Auto-scaling", "Load Balancing", "High Availability"],
    complexity: "Alta",
    duration: "2-6 meses",
    price: "Desde 12.000€"
  },
  {
    icon: Shield,
    title: "Seguridad Cloud",
    description: "Implementación de mejores prácticas de seguridad para entornos cloud.",
    features: ["Security Assessment", "IAM Configuration", "Network Security", "Compliance"],
    complexity: "Media",
    duration: "1-3 meses",
    price: "Desde 8.000€"
  },
  {
    icon: DollarSign,
    title: "Optimización de Costos",
    description: "Análisis y optimización para reducir significativamente tus gastos cloud.",
    features: ["Cost Analysis", "Resource Right-sizing", "Reserved Instances", "Monitoring"],
    complexity: "Media",
    duration: "1-2 meses",
    price: "Desde 5.000€"
  },
  {
    icon: Database,
    title: "Bases de Datos Cloud",
    description: "Migración y optimización de bases de datos para entornos cloud nativos.",
    features: ["Database Migration", "Performance Tuning", "Backup Strategies", "Disaster Recovery"],
    complexity: "Alta",
    duration: "2-4 meses",
    price: "Desde 10.000€"
  },
  {
    icon: Monitor,
    title: "DevOps & CI/CD",
    description: "Automatización de despliegues y monitoreo para desarrollo ágil en la nube.",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Alerting"],
    complexity: "Media",
    duration: "2-3 meses",
    price: "Desde 7.000€"
  }
];

const cloudProviders = [
  {
    name: "Amazon Web Services",
    logo: "AWS",
    services: ["EC2", "S3", "RDS", "Lambda", "CloudFront"],
    expertise: "Advanced Consulting Partner",
    color: "bg-orange-500"
  },
  {
    name: "Microsoft Azure",
    logo: "Azure",
    services: ["Virtual Machines", "Blob Storage", "SQL Database", "Functions", "CDN"],
    expertise: "Gold Partner",
    color: "bg-blue-500"
  },
  {
    name: "Google Cloud Platform",
    logo: "GCP",
    services: ["Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions", "CDN"],
    expertise: "Premier Partner",
    color: "bg-green-500"
  },
  {
    name: "IBM Cloud",
    logo: "IBM",
    services: ["Virtual Servers", "Object Storage", "Db2", "Functions", "CDN"],
    expertise: "Business Partner",
    color: "bg-blue-700"
  }
];

const migrationBenefits = [
  {
    icon: TrendingUp,
    title: "Escalabilidad Automática",
    description: "Recursos que se adaptan automáticamente a la demanda de tu negocio.",
    metric: "300% mejora en escalabilidad"
  },
  {
    icon: DollarSign,
    title: "Reducción de Costos",
    description: "Elimina gastos de hardware y reduce costos operativos significativamente.",
    metric: "40% reducción promedio de costos IT"
  },
  {
    icon: Shield,
    title: "Seguridad Avanzada",
    description: "Protección de nivel empresarial con cumplimiento normativo garantizado.",
    metric: "99.9% uptime garantizado"
  },
  {
    icon: Zap,
    title: "Performance Superior",
    description: "Velocidad y rendimiento optimizados para tus aplicaciones críticas.",
    metric: "50% mejora en velocidad"
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Despliega tu infraestructura en múltiples regiones mundiales.",
    metric: "190+ países de cobertura"
  },
  {
    icon: Settings,
    title: "Automatización",
    description: "Automatiza procesos manuales y mejora la eficiencia operativa.",
    metric: "70% reducción tareas manuales"
  }
];

const migrationProcess = [
  {
    phase: "01",
    title: "Assessment & Discovery",
    description: "Evaluamos tu infraestructura actual y definimos la estrategia de migración óptima.",
    duration: "2-4 semanas",
    deliverables: ["Assessment Report", "Migration Strategy", "Cost Analysis", "Timeline"]
  },
  {
    phase: "02",
    title: "Architecture Design",
    description: "Diseñamos la arquitectura cloud target y planificamos la migración por fases.",
    duration: "3-6 semanas",
    deliverables: ["Cloud Architecture", "Migration Plan", "Security Design", "DR Strategy"]
  },
  {
    phase: "03",
    title: "Pilot Migration",
    description: "Migramos aplicaciones no críticas para validar el proceso y ajustar la estrategia.",
    duration: "4-8 semanas",
    deliverables: ["Pilot Environment", "Validation Tests", "Process Refinement", "Training"]
  },
  {
    phase: "04",
    title: "Production Migration",
    description: "Migración de sistemas críticos con estrategia de cut-over planificada.",
    duration: "8-16 semanas",
    deliverables: ["Production Environment", "Data Migration", "Cut-over Execution", "Validation"]
  },
  {
    phase: "05",
    title: "Optimization & Support",
    description: "Optimización post-migración y soporte continuo para maximizar el ROI.",
    duration: "Continuo",
    deliverables: ["Performance Tuning", "Cost Optimization", "Monitoring", "Support 24/7"]
  }
];

export default function CloudComputingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Cloud Computing</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-sky-100 text-sky-700 border-sky-200">
                  <Cloud className="w-4 h-4 mr-2" />
                  Cloud Computing
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Migra a la <span className="text-sky-600">Nube</span> con Confianza
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Expertos en migración cloud, arquitectura escalable y optimización de costos. Transformamos tu infraestructura con AWS, Azure, Google Cloud y tecnologías cloud nativas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contacto">
                  <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                    Migración Gratuita Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button size="lg" variant="outline">
                    Calculadora de Costos
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">AWS Advanced Partner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-sky-500" />
                  <span className="text-gray-600">+100 Migraciones</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                alt="Cloud computing y migración"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Beneficios del <span className="text-sky-600">Cloud Computing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforma tu infraestructura IT y obtén ventajas competitivas inmediatas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                  <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-sky-600">{benefit.metric}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-sky-600">Cloud Computing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones completas para tu transformación digital en la nube
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precio:</span>
                      <span className="font-semibold text-sky-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto bg-sky-600 hover:bg-sky-700">
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-sky-600">Partners</span> Certificados
            </h2>
            <p className="text-xl text-gray-600">
              Trabajamos con los principales proveedores cloud del mundo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${provider.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-sm">{provider.logo}</span>
                  </div>
                  <CardTitle className="text-lg">{provider.name}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {provider.expertise}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {provider.services.map((service, i) => (
                      <div key={i} className="text-sm text-gray-600">• {service}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Proceso de <span className="text-sky-600">Migración</span>
            </h2>
            <p className="text-xl text-gray-600">
              Metodología probada para migraciones exitosas sin downtime
            </p>
          </div>

          <div className="space-y-8">
            {migrationProcess.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    <div className="text-center lg:text-left">
                      <div className="w-16 h-16 bg-sky-600 text-white rounded-full flex items-center justify-center mx-auto lg:mx-0 text-xl font-bold mb-4">
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

      {/* ROI Calculator CTA */}
      <section className="py-16 bg-sky-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Calcula el ROI de tu Migración Cloud</h3>
            <p className="text-sky-100 text-lg">
              Descubre cuánto puedes ahorrar migrando a la nube
            </p>
            <Link href="/contacto">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-400">
                Calculadora Gratuita de ROI
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Acelera tu Transformación Digital
            </h2>
            <p className="text-xl text-sky-100">
              Solicita un assessment gratuito y descubre cómo el cloud puede transformar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-sky-600 hover:bg-gray-100 text-lg px-8">
                  Assessment Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-600 text-lg px-8">
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
                <div className="w-8 h-8 bg-gradient-to-r from-sky-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Cloud className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Expertos en cloud computing y migración. Transformamos infraestructuras con AWS, Azure y Google Cloud.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios Cloud</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/cloud/migracion" className="hover:text-white transition-colors">Migración Cloud</Link></li>
                <li><Link href="/cloud/aws" className="hover:text-white transition-colors">AWS Solutions</Link></li>
                <li><Link href="/cloud/azure" className="hover:text-white transition-colors">Microsoft Azure</Link></li>
                <li><Link href="/cloud/optimizacion" className="hover:text-white transition-colors">Optimización Costos</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog?category=cloud" className="hover:text-white transition-colors">Blog Cloud</Link></li>
                <li><Link href="/calculadora-roi" className="hover:text-white transition-colors">Calculadora ROI</Link></li>
                <li><Link href="/whitepapers-cloud" className="hover:text-white transition-colors">Whitepapers</Link></li>
                <li><Link href="/webinars" className="hover:text-white transition-colors">Webinars</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>cloud@plustecologia.es</li>
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
