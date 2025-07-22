/**
 * Point d'entrée principal de l'application SKYBORNE Hospital
 * 
 * Ce fichier :
 * 1. Monte l'application React sur le DOM
 * 2. Configure le mode strict pour le développement
 * 3. Enregistre le Service Worker pour les fonctionnalités PWA
 * 
 * Service Worker :
 * - Cache intelligent des ressources
 * - Fonctionnement hors ligne
 * - Notifications push (futur)
 * - Mise à jour automatique
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ===== ENREGISTREMENT DU SERVICE WORKER PWA =====

/**
 * Enregistre le Service Worker pour les fonctionnalités PWA
 * Ne s'active qu'en production pour éviter les problèmes de développement
 */
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('✅ Service Worker enregistré avec succès:', registration.scope);
        
        // Écouter les mises à jour du Service Worker
        registration.addEventListener('updatefound', () => {
          console.log('🔄 Nouvelle version détectée, mise à jour en cours...');
        });
      })
      .catch((registrationError) => {
        console.error('❌ Échec de l\'enregistrement du Service Worker:', registrationError);
      });
  });
}

// ===== MONTAGE DE L'APPLICATION REACT =====

/**
 * Point de montage de l'application React
 * Utilise React 18 avec le nouveau createRoot API
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("❌ Élément root non trouvé dans le DOM");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
