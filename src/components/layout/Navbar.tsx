
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="relative z-50">
            <h1 className={cn(
              "text-2xl font-bold transition-colors duration-300",
              isScrolled ? "text-ckyc-charcoal" : "text-white"
            )}>
              <span className="text-ckyc-gold">CKYC</span> Lounge
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Menu", "Experience", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "font-medium text-sm tracking-wide transition-colors duration-300 hover:text-ckyc-gold",
                  isScrolled ? "text-ckyc-charcoal" : "text-white"
                )}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Book Button */}
          <a
            href="#contact"
            className={cn(
              "hidden md:flex px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              isScrolled
                ? "bg-ckyc-gold text-white hover:bg-ckyc-gold-dark"
                : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
            )}
          >
            Book a Table
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-ckyc-charcoal" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-ckyc-charcoal" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-ckyc-charcoal/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden z-40",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-8">
            {["Home", "Menu", "Experience", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-xl font-medium hover:text-ckyc-gold transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 px-8 py-3 bg-ckyc-gold text-white rounded-full font-medium hover:bg-ckyc-gold-dark transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Table
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
