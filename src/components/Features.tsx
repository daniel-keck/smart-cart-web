import { Zap, ScanLine, ShoppingCart, Lock, Clock, Smartphone, TrendingUp, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "KI-gestützte Erkennung",
      description: "Automatische Produkterkennung durch fortschrittliche künstliche Intelligenz"
    },
    {
      icon: ScanLine,
      title: "Kein Scannen nötig",
      description: "Einfach Produkte in den Warenkorb legen – fertig"
    },
    {
      icon: Clock,
      title: "Zeit sparen",
      description: "Bis zu 60% schnellerer Einkaufsprozess an der Kasse"
    },
    {
      icon: Lock,
      title: "Datenschutz garantiert",
      description: "DSGVO-konform und höchste Sicherheitsstandards"
    },
    {
      icon: ShoppingCart,
      title: "Nahtlose Integration",
      description: "Einfache Einbindung in bestehende Kassensysteme"
    },
    {
      icon: Smartphone,
      title: "Mobile-first Design",
      description: "Optimiert für alle Endgeräte und Bildschirmgrößen"
    },
    {
      icon: TrendingUp,
      title: "Skalierbar",
      description: "Wächst mit deinem Business – von klein bis Enterprise"
    },
    {
      icon: Users,
      title: "Bessere UX",
      description: "Kundenzufriedenheit durch reibungsloses Einkaufserlebnis"
    }
  ];

  return (
    <section className="pt-12 pb-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative bg-background p-8 border border-border/40 group overflow-hidden transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-foreground mb-6" strokeWidth={1.5} />
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
