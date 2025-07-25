/**
 * Bundle Analysis Utilities for SKYBORNE Hospital
 * 
 * Helps monitor and optimize JavaScript bundle sizes
 * Critical for medical websites serving users with limited bandwidth in RDC
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

// ===== BUNDLE SIZE MONITORING =====

/**
 * Analyze loaded JavaScript modules and their sizes
 * Helps identify heavy dependencies that slow down the site
 */
export const analyzeBundleSize = () => {
  if (!('performance' in window)) {
    console.warn('⚠️ Performance API not supported');
    return;
  }

  // Get all loaded resources
  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  
  // Filter JavaScript files
  const jsResources = resources.filter(resource => 
    resource.name.includes('.js') || resource.name.includes('.jsx') || resource.name.includes('.ts')
  );

  const bundleAnalysis = {
    totalSize: 0,
    files: [] as Array<{
      name: string;
      size: number;
      loadTime: number;
      type: 'vendor' | 'app' | 'chunk'
    }>
  };

  jsResources.forEach(resource => {
    const size = resource.transferSize || 0;
    const loadTime = resource.responseEnd - resource.requestStart;
    
    let type: 'vendor' | 'app' | 'chunk' = 'app';
    if (resource.name.includes('vendor')) type = 'vendor';
    else if (resource.name.includes('chunk')) type = 'chunk';

    bundleAnalysis.files.push({
      name: resource.name.split('/').pop() || 'unknown',
      size: Math.round(size / 1024), // Convert to KB
      loadTime: Math.round(loadTime),
      type
    });

    bundleAnalysis.totalSize += size;
  });

  // Sort by size (largest first)
  bundleAnalysis.files.sort((a, b) => b.size - a.size);
  bundleAnalysis.totalSize = Math.round(bundleAnalysis.totalSize / 1024); // Convert to KB

  console.group('📦 SKYBORNE Hospital - Bundle Analysis');
  console.log(`📊 Total JS Size: ${bundleAnalysis.totalSize} KB`);
  
  if (bundleAnalysis.totalSize > 500) {
    console.warn('⚠️ Large bundle size may affect emergency access on slow connections');
  }

  console.table(bundleAnalysis.files);
  console.groupEnd();

  return bundleAnalysis;
};

/**
 * Monitor memory usage for the application
 * Important for long-running sessions (staff using the site all day)
 */
export const monitorMemoryUsage = () => {
  // Type assertion for performance.memory (experimental API)
  const performanceWithMemory = performance as unknown as {
    memory?: {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
      jsHeapSizeLimit: number;
    };
  };

  if (!performanceWithMemory.memory) {
    console.warn('⚠️ Memory API not supported');
    return;
  }

  const memory = performanceWithMemory.memory;
  const memoryInfo = {
    used: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
    total: Math.round(memory.totalJSHeapSize / 1024 / 1024), // MB
    limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) // MB
  };

  console.log('🧠 Memory Usage:', memoryInfo);

  if (memoryInfo.used > 50) {
    console.warn('⚠️ High memory usage detected:', memoryInfo.used, 'MB');
  }

  return memoryInfo;
};

/**
 * Check if the site is running on slow connection
 * Adjust features based on network conditions
 */
export const checkNetworkConditions = () => {
  // Type assertion for navigator.connection (experimental API)
  const navigatorWithConnection = navigator as unknown as {
    connection?: {
      effectiveType: string;
      downlink: number;
      rtt: number;
      saveData: boolean;
    };
  };

  if (!navigatorWithConnection.connection) {
    console.warn('⚠️ Network Information API not supported');
    return null;
  }

  const connection = navigatorWithConnection.connection;
  const networkInfo = {
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt,
    saveData: connection.saveData
  };

  console.log('🌐 Network Conditions:', networkInfo);

  // Recommendations for RDC users
  if (networkInfo.effectiveType === '2g' || networkInfo.effectiveType === 'slow-2g') {
    console.warn('🐌 Slow connection detected - consider showing lite version');
  }

  if (networkInfo.saveData) {
    console.log('💾 Save-Data mode enabled - optimize for data usage');
  }

  return networkInfo;
};

/**
 * Initialize all performance monitoring
 */
export const initBundleMonitoring = () => {
  console.log('🔍 SKYBORNE Hospital - Bundle monitoring started');

  // Run analysis after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      analyzeBundleSize();
      monitorMemoryUsage();
      checkNetworkConditions();
    }, 1000); // Wait 1 second after load
  });

  // Monitor memory usage every 5 minutes for staff using the site long-term
  setInterval(() => {
    monitorMemoryUsage();
  }, 5 * 60 * 1000);
};
