import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">OU</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Owais Usman</h3>
                <p className="text-sm text-background/70">Travel Agency</p>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-4">
              Discover the world's most beautiful destinations with our expertly curated travel experiences.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-background/70 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/70 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/70 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-background/70 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-background/70 hover:text-secondary transition-colors text-sm">Destinations</Link></li>
              <li><Link to="/search" className="text-background/70 hover:text-secondary transition-colors text-sm">Tours & Packages</Link></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors text-sm">Flights</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors text-sm">Things to Do</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors text-sm">Travel Insurance</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors text-sm">Cancellation Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-secondary transition-colors text-sm">COVID-19 Updates</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Travel Street, Adventure City</span>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-background/70 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@owaisusman.travel</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Owais Usman Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
