import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import worldMap from "@/assets/world-map.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Nachricht gesendet!",
      description: "Wir melden uns so schnell wie möglich bei Ihnen.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="kontakt">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            {/* Icon */}
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Kontaktieren Sie uns
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Wir sind immer auf der Suche nach Möglichkeiten, unsere Produkte und Dienstleistungen zu verbessern. Kontaktieren Sie uns und lassen Sie uns wissen, wie wir Ihnen helfen können.
              </p>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <a href="mailto:contact@smartcart.de" className="hover:text-primary transition-colors">
                contact@smartcart.de
              </a>
              <span>•</span>
              <a href="tel:+4970001234567" className="hover:text-primary transition-colors">
                +49 (700) 123 4567
              </a>
              <span>•</span>
              <a href="mailto:support@smartcart.de" className="hover:text-primary transition-colors">
                support@smartcart.de
              </a>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Vollständiger Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Max Mustermann"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-Mail-Adresse
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ihre.email@beispiel.de"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Unternehmen
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ihre Firma GmbH"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ihre Nachricht hier eingeben"
                  rows={6}
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary/10 text-foreground hover:bg-primary/20 border border-primary/30"
              >
                Absenden
              </Button>
            </form>
          </div>
        </div>

        {/* Map - Full width below */}
        <div className="relative w-full mt-12">
          <img 
            src={worldMap} 
            alt="Weltkarte" 
            className="w-full h-auto"
          />
          {/* Pin for Germany */}
          <div className="absolute top-[35%] left-[52%] transform -translate-x-1/2 -translate-y-1/2">
            <MapPin className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-card px-3 py-1 rounded-md border border-primary/30 whitespace-nowrap text-sm">
              Deutschland
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
