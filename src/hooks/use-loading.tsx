/**
 * Loading States Hook for SKYBORNE Hospital
 * 
 * Provides consistent loading states across the application
 * Essential for medical websites where users need clear feedback
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { useState, useCallback } from 'react';

// ===== TYPES =====

interface LoadingState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

interface UseLoadingReturn extends LoadingState {
  startLoading: () => void;
  stopLoading: () => void;
  setError: (error: string) => void;
  setSuccess: () => void;
  reset: () => void;
  executeAsync: (asyncFn: () => Promise<unknown>) => Promise<unknown | null>;
}

// ===== HOOK =====

/**
 * Custom hook for managing loading states
 * Provides consistent UX across all interactive elements
 */
export const useLoading = (initialState: Partial<LoadingState> = {}): UseLoadingReturn => {
  const [state, setState] = useState<LoadingState>({
    isLoading: false,
    error: null,
    success: false,
    ...initialState
  });

  const startLoading = useCallback(() => {
    setState(prev => ({
      ...prev,
      isLoading: true,
      error: null,
      success: false
    }));
  }, []);

  const stopLoading = useCallback(() => {
    setState(prev => ({
      ...prev,
      isLoading: false
    }));
  }, []);

  const setError = useCallback((error: string) => {
    setState(prev => ({
      ...prev,
      isLoading: false,
      error,
      success: false
    }));
  }, []);

  const setSuccess = useCallback(() => {
    setState(prev => ({
      ...prev,
      isLoading: false,
      error: null,
      success: true
    }));
  }, []);

  const reset = useCallback(() => {
    setState({
      isLoading: false,
      error: null,
      success: false
    });
  }, []);

  // Execute async function with automatic loading state management
  const executeAsync = useCallback(async (asyncFn: () => Promise<unknown>): Promise<unknown | null> => {
    try {
      startLoading();
      const result = await asyncFn();
      setSuccess();
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
      setError(errorMessage);
      console.error('🏥 SKYBORNE Hospital - Async operation failed:', error);
      return null;
    }
  }, [startLoading, setError, setSuccess]);

  return {
    ...state,
    startLoading,
    stopLoading,
    setError,
    setSuccess,
    reset,
    executeAsync
  };
};
