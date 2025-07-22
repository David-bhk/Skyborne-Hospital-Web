import { ArrowRight, Heart, Users, Clock, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-hospital.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen bg-background">
      {/* Clean, minimal hero */}
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-center w-5 h-5 bg-primary/20 rounded-full">
                    <Shield className="w-3 h-3" />
                  </div>
                  Excellence médicale depuis toujours
                  <Sparkles className="w-4 h-4 text-primary/70" />
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-none">
                  <span className="block">Soins de</span>
                  <span className="block text-primary">haute qualité</span>
                  <span className="block text-muted-foreground text-4xl md:text-5xl lg:text-6xl font-light">
                    pour tous
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  SKYBORNE Hospital vous offre une médecine innovante et humaine à travers 
                  6 villes de la RDC, avec une équipe pluridisciplinaire dédiée à votre bien-être.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-lg px-8 py-4 h-auto"
                >
                  Découvrir nos services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 h-auto border-2"
                >
                  Prendre rendez-vous
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Lits disponibles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">6</div>
                  <div className="text-sm text-muted-foreground">Villes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Urgences</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="SKYBORNE Hospital - Équipe médicale" 
                  className="w-full h-[600px] object-cover rounded-2xl"
                />
                
                {/* Floating Card */}
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">99%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction patients</div>
                    </div>
                  </div>
                </div>

                {/* Service Highlights */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">Urgences 24h/24</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">Équipe spécialisée</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium">Équipements modernes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;