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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-glow">
            So funktioniert's
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vier einfache Schritte für ein revolutionäres Einkaufserlebnis
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[100px] top-[120px] bottom-[120px] w-0.5 bg-primary/30 hidden lg:block" />
          <div className="absolute right-[100px] top-[120px] bottom-[120px] w-0.5 bg-primary/30 hidden lg:block" />
          
          <div className="space-y-8">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Connector to next step */}
                  {index < steps.length - 1 && (
                    <div className={`hidden lg:block absolute ${isEven ? 'left-[100px]' : 'right-[100px]'} bottom-[-32px] w-0.5 h-8 bg-primary/30`} />
                  )}
                  
                  <div 
                    className={`flex flex-col lg:flex-row items-center gap-8 animate-slide-up ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Icon with number badge */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-[120px] h-[120px] bg-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,255,255,0.5)]">
                        <step.icon className="w-14 h-14 text-primary-foreground" strokeWidth={2} />
                      </div>
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center font-bold text-lg text-primary shadow-[0_0_20px_rgba(0,255,255,0.4)]">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content card - full width with border glow */}
                    <div className={`flex-1 bg-card/50 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 transition-all duration-500 hover:border-primary hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] ${isEven ? 'lg:text-left' : 'lg:text-right'} min-h-[140px] flex flex-col justify-center`}>
                      <h3 className="text-3xl font-bold text-primary mb-4">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
