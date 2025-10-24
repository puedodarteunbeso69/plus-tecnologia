import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Cloud, Shield, TrendingUp, Zap, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Migración a la Nube: Guía Completa para Empresas en 2024 | PLUS TECNOLOGIA",
  description: "Todo lo que necesitas saber para migrar tu infraestructura a la nube de forma segura y eficiente. Estrategias, herramientas y mejores prácticas para una migración exitosa.",
  keywords: ["migración nube", "cloud migration", "AWS", "Azure", "infraestructura cloud", "estrategia migración", "2024"],
  openGraph: {
    title: "Migración a la Nube: Guía Completa para Empresas en 2024",
    description: "Guía paso a paso para migrar tu infraestructura a la nube: estrategias, herramientas y mejores prácticas.",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop"],
    type: "article"
  }
};

const migrationPhases = [
  {
    phase: "1. Evaluación y Planificación",
    description: "Análisis exhaustivo de la infraestructura actual y definición de objetivos",
    tasks: [
      "Inventario completo de aplicaciones y dependencias",
      "Análisis de costos actual vs cloud (TCO)",
      "Identificar aplicaciones críticas y no críticas",
      "Definir KPIs y métricas de éxito"
    ],
    icon: Shield
  },
  {
    phase: "2. Selección de Proveedor y Arquitectura",
    description: "Elegir el proveedor cloud y diseñar la arquitectura target",
    tasks: [
      "Comparativa AWS vs Azure vs Google Cloud",
      "Diseño de arquitectura cloud-native",
      "Definir estrategia multi-cloud o single-cloud",
      "Plan de seguridad y compliance"
    ],
    icon: Cloud
  },
  {
    phase: "3. Preparación y Pruebas",
    description: "Configurar entornos y realizar migraciones piloto",
    tasks: [
      "Configurar landing zone y networking",
      "Setup de herramientas de migración",
      "Migración piloto con apps no críticas",
      "Testing exhaustivo de performance y seguridad"
    ],
    icon: Zap
  },
  {
    phase: "4. Migración y Optimización",
    description: "Ejecutar migración completa y optimizar recursos",
    tasks: [
      "Migración por fases según criticidad",
      "Monitoreo continuo durante migración",
      "Optimización de costos (rightsizing)",
      "Implementar auto-scaling y resilience"
    ],
    icon: TrendingUp
  }
];

const migrationStrategies = [
  {
    name: "Rehost (Lift and Shift)",
    description: "Mover aplicaciones sin modificaciones",
    pros: ["Rápido", "Bajo riesgo", "Menor costo inicial"],
    cons: ["No aprovecha beneficios cloud", "Costos operativos más altos"],
    bestFor: "Apps legacy, migración rápida"
  },
  {
    name: "Replatform",
    description: "Optimizaciones menores para cloud",
    pros: ["Balance costo-beneficio", "Mejoras de performance", "Moderada complejidad"],
    cons: ["Requiere algo de refactoring", "Testing adicional"],
    bestFor: "Apps modernas con arquitectura compatible"
  },
  {
    name: "Refactor / Re-architect",
    description: "Rediseño completo cloud-native",
    pros: ["Máximo beneficio cloud", "Escalabilidad óptima", "Menor costo largo plazo"],
    cons: ["Alto costo inicial", "Largo tiempo", "Mayor riesgo"],
    bestFor: "Apps core business, transformación digital"
  },
  {
    name: "Retire",
    description: "Desactivar aplicaciones obsoletas",
    pros: ["Reducción costos inmediata", "Simplificación"],
    cons: ["Requiere análisis de dependencias"],
    bestFor: "Apps redundantes o sin uso"
  }
];

const cloudProviders = [
  {
    name: "AWS (Amazon Web Services)",
    marketShare: "32%",
    strengths: ["Más servicios disponibles (+200)", "Madurez y ecosistema", "Global footprint"],
    pricing: "Pay-as-you-go, Reserved Instances, Spot Instances",
    bestFor: "Startups, enterprise, workloads generales"
  },
  {
    name: "Microsoft Azure",
    marketShare: "23%",
    strengths: ["Integración Microsoft", "Hybrid cloud líder", "Enterprise support"],
    pricing: "Flexible, licencias Windows incluidas",
    bestFor: "Empresas con stack Microsoft, hybrid scenarios"
  },
  {
    name: "Google Cloud Platform",
    marketShare: "10%",
    strengths: ["Big Data y ML", "Kubernetes nativo (GKE)", "Networking global"],
    pricing: "Descuentos automáticos por uso sostenido",
    bestFor: "Data analytics, ML workloads, containers"
  }
];

