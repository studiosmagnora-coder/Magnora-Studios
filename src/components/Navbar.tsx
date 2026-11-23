import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cabins';

interface NavbarProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export function CabinLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB900] rounded-md"
    >
      <svg
        width="44"
        height="40"
        viewBox="0 0 44 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer pitched roof */}
        <path
          d="M4 17L22 4L40 17"
          stroke={inverted ? '#FFFFFF' : '#073568'}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Container/cabin frame */}
        <path
          d="M8 15V34H36V15"
          stroke={inverted ? '#FFFFFF' : '#073568'}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Accent roof trim */}
        <path
          d="M11 16L22 8L33 16"
          stroke="#FFB900"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Modular cabin block */}
        <rect
          x="13"
          y="19"
          width="18"
          height="13"
          rx="1.5"
          fill={inverted ? '#FFB900' : '#073568'}
        />
        {/* Door & window panes */}
        <rect
          x="15.5"
          y="22"
          width="5"
          height="10"
          rx="0.5"
          fill={inverted ? '#05294F' : '#FFFFFF'}
        />
        <rect
          x="22.5"
          y="22"
          width="6"
          height="5.5"
          rx="0.5"
          fill={inverted ? '#05294F' : '#EDF4FC'}
        />
        {/* Window divider */}
        <line
          x1="25.5"
          y1="22"
          x2="25.5"
          y2="27.5"
          stroke={inverted ? '#FFB900' : '#073568'}
          strokeWidth="1"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className={`font-display text-xl sm:text-2xl font-extrabold tracking-tight whitespace-nowrap ${
            inverted ? 'text-white' : 'text-[#05294F]'
          }`}
        >
          Portable
          <span className={inverted ? 'text-[#FFB900]' : 'text-[#073568]'}>
            Cabin
          </span>
        </span>
        <span
          className={`text-[11px] font-medium tracking-wide mt-0.5 whitespace-nowrap ${
            inverted ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {BUSINESS_INFO.tagline}
        </span>
      </div>
    </a>
  );
}

export function Navbar({ onSelectServiceForQuote }: NavbarProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const sections = ['home', 'services', 'about', 'why-choose-us', 'gallery', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveHash(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setActiveHash(hash);
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* Top Information Bar - Desktop & Tablet */}
      <div className="hidden md:block bg-[#05294F] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-6 text-xs lg:text-sm">
          <div className="flex items-center gap-6 min-w-0">
            <a
              href={BUSINESS_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors truncate"
              title={BUSINESS_INFO.address}
            >
              <MapPin className="w-4 h-4 text-[#FFB900] shrink-0" aria-hidden="true" />
              <span className="truncate">{BUSINESS_INFO.shortAddress}</span>
            </a>
            <span className="text-white/25 shrink-0" aria-hidden="true">
              |
            </span>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-2 font-semibold text-white hover:text-[#FFB900] transition-colors whitespace-nowrap shrink-0 tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#FFB900] shrink-0" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <a
            href="#contact"
            onClick={() => {
              onSelectServiceForQuote('Custom-Built Cabins');
              handleNavClick('#contact');
            }}
            className="inline-flex items-center gap-1.5 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold px-4 py-1.5 rounded-md text-xs transition-colors whitespace-nowrap shrink-0"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-6">
          <CabinLogo />

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#172B45]"
          >
            <a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className={`relative py-2 whitespace-nowrap shrink-0 transition-colors hover:text-[#073568] ${
                activeHash === '#home' ? 'text-[#073568] font-semibold' : ''
              }`}
            >
              Home
              {activeHash === '#home' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FFB900] rounded-full" />
              )}
            </a>

            {/* Our Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((prev) => !prev)}
                className={`relative py-2 inline-flex items-center gap-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#073568] cursor-pointer ${
                  activeHash === '#services' ? 'text-[#073568] font-semibold' : ''
                }`}
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-150 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
                {activeHash === '#services' && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FFB900] rounded-full" />
                )}
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                  <a
                    href="#services"
                    onClick={() => handleNavClick('#services')}
                    className="block px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#073568] border-b border-slate-100 hover:bg-[#EDF4FC]"
                  >
                    View All 7 Services
                  </a>
                  {SERVICES.map((svc) => (
                    <a
                      key={svc.id}
                      href="#services"
                      onClick={() => {
                        setServicesOpen(false);
                        onSelectServiceForQuote(svc.title);
                      }}
                      className="block px-4 py-2 text-sm text-[#172B45] hover:bg-[#EDF4FC] hover:text-[#073568] transition-colors"
                    >
                      {svc.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#about"
              onClick={() => handleNavClick('#about')}
              className={`relative py-2 whitespace-nowrap shrink-0 transition-colors hover:text-[#073568] ${
                activeHash === '#about' ? 'text-[#073568] font-semibold' : ''
              }`}
            >
              About Us
              {activeHash === '#about' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FFB900] rounded-full" />
              )}
            </a>

            <a
              href="#why-choose-us"
              onClick={() => handleNavClick('#why-choose-us')}
              className={`relative py-2 whitespace-nowrap shrink-0 transition-colors hover:text-[#073568] ${
                activeHash === '#why-choose-us' ? 'text-[#073568] font-semibold' : ''
              }`}
            >
              Why Choose Us
              {activeHash === '#why-choose-us' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FFB900] rounded-full" />
              )}
            </a>

            <a
              href="#gallery"
              onClick={() => handleNavClick('#gallery')}
              className={`relative py-2 whitespace-nowrap shrink-0 transition-colors hover:text-[#073568] ${
                activeHash === '#gallery' ? 'text-[#073568] font-semibold' : ''
              }`}
            >
              Gallery
              {activeHash === '#gallery' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FFB900] rounded-full" />
              )}
            </a>

            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className={`relative py-2 whitespace-nowrap shrink-0 transition-colors hover:text-[#073568] ${
                activeHash === '#contact' ? 'text-[#073568] font-semibold' : ''
              }`}
            >
              Contact
              {activeHash === '#contact' && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#FFB900] rounded-full" />
              )}
            </a>
          </nav>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <a
              href={BUSINESS_INFO.phoneHref}
              aria-label={`Call ${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-[#EDF4FC] text-[#073568] hover:bg-[#dceafb] transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-[#05294F] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg">
            <a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#172B45] hover:bg-[#EDF4FC] hover:text-[#073568]"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => handleNavClick('#services')}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#172B45] hover:bg-[#EDF4FC] hover:text-[#073568]"
            >
              Our Services
            </a>
            <a
              href="#about"
              onClick={() => handleNavClick('#about')}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#172B45] hover:bg-[#EDF4FC] hover:text-[#073568]"
            >
              About Us
            </a>
            <a
              href="#why-choose-us"
              onClick={() => handleNavClick('#why-choose-us')}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#172B45] hover:bg-[#EDF4FC] hover:text-[#073568]"
            >
              Why Choose Us
            </a>
            <a
              href="#gallery"
              onClick={() => handleNavClick('#gallery')}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#172B45] hover:bg-[#EDF4FC] hover:text-[#073568]"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#172B45] hover:bg-[#EDF4FC] hover:text-[#073568]"
            >
              Contact
            </a>
            <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
              <div className="flex items-start gap-2 px-3 py-1 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-[#073568] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS_INFO.shortAddress}</span>
              </div>
              <a
                href="#contact"
                onClick={() => {
                  onSelectServiceForQuote('Custom-Built Cabins');
                  handleNavClick('#contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FFB900] text-[#05294F] font-bold py-3 px-4 rounded-lg text-sm"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
