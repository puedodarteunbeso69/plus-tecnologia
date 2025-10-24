import { NextResponse } from 'next/server'

export const dynamic = 'force-static'
export const revalidate = false


interface VideoSitemapEntry {
  url: string
  videoUrl: string
  thumbnailUrl: string
  title: string
  description: string
  duration: number
  publishDate: string
}

export async function GET() {
  const baseUrl = 'https://plustecnologia.com'
  const lastModified = new Date().toISOString()

  // Future video content - currently empty but ready for expansion
  const videos: VideoSitemapEntry[] = [
    // Example structure for when videos are added:
    // {
    //   url: '/blog/ia-machine-learning-empresas-2025',
    //   videoUrl: 'https://example.com/video.mp4',
    //   thumbnailUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop',
    //   title: 'IA y Machine Learning para Empresas - Video Explicativo',
    //   description: 'Video explicativo sobre implementación de IA en empresas',
    //   duration: 300, // seconds
    //   publishDate: '2025-01-25'
    // }
  ]

  const videoSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${videos.length > 0 ? videos.map(video => `  <url>
    <loc>${baseUrl}${video.url}</loc>
    <video:video>
      <video:thumbnail_loc>${video.thumbnailUrl}</video:thumbnail_loc>
      <video:title>${video.title}</video:title>
      <video:description>${video.description}</video:description>
      <video:content_loc>${video.videoUrl}</video:content_loc>
      <video:duration>${video.duration}</video:duration>
      <video:publication_date>${video.publishDate}T10:00:00+01:00</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>
      <video:restriction relationship="allow">ES</video:restriction>
      <video:platform relationship="allow">web mobile</video:platform>
      <video:requires_subscription>no</video:requires_subscription>
      <video:live>no</video:live>
    </video:video>
    <lastmod>${lastModified}</lastmod>
  </url>`).join('\n') : `  <!-- No hay contenido de video disponible actualmente -->
  <!-- Este sitemap está preparado para cuando se añada contenido de video -->
  <!--
  Ejemplo de estructura para futuros videos:
  - Videos explicativos de servicios
  - Tutoriales técnicos
  - Casos de estudio en video
  - Presentaciones de proyectos
  -->`}
</urlset>`

  return new NextResponse(videoSitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
