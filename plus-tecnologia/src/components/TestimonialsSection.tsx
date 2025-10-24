"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building, User } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ana García",
    position: "CTO",
    company: "TechStart Solutions",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=logo",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c3c4?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    testimonial: "PLUS TECNOLOGIA desarrolló nuestra aplicación móvil en tiempo récord. La calidad del código y la experiencia de usuario superaron nuestras expectativas. Altamente recomendado para startups tecnológicas.",
    project: "App Móvil iOS/Android",
    industry: "Fintech"
  },
  {
    name: "Carlos Mendoza",
    position: "Director General",
    company: "Industrias Mediterráneo",
    logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=80&h=80&fit=crop&crop=logo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    testimonial: "El sistema ERP que desarrollaron transformó completamente nuestros procesos. La automatización nos ha permitido reducir costos en un 35% y mejorar la eficiencia operativa significativamente.",
    project: "Sistema ERP Personalizado",
    industry: "Manufactura"
  },
  {
    name: "Laura Ruiz",
    position: "Marketing Manager",
    company: "E-commerce Plus",
    logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=80&h=80&fit=crop&crop=logo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    testimonial: "Nuestra tienda online desarrollada por PLUS TECNOLOGIA ha incrementado las ventas un 200%. El diseño responsive y la optimización SEO han sido clave para nuestro éxito.",
    project: "E-commerce & SEO",
    industry: "Retail"
  },
  {
    name: "Miguel Torres",
    position: "CISO",
    company: "Banco Seguro Digital",
    logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=80&h=80&fit=crop&crop=logo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    testimonial: "La auditoría de ciberseguridad identificó vulnerabilidades críticas que desconocíamos. Su pentesting profesional y el plan de remediación nos han dado la tranquilidad que necesitábamos.",
    project: "Pentesting & Auditoría",
    industry: "Banca"
  },
  {
    name: "Carmen López",
    position: "Fundadora",
    company: "HealthTech Innovations",
    logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=80&h=80&fit=crop&crop=logo",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    testimonial: "El chatbot con IA que desarrollaron para nuestros pacientes ha revolucionado nuestra atención. La integración con nuestros sistemas fue perfecta y el soporte post-lanzamiento excepcional.",
    project: "Chatbot IA + Integración",
    industry: "Healthcare"
  },
  {
    name: "Roberto Sánchez",
    position: "Operations Director",
    company: "LogisticPro",
    logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=80&h=80&fit=crop&crop=logo",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    testimonial: "La migración a la nube que realizaron fue perfecta. Cero downtime y una mejora del 300% en performance. Su expertise en AWS nos ha ahorrado miles de euros en infraestructura.",
    project: "Migración Cloud AWS",
    industry: "Logística"
  }
];

const companyLogos = [
  { name: "TechStart", logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=120&h=60&fit=crop" },
  { name: "Industrias", logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=120&h=60&fit=crop" },
  { name: "E-commerce", logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=120&h=60&fit=crop" },
  { name: "Banco Digital", logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=120&h=60&fit=crop" },
  { name: "HealthTech", logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=120&h=60&fit=crop" },
  { name: "LogisticPro", logo: "https://images.unsplash.com/photo-1560472354-7c7f0c8f81d7?w=120&h=60&fit=crop" }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-blue-200 text-blue-700">
            ⭐ Testimonios de Clientes
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Lo que Dicen Nuestros <span className="text-blue-600">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 50 empresas confían en nosotros para su transformación digital
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">4.9/5</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">Calificación Promedio</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">98%</div>
            <p className="text-gray-600">Proyectos Exitosos</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">50+</div>
            <p className="text-gray-600">Clientes Satisfechos</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-orange-600">24h</div>
            <p className="text-gray-600">Tiempo de Respuesta</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Quote className="h-8 w-8 text-blue-200" />
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Project Info */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.project}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-blue-100"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trusted Companies */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-gray-900">
            Empresas que Confían en Nosotros
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <Building className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-gray-600">{company.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Quieres Ser el Próximo Caso de Éxito?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Únete a las empresas que ya han transformado su negocio con nuestras soluciones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Solicitar Consulta Gratuita
            </button>
            <button className="border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Ver Más Casos de Éxito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
