import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Big Data Analytics - PLUS TECNOLOGIA" };

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 text-center space-y-6">
          <Badge className="bg-blue-100 text-blue-700"><BarChart3 className="w-4 h-4 mr-2 inline" />Big Data Analytics</Badge>
          <h1 className="text-5xl font-bold">Análisis de <span className="text-blue-600">Datos Masivos</span></h1>
          <Link href="/contacto"><Button className="bg-blue-600">Solicitar Demo<ArrowRight className="ml-2" /></Button></Link>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12"><div className="container mx-auto px-4 text-center"><p>&copy; 2025 PLUS TECNOLOGIA</p></div></footer>
      <WhatsAppChat />
    </div>
  );
}
