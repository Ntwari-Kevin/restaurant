
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MenuCard from "../ui/MenuCard";

// Sample trending items data
const trendingItems = [
  {
    id: 1,
    name: "CK Rice",
    price: "12,000 RWF",
    description: "Our signature spiced rice with tender grilled goat meat, served with a side of fresh vegetables.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Mains",
    trending: true,
  },
  {
    id: 2,
    name: "Tropical Cocktail",
    price: "7,000 RWF",
    description: "A refreshing blend of tropical fruits, premium rum, and a hint of mint, perfect for a hot day.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Drinks",
    trending: true,
  },
  {
    id: 3,
    name: "Spicy Brochettes",
    price: "10,500 RWF",
    description: "Tender beef skewers marinated in traditional Rwandan spices, grilled to perfection.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Mains",
    trending: true,
  },
  {
    id: 4,
    name: "Avocado Toast",
    price: "8,000 RWF",
    description: "Creamy avocado on artisanal sourdough bread, topped with poached eggs and microgreens.",
    image: "https://images.unsplash.com/photo-1603046891744-76e7d139a866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Breakfast",
    trending: true,
  },
  {
    id: 5,
    name: "Espresso Martini",
    price: "9,500 RWF",
    description: "The perfect balance of vodka, coffee liqueur, and freshly brewed espresso for a sophisticated kick.",
    image: "https://images.unsplash.com/photo-1619538449565-1caa8cebaa9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "Drinks",
    trending: true,
  },
];

const TrendingItems = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = Math.ceil(trendingItems.length / 3) - 1;
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < maxSlides ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlides));
  };

  return (
    <section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-ckyc-gold font-medium">Customer Favorites</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-ckyc-charcoal">
            Trending Items
          </h2>
          <p className="text-gray-600">
            Discover our most popular dishes and drinks that keep our customers coming back for more.
          </p>
        </div>
        
        {/* Trending Items Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-5 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md text-ckyc-charcoal hover:bg-ckyc-gold hover:text-white transition-colors duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md text-ckyc-charcoal hover:bg-ckyc-gold hover:text-white transition-colors duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Carousel Slides */}
          <div 
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {trendingItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`w-full md:w-1/3 px-4 flex-shrink-0 transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <MenuCard
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                    category={item.category}
                    trending={item.trending}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2 md:hidden">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-ckyc-gold" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingItems;
