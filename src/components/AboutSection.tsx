import { Heart, Award, Globe, Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Made in Heaven
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are Vadodara's premier event management company, specializing in creating 
              magical wedding experiences for NRI families who want to celebrate their special 
              day in India while planning from anywhere in the world.
            </p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-6 text-primary">Our Story</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between NRI families and their dream 
                Indian wedding, Made in Heaven has been creating unforgettable celebrations 
                for over a decade. We understand the unique challenges faced by families 
                living abroad who want to honor their traditions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans from intimate gatherings to grand destination weddings 
                across India's most breathtaking locations - from the royal palaces of 
                Udaipur to the serene beaches of Goa, and the cultural richness of Jaipur.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-border">
                <Heart className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Passion-Driven</h4>
                <p className="text-sm text-muted-foreground">Every wedding is crafted with love and attention to detail</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Award-Winning</h4>
                <p className="text-sm text-muted-foreground">Recognized for excellence in event management</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Global Reach</h4>
                <p className="text-sm text-muted-foreground">Serving NRI families worldwide</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">Trusted Partner</h4>
                <p className="text-sm text-muted-foreground">Complete transparency and reliability</p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="font-serif text-3xl font-bold mb-6 text-primary">Our Mission</h3>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To make destination weddings in India accessible and stress-free for NRI families, 
                ensuring every moment is perfect while you focus on what matters most - 
                celebrating your love story with family and friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;