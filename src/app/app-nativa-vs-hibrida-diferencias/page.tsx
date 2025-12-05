import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "App Nativa vs Híbrida 2025: Diferencias, Pros y Contras | Guía Completa",
  description: "Comparativa app nativa vs híbrida: Swift/Kotlin vs React Native/Flutter. Cuál elegir según tu proyecto, costos, rendimiento. Guía experta 2025.",
  keywords: ["app nativa vs híbrida", "diferencias nativa híbrida", "Swift vs React Native", "Kotlin vs Flutter", "cuál elegir app"],
  openGraph: { title: "App Nativa vs Híbrida: Guía Comparativa 2025", images: ["https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=630&fit=crop"] }
};

const comparison = [
  { aspect: "Performance", nativa: "100% rendimiento nativo", hibrida: "95% rendimiento (muy bueno)" },
  { aspect: "Costo Desarrollo", nativa: "2x (iOS + Android separado)", hibrida: "1x (código compartido)" },
  { aspect: "Time to Market", nativa: "2x tiempo", hibrida: "40% más rápido" },
  { aspect: "Acceso APIs", nativa: "100% todas las APIs", hibrida: "95% mediante plugins" },
  { aspect: "UX/UI", nativa: "Nativo 100%", hibrida: "Casi nativo" },
  { aspect: "Mantenimiento", nativa: "2 codebases (caro)", hibrida: "1 codebase (económico)" }
];

export default function AppNativaVsHibridaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6"><Smartphone className="w-4 h-4 mr-2" />Comparativa Apps</Badge>
            <h1 className="text-5xl font-bold mb-6">App <span className="text-blue-600">Nativa</span> vs <span className="text-green-600">Híbrida</span>: Cuál Elegir</h1>
            <p className="text-xl text-gray-600">Guía completa para decidir entre desarrollo nativo (Swift/Kotlin) o híbrido (React Native/Flutter) según tu proyecto y presupuesto.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Comparativa <span className="text-blue-600">Técnica</span></h2>
          <div className="space-y-4 max-w-5xl mx-auto">
            {comparison.map((item, i) => (
              <Card key={i}>
                <CardHeader><CardTitle>{item.aspect}</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div><span className="font-semibold text-blue-600">Nativa:</span> {item.nativa}</div>
                    <div><span className="font-semibold text-green-600">Híbrida:</span> {item.hibrida}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader><CardTitle className="text-2xl text-blue-600">Elige Nativa si...</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["App compleja (juegos, AR/VR)", "Máximo rendimiento crítico", "Presupuesto >15.000€", "Acceso APIs específicas iOS/Android"].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-2xl text-green-600">Elige Híbrida si...</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["MVP o startup (time to market)", "Presupuesto 6.000-12.000€", "App estándar (CRUD, consumo APIs)", "Quieres iOS + Android rápido"].map((item, i) => (
                    <li key={i} className="flex items-start space-x-2"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5" /><span>{item}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¿Nativa o Híbrida para Tu Proyecto?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Consulta gratuita. Analizamos tu caso y te recomendamos la mejor opción.</p>
          <Button asChild size="lg" variant="secondary"><Link href="/contacto">Consulta Gratuita <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
        </div>
      </section>
      <WhatsAppChat />
    </div>
  );
}
