import Hero from '@/components/sections/Hero';
import OurServicesSection from '@/components/OurServicesSection';
import ClientsSection from '@/components/ClientsSection';
import IndustriesSection from '@/components/IndustriesSection';
import FeaturedContentSection from '@/components/FeaturedContentSection';
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TechnologiesSection from '@/components/TechnologiesSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurServicesSection />
      <ClientsSection />
      <IndustriesSection />
      <FeaturedContentSection />
      <ContactSection />
      <h2 style={{ color: 'red', fontSize: '2rem', textAlign: 'center', backgroundColor: 'yellow' }}>old components v1.0</h2>
      <ServicesSection />
      <StatsSection />
      <TechnologiesSection />
    </div>
  );
}
