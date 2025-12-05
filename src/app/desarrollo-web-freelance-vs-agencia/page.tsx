import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Freelance vs Agencia Desarrollo Web 2025: Pros, Contras y Cuál Elegir",
  description: "Comparativa freelance vs agencia web: costos, tiempos, garantías, soporte. Descubre cuál conviene más según tu proyecto y presupuesto.",
  keywords: ["freelance vs agencia web", "contratar freelance o agencia", "diferencias freelance agencia", "cuál es mejor para desarrollo web"]
};

export default function FreelanceVsAgenciaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6"><Users className="w-4 h-4 mr-2" />Comparativa Desarrollo</Badge>
          <h1 className="text-5xl font-bold mb-6"><span className="text-indigo-600">Freelance</span> vs <span className="text-purple-600">Agencia</span> Web</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Guía completa para decidir entre contratar freelance o agencia de desarrollo web según tu presupuesto y necesidades de proyecto.</p>
        </div>
      </section>
      <section className="py-20"><div className="container mx-auto px-4"><div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"><Card><CardHeader><CardTitle className="text-2xl text-indigo-600">Freelance</CardTitle></CardHeader><CardContent><ul className="space-y-2"><li>✅ Precio: 30-50% más barato</li><li>✅ Comunicación directa</li><li>❌ Capacidad limitada</li><li>❌ Sin garantías formales</li></ul></CardContent></Card><Card><CardHeader><CardTitle className="text-2xl text-purple-600">Agencia</CardTitle></CardHeader><CardContent><ul className="space-y-2"><li>✅ Equipo multidisciplinar</li><li>✅ Garantías y contratos</li><li>❌ Precio 40-60% superior</li><li>❌ Procesos más formales</li></ul></CardContent></Card></div></div></section>
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600"><div className="container mx-auto px-4 text-center"><h2 className="text-4xl font-bold text-white mb-6">¿Freelance o Agencia para Tu Proyecto?</h2><p className="text-xl text-indigo-100 mb-8">Te ayudamos a tomar la mejor decisión. Consulta gratis.</p><Button asChild size="lg" variant="secondary"><Link href="/contacto">Consulta Gratuita <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div></section>
      <WhatsAppChat />
    </div>
  );
}
