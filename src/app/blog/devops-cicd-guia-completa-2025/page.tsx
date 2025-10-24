import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, GitBranch, Rocket, Shield, Zap, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "DevOps y CI/CD: Guía Completa 2025 para Equipos Modernos | PLUS TECNOLOGIA",
  description: "Guía definitiva de DevOps y CI/CD en 2025: GitHub Actions, Docker, Kubernetes, monitoring y pipelines de producción. Casos prácticos, métricas DORA y mejores prácticas para equipos de alto rendimiento.",
  keywords: ["devops", "ci/cd", "github actions", "docker", "kubernetes", "continuous integration", "continuous deployment", "automation", "2025"],
  openGraph: {
    title: "DevOps y CI/CD: Guía Completa 2025 para Equipos Modernos",
    description: "Pipeline completo desde código hasta producción. GitHub Actions, Docker, Kubernetes y métricas DORA para teams de alto rendimiento.",
    images: ["https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=630&fit=crop"],
    type: "article"
  }
};

const cicdPipeline = [
  {
    stage: "1. Source Control",
    description: "Control de versiones y gestión de código",
    tools: ["Git", "GitHub", "GitLab", "Bitbucket"],
    bestPractices: [
      "Trunk-based development con feature branches cortos",
      "Commits pequeños y frecuentes con mensajes descriptivos",
      "Pull requests con code review obligatorio",
      "Branch protection rules en main/master"
    ],
    icon: GitBranch
  },
  {
    stage: "2. Build & Test",
    description: "Compilación automática y testing exhaustivo",
    tools: ["GitHub Actions", "Jenkins", "CircleCI", "GitLab CI"],
    bestPractices: [
      "Tests unitarios con >80% coverage",
      "Tests de integración en cada PR",
      "Linting y formateo automático (ESLint, Prettier, Black)",
      "Security scanning con Snyk o Dependabot"
    ],
    icon: Zap
  },
  {
    stage: "3. Artifact & Registry",
    description: "Almacenamiento de builds y contenedores",
    tools: ["Docker Hub", "AWS ECR", "Harbor", "Nexus"],
    bestPractices: [
      "Imágenes Docker multi-stage para optimización",
      "Versionado semántico automático (SemVer)",
      "Vulnerability scanning de imágenes",
      "Retention policies para limpieza automática"
    ],
    icon: Shield
  },
  {
    stage: "4. Deploy & Release",
    description: "Despliegue automatizado a entornos",
    tools: ["ArgoCD", "Flux", "Spinnaker", "AWS CodeDeploy"],
    bestPractices: [
      "GitOps: infraestructura como código versionada",
      "Blue-green deployments o canary releases",
      "Automated rollback en caso de fallos",
      "Feature flags para deploy sin release"
    ],
    icon: Rocket
  },
  {
    stage: "5. Monitor & Feedback",
    description: "Observabilidad y mejora continua",
    tools: ["Prometheus", "Grafana", "Datadog", "New Relic"],
    bestPractices: [
      "SLOs/SLIs definidos por servicio",
      "Alerting basado en impacto al usuario",
      "Distributed tracing para debugging",
      "Post-mortems blameless después de incidentes"
    ],
    icon: TrendingUp
  }
];

const doraMetrics = [
  {
    metric: "Deployment Frequency",
    elite: "Múltiples deploys por día",
    high: "1 vez por día a 1 vez por semana",
    medium: "1 vez por semana a 1 vez por mes",
    low: "Menos de 1 vez por mes",
    howToImprove: [
      "Automatizar todo el pipeline de CI/CD",
      "Reducir tamaño de cambios (small batches)",
      "Implementar trunk-based development",
      "Feature flags para deploy continuo"
    ]
  },
  {
    metric: "Lead Time for Changes",
    elite: "< 1 hora",
    high: "< 1 día",
    medium: "1 día a 1 semana",
    low: "> 1 semana",
    howToImprove: [
      "Code review rápido (<2 horas)",
      "Automatizar tests y validaciones",
      "Reducir dependencias entre equipos",
      "Parallel testing en CI"
    ]
  },
  {
    metric: "Time to Restore Service",
    elite: "< 1 hora",
    high: "< 1 día",
    medium: "1 día a 1 semana",
    low: "> 1 semana",
    howToImprove: [
      "Automated rollback mechanisms",
      "Comprehensive monitoring y alerting",
      "Incident response playbooks",
      "Chaos engineering regular"
    ]
  },
  {
    metric: "Change Failure Rate",
    elite: "0-15%",
    high: "16-30%",
    medium: "31-45%",
    low: "> 45%",
    howToImprove: [
      "Aumentar test coverage",
      "Staging environment que refleje producción",
      "Canary deployments con validación automática",
      "Pre-production smoke tests"
    ]
  }
];

