import { Navigation } from "@/components/Navigation";
import { WhatsAppChat } from "@/components/WhatsAppChat";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  User,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  Calendar,
  Tag
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "@/data/blogArticleTemplates";

interface BlogArticleTemplateProps {
  article: BlogArticle;
}

export function BlogArticleTemplate({ article }: BlogArticleTemplateProps) {
  // Generate table of contents from sections
  const tableOfContents = article.sections.map((section, index) => ({
    id: `section-${index}`,
    heading: section.heading
  }));

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    image: article.heroImage,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role
    },
    publisher: {
      "@type": "Organization",
      name: "PLUS TECNOLOGIA",
      logo: {
        "@type": "ImageObject",
        url: "https://plustecnologia.com/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://plustecnologia.com/blog/${article.slug}`
    },
    keywords: article.keywords.join(", "),
    articleSection: article.category,
    wordCount: article.introduction.length + article.sections.reduce((acc, s) => acc + s.content.length, 0)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-blue-100 mb-6 text-sm">
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-white">{article.category}</span>
            </div>

            {/* Category Badge */}
            <Badge className="bg-white/20 text-white mb-4 backdrop-blur">
              {article.category}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishedDate).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime} min lectura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Tabla de Contenidos</h3>
                </div>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                    >
                      {index + 1}. {item.heading}
                    </a>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <article className="bg-white rounded-lg shadow-sm">
              {/* Hero Image */}
              <div className="relative w-full h-96 overflow-hidden rounded-t-lg">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8 md:p-12">
                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {article.introduction}
                  </p>
                </div>

                {/* Sections */}
                {article.sections.map((section, index) => (
                  <section
                    key={index}
                    id={`section-${index}`}
                    className="mb-12 scroll-mt-24"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      {section.heading}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {section.content}
                    </p>

                    {section.subsections && (
                      <div className="space-y-8">
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                              {subsection.title}
                            </h3>
                            <p className="text-gray-700 mb-4">{subsection.description}</p>
                            {subsection.points && (
                              <ul className="space-y-2">
                                {subsection.points.map((point, pointIndex) => (
                                  <li
                                    key={pointIndex}
                                    className="flex items-start space-x-3"
                                  >
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}

                {/* Key Takeaways */}
                <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mr-2" />
                    Puntos Clave
                  </h3>
                  <ul className="space-y-3">
                    {article.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-800 font-medium">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="border-t border-gray-200 pt-8 mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center text-white">
                  <h3 className="text-2xl font-bold mb-3">
                    ¿Necesitas Ayuda con tu Proyecto?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Nuestro equipo de expertos está listo para transformar tus ideas en realidad.
                  </p>
                  <Link href="/contacto">
                    <Button className="bg-white text-blue-600 hover:bg-gray-100">
                      Consulta Gratuita
                    </Button>
                  </Link>
                </div>
              </div>
            </article>

            {/* Related Articles */}
            {article.relatedArticles.length > 0 && (
              <section className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Artículos Relacionados
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {article.relatedArticles.map((relatedSlug, index) => (
                    <Link key={index} href={relatedSlug}>
                      <Card className="hover:shadow-lg transition-shadow h-full">
                        <CardContent className="p-6">
                          <p className="text-sm text-blue-600 font-medium mb-2">
                            Artículo Relacionado
                          </p>
                          <p className="text-gray-900 font-semibold">
                            {relatedSlug.split('/').pop()?.replace(/-/g, ' ')}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Back to Blog */}
            <div className="mt-12">
              <Link href="/blog">
                <Button variant="outline" className="group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Volver al Blog
                </Button>
              </Link>
            </div>
          </main>
        </div>
      </div>

      <WhatsAppChat />
    </div>
  );
}
