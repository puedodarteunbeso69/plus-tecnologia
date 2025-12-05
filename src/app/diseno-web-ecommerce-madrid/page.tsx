import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ShoppingCart, TrendingUp, Zap, Shield, Star, ArrowRight, Euro } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Diseño Web para Tiendas Online en Madrid | Ecommerce Profesional 2025",
  description: "Diseño y desarrollo de tiendas online en Madrid. WooCommerce, Shopify, Prestashop. Aumenta tus ventas online con ecommerce optimizado para conversión. Desde 2.500€.",
  keywords: [
    "diseño web ecommerce Madrid",
    "tienda online Madrid",
    "desarrollo ecommerce",
    "diseño tienda online profesional",
    "WooCommerce Madrid",
    "Shopify desarrollo",
    "diseño web para vender online",
    "ecommerce con pasarela de pago",
    "tienda online con gestión stock",
    "desarrollo web comercio electrónico Madrid"
  ],
  openGraph: {
    title: "Diseño Web para Tiendas Online en Madrid | PLUS TECNOLOGIA",
    description: "Creamos tiendas online que venden. WooCommerce, Shopify, diseño optimizado para conversión. Desde 2.500€.",
    images: ["https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño Web Ecommerce Madrid - Tiendas Online Profesionales",
    description: "Desarrollo de tiendas online en Madrid. WooCommerce, Shopify. Aumenta ventas online.",
    images: ["https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://plustecnologia.com/diseno-web-ecommerce-madrid"
  }
};

const ecommerceFeatures = [
  {
    icon: ShoppingCart,
    title: "Catálogo de Productos Ilimitados",
    description: "Gestiona miles de productos con categorías, variantes, stock automático y búsqueda avanzada."
  },
  {
    icon: Shield,
    title: "Pasarelas de Pago Seguras",
    description: "Integración con Stripe, PayPal, Redsys, Bizum. Pagos seguros con certificado SSL incluido."
  },
  {
    icon: TrendingUp,
    title: "Optimizado para Conversión",
    description: "Diseño UX enfocado en ventas. Checkout simplificado, carrito persistente, emails automáticos."
  },
  {
    icon: Zap,
    title: "Carga Ultrarrápida",
    description: "Tiendas optimizadas para Core Web Vitals. Menos de 2 segundos de carga = más ventas."
  },
  {
    icon: Star,
    title: "SEO Ecommerce Avanzado",
    description: "Schema.org Product, rich snippets, URLs amigables, meta automático por producto."
  },
  {
    icon: Euro,
    title: "Sincronización ERP/CRM",
    description: "Conectamos tu tienda con tu gestión: stock real-time, pedidos automáticos al ERP."
  }
];

const platforms = [
  {
    name: "WooCommerce",
    price: "Desde 2.500€",
    bestFor: "WordPress usuarios, flexibilidad total",
    features: ["Sin comisiones por venta", "100% personalizable", "Miles de plugins", "Ideal PYMES"],
    icon: "🛒"
  },
  {
    name: "Shopify",
    price: "Desde 3.200€",
    bestFor: "Dropshipping, escalabilidad rápida",
    features: ["Todo incluido", "App móvil nativa", "Themes premium", "Soporte 24/7"],
    icon: "🛍️"
  },
  {
    name: "Prestashop",
    price: "Desde 3.000€",
    bestFor: "Catálogos grandes, multiidioma",
    features: ["Open source", "B2B/B2C", "Multi-tienda", "Gestión avanzada"],
    icon: "🏪"
  },
  {
    name: "Custom Next.js",
    price: "Desde 5.000€",
    bestFor: "Máximo rendimiento y SEO",
    features: ["Headless commerce", "Performance 100/100", "Escalabilidad infinita", "API first"],
    icon: "⚡"
  }
];

const caseStudies = [
  {
    client: "Fashion Store Madrid",
    sector: "Moda y complementos",
    results: {
      sales: "+245% ventas en 6 meses",
      conversion: "3.8% tasa conversión",
      speed: "1.2s tiempo carga"
    },
    platform: "WooCommerce + Stripe",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
  },
  {
    client: "Gourmet Online",
    sector: "Alimentación gourmet",
    results: {
      sales: "+180% pedidos mensuales",
      conversion: "4.2% conversión",
      aov: "85€ ticket medio"
    },
    platform: "Shopify + Klaviyo",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop"
  }
];

const faqs = [
  {
    question: "¿Cuánto cuesta crear una tienda online en Madrid?",
    answer: "Desde 2.500€ para WooCommerce básico hasta 8.000€+ para tiendas custom con integraciones complejas. Depende de número de productos, integraciones con ERP/CRM, pasarelas de pago y funcionalidades específicas."
  },
  {
    question: "¿Cuánto se tarda en lanzar un ecommerce?",
    answer: "WooCommerce básico: 3-4 semanas. Shopify: 4-5 semanas. Desarrollo custom: 8-12 semanas. Incluye diseño, desarrollo, contenido, testing y formación."
  },
  {
    question: "¿Qué pasarela de pago es mejor para mi tienda?",
    answer: "Stripe: ideal internacional, comisión 1.4%+0.25€. Redsys: bancos españoles, comisión negociable. PayPal: reconocimiento marca. Bizum: pagos móviles España. Recomendamos ofrecer mínimo 2-3 opciones."
  },
  {
    question: "¿Incluyen gestión de stock y envíos?",
    answer: "Sí. Gestión de stock automática con alertas. Integración con SEUR, Correos, MRW para cálculo automático de envíos y seguimiento de pedidos."
  }
];

export default function DisenoWebEcommerceMadridPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Diseño Web Ecommerce",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PLUS TECNOLOGIA",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C. de Orense, 68, 12º",
                "addressLocality": "Madrid",
                "postalCode": "28020",
                "addressCountry": "ES"
              },
              "telephone": "+34915493616"
            },
            "areaServed": "Madrid",
            "description": "Diseño y desarrollo de tiendas online en Madrid. WooCommerce, Shopify, Prestashop.",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€€",
              "priceCurrency": "EUR",
              "price": "2500"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Ecommerce Profesional Madrid
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Diseño Web para <span className="text-blue-600">Tiendas Online</span> en Madrid
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Creamos tiendas online que <strong>venden de verdad</strong>. WooCommerce, Shopify, Prestashop.
                Diseño optimizado para conversión, pasarelas de pago seguras y gestión completa de productos.
                <strong className="text-blue-600"> Desde 2.500€</strong>.
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
                    Calcular Precio
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">SSL Incluido</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">SEO Optimizado</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Responsive</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
                alt="Diseño tienda online profesional Madrid"
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
              Todo lo que Necesita tu <span className="text-blue-600">Tienda Online</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ecommerce completo: desde catálogo hasta pasarelas de pago. Diseño enfocado en maximizar ventas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
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

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plataformas <span className="text-blue-600">Ecommerce</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elegimos la plataforma perfecta según tus necesidades, presupuesto y objetivos de negocio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600 mt-2">{platform.price}</div>
                  <CardDescription className="text-sm italic">{platform.bestFor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Casos de <span className="text-blue-600">Éxito</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tiendas online en Madrid que aumentaron sus ventas con nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={`Caso de éxito ${study.client}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{study.client}</CardTitle>
                  <CardDescription>{study.sector}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{study.results.sales}</div>
                      <div className="text-xs text-gray-600">Ventas</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{study.results.conversion}</div>
                      <div className="text-xs text-gray-600">Conversión</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">{study.results.speed || study.results.aov}</div>
                      <div className="text-xs text-gray-600">{study.results.speed ? "Carga" : "Ticket"}</div>
                    </div>
                  </div>
                  <Badge variant="secondary">{study.platform}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para Vender Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita para analizar tu proyecto. Te mostramos ejemplos, presupuesto sin compromiso y roadmap de lanzamiento.
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
                Llamar Ahora: 915 493 616
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
