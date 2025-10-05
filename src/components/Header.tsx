import { Button } from "@/components/ui/button";
import logo from "@/assets/smart_cart_logo.png";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - (window.innerHeight / 2) + (element.offsetHeight / 2);
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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

        {/* Centered Navigation Links */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <button 
            onClick={() => scrollToSection("video")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Demo
          </button>
          <button 
            onClick={() => scrollToSection("features")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Fortschritt
          </button>
          <button 
            onClick={() => scrollToSection("referenzen")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Förderung
          </button>
          <button 
            onClick={() => scrollToSection("funktioniert")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Funktion
          </button>
          <button 
            onClick={() => scrollToSection("faq")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </button>
          {/* <button 
            onClick={() => scrollToSection("ueber")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Über uns
          </button> */}
        </div>

        {/* Desktop Navigation - Right aligned button */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            onClick={() => scrollToSection("kontakt")}
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10"
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
            <button 
              onClick={() => scrollToSection("video")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
            >
              Demo
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
            >
              Fortschritt
            </button>
            <button 
              onClick={() => scrollToSection("referenzen")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
            >
              Förderung
            </button>
            <button 
              onClick={() => scrollToSection("funktioniert")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
            >
              Funktion
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
            >
              FAQ
            </button>
            {/* <button 
              onClick={() => scrollToSection("ueber")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-2"
            >
              Über uns
            </button> */}
            <Button 
              onClick={() => scrollToSection("kontakt")}
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 w-full mt-2"
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
