/**
 * Loading Components for SKYBORNE Hospital
 * 
 * Provides consistent loading indicators across the application
 * Medical websites need clear feedback during critical operations
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { cn } from '@/lib/utils';
import { Loader2, Heart } from 'lucide-react';

// ===== LOADING SPINNER =====

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  medical?: boolean; // Use medical heart icon instead of generic spinner
}

export const LoadingSpinner = ({ 
  size = 'md', 
  className,
  medical = false 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  if (medical) {
    return (
      <Heart 
        className={cn(
          'animate-pulse text-primary',
          sizeClasses[size],
          className
        )}
      />
    );
  }

  return (
    <Loader2 
      className={cn(
        'animate-spin text-primary',
        sizeClasses[size],
        className
      )}
    />
  );
};

// ===== LOADING OVERLAY =====

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  medical?: boolean;
  className?: string;
}

export const LoadingOverlay = ({ 
  isLoading, 
  message = 'Chargement...', 
  medical = true,
  className 
}: LoadingOverlayProps) => {
  if (!isLoading) return null;

  return (
    <div className={cn(
      'absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50',
      className
    )}>
      <div className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg shadow-lg border">
        <LoadingSpinner size="lg" medical={medical} />
        <p className="text-sm font-medium text-foreground">{message}</p>
      </div>
    </div>
  );
};

// ===== BUTTON LOADING STATE =====

interface LoadingButtonProps {
  isLoading: boolean;
  children: React.ReactNode;
  className?: string;
}

export const LoadingButton = ({ isLoading, children, className }: LoadingButtonProps) => {
  return (
    <div className={cn('relative inline-flex', className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </div>
      )}
      <div className={cn(isLoading && 'opacity-0')}>
        {children}
      </div>
    </div>
  );
};
