import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Vérifier si l'app est déjà installée
    const checkIfInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches || 
          ('standalone' in window.navigator && (window.navigator as { standalone?: boolean }).standalone === true)) {
        setIsInstalled(true);
      }
    };

    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Afficher le banner après 10 secondes si pas encore installé
      setTimeout(() => {
        if (!isInstalled) {
          setShowInstallBanner(true);
        }
      }, 10000);
    };

    // Écouter l'installation
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallBanner(false);
      setDeferredPrompt(null);
    };

    checkIfInstalled();
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isInstalled]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setShowInstallBanner(false);
      }
      
      setDeferredPrompt(null);
    } catch (error) {
      console.error('Erreur lors de l\'installation:', error);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    // Ne plus afficher pendant 24h
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  // Ne pas afficher si déjà installé ou si récemment fermé
  if (isInstalled || !showInstallBanner || !deferredPrompt) {
    return null;
  }

  const lastDismissed = localStorage.getItem('pwa-install-dismissed');
  if (lastDismissed && (Date.now() - parseInt(lastDismissed)) < 24 * 60 * 60 * 1000) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <Card className="border-primary bg-gradient-to-r from-primary/5 to-secondary/10 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-primary" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">
                Installer SKYBORNE Hospital
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Accédez rapidement aux urgences et services depuis votre écran d'accueil
              </p>
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleInstallClick}
                  size="sm"
                  className="flex-1"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Installer
                </Button>
                
                <Button 
                  onClick={handleDismiss}
                  variant="outline"
                  size="sm"
                  className="px-3"
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
