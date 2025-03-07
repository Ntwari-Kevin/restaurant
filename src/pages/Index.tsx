
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import Experience from "@/components/home/Experience";
import TrendingItems from "@/components/home/TrendingItems";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  // Animation on scroll functionality
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('animated');
        }
      });
    };

    // Run once on load
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <Experience />
      <TrendingItems />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
