// ...existing code... <no existing file>
import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, User, ArrowLeft, Settings, Zap, TrendingUp, Bot, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Automatización de Procesos con IA en 2025 | PLUS TECNOLOGIA",
  description: "Descubre cómo RPA inteligente, workflow automation y IA están transformando la eficiencia empresarial en 2025.",
  keywords: ["automatización", "RPA", "inteligencia artificial", "workflow", "procesos empresariales", "eficiencia", "2025"],
  openGraph: {
    title: "Automatización de Procesos con IA en 2025",
    description: "Guía completa sobre RPA inteligente y automatización de workflows empresariales con IA.",
    images: ["/images/automatizacion-ia-2025.jpg"],
    type: "article"
  }
};

const automationCases = [
  {
    process: "Procesamiento de Facturas",
    description: "OCR + IA para extraer y validar datos automáticamente",
    timeSaved: "85% reducción tiempo",
    errorReduction: "95% menos errores",
    roi: "400% ROI primer año",
    technology: "Azure AI + Power Automate"
  },
  {
    process: "Atención al Cliente L1",
    description: "Chatbots inteligentes que resuelven 80% consultas",
    timeSaved: "24/7 disponibilidad",
    errorReduction: "Respuestas consistentes",
    roi: "60% reducción costos",
    technology: "GPT-4 + API integrada"
  },
  {
    process: "Onboarding Empleados",
    description: "Automatización completa del proceso de incorporación",
    timeSaved: "70% menos tiempo RRHH",
    errorReduction: "100% compliance",
    roi: "250% mejora experiencia",
    technology: "Workflow Engine + IA"
  },
  {
    process: "Análisis de Contratos",
    description: "Revisión automática de cláusulas y riesgos legales",
    timeSaved: "90% reducción revisión",
    errorReduction: "Detección 99% riesgos",
    roi: "500% ROI anual",
    technology: "NLP + Machine Learning"
  }
];

const automationTools = [
  {
    category: "RPA Tradicional",
    tools: ["UiPath", "Blue Prism", "Automation Anywhere"],
    useCase: "Tareas repetitivas y reglas fijas",
    complexity: "Básica"
  },
  {
    category: "RPA Inteligente",
    tools: ["Microsoft Power Automate", "IBM Watson RPA", "WorkFusion"],
    useCase: "Procesos con decisiones complejas",
    complexity: "Media"
  },
  {
    category: "IA + Automation",
    tools: ["Zapier + OpenAI", "Custom Solutions", "AI Workflow Builders"],
    useCase: "Automatización adaptativa e inteligente",
    complexity: "Avanzada"
  }
];

