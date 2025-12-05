import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Eye,
  Heart,
  MessageCircle,
  Shield,
  AlertTriangle,
  Lock,
  Zap,
  TrendingUp,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ciberseguridad 2024: Las 10 Amenazas Principales que Debes Conocer | PLUS TECNOLOGIA",
  description: "Guía completa de las principales amenazas de ciberseguridad en 2024. Ransomware, ataques IA, phishing avanzado y estrategias de protección empresarial.",
  keywords: [
    "ciberseguridad 2024",
    "amenazas ciberseguridad",
    "ransomware 2024",
    "seguridad informatica",
    "proteccion datos empresariales",
    "ataques hackers",
    "pentesting",
    "seguridad IT"
  ],
  authors: [{ name: "Ana García" }],
  openGraph: {
    title: "Ciberseguridad 2024: Las 10 Amenazas Principales",
    description: "Análisis exhaustivo de las amenazas de ciberseguridad más críticas en 2024 y cómo proteger tu empresa.",
    images: ["/blog/ciberseguridad-amenazas-2024.jpg"],
    type: "article",
    publishedTime: "2024-01-12",
    authors: ["Ana García"]
  }
};

const threats = [
  {
    rank: 1,
    name: "Ransomware-as-a-Service (RaaS)",
    severity: "Crítica",
    color: "bg-red-600",
    impact: "Financiero y operacional extremo",
    description: "Modelos de negocio que democratizan el acceso a herramientas de ransomware."
  },
  {
    rank: 2,
    name: "Ataques Potenciados por IA",
    severity: "Alta",
    color: "bg-orange-600",
    impact: "Evasión de defensas tradicionales",
    description: "Uso de machine learning para crear ataques más sofisticados y personalizados."
  },
  {
    rank: 3,
    name: "Supply Chain Attacks",
    severity: "Alta",
    color: "bg-orange-600",
    impact: "Compromiso masivo de infraestructura",
    description: "Infiltración a través de proveedores y dependencias de software."
  },
  {
    rank: 4,
    name: "Cloud Configuration Attacks",
    severity: "Alta",
    color: "bg-yellow-600",
    impact: "Exposición de datos sensibles",
    description: "Explotación de configuraciones incorrectas en servicios cloud."
  },
  {
    rank: 5,
    name: "Deepfake y Social Engineering",
    severity: "Media",
    color: "bg-yellow-600",
    impact: "Manipulación y fraude",
    description: "Uso de deepfakes para ataques de ingeniería social avanzados."
  }
];

const protectionStrategies = [
  {
    title: "Zero Trust Architecture",
    description: "Implementación de modelos de seguridad que no confían en ningún usuario o dispositivo por defecto.",
    technologies: ["Microsoft Azure AD", "Okta", "CyberArk", "Zscaler"]
  },
  {
    title: "Extended Detection and Response (XDR)",
    description: "Plataformas unificadas que correlacionan datos de múltiples fuentes de seguridad.",
    technologies: ["SentinelOne", "CrowdStrike", "Microsoft Sentinel", "Splunk"]
  },
  {
    title: "Security Awareness Training",
    description: "Programas continuos de formación para empleados sobre amenazas actuales.",
    technologies: ["KnowBe4", "Proofpoint", "Barracuda", "Custom Training"]
  },
  {
    title: "Backup y Recovery Inmutable",
    description: "Sistemas de respaldo que no pueden ser modificados por atacantes.",
    technologies: ["Veeam", "Rubrik", "Cohesity", "AWS S3 Glacier"]
  }
];

