'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`New Design Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Interested In: ${formData.service}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:rubyrosevan@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-rubyrose-green">Us</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ready to transform your space? Get in touch with our design experts for a free consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Details */}
          <div className="lg:w-1/3 bg-rubyrose-light p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-rubyrose-green mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Phone</h4>
                  <p className="text-gray-700">0721 404 271</p>
                  <p className="text-gray-700">0774 404 171</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-rubyrose-green mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Email</h4>
                  <p className="text-gray-700">rubyrosevan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-rubyrose-green mt-1" />
                <div>
                  <h4 className="font-medium text-lg">Locations</h4>
                  <p className="text-gray-700 mb-2">Kipro Center Westlands</p>
                  <p className="text-gray-700">Ruiru Bypass Kihunguru - CNC Cutting</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rubyrose-green"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rubyrose-green"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rubyrose-green"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="service" className="block mb-2 font-medium">Service Interested In</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rubyrose-green"
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Client Consultation</option>
                  <option value="space-planning">Space Planning/3D Layouts</option>
                  <option value="project-management">Project Management</option>
                  <option value="mother-day-special">Mother's Day Special Package</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rubyrose-green"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button
                  type="button"
                  onClick={handleEmailClick}
                  className="px-6 py-3 bg-rubyrose-green text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;