import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Server, Zap, Shield, Database, Code2, ArrowRight, Cloud, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Desarrollo Backend Node.js Madrid | APIs REST GraphQL Escalables 2025",
  description: "Desarrollo de backends Node.js profesionales. APIs REST/GraphQL, microservicios, bases de datos, autenticación. Escalable y seguro. Desde 4.000€.",
  keywords: [
    "desarrollo backend Node.js Madrid",
    "API REST Node.js",
    "desarrollo API GraphQL",
    "backend JavaScript TypeScript",
    "Node.js microservicios",
    "desarrollo API profesional",
    "backend Express.js Fastify",
    "Node.js MongoDB PostgreSQL",
    "API escalable Node.js",
    "desarrollo servidor Node.js"
  ],
  openGraph: {
    title: "Desarrollo Backend Node.js | APIs REST/GraphQL | PLUS TECNOLOGIA",
    description: "Backends Node.js robustos. APIs escalables, seguras, documentadas. Desde 4.000€.",
    images: ["https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop"],
    type: "website",
    locale: "es_ES"
  },
  alternates: {
    canonical: "https://plustecnologia.com/desarrollo-backend-nodejs"
  }
};

const nodejsFeatures = [
  {
    icon: Zap,
    title: "Alto Rendimiento",
    description: "Event loop no-bloqueante. Maneja miles de requests concurrentes. Ideal APIs real-time."
  },
  {
    icon: Shield,
    title: "Seguridad Robusta",
    description: "JWT authentication, rate limiting, helmet.js, CORS, input validation, SQL injection prevention."
  },
  {
    icon: Database,
    title: "Múltiples Bases Datos",
    description: "PostgreSQL, MongoDB, MySQL, Redis. ORMs: Prisma, TypeORM, Mongoose. Queries optimizados."
  },
  {
    icon: Cloud,
    title: "Microservicios",
    description: "Arquitectura desacoplada. Message queues (RabbitMQ/Bull). Event-driven. Escalabilidad horizontal."
  },
  {
    icon: Lock,
    title: "API Documentada",
    description: "Swagger/OpenAPI automático. Postman collections. Ejemplos completos. Onboarding rápido."
  },
  {
    icon: Server,
    title: "DevOps Ready",
    description: "Docker containers. CI/CD pipelines. Monitoring (PM2). Logs centralizados. Health checks."
  }
];

const packages = [
  {
    name: "API REST Básica",
    price: "4.000€",
    timeline: "4-6 semanas",
    features: [
      "5-10 endpoints REST",
      "Express.js o Fastify",
      "PostgreSQL/MongoDB",
      "JWT autenticación",
      "Validación input",
      "Documentación Swagger",
      "Testing unitario",
      "3 meses soporte"
    ],
    ideal: "Apps móviles, webs sencillas"
  },
  {
    name: "Backend Profesional",
    price: "8.000€",
    timeline: "8-10 semanas",
    features: [
      "API completa 20+ endpoints",
      "GraphQL o REST avanzado",
      "Multi-DB (SQL + NoSQL + Cache)",
      "OAuth2 + roles/permisos",
      "WebSockets real-time",
      "Queue jobs (Bull)",
      "Testing E2E completo",
      "6 meses soporte"
    ],
    ideal: "SaaS, plataformas complejas",
    highlighted: true
  },
  {
    name: "Microservicios Enterprise",
    price: "Desde 15.000€",
    timeline: "12-18 semanas",
    features: [
      "Arquitectura microservicios",
      "API Gateway (Kong/Nginx)",
      "Event bus (Kafka/RabbitMQ)",
      "Service mesh",
      "Multi-tenant",
      "Monitoring avanzado",
      "Kubernetes deployment",
      "12 meses soporte"
    ],
    ideal: "Empresas grandes, alta escala"
  }
];

