import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya & Arjun Sharma",
      location: "Toronto, Canada",
      event: "Destination Wedding - Udaipur",
      rating: 5,
      text: "Made in Heaven turned our dream of a royal Udaipur wedding into reality. Planning from Canada seemed impossible, but their team made it effortless. Every detail was perfect, from the venue to the vendors. Our families still talk about how magical it was!",
      image: "PS"
    },
    {
      name: "Ravi & Meera Patel",
      location: "London, UK",
      event: "Traditional Wedding - Vadodara",
      rating: 5,
      text: "Being in London, we were worried about planning our wedding in India. Made in Heaven's virtual planning process was incredible. The daily updates, video calls, and their attention to our traditions made us feel involved every step of the way.",
      image: "RM"
    },
    {
      name: "Sameer & Kavya Gupta",
      location: "Dubai, UAE",
      event: "Beach Wedding - Goa",
      rating: 5,
      text: "Our Goa beach wedding was everything we dreamed of and more. The team understood our vision perfectly and executed it flawlessly. The sunset ceremony and reception were breathtaking. Highly recommend for any NRI family!",
      image: "SK"
    },
    {
      name: "Vikram & Sanya Reddy",
      location: "Sydney, Australia",
      event: "Palace Wedding - Jaipur",
      rating: 5,
      text: "The royal treatment we received was unmatched. From the initial consultation to the final send-off, every moment was handled with care and professionalism. Our Jaipur palace wedding was truly made in heaven!",
      image: "VS"
    },
    {
      name: "Rajesh & Pooja Singh",
      location: "New York, USA",
      event: "Multi-day Celebration - Vadodara",
      rating: 5,
      text: "Planning a 4-day wedding celebration from New York was daunting, but Made in Heaven made it seamless. Their coordination was impeccable, and our guests were amazed by the hospitality and arrangements. Thank you for making our special days unforgettable!",
      image: "RP"
    },
    {
      name: "Ankit & Rhea Agarwal",
      location: "Frankfurt, Germany",
      event: "Heritage Wedding - Rajasthan",
      rating: 5,
      text: "The cultural authenticity combined with modern luxury was exactly what we wanted. Made in Heaven's team understood our German efficiency expectations while delivering Indian warmth and traditions. Perfect blend for our international family!",
      image: "AR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our NRI Families Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from couples who trusted us to plan their dream weddings from across the globe. 
              Their joy is our greatest achievement.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
              >
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">{testimonial.image}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-8 h-8 text-accent fill-current" />
                ))}
              </div>
              <span className="ml-4 text-2xl font-bold text-primary">4.9/5</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Average rating from 100+ NRI wedding families
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;