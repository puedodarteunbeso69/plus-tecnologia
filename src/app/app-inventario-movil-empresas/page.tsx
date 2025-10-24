import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Package, QrCode, Smartphone, BarChart, Zap, ArrowRight, Scan, TrendingUp, Database } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "App Móvil de Inventario para Empresas Madrid | Gestión Stock Tiempo Real 2025",
  description: "Desarrollo de apps móviles de inventario y gestión de stock para empresas. Lectura códigos de barras/QR, sincronización tiempo real con ERP. Desde 6.500€.",
  keywords: [
    "app inventario móvil empresas",
    "aplicación gestión stock Madrid",
    "app códigos barras inventario",
    "software inventario móvil",
    "app control stock tiempo real",
    "aplicación almacén móvil",
    "app scanner inventario",
    "gestión inventario tablet",
    "app inventario Android iOS",
    "desarrollo app inventario empresarial"
  ],
  openGraph: {
    title: "App Móvil Inventario Empresas | PLUS TECNOLOGIA",
    description: "Apps de inventario con scanner barras/QR. Sincronización ERP tiempo real. Desde 6.500€.",
    images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  alternates: {
    canonical: "https://plustecnologia.com/app-inventario-movil-empresas"
  }
};

const inventoryFeatures = [
  {
    icon: Scan,
    title: "Scanner Códigos Barras/QR",
    description: "Cámara integrada. Lee EAN, UPC, QR. Búsqueda instantánea de productos. Compatible con scanners Bluetooth."
  },
  {
    icon: Database,
    title: "Sincronización ERP Tiempo Real",
    description: "Conectado con tu ERP/gestión. Actualizaciones instantáneas. Stock siempre al día en toda la empresa."
  },
  {
    icon: Package,
    title: "Gestión Completa Stock",
    description: "Entradas/salidas, traspasos entre almacenes, inventarios cíclicos, alertas stock mínimo, lotes y caducidades."
  },
  {
    icon: Zap,
    title: "Modo Offline",
    description: "Funciona sin internet. Sincroniza cuando vuelve conexión. Ideal para almacenes sin WiFi estable."
  },
  {
    icon: BarChart,
    title: "Informes y Analytics",
    description: "Dashboards en tiempo real. Rotación productos, valoración stock, movimientos históricos, exportación Excel."
  },
  {
    icon: TrendingUp,
    title: "Trazabilidad Completa",
    description: "Historial completo de movimientos. Quién, cuándo, dónde. Auditoría de inventarios. Cumplimiento normativas."
  }
];

const industries = [
  {
    name: "Retail y Distribución",
    useCase: "Control stock tiendas, traspasos entre puntos de venta, inventarios rápidos",
    icon: "🛒"
  },
  {
    name: "Almacenes y Logística",
    useCase: "Recepciones, expediciones, ubicaciones, picking optimizado, crossdocking",
    icon: "📦"
  },
  {
    name: "Manufactura",
    useCase: "Control materias primas, WIP, productos terminados, trazabilidad lotes",
    icon: "🏭"
  },
  {
    name: "Alimentación",
    useCase: "Control caducidades, FIFO/FEFO, trazabilidad sanitaria, gestión frío",
    icon: "🍎"
  },
  {
    name: "Farmacéuticas",
    useCase: "Lotes, caducidades, serialización, cumplimiento normativa AEMPS",
    icon: "💊"
  },
  {
    name: "E-commerce",
    useCase: "Preparación pedidos, packing, integración marketplaces, dropshipping",
    icon: "📱"
  }
];

const packages = [
  {
    name: "App Inventario Básica",
    price: "6.500€",
    timeline: "6-8 semanas",
    features: [
      "Scanner códigos barras/QR",
      "Consulta stock en tiempo real",
      "Entradas y salidas básicas",
      "Búsqueda productos",
      "Sincronización API REST",
      "iOS + Android",
      "3 meses soporte"
    ],
    ideal: "PYMEs, almacenes pequeños"
  },
  {
    name: "App Inventario Pro",
    price: "10.000€",
    timeline: "10-12 semanas",
    features: [
      "Todo de Básica +",
      "Modo offline completo",
      "Traspasos multi-almacén",
      "Inventarios cíclicos",
      "Alertas stock mínimo",
      "Informes y dashboard",
      "Roles y permisos usuarios",
      "6 meses soporte"
    ],
    ideal: "Empresas medianas, multi-sede",
    highlighted: true
  },
  {
    name: "App Inventario Enterprise",
    price: "Desde 15.000€",
    timeline: "14-18 semanas",
    features: [
      "Todo de Pro +",
      "Integración SAP/Sage/Odoo",
      "Picking guiado optimizado",
      "Trazabilidad lotes/series",
      "RFID y scanner industrial",
      "BI avanzado y predicciones",
      "Multi-idioma y multi-moneda",
      "12 meses soporte premium"
    ],
    ideal: "Grandes empresas, logística compleja"
  }
];

