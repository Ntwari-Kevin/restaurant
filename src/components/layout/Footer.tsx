
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ckyc-charcoal text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              <span className="text-ckyc-gold">CKYC</span> Lounge
            </h2>
            <p className="text-gray-300 max-w-xs">
              A trendy restaurant and lounge in Kigali City, offering a fusion of international 
              and Rwandan cuisine in a stylish, upscale atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ckyclounge" 
                 className="text-gray-300 hover:text-ckyc-gold transition-colors duration-300"
                 aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" 
                 className="text-gray-300 hover:text-ckyc-gold transition-colors duration-300"
                 aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" 
                 className="text-gray-300 hover:text-ckyc-gold transition-colors duration-300"
                 aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Opening Hours</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday</span>
                <span>11:00 - 00:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 22:00</span>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-ckyc-gold flex-shrink-0 mt-1" />
                <span>KBC Building, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-ckyc-gold flex-shrink-0" />
                <span>+250 788 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-ckyc-gold flex-shrink-0" />
                <span>info@ckyclounge.rw</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-ckyc-charcoal border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-ckyc-gold text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-ckyc-gold hover:bg-ckyc-gold-dark text-white py-3 rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CKYC Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
