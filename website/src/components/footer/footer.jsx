import { Facebook, Instagram, Mail, Phone,Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-accent mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl">Kobe Kruz Kennels</h3>
            <p className="text-sm">
              Breeding exceptional dogs with love, care, and dedication.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/dogs" className="hover:text-secondary transition-colors">
                  Our Dogs
                </a>
              </li>
              <li>
                <a
                  href="/puppies"
                  className="hover:text-secondary transition-colors"
                >
                  Available Puppies
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-2">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <Phone size={16} />
                <span>0772248508</span>
              </a>
              <a
                href="mailto:info@kobekruzkennels.com"
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <Mail size={16} />
                <span>info@kobekruzkennels.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent/20 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Kobe Kruz Kennels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;