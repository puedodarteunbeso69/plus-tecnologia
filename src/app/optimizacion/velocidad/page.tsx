import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Optimización Velocidad Web - PLUS TECNOLOGIA" };

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Badge><Zap className="w-4 h-4 mr-2 inline" />Velocidad Web</Badge>
          <h1 className="text-5xl font-bold">Acelera tu <span className="text-yellow-600">Sitio Web</span></h1>
          <Link href="/contacto"><Button>Audit Gratuito<ArrowRight className="ml-2" /></Button></Link>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12"><div className="container mx-auto px-4 text-center"><p>&copy; 2025 PLUS TECNOLOGIA</p></div></footer>
      <WhatsAppChat />
    </div>
  );
}