const developmentProcess = [
  { step: "1", title: "Análisis Procesos", description: "Entendemos tus flujos actuales. Qué se hace manual, qué automatizar." },
  { step: "2", title: "Diseño UX Almacén", description: "Interfaces simples para almaceneros. Flujos rápidos, pocos clicks." },
  { step: "3", title: "Integración ERP", description: "Conectamos con tu sistema gestión. API robusta bidireccional." },
  { step: "4", title: "Testing Real", description: "Pruebas en tu almacén real. Con tus productos, tus scanners." },
  { step: "5", title: "Formación Equipo", description: "Capacitamos a almaceneros y managers. Manuales y soporte." },
  { step: "6", title: "Go-Live + Soporte", description: "Lanzamiento progresivo. Soporte intensivo primer mes." }
];

const faqs = [
  {
    question: "¿Cuánto cuesta desarrollar una app de inventario móvil?",
    answer: "Desde 6.500€ para app básica (scanner barras + consultas stock) hasta 15.000€+ para soluciones enterprise con trazabilidad completa, integración ERP compleja, y picking optimizado. Precio depende de: funcionalidades (offline, multi-almacén, lotes), complejidad integración ERP, número de usuarios simultáneos, y si necesita scanners industriales especializados."
  },
  {
    question: "¿Se integra con mi ERP/software de gestión actual?",
    answer: "Sí. Integramos con los principales ERPs: SAP Business One, Sage 200/X3, Microsoft Dynamics, Odoo, Holded, A3, y prácticamente cualquier sistema con API REST/SOAP o base de datos accesible. Si tu ERP es muy antiguo o custom, podemos crear capa de integración middleware. Análisis de viabilidad incluido en consulta gratuita."
  },
  {
    question: "¿Funciona sin conexión a internet (offline)?",
    answer: "Sí (en paquetes Pro y Enterprise). La app guarda datos localmente en el dispositivo y sincroniza cuando detecta conexión. Ideal para almacenes con WiFi inestable o zonas sin cobertura. En modo offline puedes: escanear productos, registrar movimientos, hacer inventarios. Al conectar, todo se sincroniza automáticamente con el ERP."
  },
  {
    question: "¿Qué dispositivos y scanners son compatibles?",
    answer: "Compatible con: 1) Smartphones/tablets iOS y Android (usa cámara como scanner). 2) Scanners Bluetooth profesionales (Symbol/Zebra, Honeywell) vía Bluetooth. 3) PDAs industriales Android (Zebra TC52, Honeywell EDA52). 4) Tablets ruggedizadas para almacén. Recomendamos dispositivos según tu entorno: oficina normal vs almacén industrial duro."
  }
];

export default function AppInventarioMovilEmpresasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "App Móvil Inventario Empresas",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "6500",
              "priceCurrency": "EUR"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "PLUS TECNOLOGIA",
              "telephone": "+34915493616"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-cyan-600 text-white border-cyan-700">
                <Package className="w-4 h-4 mr-2" />
                App Inventario Móvil
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                App Móvil de <span className="text-cyan-600">Inventario</span> para Empresas
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Gestión de <strong>stock desde tablet o smartphone</strong>.
                Scanner códigos de barras/QR, sincronización tiempo real con ERP, modo offline.
                <strong className="text-cyan-600"> Controla tu almacén desde cualquier lugar</strong>.
                <strong className="text-cyan-600"> Desde 6.500€</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-lg px-8">
                  <Link href="/contacto">
                    Demo Gratuita
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">
                    Calcular Precio
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Scanner QR</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Tiempo Real</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Modo Offline</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
                alt="App móvil inventario gestión stock código barras QR empresas"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades <span className="text-cyan-600">Clave</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo que necesitas para gestionar inventario desde móvil
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inventoryFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sectores que <span className="text-cyan-600">Usamos</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{industry.icon}</div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                  <CardDescription className="text-sm">{industry.useCase}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proceso de <span className="text-cyan-600">Desarrollo</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {developmentProcess.map((phase, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
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
              Paquetes <span className="text-cyan-600">App Inventario</span>
            </h2>
            <p className="text-xl text-gray-600">
              Precio según funcionalidades y complejidad integración
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-cyan-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && (
                    <Badge className="bg-cyan-600 text-white mb-2 w-fit">Más Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-cyan-600 mt-4">{pkg.price}</div>
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
                    <Button asChild className={pkg.highlighted ? "w-full bg-cyan-600" : "w-full"}>
                      <Link href="/contacto">Solicitar Demo</Link>
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
              Preguntas <span className="text-cyan-600">Frecuentes</span>
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Digitaliza tu Inventario Ahora
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Demo gratuita. Te mostramos cómo funciona con tus productos y procesos reales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contacto">
                Solicitar Demo
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
