export interface CabinService {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  specs: string;
  dimensions: string;
  leadTime: string;
  image: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Offices' | 'Commercial & Living' | 'Security & Site';
  location: string;
  dimensions: string;
  image: string;
}

export const BUSINESS_INFO = {
  name: 'Portable Cabin',
  wordmark: 'PortableCabin',
  tagline: 'Build. Move. Work.',
  phone: '8688845784',
  phoneHref: 'tel:+918688845784',
  whatsappHref: 'https://wa.me/918688845784?text=Hello%20Portable%20Cabin%2C%20I%20would%20like%20to%20request%20a%20quote.',
  email: 'sales@portablecabin.in',
  address:
    'Survey No-386, Chermas Road, Gundlapochampally, Hyderabad, Telangana 500100, India.',
  shortAddress:
    'Survey No-386, Chermas Road, Gundlapochampally, Hyderabad, Telangana 500100, India',
  serviceArea: 'PAN India',
  hours: 'Mon – Sat · 9:00 AM – 7:00 PM',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Survey+No-386+Chermas+Road+Gundlapochampally+Hyderabad+Telangana+500100+India',
};

export const HERO_IMAGE = '/src/assets/images/hero_portable_office_1795413832722.jpg';
export const ABOUT_IMAGE = '/src/assets/images/about_double_storey_1795413834193.jpg';

