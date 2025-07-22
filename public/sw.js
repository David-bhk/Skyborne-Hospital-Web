/**
 * Service Worker pour SKYBORNE Hospital PWA
 * 
 * Ce Service Worker implémente une stratégie de cache optimisée pour un site médical :
 * 
 * Stratégies de cache :
 * 1. Navigation (HTML) : Network First avec fallback cache
 * 2. Assets statiques (CSS/JS/Images) : Cache First
 * 3. API et données : Network First avec cache de secours
 * 
 * Fonctionnalités :
 * - Cache intelligent des ressources critiques
 * - Fonctionnement hors ligne pour les pages essentielles
 * - Mise à jour automatique des caches
 * - Gestion des erreurs réseau
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

// ===== CONFIGURATION DU CACHE =====

/** Nom du cache principal - incrémenté à chaque version */
const CACHE_NAME = 'skyborne-hospital-v1.0.0';

/** 
 * Ressources critiques à mettre en cache immédiatement
 * Ces fichiers permettent un fonctionnement hors ligne minimal
 */
const CRITICAL_RESOURCES = [
  '/',                    // Page d'accueil
  '/manifest.json',       // Manifest PWA
  '/favicon.ico',         // Favicon
  // Logo principal pour l'identité de marque
  '/lovable-uploads/196efd1a-e11c-4c6b-925d-ca6a5f85a159.png',
];

// ===== INSTALLATION DU SERVICE WORKER =====

/**
 * Événement 'install' - Se déclenche lors de l'installation du SW
 * Met en cache les ressources critiques pour un accès hors ligne immédiat
 */
self.addEventListener('install', (event) => {
  console.log('🔧 Installation du Service Worker SKYBORNE Hospital');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('📦 Mise en cache des ressources critiques');
        return cache.addAll(CRITICAL_RESOURCES);
      })
      .then(() => {
        console.log('✅ Ressources critiques mises en cache');
        // Force l'activation immédiate du nouveau SW
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Erreur lors de la mise en cache initiale:', error);
      })
  );
});

// ===== ACTIVATION DU SERVICE WORKER =====

/**
 * Événement 'activate' - Se déclenche lors de l'activation du SW
 * Nettoie les anciens caches et prend le contrôle des clients
 */
self.addEventListener('activate', (event) => {
  console.log('🚀 Activation du Service Worker SKYBORNE Hospital');
  
  event.waitUntil(
    // Nettoyage des anciens caches
    caches.keys()
      .then((cacheNames) => {
        console.log('🧹 Nettoyage des anciens caches');
        
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Supprimer tous les caches qui ne correspondent pas à la version actuelle
            if (cacheName !== CACHE_NAME) {
              console.log('🗑️ Suppression du cache obsolète:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ Nettoyage terminé');
        // Prendre le contrôle de tous les clients immédiatement
        return self.clients.claim();
      })
      .catch((error) => {
        console.error('❌ Erreur lors de l\'activation:', error);
      })
  );
});

// ===== INTERCEPTION DES REQUÊTES =====

/**
 * Événement 'fetch' - Se déclenche pour chaque requête réseau
 * Implémente les stratégies de cache selon le type de ressource
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // ===== STRATÉGIE POUR LA NAVIGATION (HTML) =====
  // Network First : Essaie le réseau, fallback vers le cache
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Succès réseau : mettre en cache et retourner
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Échec réseau : chercher dans le cache
          console.log('🔄 Mode hors ligne - Récupération depuis le cache:', request.url);
          
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              
              // Si la page demandée n'est pas en cache, servir la page d'accueil
              return caches.match('/');
            });
        })
    );
    return;
  }

  // ===== STRATÉGIE POUR LES ASSETS STATIQUES =====
  // Cache First : Cherche d'abord dans le cache, puis réseau
  if (request.destination === 'image' || 
      request.destination === 'style' || 
      request.destination === 'script' ||
      request.destination === 'font') {
    
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // Ressource trouvée en cache
            return cachedResponse;
          }
          
          // Pas en cache : récupérer depuis le réseau et cacher
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(request, responseClone);
                });
              }
              return response;
            })
            .catch((error) => {
              console.error('❌ Erreur réseau pour:', request.url, error);
              
              // Pour les images, on pourrait retourner une image par défaut
              if (request.destination === 'image') {
                // TODO: Retourner une image placeholder
              }
              
              throw error;
            });
        })
    );
    return;
  }

  // ===== STRATÉGIE POUR LES AUTRES REQUÊTES =====
  // Network First avec cache de secours
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Succès : cacher les réponses 200 uniquement
        if (response.status === 200 && request.method === 'GET') {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Échec : essayer le cache
        return caches.match(request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              console.log('📱 Réponse hors ligne pour:', request.url);
              return cachedResponse;
            }
            
            // Aucune réponse disponible
            throw new Error('Ressource non disponible hors ligne');
          });
      })
  );
});

// ===== GESTION DES MESSAGES =====

/**
 * Gestion des messages depuis l'application principale
 * Permet le contrôle du Service Worker depuis le client
 */
self.addEventListener('message', (event) => {
  console.log('📨 Message reçu dans le Service Worker:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    // Force l'activation du nouveau Service Worker
    console.log('⚡ Activation forcée du nouveau Service Worker');
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    // Retourne la version du cache actuel
    event.ports[0].postMessage({
      type: 'VERSION',
      version: CACHE_NAME
    });
  }
});

// ===== GESTION DES ERREURS =====

/**
 * Gestion globale des erreurs du Service Worker
 */
self.addEventListener('error', (event) => {
  console.error('❌ Erreur dans le Service Worker:', event.error);
});

/**
 * Gestion des promesses rejetées non capturées
 */
self.addEventListener('unhandledrejection', (event) => {
  console.error('❌ Promesse rejetée non gérée:', event.reason);
  event.preventDefault();
});

console.log('🏥 Service Worker SKYBORNE Hospital initialisé - Version:', CACHE_NAME);
