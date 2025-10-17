import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp, BarChart3, Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "CRM Avanzado | Gestión de Clientes - PLUS TECNOLOGIA",
  description: "CRM personalizado para gestión de clientes, ventas y marketing. Pipeline visual, automatización, analytics. Sistema CRM adaptado a tu negocio.",
  keywords: ["CRM personalizado", "sistema CRM", "gestión clientes", "CRM ventas", "software CRM"],
};

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-purple-100 text-purple-700"><Users className="w-4 h-4 mr-2 inline" />CRM Avanzado</Badge>
            <h1 className="text-5xl font-bold">Gestión <span className="text-purple-600">Inteligente</span> de Clientes</h1>
            <p className="text-xl text-gray-600">CRM personalizado que impulsa tus ventas y fideliza clientes</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contacto"><Button className="bg-purple-600">Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Funcionalidades <span className="text-purple-600">CRM</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Pipeline de Ventas", desc: "Gestión visual del embudo de ventas" },
              { icon: Users, title: "Gestión Contactos", desc: "Base de datos completa de clientes" },
              { icon: BarChart3, title: "Analytics & Reportes", desc: "KPIs y métricas en tiempo real" },
              { icon: Mail, title: "Email Marketing", desc: "Campañas automatizadas segmentadas" },
              { icon: TrendingUp, title: "Seguimiento Leads", desc: "Tracking completo de oportunidades" },
              { icon: Phone, title: "Comunicación Integrada", desc: "Email, llamadas, WhatsApp unificado" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-purple-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Automatización inteligente</span></div>
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Integración completa</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Aumenta tus <span className="text-purple-600">Ventas</span> con CRM</h2>
          <Link href="/contacto"><Button className="bg-purple-600 h-12 px-8">Solicitar Demo<ArrowRight className="ml-2" /></Button></Link>
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
