
import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      message: "",
    });
    // Show success message or toast
    alert("Your reservation request has been sent! We'll contact you shortly to confirm.");
  };

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
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-ckyc-cream relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-ckyc-gold font-medium">Reserve Your Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-ckyc-charcoal">
            Book a Table
          </h2>
          <p className="text-gray-600">
            Secure your spot at CKYC Lounge for an unforgettable dining experience.
            For large groups or special events, please contact us directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-ckyc-charcoal">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-ckyc-gold/10 rounded-full text-ckyc-gold flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ckyc-charcoal mb-1">Location</h4>
                    <p className="text-gray-600">KBC Building, Kigali, Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-ckyc-gold/10 rounded-full text-ckyc-gold flex-shrink-0 mt-1">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ckyc-charcoal mb-1">Phone</h4>
                    <p className="text-gray-600">+250 788 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-ckyc-gold/10 rounded-full text-ckyc-gold flex-shrink-0 mt-1">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ckyc-charcoal mb-1">Email</h4>
                    <p className="text-gray-600">info@ckyclounge.rw</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-ckyc-gold/10 rounded-full text-ckyc-gold flex-shrink-0 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ckyc-charcoal mb-1">Hours</h4>
                    <p className="text-gray-600">Monday - Thursday: 11:00 - 22:00</p>
                    <p className="text-gray-600">Friday - Saturday: 11:00 - 00:00</p>
                    <p className="text-gray-600">Sunday: 12:00 - 22:00</p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="mt-8 h-48 bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l+C8A97E(30.06,-1.944)/30.06,-1.944,13,0/600x300@2x?access_token=pk.eyJ1IjoiZXhhbXBsZXRva2VuIiwiYSI6ImNrbTU0ZHcwMDF2ZTMycG80cDdkNDZ2ZWcifQ.dEIpDdrYG0Vddh6m0yWQ4Q" 
                  alt="CKYC Lounge Map Location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Reservation Form */}
          <div 
            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-ckyc-charcoal">Make a Reservation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ckyc-charcoal mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckyc-gold"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ckyc-charcoal mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckyc-gold"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ckyc-charcoal mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckyc-gold"
                      placeholder="Your phone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-ckyc-charcoal mb-1">
                      Number of Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckyc-gold"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-ckyc-charcoal mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckyc-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-ckyc-charcoal mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckyc-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ckyc-charcoal mb-1">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ckyc-gold"
                    placeholder="Any special requests or notes for your reservation"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-ckyc-gold hover:bg-ckyc-gold-dark text-white py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Reserve Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
