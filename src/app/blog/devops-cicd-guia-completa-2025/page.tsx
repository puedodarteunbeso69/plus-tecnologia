import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";

export const metadata = {
  title: "DevOps y CI/CD: Guía Completa 2025 | PLUS TECNOLOGIA",
  description: "Guía definitiva de DevOps y CI/CD en 2025: GitHub Actions, Docker, Kubernetes, monitoring y pipelines de producción. Casos prácticos y mejores prácticas.",
};

export default function DevOpsCICDPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          DevOps y CI/CD: Guía Completa 2025
        </h1>
        <p className="text-lg text-gray-600">
          Este artículo está siendo actualizado. Por favor regresa pronto.
        </p>
      </div>
      <WhatsAppChat />
    </div>
  );
}
