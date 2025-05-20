'use client';

import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayedWelcome, setDisplayedWelcome] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const welcomeText = "Welcome to RubyRose Ventures";

  useEffect(() => {
    if (currentIndex < welcomeText.length) {
      const timeout = setTimeout(() => {
        setDisplayedWelcome((prev) => prev + welcomeText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text content */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="text-red-600" size={24} />
                  <span className="text-lg md:text-xl font-semibold tracking-wide text-green-700 font-mono">
                    {displayedWelcome}
                    {currentIndex === welcomeText.length ? (
                      <span className="text-black"> | Interior Architects</span>
                    ) : (
                      <span className="animate-pulse text-black">|</span>
                    )}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="text-red-600">Exceptional</span>{' '}
                  <span className="text-green-600">Interior Design</span><br />
                  For <span className="text-black">Discerning</span> Clients
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
                  We transform spaces into sophisticated environments that reflect your unique personality and lifestyle through our meticulous design process.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.a
                  href="#services"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-green-700/30 transition-all text-center"
                >
                  Explore Services
                </motion.a>
                <motion.a
                  href="#portfolio"
                  whileHover={{ y: -2 }}
                  className="px-8 py-4 border border-gray-300 hover:border-green-500 text-gray-700 hover:text-green-600 font-medium rounded-lg transition-all text-center"
                >
                  View Portfolio
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Video content */}
          <div className="lg:w-1/2 w-full relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-200"
            >
              <div className="aspect-video w-full bg-gray-100">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/ruby.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-xl mb-1">Nairobi Luxury Residence</p>
                  <p className="text-green-400 text-sm font-medium">2023 Award-Winning Design</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
