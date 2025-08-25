/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para generar sitio estático en Next.js 15+

  // Base URL para Open Graph / Twitter metadata (importante si usas SEO avanzado)
  metadataBase: new URL('https://plus-tecnologia.netlify.app'),

  // Opcional: prevenir advertencia de CORS en desarrollo (solo si ves esa advertencia)
  allowedDevOrigins: ['https://plus-tecnologia.netlify.app'],

  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
