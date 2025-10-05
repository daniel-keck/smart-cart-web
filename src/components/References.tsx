import hdmLogo from "@/assets/hdm-stuttgart.png";
import dieterSchwarzLogo from "@/assets/dieter-schwarz-stiftung.png";
import carlZeissLogo from "@/assets/carl-zeiss-stiftung.png";
import bundeswettbewerbLogo from "@/assets/bundeswettbewerb-ki.png";

const References = () => {
  const logos = [
    { src: hdmLogo, alt: "HdM Stuttgart" },
    { src: dieterSchwarzLogo, alt: "Dieter Schwarz Stiftung" },
    { src: carlZeissLogo, alt: "Carl Zeiss Stiftung" },
    { src: bundeswettbewerbLogo, alt: "Bundeswettbewerb KI" }
  ];

  return (
    <section className="pt-20 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 animate-glow">
          Unterstützt von
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Gefördert durch führende Institutionen
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_25s_linear_infinite] hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-12 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                    logo.alt === "Bundeswettbewerb KI" ? "h-64" : "h-16"
                  }`}
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
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default References;
