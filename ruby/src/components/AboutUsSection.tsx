'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-green-700 mb-8 tracking-wide">
            About <span className="text-black">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-black leading-relaxed text-center font-light">
            At <span className="font-semibold text-green-700">RubyRose Ventures</span>, we believe that great design transforms spaces and inspires lives.
            With a passion for aesthetics and a deep understanding of functionality, we specialize in creating interiors that are both beautiful and practical.
            <br /><br />
            From concept to completion, our team of experienced designers works closely with each client to bring their vision to life—whether it’s a cozy home, a modern office,
            or a luxury commercial space.
            <br /><br />
            With a keen eye for detail and a commitment to quality, we blend style, comfort, and purpose into every project. Our goal is not just to decorate, but to craft environments that
            reflect personality, enhance well-being, and elevate everyday living.
            <br /><br />
            <span className="italic text-green-700 font-medium">Let us turn your space into a story worth living.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
