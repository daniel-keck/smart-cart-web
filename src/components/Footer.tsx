import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card/50 border-t border-primary/20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">SmartCart</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Die Zukunft des Einkaufens – intelligente Technologie für ein nahtloses Shopping-Erlebnis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#referenzen" className="text-muted-foreground hover:text-primary transition-colors">
                  Referenzen
                </a>
              </li>
              <li>
                <a href="#funktioniert" className="text-muted-foreground hover:text-primary transition-colors">
                  Wie es funktioniert
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#ueber" className="text-muted-foreground hover:text-primary transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">kontakt@smartcart.de</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+49 (0) 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Innovation Hub<br />Berlin, Deutschland</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} SmartCart. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Impressum
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
