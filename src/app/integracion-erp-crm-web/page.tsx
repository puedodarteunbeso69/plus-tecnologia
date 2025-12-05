import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Database, Workflow, Zap, Clock, Shield, ArrowRight, RefreshCw, BarChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Integración ERP/CRM con Web Madrid | Sincronización Automática Datos 2025",
  description: "Integración profesional de ERP y CRM con tu web/app. SAP, Salesforce, HubSpot, Odoo, Sage. Sincronización tiempo real. Desde 2.000€.",
  keywords: [
    "integración ERP CRM web Madrid",
    "conectar ERP con página web",
    "sincronización automática ERP",
    "integración Salesforce web",
    "conectar SAP con ecommerce",
    "API integración ERP",
    "sincronización datos CRM web",
    "integración Odoo web",
    "conectar HubSpot con web",
    "automatización ERP web"
  ],
  openGraph: {
    title: "Integración ERP/CRM con Web | PLUS TECNOLOGIA",
    description: "Conecta tu ERP/CRM con web/app. Sincronización automática tiempo real. Desde 2.000€.",
    images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  alternates: {
    canonical: "https://plustecnologia.com/integracion-erp-crm-web"
  }
};

const integrationBenefits = [
  {
    icon: Workflow,
    title: "Sincronización Automática",
    description: "Datos actualizados en tiempo real. Stock, pedidos, clientes sincronizados entre ERP y web. Cero entrada manual."
  },
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    description: "Elimina doble entrada de datos. Automatización de procesos. Tu equipo se enfoca en vender, no en copiar datos."
  },
  {
    icon: Shield,
    title: "Cero Errores Humanos",
    description: "Sin errores de transcripción. Datos consistentes. Inventario siempre actualizado. Menos devoluciones."
  },
  {
    icon: Zap,
    title: "Respuesta Instantánea",
    description: "Clientes ven stock real-time. Pedidos llegan a ERP al instante. Facturación automática."
  },
  {
    icon: BarChart,
    title: "Visión Unificada",
    description: "Un solo dashboard. Métricas web + ERP combinadas. Decisiones con datos completos."
  },
  {
    icon: Database,
    title: "Escalabilidad",
    description: "Crece sin límites. API robusta. Maneja miles de transacciones diarias sin caídas."
  }
];

const supportedSystems = [
  {
    category: "ERP Empresariales",
    systems: ["SAP Business One", "Microsoft Dynamics 365", "Oracle NetSuite", "Sage 200/X3", "Holded"],
    icon: Database
  },
  {
    category: "CRM Principales",
    systems: ["Salesforce", "HubSpot", "Zoho CRM", "Pipedrive", "ActiveCampaign"],
    icon: BarChart
  },
  {
    category: "ERP Open Source",
    systems: ["Odoo", "Dolibarr", "ERPNext", "OpenBravo"],
    icon: RefreshCw
  },
  {
    category: "Ecommerce Nativos",
    systems: ["PrestaShop", "WooCommerce", "Shopify", "Magento"],
    icon: Workflow
  }
];

const packages = [
  {
    name: "Integración Básica",
    price: "2.000€",
    timeline: "2-3 semanas",
    features: [
      "1 sistema (ERP o CRM)",
      "Sincronización unidireccional",
      "2-3 entidades (productos, pedidos)",
      "API REST/SOAP",
      "Testing completo",
      "Documentación técnica",
      "1 mes soporte"
    ],
    ideal: "Sincronización simple, datos maestros"
  },
  {
    name: "Integración Profesional",
    price: "4.500€",
    timeline: "4-6 semanas",
    features: [
      "2 sistemas (ERP + CRM)",
      "Sincronización bidireccional",
      "5-7 entidades complejas",
      "Webhook en tiempo real",
      "Cola de mensajes robusto",
      "Dashboard monitoreo",
      "3 meses soporte"
    ],
    ideal: "Ecommerce + ERP completo",
    highlighted: true
  },
  {
    name: "Integración Enterprise",
    price: "Desde 8.000€",
    timeline: "8-12 semanas",
    features: [
      "Múltiples sistemas integrados",
      "Arquitectura microservicios",
      "ETL personalizado",
      "Lógica negocio compleja",
      "Alta disponibilidad 99.9%",
      "Integración continua CI/CD",
      "12 meses soporte premium"
    ],
    ideal: "Ecosistemas complejos, multinacional"
  }
];

const integrationFlow = [
  { step: "1", title: "Análisis Sistemas", description: "Auditoría APIs disponibles ERP/CRM. Identificación datos a sincronizar." },
  { step: "2", title: "Diseño Arquitectura", description: "Definir flujos datos, frecuencia sincronización, manejo errores." },
  { step: "3", title: "Desarrollo API", description: "Construcción capa integración. Mapeo campos. Testing unitario." },
  { step: "4", title: "Testing Intensivo", description: "Pruebas con datos reales. Escenarios edge cases. Validación performance." },
  { step: "5", title: "Migración Datos", description: "Importación histórica si necesaria. Sincronización inicial completa." },
  { step: "6", title: "Go-Live + Monitoreo", description: "Activación producción. Monitoreo 24/7 primeros 15 días. Ajustes." }
];

