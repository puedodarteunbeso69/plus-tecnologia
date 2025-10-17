/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Para generar sitio estático en Next.js 15+

  // Desactivar ESLint durante builds para deployment
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Opcional: prevenir advertencia de CORS en desarrollo (solo si ves esa advertencia)
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
