/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { CabinService, GalleryItem } from './data/cabins';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import {
  ServiceSpecModal,
  AboutDetailsModal,
  GalleryLightbox,
  LegalModal,
} from './components/Modals';

export default function App() {
  const [selectedService, setSelectedService] = useState('Custom-Built Cabins');
  const [inspectedService, setInspectedService] = useState<CabinService | null>(
    null
  );
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const jumpToContactWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#172B45]">
      <Navbar onSelectServiceForQuote={jumpToContactWithService} />

      <main className="flex-1">
        <Hero onSelectServiceForQuote={jumpToContactWithService} />

        <ServicesSection
          onEnquireService={jumpToContactWithService}
          onInspectService={(svc) => setInspectedService(svc)}
        />

        <AboutSection onOpenAboutModal={() => setAboutModalOpen(true)} />

        <WhyChooseUs
          onQuoteClick={() => jumpToContactWithService('Custom-Built Cabins')}
        />

        <GallerySection onSelectPhoto={(item) => setLightboxItem(item)} />

        <CtaBanner
          onGetQuote={() => jumpToContactWithService('Custom-Built Cabins')}
        />

        <ContactSection selectedService={selectedService} />
      </main>

      <Footer
        onSelectServiceForQuote={jumpToContactWithService}
        onOpenLegal={(type) => setLegalType(type)}
      />

      <ServiceSpecModal
        service={inspectedService}
        onClose={() => setInspectedService(null)}
        onEnquire={jumpToContactWithService}
      />

      <AboutDetailsModal
        open={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onQuote={() => jumpToContactWithService('Custom Project / Bulk Order')}
      />

      <GalleryLightbox
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onSelectItem={(next) => setLightboxItem(next)}
        onRequestSimilar={(title) =>
          jumpToContactWithService(
            title.includes('Container')
              ? 'Container Offices'
              : title.includes('Site')
              ? 'Site Offices'
              : title.includes('Security')
              ? 'Security Cabins'
              : title.includes('Home')
              ? 'Home Cabins'
              : title.includes('Café')
              ? 'Café Cabins'
              : 'Custom-Built Cabins'
          )
        }
      />

      <LegalModal type={legalType} onClose={() => setLegalType(null)} />
    </div>
  );
}