const faqs = [
  {
    question: "¿Cuánto cuesta integrar mi ERP con mi tienda online?",
    answer: "Desde 2.000€ para integraciones básicas (ej: sincronizar productos y stock de ERP a web) hasta 8.000€+ para integraciones enterprise bidireccionales completas (productos, clientes, pedidos, facturas, analíticas). El precio depende de: 1) Complejidad del ERP (SAP más complejo que Odoo), 2) Número de entidades a sincronizar, 3) Frecuencia actualización (tiempo real vs batch diario), 4) Lógica de negocio custom."
  },
  {
    question: "¿Mi ERP/CRM tiene API disponible para integrar?",
    answer: "El 95% de ERPs/CRMs modernos tienen API REST o SOAP. Sistemas cloud como Salesforce, HubSpot, Odoo tienen APIs robustas bien documentadas. ERPs legacy (SAP R/3, AS400) pueden requerir middleware adicional. Hacemos análisis previo gratuito para confirmar viabilidad técnica y complejidad de tu sistema específico."
  },
  {
    question: "¿La integración funciona en tiempo real o tiene retrasos?",
    answer: "Ofrecemos ambas opciones según necesidad: 1) Tiempo real (webhooks): cambio en web → ERP actualizado en <5 segundos. Ideal para pedidos, stock crítico. 2) Near real-time (polling cada 5-15 min): para datos menos críticos. 3) Batch programado (1-2 veces/día): para datos maestros que no cambian frecuentemente. Recomendación según caso de uso y coste."
  },
  {
    question: "¿Qué pasa si mi ERP se cae o la API falla?",
    answer: "Implementamos arquitectura resiliente: 1) Cola de mensajes: si ERP cae, datos se encolan y procesan cuando vuelve. 2) Reintentos automáticos con backoff exponencial. 3) Alertas automáticas vía email/Slack si fallo persiste. 4) Logs detallados para debugging. 5) Fallback a modo manual temporal si necesario. Dashboard muestra estado integración en tiempo real."
  }
];

export default function IntegracionERPCRMWebPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Integración ERP/CRM con Web",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PLUS TECNOLOGIA",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Madrid",
                "addressCountry": "ES"
              },
              "telephone": "+34915493616"
            },
            "areaServed": "España",
            "description": "Integración profesional de sistemas ERP y CRM con aplicaciones web",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€€",
              "priceCurrency": "EUR",
              "price": "2000"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-600 text-white border-blue-700">
                <Database className="w-4 h-4 mr-2" />
                Integración ERP/CRM
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Integración <span className="text-blue-600">ERP/CRM</span> con tu Web
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Conecta tu <strong>ERP o CRM</strong> con tu web/app.
                Sincronización automática de stock, pedidos, clientes.
                <strong className="text-blue-600"> Elimina doble entrada de datos</strong>.
                SAP, Salesforce, Odoo, HubSpot compatible.
                <strong className="text-blue-600"> Desde 2.000€</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  <Link href="/contacto">
                    Consulta Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">
                    Calcular Integración
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Tiempo Real</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Cero Errores</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Automático</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Integración ERP CRM con web sincronización automática tiempo real"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beneficios de <span className="text-blue-600">Integrar ERP/CRM</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automatiza procesos, elimina errores, ahorra tiempo y dinero
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supported Systems */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sistemas <span className="text-blue-600">Compatibles</span>
            </h2>
            <p className="text-xl text-gray-600">
              Integramos con los principales ERP y CRM del mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportedSystems.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.systems.map((system, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{system}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Flow */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proceso de <span className="text-blue-600">Integración</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {integrationFlow.map((phase, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                    {phase.step}
                  </div>
                  <CardTitle className="text-lg mt-2">{phase.title}</CardTitle>
                  <CardDescription className="text-sm">{phase.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes <span className="text-blue-600">Integración</span>
            </h2>
            <p className="text-xl text-gray-600">
              Precio según complejidad del sistema y entidades a sincronizar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-blue-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && (
                    <Badge className="bg-blue-600 text-white mb-2 w-fit">Más Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mt-4">{pkg.price}</div>
                  <CardDescription className="text-gray-600">{pkg.timeline}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-4">Ideal: <strong>{pkg.ideal}</strong></p>
                    <Button asChild className={pkg.highlighted ? "w-full bg-blue-600" : "w-full"}>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preguntas <span className="text-blue-600">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Automatiza tu Negocio con Integración ERP/CRM
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Analizamos tu ERP/CRM actual y te mostramos cómo integrarlo con tu web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contacto">
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white/20">
              <Link href="tel:+34915493616">
                Llamar: 915 493 616
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
