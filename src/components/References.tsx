import dieterSchwarzLogo from "@/assets/dieter-schwarz-stiftung.png";
import bundeswettbewerbLogo from "@/assets/bundeswettbewerb-ki.png";
import carlZeissLogo from "@/assets/carl-zeiss-stiftung.png";

const References = () => {
  const logos = [
    { src: dieterSchwarzLogo, alt: "Dieter Schwarz Stiftung" },
    { src: bundeswettbewerbLogo, alt: "Bundeswettbewerb Künstliche Intelligenz" },
    { src: carlZeissLogo, alt: "Carl Zeiss Stiftung" }
  ];

  return (
    <section className="pt-20 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-glow">
          Vertrauen von führenden Marken
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Unsere Technologie ist bereit für den Einsatz im Einzelhandel
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  className="h-16 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
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
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
};

export default References;
