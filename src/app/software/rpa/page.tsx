import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Settings, TrendingUp, Clock, Target, Workflow, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Automatización RPA | Robots de Procesos - PLUS TECNOLOGIA",
  description: "Automatización de procesos con RPA. Elimina tareas manuales repetitivas. Bots inteligentes que trabajan 24/7 sin errores.",
  keywords: ["RPA", "automatización procesos", "robotic process automation", "bots automatización"],
};

export default function RPAPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-orange-100 text-orange-700"><Zap className="w-4 h-4 mr-2 inline" />Automatización RPA</Badge>
            <h1 className="text-5xl font-bold"><span className="text-orange-600">Automatiza</span> Procesos Repetitivos</h1>
            <p className="text-xl text-gray-600">Robots que eliminan tareas manuales y aumentan la productividad</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contacto"><Button className="bg-orange-600">Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Casos de Uso <span className="text-orange-600">RPA</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Workflow, title: "Procesamiento Documentos", desc: "Extracción automática de datos" },
              { icon: Settings, title: "Migración de Datos", desc: "Transferencia entre sistemas" },
              { icon: Clock, title: "Reportes Automáticos", desc: "Generación programada de informes" },
              { icon: Target, title: "Validación de Datos", desc: "Verificación automática de información" },
              { icon: TrendingUp, title: "Conciliación Bancaria", desc: "Matching automático de transacciones" },
              { icon: Zap, title: "Onboarding Clientes", desc: "Proceso automatizado de alta" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-orange-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">0% errores</span></div>
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Trabajo 24/7</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Elimina tareas <span className="text-orange-600">Manuales</span></h2>
          <Link href="/contacto"><Button className="bg-orange-600 h-12 px-8">Solicitar Automatización<ArrowRight className="ml-2" /></Button></Link>
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
