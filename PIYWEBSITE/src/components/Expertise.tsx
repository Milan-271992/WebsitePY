import React from 'react';
import { 
  Server, 
  Network, 
  Terminal, 
  Cloud, 
  Users, 
  LifeBuoy, 
  Activity, 
  Briefcase,
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
      name: 'IT Infrastructure',
      category: 'Core Hardware & DC',
      level: 98,
      icon: Server,
      tags: ['Rack Servers', 'SAN/NAS', 'Blade Systems', 'Redundancy'],
      description: 'Physical & logical architecture design, enterprise hyper-converged hardware installation, and data center lifecycle management.',
    },
    {
      name: 'Network Management',
      category: 'Routing & Security',
      level: 95,
      icon: Network,
      tags: ['Cisco / Fortinet', 'VLANs', 'SD-WAN', 'Next-Gen Firewalls'],
      description: 'High-throughput enterprise routing, mesh switching, policy-driven firewalls, and encrypted multi-site VPN tunnels.',
    },
    {
      name: 'System Administration',
      category: 'OS & Directory Services',
      level: 96,
      icon: Terminal,
      tags: ['Active Directory', 'Linux (RHEL/Ubuntu)', 'Windows Server', 'IAM'],
      description: 'Centralized identity management, group policy governance, automated patch rollout, and cross-platform server provisioning.',
    },
    {
      name: 'Cloud & Virtualization',
      category: 'Hybrid Environments',
      level: 94,
      icon: Cloud,
      tags: ['VMware ESXi', 'Hyper-V', 'Proxmox', 'AWS / Azure Hybrid'],
      description: 'Virtual machine clusters, high-availability live migration, scalable container orchestrations, and cloud-to-onprem integration.',
    },
    {
      name: 'IT Resource Management',
      category: 'Talent & Staffing',
      level: 95,
      icon: Users,
      tags: ['Contract Staffing', 'L1/L2/L3 Engineers', 'DevOps Staff', 'Project Leads'],
      description: 'Vetted technical staffing, engineering bench mobilization, on-site/remote support resource allocations, and talent payroll management.',
    },
    {
      name: 'Technical Support',
      category: 'Endpoint & Helpdesk',
      level: 99,
      icon: LifeBuoy,
      tags: ['24/7 Ticketing', 'Remote Assistance', 'Hardware Diagnostics', 'Zero Lag'],
      description: 'Rapid-response troubleshooting for workstations, peripherals, enterprise software stacks, and mission-critical emergency recovery.',
    },
    {
      name: 'Managed IT Services',
      category: 'Proactive Operations',
      level: 97,
      icon: Activity,
      tags: ['SLA Management', 'Backup Audits', 'Uptime Telemetry', 'Disaster Recovery'],
      description: 'Continuous proactive health monitoring, automated backups, scheduled health checks, and preventive infrastructure optimization.',
    },
    {
      name: 'Technology Consultancy',
      category: 'Strategic Advisory',
      level: 93,
      icon: Briefcase,
      tags: ['IT Roadmapping', 'Cost Optimization', 'Vendor Audits', 'Compliance'],
      description: 'Executive guidance on IT modernization, software license audits, IT expenditure rationalization, and cyber-resilience policies.',
    },
  ];

  return (
    <section id="expertise" className="py-20 lg:py-32 bg-[#070D1E] relative overflow-hidden bg-dot-pattern">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            <Cpu className="w-4 h-4" />
            TECHNICAL PROFICIENCY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Our <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Proven competencies across full-stack IT infrastructure, advanced networking, resource management, and enterprise advisory.
          </p>
        </div>

        {/* 8 Expertise Cards in 2x4 or 4x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-gradient-to-b from-[#0E1A38] to-[#081024] p-6 border border-brand-navy-border hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/15 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-900/90 text-cyan-400 border border-slate-700/60 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar & Proficiency Indicator */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-slate-400 font-medium flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-cyan-400" />
                      Proficiency SLA
                    </span>
                    <span className="font-mono font-bold text-cyan-400">{item.level}%</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Technology Stack Badges */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
          <div className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
            Technologies, Frameworks & Vendor Standards We Support
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300 font-medium">
            {['Cisco', 'Fortinet', 'Dell EMC', 'HP Enterprise', 'VMware', 'Microsoft Hyper-V', 'Ubuntu Server', 'Red Hat Enterprise Linux', 'Windows Server 2022/2025', 'MikroTik', 'Synology NAS', 'Veeam Backup', 'Ubiquiti UniFi'].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
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
