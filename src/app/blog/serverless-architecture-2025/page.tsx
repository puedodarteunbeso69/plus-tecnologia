import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Cloud, Zap, TrendingDown, CheckCircle, DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Serverless Architecture 2025: Guía Completa y Mejores Prácticas | PLUS TECNOLOGIA",
  description: "Arquitectura serverless en 2025: AWS Lambda, Azure Functions, casos de uso reales, patrones de diseño y cómo reducir costos hasta 70%. Guía completa para desarrolladores.",
  keywords: ["serverless", "aws lambda", "azure functions", "arquitectura serverless", "faas", "cloud computing", "microservicios", "2025"],
  openGraph: {
    title: "Serverless Architecture 2025: Guía Completa y Mejores Prácticas",
    description: "Descubre cómo serverless puede reducir tus costos hasta 70% mientras escala automáticamente. AWS Lambda, patrones y casos de uso reales.",
    images: ["https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=630&fit=crop"],
    type: "article"
  }
};

export default function ServerlessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/blog" className="text-gray-500 hover:text-blue-600">Blog</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Serverless Architecture 2025</span>
          </nav>
        </div>
      </div>

      <article className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Blog
            </Link>

            <div className="space-y-4">
              <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                <Cloud className="w-4 h-4 mr-2" />
                Arquitectura Cloud
              </Badge>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Serverless Architecture 2025: Guía Completa y Mejores Prácticas
              </h1>

              <p className="text-xl text-gray-600">
                Cómo serverless puede reducir tus costos hasta 70% mientras escala automáticamente a millones de requests. AWS Lambda, Azure Functions, patrones de diseño y casos de uso reales de empresas que ya lo implementaron.
              </p>

              {/* Author and Meta */}
              <div className="flex items-center space-x-6 text-gray-600 pt-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Elena Rodríguez</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>22 Ene 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>14 min lectura</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1200&h=600&fit=crop"
              alt="Serverless Architecture Cloud Computing"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">¿Qué es Serverless y Por Qué Importa en 2025?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Serverless no significa "sin servidores", sino que <strong>tú no gestionas servidores</strong>. El proveedor cloud maneja infraestructura, scaling, patching y alta disponibilidad. Tú solo despliegas código y pagas <strong>únicamente por tiempo de ejecución</strong>, no por servidores idle.
            </p>

            <div className="bg-green-50 border-l-4 border-l-green-500 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Beneficios Reales de Serverless en 2025</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>70% ahorro en costos</strong> vs servidores tradicionales (pago por uso real)</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Auto-scaling instantáneo</strong> de 0 a millones de requests sin configuración</span>
                </li>
                <li className="flex items-start">
                  <Cloud className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Zero server management</strong>: sin patching, sin capacity planning</span>
                </li>
                <li className="flex items-start">
                  <TrendingDown className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>Time-to-market 3x más rápido</strong>: focus en código, no infraestructura</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Casos de Uso Ideales para Serverless</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">✅ Perfecto para Serverless</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>APIs REST/GraphQL</strong> con tráfico variable</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Event processing:</strong> uploads, webhooks, colas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Scheduled tasks:</strong> cron jobs, backups, reports</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Microservicios</strong> ligeros y desacoplados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Data transformation:</strong> ETL pipelines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">❌ No Recomendado</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span><strong>Long-running processes</strong> (&gt;15 min): usar containers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span><strong>Stateful applications:</strong> websockets persistentes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span><strong>High-performance computing:</strong> ML training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span><strong>Consistent high traffic 24/7:</strong> cheaper con EC2</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span><strong>Vendor lock-in crítico:</strong> difícil migrar entre clouds</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">AWS Lambda vs Azure Functions vs Google Cloud Functions</h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold text-gray-900">Feature</th>
                        <th className="text-left p-3 font-semibold text-gray-900">AWS Lambda</th>
                        <th className="text-left p-3 font-semibold text-gray-900">Azure Functions</th>
                        <th className="text-left p-3 font-semibold text-gray-900">Google Cloud Functions</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Max Execution Time</td>
                        <td className="p-3">15 minutos</td>
                        <td className="p-3">Unlimited (Premium plan)</td>
                        <td className="p-3">9 minutos</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Free Tier</td>
                        <td className="p-3">1M requests/mes</td>
                        <td className="p-3">1M requests/mes</td>
                        <td className="p-3">2M requests/mes</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Cold Start</td>
                        <td className="p-3">~100-300ms</td>
                        <td className="p-3">~200-500ms</td>
                        <td className="p-3">~150-400ms</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Lenguajes Soportados</td>
                        <td className="p-3">Node, Python, Java, Go, Ruby, .NET</td>
                        <td className="p-3">Node, Python, Java, PowerShell, .NET</td>
                        <td className="p-3">Node, Python, Go, Java, Ruby, PHP</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mejor Para</td>
                        <td className="p-3">Ecosistema AWS, startups</td>
                        <td className="p-3">Empresas Microsoft</td>
                        <td className="p-3">Data pipelines, ML</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Patrones de Diseño Serverless</h2>

            <p className="text-gray-700 leading-relaxed mb-6">Arquitecturas probadas en producción:</p>

            <div className="space-y-6 mb-12">
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">1. API Gateway + Lambda (Clásico)</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Caso de uso:</strong> REST APIs escalables sin gestión de servidores
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`API Gateway → Lambda → DynamoDB
   ↓
CloudWatch Logs`}
                  </pre>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">2. Event-Driven Processing</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Caso de uso:</strong> Procesar uploads, transformar datos, enviar notificaciones
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`S3 Upload → Lambda (resize) → S3 Output
   ↓
SNS Notification → Lambda (email) → SES`}
                  </pre>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">3. Step Functions Orchestration</h3>
                  <p className="text-gray-700 text-sm mb-3">
                    <strong>Caso de uso:</strong> Workflows complejos con múltiples pasos y error handling
                  </p>
                  <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`Step Functions State Machine
  → Lambda (validate)
  → Lambda (process payment)
  → Lambda (send confirmation)
  → Lambda (update inventory)`}
                  </pre>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Optimización de Costos: Tips Prácticos</h2>

            <Card className="mb-8 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cómo Reducir tu Factura Serverless Hasta 50%</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <DollarSign className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Right-size Memory Allocation</p>
                      <p className="text-gray-700 text-sm">Usa AWS Lambda Power Tuning para encontrar configuración óptima de memoria/CPU</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <DollarSign className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Reduce Cold Starts con Provisioned Concurrency</p>
                      <p className="text-gray-700 text-sm">Solo para endpoints críticos de alta latencia (&lt;100ms requerido)</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <DollarSign className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Connection Pooling para Databases</p>
                      <p className="text-gray-700 text-sm">RDS Proxy evita crear nuevas conexiones en cada invocación</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <DollarSign className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Monitoreo con AWS Cost Explorer</p>
                      <p className="text-gray-700 text-sm">Identifica funciones más costosas y optimiza código/configuración</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusión: Serverless en 2025</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Serverless ya no es experimental: es production-ready para la mayoría de workloads modernos. Empresas como Netflix, Coca-Cola y Nordstrom ejecutan millones de funciones Lambda diariamente. El ahorro en costos operativos y velocidad de desarrollo justifican la adopción.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Empieza pequeño:</strong> migra un microservicio no crítico a Lambda. Mide costos y performance. Itera. En 6 meses, la mayoría de tu stack puede ser serverless.
            </p>

            <Card className="bg-blue-50 border-blue-200 mb-12">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">¿Quieres migrar a Serverless?</h3>
                <p className="text-gray-700 mb-4">
                  En PLUS TECNOLOGIA diseñamos arquitecturas serverless escalables y cost-effective. Desde POCs hasta migraciones enterprise completas.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/contacto">Consulta Gratuita</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {["Serverless", "AWS Lambda", "Azure Functions", "Cloud Computing", "FaaS", "Microservices", "Cost Optimization"].map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* WhatsApp Chat */}
      <WhatsAppChat />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
