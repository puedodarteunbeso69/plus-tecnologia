import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  TrendingUp,
  Code2,
  Shield,
  Cloud,
  Brain,
  Smartphone,
  Globe,
  Eye,
  Share
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog Tecnológico | PLUS TECNOLOGIA - Noticias, Tendencias y Análisis IT",
  description: "Mantente actualizado con las últimas tendencias en desarrollo de software, ciberseguridad, cloud computing e inteligencia artificial. Blog experto de PLUS TECNOLOGIA.",
  keywords: [
    "blog tecnologia",
    "noticias tecnológicas",
    "desarrollo software",
    "ciberseguridad noticias",
    "cloud computing",
    "inteligencia artificial",
    "tendencias IT",
    "análisis tecnológico"
  ],
};

const blogCategories = [
  { id: "all", name: "Todos", icon: TrendingUp, count: 20, color: "bg-blue-500" },
  { id: "desarrollo", name: "Desarrollo", icon: Code2, count: 9, color: "bg-green-500" },
  { id: "ia", name: "IA & Big Data", icon: Brain, count: 5, color: "bg-orange-500" },
  { id: "cloud", name: "Cloud", icon: Cloud, count: 3, color: "bg-purple-500" },
  { id: "ciberseguridad", name: "Ciberseguridad", icon: Shield, count: 2, color: "bg-red-500" },
  { id: "tendencias", name: "Tendencias", icon: TrendingUp, count: 1, color: "bg-pink-500" }
];

