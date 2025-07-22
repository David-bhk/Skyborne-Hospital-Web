/**
 * Composant SEOHead - Gestion avancée du référencement
 * 
 * Ce composant gère toutes les métadonnées SEO pour le site SKYBORNE Hospital :
 * - Métadonnées de base (title, description, keywords)
 * - Open Graph pour les réseaux sociaux
 * - Twitter Cards pour le partage
 * - Données structurées Schema.org pour les moteurs de recherche
 * - Géolocalisation pour les recherches locales
 * - Métadonnées spécifiques aux établissements médicaux
 * 
 * @author SKYBORNE Hospital Dev Team
 * @version 1.0.0
 */

import { Helmet } from 'react-helmet-async';

/**
 * Interface des propriétés du composant SEOHead
 */
interface SEOHeadProps {
  /** Titre de la page (sera complété par "| SKYBORNE Hospital" si nécessaire) */
  title?: string;
  /** Description de la page pour les moteurs de recherche */
  description?: string;
  /** Mots-clés séparés par des virgules */
  keywords?: string;
  /** URL de l'image de prévisualisation (Open Graph) */
  image?: string;
  /** URL canonique de la page */
  url?: string;
  /** Type de contenu Open Graph (website, article, etc.) */
  type?: string;
}

/**
 * Composant SEOHead - Optimisation pour les moteurs de recherche
 * 
 * Valeurs par défaut optimisées pour la page d'accueil de SKYBORNE Hospital
 */
const SEOHead = ({
  title = "SKYBORNE Hospital - Excellence médicale en RDC",
  description = "SKYBORNE Hospital, établissement médical de référence en République Démocratique du Congo. 6 implantations, service d'urgence 24h/24, soins de qualité internationale.",
  keywords = "hôpital, médical, soins, urgences, RDC, Congo, Goma, Nord-Kivu, santé, clinique, SKYBORNE",
  image = "/lovable-uploads/196efd1a-e11c-4c6b-925d-ca6a5f85a159.png",
  url = "https://skyborne-hospital.cd",
  type = "website"
}: SEOHeadProps) => {
  
  // Construction des URLs complètes pour éviter les erreurs
  const fullTitle = title.includes('SKYBORNE') ? title : `${title} | SKYBORNE Hospital`;
  const fullUrl = url.startsWith('http') ? url : `https://skyborne-hospital.cd${url}`;
  const fullImage = image.startsWith('http') ? image : `https://skyborne-hospital.cd${image}`;

  return (
    <Helmet>
      {/* ===== MÉTADONNÉES DE BASE ===== */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SKYBORNE Hospital" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />

      {/* ===== OPEN GRAPH (Facebook, LinkedIn, etc.) ===== */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="SKYBORNE Hospital" />
      <meta property="og:locale" content="fr_CD" />

      {/* ===== TWITTER CARDS ===== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* ===== MÉTADONNÉES MÉDICALES SPÉCIFIQUES ===== */}
      <meta name="hospital:name" content="SKYBORNE Hospital" />
      <meta name="hospital:location" content="Goma, Nord-Kivu, République Démocratique du Congo" />
      <meta name="hospital:emergency" content="+243976721956" />
      <meta name="hospital:services" content="Urgences 24h/24, Hospitalisation, Consultations spécialisées" />

      {/* ===== GÉOLOCALISATION ===== */}
      {/* Coordonnées GPS de Goma pour les recherches locales */}
      <meta name="geo.region" content="CD-NK" />
      <meta name="geo.placename" content="Goma" />
      <meta name="geo.position" content="-1.6792;29.2228" />
      <meta name="ICBM" content="-1.6792, 29.2228" />

      {/* ===== DONNÉES STRUCTURÉES JSON-LD (Schema.org) ===== */}
      {/* Ces données aident Google à comprendre que c'est un hôpital légitime */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hospital",
          "name": "SKYBORNE Hospital",
          "description": description,
          "url": fullUrl,
          "logo": fullImage,
          "image": fullImage,
          "telephone": "+243976721956",
          "email": "contact@skyborne-hospital.cd",
          
          // Adresse principale (Goma)
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Grevilleas, N026",
            "addressLocality": "Goma",
            "addressRegion": "Nord-Kivu",
            "addressCountry": "CD"
          },
          
          // Coordonnées GPS exactes
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-1.6792",
            "longitude": "29.2228"
          },
          
          // Horaires (24h/24 pour les urgences)
          "openingHours": "Mo-Su 00:00-23:59",
          
          // Spécialités médicales proposées
          "medicalSpecialty": [
            "Emergency Medicine",
            "Internal Medicine", 
            "Surgery",
            "Pediatrics",
            "Obstetrics and Gynecology"
          ],
          
          // Services disponibles
          "availableService": [
            {
              "@type": "MedicalService",
              "name": "Emergency Care",
              "description": "Service d'urgence 24h/24, 7j/7"
            },
            {
              "@type": "MedicalService", 
              "name": "Hospitalization",
              "description": "50 lits d'hospitalisation dans 21 chambres confortables"
            }
          ],
          
          // Lien vers la carte Google Maps
          "hasMap": "https://maps.google.com/?q=-1.6792,29.2228",
          
          // URLs officielles de l'hôpital
          "sameAs": [
            fullUrl
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
