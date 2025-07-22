# 🏥 SKYBORNE Hospital Website

Site web moderne et professionnel pour l'hôpital SKYBORNE, un établissement médical de référence en République Démocratique du Congo avec 6 implantations à travers le pays.

## 🌟 Fonctionnalités

- **Design moderne et responsive** optimisé pour tous les appareils
- **Navigation fluide** avec ancres vers les différentes sections
- **Formulaire de contact** avec validation et envoi d'emails
- **Localisation** des 6 centres hospitaliers
- **Service d'urgence 24h/24** avec numéros directs
- **Interface multilingue** (français)
- **Animations et transitions** pour une expérience utilisateur optimale

## 🏥 À propos de SKYBORNE Hospital

**SKYBORNE Hospital** est un établissement médical moderne situé en République Démocratique du Congo, avec sa clinique principale à Goma, Nord-Kivu. Nous proposons des soins de qualité avec :

- 🛏️ **50 lits d'hospitalisation**
- 🏨 **21 chambres confortables**
- 🏙️ **6 villes d'implantation**
- ⚡ **Service d'urgence 24h/24, 7j/7**

### Nos implantations
- **Goma** (Nord-Kivu) - Centre principal
- **Bukavu** (Sud-Kivu)
- **Kinshasa** (Kinshasa)
- **Lubumbashi** (Haut-Katanga)
- **Mbuji-Mayi** (Kasaï-Oriental)
- **Kisangani** (Tshopo)

## 🛠️ Technologies utilisées

### Frontend
- **React 18** - Bibliothèque JavaScript pour interfaces utilisateur
- **TypeScript** - Superset de JavaScript avec typage statique
- **Vite** - Outil de build ultra-rapide pour le développement moderne

### Design & UI
- **Tailwind CSS** - Framework CSS utility-first
- **Shadcn/ui** - Composants UI modernes et réutilisables
- **Radix UI** - Primitives UI accessibles et sans style
- **Lucide React** - Icônes SVG élégantes et cohérentes

### Fonctionnalités
- **React Router DOM** - Navigation côté client
- **React Hook Form** - Gestion des formulaires performante
- **Zod** - Validation de schémas TypeScript-first
- **EmailJS** - Envoi d'emails depuis le frontend
- **TanStack Query** - Gestion d'état et cache des données
- **Sonner** - Notifications toast élégantes

## 🚀 Installation et lancement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le repository
git clone https://github.com/David-bhk/Skyborne-Hospital-Web.git
cd skyborne-hospital-website

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 📱 Structure du projet

```
src/
├── components/           # Composants React réutilisables
│   ├── ui/              # Composants UI de base (Shadcn)
│   ├── Header.tsx       # Navigation principale
│   ├── Hero.tsx         # Section d'accueil
│   ├── About.tsx        # À propos de l'hôpital
│   ├── Services.tsx     # Services médicaux
│   ├── Locations.tsx    # Implantations géographiques
│   ├── Contact.tsx      # Formulaire de contact
│   └── Footer.tsx       # Pied de page
├── pages/               # Pages de l'application
│   ├── Index.tsx        # Page d'accueil (one-page)
│   └── NotFound.tsx     # Page 404
├── assets/              # Images et médias
├── hooks/               # Hooks React personnalisés
├── lib/                 # Utilitaires et helpers
└── App.tsx              # Composant racine
```

## 🎨 Design System

Le projet utilise un design system médical professionnel avec :

- **Couleurs primaires** : Bleus SKYBORNE (`HSL(225, 100%, 45%)`)
- **Couleurs secondaires** : Tons médicaux et professionnels
- **Typographie** : Police système optimisée pour la lisibilité
- **Espacements** : Système cohérent basé sur Tailwind
- **Animations** : Transitions fluides et professionnelles

## 📞 Contact et urgences

- **Téléphone principal** : +243976721956
- **Téléphone secondaire** : +243993412886
- **Email** : contact@skyborne-hospital.cd
- **Urgences** : +243976721956 (24h/24, 7j/7)
- **Adresse** : Av. Grevilleas, N026, Goma, Nord-Kivu, RDC

## 🔧 Configuration

### Variables d'environnement
Créer un fichier `.env.local` avec :
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Scripts disponibles
- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run build:dev` - Build en mode développement
- `npm run lint` - Linting ESLint
- `npm run preview` - Prévisualisation du build

## 🚀 Déploiement

Le projet est optimisé pour le déploiement sur :
- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**
- Tout hébergeur statique

## 📄 Licence

© 2024 SKYBORNE Hospital. Tous droits réservés.

---

*Développé avec ❤️ pour améliorer l'accès aux soins de santé en RDC*
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
