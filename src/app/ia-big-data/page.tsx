import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { ServiceReviews } from "@/components/ServiceReviews";
import { iaBigDataReviews, aggregateRatings } from "@/data/reviewsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  BarChart3,
  Database,
  Zap,
  Eye,
  MessageSquare,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Layers,
  Settings,
  Target,
  Award,
  Users,
  Clock,
  DollarSign
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Inteligencia Artificial y Big Data | PLUS TECNOLOGIA - Machine Learning, Analytics, Chatbots",
  description: "Servicios de IA y Big Data: machine learning, chatbots inteligentes, analytics predictivos, procesamiento de datos masivos y automatización inteligente.",
  keywords: [
    "inteligencia artificial",
    "machine learning",
    "big data analytics",
    "chatbots IA",
    "data science",
    "automatización IA",
    "analytics predictivos",
    "procesamiento datos"
  ],
  openGraph: {
    title: "Inteligencia Artificial y Big Data | PLUS TECNOLOGIA",
    description: "Implementamos soluciones de IA y Big Data que transforman datos en insights accionables para impulsar tu negocio.",
    images: ["/images/ia-big-data-og.jpg"],
    type: "website"
  }
};

const aiServices = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Modelos de ML personalizados para predicción, clasificación y optimización de procesos.",
    features: ["Modelos Predictivos", "Classification", "Regression", "Clustering"],
    useCase: "Predicción de demanda, detección fraudes",
    duration: "3-6 meses",
    price: "Desde 20.000€"
  },
  {
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    description: "Asistentes virtuales con IA para atención al cliente y automatización de procesos.",
    features: ["NLP Avanzado", "Integración APIs", "Multi-canal", "Aprendizaje Continuo"],
    useCase: "Customer service, ventas, soporte",
    duration: "2-4 meses",
    price: "Desde 15.000€"
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Análisis de imágenes y video para automatización y control de calidad.",
    features: ["Object Detection", "Image Classification", "OCR", "Video Analytics"],
    useCase: "Control calidad, seguridad, inventario",
    duration: "4-8 meses",
    price: "Desde 25.000€"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards inteligentes y análisis avanzado para toma de decisiones data-driven.",
    features: ["Interactive Dashboards", "Real-time Analytics", "KPI Monitoring", "Reporting"],
    useCase: "Executive dashboards, análisis ventas",
    duration: "2-3 meses",
    price: "Desde 12.000€"
  },
  {
    icon: Database,
    title: "Big Data Processing",
    description: "Procesamiento y análisis de grandes volúmenes de datos para insights empresariales.",
    features: ["Data Lakes", "ETL Pipelines", "Stream Processing", "Data Warehousing"],
    useCase: "Analytics masivos, data mining",
    duration: "4-6 meses",
    price: "Desde 18.000€"
  },
  {
    icon: Target,
    title: "Automatización IA",
    description: "Automatización inteligente de procesos empresariales con capacidades de decisión.",
    features: ["Process Automation", "Decision Trees", "Workflow AI", "Smart Routing"],
    useCase: "Procesos automáticos, optimización",
    duration: "3-5 meses",
    price: "Desde 16.000€"
  }
];

const aiTechnologies = [
  {
    category: "Machine Learning",
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "H2O.ai"],
    icon: Brain
  },
  {
    category: "NLP & Chatbots",
    tools: ["OpenAI GPT", "BERT", "spaCy", "Rasa", "Dialogflow"],
    icon: MessageSquare
  },
  {
    category: "Computer Vision",
    tools: ["OpenCV", "YOLO", "Detectron2", "MediaPipe", "TensorFlow Object Detection"],
    icon: Eye
  },
  {
    category: "Big Data",
    tools: ["Apache Spark", "Hadoop", "Kafka", "Elasticsearch", "Apache Airflow"],
    icon: Database
  },
  {
    category: "Cloud IA",
    tools: ["AWS SageMaker", "Azure ML", "Google Cloud AI", "Databricks", "MLflow"],
    icon: Layers
  }
];

