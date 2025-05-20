'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DesignProject {
  id: number;
  title: string;
  description: string;
  category: string;
  images?: string[];
  video?: string;
  location: string;
}

const designProjects: DesignProject[] = [
  {
    id: 1,
    title: "Mirrored Elegance",
    description: "Bespoke mirror installations adding depth and luxury.",
    category: "Mirror Design",
    images: ["/mirror.jpg", "/mirror1.jpeg", "/mirror2.jpg", "/mirror3.jpg", "/mirror5.jpeg", "/mirror4.jpg"],
    location: "Kileleshwa"
  },
  {
    id: 2,
    title: "3D Geometric Accent Wall",
    description: "Striking accent wall design with molding for texture and visual impact.",
    category: "Wall Design",
    images: ["/wall.jpg", "/wall1.jpg", "/wall2.jpg"],
    location: "Kitengela"
  },
  {
    id: 3,
    title: "Ceiling & Lighting Experience",
    description: "Modern gypsum ceiling with ambient recessed lighting and central chandelier.",
    category: "Ceiling & Lighting",
    images: ["/ceiling1.jpg", "/ceiling2.jpg", "/ceiling3.jpg"],
    location: "Syokimau"
  },
  {
    id: 4,
    title: "Luxury Sitting Room Area",
    description: "Contemporary living space with curated lighting and accent walls.",
    category: "Living Room",
    images: ["/living.jpg", "/sitting2.jpeg", "/sitting3.jpeg"],
    location: "Lavington"
  },
  {
    id: 5,
    title: "Modern Kitchen Transformation",
    description: "Complete kitchen remodel with custom cabinetry and quartz countertops.",
    category: "Kitchen",
    images: ["/kitchen.jpg", "/kitchen1.jpeg", "/kitchen2.jpeg", "/kitchen3.jpeg"],
    location: "Nairobi"
  },
  {
    id: 6,
    title: "Walk-In Wardrobe Design",
    description: "Luxury wardrobe system with integrated lighting and glass displays.",
    category: "Wardrobe",
    images: ["/wardrobe.jpg", "/wardrobe1.jpeg", "/wardrobe2.jpeg", "/wardrobe3.jpeg"],
    location: "Mombasa"
  },
  {
    id: 7,
    title: "Outdoor Living Space",
    description: "Landscaped patio with custom seating and ambient lighting.",
    category: "Outdoor",
    images: ["/outdoor.jpg", "/outdoor1.jpeg", "/outdoor2.jpeg", "/outdoor3.jpeg"],
    location: "Karen"
  },
  {
    id: 8,
    title: "Statement Lighting Installation",
    description: "Custom chandelier and accent lighting for grand foyer.",
    category: "Lighting",
    images: ["/lighting.jpg", "/lighting1.jpeg", "/lighting2.jpeg", "/lighting3.jpeg"],
    location: "Runda"
  },
  {
    id: 9,
    title: "Elegant Dining Room",
    description: "Contemporary dining area with bespoke furniture and ambient lighting.",
    category: "Dining",
    images: ["/dining.jpg", "/dining1.jpeg", "/dining2.jpeg", "/dining3.jpeg"],
    location: "Langata"
  },
  {
    id: 10,
    title: "Outdoor Lighting",
    description: "Decorative and functional wall lighting for outdoor spaces.",
    category: "Lighting",
    images: ["/wl.jpg", "/wl1.jpeg", "/wl2.jpeg", "/outdoor.jpeg"],
    location: "Karen"
  },
  {
    id: 11,
    title: "Modern Bathroom Renovation",
    description: "Sleek bathroom remodel with minimalist fixtures and marble finishes.",
    category: "Bathroom",
    images: ["/bathroom.jpeg", "/bathroom1.jpeg", "/bathroom2.jpeg", "/bathroom3.jpeg"],
    location: "Westlands"
  },
  {
    id: 12,
    title: "Cozy Bedroom Retreat",
    description: "Warm and inviting bedroom design with custom storage solutions.",
    category: "Bedroom",
    images: ["/bedroom.jpeg", "/bedroom1.jpeg", "/bedroom2.jpeg", "/bedroom3.jpeg"],
    location: "Lavington"
  },
  {
    id: 13,
    title: "Wardrobe Installation Process",
    description: "Step-by-step installation of a custom built-in wardrobe.",
    category: "Wardrobe",
    video: "/wardrobe.mp4",
    location: "Nakuru"
  },
  {
    id: 14,
    title: "CNC Door Cutting",
    description: "Precision CNC cutting for custom decorative door panels.",
    category: "Workshop",
    video: "/cnc.mp4",
    location: "Industrial Area, Nairobi"
  },
  {
    id: 15,
    title: "Premium Flooring Finishes",
    description: "Seamless vinyl, tile, and hardwood flooring solutions for modern interiors.",
    category: "Flooring",
    images: ["/floor.jpg", "/floor2.jpg", "/floor3.jpeg"],
    location: "Thindigua"
  }
];

const DesignProjectCard = ({ project }: { project: DesignProject }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    if (project.images) {
      setImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const interval = setInterval(() => {
        nextImage();
      }, 3000); // 3 seconds interval
      return () => clearInterval(interval);
    }
  }, [project.images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full">
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          {project.video ? (
            <video
              src={project.video}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <img
                src={project.images?.[imageIndex]}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              {project.images && project.images.length > 1 && (
                <>
                  <div className="absolute inset-y-0 left-2 flex items-center">
                    <button
                      onClick={prevImage}
                      aria-label="Previous image"
                      className="bg-white rounded-full p-1 shadow hover:bg-gray-200 transition"
                    >
                      <ChevronLeft className="h-5 w-5 text-black" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-2 flex items-center">
                    <button
                      onClick={nextImage}
                      aria-label="Next image"
                      className="bg-white rounded-full p-1 shadow hover:bg-gray-200 transition"
                    >
                      <ChevronRight className="h-5 w-5 text-black" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
          <div className="absolute bottom-0 left-0 bg-green-600 text-white text-xs px-3 py-1 rounded-tr-lg rounded-bl-lg">
            {project.category}
          </div>
        </div>

        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{project.location}</p>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>

          <Button
            variant="outline"
            className="mt-4 w-full border-green-500 text-green-700 hover:bg-green-50"
            asChild
          >
            <a href="#contact">
              <ArrowRight className="h-4 w-4 mr-2" />
              Get This Look
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Design Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of exceptional interior transformations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {designProjects.map((project) => (
            <DesignProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            Start Your Design Project
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