// Lista completa de todos los artículos disponibles
const allArticles = [
  {
    id: 1,
    title: "IA y Machine Learning para Empresas en 2025: Transformación Digital Real",
    slug: "ia-machine-learning-empresas-2025",
    excerpt: "Casos de uso reales, ROI medible y guía práctica para implementar IA en tu empresa. Desde análisis predictivo hasta chatbots inteligentes.",
    category: "ia",
    author: {
      name: "Ana García",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c3c4?w=80&h=80&fit=crop&crop=face",
      role: "AI/ML Specialist"
    },
    publishedAt: "2025-01-20",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["IA", "Machine Learning", "Automatización", "ROI"],
    featured: true,
    views: 3245
  },
  {
    id: 2,
    title: "Serverless Architecture 2025: Guía Completa y Mejores Prácticas",
    slug: "serverless-architecture-2025",
    excerpt: "Cómo serverless puede reducir tus costos hasta 70% mientras escala automáticamente. AWS Lambda, Azure Functions, patrones de diseño y casos de uso reales.",
    category: "cloud",
    author: {
      name: "Elena Rodríguez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      role: "Solutions Architect"
    },
    publishedAt: "2025-01-22",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
    tags: ["Serverless", "AWS Lambda", "Azure Functions", "Cloud"],
    featured: true,
    views: 2890
  },
  {
    id: 3,
    title: "DevOps y CI/CD: Guía Completa 2025 para Equipos Modernos",
    slug: "devops-cicd-guia-completa-2025",
    excerpt: "Pipeline completo desde código hasta producción. GitHub Actions, Docker, Kubernetes y métricas DORA para teams de alto rendimiento.",
    category: "desarrollo",
    author: {
      name: "Roberto Sánchez",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      role: "DevOps Architect"
    },
    publishedAt: "2025-01-18",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop",
    tags: ["DevOps", "CI/CD", "Kubernetes", "Docker"],
    featured: true,
    views: 3156
  },
  {
    id: 4,
    title: "Blockchain y Web3 en 2025: La Revolución Descentralizada Ya Está Aquí",
    slug: "blockchain-web3-2025",
    excerpt: "DeFi, NFTs utilitarios, smart contracts y casos de uso empresariales reales. El futuro descentralizado con ROI medible.",
    category: "tendencias",
    author: {
      name: "Miguel Torres",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      role: "Blockchain Architect"
    },
    publishedAt: "2025-01-16",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    tags: ["Blockchain", "Web3", "DeFi", "Smart Contracts"],
    featured: false,
    views: 2456
  },
  {
    id: 5,
    title: "Testing Automatizado y QA en 2025: Estrategias para Equipos Ágiles",
    slug: "testing-automatizado-qa-2025",
    excerpt: "Testing end-to-end, TDD, BDD y CI/CD integration. Cypress, Playwright, Jest y estrategias de QA automatizado para reducir bugs en 80%.",
    category: "desarrollo",
    author: {
      name: "Laura Martínez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      role: "QA Lead & Test Automation Specialist"
    },
    publishedAt: "2025-01-24",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["Testing", "QA", "Automation", "Cypress", "TDD"],
    featured: false,
    views: 1987
  },
  {
    id: 6,
    title: "API-First Development 2025: Diseña APIs Escalables y Mantenibles",
    slug: "api-first-development-2025",
    excerpt: "OpenAPI 3.1, diseño de APIs RESTful, GraphQL, versionado semántico y documentación automática. Estrategia API-first para equipos modernos.",
    category: "desarrollo",
    author: {
      name: "Miguel Torres",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      role: "Backend Architect & API Specialist"
    },
    publishedAt: "2025-01-26",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["API", "REST", "GraphQL", "OpenAPI", "Backend"],
    featured: false,
    views: 1765
  },
  {
    id: 7,
    title: "Edge Computing 2025: Procesamiento en el Borde de la Red",
    slug: "edge-computing-2025",
    excerpt: "CDNs programmables, Cloudflare Workers, edge functions y IoT. Reducción de latencia hasta 90% procesando datos cerca del usuario.",
    category: "cloud",
    author: {
      name: "Roberto Sánchez",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      role: "Cloud Architect"
    },
    publishedAt: "2025-01-28",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    tags: ["Edge Computing", "CDN", "IoT", "Performance"],
    featured: false,
    views: 1654
  },
  {
    id: 8,
    title: "Next.js 15: Todas las Novedades y Mejoras para 2025",
    slug: "nextjs-15-novedades-2025",
    excerpt: "Explora las nuevas características de Next.js 15: Turbopack, Server Actions mejorados, optimizaciones de rendimiento y más.",
    category: "desarrollo",
    author: {
      name: "Carlos Mendoza",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      role: "Full Stack Developer"
    },
    publishedAt: "2025-01-15",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    tags: ["Next.js", "React", "Web Development", "Turbopack"],
    featured: false,
    views: 2134
  },
  {
    id: 9,
    title: "Realidad Virtual en Desarrollo Web 2025: WebXR y el Metaverso Empresarial",
    slug: "realidad-virtual-desarrollo-web-2025",
    excerpt: "WebXR, showrooms virtuales, formación VR y metaverso empresarial. El futuro inmersivo de la web ya está aquí.",
    category: "ia",
    author: {
      name: "Laura Martínez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      role: "VR/XR Specialist"
    },
    publishedAt: "2025-01-13",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&h=400&fit=crop",
    tags: ["WebXR", "VR", "Metaverso", "Web Development"],
    featured: false,
    views: 1876
  },
  {
    id: 10,
    title: "Automatización de Procesos con IA en 2025: RPA Inteligente y Workflows Adaptativos",
    slug: "automatizacion-procesos-ia-2025",
    excerpt: "RPA inteligente, automatización con IA generativa y workflows adaptativos. Casos reales con 400% ROI documentado.",
    category: "ia",
    author: {
      name: "Elena Rodríguez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      role: "Automation Specialist"
    },
    publishedAt: "2025-01-12",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    tags: ["RPA", "Automatización", "Workflows", "IA"],
    featured: false,
    views: 1654
  },
  {
    id: 11,
    title: "TypeScript 5: Guía Completa de Nuevas Características 2025",
    slug: "typescript-5-guia-completa-2025",
    excerpt: "Domina TypeScript 5: decorators, type predicates mejorados, const type parameters y más. Ejemplos prácticos incluidos.",
    category: "desarrollo",
    author: {
      name: "Laura Martínez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      role: "Tech Lead & TypeScript Expert"
    },
    publishedAt: "2025-01-10",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
    tags: ["TypeScript", "JavaScript", "Programming", "Web Development"],
    featured: false,
    views: 2045
  },
  {
    id: 12,
    title: "Python para Machine Learning en 2025: Guía Definitiva",
    slug: "python-machine-learning-2025",
    excerpt: "Aprende Python para Machine Learning: TensorFlow, PyTorch, scikit-learn, MLOps y mejores prácticas. Guía completa con ejemplos reales.",
    category: "ia",
    author: {
      name: "Dr. Ana García",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c3c4?w=80&h=80&fit=crop&crop=face",
      role: "AI/ML Engineer & Data Scientist"
    },
    publishedAt: "2025-01-08",
    readTime: "16 min",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    tags: ["Python", "Machine Learning", "AI", "TensorFlow", "PyTorch"],
    featured: false,
    views: 2567
  },
  {
    id: 13,
    title: "Docker y Kubernetes: Guía Práctica Completa 2025",
    slug: "docker-kubernetes-guia-practica-2025",
    excerpt: "Domina Docker y Kubernetes: containerización, orquestación, CI/CD, seguridad y mejores prácticas. De desarrollo a producción.",
    category: "desarrollo",
    author: {
      name: "Roberto Sánchez",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      role: "DevOps Architect & Cloud Engineer"
    },
    publishedAt: "2025-01-05",
    readTime: "18 min",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop",
    tags: ["Docker", "Kubernetes", "DevOps", "Containers"],
    featured: false,
    views: 3012
  },
  {
    id: 14,
    title: "GraphQL vs REST APIs en 2025: Guía Completa de Decisión",
    slug: "graphql-vs-rest-apis-2025",
    excerpt: "Comparativa exhaustiva GraphQL vs REST: rendimiento, casos de uso, seguridad, herramientas y cuándo usar cada uno.",
    category: "desarrollo",
    author: {
      name: "Miguel Torres",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      role: "Backend Architect & API Specialist"
    },
    publishedAt: "2025-01-03",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["GraphQL", "REST", "API Design", "Backend"],
    featured: false,
    views: 1789
  },
  {
    id: 15,
    title: "Arquitectura de Microservicios en 2025: Guía Completa",
    slug: "microservicios-arquitectura-2025",
    excerpt: "Diseña arquitecturas de microservicios escalables: patterns, comunicación, observabilidad, seguridad y migración desde monolitos.",
    category: "desarrollo",
    author: {
      name: "Elena Rodríguez",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      role: "Solutions Architect"
    },
    publishedAt: "2025-01-01",
    readTime: "20 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    tags: ["Microservices", "Architecture", "DDD", "Backend"],
    featured: false,
    views: 2234
  },
  {
    id: 16,
    title: "PostgreSQL: Optimización y Performance en 2025",
    slug: "postgresql-optimizacion-2025",
    excerpt: "Optimiza PostgreSQL para máximo rendimiento: indexing strategies, query optimization, replicación, sharding y monitoring.",
    category: "desarrollo",
    author: {
      name: "David Fernández",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
      role: "Database Administrator"
    },
    publishedAt: "2024-12-28",
    readTime: "17 min",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    tags: ["PostgreSQL", "Database", "SQL", "Performance"],
    featured: false,
    views: 1543
  },
  {
    id: 17,
    title: "El Futuro del Desarrollo Móvil: Flutter vs React Native en 2024",
    slug: "futuro-desarrollo-movil-flutter-vs-react-native-2024",
    excerpt: "Análisis comparativo de las dos principales tecnologías para desarrollo móvil multiplataforma. Descubre cuál elegir para tu próximo proyecto.",
    category: "desarrollo",
    author: {
      name: "Carlos Méndez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      role: "Senior Mobile Developer"
    },
    publishedAt: "2024-12-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    tags: ["Flutter", "React Native", "Mobile Development", "Cross-platform"],
    featured: false,
    views: 2340
  },
  {
    id: 18,
    title: "Ciberseguridad en 2024: Las 10 Amenazas que Debes Conocer",
    slug: "ciberseguridad-2024-amenazas-principales",
    excerpt: "Un repaso completo a las principales amenazas de ciberseguridad que enfrentarán las empresas este año y cómo protegerse de ellas.",
    category: "ciberseguridad",
    author: {
      name: "Ana García",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c3c4?w=80&h=80&fit=crop&crop=face",
      role: "Cybersecurity Expert"
    },
    publishedAt: "2024-12-12",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Cybersecurity", "Threats", "Data Protection", "Enterprise Security"],
    featured: false,
    views: 1890
  },
  {
    id: 19,
    title: "Desarrollo con IA Generativa en 2025: ChatGPT, Copilot y Más",
    slug: "desarrollo-ia-generativa-2025",
    excerpt: "Cómo las herramientas de IA generativa están revolucionando el desarrollo de software. GitHub Copilot, ChatGPT y productividad 10x.",
    category: "ia",
    author: {
      name: "Carlos Mendoza",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      role: "AI Tools Specialist"
    },
    publishedAt: "2024-12-10",
    readTime: "13 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["IA Generativa", "ChatGPT", "GitHub Copilot", "Productividad"],
    featured: false,
    views: 2678
  },
  {
    id: 20,
    title: "Migración a la Nube: Guía Completa para Empresas en 2025",
    slug: "migracion-nube-guia-completa-empresas-2024",
    excerpt: "Todo lo que necesitas saber para migrar tu infraestructura a la nube de forma segura y eficiente. Estrategias, herramientas y mejores prácticas.",
    category: "ciberseguridad",
    author: {
      name: "Roberto Sánchez",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      role: "Cloud Architect"
    },
    publishedAt: "2024-12-05",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    tags: ["Cloud Migration", "AWS", "Azure", "Infrastructure"],
    featured: false,
    views: 1567
  }
];

