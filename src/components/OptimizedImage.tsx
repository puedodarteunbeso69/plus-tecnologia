"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

// Generar placeholder blur programáticamente
const generateBlurDataURL = (width = 10, height = 10): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (ctx) {
    // Crear gradiente suave
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(0.5, '#e5e7eb');
    gradient.addColorStop(1, '#d1d5db');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  return canvas.toDataURL();
};

// Hook para detectar si la imagen está en viewport
const useIntersectionObserver = (ref: React.RefObject<HTMLElement>, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 75,
  sizes,
  fill = false,
  placeholder = "blur",
  blurDataURL
}: OptimizedImageProps) {
  const [imageRef, setImageRef] = useState<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBlurDataURL, setCurrentBlurDataURL] = useState<string>("");

  // Solo cargar la imagen si está cerca del viewport (lazy loading)
  const isVisible = useIntersectionObserver(
    { current: imageRef },
    { rootMargin: '200px' }
  );

  // Generar blur placeholder si no se proporciona uno
  useEffect(() => {
    if (placeholder === "blur" && !blurDataURL && typeof window !== 'undefined') {
      const blur = generateBlurDataURL(width || 400, height || 300);
      setCurrentBlurDataURL(blur);
    } else if (blurDataURL) {
      setCurrentBlurDataURL(blurDataURL);
    }
  }, [blurDataURL, width, height, placeholder]);

  // Optimizar URL de imagen
  const optimizedSrc = useMemo(() => {
    // Si es Unsplash, añadir parámetros de optimización
    if (src.includes('images.unsplash.com')) {
      const url = new URL(src);

      // Optimizar parámetros Unsplash
      if (!url.searchParams.has('auto')) {
        url.searchParams.set('auto', 'format,compress');
      }
      if (!url.searchParams.has('q') && !url.searchParams.has('quality')) {
        url.searchParams.set('q', quality.toString());
      }
      if (width && !url.searchParams.has('w')) {
        url.searchParams.set('w', width.toString());
      }
      if (height && !url.searchParams.has('h')) {
        url.searchParams.set('h', height.toString());
      }

      return url.toString();
    }

    return src;
  }, [src, quality, width, height]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Imagen de fallback si hay error
  const FallbackImage = () => (
    <div
      className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}
      style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
    >
      <div className="text-center text-gray-500">
        <svg
          className="w-12 h-12 mx-auto mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-xs">Imagen no disponible</p>
      </div>
    </div>
  );

  // Placeholder mientras carga
  const LoadingPlaceholder = () => (
    <div
      className={`bg-gray-200 animate-pulse ${className}`}
      style={{ width: fill ? '100%' : width, height: fill ? '100%' : height }}
    >
      {currentBlurDataURL && (
        <Image
          src={currentBlurDataURL}
          alt=""
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className="opacity-50"
        />
      )}
    </div>
  );

  if (hasError) {
    return <FallbackImage />;
  }

  return (
    <div
      ref={setImageRef}
      className={`relative overflow-hidden ${fill ? 'w-full h-full' : ''}`}
      style={!fill ? { width, height } : undefined}
    >
      {/* Mostrar placeholder si aún no es visible o está cargando */}
      {(!isVisible || (isLoading && !priority)) && <LoadingPlaceholder />}

      {/* Cargar imagen real cuando sea visible o si es priority */}
      {(isVisible || priority) && (
        <Image
          src={optimizedSrc}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          priority={priority}
          quality={quality}
          sizes={sizes}
          placeholder={placeholder === "blur" && currentBlurDataURL ? "blur" : "empty"}
          blurDataURL={currentBlurDataURL}
          onLoad={handleLoad}
          onError={handleError}
          // Optimizaciones adicionales
          style={
            fill
              ? {
                  objectFit: 'cover',
                  objectPosition: 'center'
                }
              : {
                  objectFit: 'cover',
                  objectPosition: 'center',
                  maxWidth: '100%'
                }
          }
        />
      )}

      {/* Overlay de carga para mejor UX */}
      {isLoading && (isVisible || priority) && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${fill ? 'w-full h-full' : ''}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}

// Hook adicional para precargar imágenes críticas
export const usePreloadImages = (imageSrcs: string[]) => {
  useEffect(() => {
    imageSrcs.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, [imageSrcs]);
};

// Componente para hero images con optimizaciones especiales
export function HeroImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      priority={true}
      quality={85}
      placeholder="blur"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    />
  );
}

// Componente para imágenes de cards/thumbnails
export function ThumbnailImage(props: OptimizedImageProps) {
  return (
    <OptimizedImage
      {...props}
      quality={70}
      placeholder="blur"
      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
    />
  );
}