export default function CiberseguridadAmenazasArticle() {
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
            <span className="text-gray-900">Amenazas Ciberseguridad 2024</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </Link>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge className="bg-red-500 text-white">
                  <Shield className="w-3 h-3 mr-1" />
                  Ciberseguridad
                </Badge>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  12 de Enero, 2024
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  12 min lectura
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Eye className="w-4 h-4 mr-1" />
                  1,890 vistas
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Ciberseguridad en 2024: Las 10 Amenazas que Debes Conocer
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Un repaso completo a las principales amenazas de ciberseguridad que enfrentarán las empresas este año, sus vectores de ataque más comunes y las estrategias de protección más efectivas.
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612c3c4?w=80&h=80&fit=crop&crop=face"
                    alt="Ana García"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ana García</h3>
                    <p className="text-gray-600">Cybersecurity Expert en PLUS TECNOLOGIA</p>
                    <p className="text-gray-500 text-sm">CISSP • CEH • +10 años en ciberseguridad</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartir
                  </Button>
                  <Button size="sm" variant="outline">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop"
                alt="Ciberseguridad y protección de datos en 2024"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl px-2 sm:px-4 mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 prose prose-sm sm:prose-lg max-w-none">
                <div className="space-y-8 text-gray-700 leading-relaxed">

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">El Panorama Actual de Amenazas</h2>
                    <p>
                      El año 2024 representa un punto de inflexión en el panorama de la ciberseguridad. Los ataques han evolucionado de simples intentos oportunistas a <strong>operaciones sofisticadas</strong> que aprovechan inteligencia artificial, explotan la creciente dependencia del cloud computing y se benefician de la expansión del trabajo remoto.
                    </p>
                    <p>
                      Según nuestro análisis en PLUS TECNOLOGIA, basado en más de <strong>200 auditorías de seguridad</strong> realizadas en el último año, las empresas enfrentan un entorno de amenazas sin precedentes que requiere estrategias de defensa completamente renovadas.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                      <h3 className="text-lg font-semibold text-red-900">Estadísticas Alarmantes 2024</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p><strong>95%</strong> de las brechas involucran error humano</p>
                        <p><strong>3.2 segundos</strong> frecuencia promedio de ataques</p>
                        <p><strong>€4.35M</strong> costo promedio de una brecha de datos</p>
                      </div>
                      <div>
                        <p><strong>ransomware</strong> cada 11 segundos</p>
                        <p><strong>80%</strong> de ataques exitosos usan credenciales robadas</p>
                        <p><strong>277 días</strong> tiempo promedio para detectar una brecha</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Top 5 Amenazas Críticas en 2024</h2>

                    <div className="space-y-6">
                      {threats.map((threat, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`w-8 h-8 ${threat.color} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                              {threat.rank}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">{threat.name}</h3>
                                <Badge variant="destructive">{threat.severity}</Badge>
                              </div>
                              <p className="text-gray-600 mb-2">{threat.description}</p>
                              <p className="text-sm text-gray-500">
                                <strong>Impacto:</strong> {threat.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Análisis Detallado: Ransomware-as-a-Service</h2>
                    <p>
                      El <strong>Ransomware-as-a-Service (RaaS)</strong> representa la mayor amenaza para las organizaciones en 2024. Este modelo de negocio criminal ha democratizado el acceso a herramientas de ransomware sofisticadas, permitiendo que atacantes con menos habilidades técnicas realicen ataques devastadores.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Cómo Funciona RaaS</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                      <ol className="space-y-3 text-sm">
                        <li><strong>1. Reclutamiento:</strong> Los operadores reclutan "afiliados" para distribuir el ransomware</li>
                        <li><strong>2. Provisión de Herramientas:</strong> Proporcionan kits de ransomware y infraestructura</li>
                        <li><strong>3. Reparto de Ganancias:</strong> Los operadores toman 20-30% de los rescates cobrados</li>
                        <li><strong>4. Soporte Técnico:</strong> Ofrecen soporte 24/7 para maximizar el éxito de los ataques</li>
                      </ol>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Vectores de Ataque Más Comunes</h3>
                    <ul className="space-y-2 mb-6">
                      <li>• <strong>Phishing dirigido</strong> con archivos adjuntos maliciosos</li>
                      <li>• <strong>Explotación de RDP</strong> mal configurado</li>
                      <li>• <strong>Vulnerabilidades en VPN</strong> y accesos remotos</li>
                      <li>• <strong>Ataques a la cadena de suministro</strong> de software</li>
                      <li>• <strong>Credenciales comprometidas</strong> vendidas en la dark web</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Ataques Potenciados por Inteligencia Artificial</h2>
                    <p>
                      La <strong>democratización de la IA</strong> ha dado lugar a una nueva generación de ataques que utilizan machine learning para evadir sistemas de detección tradicionales y crear contenido malicioso más convincente.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Tipos de Ataques con IA</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Phishing Adaptativo</h4>
                        <p className="text-sm text-gray-600">IA que personaliza emails de phishing basándose en el comportamiento del objetivo</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Malware Polimórfico</h4>
                        <p className="text-sm text-gray-600">Código malicioso que muta automáticamente para evadir detección</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Deepfake Voice</h4>
                        <p className="text-sm text-gray-600">Clonación de voz para ataques de ingeniería social</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Password Spraying IA</h4>
                        <p className="text-sm text-gray-600">Generación inteligente de contraseñas probables</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Estrategias de Protección 2024</h2>

                    <div className="space-y-6">
                      {protectionStrategies.map((strategy, index) => (
                        <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                            {strategy.title}
                          </h3>
                          <p className="text-gray-700 mb-4">{strategy.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {strategy.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Plan de Acción Inmediata</h2>
                    <p>
                      Basándose en nuestra experiencia auditando empresas de todos los tamaños, recomendamos implementar estas medidas <strong>en orden de prioridad</strong>:
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Lista de Verificación Crítica</h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Semana 1-2:</strong> Auditoría de accesos privilegiados y implementación de MFA
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Semana 3-4:</strong> Backup inmutable y test de recuperación
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Mes 2:</strong> Implementación de EDR/XDR en endpoints críticos
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Mes 3:</strong> Programa de security awareness para empleados
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Mes 4-6:</strong> Penetration testing y evaluación Zero Trust
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Recomendación de PLUS TECNOLOGIA</h3>
                    <p className="text-gray-700">
                      La ciberseguridad en 2024 no es solo una cuestión tecnológica, es un <strong>imperativo de negocio</strong>.
                      Las empresas que no adapten sus defensas a estas nuevas amenazas enfrentan riesgos existenciales.
                      Recomendamos una <strong>evaluación de seguridad integral</strong> seguida de una implementación por fases de las defensas más críticas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Threat Level */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                        Nivel de Amenaza
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-600 mb-2">CRÍTICO</div>
                        <p className="text-sm text-gray-600">Las amenazas actuales requieren acción inmediata</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                        <Shield className="w-4 h-4 mr-2" />
                        Auditoría Urgente
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <Lock className="w-4 h-4 mr-2" />
                        Test de Penetración
                      </Button>
                      <Button size="sm" variant="outline" className="w-full">
                        <Zap className="w-4 h-4 mr-2" />
                        Consulta Express
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Article Stats */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Estadísticas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Vistas</span>
                        <span className="font-semibold">1,890</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Compartidos</span>
                        <span className="font-semibold">145</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Comentarios</span>
                        <span className="font-semibold">67</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Emergency Contact */}
                  <Card className="bg-red-50 border-red-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-red-900">¿Ataque en Curso?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-red-800 mb-3">
                        Si sospechas un ataque activo, contacta inmediatamente:
                      </p>
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        Emergencia 24/7
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Protege tu Empresa Hoy Mismo
            </h2>
            <p className="text-xl text-red-100">
              No esperes a ser víctima. Nuestros expertos en ciberseguridad evaluarán tu infraestructura y te protegerán contra estas amenazas.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Button className="h-12 px-6 text-base bg-white text-red-600 hover:bg-gray-100 text-lg px-8">
                Auditoría Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-red-600 text-lg px-8">
                Consulta de Emergencia
              </Button>
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
                <li><Link href="/ciberseguridad/pentesting" className="hover:text-white transition-colors">Pentesting</Link></li>
                <li><Link href="/ciberseguridad/auditorias" className="hover:text-white transition-colors">Auditorías</Link></li>
                <li><Link href="/ciberseguridad/consultoria" className="hover:text-white transition-colors">Consultoría</Link></li>
                <li><Link href="/ciberseguridad/formacion" className="hover:text-white transition-colors">Formación</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog?category=ciberseguridad" className="hover:text-white transition-colors">Blog Seguridad</Link></li>
                <li><Link href="/whitepapers" className="hover:text-white transition-colors">Whitepapers</Link></li>
                <li><Link href="/herramientas" className="hover:text-white transition-colors">Herramientas</Link></li>
                <li><Link href="/alertas" className="hover:text-white transition-colors">Alertas</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>security@plustecologia.es</li>
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
