import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Shopify vs WooCommerce 2025: Cuál Es Mejor para Tu Ecommerce",
  description: "Comparativa completa Shopify vs WooCommerce: costos reales, comisiones, personalización, SEO. Descubre cuál elegir para tu tienda online.",
  keywords: ["Shopify vs WooCommerce", "mejor plataforma ecommerce", "comparativa tiendas online", "costos Shopify WooCommerce"]
};

export default function ShopifyVsWooCommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6"><ShoppingCart className="w-4 h-4 mr-2" />Comparativa Ecommerce</Badge>
          <h1 className="text-5xl font-bold mb-6"><span className="text-green-600">Shopify</span> vs <span className="text-blue-600">WooCommerce</span> 2025</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comparativa real: costos totales, comisiones, personalización y cuál elegir según tu modelo de negocio.</p>
        </div>
      </section>
      <section className="py-20"><div className="container mx-auto px-4"><div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"><Card><CardHeader><CardTitle className="text-2xl text-green-600">Shopify</CardTitle></CardHeader><CardContent><ul className="space-y-2"><li>✅ Todo incluido (hosting, seguridad)</li><li>✅ Setup rápido (3-4 semanas)</li><li>❌ Comisión 0.5-2% por venta</li><li>❌ 29-299€/mes + plugins</li></ul></CardContent></Card><Card><CardHeader><CardTitle className="text-2xl text-blue-600">WooCommerce</CardTitle></CardHeader><CardContent><ul className="space-y-2"><li>✅ Sin comisiones por venta</li><li>✅ 100% personalizable</li><li>❌ Requiere hosting propio</li><li>❌ Setup más técnico</li></ul></CardContent></Card></div></div></section>
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600"><div className="container mx-auto px-4 text-center"><h2 className="text-4xl font-bold text-white mb-6">¿Shopify o WooCommerce?</h2><p className="text-xl text-green-100 mb-8">Analizamos tu modelo de negocio y recomendamos la mejor plataforma.</p><Button asChild size="lg" variant="secondary"><Link href="/contacto">Consulta Gratuita <ArrowRight className="ml-2 h-5 w-5" /></Link></Button></div></section>
      <WhatsAppChat />
    </div>
  );
}
