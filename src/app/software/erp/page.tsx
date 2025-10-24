import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Database, BarChart3, Users, Settings, ArrowRight, CheckCircle, TrendingUp, Shield, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "ERP Personalizado | Sistema de Gestión Empresarial - PLUS TECNOLOGIA",
  description: "Desarrollo de ERP a medida para tu empresa. Gestión integral: finanzas, inventario, RRHH, producción. Sistema ERP personalizado según tus procesos.",
  keywords: ["ERP personalizado", "sistema ERP", "ERP a medida", "software gestión empresarial", "ERP desarrollo"],
};

export default function ERPPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-700"><Building2 className="w-4 h-4 mr-2 inline" />ERP Personalizado</Badge>
            <h1 className="text-5xl font-bold">Sistema <span className="text-blue-600">ERP a Medida</span></h1>
            <p className="text-xl text-gray-600">Gestión integral empresarial adaptada a tus procesos específicos</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contacto"><Button className="bg-blue-600">Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Módulos <span className="text-blue-600">ERP</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Gestión Financiera", desc: "Contabilidad, facturación, tesorería" },
              { icon: Database, title: "Control Inventario", desc: "Stock, almacenes, trazabilidad" },
              { icon: Users, title: "Recursos Humanos", desc: "Nóminas, asistencias, formación" },
              { icon: Settings, title: "Producción", desc: "Planificación, órdenes, control calidad" },
              { icon: TrendingUp, title: "Ventas & CRM", desc: "Pipeline, clientes, oportunidades" },
              { icon: Shield, title: "Compras", desc: "Proveedores, órdenes, gestión costes" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Automatización completa</span></div>
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Reportes en tiempo real</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">¿Listo para tu <span className="text-blue-600">ERP Personalizado</span>?</h2>
          <Link href="/contacto"><Button className="bg-blue-600 h-12 px-8">Solicitar Consultoría<ArrowRight className="ml-2" /></Button></Link>
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
