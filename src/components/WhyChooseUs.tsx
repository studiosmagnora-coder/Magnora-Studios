import {
  Award,
  Clock,
  Cog,
  Handshake,
  MapPinned,
  ArrowRight,
} from 'lucide-react';

interface WhyChooseUsProps {
  onQuoteClick: () => void;
}

const REASONS = [
  {
    icon: Award,
    title: 'Premium Quality',
    detail: 'Heavy-gauge MS frames & weatherproof insulation',
  },
  {
    icon: Clock,
    title: 'Fast & Reliable Delivery',
    detail: 'Streamlined fabrication & crane-assisted dispatch',
  },
  {
    icon: Cog,
    title: 'Expert Craftsmanship',
    detail: 'Precision welding, clean interior paneling & ISI wiring',
  },
  {
    icon: Handshake,
    title: 'Custom Solutions',
    detail: 'Tailored dimensions, layouts & branding finishes',
  },
  {
    icon: MapPinned,
    title: 'Serving PAN India',
    detail: 'Hyderabad manufacturing base supplying nationwide',
  },
];

export function WhyChooseUs({ onQuoteClick }: WhyChooseUsProps) {
  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-[#EDF4FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-8 h-1 bg-[#FFB900] rounded-full" />
              <span className="inline-block w-4 h-1 bg-[#073568] rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#05294F] tracking-tight">
              Why Choose Us?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#172B45]/80 max-w-md">
            Built for long-term industrial reliability, rapid site deployment,
            and clean corporate aesthetics.
          </p>
        </div>

        {/* 5 Features + Prominent Dark-Blue CTA Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 items-stretch">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-5 border border-[#073568]/10 shadow-xs flex flex-col items-start justify-between hover:border-[#073568]/30 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#EDF4FC] flex items-center justify-center mb-4 relative">
                    <Icon
                      className="w-6 h-6 text-[#073568]"
                      aria-hidden="true"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-[#FFB900] border-2 border-white"
                    />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#05294F] leading-snug">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#172B45]/75 leading-relaxed">
                    {reason.detail}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Prominent Dark-Blue CTA Card */}
          <a
            href="#contact"
            onClick={onQuoteClick}
            className="group bg-[#05294F] hover:bg-[#073568] text-white rounded-xl p-6 flex flex-col justify-between shadow-md transition-colors sm:col-span-2 lg:col-span-1"
          >
            <div>
              <span className="inline-block w-8 h-1 bg-[#FFB900] rounded-full mb-3" />
              <h3 className="font-display text-lg font-bold leading-snug [text-wrap:balance]">
                Contact Us for Quotes &amp; Queries
              </h3>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-200">
                Get Estimate
              </span>
              <span className="w-10 h-10 rounded-full bg-[#FFB900] text-[#05294F] flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
