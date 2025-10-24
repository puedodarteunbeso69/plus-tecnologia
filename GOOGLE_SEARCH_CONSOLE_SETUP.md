# 🔍 Configuración de Google Search Console para PLUS TECNOLOGIA

## 📋 Guía Paso a Paso

### 1. Acceso a Google Search Console
1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google (usa la cuenta empresarial de PLUS TECNOLOGIA)

### 2. Agregar Propiedad
1. Haz clic en **"Agregar propiedad"**
2. Selecciona **"Prefijo de URL"**
3. Introduce: `https://plustecnologia.com`
4. Haz clic en **"Continuar"**

### 3. Verificación del Sitio Web

#### Método Recomendado: Archivo HTML
1. Selecciona **"Archivo HTML"** como método de verificación
2. Descarga el archivo de verificación (ej: `google1234567890abcdef.html`)
3. Sube el archivo a la carpeta `/public/` del proyecto
4. Verifica que sea accesible en: `https://plustecnologia.com/google1234567890abcdef.html`
5. Vuelve a Search Console y haz clic en **"Verificar"**

#### Método Alternativo: Meta Tag
Si prefieres usar meta tag:
1. Copia el meta tag proporcionado
2. Añádelo a la variable de entorno: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="código-aquí"`
3. Redeploya el sitio en Netlify
4. Verifica en Search Console

### 4. Envío de Sitemaps
Una vez verificado el sitio:

1. Ve a **"Sitemaps"** en el menú lateral
2. Añade estos sitemaps uno por uno:
   - `sitemap.xml` (sitemap principal)
   - `sitemap-images.xml` (sitemap de imágenes)
   - `sitemap-news.xml` (sitemap de noticias/blog)
   - `sitemap-index.xml` (índice de sitemaps)

### 5. Configuración de Variables de Entorno

En Netlify, añade estas variables:

```bash
# Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="tu-código-de-verificación"

# Otros motores de búsqueda (opcionales)
NEXT_PUBLIC_BING_VERIFICATION="código-bing"
NEXT_PUBLIC_YANDEX_VERIFICATION="código-yandex"
```

## 📊 Funcionalidades Disponibles

### 1. Rendimiento de Búsqueda
- **Clics**: Número total de clics desde Google
- **Impresiones**: Veces que aparece tu sitio en resultados
- **CTR**: Porcentaje de clics vs impresiones
- **Posición media**: Posición promedio en resultados

### 2. Cobertura del Índice
- Páginas indexadas correctamente
- Páginas con errores
- Páginas excluidas
- Páginas válidas con advertencias

### 3. Datos Estructurados
- Validación de JSON-LD
- Rich snippets detectados
- Errores en structured data

### 4. Core Web Vitals
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)

### 5. Optimización Móvil
- Problemas de usabilidad móvil
- Páginas no optimizadas para móvil

## 🔧 Configuraciones Recomendadas

### 1. Alertas por Email
1. Ve a **"Configuración"** → **"Usuarios y permisos"**
2. Configura alertas para:
   - Errores críticos de rastreo
   - Problemas de datos estructurados
   - Caídas significativas en el rendimiento

### 2. Segmentación Geográfica
1. Ve a **"Configuración"** → **"Configuración"**
2. Establece **"País de destino"** como **España**

### 3. Velocidad de Rastreo
1. Ve a **"Configuración"** → **"Velocidad de rastreo"**
2. Mantén en **"Automático"** (recomendado)

## 📈 Métricas Clave a Monitorear

### Diariamente
- [ ] Errores críticos nuevos
- [ ] Caídas significativas en clics/impresiones

### Semanalmente
- [ ] Rendimiento de palabras clave principales
- [ ] Estado de indexación de páginas nuevas
- [ ] Core Web Vitals

### Mensualmente
- [ ] Análisis completo de rendimiento
- [ ] Revisión de datos estructurados
- [ ] Optimización de contenido basada en queries

## 🚨 Problemas Comunes y Soluciones

### 1. "Rastreado - actualmente sin indexar"
**Solución**: Mejorar la autoridad de la página, internal linking

### 2. "Descubierta - actualmente sin indexar"
**Solución**: Revisar robots.txt, añadir internal links

### 3. Errores de datos estructurados
**Solución**: Validar JSON-LD en [Schema Markup Validator](https://validator.schema.org/)

### 4. Problemas de velocidad móvil
**Solución**: Optimizar imágenes, minimizar JavaScript

## 🔗 Herramientas Adicionales

### Testing Tools
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Monitoring Dashboard
- Accede a `/admin/seo` para el dashboard interno de monitoreo SEO

## 📞 Soporte

Si necesitas ayuda con la configuración:
1. Consulta la [documentación oficial](https://support.google.com/webmasters/)
2. Usa el dashboard de monitoreo interno: `/admin/seo`
3. Contacta al equipo técnico de PLUS TECNOLOGIA

---

**🎯 Objetivo**: Tener Search Console completamente configurado y monitoreando el sitio para optimización SEO continua.

**⏱️ Tiempo estimado**: 30-45 minutos para configuración inicial

**📊 Datos disponibles**: 24-48 horas después de la verificación inicial
