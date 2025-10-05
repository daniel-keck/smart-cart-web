import { Button } from "@/components/ui/button";
import { ShoppingCart, Sparkles, Award } from "lucide-react";
import logo from "@/assets/smart_cart_logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-slide-up">
          {/* Logo */}
          <img 
            src={logo} 
            alt="SmartCart Logo" 
            className="h-24 w-auto animate-glow"
          />

          {/* Award Badge */}
          <div className="flex items-center gap-2 bg-card border border-primary/30 rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Finalist Bundeswettbewerb KI 2025
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground max-w-4xl">
            <span className="text-primary animate-glow">Scanne nie,</span>
            <br />
            <span className="text-foreground">benutz KI</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Das universelle KI-Modul für Einkaufswagen – erfasst deinen Warenkorb automatisch, ohne zu scannen
          </p>

          {/* USPs */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">100% KI-gesteuert</h3>
              <p className="text-muted-foreground text-sm">
                Keine Scans, keine Barcodes – unsere KI erkennt alle Produkte automatisch
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Universell einsetzbar</h3>
              <p className="text-muted-foreground text-sm">
                Ein Modul für alle Einkaufswagen – passt sich jedem Einzelhandel an
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Ausgezeichnet</h3>
              <p className="text-muted-foreground text-sm">
                Finalist beim Bundeswettbewerb Künstliche Intelligenz 2025
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.5)]">
              Jetzt Kontakt aufnehmen
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
