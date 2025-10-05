import { Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-glow">
            Über uns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovation trifft auf künstliche Intelligenz
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              SmartCart wurde mit der Vision gegründet, das Einkaufserlebnis im Einzelhandel 
              grundlegend zu revolutionieren. Unser Team aus KI-Experten und Einzelhandels-Spezialisten 
              hat ein universelles Modul entwickelt, das sich nahtlos in bestehende Einkaufswagen integrieren lässt.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Mit unserer selbst trainierten künstlichen Intelligenz erfassen wir den Warenkorb-Inhalt 
              vollautomatisch – ohne dass Kunden einen einzigen Barcode scannen müssen. Als Finalist 
              des Bundeswettbewerbs Künstliche Intelligenz 2025 haben wir bereits bewiesen, dass unsere 
              Technologie die Zukunft des stationären Handels gestalten wird.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Innovation</h3>
              <p className="text-muted-foreground text-sm">
                Wegweisende KI-Technologie für den Einzelhandel
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Mission</h3>
              <p className="text-muted-foreground text-sm">
                Einkaufen einfacher und schneller machen
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Auszeichnung</h3>
              <p className="text-muted-foreground text-sm">
                Bundeswettbewerb KI 2025 Finalist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
