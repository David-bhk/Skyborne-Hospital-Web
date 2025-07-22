/**
 * Configuration Vite pour SKYBORNE Hospital Website
 * 
 * Cette configuration optimise :
 * - Le développement avec React + TypeScript + SWC
 * - Le build de production avec optimisations PWA
 * - La résolution des chemins avec alias @/
 * - Le chunking intelligent des dépendances
 * - Le support des Service Workers
 * 
 * Plugins utilisés :
 * - @vitejs/plugin-react-swc : Fast Refresh avec SWC (plus rapide que Babel)
 * - lovable-tagger : Tagging des composants en développement
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ===== CONFIGURATION PRINCIPALE =====

export default defineConfig(({ mode }) => ({
  
  // ===== CONFIGURATION DU SERVEUR DE DÉVELOPPEMENT =====
  server: {
    host: "::", // Écoute sur toutes les interfaces (IPv4 + IPv6)
    port: 8080, // Port personnalisé pour éviter les conflits
  },
  
  // ===== PLUGINS =====
  plugins: [
    // Plugin React avec SWC (compilateur ultra-rapide)
    react(),
    
    // Plugin de tagging en développement uniquement
    // Aide au debugging et à l'identification des composants
    mode === 'development' && componentTagger(),
  ].filter(Boolean), // Supprime les plugins falsy
  
  // ===== RÉSOLUTION DES MODULES =====
  resolve: {
    alias: {
      // Alias @ pour pointer vers le dossier src
      // Permet d'écrire @/components au lieu de ../../../components
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // ===== CONFIGURATION DU BUILD DE PRODUCTION =====
  build: {
    // Configuration Rollup pour l'optimisation des chunks
    rollupOptions: {
      output: {
        // Séparation intelligente des dépendances
        manualChunks: {
          // Chunk vendor : Bibliothèques React principales
          vendor: ['react', 'react-dom'],
          
          // Chunk UI : Composants d'interface Radix UI
          ui: [
            '@radix-ui/react-dialog', 
            '@radix-ui/react-toast',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-accordion'
          ],
          
          // Chunk routing : Navigation et routage
          routing: ['react-router-dom'],
          
          // Chunk forms : Gestion des formulaires
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          
          // Chunk query : Gestion des données
          query: ['@tanstack/react-query'],
        },
      },
    },
    
    // Optimisations pour les gros bundles
    chunkSizeWarningLimit: 1000, // 1MB limit avant warning
  },
  
  // ===== VARIABLES D'ENVIRONNEMENT =====
  define: {
    // Injection de la variable NODE_ENV pour les optimisations conditionnelles
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  
  // ===== OPTIMISATIONS PWA =====
  // Les Service Workers sont gérés manuellement dans public/sw.js
  // pour un contrôle total du cache et des stratégies hors ligne
  
}));
