import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Search, Code2, TrendingUp, Shield, ArrowRight, Layers, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo Web con Next.js y React Madrid | Webs Ultrarrápidas SEO 2025",
  description: "Desarrollo web profesional con Next.js y React. SSR, SSG, performance 100/100, SEO superior. Webs modernas y escalables. Desde 3.500€.",
  keywords: [
    "desarrollo web Next.js Madrid",
    "páginas Next.js React",
    "desarrollo React profesional",
    "web Next.js SSR SSG",
    "Next.js SEO optimizado",
    "React web development",
    "framework Next.js empresarial",
    "desarrollo frontend React",
    "web app Next.js Madrid",
    "Next.js vs WordPress"
  ],
  openGraph: {
    title: "Desarrollo Web Next.js + React | PLUS TECNOLOGIA",
    description: "Webs ultrarrápidas con Next.js. Performance 100/100, SEO superior. Desde 3.500€.",
    images: ["https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  alternates: {
    canonical: "https://plustecnologia.com/desarrollo-web-nextjs-react"
  }
};

const nextjsFeatures = [
  {
    icon: Zap,
    title: "Performance Extremo",
    description: "Lighthouse 95-100. Core Web Vitals 'Good'. Carga <1 segundo. Image optimization automática."
  },
  {
    icon: Search,
    title: "SEO Superior",
    description: "SSR/SSG para crawlers. Meta tags dinámicos. Schema.org integrado. Mejor indexación Google."
  },
  {
    icon: Layers,
    title: "Arquitectura Moderna",
    description: "React Server Components. App Router. Streaming SSR. Código splitting automático."
  },
  {
    icon: Shield,
    title: "Seguridad Built-in",
    description: "CSRF protection. XSS prevention. API routes seguras. Environment variables protegidas."
  },
  {
    icon: Globe,
    title: "Escalabilidad Infinita",
    description: "Edge Runtime. CDN global. ISR (Incremental Static Regeneration). Maneja millones de requests."
  },
  {
    icon: TrendingUp,
    title: "Developer Experience",
    description: "Hot reload instantáneo. TypeScript nativo. Deployment Vercel one-click. Debugging avanzado."
  }
];

const packages = [
  {
    name: "Landing Next.js",
    price: "3.500€",
    timeline: "3-4 semanas",
    features: [
      "Landing page/portfolio",
      "Next.js 14 + React 18",
      "SSG optimizado",
      "Tailwind CSS diseño",
      "Formulario contacto",
      "SEO avanzado",
      "Hosting Vercel 1 año",
      "3 meses soporte"
    ],
    ideal: "Startups, portfolios, landing pages"
  },
  {
    name: "Web Corporativa Next.js",
    price: "6.000€",
    timeline: "6-8 semanas",
    features: [
      "10-15 páginas",
      "SSR + ISR híbrido",
      "CMS Headless (Contentful/Sanity)",
      "API Routes custom",
      "Analytics avanzado",
      "Multi-idioma i18n",
      "Performance 95+",
      "6 meses soporte"
    ],
    ideal: "Empresas, webs corporativas",
    highlighted: true
  },
  {
    name: "Web App Next.js",
    price: "Desde 10.000€",
    timeline: "10-14 semanas",
    features: [
      "App compleja SaaS",
      "Autenticación NextAuth",
      "Base datos Prisma/Supabase",
      "Dashboard interactivo",
      "API Backend completo",
      "Testing E2E",
      "CI/CD automatizado",
      "12 meses soporte"
    ],
    ideal: "SaaS, plataformas, apps web"
  }
];

const techStack = [
  { name: "Next.js 14", feature: "App Router, RSC" },
  { name: "React 18", feature: "Server Components" },
  { name: "TypeScript", feature: "Type safety" },
  { name: "Tailwind CSS", feature: "Utility-first" },
  { name: "Prisma/Drizzle", feature: "ORM TypeSafe" },
  { name: "tRPC", feature: "Type-safe APIs" },
  { name: "Vercel", feature: "Edge deployment" },
  { name: "Supabase/Firebase", feature: "Backend services" }
];

const faqs = [
  {
    question: "¿Por qué elegir Next.js vs WordPress para mi web?",
    answer: "Next.js ofrece: 1) Performance superior (95-100 vs 40-60 WordPress típico). 2) SEO mejor (SSR nativo vs plugins). 3) Seguridad (sin vulnerabilidades plugins WordPress). 4) Escalabilidad (maneja millones visitas sin servidor robusto). 5) Developer experience (código moderno vs PHP legacy). Ideal si priorizas velocidad, SEO y tech moderna. WordPress mejor si necesitas edición contenido muy frecuente sin desarrollador."
  },
  {
    question: "¿Puedo editar contenido yo mismo sin programar?",
    answer: "Sí, con Headless CMS integrado. Recomendamos Sanity, Contentful o Strapi: interfaces visuales simples tipo WordPress pero con la performance de Next.js. Editas textos, imágenes, meta SEO desde panel admin amigable. Cambios aparecen en web al instante (ISR). Formación incluida. Alternativa: MDX para contenido en Markdown si prefieres más control técnico."
  },
  {
    question: "¿Cuánto más rápido es Next.js vs mi web actual?",
    answer: "Típicamente 3-5x más rápido. Webs WordPress promedio: 3-5 segundos carga. Next.js optimizado: <1 segundo. Esto se traduce en: +25% conversiones, -40% bounce rate, mejor posicionamiento Google. Hacemos auditoría gratuita de tu web actual para estimación exacta. Casos reales: blog de 4.2s a 0.8s, ecommerce de 6.1s a 1.3s."
  },
  {
    question: "¿El precio incluye hosting o hay costes mensuales?",
    answer: "Hosting Vercel/Netlify gratis hasta ~100K visitas/mes (suficiente para 95% webs). Incluimos 1 año gratis. Después: Vercel Pro 20$/mes si superas límite. Alternativas económicas: Railway, Fly.io desde 5$/mes. Si prefieres servidor propio: VPS desde 10€/mes. Dominio no incluido (15€/año). Mantenimiento opcional: desde 150€/mes."
  }
];

export default function DesarrolloWebNextjsReactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Desarrollo Web con Next.js y React",
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
            "description": "Desarrollo web profesional con Next.js y React",
            "offers": {
              "@type": "Offer",
              "priceRange": "€€€",
              "priceCurrency": "EUR",
              "price": "3500"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-slate-900 text-white border-slate-800">
                <Code2 className="w-4 h-4 mr-2" />
                Desarrollo Next.js + React
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo Web con <span className="text-blue-600">Next.js y React</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Webs <strong>ultrarrápidas y modernas</strong> con Next.js 14 y React 18.
                Performance 100/100, <strong className="text-blue-600">SEO superior</strong>,
                arquitectura escalable. Server-Side Rendering para máxima velocidad.
                <strong className="text-blue-600"> Desde 3.500€</strong>.
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
                  <span className="text-gray-700">Next.js 14</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Score 95+</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">SEO Pro</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop"
                alt="Desarrollo web Next.js React profesional Madrid performance SEO"
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
              Ventajas de <span className="text-blue-600">Next.js</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El framework React líder para webs modernas y performantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nextjsFeatures.map((feature, index) => {
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

      {/* Tech Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Stack <span className="text-blue-600">Tecnológico</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                  <CardDescription className="text-sm">{tech.feature}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Paquetes <span className="text-blue-600">Next.js</span>
            </h2>
            <p className="text-xl text-gray-600">
              Desarrollo profesional con las mejores prácticas React
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

      {/* FAQ */}
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Lanza tu Web Next.js
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Te mostramos ejemplos, performance benchmarks y presupuesto personalizado.
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
