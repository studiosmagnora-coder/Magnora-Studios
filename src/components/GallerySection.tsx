import { useState } from 'react';
import { Expand } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/cabins';
import { ResilientImage } from './ResilientImage';

interface GallerySectionProps {
  onSelectPhoto: (item: GalleryItem) => void;
}

const CATEGORIES: Array<'All' | GalleryItem['category']> = [
  'All',
  'Offices',
  'Security & Site',
  'Commercial & Living',
];

export function GallerySection({ onSelectPhoto }: GallerySectionProps) {
  const [filter, setFilter] = useState<'All' | GalleryItem['category']>('All');

  const filteredItems =
    filter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-8 h-1 bg-[#FFB900] rounded-full" />
              <span className="inline-block w-4 h-1 bg-[#073568]/30 rounded-full" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#05294F] tracking-tight">
              Our Work Gallery
            </h2>
            <p className="mt-2 text-base text-[#172B45]/80">
              Explore Our Completed Projects.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter project gallery"
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EDF4FC] rounded-lg border border-[#073568]/10 self-start md:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(category)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-[#073568] text-white shadow-xs'
                      : 'text-[#172B45] hover:bg-white/80 hover:text-[#073568]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectPhoto(item)}
              className="group relative text-left rounded-xl overflow-hidden border border-[#073568]/10 bg-[#EDF4FC] shadow-xs hover:shadow-md transition-shadow cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB900]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ResilientImage
                  src={item.image}
                  alt={`${item.title} — ${item.location}`}
                  fallbackTitle={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Measured dark scrim for high-contrast caption legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05294F]/90 via-[#05294F]/25 to-transparent flex flex-col justify-end p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-[#FFB900]">
                      {item.dimensions}
                    </p>
                    <h3 className="font-display text-lg font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 mt-0.5">
                      {item.location}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="w-9 h-9 rounded-lg bg-white/15 backdrop-blur-xs text-white flex items-center justify-center shrink-0 group-hover:bg-[#FFB900] group-hover:text-[#05294F] transition-colors"
                  >
                    <Expand className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
