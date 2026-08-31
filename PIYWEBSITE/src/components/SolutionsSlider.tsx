import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Network,
  Wifi,
  Server,
  Cable,
  Boxes,
  Home,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  ArrowRight,
  Pause,
  Play,
  ShieldCheck,
  Activity,
  Sliders
} from 'lucide-react';

interface SlideItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  fallbackGradient: string;
  icon: React.ComponentType<{ className?: string }>;
  keySpecs: { label: string; value: string }[];
  highlights: string[];
  badgeColor: string;
  accentGlow: string;
}

const slidesData: SlideItem[] = [
  {
    id: 'networking',
    category: 'Active Networking',
    title: 'Enterprise Networking',
    tagline: 'High-Throughput Core Switching, Routing & Secure Firewalls',
    description:
      'Robust enterprise backbone switching, multi-gigabit routing, Next-Generation Firewalls (NGFW), and software-defined WAN (SD-WAN) engineered for zero packet drop and seamless inter-branch connectivity.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    fallbackGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    icon: Network,
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
    accentGlow: 'bg-blue-500/20',
    keySpecs: [
      { label: 'Switching Speed', value: '10G / 40G / 100G' },
      { label: 'Security Level', value: 'Next-Gen Firewall' },
      { label: 'Topology', value: 'Spine-Leaf & Mesh' },
      { label: 'Uptime SLA', value: '99.999% Redundant' },
    ],
    highlights: [
      'Layer 2 & Layer 3 Managed Enterprise Switches',
      'Unified Threat Management (UTM) & IPS/IDS Filtering',
      'Automated Traffic Prioritization (QoS) & Zero Jitter',
      'High-Speed SFP+ Fiber Optic Transceiver Uplinks',
    ],
  },
  {
    id: 'wireless',
    category: 'Enterprise Wireless',
    title: 'High-Density Wireless',
    tagline: 'Next-Gen Wi-Fi 6 / 7 Access Points & Seamless Mesh Roaming',
    description:
      'Carrier-grade enterprise Wi-Fi systems with centralized controller orchestration, zero-deadzone RF coverage, high-density client capacity, and long-range Point-to-Point (P2P) wireless bridges.',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1600&q=80',
    fallbackGradient: 'from-cyan-900 via-sky-950 to-slate-950',
    icon: Wifi,
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
    accentGlow: 'bg-cyan-500/20',
    keySpecs: [
      { label: 'Wi-Fi Standard', value: 'Wi-Fi 6 / 6E / 7' },
      { label: 'Max Throughput', value: 'Up to 9.6 Gbps' },
      { label: 'Roaming Protocol', value: '802.11k/v/r Fast Roam' },
      { label: 'Outdoor Range', value: 'Up to 15+ Km P2P' },
    ],
    highlights: [
      'Cloud & On-Premise Centralized Controller Roaming',
      'RF Spectrum Heatmapping & Predictive Site Surveys',
      'Multi-SSID Guest Portals with Bandwidth Throttling',
      'Outdoor Weatherproof IP67 Point-to-Point Links',
    ],
  },
  {
    id: 'server',
    category: 'Compute & Storage',
    title: 'Enterprise Server Solutions',
    tagline: 'High-Availability Rack Servers, Blade Clusters & SAN Storage',
    description:
      'Mission-critical enterprise compute infrastructure featuring high-density rackmount servers, dual Intel Xeon/AMD EPYC processors, NVMe RAID storage arrays, and enterprise virtualization platforms.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
    fallbackGradient: 'from-blue-950 via-slate-900 to-black',
    icon: Server,
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/30',
    accentGlow: 'bg-indigo-500/20',
    keySpecs: [
      { label: 'Compute Power', value: 'Dual Xeon / AMD EPYC' },
      { label: 'Storage Array', value: 'NVMe All-Flash RAID' },
      { label: 'Virtualization', value: 'VMware ESXi / Hyper-V' },
      { label: 'Power Redundancy', value: 'Hot-Swap 1+1 PSU' },
    ],
    highlights: [
      '1U, 2U & 4U Enterprise Rackmount & Blade Servers',
      'Automated Hardware Monitoring & Remote iDRAC / iLO',
      'High-Speed SAN & NAS Storage Architecture',
      'Disaster Recovery (DR) & Snapshot Replication',
    ],
  },
  {
    id: 'structured-cabling',
    category: 'Physical Media',
    title: 'Structured Cabling Systems',
    tagline: 'Fluke-Certified Cat6/Cat6A Copper & Single/Multimode Optical Fiber',
    description:
      'Industrial-grade copper and fiber-optic structured cabling networks installed with precision cable management, standardized labeling, low attenuation, and certified 25-year manufacturer performance.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    fallbackGradient: 'from-amber-950 via-slate-900 to-black',
    icon: Cable,
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
    accentGlow: 'bg-amber-500/20',
    keySpecs: [
      { label: 'Copper Rating', value: 'Cat6 / Cat6A / Cat7' },
      { label: 'Fiber Backbone', value: 'OM3/OM4 & OS2 Single' },
      { label: 'Testing Standard', value: 'Fluke DSX-8000 Level VI' },
      { label: 'Warranty Scope', value: '25-Year Performance' },
    ],
    highlights: [
      'Clean Cable Dressing, Combs & High-Density Patch Bays',
      'Precision Optical Fiber Fusion Splicing & OTDR Testing',
      'Shielded (STP/FTP) Cable Protection Against EMI/RFI',
      'Detailed CAD Patch Port Schematics & Port Mapping',
    ],
  },
  {
    id: 'network-racks',
    category: 'Datacenter Containment',
    title: 'Network & Server Racks',
    tagline: 'Heavy-Duty 42U/24U Server Enclosures, Smart PDUs & Cable Raceways',
    description:
      'Precision-engineered server racks, floor standing enclosures, and wall-mount data cabinets designed with optimized airflow perforated doors, intelligent power distribution units (PDU), and thermal management.',
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1600&q=80',
    fallbackGradient: 'from-slate-900 via-blue-950 to-black',
    icon: Boxes,
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
    accentGlow: 'bg-emerald-500/20',
    keySpecs: [
      { label: 'Form Factors', value: '4U, 9U, 24U, 42U, 48U' },
      { label: 'Door Options', value: 'Perforated Hex / Toughened Glass' },
      { label: 'Power Specs', value: 'Switched Metered Smart PDU' },
      { label: 'Weight Rating', value: 'Up to 1500 KG Dynamic Load' },
    ],
    highlights: [
      'Heavy-Gauge Cold Rolled Steel Chassis with Powder Finish',
      'Vertical & Horizontal Brush Cable Organizer Trays',
      'Thermal Thermostat Fan Modules & Airflow Deflectors',
      'Keyed & Biometric Access Locks for Physical Security',
    ],
  },
  {
    id: 'smart-home',
    category: 'IoT & Automation',
    title: 'Smart Home Solutions',
    tagline: 'Automated Lighting, Climate, Touch Wall Hubs & Smart Surveillance',
    description:
      'Intelligent smart home and office automation ecosystems integrating smart capacitive touch switches, automated architectural lighting, motorized drapery, multi-zone HVAC, video intercoms, and IoT security.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80',
    fallbackGradient: 'from-purple-950 via-slate-900 to-black',
    icon: Home,
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
    accentGlow: 'bg-purple-500/20',
    keySpecs: [
      { label: 'Protocols', value: 'Zigbee 3.0 / Matter / KNX' },
      { label: 'Control Hub', value: 'Touchscreen Wall Panels & Voice' },
      { label: 'Lighting Modes', value: 'RGBW CCT Dimming & Scenes' },
      { label: 'Security Link', value: 'Smart Locks & Video Intercom' },
    ],
    highlights: [
      'Centralized In-Wall Touch Panels & Smartphone App Control',
      'Automated Scheduled Scenes (Good Morning, Cinema, Away)',
      'Smart Climate (AC / HVAC) Temperature Automation',
      'Integrated Biometric Door Access & IP Video Doorbells',
    ],
  },
];

const SolutionsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  const timerRef = useRef<number | null>(null);
  const SLIDE_DURATION = 5000; // 5 seconds per slide

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slidesData.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  }, []);

  const handleSelect = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPlaying && !isLightboxOpen) {
      timerRef.current = window.setInterval(() => {
        handleNext();
      }, SLIDE_DURATION);
    }
    return () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }
    };
  }, [isPlaying, isLightboxOpen, currentIndex, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isLightboxOpen]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentSlide = slidesData[currentIndex];
  const CurrentIcon = currentSlide.icon;

  return (
    <section
      id="solutions-gallery"
      className="py-20 lg:py-28 bg-[#0A1931] text-white relative overflow-hidden selection:bg-[#0066FF] selection:text-white"
      aria-label="Infrastructure Solutions Showcase"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Dynamic Background Ambient Tech Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      
      {/* Grid Pattern Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-cyan-300 border border-blue-400/20 shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>INTERACTIVE SOLUTIONS SHOWCASE</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Infrastructure & <span className="text-[#38BDF8]">Smart Systems</span>
          </h2>
          
          <div className="w-20 h-1 bg-[#0066FF] mx-auto mt-4 rounded-full" />
          
          <p className="text-slate-300 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
            Explore our end-to-end active, passive, compute, and smart automation capabilities tailored for modern enterprises, data centers, and residences.
          </p>
        </div>

        {/* 6 Category Quick Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {slidesData.map((slide, idx) => {
            const TabIcon = slide.icon;
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => handleSelect(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#0066FF] text-white border-blue-400 shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-slate-900/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-600'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#38BDF8]'}`} />
                <span>{slide.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Sliding Picture & Details Card */}
        <div
          className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-500"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Progress Bar Indicator */}
          {isPlaying && (
            <div className="w-full h-1 bg-slate-800 absolute top-0 left-0 right-0 z-30">
              <div
                key={currentIndex}
                className="h-full bg-gradient-to-r from-[#0066FF] to-cyan-400 animate-slide-progress"
                style={{
                  animation: `slideProgress ${SLIDE_DURATION}ms linear infinite`,
                }}
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
            
            {/* Left Column: Sliding Picture Canvas with Overlay Badges (7 cols) */}
            <div className="lg:col-span-7 relative group overflow-hidden bg-slate-950 flex items-center justify-center min-h-[320px] lg:min-h-full">
              
              {/* Picture Element with Fallback Gradient */}
              <div className="relative w-full h-full min-h-[320px] lg:min-h-[480px]">
                <img
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  loading="eager"
                  onLoad={() => setImageLoaded((prev) => ({ ...prev, [currentSlide.id]: true }))}
                  className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded[currentSlide.id] ? 'opacity-100' : 'opacity-90'
                  }`}
                />

                {/* Dark Gradient Overlay for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-950/30 lg:to-slate-900" />
                <div className="absolute inset-0 bg-[#0A1931]/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Floating Slide Counter Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-mono font-bold text-slate-200">
                <span className="text-cyan-400">0{currentIndex + 1}</span>
                <span className="text-slate-500">/</span>
                <span>0{slidesData.length}</span>
              </div>

              {/* Lightbox Trigger Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-xl bg-slate-950/80 hover:bg-[#0066FF] text-slate-300 hover:text-white border border-slate-700 hover:border-blue-400 backdrop-blur-md transition-all shadow-lg group-hover:scale-110"
                title="Expand Picture Fullscreen"
                aria-label="Expand image preview"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Overlay Technology Chip on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-20">
                <div className="p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-700/90 max-w-sm flex items-center gap-3 shadow-xl">
                  <div className="p-2.5 rounded-xl bg-[#0066FF] text-white shrink-0">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                      {currentSlide.title}
                    </div>
                    <div className="text-[11px] text-cyan-300 font-medium">
                      Enterprise Specification
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Arrow Controls (Overlaid on Image for easy touch & desktop clicking) */}
              <div className="absolute inset-y-0 left-3 flex items-center z-20">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-slate-950/80 hover:bg-[#0066FF] text-white border border-slate-700 hover:border-blue-400 shadow-xl backdrop-blur-md transition-all hover:scale-110 focus:outline-none"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute inset-y-0 right-3 flex items-center z-20">
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-slate-950/80 hover:bg-[#0066FF] text-white border border-slate-700 hover:border-blue-400 shadow-xl backdrop-blur-md transition-all hover:scale-110 focus:outline-none"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Right Column: Slide Detailed Information & Specifications (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-[#081226]/80">
              
              <div className="space-y-4">
                
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${currentSlide.badgeColor}`}>
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>{currentSlide.category}</span>
                  </span>

                  {/* Auto-play toggle button */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/80 border border-slate-700 transition-colors"
                    title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3 h-3 text-cyan-400" />
                        <span>Auto</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-amber-400" />
                        <span>Paused</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans']">
                    {currentSlide.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#38BDF8] mt-1">
                    {currentSlide.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentSlide.description}
                </p>

                {/* 4 Key Specifications Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  {currentSlide.keySpecs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-colors"
                    >
                      <div className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                        {spec.label}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-white font-['Plus_Jakarta_Sans'] mt-0.5">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Highlights Checklist */}
                <div className="space-y-2 pt-2 border-t border-slate-800/90">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Deliverables & Standards
                  </div>
                  <div className="space-y-1.5">
                    {currentSlide.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Call to Action Buttons */}
              <div className="pt-4 border-t border-slate-800/90 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`#contact`}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl font-bold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 text-xs text-center group"
                >
                  <span>Request Solution Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`https://wa.me/917877358968?text=Hello%20Xtechinfra%20Technologies,%20I%20am%20interested%20in%20your%20${encodeURIComponent(currentSlide.title)}%20solutions.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 rounded-xl font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 text-xs transition-colors"
                >
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Interactive Thumbnail Carousel Strip (All 6 Items previewable at bottom) */}
        <div className="mt-8">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 text-center sm:text-left flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Select Category to Slide</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
              Click thumbnail or use keyboard left/right arrows
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {slidesData.map((item, idx) => {
              const ItemIcon = item.icon;
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(idx)}
                  className={`group relative rounded-2xl p-2.5 text-left transition-all duration-300 border flex flex-col justify-between overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-b from-blue-900/60 to-slate-900 border-[#0066FF] shadow-lg shadow-blue-500/20 ring-2 ring-[#0066FF]/40 -translate-y-1'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-600 hover:bg-slate-800/80'
                  }`}
                >
                  {/* Thumbnail Image Snippet */}
                  <div className="relative h-16 w-full rounded-xl overflow-hidden mb-2 bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 ${isActive ? 'bg-[#0066FF]/20' : 'bg-slate-950/40 group-hover:bg-transparent'} transition-colors`} />
                    <div className="absolute top-1.5 right-1.5">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center ${isActive ? 'bg-[#0066FF] text-white' : 'bg-slate-950/80 text-[#38BDF8]'}`}>
                        <ItemIcon className="w-3 h-3" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Badge */}
                  <div>
                    <div className="text-[9px] font-mono font-bold text-cyan-400 uppercase">
                      0{idx + 1}
                    </div>
                    <div className="text-xs font-bold text-white truncate font-['Plus_Jakarta_Sans']">
                      {item.title}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate">
                      {item.category}
                    </div>
                  </div>

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <div className="w-full h-0.5 bg-[#38BDF8] rounded-full mt-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Fast Summary Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/60 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/20 border border-blue-500/30 text-cyan-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Looking for a combined Active + Passive + Smart Home Package?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                We design turnkey solutions including networking, wireless APs, server racks, cabling, and smart automation for complete offices & homes.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs transition-all shadow-md shadow-blue-500/25 hover:scale-105"
          >
            Request Full Solution Blueprint
          </a>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-slate-900 text-white hover:bg-rose-600 transition-colors z-50 border border-slate-700"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Image */}
            <div className="relative h-[55vh] w-full bg-black">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="w-full h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700 text-white">
                <span className="text-xs font-bold text-cyan-400 uppercase font-mono">
                  {currentSlide.category}
                </span>
                <h3 className="text-lg font-bold">{currentSlide.title}</h3>
              </div>
            </div>

            {/* Modal Technical Breakdown */}
            <div className="p-6 overflow-y-auto space-y-4 bg-slate-900">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {currentSlide.keySpecs.map((spec, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-[10px] uppercase font-mono text-slate-400">{spec.label}</div>
                    <div className="text-xs sm:text-sm font-bold text-cyan-300">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-800">
                <p className="text-xs text-slate-300 max-w-xl">
                  {currentSlide.description}
                </p>

                <a
                  href="#contact"
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs shrink-0"
                >
                  Contact Our Engineers
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SolutionsSlider;
