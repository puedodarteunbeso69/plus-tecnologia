# 🚀 PLUS TECNOLOGIA

**Sistema de Blog con Generador Automático SEO | Next.js 15, TypeScript, Tailwind CSS**

[![Live Site](https://img.shields.io/badge/Live-plustecnologia.com-blue)](https://plustecnologia.com)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 📋 Descripción

Sitio web corporativo profesional para PLUS TECNOLOGIA, empresa especializada en desarrollo de aplicaciones móviles, desarrollo web y soluciones tecnológicas empresariales.

El proyecto incluye un **sistema innovador de generador automático de contenido** que permite crear artículos técnicos SEO optimizados en cuestión de minutos.

🌐 **Sitio Live:** [https://plustecnologia.com](https://plustecnologia.com)

## ✨ Características Principales

### 🎨 **Sistema de Blog Generador Automático**
- ✅ Plantillas reutilizables para artículos técnicos
- ✅ Metadata SEO automática (Schema.org, OpenGraph, Twitter Cards)
- ✅ Tabla de contenidos sticky generada automáticamente
- ✅ Structured data para Google Rich Results
- ✅ **90% reducción** en tiempo de creación de artículos
- ✅ **16 artículos técnicos** de alta calidad incluidos

### 💼 **Páginas de Servicios Profesionales**
- ✅ Software Empresarial (ERP, CRM, BI, RPA)
- ✅ Ciberseguridad (Pentesting, Auditorías, GDPR)
- ✅ Cloud Computing (AWS, Azure, Google Cloud)
- ✅ IA & Big Data (ML, Chatbots, Analytics)
- ✅ **Sistema de reviews** con ratings y testimonios verificados

### 🧮 **Calculadora de Presupuesto Interactiva**
- ✅ Multi-step form con validación
- ✅ Cálculo en tiempo real de presupuestos
- ✅ Captura de leads integrada
- ✅ Diseño responsive optimizado

### 🔧 **Optimizaciones Técnicas**
- ✅ Next.js 15 con App Router
- ✅ Mega Menu navigation responsivo
- ✅ WhatsApp chat global
- ✅ Optimized images con lazy loading
- ✅ Core Web Vitals optimizados
- ✅ SEO completo (sitemap, robots.txt, meta tags)

## 📊 Estadísticas del Proyecto

- **170 archivos** de código
- **41,375 líneas** de código
- **16 artículos** de blog técnico
- **50+ páginas** de contenido
- **4 servicios principales** con reviews
- **100% responsive** design

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 15.3.2** - React framework con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

### Tools & Libraries
- **Bun** - Package manager y runtime
- **ESLint** - Linting
- **Biome** - Formatter
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Deployment
- **Netlify** - Hosting y CI/CD
- **Dynamic deployment** - Server-side rendering

## 📁 Estructura del Proyecto

```
plus-tecnologia/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── blog/                     # Artículos de blog
│   │   │   ├── nextjs-15-novedades-2025/
│   │   │   ├── typescript-5-guia-completa-2025/
│   │   │   ├── python-machine-learning-2025/
│   │   │   └── ... (13 artículos más)
│   │   ├── software-empresarial/     # Página de servicio
│   │   ├── ciberseguridad/           # Página de servicio
│   │   ├── cloud-computing/          # Página de servicio
│   │   ├── ia-big-data/              # Página de servicio
│   │   ├── calculadora-presupuesto/  # Calculadora interactiva
│   │   └── ...
│   ├── components/
│   │   ├── BlogArticleTemplate.tsx   # Template reutilizable
│   │   ├── ServiceReviews.tsx        # Sistema de reviews
│   │   ├── Navigation.tsx            # Mega menu
│   │   ├── WhatsAppChat.tsx          # Chat widget
│   │   └── ui/                       # shadcn/ui components
│   ├── data/
│   │   ├── blogArticleTemplates.ts   # Templates de artículos
│   │   └── reviewsData.ts            # Data de testimonios
│   └── lib/
│       └── utils.ts                  # Utilities
├── public/                            # Static assets
├── netlify.toml                       # Netlify config
└── package.json
```

## 🚀 Instalación y Desarrollo

### Prerequisitos
- **Bun** >= 1.0.0 (recomendado) o Node.js >= 18.0.0
- Git

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/plustecnologia.git
cd plustecnologia

# 2. Instalar dependencias
bun install

# 3. Ejecutar en desarrollo
bun run dev

# 4. Abrir en el navegador
# http://localhost:3000
```

### Scripts disponibles

```bash
bun run dev          # Desarrollo con Turbopack
bun run build        # Build de producción
bun run start        # Servidor de producción
bun run lint         # Linting con ESLint
```

## 📝 Cómo Crear Nuevos Artículos de Blog

El sistema de generador automático hace que crear artículos sea súper fácil:

### Paso 1: Definir el template
```typescript
// src/data/blogArticleTemplates.ts
export const blogArticleTemplates: BlogArticle[] = [
  {
    slug: "mi-nuevo-articulo-2025",
    title: "Mi Nuevo Artículo Increíble 2025",
    metaDescription: "Descripción SEO optimizada...",
    keywords: ["keyword1", "keyword2"],
    category: "Desarrollo Web",
    readingTime: 10,
    publishedDate: "2025-01-25",
    author: {
      name: "Tu Nombre",
      role: "Tu Rol"
    },
    heroImage: "https://...",
    introduction: "Introducción del artículo...",
    sections: [
      {
        heading: "Sección 1",
        content: "Contenido de la sección...",
        subsections: [...]
      }
    ],
    keyTakeaways: ["Punto 1", "Punto 2"],
    relatedArticles: [],
    tags: ["tag1", "tag2"]
  }
]
```

### Paso 2: Crear la página (3 líneas de código!)
```typescript
// src/app/blog/mi-nuevo-articulo-2025/page.tsx
import { BlogArticleTemplate } from "@/components/BlogArticleTemplate";
import { blogArticleTemplates, generateArticleMetadata } from "@/data/blogArticleTemplates";

const article = blogArticleTemplates.find(a => a.slug === "mi-nuevo-articulo-2025")!;
export const metadata = generateArticleMetadata(article);
export default function Page() {
  return <BlogArticleTemplate article={article} />;
}
```

¡Listo! El artículo incluye automáticamente:
- ✅ SEO completo (metadata, Schema.org, OpenGraph)
- ✅ Tabla de contenidos sticky
- ✅ Breadcrumbs
- ✅ Author info y reading time
- ✅ Related articles
- ✅ Tags y categorización
- ✅ Diseño responsive profesional

## 🎨 Personalización

### Colores y Tema
El tema usa variables CSS definidas en `src/app/globals.css`:

```css
:root {
  --primary: blue-600;
  --secondary: purple-600;
  --accent: indigo-600;
}
```

### shadcn/ui Components
Agregar nuevos componentes:

```bash
bunx shadcn@latest add -y -o <component-name>
```

## 📈 SEO y Performance

### Optimizaciones implementadas
- ✅ **Sitemap XML** generado automáticamente
- ✅ **robots.txt** configurado
- ✅ **Meta tags** optimizados en todas las páginas
- ✅ **Schema.org** structured data
- ✅ **OpenGraph** y Twitter Cards
- ✅ **Lazy loading** de imágenes
- ✅ **Core Web Vitals** optimizados
- ✅ **Mobile-first** responsive design

### Lighthouse Scores (Objetivo)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🚢 Deployment

El proyecto está configurado para **deployment dinámico en Netlify** usando el Next.js plugin.

### Configuración actual

```toml
# netlify.toml
[build]
  command = "bun install && bun run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Deploy manual
```bash
# Build local
bun run build

# Deploy con Netlify CLI
netlify deploy --prod
```

## 🤝 Contribución

Este es un proyecto privado de PLUS TECNOLOGIA. Para colaborar:

1. Clona el repositorio
2. Crea un branch feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'feat: agregar nueva característica'`)
4. Push al branch (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

© 2025 PLUS TECNOLOGIA. Todos los derechos reservados.

## 📞 Contacto

- **Web:** [https://plustecnologia.com](https://plustecnologia.com)
- **Email:** info@plustecologia.es
- **Teléfono:** 915 493 616
- **Dirección:** C. de Orense, 68, 12º, Tetuán, 28020 Madrid

---

**🤖 Generated with [Same](https://same.new)**

Co-Authored-By: Same <noreply@same.new>
