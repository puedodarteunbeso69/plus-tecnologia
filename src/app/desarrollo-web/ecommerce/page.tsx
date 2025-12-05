import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Navigation } from "@/components/Navigation";
import {
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Shield,
  Truck,
  CreditCard,
  BarChart3,
  Smartphone,
  Globe,
  Zap,
  Users,
  TrendingUp,
  Award,
  Star
} from "lucide-react";

export const metadata = {
  title: "E-commerce y Tiendas Online | PLUS TECNOLOGIA",
  description:
    "Desarrollo de tiendas online profesionales con Shopify, WooCommerce y headless commerce. Optimización de conversión, pagos seguros y escalabilidad garantizada.",
};

const ecommerceServices = [
  {
    icon: ShoppingCart,
    title: "Tienda Online Completa",
    description: "E-commerce profesional con gestión de productos, stock, pedidos y clientes. Diseño optimizado para conversión.",
    features: ["Catálogo de productos", "Gestión de stock", "Panel de administración", "SEO integrado"],
    platforms: ["Shopify", "WooCommerce"],
    price: "Desde 8.000€",
    timeline: "6-10 semanas"
  },
  {
    icon: Smartphone,
    title: "E-commerce Móvil",
    description: "Tiendas optimizadas para móvil con PWA, app nativa opcional y experiencia de compra fluida.",
    features: ["PWA incluida", "Diseño mobile-first", "App nativa opcional", "Push notifications"],
    platforms: ["Shopify Plus", "Headless"],
    price: "Desde 12.000€",
    timeline: "8-12 semanas"
  },
  {
    icon: Globe,
    title: "Marketplace & B2B",
    description: "Plataformas complejas para múltiples vendedores, B2B, suscripciones y modelos de negocio avanzados.",
    features: ["Multi-vendor", "B2B pricing", "Suscripciones", "Integraciones ERP"],
    platforms: ["Custom", "Shopify Plus"],
    price: "Desde 25.000€",
    timeline: "12-20 semanas"
  }
];

const ecommercePlatforms = [
  {
    name: "Shopify",
    description: "Plataforma líder mundial para e-commerce",
    features: ["Setup rápido", "Escalabilidad", "Apps integradas", "Soporte 24/7"],
    bestFor: "Startups y medianas empresas",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
  },
  {
    name: "WooCommerce",
    description: "Máxima flexibilidad con WordPress",
    features: ["100% personalizable", "Miles de plugins", "SEO optimizado", "Sin comisiones"],
    bestFor: "Empresas que necesitan control total",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
  },
  {
    name: "Headless Commerce",
    description: "Máximo rendimiento y flexibilidad",
    features: ["Ultra rápido", "Multi-canal", "API-first", "Escalabilidad infinita"],
    bestFor: "Grandes empresas y alto tráfico",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop"
  }
];

const conversionFeatures = [
  { icon: CreditCard, title: "Pagos Seguros", desc: "Stripe, PayPal, TPV, Apple Pay, Google Pay y métodos locales." },
  { icon: Truck, title: "Logística Avanzada", desc: "Integración con Correos, SEUR, MRW. Seguimiento y devoluciones automatizadas." },
  { icon: Shield, title: "Seguridad PCI", desc: "Cumplimiento PCI DSS, SSL, protección anti-fraude y backup automático." },
  { icon: BarChart3, title: "Analítica & CRO", desc: "Google Analytics 4, heatmaps, A/B testing y optimización de conversión." },
  { icon: Zap, title: "Performance", desc: "Core Web Vitals >90, CDN global, lazy loading y optimización de imágenes." },
  { icon: Users, title: "Marketing", desc: "Email marketing, retargeting, cupones, programa de fidelización integrado." }
];

