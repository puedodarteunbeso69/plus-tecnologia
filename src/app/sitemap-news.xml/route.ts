import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  const baseUrl = 'https://plustecnologia.com'
  const currentDate = new Date()
  const twoWeeksAgo = new Date(currentDate.getTime() - (14 * 24 * 60 * 60 * 1000))

  // Blog articles from the last 2 weeks (news sitemap requirement)
  const recentArticles = [
    {
      url: '/blog/ia-machine-learning-empresas-2025',
      title: 'IA y Machine Learning para Empresas en 2025: Transformación Digital Real',
      publishDate: '2025-01-25',
      keywords: 'inteligencia artificial, machine learning, empresas, transformación digital'
    },
    {
      url: '/blog/blockchain-web3-2025',
      title: 'Blockchain y Web3 en 2025: Oportunidades de Negocio',
      publishDate: '2025-01-24',
      keywords: 'blockchain, web3, criptomonedas, tecnología financiera'
    },
    {
      url: '/blog/automatizacion-procesos-ia-2025',
      title: 'Automatización de Procesos con IA en 2025',
      publishDate: '2025-01-23',
      keywords: 'automatización, inteligencia artificial, procesos empresariales'
    },
    {
      url: '/blog/realidad-virtual-desarrollo-web-2025',
      title: 'Realidad Virtual en Desarrollo Web 2025',
      publishDate: '2025-01-22',
      keywords: 'realidad virtual, desarrollo web, tecnología inmersiva'
    },
    {
      url: '/blog/devops-cicd-guia-completa-2025',
      title: 'DevOps y CI/CD: Guía Completa 2025',
      publishDate: '2025-01-21',
      keywords: 'devops, ci/cd, desarrollo software, automatización'
    }
  ]

  // Filter articles from the last 2 weeks
  const recentNews = recentArticles.filter(article => {
    const articleDate = new Date(article.publishDate)
    return articleDate >= twoWeeksAgo
  })

  const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentNews.map(article => `  <url>
    <loc>${baseUrl}${article.url}</loc>
    <news:news>
      <news:publication>
        <news:name>PLUS TECNOLOGIA Blog</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${article.publishDate}T10:00:00+01:00</news:publication_date>
      <news:title>${article.title}</news:title>
      <news:keywords>${article.keywords}</news:keywords>
      <news:stock_tickers></news:stock_tickers>
    </news:news>
    <lastmod>${article.publishDate}T10:00:00+01:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(newsSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800, s-maxage=1800', // 30 minutes cache for news
    },
  })
}
