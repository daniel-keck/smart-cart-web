import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 pb-32">
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
            Dein Warenkorb – automatisch erkannt, ganz ohne Scannen
          </p>

          {/* SmartCart Demo Video */}
          <div id="video" className="w-full max-w-5xl mt-64 relative">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20" style={{ boxShadow: '0 0 60px rgba(0, 255, 255, 0.3)' }}>
              <video 
                className="w-full aspect-video"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/smartcart-demo.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
              </video>
              
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