const successCases = [
  {
    title: "Moda Online",
    description: "Tienda de ropa con 2000+ productos",
    results: ["400% aumento ventas online", "2.1s tiempo de carga", "5.8% tasa conversión"],
    platform: "Shopify Plus",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop"
  },
  {
    title: "Electrónicos B2B",
    description: "Marketplace B2B con pricing dinámico",
    results: ["€2.5M+ facturación anual", "1,200+ clientes B2B", "98% satisfacción"],
    platform: "WooCommerce Custom",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop"
  },
  {
    title: "Alimentación Local",
    description: "E-commerce con entrega local",
    results: ["300+ pedidos/día", "15min tiempo entrega", "4.9/5 valoración"],
    platform: "Shopify + Apps",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop"
  }
];

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/desarrollo-web" className="text-gray-500 hover:text-blue-600">Desarrollo Web</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">E-commerce</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <Badge className="bg-green-100 text-green-700 border-green-200">
              <ShoppingCart className="w-4 h-4 mr-2" /> Tiendas Online que Venden
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Tiendas Online que <span className="text-green-600">Venden Más</span>
            </h1>
            <p className="text-lg text-gray-600">
              Desarrollamos e-commerce profesionales optimizados para maximizar ventas. Desde Shopify hasta soluciones headless personalizadas.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">5.8%</div>
                <div className="text-sm text-gray-600">Conversión Media</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">400%</div>
                <div className="text-sm text-gray-600">ROI Promedio</div>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-green-600 hover:bg-green-700">
                  Consulta E-commerce Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="default" className="h-12 px-6 text-base" variant="outline">Ver Casos de Éxito</Button>
              </Link>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-600">100+ Tiendas</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">98% Satisfacción</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop&auto=format&q=85"
              alt="Tienda online profesional"
              width={900}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Servicios de <span className="text-green-600">E-commerce</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde tiendas básicas hasta marketplaces complejos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {ecommerceServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                      <span className="text-gray-500">Plataformas:</span>
                      <span className="font-medium">{service.platforms.join(", ")}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duración:</span>
                      <span className="font-medium">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Precio:</span>
                      <span className="font-semibold text-green-600">{service.price}</span>
                    </div>
                  </div>

                  <Link href="/contacto">
                    <Button className="w-full mt-auto bg-green-600 hover:bg-green-700">
                      Solicitar Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="text-green-600">Plataformas</span> que Dominamos
            </h2>
            <p className="text-xl text-gray-600">Elegimos la tecnología perfecta para tu negocio</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {ecommercePlatforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <div className="relative h-24 sm:h-32sm:h-40">
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{platform.name}</CardTitle>
                  <CardDescription>{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {platform.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-sm">
                        <span className="text-gray-500">Ideal para: </span>
                        <span className="font-medium">{platform.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Features */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Optimización para <span className="text-green-600">Conversión</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {conversionFeatures.map((f, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <f.icon className="h-10 w-10 mx-auto text-green-600" />
                  <CardTitle className="text-lg">{f.title}</CardTitle>
                  <CardDescription>{f.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Casos de <span className="text-green-600">Éxito</span>
            </h2>
            <p className="text-xl text-gray-600">Resultados reales de nuestros clientes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {successCases.map((case_, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-24 sm:h-32sm:h-40">
                  <Image
                    src={case_.image}
                    alt={case_.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{case_.title}</CardTitle>
                  <CardDescription>{case_.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {case_.results.map((result, idx) => (
                      <div key={idx} className="text-sm font-medium text-green-600">
                        • {result}
                      </div>
                    ))}
                    <div className="border-t pt-3">
                      <Badge variant="secondary" className="text-xs">
                        {case_.platform}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              ¿Listo para Lanzar tu Tienda Online?
            </h2>
            <p className="text-xl text-green-100">
              Consulta gratuita de 30 minutos para definir tu estrategia e-commerce
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 justify-center">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-white text-green-600 hover:bg-gray-100 text-lg px-8">
                  Consulta E-commerce Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="h-12 px-6 text-base border-white text-white hover:bg-white hover:text-green-600 text-lg px-8">
                  Ver Más Casos de Éxito
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
