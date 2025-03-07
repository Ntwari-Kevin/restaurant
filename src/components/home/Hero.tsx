
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-ckyc-charcoal/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="CKYC Lounge Rooftop View"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-20 pt-24">
        <div className="max-w-3xl">
          <span
            className={`inline-block py-2 px-4 bg-ckyc-gold/90 text-white text-sm font-medium rounded-full mb-6 transform transition-all duration-700 delay-100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Welcome to Kigali's Premier Dining Experience
          </span>

          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transform transition-all duration-700 delay-200 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="text-balance">Savor the Flavors of Kigali</span>
          </h1>

          <p
            className={`text-xl text-white/90 mb-8 max-w-xl transform transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Experience the fusion of international and Rwandan cuisine in a stylish, 
            upscale atmosphere with panoramic city views.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-400 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#menu"
              className="px-8 py-4 bg-ckyc-gold text-white rounded-full font-medium hover:bg-ckyc-gold-dark transition-all duration-300 flex items-center justify-center"
            >
              Explore Menu <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className={`w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 transform transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-1 h-3 bg-white/80 rounded-full animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
