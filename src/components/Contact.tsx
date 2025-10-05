import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name darf nicht leer sein").max(100, "Name muss kürzer als 100 Zeichen sein"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail muss kürzer als 255 Zeichen sein"),
  company: z.string().max(100, "Firmenname muss kürzer als 100 Zeichen sein").optional(),
  message: z.string().trim().min(1, "Nachricht darf nicht leer sein").max(1000, "Nachricht muss kürzer als 1000 Zeichen sein")
});

const WHATSAPP_NUMBER = "491639208619";

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
    
    // Validate form data
    try {
      const validatedData = contactSchema.parse(formData);
      
      // Create WhatsApp message
      const whatsappMessage = `*Neue Kontaktanfrage*\n\n` +
        `*Name:* ${validatedData.name}\n` +
        `*E-Mail:* ${validatedData.email}\n` +
        `${validatedData.company ? `*Unternehmen:* ${validatedData.company}\n` : ''}` +
        `\n*Nachricht:*\n${validatedData.message}`;
      
      // Encode message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "Weiterleitung zu WhatsApp",
        description: "Sie werden zu WhatsApp weitergeleitet, um Ihre Nachricht zu senden.",
      });

      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Fehler",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Fehler",
          description: "Ein unerwarteter Fehler ist aufgetreten.",
          variant: "destructive"
        });
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="kontakt">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left side - Contact info */}
          <div className="space-y-6 relative -mt-2">
            {/* Background accent */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            
            {/* Badge matching FAQ style */}
            <div className="-mb-2">
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
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 mt-6">
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
