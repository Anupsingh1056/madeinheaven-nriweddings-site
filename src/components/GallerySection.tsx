import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      title: "Elegant Mandap Decoration",
      description: "Traditional ceremony setup with marigold flowers and gold details"
    },
    {
      src: gallery2,
      title: "Royal Udaipur Wedding",
      description: "Destination wedding in a magnificent palace courtyard"
    },
    {
      src: gallery3,
      title: "Beach Wedding in Goa",
      description: "Romantic sunset ceremony by the ocean"
    },
    {
      src: gallery4,
      title: "Vibrant Mehendi Ceremony",
      description: "Colorful traditional celebration with authentic decor"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Wedding Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of stunning weddings and celebrations. Each event 
              tells a unique love story crafted with passion and precision.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
                onClick={() => openModal(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Gallery Placeholders - simulating more content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-border hover:border-primary/30 transition-colors"
              >
                <div className="text-center text-muted-foreground">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">+</span>
                  </div>
                  <div className="text-sm">More Photos</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button variant="elegant" size="lg" className="px-8 py-4">
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery Image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;