/**
 * Utilitaires de test SEO pour SKYBORNE Hospital
 * 
 * Ce fichier contient des outils et des guides pour tester l'optimisation SEO
 * du site SKYBORNE Hospital. Il inclut :
 * 
 * - Liste des termes de recherche ciblés
 * - URLs des outils de test SEO
 * - Scripts de vérification automatique
 * - Métriques de performance attendues
 * 
 * Utilisation :
 * 1. Ouvrir Chrome DevTools (F12)
 * 2. Aller dans l'onglet Console
 * 3. Importer ce module pour accéder aux fonctions de test
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

// ===== CONFIGURATION DES TESTS SEO =====

/**
 * Termes de recherche prioritaires pour SKYBORNE Hospital
 * Ces mots-clés devraient placer notre site dans les premiers résultats
 */
export const TARGET_SEARCH_TERMS = [
  // Recherches générales médicales
  "hôpital Goma",
  "clinique Nord-Kivu",
  "urgences Goma 24h",
  "médecin Goma",
  "soins médicaux RDC",
  
  // Recherches spécialisées
  "hôpital privé Congo",
  "centre médical Bukavu",
  "urgences médicales Kinshasa",
  "clinique Lubumbashi",
  
  // Recherches de marque
  "SKYBORNE Hospital",
  "SKYBORNE Goma",
  "hôpital Skyborne",
  
  // Recherches de services
  "consultation médicale RDC",
  "hospitalisation Congo",
  "urgences 24h/24 Goma",
  "spécialistes médicaux Nord-Kivu"
];

/**
 * URLs des outils de test SEO recommandés
 */
export const SEO_TESTING_TOOLS = {
  // Google
  lighthouse: "Chrome DevTools → Lighthouse → Generate Report",
  searchConsole: "https://search.google.com/search-console",
  richResults: "https://search.google.com/test/rich-results",
  mobileFriendly: "https://search.google.com/test/mobile-friendly",
  pagespeedInsights: "https://pagespeed.web.dev/",
  
  // Réseaux sociaux
  facebookDebugger: "https://developers.facebook.com/tools/debug/",
  twitterValidator: "https://cards-dev.twitter.com/validator",
  linkedinInspector: "https://www.linkedin.com/post-inspector/",
  
  // Métadonnées
  metaTagsChecker: "https://metatags.io/",
  schemaValidator: "https://validator.schema.org/",
  
  // Performance
  gtmetrix: "https://gtmetrix.com/",
  webpagetest: "https://www.webpagetest.org/"
};

/**
 * Scores SEO attendus pour SKYBORNE Hospital
 */
export const EXPECTED_SEO_SCORES = {
  lighthouse: {
    performance: 90,    // Score de performance minimum
    accessibility: 95,  // Score d'accessibilité minimum
    bestPractices: 95,  // Bonnes pratiques minimum
    seo: 100,          // Score SEO parfait attendu
    pwa: 100           // Score PWA parfait attendu
  },
  
  pagespeed: {
    mobile: {
      fcp: 1.8,        // First Contentful Paint < 1.8s
      lcp: 2.5,        // Largest Contentful Paint < 2.5s
      cls: 0.1,        // Cumulative Layout Shift < 0.1
      fid: 100         // First Input Delay < 100ms
    },
    desktop: {
      fcp: 1.2,        // First Contentful Paint < 1.2s
      lcp: 1.8,        // Largest Contentful Paint < 1.8s
      cls: 0.1,        // Cumulative Layout Shift < 0.1
      fid: 100         // First Input Delay < 100ms
    }
  }
};

// ===== FONCTIONS DE TEST =====

/**
 * Vérifie la présence des métadonnées SEO essentielles
 * À exécuter dans la console du navigateur
 */
