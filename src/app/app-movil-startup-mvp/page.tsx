import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Rocket, Calendar, Code, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "MVP App Móvil para Startups | 8 Semanas desde Idea a App Store",
  description: "Desarrollo MVP app móvil para startups en 8 semanas. Valida tu idea rápido, iOS + Android, presupuesto startup-friendly. Desde 8.000€. Madrid.",
  keywords: ["MVP app móvil startup", "desarrollo MVP rápido", "app startup precio", "MVP 8 semanas", "React Native MVP", "validar idea app"],
  openGraph: { title: "MVP App Móvil Startups 8 Semanas", images: ["https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=630&fit=crop"] },
  alternates: { canonical: "https://plustecnologia.com/app-movil-startup-mvp" }
};

export default function AppMovilStartupMVPPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-purple-600 text-white"><Rocket className="w-4 h-4 mr-2" />MVP Startup</Badge>
              <h1 className="text-5xl font-bold">MVP App Móvil para <span className="text-purple-600">Startups</span></h1>
              <p className="text-xl text-gray-600">Convierte tu idea en app en <strong>8 semanas</strong>. iOS + Android simultáneo con React Native. Valida mercado rápido. <strong className="text-purple-600">Desde 8.000€</strong>.</p>
              <ul className="space-y-3">{["MVP funcional 8 semanas", "iOS + Android", "Presupuesto startup-friendly"].map((item, i) => <li key={i} className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-green-600" /><span>{item}</span></li>)}</ul>
              <Button asChild size="lg" className="bg-purple-600"><Link href="/contacto">Validar Mi Idea <ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
            </div>
            <div className="relative h-[500px]"><Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop" alt="MVP app startup" fill className="object-cover rounded-2xl" priority /></div>
          </div>
        </div>
      </section>
      <section className="py-20"><div className="container mx-auto px-4 text-center"><h2 className="text-4xl font-bold mb-8">Roadmap <span className="text-purple-600">8 Semanas</span></h2><div className="grid md:grid-cols-4 gap-6">{[
        {week: "Semanas 1-2", task: "Discovery & Diseño", icon: Code},
        {week: "Semanas 3-5", task: "Desarrollo Core", icon: Zap},
        {week: "Semanas 6-7", task: "Testing & Ajustes", icon: CheckCircle},
        {week: "Semana 8", task: "Deploy App Stores", icon: Rocket}
      ].map((phase, i) => {const Icon=phase.icon; return <Card key={i}><CardHeader><div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto flex items-center justify-center mb-4"><Icon className="w-6 h-6 text-purple-600"/></div><CardTitle className="text-sm">{phase.week}</CardTitle><CardDescription>{phase.task}</CardDescription></CardHeader></Card>})}</div></div></section>
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600"><div className="container mx-auto px-4 text-center"><h2 className="text-4xl font-bold text-white mb-6">De Idea a App Store en 2 Meses</h2><p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">Consulta gratuita. Analizamos viabilidad técnica y te damos presupuesto exacto.</p><Button asChild size="lg" variant="secondary"><Link href="/contacto">Consulta Gratis</Link></Button></div></section>
      <WhatsAppChat />
    </div>
  );
}
