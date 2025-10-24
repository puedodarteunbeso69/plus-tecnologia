import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  const baseUrl = 'https://plustecnologia.com'
  const lastModified = new Date().toISOString()

  // Define all images used across the site
  const imageUrls = [
    // Homepage images
    {
      url: `${baseUrl}/`,
      images: [
        {
          loc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop&auto=format&q=85',
          caption: 'Equipo de desarrollo trabajando en aplicaciones móviles',
          title: 'Desarrollo de aplicaciones móviles profesionales'
        },
        {
          loc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&auto=format&q=85',
          caption: 'Código de programación web moderno',
          title: 'Desarrollo web profesional'
        },
        {
          loc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop&auto=format&q=85',
          caption: 'Oficina moderna de tecnología',
          title: 'Consultoría IT empresarial'
        }
      ]
    },
    // Blog images
    {
      url: `${baseUrl}/blog`,
      images: [
        {
          loc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format&q=85',
          caption: 'Inteligencia Artificial y Machine Learning',
          title: 'IA para empresas 2025'
        },
        {
          loc: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=800&h=600&fit=crop&auto=format&q=85',
          caption: 'Realidad Virtual en desarrollo web',
          title: 'VR y desarrollo web 2025'
        },
        {
          loc: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop&auto=format&q=85',
          caption: 'Automatización de procesos con IA',
          title: 'Automatización empresarial IA'
        },
        {
          loc: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&auto=format&q=85',
          caption: 'Blockchain y Web3 tecnologías',
          title: 'Blockchain desarrollo empresarial'
        }
      ]
    },
    // Development services images
    {
      url: `${baseUrl}/desarrollo-movil`,
      images: [
        {
          loc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&h=600&fit=crop&auto=format&q=85',
          caption: 'Aplicaciones móviles iOS y Android',
          title: 'Desarrollo móvil nativo'
        },
        {
          loc: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&h=600&fit=crop&auto=format&q=85',
          caption: 'Desarrollo React Native',
          title: 'Apps multiplataforma React Native'
        }
      ]
    },
    {
      url: `${baseUrl}/desarrollo-web`,
      images: [
        {
          loc: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&h=600&fit=crop&auto=format&q=85',
          caption: 'Desarrollo web profesional',
          title: 'Sitios web empresariales'
        },
        {
          loc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&h=600&fit=crop&auto=format&q=85',
          caption: 'E-commerce y tiendas online',
          title: 'Desarrollo e-commerce profesional'
        }
      ]
    },
    // Portfolio and case studies
    {
      url: `${baseUrl}/portfolio`,
      images: [
        {
          loc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=85',
          caption: 'Casos de éxito desarrollo web',
          title: 'Portfolio desarrollo web'
        },
        {
          loc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&q=85',
          caption: 'Proyectos de tecnología avanzada',
          title: 'Portfolio tecnología empresarial'
        }
      ]
    }
  ]

  // Generate XML sitemap for images
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageUrls.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${lastModified}</lastmod>
${page.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:caption>${img.caption}</image:caption>
      <image:title>${img.title}</image:title>
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
