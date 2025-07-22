/**
 * Composant App - Point d'entrée principal de l'application SKYBORNE Hospital
 * 
 * Ce composant configure tous les providers nécessaires :
 * - HelmetProvider : Gestion des métadonnées SEO dynamiques
 * - QueryClientProvider : Gestion de l'état et du cache des données
 * - TooltipProvider : Support des tooltips accessibles
 * - BrowserRouter : Navigation côté client
 * 
 * Architecture de routage :
 * - Route principale "/" : Page d'accueil (site one-page)
 * - Route catch-all "*" : Page 404 pour les URLs invalides
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// ===== CONFIGURATION DES CLIENTS =====

/**
 * Configuration du client TanStack Query
 * Gère le cache et la synchronisation des données
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache par défaut de 5 minutes
      staleTime: 1000 * 60 * 5,
      // Retry automatique en cas d'erreur
      retry: 2,
    },
  },
});

/**
 * Composant App principal
 * Configure la hiérarchie des providers et le routage
 */
const App = () => (
  // Provider pour les métadonnées SEO dynamiques
  <HelmetProvider>
    {/* Provider pour la gestion des données et du cache */}
    <QueryClientProvider client={queryClient}>
      {/* Provider pour les tooltips accessibles */}
      <TooltipProvider>
        {/* Systèmes de notification */}
        <Toaster />
        <Sonner />
        
        {/* Routeur principal */}
        <BrowserRouter>
          <Routes>
            {/* Page d'accueil - Site one-page avec toutes les sections */}
            <Route path="/" element={<Index />} />
            
            {/* AJOUTER TOUTES LES ROUTES PERSONNALISÉES AU-DESSUS DE LA ROUTE CATCH-ALL */}
            
            {/* Route catch-all pour les URLs non trouvées */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
