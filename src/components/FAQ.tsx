import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Was ist SmartCart?",
      answer: "SmartCart ist ein KI-gestützter Einkaufswagen, der Produkte automatisch erkennt und erfasst. Keine Scannvorgänge mehr - einfach Produkte in den Wagen legen und fertig."
    },
    {
      question: "Für wen ist SmartCart geeignet?",
      answer: "SmartCart ist ideal für Supermärkte, Einzelhändler und Lebensmittelgeschäfte, die ihren Kunden ein nahtloses, modernes Einkaufserlebnis bieten möchten."
    },
    {
      question: "Wie funktioniert die KI-Erkennung?",
      answer: "Unsere fortschrittliche KI nutzt Computer Vision und maschinelles Lernen, um Produkte in Echtzeit zu identifizieren. Die Technologie erkennt Artikel automatisch, wenn sie in den Wagen gelegt werden."
    },
    {
      question: "Ist die Installation kompliziert?",
      answer: "Nein, SmartCart ist so konzipiert, dass es einfach in bestehende Infrastrukturen integriert werden kann. Unser Team unterstützt Sie bei der gesamten Installation und Einrichtung."
    },
    {
      question: "Welche Vorteile bietet SmartCart für Kunden?",
      answer: "Kunden profitieren von schnelleren Einkäufen ohne Warteschlangen, automatischer Erfassung aller Artikel und einem modernen, innovativen Einkaufserlebnis."
    },
    {
      question: "Wie genau ist die Produkterkennung?",
      answer: "Die KI-gestützte Erkennung erreicht eine Genauigkeit von über 99%. Das System wird kontinuierlich trainiert und verbessert sich mit jeder Nutzung."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Schlichteres Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Weicher Gradient Übergang oben */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-[1]"></div>
      
      {/* Weicher Gradient Übergang unten mit sehr geringer Opacity */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent z-[1]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-muted-foreground text-lg">
              Haben Sie nicht gefunden, wonach Sie suchen?{" "}
              <a href="#kontakt" className="text-primary hover:underline">
                Kontaktieren Sie uns
              </a>
              .
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
