import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const WhySmartCart = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Schneller Checkout",
      description: "Reduzieren Sie Wartezeiten um bis zu 70% und verbessern Sie das Kundenerlebnis erheblich"
    },
    {
      icon: TrendingUp,
      title: "Umsatzsteigerung",
      description: "Höhere Kundenzufriedenheit führt zu mehr Wiederholungskäufen und steigert Ihren Umsatz"
    },
    {
      icon: Users,
      title: "Weniger Personal",
      description: "Automatisierte Erfassung reduziert den Personalbedarf an der Kasse deutlich"
    },
    {
      icon: CheckCircle,
      title: "Weniger Fehler",
      description: "KI-gestützte Erkennung minimiert Fehler beim Scannen und verhindert Verluste"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-glow">
            Warum SmartCart?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Die Zukunft des Einzelhandels beginnt mit intelligenter Technologie
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySmartCart;
