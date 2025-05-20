'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navItems = ['home', 'about', 'team', 'services', 'portfolio', 'contact'];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/logo.jpg"
              alt="RubyRose Ventures Logo"
              className="h-10 md:h-12"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold bg-gradient-to-r from-red-600 via-green-600 to-black bg-clip-text text-transparent">
                RUBYROSE
              </span>
              <span className="text-sm text-gray-600">Interior Architects</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-medium text-gray-800 hover:text-green-600 transition-colors capitalize"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow hover:shadow-green-500/30 transition-all"
          >
            Get Free Consultation
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-800 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Side Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transition-transform transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold bg-gradient-to-r from-red-600 via-green-600 to-black bg-clip-text text-transparent">
              RUBYROSE
            </span>
            <span className="text-xs text-gray-600">Interior Architects</span>
          </div>
          <button onClick={toggleMobileMenu}>
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 p-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={toggleMobileMenu}
              className="text-gray-800 font-medium py-2 px-3 rounded hover:bg-gray-100 capitalize"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            onClick={toggleMobileMenu}
            className="mt-4 text-white bg-green-600 hover:bg-green-700 text-center py-3 px-4 rounded-lg font-medium shadow hover:shadow-green-500/30 transition-all"
          >
            Get Free Consultation
          </a>
        </div>
      </aside>
    </>
  );
};

export default Header;