export default function MigracionNubePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-blue-600">Blog</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Migración a la Nube 2024</span>
          </nav>
        </div>
      </div>

      <article className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </Link>

            <div className="space-y-4">
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Computing
              </Badge>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Migración a la Nube: Guía Completa para Empresas en 2024
              </h1>

              <p className="text-xl text-gray-600">
                Todo lo que necesitas saber para migrar tu infraestructura a la nube de forma segura, eficiente y rentable. Estrategias probadas, herramientas y mejores prácticas.
              </p>

              {/* Author and Meta */}
              <div className="flex items-center space-x-6 text-gray-600 pt-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Roberto Sánchez</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>5 Dic 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>15 min lectura</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop"
              alt="Infraestructura cloud y migración"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">¿Por Qué Migrar a la Nube?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La migración a la nube ya no es una opción, es una necesidad estratégica para empresas que buscan mantenerse competitivas en 2024. Las organizaciones que han completado su migración reportan:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Reducción de Costos</h4>
                      <p className="text-gray-600 text-sm">30-40% de ahorro en infraestructura IT vs on-premise tradicional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Escalabilidad Ilimitada</h4>
                      <p className="text-gray-600 text-sm">Crecer o decrecer recursos en minutos según demanda real</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Agilidad de Negocio</h4>
                      <p className="text-gray-600 text-sm">Lanzar nuevos servicios en semanas en lugar de meses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Seguridad Mejorada</h4>
                      <p className="text-gray-600 text-sm">Proveedores cloud invierten millones en seguridad y compliance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Fases de la Migración a la Nube</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Una migración exitosa requiere planificación meticulosa y ejecución por fases. Aquí está el proceso completo:
            </p>

            <div className="space-y-6 mb-12">
              {migrationPhases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                          <p className="text-gray-600 mb-4">{phase.description}</p>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-sm">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Estrategias de Migración: Las 6R's</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              No existe una estrategia única para todas las aplicaciones. Cada app debe evaluarse individualmente según estos criterios:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {migrationStrategies.map((strategy, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{strategy.name}</h3>
                    <p className="text-gray-600 mb-4">{strategy.description}</p>

                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-green-700 mb-2">Pros:</p>
                        <ul className="space-y-1">
                          {strategy.pros.map((pro, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-red-700 mb-2">Contras:</p>
                        <ul className="space-y-1">
                          {strategy.cons.map((con, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-gray-200">
                        <p className="text-sm"><span className="font-semibold text-gray-900">Mejor para:</span> <span className="text-gray-600">{strategy.bestFor}</span></p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Comparativa de Proveedores Cloud</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              La elección del proveedor cloud es una decisión crítica. Aquí un análisis de los tres líderes del mercado:
            </p>

            <div className="space-y-6 mb-12">
              {cloudProviders.map((provider, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{provider.name}</h3>
                      <Badge variant="secondary" className="text-sm">
                        {provider.marketShare} cuota mercado
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Fortalezas:</p>
                        <ul className="space-y-1">
                          {provider.strengths.map((strength, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start">
                              <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-gray-900 mb-2">Pricing:</p>
                        <p className="text-sm text-gray-600 mb-3">{provider.pricing}</p>

                        <p className="font-semibold text-gray-900 mb-2">Mejor para:</p>
                        <p className="text-sm text-gray-600">{provider.bestFor}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Herramientas de Migración Esenciales</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Las herramientas correctas aceleran y simplifican el proceso de migración:
            </p>

            <Card className="mb-12">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Cloud className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">AWS Migration Hub / Azure Migrate / Google Migrate</p>
                      <p className="text-sm text-gray-600">Plataformas oficiales de cada proveedor para discovery, planning y tracking</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Cloud className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Terraform / CloudFormation</p>
                      <p className="text-sm text-gray-600">Infrastructure as Code para provisioning automatizado y reproducible</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Cloud className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">CloudEndure / Carbonite</p>
                      <p className="text-sm text-gray-600">Replicación continua para migraciones de servidores con minimal downtime</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Cloud className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Datadog / New Relic / CloudWatch</p>
                      <p className="text-sm text-gray-600">Monitoring y observabilidad durante y post-migración</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusiones y Próximos Pasos</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La migración a la nube es un viaje transformador que requiere planificación estratégica, ejecución meticulosa y optimización continua. Las organizaciones que lo hacen correctamente obtienen ventajas competitivas significativas: reducción de costos, mayor agilidad, mejor seguridad y capacidad de innovar más rápido.
            </p>

            <Card className="bg-blue-50 border-blue-200 mb-12">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">¿Necesitas ayuda con tu migración a la nube?</h3>
                <p className="text-gray-700 mb-4">
                  En PLUS TECNOLOGIA tenemos experiencia migrando infraestructuras complejas a AWS, Azure y Google Cloud. Ofrecemos consultoría estratégica, implementación técnica y soporte post-migración.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contacto">Consulta Gratuita</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {["Cloud Migration", "AWS", "Azure", "Google Cloud", "Infrastructure", "DevOps", "Estrategia Cloud"].map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-blue-100 mb-6">
              Suscríbete a nuestro newsletter para recibir más contenido como este
            </p>
            <Button variant="secondary" size="lg">
              Suscribirse al Newsletter
            </Button>
          </div>
        </div>
      </article>

      {/* WhatsApp Chat */}
      <WhatsAppChat />

      {/* Footer (simplificado) */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
