"use client";

import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calculator,
  ArrowRight,
  ArrowLeft,
  Check,
  Smartphone,
  Globe,
  Database,
  Brain,
  Zap,
  Clock,
  Euro,
  CheckCircle2,
  Mail,
  Phone,
  User,
  Building,
  Send
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface ProjectType {
  id: string;
  name: string;
  icon: any;
  basePrice: number;
  description: string;
  color: string;
}

interface Feature {
  id: string;
  name: string;
  price: number;
  description: string;
}

const projectTypes: ProjectType[] = [
  {
    id: "app-movil",
    name: "App Móvil",
    icon: Smartphone,
    basePrice: 12000,
    description: "iOS, Android o multiplataforma",
    color: "bg-blue-500"
  },
  {
    id: "web",
    name: "Desarrollo Web",
    icon: Globe,
    basePrice: 5000,
    description: "Sitio corporativo, e-commerce, landing",
    color: "bg-green-500"
  },
  {
    id: "software",
    name: "Software Empresarial",
    icon: Database,
    basePrice: 25000,
    description: "ERP, CRM, sistemas a medida",
    color: "bg-purple-500"
  },
  {
    id: "ia-ml",
    name: "IA & Machine Learning",
    icon: Brain,
    basePrice: 15000,
    description: "Modelos predictivos, chatbots, visión artificial",
    color: "bg-indigo-500"
  }
];

const featuresByType: Record<string, Feature[]> = {
  "app-movil": [
    { id: "auth", name: "Autenticación de usuarios", price: 2000, description: "Login, registro, recuperación contraseña" },
    { id: "payments", name: "Pagos integrados", price: 3000, description: "Stripe, PayPal, tarjetas" },
    { id: "push", name: "Notificaciones push", price: 1500, description: "Firebase Cloud Messaging" },
    { id: "maps", name: "Mapas y geolocalización", price: 2500, description: "Google Maps, tracking" },
    { id: "chat", name: "Chat en tiempo real", price: 3500, description: "Mensajería instantánea" },
    { id: "camera", name: "Cámara y galería", price: 1500, description: "Captura y subida de fotos" },
    { id: "offline", name: "Modo offline", price: 3000, description: "Sincronización local" },
    { id: "analytics", name: "Analytics avanzado", price: 2000, description: "Métricas y dashboards" }
  ],
  "web": [
    { id: "cms", name: "CMS integrado", price: 2500, description: "Panel de administración" },
    { id: "blog", name: "Blog con SEO", price: 1500, description: "Sistema de artículos" },
    { id: "ecommerce", name: "E-commerce completo", price: 5000, description: "Carrito, pagos, inventario" },
    { id: "multilenguaje", name: "Multi-idioma", price: 2000, description: "Gestión de traducciones" },
    { id: "portal", name: "Portal de clientes", price: 4000, description: "Área privada con login" },
    { id: "api", name: "API REST", price: 2500, description: "Endpoints personalizados" },
    { id: "pwa", name: "PWA (App instalable)", price: 2000, description: "Progressive Web App" },
    { id: "seo-premium", name: "SEO Premium", price: 1500, description: "Optimización avanzada" }
  ],
  "software": [
    { id: "erp-core", name: "Módulo ERP Core", price: 8000, description: "Finanzas, inventario, compras" },
    { id: "crm-module", name: "Módulo CRM", price: 6000, description: "Gestión de clientes y ventas" },
    { id: "hrm", name: "Gestión RRHH", price: 5000, description: "Nóminas, asistencias" },
    { id: "reporting", name: "Sistema de reportes", price: 4000, description: "BI y dashboards" },
    { id: "workflows", name: "Automatización workflows", price: 5000, description: "Procesos automáticos" },
    { id: "integrations", name: "Integraciones externas", price: 4000, description: "APIs de terceros" },
    { id: "mobile-app", name: "App móvil complementaria", price: 10000, description: "Acceso desde móvil" },
    { id: "advanced-security", name: "Seguridad avanzada", price: 3000, description: "Auditoría, roles, logs" }
  ],
  "ia-ml": [
    { id: "ml-model", name: "Modelo predictivo", price: 8000, description: "Clasificación, regresión" },
    { id: "nlp", name: "Procesamiento de lenguaje", price: 7000, description: "NLP, sentiment analysis" },
    { id: "chatbot", name: "Chatbot con IA", price: 6000, description: "Conversacional inteligente" },
    { id: "computer-vision", name: "Visión artificial", price: 9000, description: "Detección de objetos, OCR" },
    { id: "recommendation", name: "Sistema de recomendación", price: 7000, description: "Personalización" },
    { id: "training", name: "Entrenamiento continuo", price: 4000, description: "Mejora automática" },
    { id: "dashboard-ml", name: "Dashboard de métricas", price: 3000, description: "Monitoreo de modelo" },
    { id: "api-ml", name: "API para inferencias", price: 3500, description: "Endpoint de predicción" }
  ]
};

