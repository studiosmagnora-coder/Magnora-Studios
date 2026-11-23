import { ArrowRight, Phone } from 'lucide-react';
import { ABOUT_IMAGE, BUSINESS_INFO } from '../data/cabins';
import { ResilientImage } from './ResilientImage';

interface CtaBannerProps {
  onGetQuote: () => void;
}

export function CtaBanner({ onGetQuote }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#05294F] text-white">
      {/* Subtle Industrial Photograph Backdrop */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <ResilientImage
          src={ABOUT_IMAGE}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05294F] via-[#073568]/95 to-[#05294F]/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="w-10 h-1 bg-[#FFB900] rounded-full mb-4" />
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight [text-wrap:balance]">
              Need a Reliable Portable Cabin Solution?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
              Get in touch with our team for customized portable cabins and
              container solutions built for rapid deployment across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0">
            <a
              href="#contact"
              onClick={onGetQuote}
              className="inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold px-7 py-3.5 rounded-lg text-base shadow-sm transition-colors whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={BUSINESS_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-7 py-3.5 rounded-lg text-base transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4 text-[#FFB900]" aria-hidden="true" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
