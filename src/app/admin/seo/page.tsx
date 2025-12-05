import { SEOMonitoring } from "@/components/SEOMonitoring"
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { StructuredData } from "@/components/StructuredData"

export const metadata = {
  title: "SEO Monitoring Dashboard - PLUS TECNOLOGIA Admin",
  description: "Panel de administración para monitoreo SEO y herramientas de testing",
  robots: "noindex, nofollow", // Don't index admin pages
}

export default function AdminSEOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="website" />

      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
              <p className="text-gray-600">SEO Monitoring & Tools</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                PLUS TECNOLOGIA - Version 32
              </span>
              <a
                href="/"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                ← Volver al Sitio
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Monitoring Dashboard */}
      <div className="py-8">
        <SEOMonitoring />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-500 text-sm">
            <p>🔧 Panel de Administración - Solo para uso interno</p>
            <p className="mt-2">
              Para acceso a Google Search Console:
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                search.google.com/search-console
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