const techStack = [
  { name: "Express.js", desc: "Framework minimalista" },
  { name: "Fastify", desc: "Performance extremo" },
  { name: "NestJS", desc: "Enterprise ready" },
  { name: "Prisma", desc: "ORM type-safe" },
  { name: "GraphQL", desc: "APIs flexibles" },
  { name: "Socket.io", desc: "WebSockets" },
  { name: "Redis", desc: "Caché y queues" },
  { name: "Docker", desc: "Containerization" }
];

const faqs = [
  {
    question: "¿Cuánto cuesta desarrollar un backend Node.js con API?",
    answer: "Desde 4.000€ para API REST básica (10 endpoints, auth simple, 1 DB) hasta 15.000€+ para arquitecturas microservicios complejas. Precio depende de: número endpoints, complejidad lógica negocio, integraciones terceros (Stripe, AWS), volumen tráfico esperado, y requisitos seguridad/compliance. Incluye documentación Swagger y testing."
  },
  {
    question: "¿Node.js es adecuado para aplicaciones empresariales?",
    answer: "Sí absolutamente. Empresas como Netflix, LinkedIn, Uber, PayPal usan Node.js en producción manejando millones de requests. Node.js es ideal para: APIs REST/GraphQL, microservicios, real-time (chats, notificaciones), streaming datos. Menos adecuado para: procesamiento CPU intensivo (mejor Go/Rust), apps monolíticas legacy."
  },
  {
    question: "¿Qué base de datos recomiendan con Node.js?",
    answer: "Depende del caso: PostgreSQL (datos relacionales, transacciones ACID, mejor para finanzas/ERP). MongoDB (datos JSON flexible, prototipado rápido). MySQL (legacy, ecosistema maduro). Redis (caché, sessions, queues). Recomendación típica: PostgreSQL principal + Redis caché. Usamos Prisma ORM para type-safety."
  },
  {
    question: "¿Incluye deployment y configuración servidor?",
    answer: "Sí. Opciones: 1) Serverless (AWS Lambda, Vercel): escalado automático, pay-per-use. 2) Containers (Docker + Railway/Fly.io): control total, precio fijo. 3) VPS tradicional (DigitalOcean): máximo control. Incluimos Docker setup, CI/CD GitHub Actions, monitoring básico PM2, y scripts deployment. Hosting no incluido (desde 5€/mes)."
  }
];

export default function DesarrolloBackendNodejsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "serviceType": "Desarrollo Backend Node.js", "provider": { "@type": "LocalBusiness", "name": "PLUS TECNOLOGIA", "telephone": "+34915493616" }, "offers": { "@type": "Offer", "price": "4000", "priceCurrency": "EUR" } }) }} />

      <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-600 text-white">
                <Server className="w-4 h-4 mr-2" />
                Desarrollo Backend Node.js
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Desarrollo <span className="text-emerald-600">Backend Node.js</span> y APIs
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Backends <strong>robustos y escalables</strong> con Node.js. APIs REST/GraphQL, microservicios,
                autenticación segura. <strong className="text-emerald-600">Maneja millones de requests</strong>.
                <strong className="text-emerald-600"> Desde 4.000€</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                  <Link href="/contacto">Consulta Gratuita<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8">
                  <Link href="/calculadora">Calcular Precio</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                {["Node.js", "APIs", "Escalable"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop" alt="Desarrollo backend Node.js API REST GraphQL profesional" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Características <span className="text-emerald-600">Node.js</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nodejsFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-emerald-600" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stack <span className="text-emerald-600">Tecnológico</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Code2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                  <CardDescription className="text-sm">{tech.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paquetes <span className="text-emerald-600">Backend</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={pkg.highlighted ? "border-2 border-emerald-500 shadow-xl scale-105" : ""}>
                <CardHeader>
                  {pkg.highlighted && <Badge className="bg-emerald-600 text-white mb-2 w-fit">Más Popular</Badge>}
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-emerald-600 mt-4">{pkg.price}</div>
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
                    <Button asChild className={pkg.highlighted ? "w-full bg-emerald-600" : "w-full"}>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas <span className="text-emerald-600">Frecuentes</span></h2>
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

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Desarrolla tu Backend Node.js</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Diseñamos la arquitectura perfecta para tu proyecto.
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
