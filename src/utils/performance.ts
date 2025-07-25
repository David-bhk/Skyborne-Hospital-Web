/**
 * Performance Monitoring Utilities for SKYBORNE Hospital
 * 
 * Tracks Core Web Vitals and custom performance metrics
 * Essential for medical websites where speed impacts patient care
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { initBundleMonitoring } from './bundle-analysis';

// ===== CORE WEB VITALS TRACKING =====

/**
 * Measure and log First Contentful Paint (FCP)
 * Target: < 1.8s for good user experience
 */
export const measureFCP = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
      
      if (fcp) {
        console.log('🎨 First Contentful Paint:', Math.round(fcp.startTime), 'ms');
        
        // Log performance for hospital analytics
        if (fcp.startTime > 1800) {
          console.warn('⚠️ FCP too slow for medical website:', fcp.startTime);
        }
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
  }
};

/**
 * Measure Largest Contentful Paint (LCP)
 * Target: < 2.5s for medical websites
 */
export const measureLCP = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      console.log('🖼️ Largest Contentful Paint:', Math.round(lastEntry.startTime), 'ms');
      
      if (lastEntry.startTime > 2500) {
        console.warn('⚠️ LCP too slow - patients may leave:', lastEntry.startTime);
      }
    });
    
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
};

/**
 * Initialize performance monitoring
 * Call this in main.tsx to start tracking
 */
export const initPerformanceMonitoring = () => {
  console.log('📊 SKYBORNE Hospital - Performance monitoring started');
  
  measureFCP();
  measureLCP();
  
  // Initialize bundle monitoring
  initBundleMonitoring();
  
  // Basic page load timing
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    
    console.log('⚡ Page fully loaded in:', Math.round(loadTime), 'ms');
    
    if (loadTime > 3000) {
      console.warn('🏥 Slow load time may impact emergency access:', loadTime);
    }
  });
};
