import { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Factory,
  Layers,
  Zap,
} from 'lucide-react';
import { CabinService, GalleryItem, GALLERY_ITEMS } from '../data/cabins';
import { ResilientImage } from './ResilientImage';

interface ServiceModalProps {
  service: CabinService | null;
  onClose: () => void;
  onEnquire: (serviceTitle: string) => void;
}

export function ServiceSpecModal({
  service,
  onClose,
  onEnquire,
}: ServiceModalProps) {
  useEffect(() => {
    if (!service) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05294F]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 sm:h-64 bg-[#EDF4FC] shrink-0">
          <ResilientImage
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close specifications modal"
            className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-[#05294F]/85 text-white hover:bg-[#05294F] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4">
          <div className="text-xs font-semibold text-[#073568] tabular-nums">
            {service.dimensions} · {service.leadTime}
          </div>
          <h3
            id="service-modal-title"
            className="font-display text-2xl font-extrabold text-[#05294F]"
          >
            {service.title}
          </h3>
          <p className="text-sm text-[#172B45]/85 leading-relaxed">
            {service.description}
          </p>

          <div className="bg-[#EDF4FC] rounded-lg p-4 space-y-2.5">
            <p className="font-display text-xs font-bold uppercase tracking-wider text-[#073568]">
              Standard Build Highlights
            </p>
            <ul className="space-y-2">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-[#172B45]"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#FFB900] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                onEnquire(service.title);
                onClose();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold py-3 px-5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              <span>Request Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-[#172B45] font-semibold py-3 px-5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutDetailsModal({
  open,
  onClose,
  onQuote,
}: {
  open: boolean;
  onClose: () => void;
  onQuote: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05294F]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-display text-xs font-bold uppercase tracking-widest text-[#073568]">
              Engineering &amp; Manufacturing Standards
            </p>
            <h3
              id="about-modal-title"
              className="font-display text-2xl font-extrabold text-[#05294F] mt-1"
            >
              Inside Portable Cabin Fabrication
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close about modal"
            className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#05294F] flex items-center justify-center cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <p className="text-sm text-[#172B45]/85 leading-relaxed">
          From single security booths to multi-module double-storey corporate
          sites, our Hyderabad fabrication facility builds modular structures
          engineered for Indian climate extremes, crane lifting, and long-term
          relocation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[#EDF4FC] space-y-1.5">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-[#05294F]">
              <Factory className="w-4 h-4 text-[#073568]" aria-hidden="true" />
              <span>Heavy-Gauge Steel Chassis</span>
            </div>
            <p className="text-xs text-[#172B45]/80 leading-relaxed">
              ISMC channel base frames with tubular corner posts, crane hooks,
              and anti-rust zinc-chromate primer.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#EDF4FC] space-y-1.5">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-[#05294F]">
              <Layers className="w-4 h-4 text-[#073568]" aria-hidden="true" />
              <span>Thermal &amp; Acoustic Core</span>
            </div>
            <p className="text-xs text-[#172B45]/80 leading-relaxed">
              50mm high-density Rockwool, Glasswool, or PUF sandwich panels with
              MDF, ACP, or fibre-cement interior lining.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#EDF4FC] space-y-1.5">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-[#05294F]">
              <Zap className="w-4 h-4 text-[#073568]" aria-hidden="true" />
              <span>Turnkey Electrical &amp; HVAC</span>
            </div>
            <p className="text-xs text-[#172B45]/80 leading-relaxed">
              Concealed FR-grade ISI copper wiring, MCB distribution boxes,
              LED battens, and dedicated split-AC points.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-[#EDF4FC] space-y-1.5">
            <div className="flex items-center gap-2 font-display font-bold text-sm text-[#05294F]">
              <ShieldCheck className="w-4 h-4 text-[#073568]" aria-hidden="true" />
              <span>PAN India Logistics</span>
            </div>
            <p className="text-xs text-[#172B45]/80 leading-relaxed">
              Flatbed trailer transport and crane-assisted site placement across
              Telangana, AP, Maharashtra, Karnataka, and all India.
            </p>
          </div>
        </div>

        <div className="pt-2 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-sm font-semibold text-[#172B45] cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onQuote();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] text-sm font-bold cursor-pointer"
          >
            <span>Request Specifications &amp; Quote</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function GalleryLightbox({
  item,
  onClose,
  onSelectItem,
  onRequestSimilar,
}: {
  item: GalleryItem | null;
  onClose: () => void;
  onSelectItem: (next: GalleryItem) => void;
  onRequestSimilar: (title: string) => void;
}) {
  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
      if (e.key === 'ArrowRight') {
        onSelectItem(GALLERY_ITEMS[(idx + 1) % GALLERY_ITEMS.length]);
      }
      if (e.key === 'ArrowLeft') {
        onSelectItem(
          GALLERY_ITEMS[(idx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length]
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose, onSelectItem]);

  if (!item) return null;

  const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
  const prevItem =
    GALLERY_ITEMS[(idx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length];
  const nextItem = GALLERY_ITEMS[(idx + 1) % GALLERY_ITEMS.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05294F]/85 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] bg-[#05294F]">
          <ResilientImage
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery viewer"
            className="absolute top-3 right-3 w-10 h-10 rounded-lg bg-[#05294F]/85 text-white hover:bg-[#05294F] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onSelectItem(prevItem)}
            aria-label="Previous project photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#05294F]/80 text-white hover:bg-[#FFB900] hover:text-[#05294F] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onSelectItem(nextItem)}
            aria-label="Next project photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#05294F]/80 text-white hover:bg-[#FFB900] hover:text-[#05294F] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#073568]">
              {item.category} · {item.dimensions}
            </p>
            <h3 className="font-display text-xl font-bold text-[#05294F] mt-0.5">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600">{item.location}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              onRequestSimilar(item.title);
              onClose();
            }}
            className="inline-flex items-center justify-center gap-2 bg-[#FFB900] hover:bg-[#e5a700] text-[#05294F] font-bold px-5 py-2.5 rounded-lg text-sm whitespace-nowrap cursor-pointer"
          >
            <span>Request Similar Build</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function LegalModal({
  type,
  onClose,
}: {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!type) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05294F]/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h3
            id="legal-modal-title"
            className="font-display text-xl font-bold text-[#05294F]"
          >
            {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal dialog"
            className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#05294F] flex items-center justify-center cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="text-sm text-[#172B45]/85 space-y-3 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                Portable Cabin respects your privacy. Any contact details
                submitted via our quote enquiry form—including your name, phone
                number, email address, and project location—are used strictly to
                prepare fabrication estimates and coordinate delivery.
              </p>
              <p>
                We never sell or distribute customer contact information to
                third-party marketers. For enquiries regarding your submitted
                information, please call 8688845784.
              </p>
            </>
          ) : (
            <>
              <p>
                All portable cabins and modified container units are fabricated
                to mutually approved structural drawings and material
                specifications. Delivery lead times depend on customization scope
                and destination distance across India.
              </p>
              <p>
                Site access clearance and crane unloading arrangements at the
                destination are coordinated prior to dispatch from our
                Gundlapochampally, Hyderabad manufacturing plant.
              </p>
            </>
          )}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg bg-[#073568] text-white text-sm font-semibold hover:bg-[#05294F] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
