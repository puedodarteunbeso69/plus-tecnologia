import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Stethoscope, Calendar, Shield, Users, Clock, ArrowRight, FileCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Diseño Web para Clínicas y Consultas Médicas | Citas Online GDPR",
  description: "Páginas web profesionales para clínicas, médicos y centros sanitarios. Sistema de citas online, ficha paciente, GDPR compliance. Aumenta pacientes 35%. Desde 2.200€.",
  keywords: [
    "diseño web clínicas médicas",
    "página web médicos",
    "web para consultas médicas",
    "citas online médicas",
    "diseño web centros sanitarios",
    "web clínica dental",
    "página médico privado",
    "agenda online consulta",
    "web GDPR sanidad",
    "marketing médico digital"
  ],
  openGraph: {
    title: "Diseño Web Médico Profesional | PLUS TECNOLOGIA",
    description: "Webs para clínicas y médicos con citas online. GDPR compliant, ficha paciente digital.",
    images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&fit=crop"]
  },
  alternates: {
    canonical: "https://plustecnologia.com/diseno-web-medicos-clinicas"
  }
};

const features = [
  {
    icon: Calendar,
    title: "Citas Online 24/7",
    description: "Pacientes solicitan citas desde web. Confirmación automática, recordatorios SMS/email."
  },
  {
    icon: Shield,
    title: "GDPR y LOPD Sanitaria",
    description: "Cumplimiento normativa protección datos sanitarios. Consentimientos, cookies, RGPD."
  },
  {
    icon: Users,
    title: "Ficha Paciente Digital",
    description: "Portal paciente: historial citas, documentos, resultados analíticas (opcional)."
  },
  {
    icon: FileCheck,
    title: "Cuadro Médico y Servicios",
    description: "Perfiles profesionales, especialidades, horarios. SEO por cada especialidad."
  },
  {
    icon: Clock,
    title: "Horarios y Guardias",
    description: "Mostrar disponibilidad real. Integración Google Calendar para sincronizar agenda."
  },
  {
    icon: Stethoscope,
    title: "Blog Salud y Consejos",
    description: "Artículos médicos SEO. Posiciona tu clínica como referente en tu especialidad."
  }
];

const medicalSectors = [
  "Clínicas Dentales",
  "Fisioterapia",
  "Psicología",
  "Medicina Estética",
  "Podología",
  "Nutrición",
  "Oftalmología",
  "Ginecología",
  "Pediatría",
  "Veterinaria"
];

export default function DisenoWebMedicosClinicasPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "PLUS TECNOLOGIA - Diseño Web Médico",
            "description": "Diseño web profesional para clínicas y consultas médicas"
          })
        }}
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-cyan-100 text-cyan-700">
                <Stethoscope className="w-4 h-4 mr-2" />
                Web Médica Profesional
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Diseño Web para <span className="text-cyan-600">Clínicas y Médicos</span>
              </h1>

              <p className="text-xl text-gray-600">
                Página web profesional para tu clínica o consulta médica con <strong>sistema de citas online</strong>,
                portal paciente y cumplimiento GDPR.
                <strong className="text-cyan-600"> Aumenta pacientes un 35%</strong>.
              </p>

              <ul className="space-y-3">
                {["Citas online automáticas", "GDPR y LOPD compliant", "SEO local médico"].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/contacto">
                    Ver Ejemplos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/calculadora">Solicitar Presupuesto</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                alt="Diseño web clínica médica profesional"
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
              Funcionalidades <span className="text-cyan-600">Específicas Sector Salud</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todo lo necesario para digitalizar tu clínica cumpliendo normativas sanitarias
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-600" />
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

      {/* Medical Sectors */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Especialidades Médicas
            </h2>
            <p className="text-lg text-gray-600">
              Experiencia en diseño web para todas las especialidades
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {medicalSectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="font-medium text-gray-900">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Digitaliza tu Consulta Médica
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Consulta gratuita. Analizamos tus necesidades y te mostramos ejemplos de webs médicas.
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