const complexityOptions = [
  { id: "basic", name: "Básico", multiplier: 1, duration: "2-3 meses", description: "Funcionalidades estándar" },
  { id: "medium", name: "Medio", multiplier: 1.3, duration: "3-5 meses", description: "Funcionalidades avanzadas" },
  { id: "complex", name: "Complejo", multiplier: 1.6, duration: "5-8 meses", description: "Alta complejidad técnica" },
  { id: "enterprise", name: "Enterprise", multiplier: 2, duration: "8+ meses", description: "Solución empresarial completa" }
];

export default function CalculadoraPresupuestoPage() {
  const [step, setStep] = useState(1);
  const [selectedProjectType, setSelectedProjectType] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [complexity, setComplexity] = useState<string>("medium");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    description: ""
  });

  const totalSteps = 4;

  const calculateTotal = () => {
    if (!selectedProjectType) return 0;

    const projectType = projectTypes.find(p => p.id === selectedProjectType);
    if (!projectType) return 0;

    let total = projectType.basePrice;

    // Add features
    const features = featuresByType[selectedProjectType] || [];
    selectedFeatures.forEach(featureId => {
      const feature = features.find(f => f.id === featureId);
      if (feature) {
        total += feature.price;
      }
    });

    // Apply complexity multiplier
    const complexityOption = complexityOptions.find(c => c.id === complexity);
    if (complexityOption) {
      total *= complexityOption.multiplier;
    }

    return Math.round(total);
  };

  const handleFeatureToggle = (featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSubmit = async () => {
    const total = calculateTotal();
    const projectType = projectTypes.find(p => p.id === selectedProjectType);
    const complexityOption = complexityOptions.find(c => c.id === complexity);

    // Aquí podrías enviar a tu backend o servicio de email
    console.log({
      ...formData,
      projectType: projectType?.name,
      features: selectedFeatures,
      complexity: complexityOption?.name,
      estimatedBudget: total
    });

    // Ir al paso de confirmación
    setStep(5);
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Header */}
      <section className="py-12 border-b bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <Badge className="bg-blue-600 text-white">
              <Calculator className="w-4 h-4 mr-2 inline" />
              Calculadora de Presupuestos
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Calcula tu Presupuesto en <span className="text-blue-600">3 Minutos</span>
            </h1>
            <p className="text-lg text-gray-600">
              Obtén una estimación personalizada según tus necesidades específicas
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      {step <= totalSteps && (
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Paso {step} de {totalSteps}</span>
                <span className="text-sm font-medium text-blue-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Project Type */}
          {step === 1 && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">¿Qué tipo de proyecto necesitas?</CardTitle>
                <CardDescription>Selecciona la categoría que mejor se ajuste a tu necesidad</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedProjectType(type.id)}
                      className={`p-6 rounded-lg border-2 transition-all text-left hover:shadow-lg ${
                        selectedProjectType === type.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${type.color} text-white`}>
                          <type.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{type.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                          <div className="flex items-center space-x-2">
                            <Euro className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">
                              Desde {type.basePrice.toLocaleString()}€
                            </span>
                          </div>
                        </div>
                        {selectedProjectType === type.id && (
                          <CheckCircle2 className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-end mt-8">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedProjectType}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Features */}
          {step === 2 && selectedProjectType && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">¿Qué funcionalidades necesitas?</CardTitle>
                <CardDescription>Selecciona todas las que apliquen (puedes elegir varias)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featuresByType[selectedProjectType]?.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left hover:shadow-md ${
                        selectedFeatures.includes(feature.id)
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{feature.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                          <span className="text-sm font-medium text-blue-600">
                            +{feature.price.toLocaleString()}€
                          </span>
                        </div>
                        {selectedFeatures.includes(feature.id) && (
                          <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={() => setStep(1)}
                    variant="outline"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Atrás
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Complexity */}
          {step === 3 && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Nivel de complejidad y plazos</CardTitle>
                <CardDescription>Selecciona el nivel que mejor describa tu proyecto</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {complexityOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setComplexity(option.id)}
                      className={`p-6 rounded-lg border-2 transition-all text-left hover:shadow-lg ${
                        complexity === option.id
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{option.name}</h3>
                          <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center text-gray-700">
                              <Clock className="w-4 h-4 mr-1" />
                              {option.duration}
                            </div>
                            <div className="flex items-center text-blue-600 font-medium">
                              <Zap className="w-4 h-4 mr-1" />
                              x{option.multiplier}
                            </div>
                          </div>
                        </div>
                        {complexity === option.id && (
                          <CheckCircle2 className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Estimated Budget Preview */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90 mb-1">Presupuesto estimado</p>
                      <p className="text-4xl font-bold">{calculateTotal().toLocaleString()}€</p>
                    </div>
                    <Calculator className="w-12 h-12 opacity-50" />
                  </div>
                  <p className="text-sm opacity-90 mt-4">
                    *Precio orientativo. El presupuesto final puede variar según requisitos específicos.
                  </p>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={() => setStep(2)}
                    variant="outline"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Atrás
                  </Button>
                  <Button
                    onClick={() => setStep(4)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Contact Information */}
          {step === 4 && (
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Recibe tu presupuesto detallado</CardTitle>
                <CardDescription>Te enviaremos un PDF con el desglose completo en menos de 24h</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="name"
                          placeholder="Juan Pérez"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="company"
                          placeholder="Mi Empresa S.L."
                          className="pl-10"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="juan@empresa.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+34 600 123 456"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Cuéntanos más sobre tu proyecto (opcional)</Label>
                    <Textarea
                      id="description"
                      placeholder="Detalles adicionales, requisitos especiales, objetivos del proyecto..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-gray-700">
                        <p className="font-medium mb-1">Protegemos tu privacidad</p>
                        <p className="text-gray-600">
                          Tus datos están seguros y solo los usaremos para enviarte el presupuesto.
                          No compartimos información con terceros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    onClick={() => setStep(3)}
                    variant="outline"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Atrás
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Enviar Solicitud
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Confirmation */}
          {step === 5 && (
            <Card className="border-2 border-green-200 bg-green-50/50">
              <CardContent className="pt-12 pb-12">
                <div className="text-center space-y-6">
                  <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      ¡Solicitud Enviada!
                    </h2>
                    <p className="text-lg text-gray-600">
                      Gracias por confiar en PLUS TECNOLOGIA
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
                    <h3 className="font-semibold text-gray-900 mb-4">Resumen de tu solicitud:</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Proyecto:</span>
                        <span className="font-medium">
                          {projectTypes.find(p => p.id === selectedProjectType)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Funcionalidades:</span>
                        <span className="font-medium">{selectedFeatures.length} seleccionadas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Complejidad:</span>
                        <span className="font-medium">
                          {complexityOptions.find(c => c.id === complexity)?.name}
                        </span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="text-gray-900 font-semibold">Presupuesto estimado:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          {calculateTotal().toLocaleString()}€
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Te enviaremos el presupuesto detallado a <strong>{formData.email}</strong> en menos de 24 horas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contacto">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Agendar Videollamada
                        </Button>
                      </Link>
                      <Link href="/">
                        <Button variant="outline">
                          Volver al Inicio
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
        </div>
      </footer>

      <WhatsAppChat />
    </div>
  );
}
