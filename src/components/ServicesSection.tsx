import { MapPin, Video, Utensils, Camera, Music, Users, Flower, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Destination Weddings",
      description: "Vadodara, Udaipur, Jaipur, Goa & more exotic locations across India",
      features: ["Venue selection", "Location scouting", "Local permits", "Guest accommodation"]
    },
    {
      icon: Video,
      title: "Remote & Local Planning",
      description: "Complete planning support whether you're local or abroad with video calls & real-time updates",
      features: ["Video consultations", "Virtual venue tours", "Live planning updates", "Local coordination"]
    },
    {
      icon: Flower,
      title: "Venue Booking & Decor",
      description: "Stunning venues with breathtaking decor that matches your vision",
      features: ["Palace venues", "Beach resorts", "Heritage hotels", "Custom themes"]
    },
    {
      icon: Users,
      title: "Guest Hospitality",
      description: "Complete guest management from arrival to departure",
      features: ["Airport transfers", "Hotel bookings", "Welcome kits", "Concierge services"]
    },
    {
      icon: Utensils,
      title: "Catering Excellence",
      description: "Multi-cuisine menus with authentic flavors and modern presentation",
      features: ["Traditional Indian", "Continental cuisine", "Live counters", "Dietary preferences"]
    },
    {
      icon: Camera,
      title: "Photography & Videography",
      description: "Capture every precious moment with our professional creative team",
      features: ["Pre-wedding shoots", "Ceremony coverage", "Candid photography", "Drone videography"]
    },
    {
      icon: Music,
      title: "Mehendi, Sangeet & Haldi",
      description: "Traditional ceremonies with authentic rituals for Hindu, Sikh, Muslim & all Indian cultures",
      features: ["Mehendi artists", "Sangeet choreography", "Haldi ceremonies", "Cultural customization"]
    },
    {
      icon: Gift,
      title: "Reception Coordination",
      description: "Grand receptions that leave lasting impressions on all your guests",
      features: ["Theme planning", "Entertainment", "Guest management", "Logistics coordination"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Wedding Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate ceremonies to grand celebrations, we offer comprehensive 
              wedding planning services for Indian families — including those living abroad.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Ready to Plan Your Dream Wedding?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your vision and create a celebration that exceeds your expectations.
            </p>
            <Button 
              variant="gold" 
              size="lg" 
              onClick={scrollToContact}
              className="px-8 py-4 text-lg font-semibold"
            >
              Get Your Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;