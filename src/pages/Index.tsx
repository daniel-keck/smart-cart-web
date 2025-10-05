import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="funktioniert">
        <HowItWorks />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="ueber">
        <About />
      </div>
      <div id="kontakt">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