export const checkSEOMetadata = () => {
  console.log("🔍 Vérification des métadonnées SEO...");
  
  const tests = [
    {
      name: "Title",
      element: document.querySelector('title'),
      test: (el: Element | null) => el?.textContent?.includes('SKYBORNE Hospital')
    },
    {
      name: "Meta Description",
      element: document.querySelector('meta[name="description"]'),
      test: (el: Element | null) => el?.getAttribute('content')?.length && el.getAttribute('content')!.length > 120
    },
    {
      name: "Meta Keywords",
      element: document.querySelector('meta[name="keywords"]'),
      test: (el: Element | null) => el?.getAttribute('content')?.includes('hôpital')
    },
    {
      name: "Open Graph Title",
      element: document.querySelector('meta[property="og:title"]'),
      test: (el: Element | null) => el?.getAttribute('content')?.includes('SKYBORNE')
    },
    {
      name: "Open Graph Image",
      element: document.querySelector('meta[property="og:image"]'),
      test: (el: Element | null) => !!el?.getAttribute('content')
    },
    {
      name: "Canonical URL",
      element: document.querySelector('link[rel="canonical"]') || document.querySelector('meta[property="og:url"]'),
      test: (el: Element | null) => !!el?.getAttribute('content') || !!el?.getAttribute('href')
    },
    {
      name: "Schema.org JSON-LD",
      element: document.querySelector('script[type="application/ld+json"]'),
      test: (el: Element | null) => {
        if (!el) return false;
        try {
          const data = JSON.parse(el.textContent || '');
          return data['@type'] === 'Hospital';
        } catch {
          return false;
        }
      }
    }
  ];
  
  tests.forEach(test => {
    const passed = test.test(test.element);
    console.log(`${passed ? '✅' : '❌'} ${test.name}: ${passed ? 'OK' : 'MANQUANT'}`);
    
    if (!passed && test.element) {
      console.log(`   Élément trouvé:`, test.element);
    }
  });
};

/**
 * Vérifie les performances PWA
 * À exécuter dans la console du navigateur
 */
export const checkPWAFeatures = () => {
  console.log("📱 Vérification des fonctionnalités PWA...");
  
  const pwaTests = [
    {
      name: "Service Worker",
      test: () => 'serviceWorker' in navigator
    },
    {
      name: "Manifest",
      test: () => !!document.querySelector('link[rel="manifest"]')
    },
    {
      name: "App Icons",
      test: () => !!document.querySelector('link[rel="apple-touch-icon"]')
    },
    {
      name: "Theme Color",
      test: () => !!document.querySelector('meta[name="theme-color"]')
    },
    {
      name: "Viewport Meta",
      test: () => !!document.querySelector('meta[name="viewport"]')
    }
  ];
  
  pwaTests.forEach(test => {
    const passed = test.test();
    console.log(`${passed ? '✅' : '❌'} ${test.name}: ${passed ? 'OK' : 'MANQUANT'}`);
  });
  
  // Vérifier l'état du Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      console.log(`✅ Service Worker actif:`, registration.active?.scriptURL);
    });
  }
};

/**
 * Simule les recherches Google pour tester le référencement
 */
export const simulateSearchTests = () => {
  console.log("🔍 Simulation des recherches Google...");
  console.log("Pour chaque terme, votre site devrait apparaître dans les 5 premiers résultats:\n");
  
  TARGET_SEARCH_TERMS.forEach((term, index) => {
    console.log(`${index + 1}. "${term}"`);
    console.log(`   → https://www.google.com/search?q=${encodeURIComponent(term)}`);
  });
  
  console.log("\n💡 Conseil: Testez ces recherches dans un navigateur privé pour des résultats non biaisés");
};

/**
 * Guide de test complet SEO
 */
export const runFullSEOTest = () => {
  console.log("🚀 SKYBORNE Hospital - Test SEO Complet");
  console.log("=====================================\n");
  
  checkSEOMetadata();
  console.log("");
  checkPWAFeatures();
  console.log("");
  simulateSearchTests();
  
  console.log("\n📊 Prochaines étapes:");
  console.log("1. Exécuter Lighthouse (F12 → Lighthouse)");
  console.log("2. Tester sur PageSpeed Insights");
  console.log("3. Valider les rich snippets Google");
  console.log("4. Vérifier le partage sur réseaux sociaux");
};

// ===== EXPORT DES FONCTIONS =====

// Pour utilisation en tant que module ES6
export default {
  TARGET_SEARCH_TERMS,
  SEO_TESTING_TOOLS,
  EXPECTED_SEO_SCORES,
  checkSEOMetadata,
  checkPWAFeatures,
  simulateSearchTests,
  runFullSEOTest
};

// ===== EXEMPLE D'UTILISATION =====

/*
// Dans la console du navigateur :

// Test rapide
import seoTest from './utils/seo-test.ts';
seoTest.runFullSEOTest();

// Tests individuels
seoTest.checkSEOMetadata();
seoTest.checkPWAFeatures();
seoTest.simulateSearchTests();

// Accès aux données
console.log(seoTest.TARGET_SEARCH_TERMS);
console.log(seoTest.SEO_TESTING_TOOLS);

*/
