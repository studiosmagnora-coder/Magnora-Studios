import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/cabins';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  onOpenAboutModal: () => void;
}

const HIGHLIGHTS = [
  'Premium Quality',
  'On-Time Delivery',
  'Customized Solutions',
  'PAN India Service',
];

export function AboutSection({ onOpenAboutModal }: AboutSectionProps) {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Double-Storey Modular Container Photo */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-xl overflow-hidden shadow-md border border-[#073568]/10 bg-[#EDF4FC] min-h-[280px] sm:min-h-[360px]">
              <ResilientImage
                src={ABOUT_IMAGE}
                alt="Double-storey dark navy modular shipping container office building with external steel staircase"
                fallbackTitle="Double-Storey Modular Building Project"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#05294F]/45 via-transparent to-transparent pointer-events-none"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-lg shadow-sm border border-slate-200">
                <p className="font-display text-xs font-bold uppercase tracking-wider text-[#073568]">
                  ISO-Grade Structural Steel
                </p>
                <p className="text-sm font-semibold text-[#05294F]">
                  Single &amp; Double-Storey Modular Complexes
                </p>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-8 h-1 bg-[#FFB900] rounded-full" />
              <span className="inline-block w-4 h-1 bg-[#073568]/30 rounded-full" />
            </div>

            <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-[#073568]">
              About Us
            </p>

            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-[#05294F] tracking-tight leading-tight [text-wrap:balance]">
              Your Trusted Partner in Portable Building Solutions
            </h2>

            <p className="mt-4 text-base text-[#172B45]/85 leading-relaxed">
              We specialize in manufacturing and supplying high-quality portable
              cabins and containers for diverse commercial, residential and
              industrial requirements. Our solutions combine durability,
              functionality and modern design to deliver reliable spaces for
              businesses across India.
            </p>

            <p className="mt-3 text-sm text-[#172B45]/75 leading-relaxed">
              Fabricated at our Gundlapochampally, Hyderabad manufacturing yard,
              every unit undergoes structural weld checks, weather-seal testing,
              and complete electrical inspection before dispatch.
            </p>

            {/* 4 Highlight Points */}
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-[#05294F]"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-[#FFB900] fill-[#FFB900]/15 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenAboutModal}
                className="inline-flex items-center justify-center gap-2 bg-[#073568] hover:bg-[#05294F] text-white font-semibold px-7 py-3.5 rounded-lg text-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Know More</span>
                <ArrowRight className="w-4 h-4 text-[#FFB900]" aria-hidden="true" />
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center text-sm font-bold text-[#073568] hover:text-[#05294F] underline underline-offset-4 px-2 py-2"
              >
                Schedule a Factory Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
