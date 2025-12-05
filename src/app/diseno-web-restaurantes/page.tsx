import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Utensils, Calendar, QrCode, Star, TrendingUp, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Diseño Web para Restaurantes | Reservas Online y Menú Digital 2025",
  description: "Páginas web para restaurantes con sistema de reservas online, carta digital, códigos QR y pedidos a domicilio. Aumenta reservas un 40%. Desde 1.800€.",
  keywords: [
    "diseño web restaurantes",
    "página web restaurante con reservas",
    "menú digital QR restaurante",
    "web para bares y restaurantes",
    "diseño web hostelería",
    "carta digital online",
    "reservas online restaurante",
    "pedidos online restaurante",
    "web gastronómica profesional",
    "marketing restaurantes Madrid"
  ],
  openGraph: {
    title: "Diseño Web para Restaurantes con Reservas Online",
    description: "Webs para restaurantes que generan reservas. Menú digital, códigos QR, integración Google Maps. Desde 1.800€.",
    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=630&fit=crop"],
    type: "website"
  },
  alternates: {
    canonical: "https://plustecnologia.com/diseno-web-restaurantes"
  }
};

const features = [
  {
    icon: Calendar,
    title: "Reservas Online 24/7",
    description: "Sistema de reservas automático. Clientes reservan mesa desde web, sin llamadas."
  },
  {
    icon: QrCode,
    title: "Carta Digital con QR",
    description: "Menú digital actualizable al instante. Códigos QR en mesas sin app necesaria."
  },
  {
    icon: MapPin,
    title: "Google Maps Integrado",
    description: "Ubicación visible, reseñas de Google, botón 'Cómo llegar' directo."
  },
  {
    icon: Star,
    title: "Galería Fotográfica",
    description: "Fotos profesionales de platos, local y ambiente. Primera impresión perfecta."
  },
  {
    icon: Utensils,
    title: "Menú del Día Actualizable",
    description: "Cambias menú diario tú mismo, sin programadores. Panel admin super simple."
  },
  {
    icon: TrendingUp,
    title: "SEO Local Restaurantes",
    description: "Aparecer en 'restaurantes cerca de mí'. Schema.org Restaurant, Google Business."
  }
];

const packages = [
  {
    name: "Web Básica",
    price: "1.800€",
    setup: "Único pago",
    features: [
      "Diseño responsive 100%",
      "Carta digital con fotos",
      "Formulario reservas",
      "Google Maps integrado",
      "Enlace redes sociales",
      "Hosting 1 año incluido"
    ],
    ideal: "Bares, cafeterías pequeñas",
    cta: "Empezar"
  },
  {
    name: "Web Premium",
    price: "2.800€",
    setup: "Único pago",
    features: [
      "Todo de Básica +",
      "Reservas automáticas online",
      "Códigos QR menú mesas",
      "Menú multiidioma (ES/EN)",
      "Blog recetas y eventos",
      "Email marketing setup"
    ],
    ideal: "Restaurantes, gastrobares",
    cta: "Más Popular",
    highlighted: true
  },
  {
    name: "Web + Pedidos",
    price: "3.500€",
    setup: "Único pago",
    features: [
      "Todo de Premium +",
      "Pedidos online a domicilio",
      "Carrito compra integrado",
      "Pasarela pago (Stripe/Redsys)",
      "Panel gestión pedidos",
      "Integración Glovo/Uber Eats"
    ],
    ideal: "Delivery, dark kitchens",
    cta: "Contactar"
  }
];

export default function DisenoWebRestaurantesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Diseño Web Restaurantes",
            "provider": {
              "@type": "LocalBusiness",
              "name": "PLUS TECNOLOGIA",
              "telephone": "+34915493616"
            },
            "areaServed": "España",
            "description": "Diseño web profesional para restaurantes con reservas online y carta digital"
          })
        }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-orange-100 text-orange-700">
                <Utensils className="w-4 h-4 mr-2" />
                Web para Restaurantes
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Página Web para tu <span className="text-orange-600">Restaurante</span>
              </h1>

              <p className="text-xl text-gray-600">
                Diseño web profesional para restaurantes con <strong>reservas online automáticas</strong>,
                carta digital con códigos QR y menú actualizable por ti.
                <strong className="text-orange-600"> Aumenta reservas un 40%</strong>.
              </p>

              <ul className="space-y-3">
                {["Reservas online 24/7", "Carta digital con QR", "SEO local restaurantes"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link href="/contacto">
                    Ver Demos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/calculadora">Calcular Precio</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                alt="Diseño web profesional restaurante"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todo lo que Necesita tu <span className="text-orange-600">Restaurante</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
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
              Paquetes <span className="text-orange-600">Web Restaurantes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-orange-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && (
                    <Badge className="bg-orange-600 text-white mb-2 w-fit">Más Popular</Badge>
                  )}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-orange-600 mt-4">{pkg.price}</div>
                  <CardDescription>{pkg.setup}</CardDescription>
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
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-4">Ideal para: <strong>{pkg.ideal}</strong></p>
                    <Button asChild className={pkg.highlighted ? "w-full bg-orange-600" : "w-full"}>
                      <Link href="/contacto">{pkg.cta}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Más Reservas, Menos Llamadas
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Te mostramos ejemplos de webs de restaurantes, presupuesto sin compromiso.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contacto">
              Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
