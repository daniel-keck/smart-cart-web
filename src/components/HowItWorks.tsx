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
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-glow">
            So funktioniert's
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vier einfache Schritte für ein revolutionäres Einkaufserlebnis
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 mt-2">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
