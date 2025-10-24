import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Database, Eye, Zap, Target, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Business Intelligence | Dashboards y Analytics - PLUS TECNOLOGIA",
  description: "Soluciones BI personalizadas. Dashboards interactivos, análisis de datos, KPIs en tiempo real. Toma decisiones basadas en datos.",
  keywords: ["business intelligence", "BI dashboards", "analytics empresarial", "power bi", "tableau"],
};

export default function BIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-green-100 text-green-700"><BarChart3 className="w-4 h-4 mr-2 inline" />Business Intelligence</Badge>
            <h1 className="text-5xl font-bold">Decisiones basadas en <span className="text-green-600">Datos</span></h1>
            <p className="text-xl text-gray-600">Dashboards interactivos y analytics avanzado para tu empresa</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contacto"><Button className="bg-green-600">Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Soluciones <span className="text-green-600">BI</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Dashboards Interactivos", desc: "Visualización de KPIs en tiempo real" },
              { icon: Database, title: "Data Warehousing", desc: "Centralización de datos empresariales" },
              { icon: TrendingUp, title: "Analytics Predictivo", desc: "Predicciones basadas en ML" },
              { icon: Eye, title: "Reportes Automáticos", desc: "Informes programados y distribuidos" },
              { icon: Zap, title: "Real-time Analytics", desc: "Análisis de datos en tiempo real" },
              { icon: Target, title: "KPI Monitoring", desc: "Seguimiento de métricas clave" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Visualización avanzada</span></div>
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Actualización automática</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Transforma tus <span className="text-green-600">Datos</span> en Insights</h2>
          <Link href="/contacto"><Button className="bg-green-600 h-12 px-8">Solicitar Consultoría<ArrowRight className="ml-2" /></Button></Link>
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
