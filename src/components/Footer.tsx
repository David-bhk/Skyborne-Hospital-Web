import { MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: "Accueil", action: () => scrollToSection('accueil') },
    { label: "À propos", action: () => scrollToSection('a-propos') },
    { label: "Nos services", action: () => scrollToSection('services') },
    { label: "Nos implantations", action: () => scrollToSection('implantations') },
    { label: "Contact", action: () => scrollToSection('contact') }
  ];

  const services = [
    "Neurochirurgie",
    "Cardiologie", 
    "Chirurgie générale",
    "Dentisterie",
    "Ophtalmologie",
    "Laboratoire & Imagerie"
  ];

  const locations = [
    "Goma (Siège)",
    "Walikale",
    "Kisangani",
    "Kolwezi",
    "Bisié",
    "Logu"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/196efd1a-e11c-4c6b-925d-ca6a5f85a159.png" 
                  alt="SKYBORNE Hospital Logo" 
                  className="w-10 h-10 object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">SKYBORNE HOSPITAL</h3>
                <p className="text-background/80 text-sm">Votre Santé, Notre Priorité</p>
              </div>
            </div>
            
            <p className="text-background/70 leading-relaxed mb-6">
              Structure médicale innovante et humaine présente dans 6 villes de la RDC. 
              Nous offrons des soins de haute qualité avec une équipe pluridisciplinaire.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <a href="tel:+243976721956" className="hover:text-primary transition-colors">
                    +243976721956
                  </a>
                  <span className="text-background/60"> / </span>
                  <a href="tel:+243993412886" className="hover:text-primary transition-colors">
                    +243993412886
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80">
                  <div>Av. Grevilleas, N026</div>
                  <div>C/ de GOMA, Nord-Kivu</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:contact@skyborne-hospital.cd" 
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  contact@skyborne-hospital.cd
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-background/80 hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos spécialités</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-background/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos implantations</h4>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index} className="text-background/80 text-sm">
                  {location}
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-destructive/20 rounded-lg border border-destructive/30">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4 text-destructive" />
                <span className="text-destructive font-semibold text-sm">Urgences 24h/24</span>
              </div>
              <a 
                href="tel:+243976721956"
                className="text-destructive hover:text-destructive/80 transition-colors font-bold"
              >
                +243976721956
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-background/70">
              <span>© 2024 SKYBORNE Hospital. Tous droits réservés.</span>
              <Heart className="w-4 h-4 text-primary" />
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-background/70">
              <button className="hover:text-primary transition-colors">
                Mentions légales
              </button>
              <button className="hover:text-primary transition-colors">
                Politique de confidentialité
              </button>
              <button className="hover:text-primary transition-colors">
                Conditions d'utilisation
              </button>
            </div>
          </div>
          
          <div className="text-center mt-6 text-background/60 text-sm">
            <p>Agrément ministériel en cours • Établissement de soins privé</p>
            <p className="mt-2">
              Site développé avec ❤️ pour améliorer l'accès aux soins de santé en RDC
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;