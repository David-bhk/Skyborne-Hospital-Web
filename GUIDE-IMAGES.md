# Guide de placement des images SKYBORNE Hospital

## Structure des dossiers images

```
skyborne-hospital-website/
├── src/assets/              # Images utilisées dans les composants React
│   ├── hero-hospital.jpg    # 🏥 REMPLACER : Photo façade hôpital
│   ├── medical-team.jpg     # 👨‍⚕️ REMPLACER : Équipe médicale  
│   └── medical-equipment.jpg # 🏥 REMPLACER : Équipements modernes
│
└── public/                  # Images publiques (logo, favicon, etc.)
    ├── favicon.ico          # 🆔 REMPLACER : Favicon du site
    └── lovable-uploads/     # Dossier logos
        └── 196efd1a-e11c-4c6b-925d-ca6a5f85a159.png  # 🏷️ REMPLACER : Logo principal
```

## Actions à effectuer

### 1. REMPLACER les images dans src/assets/
- Supprimer les 3 fichiers actuels
- Ajouter vos nouvelles images avec les MÊMES NOMS

### 2. REMPLACER le logo dans public/lovable-uploads/
- Garder le même nom de fichier : 196efd1a-e11c-4c6b-925d-ca6a5f85a159.png
- OU renommer partout dans le code (option avancée)

### 3. OPTIONNEL : Ajouter un favicon personnalisé
- Remplacer public/favicon.ico
- Créer depuis votre logo avec : https://favicon.io/

## Spécifications techniques par image

### hero-hospital.jpg
- **Taille :** 1920x1080px (16:9)
- **Format :** JPG
- **Poids :** < 200KB
- **Contenu :** Façade moderne SKYBORNE Hospital Goma
- **Utilisation :** Section Hero (première impression)

### medical-team.jpg  
- **Taille :** 1200x800px (3:2)
- **Format :** JPG
- **Poids :** < 150KB
- **Contenu :** Équipe médicale diverse et souriante
- **Utilisation :** Section À propos

### medical-equipment.jpg
- **Taille :** 1000x750px (4:3) 
- **Format :** JPG
- **Poids :** < 120KB
- **Contenu :** Équipements médicaux de pointe
- **Utilisation :** Section Services (future utilisation)

### Logo SKYBORNE (196efd1a-e11c-4c6b-925d-ca6a5f85a159.png)
- **Taille :** 512x512px (carré)
- **Format :** PNG (fond transparent)
- **Poids :** < 50KB
- **Contenu :** Logo professionnel avec croix médicale
- **Utilisation :** Header, Footer, SEO, PWA

## Checklist de validation

□ Images optimisées (poids < limites)
□ Bonnes dimensions (voir spécifications)
□ Formats corrects (JPG pour photos, PNG pour logo)
□ Noms de fichiers identiques aux originaux
□ Test du site après remplacement
□ Vérification mobile/desktop
□ Validation des alt texts

## Conseils qualité

✅ **À faire :**
- Photos haute résolution puis compression
- Éclairage professionnel
- Couleurs cohérentes avec la marque bleue
- Sourires authentiques pour l'équipe
- Modernité des équipements

❌ **À éviter :**
- Photos floues ou pixelisées
- Couleurs trop sombres
- Équipements obsolètes
- Visages anxieux ou tristes
- Logos avec fond non-transparent
