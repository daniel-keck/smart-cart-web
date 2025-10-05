import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const isFormValid = formData.name.trim() !== "" && 
                      formData.email.trim() !== "" && 
                      formData.message.trim() !== "";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side - Contact info */}
          <div className="space-y-6 relative rounded-2xl p-8 transition-all duration-500 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent">
            {/* Background accent */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            
            {/* Badge matching FAQ style */}
            <div>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Kontakt
              </span>
            </div>

            {/* Heading matching FAQ style */}
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Haben Sie Fragen?
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Ob geschäftliche Anfragen, Kooperationsvorschläge oder technische Fragen – wir freuen uns auf Ihre Nachricht und melden uns zeitnah bei Ihnen.
              </p>
            </div>

            {/* Contact details left-aligned */}
            <div className="space-y-4 pt-4 relative">
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <a href="mailto:info@danielkeck.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@danielkeck.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <a href="tel:+4970001234567" className="text-muted-foreground hover:text-primary transition-colors">
                  +49 (700) 123 4567
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 transition-all duration-500 hover:bg-gradient-to-br hover:from-primary/10 hover:to-primary/5">
            <form onSubmit={handleSubmit} className="space-y-5">
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
                  rows={4}
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className={`w-full transition-colors ${
                  isFormValid 
                    ? "bg-primary text-white hover:bg-primary border border-primary" 
                    : "bg-primary/10 text-muted-foreground border border-primary/30 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Absenden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
