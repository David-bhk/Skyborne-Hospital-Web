import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Locations = () => {
  const locations = [
    {
      city: "Goma",
      region: "Nord-Kivu",
      address: "Av. Grevilleas, N026",
      phone: "+243976721956",
      status: "Siège principal",
      description: "Notre établissement principal avec toutes les spécialités médicales.",
      isMain: true
    },
    {
      city: "Walikale",
      region: "Nord-Kivu", 
      address: "Centre-ville",
      phone: "+243993412886",
      status: "Centre médical",
      description: "Services médicaux essentiels et consultations spécialisées."
    },
    {
      city: "Kisangani",
      region: "Tshopo",
      address: "Quartier Mangobo",
      phone: "+243993412886",
      status: "Antenne médicale",
      description: "Soins de proximité et services d'urgence."
    },
    {
      city: "Kolwezi",
      region: "Lualaba",
      address: "Avenue Lumumba",
      phone: "+243976721956",
      status: "Centre médical",
      description: "Spécialités minières et médecine du travail."
    },
    {
      city: "Bisié",
      region: "Nord-Kivu",
      address: "Zone minière",
      phone: "+243993412886",
      status: "Dispensaire",
      description: "Soins de base et médecine préventive."
    },
    {
      city: "Logu",
      region: "Nord-Kivu",
      address: "Centre communautaire",
      phone: "+243976721956",
      status: "Poste de santé",
      description: "Consultations générales et vaccination."
    }
  ];

  return (
    <section id="implantations" className="py-16 lg:py-24 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Implantations</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            SKYBORNE Hospital est présent dans 6 villes stratégiques de la République Démocratique du Congo 
            pour vous offrir des soins de proximité partout où vous êtes.
          </p>
        </div>

        {/* Map Visualization */}
        <div className="mb-16 bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Présence géographique en RDC
          </h3>
          
          {/* Simple Map Representation */}
          <div className="relative bg-gradient-to-b from-primary/10 to-secondary/20 rounded-xl p-8 min-h-[400px] flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center text-center p-4 rounded-lg transition-all hover:scale-105 ${
                    location.isMain 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'bg-background text-foreground border border-border hover:shadow-md'
                  }`}
                >
                  <MapPin className={`w-6 h-6 mb-2 ${location.isMain ? 'text-white' : 'text-primary'}`} />
                  <div className="font-bold text-lg">{location.city}</div>
                  <div className={`text-sm ${location.isMain ? 'text-primary-light' : 'text-muted-foreground'}`}>
                    {location.region}
                  </div>
                  <div className={`text-xs mt-1 px-2 py-1 rounded-full ${
                    location.isMain 
                      ? 'bg-white/20 text-white' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {location.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Locations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className={`group border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                location.isMain 
                  ? 'border-primary bg-gradient-to-br from-primary/5 to-secondary/10' 
                  : 'border-border bg-card'
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      {location.city}
                      {location.isMain && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                          Principal
                        </span>
                      )}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">{location.region}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0 space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  {location.description}
                </p>
                
                <div className="space-y-2 pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{location.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    <a 
                      href={`tel:${location.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      {location.isMain ? "Service 24h/24" : "Selon horaires locaux"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/20 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Trouvez le centre le plus proche
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contactez-nous pour connaître les services disponibles dans chaque implantation 
            et prendre rendez-vous au centre le plus proche de chez vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+243976721956"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary-dark px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler Goma (Principal)
            </a>
            <a 
              href="tel:+243993412886"
              className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Autres centres
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;