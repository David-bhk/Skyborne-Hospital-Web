import { Shield, Users, Heart, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import medicalTeamImage from '@/assets/medical-team.jpg';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Humanité",
      description: "Nous plaçons l'humain au cœur de nos préoccupations avec empathie et bienveillance."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "Des soins de haute qualité avec les meilleures pratiques médicales internationales."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Équipe pluridisciplinaire",
      description: "Une collaboration étroite entre spécialistes pour une prise en charge complète."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Des équipements modernes et des techniques de pointe pour votre santé."
    }
  ];

  const stats = [
    { number: "50", label: "Lits d'hospitalisation" },
    { number: "21", label: "Chambres confortables" },
    { number: "6", label: "Villes d'implantation" },
    { number: "24/7", label: "Service d'urgence" }
  ];

  return (
    <section id="a-propos" className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            À propos de <span className="text-primary">SKYBORNE Hospital</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Une structure médicale moderne qui allie innovation technologique et approche humaine 
            pour offrir des soins d'excellence à travers la République Démocratique du Congo.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src={medicalTeamImage} 
              alt="Équipe médicale SKYBORNE" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Notre Mission</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fournir des soins médicaux de qualité supérieure, accessibles et humains à toutes les 
                populations de la RDC. Nous nous engageons à améliorer la santé et le bien-être de nos 
                patients grâce à notre expertise médicale et notre technologie de pointe.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Notre Vision</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Être reconnu comme le leader des soins de santé en RDC, en offrant des services 
                médicaux innovants qui transforment positivement la vie de nos patients et de leurs familles.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Nos Valeurs
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 bg-card border-border hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;