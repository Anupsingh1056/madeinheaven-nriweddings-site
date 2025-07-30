import { Star, Quote } from "lucide-react";

const GoogleReviewsSection = () => {
  const reviews = [
    {
      name: "Priya & Arjun",
      location: "New York, USA",
      rating: 5,
      review: "Made in Heaven made our dream destination wedding in Udaipur absolutely perfect! Being NRIs, we were worried about planning from abroad, but their team handled everything flawlessly. Every detail was executed to perfection.",
      date: "2 months ago"
    },
    {
      name: "Ravi Sharma",
      location: "London, UK", 
      rating: 5,
      review: "Outstanding service! We planned our entire wedding from London and the team kept us updated every step of the way. The venue selection, decor, and coordination were top-notch. Highly recommend for NRI weddings!",
      date: "3 months ago"
    },
    {
      name: "Meera Patel",
      location: "Toronto, Canada",
      rating: 5,
      review: "Exceptional wedding planning experience! Their attention to detail and understanding of both traditional and modern preferences made our wedding celebration unforgettable. Worth every penny!",
      date: "4 months ago"
    },
    {
      name: "Sandeep & Kavya",
      location: "Sydney, Australia",
      rating: 5,
      review: "Professional, reliable, and creative! Made in Heaven transformed our vision into reality. The remote planning process was seamless and stress-free. Our guests are still talking about the beautiful arrangements!",
      date: "5 months ago"
    }
  ];

  const openGoogleReviews = () => {
    window.open('https://g.page/r/made-in-heaven-reviews', '_blank');
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                alt="Google" 
                className="w-8 h-8 mr-3"
              />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Google Reviews
              </h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="flex text-yellow-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold">4.9/5</span>
              <span className="text-muted-foreground ml-2">(127 reviews)</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. See what our happy couples from around the world say about their wedding experience with Made in Heaven.
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-foreground mb-4 leading-relaxed">
                  "{review.review}"
                </p>

                {/* Reviewer Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.location}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to View More Reviews */}
          <div className="text-center">
            <button
              onClick={openGoogleReviews}
              className="inline-flex items-center bg-white border border-gray-300 rounded-lg px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/120px-Google_%22G%22_logo.svg.png" 
                alt="Google" 
                className="w-5 h-5 mr-2"
              />
              View All Reviews on Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;