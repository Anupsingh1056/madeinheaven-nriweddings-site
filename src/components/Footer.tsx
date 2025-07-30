import { Heart, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">M</span>
              </div>
              <div className="font-serif font-bold text-xl">Made in Heaven</div>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Creating magical wedding experiences for NRI families across the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Destination Weddings</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Virtual Planning</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Venue Booking</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Event Coordination</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Guest Management</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Destinations</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Udaipur</li>
              <li>Jaipur</li>
              <li>Goa</li>
              <li>Vadodara</li>
              <li>Jodhpur</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@madeinheaven.in</span>
              </div>
              <div className="text-sm">
                Vadodara, Gujarat, India
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Made in Heaven. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-primary-foreground/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for couples worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;