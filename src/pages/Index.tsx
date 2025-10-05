import Hero from "@/components/Hero";
import References from "@/components/References";
import WhySmartCart from "@/components/WhySmartCart";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <References />
      <WhySmartCart />
      <HowItWorks />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
