import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, TrendingUp, Zap, BarChart3, Database, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Machine Learning | Modelos Predictivos - PLUS TECNOLOGIA",
  description: "Desarrollo de modelos de Machine Learning personalizados. Predicciones, clasificación, clustering. IA aplicada a tu negocio.",
  keywords: ["machine learning", "modelos predictivos", "ML desarrollo", "inteligencia artificial"],
};

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-indigo-100 text-indigo-700"><Brain className="w-4 h-4 mr-2 inline" />Machine Learning</Badge>
            <h1 className="text-5xl font-bold">Modelos <span className="text-indigo-600">Predictivos</span> Personalizados</h1>
            <p className="text-xl text-gray-600">ML aplicado a tu negocio: predicciones, clasificación y optimización</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contacto"><Button className="bg-indigo-600">Solicitar Consultoría <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Soluciones <span className="text-indigo-600">ML</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Modelos Predictivos", desc: "Predicción de demanda, ventas, churn" },
              { icon: Target, title: "Clasificación", desc: "Detección de fraude, sentiment analysis" },
              { icon: Database, title: "Clustering", desc: "Segmentación de clientes, patrones" },
              { icon: Zap, title: "Optimización", desc: "Pricing dinámico, routing, scheduling" },
              { icon: BarChart3, title: "Forecasting", desc: "Series temporales, tendencias" },
              { icon: Brain, title: "Recomendación", desc: "Sistemas de recomendación personalizados" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-indigo-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Precisión superior a 90%</span></div>
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Mejora continua</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Implementa <span className="text-indigo-600">ML</span> en tu Negocio</h2>
          <Link href="/contacto"><Button className="bg-indigo-600 h-12 px-8">Consulta Gratuita<ArrowRight className="ml-2" /></Button></Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
        </div>
      </footer>

      <WhatsAppChat />
    </div>
  );
}
