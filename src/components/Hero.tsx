import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Cyan glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-slide-up max-w-5xl mx-auto">
          {/* Award Badge */}
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-3 mt-20">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Finalist Bundeswettbewerb KI 2025
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
            Scanne nie,
            <br />
            <span className="text-primary" style={{ textShadow: '0 0 40px rgba(0, 255, 255, 0.5)' }}>
              benutz KI
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Das universelle KI-Modul für Einkaufswagen – erfasst deinen Warenkorb automatisch, ohne zu scannen
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              style={{ boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)' }}
            >
              Jetzt Kontakt aufnehmen
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Mehr erfahren
            </Button>
          </div>

          {/* Video placeholder - will be replaced with actual video */}
          <div className="w-full max-w-5xl mt-16 relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20" style={{ boxShadow: '0 0 60px rgba(0, 255, 255, 0.3)' }}>
              {/* Video will go here */}
              <div className="aspect-video bg-card/50 backdrop-blur-sm flex items-center justify-center">
                <p className="text-muted-foreground">Video wird hier eingefügt</p>
              </div>
              
              {/* Glow overlay on video container */}
              <div className="absolute -inset-1 bg-gradient-to-t from-primary/20 to-transparent opacity-50 pointer-events-none rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
