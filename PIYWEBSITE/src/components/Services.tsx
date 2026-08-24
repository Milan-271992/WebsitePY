import React from 'react';
import { 
  Server, 
  UserCheck, 
  Wrench, 
  Lightbulb, 
  Network, 
  Check, 
  ArrowRight,
  Layers
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  gradient: string;
  iconColor: string;
  borderColor: string;
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'infrastructure',
      title: 'IT Infrastructure',
      category: 'Enterprise Foundation',
      description: 'End-to-end IT infrastructure solutions including servers, networks, storage, virtualization, and system setup.',
      icon: Server,
      features: [
        'Enterprise Server Deployment & Clustering',
        'SAN / NAS Storage & Backup Architecture',
        'Virtualization (VMware / Hyper-V / Proxmox)',
        'Data Center & Rack Cable Management',
      ],
      gradient: 'from-blue-600/20 to-cyan-500/10',
      iconColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/50',
    },
    {
      id: 'staffing',
      title: 'IT Resource / Staffing',
      category: 'Human Capital',
      description: 'Providing skilled IT professionals on contract, project-based, or permanent requirements.',
      icon: UserCheck,
      features: [
        'Contract & On-Demand IT Engineers',
        'Project-Based Specialist Allocation',
        'Permanent Tech Talent Recruitment',
        'Pre-Screened & Certified IT Specialists',
      ],
      gradient: 'from-cyan-600/20 to-teal-500/10',
      iconColor: 'text-teal-400',
      borderColor: 'group-hover:border-teal-500/50',
    },
    {
      id: 'services',
      title: 'IT Services',
      category: 'Managed Operations',
      description: 'Comprehensive IT services including maintenance, support, monitoring, and managed services.',
      icon: Wrench,
      features: [
        '24/7/365 Proactive Uptime Monitoring',
        'Scheduled Preventive Maintenance',
        'Patch Management & System Updates',
        'Managed IT Helpdesk & SLA Support',
      ],
      gradient: 'from-indigo-600/20 to-blue-500/10',
      iconColor: 'text-indigo-400',
      borderColor: 'group-hover:border-indigo-500/50',
    },
    {
      id: 'consultancy',
      title: 'IT Consultancy',
      category: 'Strategic Advisory',
      description: 'Professional IT consultancy to help businesses plan, optimize, and implement the right technology solutions.',
      icon: Lightbulb,
      features: [
        'Technology Audits & Gap Analysis',
        'Digital Transformation Roadmaps',
        'Infrastructure Cost Optimization',
        'Security, Compliance & Disaster Recovery Plans',
      ],
      gradient: 'from-amber-600/20 to-orange-500/10',
      iconColor: 'text-amber-400',
      borderColor: 'group-hover:border-amber-500/50',
    },
    {
      id: 'network-support',
      title: 'Network & System Support',
      category: 'Connectivity & Endpoints',
      description: 'Reliable network, system, workstation, and infrastructure support to keep business operations running smoothly.',
      icon: Network,
      features: [
        'Firewall, VPN & Router Configurations',
        'Enterprise WiFi & Switch Management',
        'Workstation & OS Troubleshooting',
        'Zero-Downtime Migration Support',
      ],
      gradient: 'from-sky-600/20 to-blue-500/10',
      iconColor: 'text-sky-400',
      borderColor: 'group-hover:border-sky-500/50',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#070D1E] relative overflow-hidden bg-grid-pattern">
      {/* Ambient background lights */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            <Layers className="w-4 h-4" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Tailored IT infrastructure, resource staffing, and managed consulting services engineered for modern enterprises in Udaipur and nationwide.
          </p>
        </div>

        {/* Services Grid (3 cards top, 2 cards bottom centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group rounded-2xl bg-gradient-to-b from-[#0F1B3B] to-[#0A122A] p-7 border border-brand-navy-border ${service.borderColor} shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/60 ${service.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="p-0.5 rounded bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 pt-2 transition-colors"
                >
                  <span>Request Service Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 Services in 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
          {services.slice(3, 5).map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group rounded-2xl bg-gradient-to-b from-[#0F1B3B] to-[#0A122A] p-7 border border-brand-navy-border ${service.borderColor} shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/60 ${service.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-slate-800/80 text-slate-300 border border-slate-700">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <div className="p-0.5 rounded bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 pt-2 transition-colors"
                >
                  <span>Request Service Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA banner below services */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-slate-900/60 border border-cyan-500/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Need a customized IT package for your enterprise?</h3>
            <p className="text-sm text-slate-300">Our consultants in Udaipur analyze your current IT landscape and propose optimal architectures.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-cyan-500/20"
          >
            Get Custom Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
