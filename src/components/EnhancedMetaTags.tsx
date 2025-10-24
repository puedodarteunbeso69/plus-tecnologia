import Head from 'next/head'

interface EnhancedMetaTagsProps {
  title: string
  description: string
  canonical?: string
  image?: string
  imageAlt?: string
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    section?: string
    tags?: string[]
  }
  noindex?: boolean
  type?: 'website' | 'article' | 'product' | 'profile'
}

export function EnhancedMetaTags({
  title,
  description,
  canonical,
  image,
  imageAlt,
  article,
  noindex = false,
  type = 'website'
}: EnhancedMetaTagsProps) {
  const baseUrl = 'https://plustecnologia.com'
  const siteName = 'PLUS TECNOLOGIA'
  const defaultImage = `${baseUrl}/og-image.jpg`
  const finalImage = image || defaultImage
  const finalCanonical = canonical || baseUrl

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={finalCanonical} />

      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:alt" content={imageAlt || title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="es_ES" />

      {/* Article specific Open Graph tags */}
      {article && type === 'article' && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:image:alt" content={imageAlt || title} />
      <meta name="twitter:site" content="@plustecnologia" />
      <meta name="twitter:creator" content="@plustecnologia" />

      {/* LinkedIn */}
      <meta property="linkedin:owner" content="plus-tecnologia" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />

      {/* Preconnect for faster loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Additional Schema.org hints */}
      <meta name="author" content="PLUS TECNOLOGIA" />
      <meta name="publisher" content="PLUS TECNOLOGIA" />
      <meta name="copyright" content="© 2025 PLUS TECNOLOGIA" />
      <meta name="language" content="es-ES" />
      <meta name="geo.region" content="ES-M" />
      <meta name="geo.placename" content="Madrid" />
      <meta name="geo.position" content="40.4168;-3.7038" />
      <meta name="ICBM" content="40.4168, -3.7038" />
    </Head>
  )
}

// Utility function to generate meta tags for different page types
export const generatePageMeta = {
  homepage: () => ({
    title: "PLUS TECNOLOGIA | Desarrollo de Aplicaciones y Servicios IT Profesionales",
    description: "Especialistas en desarrollo de aplicaciones móviles, desarrollo web y soluciones tecnológicas empresariales. Transformamos ideas en soluciones digitales innovadoras.",
    canonical: "https://plustecnologia.com",
    type: 'website' as const
  }),

  blog: (title: string, description: string, slug: string) => ({
    title: `${title} | PLUS TECNOLOGIA Blog`,
    description,
    canonical: `https://plustecnologia.com/blog/${slug}`,
    type: 'article' as const,
    article: {
      publishedTime: new Date().toISOString(),
      author: "PLUS TECNOLOGIA",
      section: "Technology"
    }
  }),

  service: (serviceName: string, description: string, slug: string) => ({
    title: `${serviceName} | PLUS TECNOLOGIA`,
    description,
    canonical: `https://plustecnologia.com/${slug}`,
    type: 'website' as const
  })
}
