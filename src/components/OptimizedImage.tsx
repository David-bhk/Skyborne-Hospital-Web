/**
 * Composant OptimizedImage - Gestion intelligente des images SKYBORNE Hospital
 * 
 * Fonctionnalités :
 * - Lazy loading automatique pour les performances
 * - Formats WebP avec fallback JPG
 * - Responsive images avec srcset
 * - Alt text SEO optimisé
 * - Gestion des erreurs de chargement
 * - Placeholder pendant le chargement
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  /** Nom de l'image (sans extension) */
  src: string;
  /** Texte alternatif pour l'accessibilité et le SEO */
  alt: string;
  /** Classes CSS personnalisées */
  className?: string;
  /** Largeur de l'image */
  width?: number;
  /** Hauteur de l'image */
  height?: number;
  /** Priorité de chargement (pour les images above-the-fold) */
  priority?: boolean;
  /** Tailles responsive */
  sizes?: string;
}

/**
 * Composant OptimizedImage
 * Charge automatiquement la meilleure version de l'image selon le navigateur
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Construction des URLs pour différents formats
  const jpgSrc = `/assets/${src}.jpg`;
  const webpSrc = `/assets/${src}.webp`;
  const fallbackSrc = `/assets/${src}.jpg`;

  /**
   * Gestion de la fin de chargement
   */
  const handleLoad = () => {
    setIsLoading(false);
  };

  /**
   * Gestion des erreurs de chargement
   */
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder pendant le chargement */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-primary/10 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-primary/50 text-sm">Chargement...</div>
        </div>
      )}

      {/* Image optimisée avec support WebP */}
      {!hasError ? (
        <picture>
          {/* Version WebP pour les navigateurs modernes */}
          <source 
            srcSet={webpSrc} 
            type="image/webp"
            sizes={sizes}
          />
          
          {/* Version JPG pour tous les navigateurs */}
          <img
            src={jpgSrc}
            alt={alt}
            width={width}
            height={height}
            className={cn(
              "transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100",
              className
            )}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </picture>
      ) : (
        /* Fallback en cas d'erreur */
        <div 
          className="bg-muted flex items-center justify-center text-muted-foreground"
          style={{ width, height }}
        >
          <span className="text-sm">Image non disponible</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
