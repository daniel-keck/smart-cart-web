import { Button } from "@/components/ui/button";
import logo from "@/assets/smartcart_logo_new.png";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <img 
          src={logo} 
          alt="SmartCart" 
          className="h-10 w-auto cursor-pointer"
          onClick={() => scrollToSection("hero")}
        />

        {/* Centered Quick Links */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => scrollToSection("referenzen")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Referenzen
          </button>
          <button 
            onClick={() => scrollToSection("warum")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Warum SmartCart
          </button>
          <button 
            onClick={() => scrollToSection("funktioniert")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Wie es funktioniert
          </button>
          <button 
            onClick={() => scrollToSection("ueber")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Über uns
          </button>
        </div>

        {/* Desktop Navigation - Right aligned buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            onClick={() => scrollToSection("video")}
            variant="ghost"
            className="text-foreground hover:text-primary"
          >
            Demo
          </Button>
          <Button 
            onClick={() => scrollToSection("kontakt")}
            variant="outline"
            className="border-border hover:bg-accent"
          >
            Kontakt
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Button 
              onClick={() => scrollToSection("video")}
              variant="ghost"
              className="text-foreground hover:text-primary w-full justify-start"
            >
              Demo
            </Button>
            <Button 
              onClick={() => scrollToSection("kontakt")}
              variant="outline"
              className="border-border hover:bg-accent w-full"
            >
              Kontakt
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
