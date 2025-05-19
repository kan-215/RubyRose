import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutUsSection from '@/components/AboutUsSection';
import OurTeamSection from '@/components/OurTeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutUsSection />
      <OurTeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
