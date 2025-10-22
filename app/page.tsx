import ContactSection from "./components/ContactSection";
import CustomerVoices from "./components/CustomerVoices";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";
import ServicesSection from "./components/ServicesSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import TeamSection from "./components/TeamSection";
import Testimonials from "./components/Testimonials";
import TrustSection from "./components/TrustSection";

export default function Home() {
  return (
    <>
    
      <Hero />
      <TeamSection />
      <ServicesSection />
      <ProductsSection />
      <SuccessStoriesSection />
      <Testimonials />
      <CustomerVoices />
      <TrustSection />
      <ContactSection />
     
    </>
  );
}
