import { useState } from 'react';
import { 
  User, 
  LayoutDashboard, 
  Briefcase, 
  PaintRoller, 
  DoorClosed, 
  CookingPot, 
  Bed 
} from 'lucide-react';

const services = [
  {
    icon: User,
    title: "Client Consultation",
    description: "Personalized consultations to understand your vision and design goals."
  },
  {
    icon: LayoutDashboard,
    title: "Space Planning/3D Layouts",
    description: "Expert space planning and 3D visualizations to bring your project to life before construction begins."
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "End-to-end project management, including mood boards and sample selections."
  },
  {
    icon: PaintRoller,
    title: "Painting & Moulding",
    description: "Professional painting services and custom moulding installation to enhance your interior."
  },
  {
    icon: DoorClosed,
    title: "Doors and Frames",
    description: "Quality door installation and custom framing solutions for every space."
  },
  {
    icon: CookingPot,
    title: "Kitchen Cabinets/Countertops",
    description: "Custom kitchen designs with premium cabinets and countertops installation."
  },
  {
    icon: Bed,
    title: "Custom Furniture Production",
    description: "Bespoke furniture creation tailored to your exact specifications and style preferences."
  }
];

const additionalServices = [
  "Tile and Flooring Works",
  "Gypsum and Ceiling Designs",
  "Wainscoting and Wall Arts",
  "Aluminum and Glass Works",
  "Wall Panels",
  "Exterior Designs",
  "Landscaping",
  "Water Fountains",
  "Garden Light Fixtures"
];

const ServicesSection = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-rubyrose-green">Services</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            RubyRose Ventures provides a comprehensive range of interior design and renovation services. From initial concept to final execution, we handle every aspect of transforming your space.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-xl p-6 transition-all hover:shadow-2xl transform hover:scale-105 duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-rubyrose-green bg-opacity-10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <service.icon className="text-rubyrose-green" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600">
                <div className="w-2 h-2 rounded-full bg-rubyrose-green"></div>
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
