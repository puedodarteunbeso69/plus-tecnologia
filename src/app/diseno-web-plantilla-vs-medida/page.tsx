import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Diseño Web Plantilla vs a Medida 2025: Cuál Elegir para Tu Negocio",
  description: "Comparativa diseño web con plantilla vs desarrollo a medida: costos, tiempos, personalización. Guía para tomar la mejor decisión según tu presupuesto.",
  keywords: ["plantilla vs diseño a medida", "template vs custom", "cuánto cuesta web personalizada", "WordPress theme vs custom"]
};

export default function PlantillaVsMedidaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6"><Layout className="w-4 h-4 mr-2" />Comparativa Web</Badge>
          <h1 className="text-5xl font-bold mb-6">Plantilla vs Diseño <span className="text-orange-600">a Medida</span></h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Guía completa para decidir entre usar plantilla (template) o desarrollo web 100% personalizado según tu presupuesto y necesidades.</p>
        </div>
      </section>
      <section className="py-20"><div className="container mx-auto px-4"><div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"><Card><CardHeader><CardTitle className="text-2xl text-orange-600">Plantilla (Template)</CardTitle></CardHeader><CardContent><ul className="space-y-2"><li>✅ Precio: 1.500-3.000€</li><li>✅ Tiempo: 2-3 semanas</li><li>❌ Personalización limitada</li><li>❌ Diseño similar a otros</li></ul></CardContent></Card><Card><CardHeader><CardTitle className="text-2xl text-pink-600">A Medida (Custom)</CardTitle></CardHeader><CardContent><ul className="space-y-2"><li>✅ Diseño 100% único</li><li>✅ Funcionalidades específicas</li><li>❌ Precio: 4.000-12.000€</li><li>❌ Tiempo: 6-10 semanas</li></ul></CardContent></Card></div></div></section>
      <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600"><div className="container mx-auto px-4 text-center"><h2 className="text-4xl font-bold text-white mb-6">¿Plantilla o A Medida?</h2><p className="text-xl text-orange-100 mb-8">Te ayudamos a decidir. Consulta gratis.</p><Button asChild size="lg" variant="secondary"><Link href="/contacto">Consulta Gratuita <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div></section>
      <WhatsAppChat />
    </div>
  );
}