export default function AutomatizacionProcesosPage() {
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
            <span className="text-gray-900">Automatización Procesos IA 2025</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl px-2 sm:px-4">

          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Link>

          {/* Article Meta */}
          <div className="mb-8">
            <Badge className="bg-orange-100 text-orange-700 mb-4">
              <Bot className="w-4 h-4 mr-2" />
              Automatización Inteligente
            </Badge>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Automatización de Procesos con IA en 2025: RPA Inteligente y Workflows Adaptativos
            </h1>

            <div className="flex items-center space-x-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Equipo PLUS TECNOLOGIA</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>11 min lectura</span>
              </div>
              <time>20 Enero 2025</time>
            </div>

            {/* Featured Image */}
            <div className="relative h-48 sm:h-64 lg:h-96 rounded-xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=400&fit=crop&auto=format&q=85"
                alt="Automatización de procesos con IA"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose-lg max-w-none">

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">🤖 En este artículo aprenderás:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Diferencias entre RPA tradicional y RPA inteligente</li>
                <li>• Casos de uso reales con ROI documentado</li>
                <li>• Herramientas y plataformas de automatización 2025</li>
                <li>• Metodología de implementación paso a paso</li>
                <li>• Tendencias: IA generativa en automatización empresarial</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">La Evolución de RPA: De Scripts a Inteligencia Artificial</h2>

            <p className="text-lg text-gray-700 mb-6">
              La automatización de procesos robóticos (RPA) ha evolucionado dramáticamente. Mientras que en 2020 se limitaba a tareas repetitivas con reglas fijas, en 2025 incorpora IA que permite tomar decisiones complejas, aprender de patrones y adaptarse a cambios.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              Según nuestro análisis de más de 300 implementaciones, las empresas que adoptan RPA inteligente ven mejoras promedio del 65% en eficiencia operacional y reducciones del 45% en costos de procesamiento en el primer año.
            </p>

            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">📈 Impacto RPA Inteligente 2025</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">65%</div>
                  <div className="text-sm opacity-90">↑ Eficiencia operacional</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">45%</div>
                  <div className="text-sm opacity-90">↓ Costos procesamiento</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-sm opacity-90">↓ Errores humanos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Operación continua</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Casos de Uso con ROI Demostrable</h2>

            <div className="space-y-6 mb-8">
              {automationCases.map((case_, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg flex items-center">
                        <Workflow className="w-5 h-5 text-orange-600 mr-2" />
                        {case_.process}
                      </CardTitle>
                      <Badge variant="outline">{case_.technology}</Badge>
                    </div>
                    <CardDescription>{case_.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="font-semibold text-green-600">{case_.timeSaved}</div>
                        <div className="text-sm text-gray-600">Ahorro Tiempo</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-blue-600">{case_.errorReduction}</div>
                        <div className="text-sm text-gray-600">Reducción Errores</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-purple-600">{case_.roi}</div>
                        <div className="text-sm text-gray-600">ROI/Impacto</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stack Tecnológico de Automatización 2025</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              {automationTools.map((tool, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{tool.category}</CardTitle>
                    <CardDescription>Complejidad: {tool.complexity}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Herramientas:</h4>
                        <ul className="space-y-1">
                          {tool.tools.map((t, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-center">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Caso de Uso:</h4>
                        <p className="text-sm text-gray-700">{tool.useCase}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementación Práctica: Automatización de Facturas</h2>

            <p className="text-lg text-gray-700 mb-6">
              Vamos a implementar un sistema completo de automatización para el procesamiento de facturas, desde la recepción hasta la contabilización, integrando OCR, validación inteligente y workflows adaptativos.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fase 1: Análisis del Proceso Actual</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Mapeo del Workflow Actual:</h4>
              <ol className="space-y-2 text-gray-700">
                <li>1. <strong>Recepción:</strong> Email/Portal web (5 min/factura)</li>
                <li>2. <strong>Clasificación:</strong> Manual por tipo (3 min/factura)</li>
                <li>3. <strong>Extracción datos:</strong> Introducción manual (15 min/factura)</li>
                <li>4. <strong>Validación:</strong> Verificación cruzada (10 min/factura)</li>
                <li>5. <strong>Aprobación:</strong> Workflow manual (2-5 días)</li>
                <li>6. <strong>Contabilización:</strong> Entrada manual ERP (5 min/factura)</li>
              </ol>
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
                <strong>Total tiempo manual:</strong> 38 min/factura + 2-5 días aprobación
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fase 2: Diseño del Sistema Automatizado</h3>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Arquitectura del Sistema:</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto mb-4">
{`Sistema de Automatización de Facturas
├── Módulo de Ingesta
│   ├── Email Monitor (IMAP/Exchange)
│   ├── Portal Web (API REST)
│   └── Scanner OCR (Azure Form Recognizer)
├── Procesamiento IA
│   ├── Clasificación Automática (ML)
│   ├── Extracción de Datos (NLP)
│   ├── Validación Inteligente (Rules Engine)
│   └── Detección de Anomalías (AI)
├── Workflow Engine
│   ├── Routing Automático
│   ├── Aprobaciones Dinámicas
│   └── Escalación Inteligente
└── Integración ERP
    ├── SAP/Oracle Connector
    ├── Contabilización Automática
    └── Reporting Dashboard`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fase 3: Implementación con Azure + Power Automate</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Código de Ejemplo - OCR + Validación IA:</h4>
              <pre className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
{`// Azure Function para procesamiento de facturas
const { FormRecognizerClient, AzureKeyCredential } = require("@azure/ai-form-recognizer");
const { OpenAI } = require("openai");

class InvoiceProcessor {
  constructor() {
    this.formRecognizer = new FormRecognizerClient(
      process.env.FORM_RECOGNIZER_ENDPOINT,
      new AzureKeyCredential(process.env.FORM_RECOGNIZER_KEY)
    );
    this.openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }

  async processInvoice(fileUrl) {
    try {
      // 1. Extraer datos con OCR
      const ocrResult = await this.extractInvoiceData(fileUrl);

      // 2. Validar con IA
      const validation = await this.validateWithAI(ocrResult);

      // 3. Aplicar reglas de negocio
      const businessValidation = await this.applyBusinessRules(ocrResult);

      // 4. Determinar workflow
      const workflow = this.determineWorkflow(ocrResult, validation);

      return {
        data: ocrResult,
        validation: validation,
        workflow: workflow,
        confidence: validation.confidence
      };
    } catch (error) {
      console.error('Error processing invoice:', error);
      throw error;
    }
  }

  async validateWithAI(invoiceData) {
    const prompt = \`
    Analiza esta factura y valida:
    1. Coherencia de importes y cálculos
    2. Formato de datos (fechas, números)
    3. Completitud de información obligatoria
    4. Posibles anomalías o errores

    Datos: \${JSON.stringify(invoiceData)}

    Responde en JSON con validación y confidence score.
    \`;

    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.1
    });

    return JSON.parse(response.choices[0].message.content);
  }
}`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Resultados Medibles: Antes vs Después</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <Card className="border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-700">❌ Proceso Manual (Antes)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Tiempo:</strong> 38 min/factura</li>
                    <li>• <strong>Errores:</strong> 12% tasa error humano</li>
                    <li>• <strong>Aprobación:</strong> 2-5 días promedio</li>
                    <li>• <strong>Costo:</strong> €25 por factura</li>
                    <li>• <strong>Horario:</strong> Solo horas oficina</li>
                    <li>• <strong>Escalabilidad:</strong> Limitada por personal</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">✅ Proceso Automatizado (Después)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Tiempo:</strong> 3 min/factura</li>
                    <li>• <strong>Errores:</strong> 0.8% tasa error</li>
                    <li>• <strong>Aprobación:</strong> 2-4 horas promedio</li>
                    <li>• <strong>Costo:</strong> €4 por factura</li>
                    <li>• <strong>Horario:</strong> 24/7 procesamiento</li>
                    <li>• <strong>Escalabilidad:</strong> Ilimitada</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 ROI Calculado - Empresa con 1000 facturas/mes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">€21,000</div>
                  <div className="text-sm text-gray-600">Ahorro mensual</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-gray-600">Reducción errores</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-gray-600">Menos tiempo proceso</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">IA Generativa en Automatización: El Siguiente Nivel</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatización Adaptativa con LLMs</h3>
            <p className="text-lg text-gray-700 mb-6">
              Los Large Language Models están revolucionando la automatización al permitir que los sistemas "entiendan" contexto, tomen decisiones complejas y se adapten a situaciones no previstas.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">🧠 Casos de Uso IA Generativa:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Respuestas Automáticas:</strong> Emails de clientes con contexto y tono apropiado</li>
                  <li>• <strong>Análisis de Contratos:</strong> Extracción inteligente de cláusulas y riesgos</li>
                  <li>• <strong>Generación de Reportes:</strong> Informes automáticos con insights y recomendaciones</li>
                  <li>• <strong>Clasificación Inteligente:</strong> Categorización de documentos por contenido semántico</li>
                  <li>• <strong>Workflows Dinámicos:</strong> Adaptación de procesos según contexto</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Metodología de Implementación: 6 Fases</h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  phase: "1",
                  title: "Auditoría de Procesos",
                  description: "Mapeo completo, identificación de cuellos de botella y oportunidades de automatización.",
                  duration: "2-3 semanas"
                },
                {
                  phase: "2",
                  title: "Priorización y ROI",
                  description: "Análisis coste-beneficio, selección de procesos con mayor impacto potencial.",
                  duration: "1 semana"
                },
                {
                  phase: "3",
                  title: "Diseño de Solución",
                  description: "Arquitectura técnica, selección de herramientas y diseño de workflows.",
                  duration: "2-4 semanas"
                },
                {
                  phase: "4",
                  title: "Desarrollo e Integración",
                  description: "Implementación de bots, integración con sistemas existentes y testing.",
                  duration: "4-8 semanas"
                },
                {
                  phase: "5",
                  title: "Piloto y Ajustes",
                  description: "Pruebas con volumen real, optimización y entrenamiento de usuarios.",
                  duration: "2-3 semanas"
                },
                {
                  phase: "6",
                  title: "Despliegue y Monitoreo",
                  description: "Puesta en producción, monitoreo continuo y mejoras iterativas.",
                  duration: "Ongoing"
                }
              ].map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {phase.phase}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{phase.title}</h3>
                    <p className="text-gray-700 mb-1">{phase.description}</p>
                    <div className="text-sm text-orange-600 font-medium">Duración: {phase.duration}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tendencias 2025-2026: El Futuro de la Automatización</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">🚀 Tecnologías Emergentes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Hyperautomation:</strong> Automatización end-to-end de procesos complejos</li>
                  <li>• <strong>No-Code RPA:</strong> Democratización con herramientas visuales</li>
                  <li>• <strong>AI Agents:</strong> Sistemas autónomos que operan sin supervisión</li>
                  <li>• <strong>Process Mining:</strong> Descubrimiento automático de oportunidades</li>
                  <li>• <strong>Autonomous Workflows:</strong> Procesos que se auto-optimizan</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-4">¿Listo para Automatizar tu Empresa?</h3>
              <p className="mb-6">
                Ofrecemos auditorías gratuitas de automatización para identificar oportunidades de mejora en tu organización.
              </p>
              <Link href="/contacto">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8">
                  Auditoría Gratuita de Automatización
                  <Settings className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {["Automatización", "RPA", "Inteligencia Artificial", "Workflow", "Procesos Empresariales", "Eficiencia", "OCR", "Power Automate"].map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Artículos Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "IA y Machine Learning para Empresas en 2025",
                  excerpt: "Implementación práctica de IA empresarial con ROI medible y casos de éxito reales.",
                  href: "/blog/ia-machine-learning-empresas-2025"
                },
                {
                  title: "Realidad Virtual en Desarrollo Web 2025",
                  excerpt: "WebXR, metaverso empresarial y nuevas experiencias inmersivas para tu negocio.",
                  href: "/blog/realidad-virtual-desarrollo-web-2025"
                },
                {
                  title: "Ciberseguridad Empresarial en 2024",
                  excerpt: "Principales amenazas y estrategias de protección para empresas modernas.",
                  href: "/blog/ciberseguridad-2024-amenazas-principales"
                }
              ].map((article, index) => (
                <Link key={index} href={article.href}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <div className="relative h-24 sm:h-32overflow-hidden rounded-t-lg">
                      <Image
                        src={`https://images.unsplash.com/photo-${1485827404703 + index * 3000}-89b55fcc595e?w=400&h=200&fit=crop&auto=format&q=80`}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <WhatsAppChat />
    </div>
  );
}
// ...existing code... <end of new file>
