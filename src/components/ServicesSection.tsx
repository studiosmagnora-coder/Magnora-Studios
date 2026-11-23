import { ArrowRight, Info } from 'lucide-react';
import { SERVICES, CabinService } from '../data/cabins';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onEnquireService: (serviceTitle: string) => void;
  onInspectService: (service: CabinService) => void;
}

export function ServicesSection({
  onEnquireService,
  onInspectService,
}: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-8 h-1 bg-[#FFB900] rounded-full" />
            <span className="inline-block w-4 h-1 bg-[#073568]/30 rounded-full" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#05294F] tracking-tight">
            Our Services
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-[#172B45]/80">
            Smart, Durable &amp; Versatile Solutions for Every Need.
          </p>
        </div>

        {/* 7 Service Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <article
              key={service.id}
              className="group flex flex-col bg-[#EDF4FC]/60 rounded-xl border border-[#073568]/10 overflow-hidden shadow-xs hover:shadow-md hover:border-[#073568]/25 transition-all duration-200"
            >
              {/* Consistent 4:3 Photo Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DCE9F8]">
                <ResilientImage
                  src={service.image}
                  alt={service.title}
                  fallbackTitle={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5">
                <div className="text-xs font-medium text-[#073568]/70 tabular-nums">
                  {String(idx + 1).padStart(2, '0')} · {service.dimensions}
                </div>

                <h3 className="mt-1.5 font-display text-lg font-bold text-[#05294F] group-hover:text-[#073568] transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-[#172B45]/80 leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="mt-4 pt-3.5 border-t border-[#073568]/10 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => onEnquireService(service.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#073568] hover:text-[#05294F] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight
                      className="w-4 h-4 text-[#FFB900] group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </button>

                  <button
                    type="button"
                    onClick={() => onInspectService(service)}
                    aria-label={`View specifications for ${service.title}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#073568] py-1.5 px-2.5 rounded-md hover:bg-white transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Specs</span>
                  </button>
                </div>
              </div>
            </article>
          ))}

          {/* 8th Grid Slot: Custom Requirement Prompt Card to balance 4-col desktop grid cleanly */}
          <div className="flex flex-col justify-between bg-[#073568] text-white rounded-xl p-6 shadow-xs">
            <div>
              <div className="w-10 h-1 bg-[#FFB900] rounded-full mb-4" />
              <h3 className="font-display text-xl font-bold leading-snug [text-wrap:balance]">
                Need a Custom Floor Plan or Bulk Order?
              </h3>
              <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                Our fabrication team builds double-storey complexes, multi-bay
                site camps, and bespoke commercial containers to exact CAD
                specifications.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/15">
              <button
                type="button"
                onClick={() => onEnquireService('Custom Project / Bulk Order')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold py-3 px-4 rounded-lg text-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
