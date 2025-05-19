'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DesignProject {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  video?: string;
  location: string;
}

const designProjects: DesignProject[] = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    description: "Complete kitchen remodel with custom cabinetry and quartz countertops.",
    category: "Kitchen",
    image: "/kitchen1.jpg",
    location: "Nairobi"
  },
  {
    id: 2,
    title: "Walk-In Wardrobe Design",
    description: "Luxury wardrobe system with integrated lighting and glass displays.",
    category: "Wardrobe",
    image: "/wardrobe.jpg",
    location: "Mombasa"
  },
  {
    id: 3,
    title: "Outdoor Living Space",
    description: "Landscaped patio with custom seating and ambient lighting.",
    category: "Outdoor",
    image: "/outdoor2.jpg",
    location: "Karen"
  },
  {
    id: 4,
    title: "Statement Lighting Installation",
    description: "Custom chandelier and accent lighting for grand foyer.",
    category: "Lighting",
    image: "/lighting.jpg",
    location: "Runda"
  },
  {
    id: 5,
    title: "Elegant Dining Room",
    description: "Contemporary dining area with bespoke furniture and ambient lighting.",
    category: "Dining",
    image: "/dining.jpg",
    location: "Langata"
  },
  {
    id: 6,
    title: "Outdoor Wall Lighting",
    description: "Decorative and functional wall lighting for outdoor spaces.",
    category: "Lighting",
    image: "/wall.jpg",
    location: "Karen"
  },
  {
    id: 7,
    title: "Modern Bathroom Renovation",
    description: "Sleek bathroom remodel with minimalist fixtures and marble finishes.",
    category: "Bathroom",
    image: "/bathroom.jpeg",
    location: "Westlands"
  },
  {
    id: 8,
    title: "Cozy Bedroom Retreat",
    description: "Warm and inviting bedroom design with custom storage solutions.",
    category: "Bedroom",
    image: "/bedroom.jpeg",
    location: "Lavington"
  },
  {
    id: 9,
    title: "Wardrobe Installation Process",
    description: "Step-by-step installation of a custom built-in wardrobe.",
    category: "Wardrobe",
    video: "/wardrobe.mp4",
    location: "Nakuru"
  },
  {
    id: 10,
    title: "CNC Door Cutting",
    description: "Precision CNC cutting for custom decorative door panels.",
    category: "Workshop",
    video: "/cnc.mp4",
    location: "Industrial Area, Nairobi"
  }
];

const DesignProjectCard = ({ project }: { project: DesignProject }) => {
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
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
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
