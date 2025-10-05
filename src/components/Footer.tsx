const Footer = () => {
  return (
    <footer className="py-6 bg-card/30 border-t border-primary/20">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Copyright SmartCart
          </p>
          <a 
            href="http://www.danielkeck.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            DK
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
