import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code2, Zap, Search, Shield, ArrowRight, Wrench, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo WordPress Personalizado Madrid | Custom Themes Plugins 2025",
  description: "Desarrollo WordPress profesional a medida. Custom themes, plugins personalizados, optimización WPO, seguridad avanzada. Desde 2.500€.",
  keywords: [
    "desarrollo WordPress personalizado Madrid",
    "custom WordPress development",
    "theme WordPress a medida",
    "plugin WordPress custom",
    "WordPress profesional Madrid",
    "desarrollo WordPress empresarial",
    "WordPress optimizado velocidad",
    "WordPress headless",
    "programador WordPress Madrid",
    "desarrollo web WordPress avanzado"
  ],
  openGraph: {
    title: "Desarrollo WordPress Personalizado | PLUS TECNOLOGIA",
    description: "WordPress a medida. Custom themes/plugins, WPO, seguridad. Desde 2.500€.",
    images: ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  alternates: {
    canonical: "https://plustecnologia.com/desarrollo-web-wordpress-personalizado"
  }
};

const wordpressFeatures = [
  { icon: Code2, title: "Custom Themes", description: "Themes únicos desde cero. No plantillas genéricas. Diseño adaptado 100% a tu marca y necesidades." },
  { icon: Wrench, title: "Plugins Personalizados", description: "Funcionalidades específicas tu negocio. No depender de plugins terceros con vulnerabilidades." },
  { icon: Zap, title: "WPO Optimizado", description: "WordPress rápido (score 90+). Caché avanzado, lazy loading, CDN, base datos optimizada." },
  { icon: Shield, title: "Seguridad Reforzada", description: "Hardening WordPress. WAF, 2FA, backups automáticos, monitoring vulnerabilidades, updates seguros." },
  { icon: Search, title: "SEO Avanzado", description: "Schema.org, meta automáticos, sitemap XML, breadcrumbs, AMP opcional, WP Rocket + Yoast Pro." },
  { icon: TrendingUp, title: "Headless WordPress", description: "WordPress como CMS + Next.js frontend. Performance extremo manteniendo editor familiar." }
];

const packages = [
  {
    name: "WordPress Corporativo",
    price: "2.500€",
    timeline: "4-5 semanas",
    features: ["Theme personalizado", "10-15 páginas", "Elementor Pro o ACF", "Formularios contacto", "SEO básico Yoast", "WPO optimizado", "SSL + backups", "3 meses soporte"],
    ideal: "Empresas, portfolios"
  },
  {
    name: "WordPress Avanzado",
    price: "4.500€",
    timeline: "6-8 semanas",
    features: ["Custom theme desde cero", "Plugin funcionalidades específicas", "Multiidioma WPML/Polylang", "WPO Score 90+", "SEO avanzado Schema", "Panel admin custom", "Integraciones API", "6 meses soporte"],
    ideal: "E-commerce, portales",
    highlighted: true
  },
  {
    name: "WordPress Headless",
    price: "Desde 6.000€",
    timeline: "8-12 semanas",
    features: ["WordPress REST API", "Frontend Next.js/React", "Performance 95-100", "ISR incremental", "Preview mode", "Multi-frontend (web + app)", "CI/CD automatizado", "12 meses soporte"],
    ideal: "Alto tráfico, performance crítico"
  }
];

const faqs = [
  { question: "¿Vale la pena WordPress personalizado vs plantilla premium?", answer: "Sí si necesitas: 1) Diseño único (plantillas parecen genéricas). 2) Funcionalidades específicas (plugins genéricos hacen demasiado/poco). 3) Performance (plantillas cargan 50+ plugins innecesarios). 4) Seguridad (menos código = menos vulnerabilidades). 5) Largo plazo (custom es tuyo, plantilla requiere licencia anual). Plantilla OK para presupuestos <2.000€ o proyectos temporales." },
  { question: "¿Cuánto más rápido es WordPress personalizado?", answer: "WordPress template típico: 40-60 PageSpeed, 3-5s carga. WordPress custom optimizado: 85-95 PageSpeed, <1.5s. Diferencia: eliminamos plugins innecesarios (templates tienen 20-40), código solo lo necesario, optimización base datos, caché estratégico. Resultado: +40% conversiones, mejor SEO Google." },
  { question: "¿Puedo seguir usando el editor WordPress familiar?", answer: "Sí 100%. WordPress custom mantiene el editor Gutenberg/Classic que conoces. Opcionalmente añadimos Elementor/ACF para edición visual avanzada. Headless WordPress también usa el mismo admin WordPress, solo el frontend es Next.js (invisible para ti). Formación incluida para funcionalidades custom." },
  { question: "¿Qué es WordPress Headless y cuándo recomendáis?", answer: "Headless = WordPress solo para editar contenido (backend) + Next.js para mostrar web (frontend). Ventajas: performance 95-100 (vs 40-60 WordPress normal), mejor SEO, escalabilidad infinita. Recomendamos si: +10K visitas/mes, performance crítico, app móvil futura, presupuesto permite (+6.000€). Si <5K visitas/mes, WordPress tradicional optimizado suficiente." }
];

export default function DesarrolloWebWordpressPersonalizadoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "serviceType": "Desarrollo WordPress Personalizado", "provider": { "@type": "LocalBusiness", "name": "PLUS TECNOLOGIA", "telephone": "+34915493616" }, "offers": { "@type": "Offer", "price": "2500", "priceCurrency": "EUR" } }) }} />

      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-indigo-600 text-white"><Code2 className="w-4 h-4 mr-2" />WordPress Personalizado</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo <span className="text-indigo-600">WordPress Personalizado</span> a Medida
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                WordPress <strong>profesional y único</strong>. Custom themes, plugins a medida,
                <strong className="text-indigo-600"> WPO 90+</strong>, seguridad reforzada.
                No plantillas genéricas.
                <strong className="text-indigo-600"> Desde 2.500€</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8">
                  <Link href="/contacto">Consulta Gratuita<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">Calcular Precio</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                {["Custom Theme", "WPO 90+", "Seguro"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop" alt="Desarrollo WordPress personalizado custom theme plugin a medida" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Desarrollo <span className="text-indigo-600">WordPress Profesional</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wordpressFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paquetes <span className="text-indigo-600">WordPress</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-indigo-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && <Badge className="bg-indigo-600 text-white mb-2 w-fit">Más Popular</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-indigo-600 mt-4">{pkg.price}</div>
                  <CardDescription>{pkg.timeline}</CardDescription>
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
                    <p className="text-sm text-gray-600 mb-4">Ideal: <strong>{pkg.ideal}</strong></p>
                    <Button asChild className={pkg.highlighted ? "w-full bg-indigo-600" : "w-full"}>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas <span className="text-indigo-600">Frecuentes</span></h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardHeader><CardTitle className="text-lg">{faq.question}</CardTitle></CardHeader>
                <CardContent><p className="text-gray-700">{faq.answer}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Tu WordPress Profesional</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Analizamos tus necesidades y diseñamos WordPress perfectamente adaptado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contacto">Consulta Gratuita<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white/20">
              <Link href="tel:+34915493616">Llamar: 915 493 616</Link>
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
