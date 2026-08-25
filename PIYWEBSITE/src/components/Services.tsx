import React from 'react';
import { 
  Wifi, 
  PhoneCall, 
  Video, 
  Network, 
  Server, 
  Cable, 
  KeyRound, 
  Check, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

const Services: React.FC = () => {
  // All 7 User-Requested Specialized Solutions
  const allServices = [
    {
      id: 'wireless',
      title: 'WIRELESS',
      category: 'High-Speed Wireless',
      description: 'Next-gen enterprise wireless solutions engineered for seamless high-density roaming, high throughput, and zero dead-zones.',
      icon: Wifi,
      features: [
        'Wi-Fi 6, 6E & Wi-Fi 7 Enterprise APs',
        'Point-to-Point (P2P) & Multipoint Links',
        'Centralized Cloud Controller Roaming',
        'RF Heatmap Site Surveys & Spectrum Audits',
      ],
    },
    {
      id: 'voip-solutions',
      title: 'VoIP Solutions',
      category: 'Unified Communications',
      description: 'Advanced IP telephony, IP PBX telephone systems, SIP trunking, and unified corporate communications for business agility.',
      icon: PhoneCall,
      features: [
        'Enterprise IP-PBX & Cloud PBX Setup',
        'SIP Trunking & Multi-Location Intercom',
        'Executive Desktop IP Phones & Headsets',
        'Interactive Voice Response (IVR) & CRM Link',
      ],
    },
    {
      id: 'video-conferencing',
      title: 'Video Conferencing Solutions',
      category: 'Smart Collaboration',
      description: 'Turnkey boardrooms, huddle rooms, and auditorium video collaboration systems with crystal-clear 4K visual and audio fidelity.',
      icon: Video,
      features: [
        'Microsoft Teams Rooms & Zoom Rooms',
        '4K PTZ Optical Cameras & Smart Audio Bars',
        'Interactive Touch Displays & Digital Whiteboards',
        'Acoustic Echo Cancellation & Mic Pod Arrays',
      ],
    },
    {
      id: 'network-solutions',
      title: 'Network Solutions',
      category: 'Active Networking',
      description: 'Resilient network architectures, high-performance routing, multi-gigabit switching, next-generation firewalls, and SD-WAN.',
      icon: Network,
      features: [
        'Core, Distribution & Managed Edge Switches',
        'Next-Gen Firewalls (Fortinet / Cisco / Sophos)',
        'Enterprise SD-WAN & Secure Mesh VPNs',
        'Bandwidth Optimization & 24/7 Traffic QoS',
      ],
    },
    {
      id: 'it-passive-solutions',
      title: 'IT Passive Solutions',
      category: 'Infrastructure Backbone',
      description: 'Rugged server racks, containment enclosures, intelligent power management, and datacenter containment frameworks.',
      icon: Server,
      features: [
        'Server Racks, Floor & Wall Mount Cabinets',
        'Online UPS Systems & Redundant Power PDU',
        'Cable Trays, Raceway & Ladder Management',
        'Environmental & Temperature Telemetry',
      ],
    },
    {
      id: 'structured-cabling',
      title: 'Structured Cabling Solutions',
      category: 'Certified Physical Media',
      description: 'Standardized Cat6/Cat6A/Cat7 copper network cabling and optical fiber transmission backbones built for maximum longevity.',
      icon: Cable,
      features: [
        'Cat6, Cat6A & Cat7 Shielded Twisted Pair',
        'Single-Mode & Multi-Mode Optical Fiber Splicing',
        'High-Density Patch Panels & Keystone Jacking',
        'Fluke Networks & OTDR Testing Certification',
      ],
    },
    {
      id: 'softwares-licensing',
      title: 'Softwares & Licensing',
      category: 'Enterprise Compliance',
      description: 'Authorized enterprise software licenses, volume licensing agreements, operating systems, antivirus, and cloud SaaS.',
      icon: KeyRound,
      features: [
        'Microsoft 365, Office & Windows Server CALs',
        'Endpoint Antivirus & EDR Threat Protection',
        'Cloud Backup & Disaster Recovery Licenses',
        'License Audits, Renewals & True-Up Governance',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT WE OFFER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] tracking-tight font-['Plus_Jakarta_Sans']">
            Our Core <span className="text-[#0066FF]">Solutions</span>
          </h2>
          <div className="w-16 h-1 bg-[#0066FF] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            End-to-end active & passive IT infrastructure, wireless, VoIP, video collaboration, structured cabling, and genuine software licensing engineered for enterprises.
          </p>
        </div>

        {/* Services Grid (All 7 Solution Categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-white p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Solid Blue Circle Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#0066FF] text-white flex items-center justify-center mb-5 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="mb-2">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-50 text-[#0066FF]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A1931] mb-2 group-hover:text-[#0066FF] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-bold text-[#0066FF] group-hover:text-[#0052CC] transition-colors pt-2"
                >
                  <span>Request Solution Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}

          {/* 8th Card: Overall IT Infrastructure & Consultancy */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0A1931] to-[#051124] text-white p-7 shadow-xl flex flex-col justify-between border border-blue-900">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#0066FF] text-white flex items-center justify-center mb-5 shadow-md shadow-blue-500/30">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <div className="mb-2">
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-blue-500/20 text-[#38BDF8]">
                  Full-Lifecycle IT
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                IT Infrastructure & Consultancy
              </h3>

              <p className="text-xs text-slate-300 leading-relaxed mb-5 font-normal">
                Complete hardware procurement, dedicated IT engineer staffing, preventive maintenance, and strategic infrastructure advisory.
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-700/80 mb-6 text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Turnkey Data Center Builds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Dedicated On-Site IT Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>24/7 SLA & Preventive Maintenance</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full py-2.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs text-center transition-colors shadow-md"
            >
              Get Custom Consultation
            </a>
          </div>

        </div>

        {/* Custom Quote CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-[#0A1931] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans']">
              Planning a new office network or video conferencing setup?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our team in Udaipur conducts site surveys and provides comprehensive active & passive network layout blueprints.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25"
          >
            Get Free Site Survey
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
