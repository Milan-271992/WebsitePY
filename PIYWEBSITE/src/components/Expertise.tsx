import React from 'react';
import { 
  Wifi,
  PhoneCall,
  Video,
  Network,
  Server,
  Cable,
  KeyRound,
  ShieldCheck,
  CheckCircle,
  Cpu
} from 'lucide-react';

interface ExpertiseDomain {
  name: string;
  category: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
  tags: string[];
  description: string;
}

const Expertise: React.FC = () => {
  const domains: ExpertiseDomain[] = [
    {
      name: 'WIRELESS & Mobility',
      category: 'Enterprise Wireless',
      level: 98,
      icon: Wifi,
      tags: ['Wi-Fi 6/7 APs', 'P2P Bridges', 'Heatmaps', 'Seamless Roam'],
      description: 'High-density controller roaming, RF spectrum site surveys, outdoor wireless bridges, and campus mesh coverage.',
    },
    {
      name: 'VoIP Solutions',
      category: 'Unified Telephony',
      level: 96,
      icon: PhoneCall,
      tags: ['IP PBX Systems', 'SIP Trunks', 'IP Phones', 'Multi-site Call'],
      description: 'Enterprise IP PBX setup, cloud VoIP trunks, automated attendant IVR, and zero-jitter voice routing over WAN.',
    },
    {
      name: 'Video Conferencing',
      category: 'Smart Meeting Rooms',
      level: 97,
      icon: Video,
      tags: ['Teams Rooms', 'Zoom Rooms', '4K PTZ Cams', 'Interactive AV'],
      description: 'Turnkey boardrooms, acoustic array audio, smart digital whiteboards, and immersive hybrid meeting room integration.',
    },
    {
      name: 'Network Solutions',
      category: 'Active Core Switching',
      level: 99,
      icon: Network,
      tags: ['Cisco / Fortinet', 'Layer 3 Switching', 'SD-WAN', 'Next-Gen Firewall'],
      description: 'Enterprise high-throughput routing, network security hardening, policy-based traffic shaping, and site-to-site VPN meshes.',
    },
    {
      name: 'IT Passive Solutions',
      category: 'Datacenter Racks & Power',
      level: 97,
      icon: Server,
      tags: ['Server Racks', 'Smart PDUs', 'UPS Backup', 'Raceway Trays'],
      description: 'Heavy-duty 42U/24U server rack enclosures, online UPS redundancy, cable management trays, and thermal containment.',
    },
    {
      name: 'Structured Cabling',
      category: 'Copper & Fiber Media',
      level: 99,
      icon: Cable,
      tags: ['Cat6 / Cat6A', 'Optical Fiber', 'OTDR Testing', 'Patch Panels'],
      description: 'Certified Cat6A copper termination, optical fiber splicing, patch bay organization, and Fluke Networks certification.',
    },
    {
      name: 'Softwares & Licensing',
      category: 'Genuine Compliance',
      level: 96,
      icon: KeyRound,
      tags: ['Microsoft 365', 'Server CALs', 'Endpoint EDR', 'Cloud SaaS'],
      description: 'Genuine volume licensing procurement, Windows Server client licenses, enterprise antivirus, and license compliance audits.',
    },
    {
      name: 'IT Infrastructure & DC',
      category: 'Turnkey Foundation',
      level: 98,
      icon: ShieldCheck,
      tags: ['Blade Servers', 'SAN Storage', 'VMware / Hyper-V', '24/7 SLA'],
      description: 'End-to-end hyper-converged hardware installation, multi-tier storage arrays, virtualization clusters, and managed IT services.',
    },
  ];

  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] tracking-tight font-['Plus_Jakarta_Sans']">
            Our <span className="text-[#0066FF]">Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-[#0066FF] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-normal">
            Proven competencies across full-stack IT infrastructure, advanced networking, resource management, and enterprise advisory.
          </p>
        </div>

        {/* 8 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-[#0066FF] border border-blue-100 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-[#0A1931] mb-1.5 group-hover:text-[#0066FF] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar & Proficiency Indicator */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center text-xs mb-1.5 font-medium">
                    <span className="text-slate-500 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0066FF]" />
                      Proficiency SLA
                    </span>
                    <span className="font-mono font-bold text-[#0066FF]">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#0066FF] h-1.5 rounded-full"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Technology Stack Badges */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
            Technologies, Frameworks & Vendor Standards We Support
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-700 font-semibold">
            {['Cisco', 'Fortinet', 'Dell Technologies', 'HP Enterprise', 'VMware', 'Microsoft Hyper-V', 'Windows Server 2025', 'Microsoft 365', 'Ubuntu Server', 'Red Hat Linux', 'MikroTik', 'Synology NAS', 'Veeam Backup', 'Ubiquiti UniFi'].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-[#0066FF] hover:text-[#0066FF] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;
