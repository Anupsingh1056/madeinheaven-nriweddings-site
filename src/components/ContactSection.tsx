import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, MessageCircle, Calendar, Users } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    eventDate: '',
    weddingType: '',
    guestCount: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours to discuss your dream wedding.",
    });
    
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      country: '',
      phone: '',
      eventDate: '',
      weddingType: '',
      guestCount: '',
      message: ''
    });
  };

  const openWhatsApp = () => {
    const message = `Hello! I'm interested in planning my wedding with Made in Heaven. Here are my details:
Name: ${formData.name}
Country: ${formData.country}
Event Date: ${formData.eventDate}
Wedding Type: ${formData.weddingType}
Guest Count: ${formData.guestCount}

I'd love to discuss this further!`;
    
    window.open(`https://wa.me/919638063350?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Plan Your Dream Wedding
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start planning? Fill out the form below or reach out directly. 
              We're here to make your wedding dreams come true.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-serif text-2xl font-bold mb-6">Get Your Free Consultation</h3>
              
              <form action="https://formsubmit.co/anupsingh1056@gmail.com" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input
                      name="name"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Country *</label>
                    <select name="country" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select your country</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Germany">Germany</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Preferred Event Date</label>
                    <Input
                      type="date"
                      name="eventDate"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Wedding Type</label>
                    <select name="weddingType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="">Select wedding type</option>
                      <option value="Destination Wedding">Destination Wedding</option>
                      <option value="Traditional Wedding">Traditional Wedding</option>
                      <option value="Royal/Palace Wedding">Royal/Palace Wedding</option>
                      <option value="Beach Wedding">Beach Wedding</option>
                      <option value="Intimate Ceremony">Intimate Ceremony</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Expected Guest Count</label>
                  <select name="guestCount" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select guest count</option>
                    <option value="50-100 guests">50-100 guests</option>
                    <option value="100-200 guests">100-200 guests</option>
                    <option value="200-300 guests">200-300 guests</option>
                    <option value="300+ guests">300+ guests</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Tell us about your vision</label>
                  <Textarea
                    name="message"
                    placeholder="Share your wedding vision, preferred locations, special requirements, or any questions you have..."
                    rows={4}
                  />
                </div>

                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href + "?success=true"} />
                <input type="hidden" name="_subject" value="New Wedding Inquiry from Made in Heaven Website" />
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    variant="royal" 
                    className="flex-1"
                  >
                    Send Inquiry
                  </Button>
                  <Button 
                    type="button"
                    variant="whatsapp" 
                    onClick={openWhatsApp}
                    className="flex-1"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Have questions? We're here to help you plan the perfect celebration. 
                  Reach out through any of these channels.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+91 96380 63350</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@madeinheaven.in</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-muted-foreground">Vadodara, Gujarat, India</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-muted-foreground">Quick chat available 24/7</div>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Operating Hours
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Emergency support only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;