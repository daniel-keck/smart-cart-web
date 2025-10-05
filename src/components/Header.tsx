import { Button } from "@/components/ui/button";
import logo from "@/assets/smart_cart_logo.png";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <img 
          src={logo} 
          alt="SmartCart" 
          className="h-10 w-auto cursor-pointer"
          onClick={() => scrollToSection("hero")}
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("referenzen")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Referenzen
          </button>
          <button
            onClick={() => scrollToSection("warum")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Warum SmartCart
          </button>
          <button
            onClick={() => scrollToSection("funktioniert")}
            className="text-foreground hover:text-primary transition-colors"
          >
            So funktioniert's
          </button>
          <button
            onClick={() => scrollToSection("ueber")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Über uns
          </button>
          <Button 
            onClick={() => scrollToSection("kontakt")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
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
        <div className="md:hidden bg-card border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("referenzen")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Referenzen
            </button>
            <button
              onClick={() => scrollToSection("warum")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Warum SmartCart
            </button>
            <button
              onClick={() => scrollToSection("funktioniert")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              So funktioniert's
            </button>
            <button
              onClick={() => scrollToSection("ueber")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Über uns
            </button>
            <Button 
              onClick={() => scrollToSection("kontakt")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
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
