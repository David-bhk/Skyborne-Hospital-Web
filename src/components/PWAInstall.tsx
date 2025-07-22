/**
 * Composant PWAInstall - Gestion intelligente de l'installation PWA
 * 
 * Ce composant affiche un banner d'installation pour transformer le site web
 * en application installable sur mobile et desktop. Il gère :
 * - La détection du support PWA du navigateur
 * - L'affichage intelligent du banner (après 10 secondes)
 * - La gestion de l'installation et du rejet
 * - Le stockage des préférences utilisateur (24h de délai après rejet)
 * 
 * Compatibilité :
 * - Chrome/Edge/Samsung Browser (Android)
 * - Safari (iOS 16.4+) - Installation manuelle
 * - Firefox - Support limité
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, X, Smartphone } from 'lucide-react';

/**
 * Interface étendue pour l'événement beforeinstallprompt
 * Cet événement n'est pas encore standardisé, d'où l'interface personnalisée
 */
interface BeforeInstallPromptEvent extends Event {
  /** Plateformes supportées pour l'installation */
  readonly platforms: string[];
  /** Promesse résolue avec le choix de l'utilisateur */
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  /** Méthode pour déclencher le prompt d'installation */
  prompt(): Promise<void>;
}

/**
 * Composant PWAInstall - Banner d'installation intelligent
 * 
 * Affiche un banner non-intrusif invitant l'utilisateur à installer l'application
 * SKYBORNE Hospital sur son appareil pour un accès rapide aux urgences
 */
const PWAInstall = () => {
  // ===== ÉTAT DU COMPOSANT =====
  
  /** Événement de prompt d'installation stocké */
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  
  /** Contrôle l'affichage du banner d'installation */
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  
  /** Indique si l'application est déjà installée */
  const [isInstalled, setIsInstalled] = useState(false);

  // ===== EFFETS ET GESTION DES ÉVÉNEMENTS =====
  
  useEffect(() => {
    /**
     * Vérifie si l'application est déjà installée
     * Utilise les API de détection PWA disponibles
     */
    const checkIfInstalled = () => {
      // Détection via display-mode (standard)
      const isStandaloneMode = window.matchMedia('(display-mode: standalone)').matches;
      
      // Détection iOS Safari (propriété non-standard)
      const isSafariStandalone = 'standalone' in window.navigator && 
        (window.navigator as { standalone?: boolean }).standalone === true;
      
      if (isStandaloneMode || isSafariStandalone) {
        setIsInstalled(true);
      }
    };

    /**
     * Gestionnaire pour l'événement beforeinstallprompt
     * Stocke le prompt pour utilisation ultérieure
     */
    const handleBeforeInstallPrompt = (e: Event) => {
      // Empêcher l'affichage automatique du prompt natif
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Afficher notre banner personnalisé après 10 secondes
      // (laisse le temps à l'utilisateur de voir le contenu principal)
      setTimeout(() => {
        if (!isInstalled) {
          setShowInstallBanner(true);
        }
      }, 10000); // 10 secondes
    };

    /**
     * Gestionnaire pour l'événement appinstalled
     * Se déclenche quand l'app est installée avec succès
     */
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallBanner(false);
      setDeferredPrompt(null);
      
      // Optionnel : Analytics ou notification de succès
      console.log('✅ SKYBORNE Hospital installé avec succès');
    };

    // ===== INITIALISATION =====
    checkIfInstalled();
    
    // ===== LISTENERS D'ÉVÉNEMENTS =====
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // ===== NETTOYAGE =====
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled]);

  // ===== GESTIONNAIRES D'ACTIONS =====

  /**
   * Déclenche le processus d'installation PWA
   * Utilise l'API BeforeInstallPrompt pour afficher le dialogue natif
   */
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      // Afficher le prompt d'installation natif
      await deferredPrompt.prompt();
      
      // Attendre la réponse de l'utilisateur
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setShowInstallBanner(false);
        console.log('✅ Installation acceptée par l\'utilisateur');
      } else {
        console.log('❌ Installation refusée par l\'utilisateur');
      }
      
      // Nettoyer le prompt utilisé
      setDeferredPrompt(null);
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'installation PWA:', error);
    }
  };

  /**
   * Ferme le banner et mémorise le choix
   * L'utilisateur ne sera plus sollicité pendant 24h
   */
  const handleDismiss = () => {
    setShowInstallBanner(false);
    
    // Stocker le timestamp du rejet pour éviter de re-solliciter trop tôt
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    
    console.log('ℹ️ Banner d\'installation fermé par l\'utilisateur');
  };

  // ===== CONDITIONS D'AFFICHAGE =====

  // Ne pas afficher si l'app est déjà installée
  if (isInstalled) {
    return null;
  }

  // Ne pas afficher si le prompt n'est pas disponible
  if (!deferredPrompt) {
    return null;
  }

  // Ne pas afficher si récemment fermé (respect du choix utilisateur)
  const lastDismissed = localStorage.getItem('pwa-install-dismissed');
  if (lastDismissed) {
    const timeSinceDismissed = Date.now() - parseInt(lastDismissed);
    const twentyFourHours = 24 * 60 * 60 * 1000; // 24h en millisecondes
    
    if (timeSinceDismissed < twentyFourHours) {
      return null;
    }
  }

  // Ne pas afficher si le banner n'est pas activé
  if (!showInstallBanner) {
    return null;
  }

  // ===== RENDU DU COMPOSANT =====
  
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="border-primary bg-gradient-to-r from-primary/5 to-secondary/10 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            
            {/* Icône de l'application */}
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary" />
            </div>
            
            {/* Contenu du banner */}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                Installer SKYBORNE Hospital
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Accédez rapidement aux urgences et services depuis votre écran d'accueil
              </p>
              
              {/* Boutons d'action */}
              <div className="flex gap-2">
                <Button 
                  onClick={handleInstallClick}
                  size="sm"
                  className="flex-1"
                  aria-label="Installer l'application SKYBORNE Hospital"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Installer
                </Button>
                
                <Button 
                  onClick={handleDismiss}
                  variant="outline"
                  size="sm"
                  className="px-3"
                  aria-label="Fermer le banner d'installation"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PWAInstall;
