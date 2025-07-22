/**
 * Page Index - Page d'accueil principale de SKYBORNE Hospital
 * 
 * Cette page implémente un design "one-page" avec toutes les sections principales :
 * 1. Header - Navigation et menu principal
 * 2. Hero - Section d'accueil avec appel à l'action
 * 3. About - À propos de l'hôpital et ses valeurs
 * 4. Services - Services médicaux proposés
 * 5. Locations - Implantations géographiques (6 villes)
 * 6. Contact - Formulaire de contact et informations
 * 7. Footer - Liens utiles et informations légales
 * 8. PWAInstall - Banner d'installation de l'application
 * 
 * SEO optimisé avec métadonnées spécifiques pour la page d'accueil
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

// ===== IMPORTS DES COMPOSANTS =====

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Locations from '@/components/Locations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import PWAInstall from '@/components/PWAInstall';

// ===== COMPOSANT PRINCIPAL =====

/**
 * Composant Index - Page d'accueil de SKYBORNE Hospital
 * 
 * Structure one-page optimisée pour l'expérience utilisateur mobile et desktop
 * Chaque section est accessible via la navigation avec scroll smooth
 */
const Index = () => {
  return (
    <>
      {/* ===== MÉTADONNÉES SEO ===== */}
      <SEOHead 
        title="SKYBORNE Hospital - Excellence médicale en RDC"
        description="SKYBORNE Hospital, établissement médical de référence en République Démocratique du Congo. 6 implantations, service d'urgence 24h/24, soins de qualité internationale à Goma, Bukavu, Kinshasa, Lubumbashi, Mbuji-Mayi, Kisangani."
        keywords="hôpital RDC, médical Congo, urgences Goma, clinique Nord-Kivu, soins santé, SKYBORNE Hospital, médecins spécialistes, hospitalisation Congo"
      />
      
      {/* ===== STRUCTURE PRINCIPALE ===== */}
      <div className="min-h-screen bg-background">
        
        {/* Navigation principale */}
        <Header />
        
        {/* Contenu principal - Sections empilées */}
        <main>
          {/* Section d'accueil avec hero image et CTA */}
          <Hero />
          
          {/* À propos - Histoire et valeurs de l'hôpital */}
          <About />
          
          {/* Services médicaux - Spécialités et soins proposés */}
          <Services />
          
          {/* Localisation - 6 implantations à travers la RDC */}
          <Locations />
          
          {/* Contact - Formulaire et informations de contact */}
          <Contact />
        </main>
        
        {/* Pied de page avec liens et informations légales */}
        <Footer />
        
        {/* Banner d'installation PWA (affiché intelligemment) */}
        <PWAInstall />
      </div>
    </>
  );
};

export default Index;