export const SERVICES: CabinService[] = [
  {
    id: 'custom-built-cabins',
    title: 'Custom-Built Cabins',
    shortTitle: 'Custom-Built Cabins',
    description:
      'Tailor-made modular cabins engineered to your exact floor plan, insulation grade, and exterior finish.',
    specs: 'MS Structural Frame · PUF / Rockwool Insulated',
    dimensions: '10×10 ft to 40×12 ft',
    leadTime: '10–14 Days Dispatch',
    image: '/src/assets/images/service_custom_cabin_1795413833383.jpg',
    highlights: [
      'Custom partition layouts, conference rooms & executive suites',
      'UPVC or aluminium sliding windows with toughened glass',
      'Concealed ISI wiring, LED lighting & split-AC provision',
      'Heavy-duty marine ply & vinyl anti-skid flooring',
    ],
  },
  {
    id: 'container-offices',
    title: 'Container Offices',
    shortTitle: 'Container Offices',
    description:
      'ISO-grade corrugated steel shipping containers transformed into weatherproof mobile offices.',
    specs: 'Corten Steel Body · Epoxy Weather Coating',
    dimensions: '20 ft & 40 ft Standard ISO',
    leadTime: '7–10 Days Dispatch',
    image: '/src/assets/images/service_container_office_1795413834470.jpg',
    highlights: [
      'Crane-liftable corner castings for effortless relocation',
      'Thermal and acoustic wall insulation for Indian summers',
      'Anti-corrosive primer with industrial PU topcoat',
      'Lockable steel entry doors & heavy-duty security grilles',
    ],
  },
  {
    id: 'site-offices',
    title: 'Site Offices',
    shortTitle: 'Site Offices',
    description:
      'Rugged, ready-to-deploy project command offices built for infrastructure, highway, and industrial sites.',
    specs: 'Heavy Chassis · Multi-Workstation Ready',
    dimensions: '20×10 ft / 40×10 ft',
    leadTime: '7–12 Days Dispatch',
    image: '/src/assets/images/service_site_office_1795413833224.jpg',
    highlights: [
      'Built for harsh construction environments & dust resistance',
      'Integrated workstations, drawing tables & storage cabinets',
      'External steel staircase & stackable double-storey options',
      'Plug-and-play electrical distribution board',
    ],
  },
  {
    id: 'security-cabins',
    title: 'Security Cabins',
    shortTitle: 'Security Cabins',
    description:
      '360-degree visibility guard booths and gatehouses designed for factories, gated townships, and corporate campuses.',
    specs: '3-Side Observation Glass · Weatherproof Roof',
    dimensions: '4×4 ft to 8×6 ft',
    leadTime: '3–5 Days Dispatch',
    image: '/src/assets/images/service_security_cabin_1795413834101.jpg',
    highlights: [
      'Wide panoramic sliding windows for unobstructed gate monitoring',
      'Built-in writing desk, CCTV conduit & exterior floodlight mount',
      'Compact forklift-friendly base skid for instant placement',
      'Low-maintenance ACP or powder-coated GI sheet exterior',
    ],
  },
  {
    id: 'home-cabins',
    title: 'Home Cabins',
    shortTitle: 'Home Cabins',
    description:
      'Warm, insulated portable living units and farmhouse retreats crafted with residential comfort and modern finishes.',
    specs: 'Timber / ACP Cladding · Attached Bath & Pantry',
    dimensions: '20×10 ft to 40×12 ft',
    leadTime: '14–21 Days Dispatch',
    image: '/src/assets/images/service_home_cabin_1795413833934.jpg',
    highlights: [
      'Double-wall thermal insulation with false ceiling & warm LEDs',
      'Complete plumbing for attached bathroom and modular kitchenette',
      'Vitrified tile or wooden laminate flooring finishes',
      'Optional shaded porch deck & pitched architectural roof',
    ],
  },
  {
    id: 'portable-toilets',
    title: 'Portable Toilets',
    shortTitle: 'Portable Toilets',
    description:
      'Hygienic single, twin, and multi-bay modular sanitation blocks with easy-clean interiors and heavy steel bases.',
    specs: 'FRP / PUF Sanitary Panels · Overhead Water Tank',
    dimensions: '4×4 ft Single · 8×4 ft Twin',
    leadTime: '3–6 Days Dispatch',
    image: '/src/assets/images/service_portable_toilet_1795413833265.jpg',
    highlights: [
      'Anti-slip chequered or FRP waterproof flooring',
      'Western or Indian WC options with stainless steel hardware',
      'Exhaust fan, cross-ventilation louvers & concealed plumbing',
      'Integrated sludge tank or direct sewer line connection',
    ],
  },
  {
    id: 'cafe-cabins',
    title: 'Café Cabins',
    shortTitle: 'Café Cabins',
    description:
      'Eye-catching commercial food kiosks and container cafés with hydraulic serving hatches and prep counters.',
    specs: 'Hydraulic Serving Hatch · SS Kitchen Grade',
    dimensions: '10×8 ft & 20×8 ft',
    leadTime: '12–16 Days Dispatch',
    image: '/src/assets/images/service_cafe_cabin_1795413833274.jpg',
    highlights: [
      'Gas-strut fold-up serving counter with weather canopy',
      'Stainless steel 304 prep counters, sink & drainage lines',
      'Dedicated power sockets for espresso machines & chillers',
      'Custom fascia signage frame & exterior cedar/matte finish',
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-office',
    title: 'Portable Office Cabins',
    category: 'Offices',
    location: 'Jeedimetla Industrial Estate, Hyderabad',
    dimensions: '30 × 12 ft Executive Suite',
    image: '/src/assets/images/hero_portable_office_1795413832722.jpg',
  },
  {
    id: 'gal-container',
    title: 'Shipping Container Offices',
    category: 'Offices',
    location: 'Visakhapatnam Logistics Park, AP',
    dimensions: '20 ft ISO Corrugated Unit',
    image: '/src/assets/images/service_container_office_1795413834470.jpg',
  },
  {
    id: 'gal-site',
    title: 'Construction Site Offices',
    category: 'Security & Site',
    location: 'Outer Ring Road Corridor, Telangana',
    dimensions: '20 × 10 ft Site Command',
    image: '/src/assets/images/service_site_office_1795413833224.jpg',
  },
  {
    id: 'gal-security',
    title: 'Security Cabins',
    category: 'Security & Site',
    location: 'Genome Valley Tech Campus, Hyderabad',
    dimensions: '6 × 6 ft Guard Booth',
    image: '/src/assets/images/service_security_cabin_1795413834101.jpg',
  },
  {
    id: 'gal-home',
    title: 'Wooden Home Cabins',
    category: 'Commercial & Living',
    location: 'Coorg & Lonavala Farmhouse Projects',
    dimensions: '32 × 12 ft Insulated Cabin',
    image: '/src/assets/images/service_home_cabin_1795413833934.jpg',
  },
  {
    id: 'gal-cafe',
    title: 'Portable Café Cabins',
    category: 'Commercial & Living',
    location: 'Hitech City Plaza, Hyderabad',
    dimensions: '15 × 8 ft Retail Kiosk',
    image: '/src/assets/images/service_cafe_cabin_1795413833274.jpg',
  },
];