// Filtrar artículos destacados (los 3 primeros con featured: true)
const featuredArticles = allArticles.filter(article => article.featured);

// Artículos recientes (todos los demás ordenados por fecha)
const recentArticles = allArticles.filter(article => !article.featured).slice(0, 12);

export default function BlogPage() {
  const getCategoryIcon = (categoryId: string) => {
    const category = blogCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : TrendingUp;
  };

  const getCategoryColor = (categoryId: string) => {
    const category = blogCategories.find(cat => cat.id === categoryId);
    return category ? category.color : "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl px-2 sm:px-4 mx-auto">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              <TrendingUp className="w-4 h-4 mr-2" />
              Blog Tecnológico
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Noticias y <span className="text-blue-600">Tendencias</span> en Tecnología
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mantente actualizado con los últimos avances en desarrollo de software, ciberseguridad, cloud computing e inteligencia artificial.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar artículos..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {blogCategories.map((category) => {
              const IconComponent = category.icon;
              // Make each category button a link to the filtered blog page
              const href =
                category.id === "all"
                  ? "/blog"
                  : `/blog?category=${encodeURIComponent(category.id)}`;
              return (
                <Link
                  key={category.id}
                  href={href}
                  className="flex items-center space-x-2 px-6 py-3 rounded-full border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium">{category.name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Artículos <span className="text-blue-600">Destacados</span>
            </h2>
            <p className="text-xl text-gray-600">
              Los temas más relevantes y actuales del mundo tecnológico
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            {featuredArticles.map((article) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <Card key={article.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getCategoryColor(article.category)} text-white`}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {blogCategories.find(cat => cat.id === article.category)?.name}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                      <Eye className="w-4 h-4 text-gray-600" />
                      <span className="text-xs text-gray-600 ml-1">{article.views}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-gray-600 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Author and Meta */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Image
                          src={article.author.avatar}
                          alt={article.author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{article.author.name}</p>
                          <p className="text-gray-600 text-xs">{article.author.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-600 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.publishedAt).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'short'
                          })}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime}
                        </p>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href={`/blog/${article.slug}`}>
                        Leer Artículo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Artículos <span className="text-blue-600">Recientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {recentArticles.map((article) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-24 sm:h-32overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className={`${getCategoryColor(article.category)} text-white text-xs`}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {blogCategories.find(cat => cat.id === article.category)?.name}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.publishedAt).toLocaleDateString('es-ES')}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="h-12 px-6 text-base border-gray-300">
                Ver Todos los Artículos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              No te Pierdas las Últimas Noticias
            </h2>
            <p className="text-xl text-blue-100">
              Suscríbete a nuestro newsletter y recibe las mejores noticias y análisis tecnológicos directamente en tu inbox.
            </p>
            <NewsletterForm />
            <p className="text-blue-200 text-sm">
              Enviamos contenido de calidad. Sin spam. Cancela cuando quieras.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4 sm:gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PLUS TECNOLOGIA</span>
              </div>
              <p className="text-gray-400">
                Tu fuente confiable de noticias y análisis sobre tecnología, desarrollo de software y tendencias digitales.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Categorías</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog?category=desarrollo" className="hover:text-white transition-colors">Desarrollo</Link></li>
                <li><Link href="/blog?category=ciberseguridad" className="hover:text-white transition-colors">Ciberseguridad</Link></li>
                <li><Link href="/blog?category=cloud" className="hover:text-white transition-colors">Cloud Computing</Link></li>
                <li><Link href="/blog?category=ia" className="hover:text-white transition-colors">IA & Big Data</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Todos los Artículos</Link></li>
                <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
                <li><Link href="/autores" className="hover:text-white transition-colors">Nuestros Autores</Link></li>
                <li><Link href="/rss" className="hover:text-white transition-colors">RSS Feed</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@plustecologia.es</li>
                <li>915 493 616</li>
                <li>C. de Orense, 68, 12º</li>
                <li>Tetuán, 28020 Madrid</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PLUS TECNOLOGIA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Chat */}
      <WhatsAppChat />
    </div>
  );
}
