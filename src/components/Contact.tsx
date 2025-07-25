import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { useLoading } from '@/hooks/use-loading';
import { LoadingButton } from '@/components/ui/loading';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const { isLoading, executeAsync } = useLoading();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await executeAsync(async () => {
      // Configuration EmailJS - Remplacez par vos vraies clés
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_name: 'SKYBORNE Hospital'
      };

      // Simulation d'envoi (remplacez par le vrai appel EmailJS)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message envoyé avec succès !",
        description: "Nous vous répondrons dans les plus brefs délais.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Téléphone",
      content: ["+243976721956", "+243993412886"],
      action: "tel:+243976721956"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Adresse principale",
      content: ["Av. Grevilleas, N026", "C/ de GOMA, Nord-Kivu", "République Démocratique du Congo"],
      action: null
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      content: ["contact@skyborne-hospital.cd", "urgences@skyborne-hospital.cd"],
      action: "mailto:contact@skyborne-hospital.cd"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Horaires",
      content: ["Urgences: 24h/24, 7j/7", "Consultations: 8h - 18h", "Samedi: 8h - 14h"],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-background to-accent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contactez <span className="text-primary">SKYBORNE Hospital</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions, 
            prendre vos rendez-vous ou gérer vos urgences médicales.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Informations de contact
            </h3>
            
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    {info.icon}
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {info.content.map((line, idx) => (
                    <div key={idx} className="text-muted-foreground">
                      {info.action && idx === 0 ? (
                        <a 
                          href={info.action}
                          className="hover:text-primary transition-colors cursor-pointer"
                        >
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}

            {/* Emergency Alert */}
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-6 h-6 text-destructive" />
                  <h4 className="font-bold text-destructive">Urgence médicale</h4>
                </div>
                <p className="text-destructive mb-4">
                  En cas d'urgence vitale, appelez immédiatement :
                </p>
                <a 
                  href="tel:+243976721956"
                  className="inline-flex items-center justify-center w-full bg-destructive text-destructive-foreground hover:bg-destructive/90 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +243976721956
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Envoyez-nous un message
                </CardTitle>
                <p className="text-muted-foreground">
                  Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom complet"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+243 XXX XXX XXX"
                        className="bg-background border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre.email@exemple.com"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Objet de votre message"
                      className="bg-background border-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                      className="bg-background border-border resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3 text-lg font-semibold"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Champs obligatoires. Vos données sont protégées et ne seront utilisées 
                    que pour répondre à votre demande.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-card border-border overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Localisation - Siège principal (Goma)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    SKYBORNE Hospital - Goma
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Av. Grevilleas, N026, C/ de GOMA<br />
                    Nord-Kivu, République Démocratique du Congo
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Av.+Grevilleas+N026+Goma+RDC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-primary-foreground hover:bg-primary-dark px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;