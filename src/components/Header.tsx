import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>+243976721956 / +243993412886</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Av. Grevilleas, N026, C/ de GOMA</span>
            </div>
          </div>
          <div className="text-center">
            <span className="font-medium">Service d'urgence 24h/24</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/assets/skyborne-hospital-logo.png" 
                  alt="SKYBORNE Hospital Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">SKYBORNE HOSPITAL</h1>
                <p className="text-sm text-muted-foreground">Votre Santé, Notre Priorité</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('a-propos')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Nos services
              </button>
              <button 
                onClick={() => scrollToSection('implantations')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Nos implantations
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="default"
                className="bg-primary hover:bg-primary-dark"
              >
                Contact
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('accueil')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Accueil
                </button>
                <button 
                  onClick={() => scrollToSection('a-propos')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  À propos
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Nos services
                </button>
                <button 
                  onClick={() => scrollToSection('implantations')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Nos implantations
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="default"
                  className="w-full bg-primary hover:bg-primary-dark mt-2"
                >
                  Contact
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;