import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Camera, Zap, Shield, Target, Scan, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Computer Vision | Visión Artificial - PLUS TECNOLOGIA",
  description: "Soluciones de visión artificial: detección de objetos, reconocimiento facial, OCR, control de calidad. Computer vision aplicado.",
  keywords: ["computer vision", "visión artificial", "detección objetos", "reconocimiento facial", "OCR"],
};

export default function ComputerVisionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-700"><Eye className="w-4 h-4 mr-2 inline" />Computer Vision</Badge>
            <h1 className="text-5xl font-bold">Visión <span className="text-blue-600">Artificial</span> Avanzada</h1>
            <p className="text-xl text-gray-600">Análisis inteligente de imágenes y video para automatización</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contacto"><Button className="bg-blue-600">Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Aplicaciones <span className="text-blue-600">Computer Vision</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Detección de Objetos", desc: "Identificación en tiempo real" },
              { icon: Eye, title: "Reconocimiento Facial", desc: "Autenticación biométrica segura" },
              { icon: Scan, title: "OCR Avanzado", desc: "Extracción de texto de documentos" },
              { icon: Shield, title: "Control de Calidad", desc: "Inspección automática de defectos" },
              { icon: Camera, title: "Video Analytics", desc: "Análisis inteligente de video" },
              { icon: Zap, title: "Clasificación Imágenes", desc: "Categorización automática" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Alta precisión</span></div>
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Tiempo real</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Automatiza con <span className="text-blue-600">Visión Artificial</span></h2>
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
