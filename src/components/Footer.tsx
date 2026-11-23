import {
  MapPin,
  Phone,
  MessageCircle,
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cabins';
import { CabinLogo } from './Navbar';

interface FooterProps {
  onSelectServiceForQuote: (serviceName: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export function Footer({ onSelectServiceForQuote, onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#05294F] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Description */}
          <div className="lg:col-span-4 space-y-4">
            <CabinLogo inverted />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Leading manufacturer and supplier of custom portable cabins, ISO
              container offices, site offices, security booths, portable homes,
              and modular cafés across India.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB900] text-white hover:text-[#05294F] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                aria-label="Portable Cabin on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB900] text-white hover:text-[#05294F] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                aria-label="Portable Cabin on YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB900] text-white hover:text-[#05294F] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                aria-label="Portable Cabin on LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB900] text-white hover:text-[#05294F] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                aria-label="Portable Cabin on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FFB900] text-white hover:text-[#05294F] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFB900] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Work Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFB900] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICES.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#contact"
                    onClick={() => onSelectServiceForQuote(svc.title)}
                    className="hover:text-white transition-colors"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#FFB900]">
              Contact Information
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-[#FFB900] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <p className="leading-relaxed">{BUSINESS_INFO.address}</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 text-[#FFB900] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-display text-lg font-bold text-white hover:text-[#FFB900] transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#042140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <p>&copy; 2026 Portable Cabin. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-white/25">
              |
            </span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
