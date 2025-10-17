import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Brain, Target, Zap, Eye, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Analytics Predictivo con IA - PLUS TECNOLOGIA",
  description: "Analytics predictivo con IA. Predicciones precisas, análisis de tendencias, forecasting inteligente para tu negocio.",
  keywords: ["analytics predictivo", "IA analytics", "forecasting", "análisis datos IA"],
};

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-purple-100 text-purple-700"><BarChart3 className="w-4 h-4 mr-2 inline" />Analytics Predictivo</Badge>
            <h1 className="text-5xl font-bold">Análisis <span className="text-purple-600">Predictivo</span> con IA</h1>
            <p className="text-xl text-gray-600">Predicciones precisas basadas en tus datos históricos</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contacto"><Button className="bg-purple-600">Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Capacidades <span className="text-purple-600">Analytics</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Forecasting", desc: "Predicción de ventas y demanda" },
              { icon: Brain, title: "Análisis Tendencias", desc: "Identificación de patrones ocultos" },
              { icon: Target, title: "Segmentación", desc: "Clustering inteligente de clientes" },
              { icon: Eye, title: "Anomaly Detection", desc: "Detección de irregularidades" },
              { icon: Zap, title: "Real-time Insights", desc: "Análisis en tiempo real" },
              { icon: BarChart3, title: "What-if Analysis", desc: "Simulación de escenarios" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">IA avanzada</span></div>
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Dashboards interactivos</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Predice el <span className="text-purple-600">Futuro</span> de tu Negocio</h2>
          <Link href="/contacto"><Button className="bg-purple-600 h-12 px-8">Solicitar Consultoría<ArrowRight className="ml-2" /></Button></Link>
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
