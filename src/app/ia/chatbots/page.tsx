import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Zap, Users, Clock, Target, Brain, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Chatbots Inteligentes | IA Conversacional - PLUS TECNOLOGIA",
  description: "Desarrollo de chatbots con IA para atención al cliente 24/7. NLP avanzado, integración multicanal, aprendizaje continuo.",
  keywords: ["chatbots IA", "chatbot desarrollo", "IA conversacional", "customer service bot"],
};

export default function ChatbotsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-teal-100 text-teal-700"><MessageSquare className="w-4 h-4 mr-2 inline" />Chatbots IA</Badge>
            <h1 className="text-5xl font-bold">Asistentes <span className="text-teal-600">Virtuales</span> Inteligentes</h1>
            <p className="text-xl text-gray-600">Chatbots con IA que atienden clientes 24/7 y automatizan soporte</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contacto"><Button className="bg-teal-600">Solicitar Demo <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Funcionalidades <span className="text-teal-600">Chatbot</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: MessageSquare, title: "NLP Avanzado", desc: "Comprensión natural del lenguaje" },
              { icon: Clock, title: "Atención 24/7", desc: "Disponibilidad completa sin descansos" },
              { icon: Users, title: "Multi-canal", desc: "Web, WhatsApp, Facebook, Instagram" },
              { icon: Brain, title: "Aprendizaje Continuo", desc: "Mejora con cada conversación" },
              { icon: Target, title: "Intent Recognition", desc: "Identifica intenciones del usuario" },
              { icon: Zap, title: "Respuestas Instantáneas", desc: "Sin tiempo de espera" }
            ].map((item, i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-teal-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Integración API</span></div>
                    <div className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /><span className="text-sm">Personalizable</span></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Automatiza tu <span className="text-teal-600">Atención</span> al Cliente</h2>
          <Link href="/contacto"><Button className="bg-teal-600 h-12 px-8">Solicitar Chatbot<ArrowRight className="ml-2" /></Button></Link>
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
