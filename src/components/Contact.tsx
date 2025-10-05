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
    <section className="py-24 relative overflow-hidden" id="kontakt">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary animate-glow">Kontakt</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Bereit für die digitale Transformation? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:border-primary/60 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">E-Mail</h3>
                <p className="text-muted-foreground text-sm">kontakt@smartcart.de</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:border-primary/60 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Telefon</h3>
                <p className="text-muted-foreground text-sm">+49 (0) 123 456 789</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-6 hover:border-primary/60 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Standort</h3>
                <p className="text-muted-foreground text-sm">Innovation Hub<br />Berlin, Deutschland</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl" />
            <div className="relative bg-card/90 backdrop-blur-sm border border-primary/40 rounded-2xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Nachricht senden</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Max Mustermann"
                      className="bg-background/60 border-border focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition-all h-11"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="max@beispiel.de"
                      className="bg-background/60 border-border focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition-all h-11"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">Unternehmen</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ihr Unternehmen (optional)"
                    className="bg-background/60 border-border focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition-all h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Ihre Nachricht *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="bg-background/60 border-border focus:border-primary/70 focus:ring-2 focus:ring-primary/20 transition-all min-h-[140px] resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-12 h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300"
                >
                  Absenden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
