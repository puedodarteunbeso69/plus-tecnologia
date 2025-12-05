"use client";

import { Star, CheckCircle2, Quote, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Review {
  id: string;
  author: {
    name: string;
    position: string;
    company: string;
    image: string;
  };
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  content: string;
  projectType: string;
  helpfulCount?: number;
}

interface ServiceReviewsProps {
  serviceName: string;
  reviews: Review[];
  aggregateRating: {
    average: number;
    total: number;
  };
}

export function ServiceReviews({ serviceName, reviews, aggregateRating }: ServiceReviewsProps) {
  // Calcular distribución de estrellas
  const ratingDistribution = [5, 4, 3, 2, 1].map(stars => ({
    stars,
    count: reviews.filter(r => r.rating === stars).length,
    percentage: (reviews.filter(r => r.rating === stars).length / reviews.length) * 100
  }));

  // Structured data para SEO (Google Rich Snippets)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": serviceName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.average,
      "reviewCount": aggregateRating.total,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author.name
      },
      "datePublished": review.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.content
    }))
  };

  const StarRating = ({ rating, size = "small" }: { rating: number; size?: "small" | "large" }) => {
    const starSize = size === "large" ? "w-6 h-6" : "w-4 h-4";

    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating
                ? "text-yellow-500 fill-yellow-500"
                : "text-gray-300"
            } transition-colors`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-blue-600 text-white mb-4">
              <Award className="w-4 h-4 mr-2 inline" />
              Opiniones Verificadas
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lo que Dicen Nuestros <span className="text-blue-600">Clientes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más de {aggregateRating.total} empresas confían en nosotros para sus proyectos de {serviceName}
            </p>
          </div>

          {/* Aggregate Rating Summary */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Overall Rating */}
                  <div className="text-center md:border-r border-gray-200">
                    <div className="text-6xl font-bold text-blue-600 mb-2">
                      {aggregateRating.average.toFixed(1)}
                    </div>
                    <StarRating rating={Math.round(aggregateRating.average)} size="large" />
                    <p className="text-gray-600 mt-3">
                      Basado en {aggregateRating.total} opiniones
                    </p>
                    <Badge className="mt-4 bg-green-100 text-green-800">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      100% Verificadas
                    </Badge>
                  </div>

                  {/* Rating Distribution */}
                  <div className="space-y-3">
                    {ratingDistribution.map(({ stars, count, percentage }) => (
                      <div key={stars} className="flex items-center space-x-3">
                        <span className="text-sm font-medium text-gray-700 w-12">
                          {stars} <Star className="w-3 h-3 inline text-yellow-500 fill-yellow-500" />
                        </span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-yellow-500 h-full rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-12 text-right">
                          {count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Individual Reviews */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Verified Badge */}
                {review.verified && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-green-100 text-green-800 text-xs">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Verificado
                    </Badge>
                  </div>
                )}

                {/* Quote Icon */}
                <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-blue-600" />
                </div>

                <CardContent className="p-6 relative">
                  {/* Rating & Date */}
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={review.rating} />
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(review.date).toLocaleDateString('es-ES', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </div>
                  </div>

                  {/* Review Title */}
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {review.title}
                  </h3>

                  {/* Review Content */}
                  <p className="text-gray-700 text-sm mb-4 line-clamp-4">
                    {review.content}
                  </p>

                  {/* Project Type Badge */}
                  <Badge variant="secondary" className="mb-4 text-xs">
                    {review.projectType}
                  </Badge>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0">
                      <Image
                        src={review.author.image}
                        alt={review.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">
                        {review.author.name}
                      </p>
                      <p className="text-xs text-gray-600 truncate">
                        {review.author.position}
                      </p>
                      <p className="text-xs text-blue-600 truncate font-medium">
                        {review.author.company}
                      </p>
                    </div>
                  </div>

                  {/* Helpful Count (if available) */}
                  {review.helpfulCount && review.helpfulCount > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500">
                        {review.helpfulCount} personas encontraron esto útil
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-700 font-medium">Tasa de Satisfacción</p>
                <p className="text-sm text-gray-500 mt-1">Proyectos exitosos</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                <p className="text-gray-700 font-medium">Tiempo de Respuesta</p>
                <p className="text-sm text-gray-500 mt-1">Soporte garantizado</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <p className="text-gray-700 font-medium">Empresas Satisfechas</p>
                <p className="text-sm text-gray-500 mt-1">En 10 años</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
