import { Video, UserCheck, Shield, Globe } from "lucide-react";

const TrustSection = () => {
  const trustFactors = [
    {
      icon: Video,
      title: "Plan from Anywhere",
      description: "Video calls, virtual tours, and real-time updates keep you connected throughout the planning process.",
      benefits: ["Regular video consultations", "Virtual venue walkthroughs", "Live ceremony rehearsals", "24/7 communication"]
    },
    {
      icon: UserCheck,
      title: "Dedicated Ground Team",
      description: "Your personal wedding planner and dedicated team manage every detail on-ground in India.",
      benefits: ["Personal wedding coordinator", "Local vendor management", "Real-time progress updates", "Emergency support"]
    },
    {
      icon: Shield,
      title: "Verified Vendor Network",
      description: "Work with our carefully vetted and trusted network of premium vendors across India.",
      benefits: ["Background-checked vendors", "Quality guarantees", "Fixed pricing", "Performance tracking"]
    },
    {
      icon: Globe,
      title: "Global NRI Experience",
      description: "Trusted by 100+ families from USA, UK, Canada, Australia, and Middle East.",
      benefits: ["Cultural understanding", "Time zone flexibility", "International payment options", "Multi-language support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why NRI Families Trust Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Planning a wedding from overseas can be challenging. We've built our entire process 
              around making it seamless, transparent, and stress-free for you.
            </p>
          </div>

          {/* Trust Factors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {trustFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                        {factor.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {factor.description}
                      </p>
                      <ul className="space-y-3">
                        {factor.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">NRI Weddings Planned</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Indian Cities Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Availability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;