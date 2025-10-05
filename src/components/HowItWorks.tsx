import { Camera, Cpu, ShoppingBag, CreditCard } from "lucide-react";

const HowItWorks = () => {
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

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-glow">
            So funktioniert's
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vier einfache Schritte für ein revolutionäres Einkaufserlebnis
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.4)]">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-card border-2 border-primary rounded-full flex items-center justify-center font-bold text-sm text-primary">
                    {index + 1}
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
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