const githubActionsExample = `name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run test:coverage
      - uses: codecov/codecov-action@v3

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/\${{ github.repository }}:\${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - run: |
          kubectl set image deployment/app \\
            app=ghcr.io/\${{ github.repository }}:\${{ github.sha }}
          kubectl rollout status deployment/app`;

export default function DevOpsCICDPage() {
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
            <span className="text-gray-900">DevOps y CI/CD 2025</span>
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
              <Badge className="bg-green-100 text-green-700 border-green-200">
                <GitBranch className="w-4 h-4 mr-2" />
                DevOps & CI/CD
              </Badge>

              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                DevOps y CI/CD: Guía Completa 2025 para Equipos Modernos
              </h1>

              <p className="text-xl text-gray-600">
                Pipeline completo desde código hasta producción. GitHub Actions, Docker, Kubernetes y métricas DORA para equipos de alto rendimiento. Aprende a implementar CI/CD moderno con las mejores prácticas de 2025.
              </p>

              {/* Author and Meta */}
              <div className="flex items-center space-x-6 text-gray-600 pt-4">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Roberto Sánchez</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>18 Ene 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>16 min lectura</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=600&fit=crop"
              alt="DevOps CI/CD Pipeline"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">¿Qué es DevOps y Por Qué es Crítico en 2025?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              DevOps no es solo una metodología, es una cultura que une desarrollo y operaciones para entregar software de calidad más rápido. En 2025, las organizaciones que implementan DevOps correctamente despliegan código <strong>200x más frecuentemente</strong> que las que no lo hacen, con <strong>24x menor tiempo de recuperación</strong> ante fallos.
            </p>

            <div className="bg-blue-50 border-l-4 border-l-blue-500 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Beneficios Cuantificables de DevOps</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>60% reducción</strong> en tiempo desde commit a producción</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>50% menos bugs</strong> llegando a producción</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>3x mayor</strong> satisfacción del equipo de desarrollo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>22% ahorro</strong> en costos operativos</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Pipeline CI/CD Completo: Las 5 Etapas</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Un pipeline CI/CD robusto automatiza todo el flujo desde el código hasta producción. Aquí está el flujo completo:
            </p>

            <div className="space-y-6 mb-12">
              {cicdPipeline.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{stage.stage}</h3>
                          <p className="text-gray-600 mb-3">{stage.description}</p>

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-900 mb-2">Herramientas principales:</p>
                            <div className="flex flex-wrap gap-2">
                              {stage.tools.map((tool, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">{tool}</Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-semibold text-gray-900 mb-2">Mejores prácticas:</p>
                            <ul className="space-y-1">
                              {stage.bestPractices.map((practice, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 text-sm">{practice}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Métricas DORA: Mide Tu Performance DevOps</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Las métricas DORA (DevOps Research and Assessment) son el estándar de facto para medir performance de equipos de software. Aquí están las 4 métricas clave y cómo alcanzar nivel "Elite":
            </p>

            <div className="space-y-6 mb-12">
              {doraMetrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{metric.metric}</h3>

                    <div className="grid md:grid-cols-4 gap-3 mb-4">
                      <div className="bg-green-50 border border-green-200 rounded p-3">
                        <p className="text-xs font-semibold text-green-700 mb-1">Elite</p>
                        <p className="text-sm text-gray-900">{metric.elite}</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-3">
                        <p className="text-xs font-semibold text-blue-700 mb-1">High</p>
                        <p className="text-sm text-gray-900">{metric.high}</p>
                      </div>
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                        <p className="text-xs font-semibold text-yellow-700 mb-1">Medium</p>
                        <p className="text-sm text-gray-900">{metric.medium}</p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded p-3">
                        <p className="text-xs font-semibold text-red-700 mb-1">Low</p>
                        <p className="text-sm text-gray-900">{metric.low}</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Cómo mejorar:</p>
                      <ul className="space-y-1">
                        {metric.howToImprove.map((tip, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Rocket className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">GitHub Actions: Pipeline CI/CD Moderno</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              GitHub Actions se ha convertido en la herramienta CI/CD dominante en 2025. Aquí un ejemplo completo de pipeline production-ready:
            </p>

            <Card className="mb-8">
              <CardContent className="p-6">
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{githubActionsExample}</code>
                </pre>
              </CardContent>
            </Card>

            <p className="text-gray-700 leading-relaxed mb-6">
              Este pipeline incluye:
            </p>

            <ul className="space-y-2 mb-8">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Test automation:</strong> Linting y coverage automático</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Docker build optimizado:</strong> Multi-stage con layer caching</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Container registry:</strong> GitHub Container Registry integrado</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span className="text-gray-700"><strong>Kubernetes deployment:</strong> Rollout automático con health checks</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementación Práctica: De Cero a Hero</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Roadmap de 90 días para transformar tu equipo de desarrollo tradicional a DevOps moderno:
            </p>

            <Card className="mb-12">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Mes 1: Fundamentos</h4>
                    <ul className="space-y-1 ml-4">
                      <li className="text-gray-700">• Migrar a Git y trunk-based development</li>
                      <li className="text-gray-700">• Setup de GitHub Actions para testing automático</li>
                      <li className="text-gray-700">• Implementar code review obligatorio</li>
                      <li className="text-gray-700">• Dockerizar aplicaciones</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Mes 2: Automatización</h4>
                    <ul className="space-y-1 ml-4">
                      <li className="text-gray-700">• CI/CD pipeline completo a staging</li>
                      <li className="text-gray-700">• Infrastructure as Code con Terraform</li>
                      <li className="text-gray-700">• Monitoring básico con Prometheus + Grafana</li>
                      <li className="text-gray-700">• Security scanning integrado</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Mes 3: Producción</h4>
                    <ul className="space-y-1 ml-4">
                      <li className="text-gray-700">• Deploy automático a producción con aprobaciones</li>
                      <li className="text-gray-700">• GitOps con ArgoCD</li>
                      <li className="text-gray-700">• Observabilidad completa (logs, metrics, traces)</li>
                      <li className="text-gray-700">• Medir métricas DORA y optimizar</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Errores Comunes y Cómo Evitarlos</h2>

            <div className="space-y-4 mb-12">
              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Tests Lentos que Bloquean el Pipeline</h4>
                      <p className="text-gray-700 text-sm mb-2"><strong>Problema:</strong> Suite de tests que tarda 30+ minutos</p>
                      <p className="text-gray-700 text-sm"><strong>Solución:</strong> Parallel testing, test sharding, separar smoke tests de regression tests</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deployments que Requieren Intervención Manual</h4>
                      <p className="text-gray-700 text-sm mb-2"><strong>Problema:</strong> "Works on my machine", configs manuales en producción</p>
                      <p className="text-gray-700 text-sm"><strong>Solución:</strong> 12-factor apps, config via environment variables, infrastructure as code</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Falta de Rollback Automático</h4>
                      <p className="text-gray-700 text-sm mb-2"><strong>Problema:</strong> Deploy roto requiere hotfix manual urgente</p>
                      <p className="text-gray-700 text-sm"><strong>Solución:</strong> Health checks automáticos, rollback en caso de fallo, canary deployments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusión: DevOps es un Journey, no un Destino</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Implementar DevOps correctamente transforma radicalmente la velocidad y calidad de entrega de software. Las organizaciones de alto rendimiento en 2025 despliegan código múltiples veces al día, con confianza, gracias a automation comprehensiva y cultura de mejora continua.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Empieza pequeño: automatiza una cosa hoy. Mide tu progreso con métricas DORA. Itera constantemente. En 6 meses, tu equipo será irreconocible.
            </p>

            <Card className="bg-green-50 border-green-200 mb-12">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">¿Necesitas ayuda implementando DevOps en tu empresa?</h3>
                <p className="text-gray-700 mb-4">
                  En PLUS TECNOLOGIA ayudamos a equipos de desarrollo a transformar sus procesos con DevOps y CI/CD modernos. Desde setup inicial hasta optimización de pipelines existentes.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Link href="/contacto">Consulta Gratuita</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Tags */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {["DevOps", "CI/CD", "GitHub Actions", "Docker", "Kubernetes", "Automation", "DORA Metrics", "Pipeline"].map((tag, index) => (
                <Badge key={index} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-blue-100 mb-6">
              Suscríbete a nuestro newsletter para recibir más contenido como este
            </p>
            <Button variant="secondary" size="lg">
              Suscribirse al Newsletter
            </Button>
          </div>
        </div>
      </article>

      {/* WhatsApp Chat */}
      <WhatsAppChat />

      {/* Footer (simplificado) */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
