import {
  ArrowRight,
  Phone,
  Truck,
  ShieldCheck,
  Gem,
  Wrench,
  Handshake,
} from 'lucide-react';
import { HERO_IMAGE, BUSINESS_INFO } from '../data/cabins';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

const TRUST_FEATURES = [
  { icon: Truck, label: 'Fast Delivery' },
  { icon: ShieldCheck, label: 'Heavy-Duty Quality' },
  { icon: Gem, label: 'Premium Finishing' },
  { icon: Wrench, label: 'Skilled Workmanship' },
  { icon: Handshake, label: 'Corporate & Industrial Supply' },
];

export function Hero({ onSelectServiceForQuote }: HeroProps) {
  return (
    <section id="home" className="relative bg-[#EDF4FC]">
      {/* Main Two-Column Hero Banner */}
      <div className="relative overflow-hidden">
        {/* Background gradient & hero photo blending on large screens */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-center z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-8 h-1 bg-[#FFB900] rounded-full" />
                <span className="inline-block w-4 h-1 bg-[#073568] rounded-full" />
              </div>

              <p className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-[#073568]">
                Mobile Portable Services
              </p>

              <h1 className="mt-2 font-display font-extrabold text-[#05294F] tracking-tight leading-[1.1] text-[clamp(2.25rem,4.2vw,3.5rem)] [text-wrap:balance]">
                Mobile Building Service
              </h1>

              <h2 className="mt-3 font-display text-lg sm:text-xl font-bold text-[#073568]">
                Portable Cabin Manufacturer &amp; Containers
              </h2>

              <p className="mt-4 text-base text-[#172B45]/85 leading-relaxed max-w-xl">
                Smart, durable and customized portable cabin solutions for
                commercial, residential and industrial requirements across
                Hyderabad and PAN India.
              </p>

              {/* Service Categories Inline List */}
              <div className="mt-5 text-sm font-medium text-[#05294F] leading-7">
                <a
                  href="#services"
                  onClick={() => onSelectServiceForQuote('Custom-Built Cabins')}
                  className="hover:text-[#073568] hover:underline underline-offset-4"
                >
                  Custom-Built Cabins
                </a>
                <span className="mx-2 text-[#073568]/40" aria-hidden="true">
                  |
                </span>
                <a
                  href="#services"
                  onClick={() => onSelectServiceForQuote('Container Offices')}
                  className="hover:text-[#073568] hover:underline underline-offset-4"
                >
                  Container Offices
                </a>
                <span className="mx-2 text-[#073568]/40" aria-hidden="true">
                  |
                </span>
                <a
                  href="#services"
                  onClick={() => onSelectServiceForQuote('Site Offices')}
                  className="hover:text-[#073568] hover:underline underline-offset-4"
                >
                  Site Offices
                </a>
                <br className="hidden sm:inline" />
                <span className="sm:hidden mx-2 text-[#073568]/40" aria-hidden="true">
                  |
                </span>
                <a
                  href="#services"
                  onClick={() => onSelectServiceForQuote('Security Cabins')}
                  className="hover:text-[#073568] hover:underline underline-offset-4"
                >
                  Security Cabins
                </a>
                <span className="mx-2 text-[#073568]/40" aria-hidden="true">
                  |
                </span>
                <a
                  href="#services"
                  onClick={() => onSelectServiceForQuote('Home Cabins')}
                  className="hover:text-[#073568] hover:underline underline-offset-4"
                >
                  Home Cabins
                </a>
                <span className="mx-2 text-[#073568]/40" aria-hidden="true">
                  |
                </span>
                <a
                  href="#services"
                  onClick={() => onSelectServiceForQuote('Portable Toilets')}
                  className="hover:text-[#073568] hover:underline underline-offset-4"
                >
                  Toilets
                </a>
                <span className="mx-2 text-[#073568]/40" aria-hidden="true">
                  |
                </span>
                <a
                  href="#services"
                  onClick={() => onSelectServiceForQuote('Café Cabins')}
                  className="hover:text-[#073568] hover:underline underline-offset-4"
                >
                  Café Cabins
                </a>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#contact"
                  onClick={() => onSelectServiceForQuote('Custom-Built Cabins')}
                  className="inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold px-7 py-3.5 rounded-lg text-sm sm:text-base shadow-sm transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 bg-[#073568] hover:bg-[#05294F] text-white font-semibold px-7 py-3.5 rounded-lg text-sm sm:text-base transition-colors whitespace-nowrap shrink-0"
                >
                  <Phone className="w-4 h-4 text-[#FFB900]" aria-hidden="true" />
                  <span>Contact Us · {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6 flex">
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-[#073568]/10 bg-white min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]">
                <ResilientImage
                  src={HERO_IMAGE}
                  alt="Modern white modular portable office cabin with black-framed glass windows and steel entry steps"
                  loading="eager"
                  fallbackTitle="Modern Modular Portable Office Cabin"
                  className="w-full h-full object-cover"
                />
                {/* Subtle blue atmospheric overlay for edge polish & contrast */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-[#05294F]/35 via-transparent to-[#073568]/10 pointer-events-none"
                />
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#05294F]/90 backdrop-blur-sm text-white px-4 py-2.5 rounded-lg border border-white/15">
                  <p className="text-xs font-medium text-[#FFB900]">
                    Hyderabad Manufacturing Facility
                  </p>
                  <p className="text-sm font-semibold">
                    Custom-Engineered Modular Cabins · PAN India Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Features Strip */}
      <div className="bg-[#05294F] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-0 lg:divide-x lg:divide-white/15">
            {TRUST_FEATURES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 lg:justify-center lg:px-4 py-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#FFB900]" aria-hidden="true" />
                  </div>
                  <span className="font-display text-sm font-semibold text-white leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
