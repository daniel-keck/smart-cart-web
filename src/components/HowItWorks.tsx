import { Camera, Cpu, ShoppingBag, CreditCard } from "lucide-react";
import { useState } from "react";
import smartcartScene from "@/assets/smartcart-scene-new.png";

const HowItWorks = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const steps = [
    {
      icon: Camera,
      title: "Kamera erfasst",
      description: "Unsere KI-Kameras erfassen kontinuierlich den Inhalt des Einkaufswagens"
    },
    {
      icon: Cpu,
      title: "KI analysiert",
      description: "Die selbst trainierte KI erkennt alle Produkte in Echtzeit – ohne Barcodes"
    },
    {
      icon: ShoppingBag,
      title: "Automatische Erkennung",
      description: "Jedes Produkt wird automatisch zur digitalen Einkaufsliste hinzugefügt"
    },
    {
      icon: CreditCard,
      title: "Express-Checkout",
      description: "An der Kasse wird alles sofort abgerechnet – ohne manuelles Scannen"
    }
  ];

  const hotspots = [
    { x: "45%", y: "25%", step: 0 }, // Kamera Position (zentral oben, leicht links)
    { x: "75%", y: "40%", step: 1 }, // KI Analysis (rechts beim Tisch)
    { x: "65%", y: "70%", step: 2 }, // Shopping Bag (mehr nach links)
    { x: "25%", y: "70%", step: 3 }, // Checkout (links unten)
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-glow">
            So funktioniert's
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vier einfache Schritte für ein revolutionäres Einkaufserlebnis
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Interactive 3D Scene with Hotspots */}
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_60px_rgba(0,255,255,0.2)]">
            <img 
              src={smartcartScene} 
              alt="SmartCart 3D Scene" 
              className="w-full h-auto"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-background/30 pointer-events-none"></div>
            
            {/* Hotspots */}
            {hotspots.map((hotspot, index) => {
              const step = steps[hotspot.step];
              const isHovered = hoveredStep === hotspot.step;
              
              return (
                <div
                  key={index}
                  className="absolute group"
                  style={{ 
                    left: hotspot.x, 
                    top: hotspot.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredStep(hotspot.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Numbered Badge with Pulse */}
                  <div className={`relative z-20 w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-xl text-primary-foreground cursor-pointer transition-all duration-300 ${isHovered ? 'scale-125 shadow-[0_0_40px_rgba(0,255,255,0.8)]' : 'shadow-[0_0_20px_rgba(0,255,255,0.5)]'}`}>
                    {hotspot.step + 1}
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30"></div>
                  </div>

                  {/* Hover Card */}
                  <div className={`absolute z-30 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    style={{
                      left: (hotspot.step === 0 || hotspot.step === 3) ? '120%' : 'auto',
                      right: (hotspot.step === 0 || hotspot.step === 3) ? 'auto' : '120%',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      minWidth: '320px'
                    }}
                  >
                    <div className="bg-card/95 backdrop-blur-md border border-primary/50 rounded-xl p-6 shadow-[0_0_40px_rgba(0,255,255,0.4)]">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-primary mb-2">
                            {step.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {/* Arrow indicator */}
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-0 h-0"
                        style={{
                          [(hotspot.step === 0 || hotspot.step === 3) ? 'left' : 'right']: '-8px',
                          borderTop: '8px solid transparent',
                          borderBottom: '8px solid transparent',
                          [(hotspot.step === 0 || hotspot.step === 3) ? 'borderRight' : 'borderLeft']: '8px solid hsl(var(--primary) / 0.5)',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View - List below image */}
          <div className="mt-12 grid gap-4 md:hidden">
            {steps.map((step, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
