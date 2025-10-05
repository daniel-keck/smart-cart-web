import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import LocationCard from "@/components/LocationCard";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
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
      <LocationCard />
      {/* <div id="ueber">
        <About />
      </div> */}
      <div id="kontakt">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
