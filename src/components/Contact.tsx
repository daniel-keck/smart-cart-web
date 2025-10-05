import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
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

    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section className="py-20 bg-secondary/50" id="kontakt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-glow">
            Kontakt aufnehmen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bereit für die Zukunft des Einkaufens? Lassen Sie uns sprechen!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 h-full flex flex-col justify-between" style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.1)' }}>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Wir freuen uns auf Ihre Nachricht
              </h3>
              <p className="text-muted-foreground mb-8">
                Ob Sie Fragen zu unserer Technologie haben, eine Demo vereinbaren 
                oder über eine Partnerschaft sprechen möchten – unser Team steht 
                Ihnen gerne zur Verfügung.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-Mail</h4>
                  <p className="text-muted-foreground">kontakt@smartcart.de</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                  <p className="text-muted-foreground">+49 (0) 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Standort</h4>
                  <p className="text-muted-foreground">
                    Innovation Hub<br />
                    Berlin, Deutschland
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-primary/20 rounded-2xl p-8 h-full" style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.15)' }}>
            <form onSubmit={handleSubmit} className="space-y-4 h-full flex flex-col">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-foreground text-sm">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ihr Name"
                  className="bg-background/50 border-border focus:border-primary/50 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-foreground text-sm">E-Mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ihre@email.de"
                  className="bg-background/50 border-border focus:border-primary/50 transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="company" className="text-foreground text-sm">Unternehmen</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Ihr Unternehmen"
                  className="bg-background/50 border-border focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-1.5 flex-1 flex flex-col">
                <Label htmlFor="message" className="text-foreground text-sm">Nachricht *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Wie können wir Ihnen helfen?"
                  className="bg-background/50 border-border focus:border-primary/50 transition-colors flex-1 min-h-[80px] resize-none"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
                size="lg"
              >
                Nachricht senden
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
