import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({
  title = "SKYBORNE Hospital - Excellence médicale en RDC",
  description = "SKYBORNE Hospital, établissement médical de référence en République Démocratique du Congo. 6 implantations, service d'urgence 24h/24, soins de qualité internationale.",
  keywords = "hôpital, médical, soins, urgences, RDC, Congo, Goma, Nord-Kivu, santé, clinique, SKYBORNE",
  image = "/lovable-uploads/196efd1a-e11c-4c6b-925d-ca6a5f85a159.png",
  url = "https://skyborne-hospital.cd",
  type = "website"
}: SEOHeadProps) => {
  const fullTitle = title.includes('SKYBORNE') ? title : `${title} | SKYBORNE Hospital`;
  const fullUrl = url.startsWith('http') ? url : `https://skyborne-hospital.cd${url}`;
  const fullImage = image.startsWith('http') ? image : `https://skyborne-hospital.cd${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SKYBORNE Hospital" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="SKYBORNE Hospital" />
      <meta property="og:locale" content="fr_CD" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Medical/Hospital specific */}
      <meta name="hospital:name" content="SKYBORNE Hospital" />
      <meta name="hospital:location" content="Goma, Nord-Kivu, République Démocratique du Congo" />
      <meta name="hospital:emergency" content="+243976721956" />
      <meta name="hospital:services" content="Urgences 24h/24, Hospitalisation, Consultations spécialisées" />

      {/* Geo Tags */}
      <meta name="geo.region" content="CD-NK" />
      <meta name="geo.placename" content="Goma" />
      <meta name="geo.position" content="-1.6792;29.2228" />
      <meta name="ICBM" content="-1.6792, 29.2228" />

      {/* JSON-LD Structured Data */}
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
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Grevilleas, N026",
            "addressLocality": "Goma",
            "addressRegion": "Nord-Kivu",
            "addressCountry": "CD"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-1.6792",
            "longitude": "29.2228"
          },
          "openingHours": "Mo-Su 00:00-23:59",
          "medicalSpecialty": [
            "Emergency Medicine",
            "Internal Medicine",
            "Surgery",
            "Pediatrics",
            "Obstetrics and Gynecology"
          ],
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
          "hasMap": "https://maps.google.com/?q=-1.6792,29.2228",
          "sameAs": [
            fullUrl
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
