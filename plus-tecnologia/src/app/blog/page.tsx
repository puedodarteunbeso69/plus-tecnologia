import { Navigation } from "@/components/Navigation";
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
  { id: "all", name: "Todos", icon: TrendingUp, count: 24, color: "bg-blue-500" },
  { id: "desarrollo", name: "Desarrollo", icon: Code2, count: 8, color: "bg-green-500" },
  { id: "ciberseguridad", name: "Ciberseguridad", icon: Shield, count: 6, color: "bg-red-500" },
  { id: "cloud", name: "Cloud", icon: Cloud, count: 5, color: "bg-purple-500" },
  { id: "ia", name: "IA & Big Data", icon: Brain, count: 3, color: "bg-orange-500" },
  { id: "tendencias", name: "Tendencias", icon: TrendingUp, count: 2, color: "bg-pink-500" }
];

const featuredArticles = [
  {
    id: 1,
    title: "El Futuro del Desarrollo Móvil: Flutter vs React Native en 2024",
    slug: "futuro-desarrollo-movil-flutter-vs-react-native-2024",
    excerpt: "Análisis comparativo de las dos principales tecnologías para desarrollo móvil multiplataforma. Descubre cuál elegir para tu próximo proyecto.",
    content: "Un análisis profundo de las ventajas, desventajas y casos de uso ideales para Flutter y React Native en el panorama actual del desarrollo móvil.",
    category: "desarrollo",
    author: {
      name: "Carlos Méndez",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      role: "Senior Mobile Developer"
    },
    publishedAt: "2024-01-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
    tags: ["Flutter", "React Native", "Mobile Development", "Cross-platform"],
    featured: true,
    views: 2340
  },
  {
    id: 2,
    title: "Ciberseguridad en 2024: Las 10 Amenazas que Debes Conocer",
    slug: "ciberseguridad-2024-amenazas-principales",
    excerpt: "Un repaso completo a las principales amenazas de ciberseguridad que enfrentarán las empresas este año y cómo protegerse de ellas.",
    content: "Desde ataques de ransomware hasta vulnerabilidades en IA, exploramos el panorama actual de amenazas cibernéticas y estrategias de protección.",
    category: "ciberseguridad",
    author: {
      name: "Ana García",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c3c4?w=80&h=80&fit=crop&crop=face",
      role: "Cybersecurity Expert"
    },
    publishedAt: "2024-01-12",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    tags: ["Cybersecurity", "Threats", "Data Protection", "Enterprise Security"],
    featured: true,
    views: 1890
  },
  {
    id: 3,
    title: "Migración a la Nube: Guía Completa para Empresas en 2024",
    slug: "migracion-nube-guia-completa-empresas-2024",
    excerpt: "Todo lo que necesitas saber para migrar tu infraestructura a la nube de forma segura y eficiente. Estrategias, herramientas y mejores prácticas.",
    content: "Una guía paso a paso para planificar y ejecutar una migración exitosa a la nube, incluyendo evaluación de costos y selección de proveedores.",
    category: "cloud",
    author: {
      name: "Roberto Sánchez",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
      role: "Cloud Architect"
    },
    publishedAt: "2024-01-10",
    readTime: "15 min",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    tags: ["Cloud Migration", "AWS", "Azure", "Infrastructure"],
    featured: true,
    views: 1567
  }
];

const recentArticles = [
  {
    id: 4,
    title: "ChatGPT y el Desarrollo: Cómo la IA está Cambiando la Programación",
    slug: "chatgpt-desarrollo-ia-programacion",
    excerpt: "Exploramos cómo las herramientas de IA generativa están transformando el proceso de desarrollo de software.",
    category: "ia",
    publishedAt: "2024-01-08",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    views: 987
  },
  {
    id: 5,
    title: "Kubernetes vs Docker: ¿Cuál Elegir para tu Proyecto?",
    slug: "kubernetes-vs-docker-comparacion",
    excerpt: "Análisis detallado de las diferencias entre Kubernetes y Docker y cuándo usar cada uno.",
    category: "cloud",
    publishedAt: "2024-01-05",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
    views: 1245
  },
  {
    id: 6,
    title: "Zero Trust: El Nuevo Paradigma de Seguridad Empresarial",
    slug: "zero-trust-seguridad-empresarial",
    excerpt: "Implementación práctica del modelo Zero Trust en organizaciones modernas.",
    category: "ciberseguridad",
    publishedAt: "2024-01-03",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    views: 834
  },
  {
    id: 7,
    title: "Progressive Web Apps: El Futuro del Desarrollo Web",
    slug: "progressive-web-apps-futuro-desarrollo-web",
    excerpt: "Cómo las PWA están revolucionando la experiencia web y mobile.",
    category: "desarrollo",
    publishedAt: "2024-01-01",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    views: 1432
  }
];

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
        <div className="container mx-auto px-4 lg:px-8">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-blue-600">Inicio</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
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
        <div className="container mx-auto px-4 lg:px-8">
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
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Artículos <span className="text-blue-600">Destacados</span>
            </h2>
            <p className="text-xl text-gray-600">
              Los temas más relevantes y actuales del mundo tecnológico
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Artículos <span className="text-blue-600">Recientes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentArticles.map((article) => {
              const CategoryIcon = getCategoryIcon(article.category);
              return (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="relative h-32 overflow-hidden">
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
              <Button size="lg" variant="outline" className="border-gray-300">
                Ver Todos los Artículos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
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
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
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
    </div>
  );
}
