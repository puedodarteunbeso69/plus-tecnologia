import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Optimización Base de Datos - PLUS TECNOLOGIA" };

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Badge><Database className="w-4 h-4 mr-2 inline" />Optimización BD</Badge>
          <h1 className="text-5xl font-bold">Optimiza <span className="text-blue-600">Base de Datos</span></h1>
          <Link href="/contacto"><Button>Audit Gratuito<ArrowRight className="ml-2" /></Button></Link>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12"><div className="container mx-auto px-4 text-center"><p>&copy; 2025 PLUS TECNOLOGIA</p></div></footer>
      <WhatsAppChat />
    </div>
  );
}
