import { useState, useEffect, FormEvent } from 'react';
import {
  Phone,
  MapPin,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  MessageCircle,
  Navigation,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/cabins';

interface ContactSectionProps {
  selectedService: string;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  location?: string;
}

export function ContactSection({ selectedService }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    service: selectedService || 'Custom-Built Cabins',
    location: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Enter a valid 10-digit phone or WhatsApp number.';
    }
    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!form.location.trim()) {
      nextErrors.location = 'Please specify your delivery city or state.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const refId = `PC-${new Date().getFullYear()}-${String(
      Math.floor(1000 + Math.random() * 9000)
    )}`;
    setSubmittedRef(refId);
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_INFO.address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      setCopiedAddress(false);
    }
  };

  const whatsappPrefillHref = `https://wa.me/918688845784?text=${encodeURIComponent(
    `Hello Portable Cabin, I am ${form.fullName || 'interested'} from ${
      form.location || 'India'
    }. Service required: ${form.service}. ${form.message || ''}`.trim()
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#EDF4FC]/70 border-t border-[#073568]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details & Location Map Card */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-8 h-1 bg-[#FFB900] rounded-full" />
                <span className="inline-block w-4 h-1 bg-[#073568] rounded-full" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#05294F] tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-2.5 text-base text-[#172B45]/80 leading-relaxed">
                Speak directly with our Hyderabad manufacturing team for custom
                dimensions, pricing estimates, and PAN India delivery timelines.
              </p>
            </div>

            {/* Business Contact Card */}
            <div className="bg-white rounded-xl p-6 border border-[#073568]/10 shadow-xs space-y-5">
              <div className="pb-4 border-b border-slate-100">
                <p className="font-display text-lg font-bold text-[#05294F]">
                  {BUSINESS_INFO.name}
                </p>
                <p className="text-sm text-slate-600 mt-0.5">
                  Portable Cabin Manufacturer &amp; Container Supplier
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EDF4FC] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#073568]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Phone &amp; Sales Desk
                    </p>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="font-display text-lg font-bold text-[#05294F] hover:text-[#073568] tabular-nums"
                    >
                      +91 {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#EDF4FC] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#073568]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Manufacturing Plant Address
                    </p>
                    <p className="text-[#172B45] leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EDF4FC] flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4 text-[#073568]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Service Area
                      </p>
                      <p className="font-semibold text-[#05294F]">
                        {BUSINESS_INFO.serviceArea}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EDF4FC] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#073568]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Business Hours
                      </p>
                      <p className="font-semibold text-[#05294F] tabular-nums">
                        {BUSINESS_INFO.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#073568] hover:bg-[#05294F] text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#FFB900]" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-2 bg-[#EDF4FC] hover:bg-[#dceafb] text-[#05294F] font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                      <span>Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" aria-hidden="true" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Facility Location Map Section (Static Architectural Locator + Direct Google Maps Link) */}
            <div className="bg-white rounded-xl overflow-hidden border border-[#073568]/10 shadow-xs">
              <div className="relative h-52 bg-[#dceafb] overflow-hidden">
                {/* Clean SVG Architectural Street & Corridor Schematic for Gundlapochampally, Hyderabad */}
                <svg
                  viewBox="0 0 600 260"
                  className="w-full h-full object-cover"
                  role="img"
                  aria-label="Location map showing Portable Cabin facility on Chermas Road, Gundlapochampally, Hyderabad"
                >
                  <rect width="600" height="260" fill="#E8F1FB" />
                  {/* Subtle land parcels */}
                  <rect x="24" y="20" width="160" height="90" rx="6" fill="#DCE9F8" />
                  <rect x="208" y="20" width="170" height="90" rx="6" fill="#DCE9F8" />
                  <rect x="400" y="20" width="176" height="90" rx="6" fill="#DCE9F8" />
                  <rect x="24" y="138" width="160" height="100" rx="6" fill="#DCE9F8" />
                  <rect x="400" y="138" width="176" height="100" rx="6" fill="#DCE9F8" />

                  {/* NH-44 / Outer Ring Corridor */}
                  <path d="M0 124 H600" stroke="#FFFFFF" strokeWidth="14" />
                  <path d="M0 124 H600" stroke="#CBDDF2" strokeWidth="2" strokeDasharray="8 6" />
                  {/* Chermas Road */}
                  <path d="M196 0 V260" stroke="#FFFFFF" strokeWidth="12" />
                  <path d="M390 0 V260" stroke="#FFFFFF" strokeWidth="9" />

                  {/* Road Labels */}
                  <text x="42" y="128" fill="#073568" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                    Chermas Road · Gundlapochampally
                  </text>
                  <text x="424" y="128" fill="#073568" fontSize="10" fontWeight="600" fontFamily="sans-serif">
                    Medchal / NH-44 Link
                  </text>

                  {/* Location Marker Pin */}
                  <g transform="translate(295, 96)">
                    <circle cx="0" cy="0" r="24" fill="#FFB900" fillOpacity="0.28" />
                    <path
                      d="M0 -24 C-10 -24 -17 -16 -17 -7 C-17 6 0 22 0 22 C0 22 17 6 17 -7 C17 -16 10 -24 0 -24 Z"
                      fill="#073568"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                    <circle cx="0" cy="-7" r="5.5" fill="#FFB900" />
                  </g>
                </svg>

                <div className="absolute top-3 left-3 bg-[#05294F]/90 text-white px-3 py-1.5 rounded-md text-xs font-medium">
                  Gundlapochampally Industrial Zone · Hyderabad 500100
                </div>
              </div>

              <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
                <div>
                  <p className="font-display text-sm font-bold text-[#05294F]">
                    Survey No-386, Chermas Road
                  </p>
                  <p className="text-xs text-slate-600 tabular-nums">
                    Gundlapochampally, Hyderabad · 17.5682° N, 78.4810° E
                  </p>
                </div>
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold px-4 py-2 rounded-lg text-xs transition-colors whitespace-nowrap shrink-0"
                >
                  <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-[#073568]/10 shadow-sm">
              <div className="pb-5 mb-6 border-b border-slate-100">
                <h3 className="font-display text-2xl font-bold text-[#05294F]">
                  Request a Custom Quote
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Share your cabin specifications and delivery location. Our
                  engineering desk responds within one business day.
                </p>
              </div>

              {submittedRef ? (
                <div className="py-8 px-4 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-[#05294F]">
                    Enquiry Received
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#05294F]">{form.fullName}</strong>. Your
                    enquiry for <strong className="text-[#05294F]">{form.service}</strong> in{' '}
                    <strong className="text-[#05294F]">{form.location}</strong> has been logged
                    under reference <span className="font-semibold tabular-nums text-[#073568]">{submittedRef}</span>.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappPrefillHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Send Details via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedRef(null);
                        setForm({
                          fullName: '',
                          phone: '',
                          email: '',
                          service: selectedService || 'Custom-Built Cabins',
                          location: '',
                          message: '',
                        });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-[#EDF4FC] hover:bg-[#dceafb] text-[#05294F] font-semibold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="enquiry-name"
                        className="block text-sm font-semibold text-[#05294F] mb-1.5"
                      >
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={(e) => {
                          setForm({ ...form, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Rajesh Kulkarni"
                        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#172B45] bg-white focus:outline-none focus:ring-2 focus:ring-[#073568]/25 focus:border-[#073568] transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-phone"
                        className="block text-sm font-semibold text-[#05294F] mb-1.5"
                      >
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => {
                          setForm({ ...form, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. 9876543210"
                        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#172B45] bg-white tabular-nums focus:outline-none focus:ring-2 focus:ring-[#073568]/25 focus:border-[#073568] transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="enquiry-email"
                        className="block text-sm font-semibold text-[#05294F] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="name@company.com"
                        className={`w-full rounded-lg border px-4 py-3 text-sm text-[#172B45] bg-white focus:outline-none focus:ring-2 focus:ring-[#073568]/25 focus:border-[#073568] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs font-medium text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-service"
                        className="block text-sm font-semibold text-[#05294F] mb-1.5"
                      >
                        Service Required
                      </label>
                      <select
                        id="enquiry-service"
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-[#172B45] bg-white focus:outline-none focus:ring-2 focus:ring-[#073568]/25 focus:border-[#073568] transition-colors"
                      >
                        {SERVICES.map((svc) => (
                          <option key={svc.id} value={svc.title}>
                            {svc.title}
                          </option>
                        ))}
                        <option value="Custom Project / Bulk Order">
                          Custom Project / Bulk Order
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-location"
                      className="block text-sm font-semibold text-[#05294F] mb-1.5"
                    >
                      Project Location <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="enquiry-location"
                      type="text"
                      required
                      value={form.location}
                      onChange={(e) => {
                        setForm({ ...form, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: undefined });
                      }}
                      placeholder="City & State (e.g. Hyderabad, Telangana)"
                      className={`w-full rounded-lg border px-4 py-3 text-sm text-[#172B45] bg-white focus:outline-none focus:ring-2 focus:ring-[#073568]/25 focus:border-[#073568] transition-colors ${
                        errors.location ? 'border-red-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.location && (
                      <p className="mt-1 text-xs font-medium text-red-600">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block text-sm font-semibold text-[#05294F] mb-1.5"
                    >
                      Message &amp; Dimensions
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share preferred cabin dimensions (e.g. 20×10 ft), quantity, AC/washroom fit-outs, or delivery timeline..."
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-[#172B45] bg-white focus:outline-none focus:ring-2 focus:ring-[#073568]/25 focus:border-[#073568] transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold py-3.5 px-7 rounded-lg text-base shadow-xs transition-colors cursor-pointer whitespace-nowrap"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Enquiry</span>
                    </button>

                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="inline-flex items-center justify-center gap-2 bg-[#EDF4FC] hover:bg-[#dceafb] text-[#073568] font-bold py-3.5 px-6 rounded-lg text-sm transition-colors whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      <span className="tabular-nums">{BUSINESS_INFO.phone}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
