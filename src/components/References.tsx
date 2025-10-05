const References = () => {
  const brands = [
    "REWE", "EDEKA", "ALDI", "LIDL", "KAUFLAND", "PENNY", "NETTO"
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-glow">
          Vertrauen von führenden Marken
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Unsere Technologie ist bereit für den Einsatz im Einzelhandel
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-muted-foreground/50 hover:text-primary transition-colors duration-300 whitespace-nowrap">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default References;
