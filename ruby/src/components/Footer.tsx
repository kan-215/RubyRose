import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-rubyrose-dark to-black text-white py-12 md:py-16 border-t border-rubyrose-light/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Information */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/fdc8d7e8-7789-424d-a6bc-60a2cdc47cd8.png" 
                alt="RubyRose Ventures Logo" 
                className="h-12 w-auto invert"
              />
              <h2 className="text-2xl font-bold text-rubyrose-light tracking-tight">
                RUBYROSE VENTURES
              </h2>
            </div>
            <p className="text-gray-300/80 text-sm leading-relaxed">
              Premium interior design and renovation services that transform ordinary spaces into extraordinary environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-rubyrose-light mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-rubyrose-green transition">Home</a></li>
              <li><a href="#about" className="hover:text-rubyrose-green transition">About Us</a></li>
              <li><a href="#team" className="hover:text-rubyrose-green transition">Our Team</a></li>
              <li><a href="#services" className="hover:text-rubyrose-green transition">Services</a></li>
              <li><a href="#portfolio" className="hover:text-rubyrose-green transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-rubyrose-green transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-rubyrose-light mb-4">Contact Us</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Email: <a href="mailto:rubyrosevan@gmail.com" className="text-rubyrose-green hover:underline">rubyrosevan@gmail.com</a></li>
              <li>Phone: <a href="tel:0721404271" className="text-rubyrose-green hover:underline">0721 404 271</a></li>
              <li>Phone: <a href="tel:0774404171" className="text-rubyrose-green hover:underline">0774 404 171</a></li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-rubyrose-light mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              <a 
                href="https://www.facebook.com/share/1ARtAGkWsQ/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600/20 transition duration-300"
              >
                <Facebook className="text-white w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/interior__architectures?igsh=am9mYnA2M2VjcWNx&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500/20 transition duration-300"
              >
                <Instagram className="text-white w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} RubyRose Ventures. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;