import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Search, MapPin, Camera, TrendingUp, ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Diseño Web para Inmobiliarias | Buscador de Propiedades + CRM 2025",
  description: "Páginas web profesionales para agencias inmobiliarias con buscador avanzado de propiedades, tours virtuales 360º, CRM integrado. Genera 50% más leads. Desde 2.800€.",
  keywords: [
    "diseño web inmobiliarias",
    "página web agencia inmobiliaria",
    "buscador propiedades web",
    "web inmobiliaria con CRM",
    "tours virtuales 360",
    "portal inmobiliario personalizado",
    "diseño web real estate",
    "web gestión inmuebles",
    "software inmobiliario online",
    "marketing inmobiliario digital"
  ],
  openGraph: {
    title: "Diseño Web Inmobiliarias Profesional | PLUS TECNOLOGIA",
    description: "Webs inmobiliarias con buscador avanzado, tours 360º y CRM. Genera más leads.",
    images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://plustecnologia.com/diseno-web-inmobiliarias"
  }
};

const features = [
  {
    icon: Search,
    title: "Buscador Avanzado Propiedades",
    description: "Filtros por zona, precio, m², habitaciones. Búsqueda en mapa con Google Maps API."
  },
  {
    icon: Camera,
    title: "Tours Virtuales 360º",
    description: "Visitas virtuales inmersivas. Integración Matterport, fotos 360º, vídeos drone."
  },
  {
    icon: Home,
    title: "Fichas Inmuebles Completas",
    description: "Galería fotos HD, planos, características, hipoteca simulador, ubicación mapa."
  },
  {
    icon: Smartphone,
    title: "CRM Inmobiliario Integrado",
    description: "Gestión leads, seguimiento clientes, estadísticas visitas, alertas propiedades."
  },
  {
    icon: MapPin,
    title: "Geolocalización y Mapas",
    description: "Propiedades en mapa interactivo. Búsqueda por zonas, barrios, distancia."
  },
  {
    icon: TrendingUp,
    title: "SEO Inmobiliario Local",
    description: "Posicionamiento por zona: 'pisos en venta Chamberí Madrid'. Schema.org RealEstate."
  }
];

export default function DisenoWebInmobiliariasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "PLUS TECNOLOGIA - Diseño Web Inmobiliarias",
            "description": "Diseño web profesional para agencias inmobiliarias"
          })
        }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-indigo-100 text-indigo-700">
                <Home className="w-4 h-4 mr-2" />
                Web Inmobiliaria Profesional
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Diseño Web para <span className="text-indigo-600">Inmobiliarias</span>
              </h1>

              <p className="text-xl text-gray-600">
                Página web profesional para tu agencia inmobiliaria con <strong>buscador avanzado de propiedades</strong>,
                tours virtuales 360º y CRM integrado.
                <strong className="text-indigo-600"> Genera 50% más leads</strong>.
              </p>

              <ul className="space-y-3">
                {["Buscador propiedades avanzado", "Tours virtuales 360º", "CRM leads inmobiliarios"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="/contacto">
                    Ver Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/calculadora">Calcular Presupuesto</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Diseño web inmobiliaria profesional"
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
              Funcionalidades <span className="text-indigo-600">Portal Inmobiliario</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vende y Alquila Más Propiedades
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Te mostramos portales inmobiliarios que generan resultados.
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
