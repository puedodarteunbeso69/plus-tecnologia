import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Zap, TrendingUp, Code, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Next.js vs WordPress 2025: Cuál Elegir para Tu Web | Comparativa Completa",
  description: "Comparativa Next.js vs WordPress: rendimiento, SEO, costos, mantenimiento. Descubre cuál elegir según tu proyecto. Guía experta 2025.",
  keywords: ["Next.js vs WordPress", "cuál elegir Next.js WordPress", "comparativa CMS", "Next.js o WordPress 2025", "diferencias Next.js WordPress"],
  openGraph: { title: "Next.js vs WordPress: Cuál Elegir 2025", images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=630&fit=crop"] },
  alternates: { canonical: "https://plustecnologia.com/nextjs-vs-wordpress-cual-elegir" }
};

const comparison = [
  {
    criteria: "Performance",
    nextjs: { score: 10, text: "95-100/100 Lighthouse. SSR/SSG ultrarrápido" },
    wordpress: { score: 6, text: "75-85/100. Necesita optimización WPO" }
  },
  {
    criteria: "SEO",
    nextjs: { score: 10, text: "SEO técnico perfecto. SSR ideal Google" },
    wordpress: { score: 8, text: "Bueno con Yoast/RankMath. Maduro" }
  },
  {
    criteria: "Costo Desarrollo",
    nextjs: { score: 5, text: "3.500-8.000€. Requiere programador" },
    wordpress: { score: 9, text: "2.000-5.000€. Más accesible" }
  },
  {
    criteria: "Facilidad Uso",
    nextjs: { score: 4, text: "Requiere dev para cambios" },
    wordpress: { score: 10, text: "Editor visual. Cualquiera actualiza" }
  },
  {
    criteria: "Escalabilidad",
    nextjs: { score: 10, text: "Horizontal ilimitada. Serverless" },
    wordpress: { score: 7, text: "Limitada. Problemas con tráfico alto" }
  },
  {
    criteria: "Seguridad",
    nextjs: { score: 9, text: "Menos superficie ataque. Estático" },
    wordpress: { score: 6, text: "Target hackers. Requiere updates" }
  }
];

const useCases = {
  nextjs: [
    "Ecommerce alto tráfico (>100k visitas/mes)",
    "Landing pages conversión",
    "Web apps complejas",
    "Proyectos donde SEO técnico es crítico",
    "Startups tech que escalarán rápido"
  ],
  wordpress: [
    "Blogs y medios de comunicación",
    "Webs corporativas estándar",
    "Presupuesto ajustado (<3.000€)",
    "Cliente quiere actualizar contenido él mismo",
    "Proyectos con muchos plugins específicos"
  ]
};

export default function NextJSvsWordPressPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-blue-600 text-white mb-6"><Code className="w-4 h-4 mr-2" />Comparativa Técnica</Badge>
          <h1 className="text-5xl font-bold mb-6"><span className="text-blue-600">Next.js</span> vs <span className="text-purple-600">WordPress</span>: Cuál Elegir en 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comparativa honesta sin sesgos. Te ayudamos a elegir la tecnología correcta según tus necesidades reales.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Comparativa <span className="text-blue-600">Punto por Punto</span></h2>

          <div className="space-y-6 max-w-5xl mx-auto">
            {comparison.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl">{item.criteria}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-blue-600">Next.js</span>
                        <div className="flex space-x-1">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className={`w-3 h-3 rounded-full ${i < item.nextjs.score ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{item.nextjs.text}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-purple-600">WordPress</span>
                        <div className="flex space-x-1">
                          {[...Array(10)].map((_, i) => (
                            <div key={i} className={`w-3 h-3 rounded-full ${i < item.wordpress.score ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{item.wordpress.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">¿Cuándo Elegir <span className="text-blue-600">Cada Uno</span>?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Elige Next.js si...</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useCases.nextjs.map((useCase, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6 bg-blue-600"><Link href="/desarrollo-web-nextjs-react">Ver Servicios Next.js</Link></Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Elige WordPress si...</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {useCases.wordpress.map((useCase, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full mt-6 bg-purple-600"><Link href="/desarrollo-web-wordpress-personalizado">Ver Servicios WordPress</Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Aún No Sabes Cuál Elegir?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Consulta gratuita. Analizamos tu proyecto y te recomendamos la mejor opción.</p>
          <Button asChild size="lg" variant="secondary"><Link href="/contacto">Consulta Gratuita <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
        </div>
      </section>

      <WhatsAppChat />
    </div>
  );
}
