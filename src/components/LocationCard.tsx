import locationMap from "@/assets/location-map.png";
import { MapPin } from "lucide-react";

const LocationCard = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Map */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
                <img 
                  src={locationMap} 
                  alt="SmartCart Standort auf der Weltkarte" 
                  className="relative z-10 w-full h-auto rounded-lg"
                />
              </div>
              
              {/* Right side - Location info */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>Unser Standort</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Entwickelt in Stuttgart
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  SmartCart wird an der Hochschule der Medien in Stuttgart entwickelt. 
                  Mit Unterstützung führender Stiftungen und Institutionen arbeiten wir an 
                  der Zukunft des Einzelhandels.
                </p>
                
                <div className="pt-4">
                  <a 
                    href="#kontakt" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                  >
                    <span>Mehr erfahren</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCard;