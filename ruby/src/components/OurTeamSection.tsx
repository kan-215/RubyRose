'use client';

import React from 'react';
import { motion } from 'framer-motion';

const OurTeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="text-green-600">Team</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Behind every stunning space is a team of passionate and talented individuals who collaborate, innovate, and care deeply about what they create.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 justify-center">
          {/* Image Card 1 - Updated to show full image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-lg bg-white flex flex-col items-center border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-64 overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src="/team2.jpg"
                alt="RubyRose team dining together"
                className="max-w-full max-h-full object-scale-down"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-semibold text-xl text-white">Team Bonding</h3>
              </div>
            </div>
            <div className="p-6 text-center w-full">
              <p className="text-gray-600 text-base">
                Celebrating success after a project wrap-up with a team dinner.
              </p>
            </div>
          </motion.div>

          {/* Image Card 2 - Updated to show full image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-lg bg-white flex flex-col items-center border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-64 overflow-hidden flex items-center justify-center bg-gray-100">
              <img
                src="/team1.jpg"
                alt="RubyRose team working"
                className="max-w-full max-h-full object-scale-down"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="font-semibold text-xl text-white">Creative in Action</h3>
              </div>
            </div>
            <div className="p-6 text-center w-full">
              <p className="text-gray-600 text-base">
                The team enroute to site
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;