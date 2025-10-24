import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building2, Euro, TrendingUp, Shield, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo Web para PYMES | Precio Transparente desde 2.500€ Madrid",
  description: "Diseño y desarrollo web profesional para PYMES en Madrid. Precio cerrado sin sorpresas, hosting incluido, SEO optimizado. Tu web en 4 semanas. Desde 2.500€.",
  keywords: [
    "desarrollo web pymes Madrid",
    "precio página web pyme",
    "cuánto cuesta web empresa pequeña",
    "diseño web económico pymes",
    "web para autónomos precio",
    "desarrollo web asequible Madrid",
    "presupuesto web pyme",
    "web profesional precio cerrado"
  ],
  openGraph: {
    title: "Desarrollo Web PYMES Precio Transparente | PLUS TECNOLOGIA",
    description: "Web profesional para tu PYME desde 2.500€. Precio cerrado, hosting incluido, SEO.",
    images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=630&fit=crop"]
  },
  alternates: { canonical: "https://plustecnologia.com/desarrollo-web-pymes-precio" }
};

const packages = [
  {
    name: "Web Básica PYME",
    price: "2.500€",
    ideal: "Autónomos, pequeños negocios",
    features: [
      "5-7 páginas informativas",
      "Diseño responsive móvil",
      "Formulario contacto",
      "Hosting 1 año GRATIS",
      "SSL certificado incluido",
      "SEO básico on-page",
      "Google Analytics setup",
      "Formación uso web"
    ],
    popular: false
  },
  {
    name: "Web Profesional PYME",
    price: "4.200€",
    ideal: "Empresas 10-50 empleados",
    features: [
      "10-15 páginas completas",
      "Diseño 100% personalizado",
      "Blog integrado",
      "Chat en vivo (Tawk.to)",
      "Hosting + Email corporativo",
      "SEO avanzado + Schema.org",
      "Integración Google My Business",
      "Soporte 3 meses GRATIS"
    ],
    popular: true
  },
  {
    name: "Web + Tienda Online",
    price: "5.800€",
    ideal: "Comercios con venta online",
    features: [
      "Todo de Profesional +",
      "Ecommerce WooCommerce",
      "Pasarela pago (Stripe/Redsys)",
      "Gestión productos ilimitados",
      "Cálculo envíos automático",
      "Email marketing setup",
      "Training ecommerce completo",
      "Soporte 6 meses GRATIS"
    ],
    popular: false
  }
];

const benefits = [
  {
    icon: Euro,
    title: "Precio Cerrado, Sin Sorpresas",
    description: "Presupuesto fijo acordado. No hay extras ocultos ni costos inesperados al final."
  },
  {
    icon: Zap,
    title: "Entrega en 4 Semanas",
    description: "Tu web online en 30 días. Cronograma claro desde el día 1."
  },
  {
    icon: Shield,
    title: "Hosting Primer Año Incluido",
    description: "No pagas hosting extra. Servidor en España, rápido y seguro."
  },
  {
    icon: TrendingUp,
    title: "SEO Optimizado desde Inicio",
    description: "No solo bonita: tu web aparecerá en Google. SEO técnico incluido."
  }
];

const faqs = [
  {
    q: "¿Qué incluye exactamente el precio de 2.500€?",
    a: "Diseño web responsive 5 páginas, formulario contacto, hosting 1 año, SSL certificado, SEO básico, formación y soporte 1 mes. Sin costos ocultos."
  },
  {
    q: "¿Cuánto tiempo se tarda en tener la web lista?",
    a: "Paquete Básico: 3-4 semanas. Profesional: 4-6 semanas. Tienda Online: 6-8 semanas. Depende de la velocidad de entrega de contenidos (textos, fotos)."
  },
  {
    q: "¿Podré actualizar la web yo mismo después?",
    a: "Sí 100%. Usamos WordPress o panel admin super simple. Te damos formación personalizada de 2 horas para que sepas añadir páginas, editar textos y subir fotos."
  },
  {
    q: "¿Qué pasa después del primer año de hosting gratis?",
    a: "Hosting: 150€/año (servidor España SSD). Mantenimiento opcional: 35€/mes (actualizaciones, backups, soporte prioritario). No hay permanencia obligatoria."
  }
];

export default function DesarrolloWebPymesPrecioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Desarrollo Web PYMES",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PLUS TECNOLOGIA",
              "telephone": "+34915493616"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "2500"
            }
          })
        }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-100 text-emerald-700">
                <Building2 className="w-4 h-4 mr-2" />
                Web PYMES Precio Transparente
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo Web para <span className="text-emerald-600">PYMES</span>
              </h1>

              <p className="text-xl text-gray-600">
                Diseño web profesional para tu PYME con <strong>precio cerrado sin sorpresas</strong>.
                Hosting primer año incluido, SEO optimizado, entrega en 4 semanas.
                <strong className="text-emerald-600"> Desde 2.500€</strong>.
              </p>

              <ul className="space-y-3">
                {["Precio fijo, sin extras ocultos", "Hosting 1 año GRATIS", "Web online en 30 días"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/contacto">
                    Ver Ejemplos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/calculadora">Calcular Mi Web</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
                alt="Desarrollo web profesional para PYMES Madrid"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegirnos para tu <span className="text-emerald-600">Web PYME</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes <span className="text-emerald-600">Web PYMES</span>
            </h2>
            <p className="text-xl text-gray-600">
              Precio cerrado. Todo incluido. Sin letra pequeña.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.popular ? "border-2 border-emerald-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.popular && (
                    <Badge className="bg-emerald-600 text-white mb-2 w-fit">Más Vendido</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-emerald-600 mt-4">{pkg.price}</div>
                  <CardDescription className="text-sm italic">{pkg.ideal}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={pkg.popular ? "w-full bg-emerald-600" : "w-full"}>
                    <Link href="/contacto">Solicitar Presupuesto</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Preguntas <span className="text-emerald-600">Frecuentes</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Tu Web Profesional en 30 Días
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Presupuesto sin compromiso en 24h. Te explicamos todo en una videollamada de 20 minutos.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">
              Solicitar Presupuesto Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
