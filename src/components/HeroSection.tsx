import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/919638063350?text=Hello! I would like to know more about your wedding planning services.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Elegant Indian Wedding Ceremony" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
            <span className="text-sm font-medium">🏆 India's Trusted Wedding Planners</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Weddings Made Magical,
            <br />
            <span className="text-accent">Anywhere in India.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            From varmala to vidaai — we handle everything so your family can enjoy the moment, 
            whether you're in Vadodara or Vancouver.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="royal" 
              size="lg" 
              onClick={scrollToContact}
              className="px-8 py-4 text-lg font-semibold"
            >
              Start Planning Your Wedding
            </Button>
            <Button 
              variant="whatsapp" 
              size="lg" 
              onClick={openWhatsApp}
              className="px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with Us on WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-white/80">Successful Weddings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Destination Cities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Planning Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;