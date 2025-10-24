interface StructuredDataProps {
  type: 'organization' | 'website' | 'article' | 'service' | 'breadcrumb'
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://plustecnologia.com'

    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "PLUS TECNOLOGIA",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "Especialistas en desarrollo de aplicaciones móviles, desarrollo web y soluciones tecnológicas empresariales. Transformamos ideas en soluciones digitales innovadoras.",
          "foundingDate": "2014",
          "employee": "10-50",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "ES",
            "addressRegion": "Madrid",
            "addressLocality": "Madrid"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+34-900-000-000",
            "contactType": "customer service",
            "availableLanguage": ["Spanish", "English"]
          },
          "sameAs": [
            "https://linkedin.com/company/plustecnologia",
            "https://twitter.com/plustecnologia",
            "https://github.com/plustecnologia"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Servicios IT",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desarrollo de Aplicaciones Móviles",
                  "description": "Desarrollo nativo iOS y Android, React Native y Flutter"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desarrollo Web",
                  "description": "Sitios web corporativos, e-commerce y aplicaciones web avanzadas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Software Empresarial",
                  "description": "ERP, CRM y soluciones de gestión a medida"
                }
              }
            ]
          }
        }

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "PLUS TECNOLOGIA",
          "url": baseUrl,
          "description": "Desarrollo de aplicaciones móviles, web y soluciones IT empresariales",
          "publisher": {
            "@type": "Organization",
            "name": "PLUS TECNOLOGIA"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "mainEntity": {
            "@type": "Organization",
            "name": "PLUS TECNOLOGIA"
          }
        }

      case 'article':
        return data ? {
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": data.title,
          "description": data.description,
          "image": data.image || `${baseUrl}/blog-default.jpg`,
          "author": {
            "@type": "Organization",
            "name": "PLUS TECNOLOGIA",
            "url": baseUrl
          },
          "publisher": {
            "@type": "Organization",
            "name": "PLUS TECNOLOGIA",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "datePublished": data.publishedDate || new Date().toISOString().split('T')[0],
          "dateModified": data.modifiedDate || new Date().toISOString().split('T')[0],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.url || baseUrl
          },
          "wordCount": data.wordCount || 1500,
          "timeRequired": data.readingTime || "PT8M",
          "keywords": data.keywords || [],
          "about": data.topics || [],
          "articleSection": "Technology",
          "inLanguage": "es-ES"
        } : null

      case 'service':
        return data ? {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "PLUS TECNOLOGIA",
            "url": baseUrl
          },
          "areaServed": {
            "@type": "Country",
            "name": "Spain"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": data.name,
            "itemListElement": data.features?.map((feature: string, index: number) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": feature
              },
              "position": index + 1
            })) || []
          },
          "offers": {
            "@type": "Offer",
            "price": data.price || "Consultar",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "validFrom": new Date().toISOString().split('T')[0]
          }
        } : null

      case 'breadcrumb':
        return data ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        } : null

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}
