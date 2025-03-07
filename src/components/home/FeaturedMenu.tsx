
import { useState, useEffect, useRef } from "react";
import MenuCard from "../ui/MenuCard";

// Sample menu data
const menuCategories = [
  { id: "all", name: "All" },
  { id: "starters", name: "Starters" },
  { id: "mains", name: "Mains" },
  { id: "drinks", name: "Drinks" },
  { id: "desserts", name: "Desserts" },
];

const menuItems = [
  {
    id: 1,
    name: "CK Rice",
    price: "12,000 RWF",
    description: "Our signature spiced rice with tender grilled goat meat, served with a side of fresh vegetables.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "mains",
    trending: true,
  },
  {
    id: 2,
    name: "Avocado Salad",
    price: "8,500 RWF",
    description: "Fresh avocados, mixed greens, cherry tomatoes, and red onions with a zesty lime dressing.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "starters",
    trending: false,
  },
  {
    id: 3,
    name: "Tropical Cocktail",
    price: "7,000 RWF",
    description: "A refreshing blend of tropical fruits, premium rum, and a hint of mint, perfect for a hot day.",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "drinks",
    trending: true,
  },
  {
    id: 4,
    name: "Spicy Brochettes",
    price: "10,500 RWF",
    description: "Tender beef skewers marinated in traditional Rwandan spices, grilled to perfection.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "mains",
    trending: true,
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    price: "6,500 RWF",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream and berry compote.",
    image: "https://images.unsplash.com/photo-1617305855058-336d24456869?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "desserts",
    trending: false,
  },
  {
    id: 6,
    name: "Gourmet Burger",
    price: "13,500 RWF",
    description: "Premium beef patty topped with aged cheddar, caramelized onions, and our special sauce on a brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "mains",
    trending: false,
  },
  {
    id: 7,
    name: "Passion Fruit Mojito",
    price: "6,000 RWF",
    description: "Fresh mint, passion fruit, lime, and white rum, topped with soda for a refreshing cocktail experience.",
    image: "https://images.unsplash.com/photo-1500631195312-e3a9a5819f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "drinks",
    trending: false,
  },
  {
    id: 8,
    name: "Grilled Tilapia",
    price: "15,000 RWF",
    description: "Whole tilapia grilled with herbs and spices, served with a side of plantains and vegetables.",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    category: "mains",
    trending: false,
  },
];

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const filtered =
      activeCategory === "all"
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory);
    setFilteredItems(filtered);
  }, [activeCategory]);

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

  return (
    <section 
      id="menu" 
      ref={sectionRef}
      className="section-padding bg-ckyc-cream"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-ckyc-gold font-medium">Our Offerings</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-ckyc-charcoal">
            Discover Our Menu
          </h2>
          <p className="text-gray-600">
            Explore our fusion of international and Rwandan cuisine, crafted with locally sourced ingredients
            and prepared with passion by our expert chefs.
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-ckyc-gold text-white"
                  : "bg-white text-ckyc-charcoal hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Grid */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`transform transition-all duration-700 ${
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
                category={menuCategories.find((cat) => cat.id === item.category)?.name || ""}
                trending={item.trending}
              />
            </div>
          ))}
        </div>
        
        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-ckyc-charcoal text-white rounded-full font-medium hover:bg-black transition-colors duration-300"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