const aiUseCases = [
  {
    industry: "E-commerce",
    application: "Sistema de Recomendaciones",
    description: "Motor de recomendaciones personalizado que aumenta ventas y engagement.",
    results: "35% incremento en conversiones",
    technologies: ["Collaborative Filtering", "Deep Learning", "Real-time Processing"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
  },
  {
    industry: "Healthcare",
    application: "Chatbot Médico",
    description: "Asistente virtual para triaje médico y programación de citas automática.",
    results: "60% reducción llamadas telefónicas",
    technologies: ["NLP", "Medical Knowledge Graphs", "Symptom Analysis"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop"
  },
  {
    industry: "Manufactura",
    application: "Predicción de Fallos",
    description: "Modelo predictivo para mantenimiento preventivo de maquinaria industrial.",
    results: "50% reducción downtime no planificado",
    technologies: ["Time Series Analysis", "IoT Integration", "Anomaly Detection"],
    image: "https://images.unsplash.com/photo-1565514158742-845b3b1b1cfe?w=300&h=200&fit=crop"
  },
  {
    industry: "Finanzas",
    application: "Detección de Fraude",
    description: "Sistema en tiempo real para identificar transacciones fraudulentas.",
    results: "95% precisión en detección",
    technologies: ["Ensemble Methods", "Real-time ML", "Behavioral Analysis"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop"
  }
];

const dataJourney = [
  {
    step: "01",
    title: "Data Discovery",
    description: "Análisis de fuentes de datos disponibles y definición de objetivos de negocio.",
    icon: Database
  },
  {
    step: "02",
    title: "Data Engineering",
    description: "Limpieza, transformación e integración de datos para análisis.",
    icon: Settings
  },
  {
    step: "03",
    title: "Model Development",
    description: "Desarrollo y entrenamiento de modelos de IA específicos para tu caso de uso.",
    icon: Brain
  },
  {
    step: "04",
    title: "Deployment",
    description: "Implementación en producción con monitoreo y escalabilidad automática.",
    icon: Zap
  },
  {
    step: "05",
    title: "Optimization",
    description: "Mejora continua del modelo basada en nuevos datos y feedback.",
    icon: TrendingUp
  }
];

export default function IABigDataPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">IA & Big Data</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  <Brain className="w-4 h-4 mr-2" />
                  Inteligencia Artificial & Big Data
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Transforma Datos en <span className="text-purple-600">Decisiones Inteligentes</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Implementamos soluciones de IA y Big Data que convierten tus datos en insights accionables. Machine Learning, chatbots inteligentes, analytics predictivos y automatización avanzada.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
                <Link href="/contacto">
                  <Button className="h-12 px-6 text-base bg-purple-600 hover:bg-purple-700">
                    Consulta IA Personalizada
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="default" className="h-12 px-6 text-base" variant="outline">
                    Ver Casos de Uso
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Expertos Data Science</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  <span className="text-gray-600">ROI Promedio 300%</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
                alt="Inteligencia artificial y machine learning"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Impact Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              El Impacto de la <span className="text-purple-300">Inteligencia Artificial</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center space-y-4">
              <DollarSign className="h-12 w-12 mx-auto text-purple-300" />
              <div className="text-4xl font-bold text-purple-300">€13.2T</div>
              <p className="text-purple-100">Valor económico global de IA en 2030</p>
            </div>
            <div className="text-center space-y-4">
              <TrendingUp className="h-12 w-12 mx-auto text-purple-300" />
              <div className="text-4xl font-bold text-purple-300">70%</div>
              <p className="text-purple-100">Empresas adoptarán IA para 2030</p>
            </div>
            <div className="text-center space-y-4">
              <Clock className="h-12 w-12 mx-auto text-purple-300" />
              <div className="text-4xl font-bold text-purple-300">40%</div>
              <p className="text-purple-100">Reducción tiempo en tareas repetitivas</p>
            </div>
            <div className="text-center space-y-4">
              <Users className="h-12 w-12 mx-auto text-purple-300" />
              <div className="text-4xl font-bold text-purple-300">90%</div>
              <p className="text-purple-100">Mejora en satisfacción del cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-purple-600">IA & Big Data</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones inteligentes que automatizan procesos y revelan insights ocultos en tus datos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {aiServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                      <span className="text-gray-500">Caso de uso:</span>
                      <p className="font-medium">{service.useCase}</p>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duración:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precio:</span>
                      <span className="font-semibold text-purple-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto bg-purple-600 hover:bg-purple-700">
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="text-purple-600">Tecnologías</span> de Vanguardia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {aiTechnologies.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <tech.icon className="h-8 w-8 mx-auto text-purple-600 mb-2" />
                  <CardTitle className="text-lg">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {tech.tools.map((tool, i) => (
                      <div key={i} className="text-sm text-gray-600">• {tool}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Casos de <span className="text-purple-600">Éxito</span> Reales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {aiUseCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={useCase.image}
                    alt={useCase.application}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">
                      {useCase.industry}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.application}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-lg font-semibold text-purple-600">
                    {useCase.results}
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {useCase.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Journey Process */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              El Viaje de tus <span className="text-purple-600">Datos</span>
            </h2>
            <p className="text-xl text-gray-600">
              Proceso estructurado para transformar datos en valor empresarial
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {dataJourney.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {step.step}
                </div>
                <step.icon className="h-6 w-6 mx-auto text-purple-600" />
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">¿Quieres ver la IA en Acción?</h3>
            <p className="text-purple-100 text-lg">
              Solicita una demo personalizada y descubre el potencial de tus datos
            </p>
            <Link href="/contacto">
              <Button className="h-12 px-6 text-base bg-purple-500 hover:bg-purple-400">
                Demo Personalizada Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ServiceReviews
        serviceName="IA & Big Data"
        reviews={iaBigDataReviews}
        aggregateRating={aggregateRatings.iaBigData}
      />

      {/* Main CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Empieza tu Transformación con IA
            </h2>
            <p className="text-xl text-purple-100">
              Descubre cómo la inteligencia artificial puede revolucionar tu negocio.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-purple-600 hover:bg-gray-100 text-lg px-8">
                  Consulta IA Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8">
                  Hablar con Data Scientist
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
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Especialistas en IA y Big Data. Transformamos datos en decisiones inteligentes que impulsan el crecimiento empresarial.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios IA</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/ia/machine-learning" className="hover:text-white transition-colors">Machine Learning</Link></li>
                <li><Link href="/ia/chatbots" className="hover:text-white transition-colors">Chatbots IA</Link></li>
                <li><Link href="/ia/computer-vision" className="hover:text-white transition-colors">Computer Vision</Link></li>
                <li><Link href="/ia/analytics" className="hover:text-white transition-colors">Analytics Predictivos</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Big Data</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/bigdata/processing" className="hover:text-white transition-colors">Procesamiento Masivo</Link></li>
                <li><Link href="/bigdata/warehousing" className="hover:text-white transition-colors">Data Warehousing</Link></li>
                <li><Link href="/bigdata/analytics" className="hover:text-white transition-colors">Advanced Analytics</Link></li>
                <li><Link href="/bigdata/visualization" className="hover:text-white transition-colors">Visualización Datos</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>ai@plustecologia.es</li>
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
