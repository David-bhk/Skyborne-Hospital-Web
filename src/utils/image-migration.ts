/**
 * Script de migration des images SKYBORNE Hospital
 * 
 * Ce fichier liste les modifications à effectuer pour renommer
 * les images avec des noms plus explicites
 */

// OPTION : Renommer les images avec des noms plus clairs

const IMAGE_MIGRATIONS = {
  // Images dans src/assets/
  "hero-hospital.jpg": "skyborne-hospital-facade-goma.jpg",
  "medical-team.jpg": "skyborne-medical-team.jpg", 
  "medical-equipment.jpg": "skyborne-medical-equipment.jpg",
  
  // Logo dans public/
  "196efd1a-e11c-4c6b-925d-ca6a5f85a159.png": "skyborne-hospital-logo.png"
};

// Fichiers à modifier si on change les noms :
const FILES_TO_UPDATE = [
  "src/components/Hero.tsx",           // heroImage import
  "src/components/About.tsx",          // medicalTeamImage import  
  "src/components/Header.tsx",         // logo src
  "src/components/Footer.tsx",         // logo src
  "src/components/SEOHead.tsx",        // image par défaut
  "public/manifest.json",              // icônes PWA
  "index.html"                         // meta og:image
];

// Instructions de migration
console.log("Pour renommer les images :");
console.log("1. Renommer les fichiers physiques");
console.log("2. Mettre à jour les imports dans les composants");
console.log("3. Tester que tout fonctionne");

export default IMAGE_MIGRATIONS;
