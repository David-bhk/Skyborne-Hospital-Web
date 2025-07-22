import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Locations from '@/components/Locations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import PWAInstall from '@/components/PWAInstall';

const Index = () => {
  return (
    <>
      <SEOHead 
        title="SKYBORNE Hospital - Excellence médicale en RDC"
        description="SKYBORNE Hospital, établissement médical de référence en République Démocratique du Congo. 6 implantations, service d'urgence 24h/24, soins de qualité internationale à Goma, Bukavu, Kinshasa, Lubumbashi, Mbuji-Mayi, Kisangani."
        keywords="hôpital RDC, médical Congo, urgences Goma, clinique Nord-Kivu, soins santé, SKYBORNE Hospital, médecins spécialistes, hospitalisation Congo"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Locations />
          <Contact />
        </main>
        <Footer />
        <PWAInstall />
      </div>
    </>
  );
};

export default Index;
