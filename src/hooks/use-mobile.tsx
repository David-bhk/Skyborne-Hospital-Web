import { 
  Brain, 
  Stethoscope, 
  Heart, 
  Microscope, 
  Eye, 
  Ear, 
  Smile, 
  User, 
  Activity, 
  FlaskConical,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Neurochirurgie",
      description: "Interventions chirurgicales spécialisées du système nerveux avec équipements de pointe.",
      features: ["Chirurgie cérébrale", "Chirurgie spinale", "Neuro-oncologie"]
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Chirurgie générale",
      description: "Interventions chirurgicales diverses avec techniques mini-invasives modernes.",
      features: ["Laparoscopie", "Chirurgie digestive", "Chirurgie d'urgence"]
    },
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "Psycho-sexologie",
      description: "Accompagnement et thérapies spécialisées pour le bien-être psychologique.",
      features: ["Thérapie de couple", "Consultation individuelle", "Suivi psychologique"]
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Cardiologie",
      description: "Soins complets du cœur et du système cardiovasculaire.",
      features: ["Échocardio", "ECG", "Consultation cardiaque"]
    },
    {
      icon: <Smile className="w-8 h-8 text-primary" />,
      title: "Dentisterie",
      description: "Soins dentaires complets pour toute la famille dans un environnement moderne.",
      features: ["Soins conservateurs", "Orthodontie", "Chirurgie dentaire"]
    },
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Ophtalmologie",
      description: "Soins oculaires spécialisés avec équipements de diagnostic avancés.",
      features: ["Examen de vue", "Chirurgie oculaire", "Traitement glaucome"]
    },
    {
      icon: <Ear className="w-8 h-8 text-primary" />,
      title: "ORL",
      description: "Spécialité oto-rhino-laryngologique pour troubles ORL.",
      features: ["Audiométrie", "Endoscopie", "Microchirurgie"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Dermatologie",
      description: "Soins de la peau et traitement des affections dermatologiques.",
      features: ["Dermatoscopie", "Traitement acné", "Allergologie"]
    },
    {
      icon: <Activity className="w-8 h-8 text-primary" />,
      title: "Médecine interne",
      description: "Prise en charge globale des pathologies internes de l'adulte.",
      features: ["Consultation générale", "Maladies chroniques", "Prévention"]
    },
    {
      icon: <User className="w-8 h-8 text-primary" />,
      title: "Kinésithérapie",
      description: "Rééducation fonctionnelle et thérapies physiques personnalisées.",
      features: ["Rééducation motrice", "Physiothérapie", "Massage thérapeutique"]
    },
    {
      icon: <Microscope className="w-8 h-8 text-primary" />,
      title: "Laboratoire",
      description: "Analyses biologiques complètes avec résultats rapides et fiables.",
      features: ["Hématologie", "Biochimie", "Microbiologie"]
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-primary" />,
      title: "Imagerie médicale",
      description: "Diagnostics par imagerie avec technologies de dernière génération.",
      features: ["Radiologie", "Échographie", "Scanner"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Services Médicaux</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Une gamme complète de spécialités médicales pour répondre à tous vos besoins de santé, 
            avec une équipe de professionnels dédiés et des équipements de pointe.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/30 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Besoin d'une consultation ?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nos équipes médicales sont disponibles pour vous accompagner. 
            Contactez-nous pour prendre rendez-vous ou pour toute urgence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+243976721956"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Appeler maintenant
            </a>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;