import Header from "@/components/Header";
import Hero from "@/components/Hero";
import References from "@/components/References";
import WhySmartCart from "@/components/WhySmartCart";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div id="referenzen">
        <References />
      </div>
      <div id="warum">
        <WhySmartCart />
      </div>
      <div id="funktioniert">
        <HowItWorks />
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
