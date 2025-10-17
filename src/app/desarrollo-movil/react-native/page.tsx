// ...existing code... <no existing file>
import { WhatsAppChat } from "@/components/WhatsAppChat";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Code2, Apple, ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Desarrollo React Native | PLUS TECNOLOGIA",
  description:
    "Apps móviles nativas con React Native para iOS y Android. Alto rendimiento, UI nativa y publicación en stores.",
};

const benefits = [
  { title: "Codebase Única", desc: "Una base de código para iOS y Android." },
  { title: "Rendimiento Nativo", desc: "Animaciones fluidas y acceso a APIs nativas." },
  { title: "Time-to-Market", desc: "Entrega más rápida con costos optimizados." },
];

export default function ReactNativePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/desarrollo-movil" className="text-gray-500 hover:text-blue-600">Desarrollo Móvil</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">React Native</span>
          </nav>
        </div>
      </div>

      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <Badge className="bg-green-100 text-green-700 border-green-200">
              <Smartphone className="w-4 h-4 mr-2" /> Apps iOS y Android
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              React Native <span className="text-green-600">Profesional</span>
            </h1>
            <p className="text-lg text-gray-600">
              Construimos aplicaciones móviles nativas con una sola base de código, integraciones robustas y UX de primera.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-4">
              <Link href="/contacto">
                <Button className="h-12 px-6 text-base bg-green-600 hover:bg-green-700">
                  Solicitar Presupuesto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="default" className="h-12 px-6 text-base" variant="outline">Ver Apps Publicadas</Button>
              </Link>
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2"><Apple className="w-4 h-4" /><span>App Store</span></div>
              <div className="flex items-center space-x-2"><Smartphone className="w-4 h-4" /><span>Google Play</span></div>
            </div>
          </div>
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop" alt="React Native" width={900} height={600} className="rounded-2xl shadow-2xl" priority />
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {benefits.map((b) => (
            <Card key={b.title}>
              <CardHeader>
                <CardTitle className="text-lg">{b.title}</CardTitle>
                <CardDescription>{b.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Calidad garantizada</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
// ...existing code... <end of new file>
