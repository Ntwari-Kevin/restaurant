
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Menu", href: "/#menu" },
    { name: "Experience", href: "/#experience" },
    { name: "Trending", href: "/#trending" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="z-50">
          <h1
            className={cn(
              "text-2xl md:text-3xl font-bold transition-colors duration-300",
              isScrolled || isMenuOpen || isMobile ? "text-ckyc-charcoal" : "text-white"
            )}
          >
            CKYC <span className="text-ckyc-gold">Lounge</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors duration-300 hover:text-ckyc-gold",
                    isScrolled ? "text-ckyc-charcoal" : "text-white"
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Link to="/admin/login">
            <Button
              variant="outline"
              className={cn(
                "rounded-full transition-all",
                isScrolled
                  ? "border-ckyc-gold text-ckyc-gold hover:bg-ckyc-gold hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-ckyc-charcoal"
              )}
            >
              <User size={18} className="mr-2" /> Admin
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="z-50 block md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X
              size={24}
              className={isScrolled ? "text-ckyc-charcoal" : "text-white"}
            />
          ) : (
            <Menu
              size={24}
              className={isScrolled ? "text-ckyc-charcoal" : "text-white"}
            />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center space-y-6 mb-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xl font-medium text-ckyc-charcoal hover:text-ckyc-gold transition-colors"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <Link to="/admin/login" onClick={toggleMenu}>
              <Button className="bg-ckyc-gold hover:bg-ckyc-gold/80 text-white rounded-full">
                <User size={18} className="mr-2" /> Admin
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
