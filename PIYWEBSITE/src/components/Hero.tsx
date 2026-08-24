import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  MapPin, 
  ArrowRight, 
  Server, 
  Cpu, 
  Network, 
  CheckCircle2, 
  Sparkles,
  Database,
  Terminal
} from 'lucide-react';

const Hero: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Reliable Support',
      desc: '24/7 Monitoring & Rapid Issue Resolution',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Users,
      title: 'Expert Team',
      desc: 'Certified Architects & IT Engineers',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: HeartHandshake,
      title: 'Customer Focused',
      desc: 'Tailored Solutions for Your Business Growth',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                WELCOME TO
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                Udaipur, Rajasthan
              </span>
            </div>

            {/* Main Brand Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] leading-[1.1]">
                X TECH <span className="text-gradient">INFRA</span>
              </h1>
              <div className="text-sm sm:text-base md:text-lg font-bold tracking-widest text-cyan-400 uppercase">
                IT INFRASTRUCTURE <span className="text-slate-500">|</span> RESOURCE <span className="text-slate-500">|</span> SERVICE <span className="text-slate-500">|</span> CONSULTANCY
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Delivering intelligent IT solutions, reliable resources, and professional consultancy services to help businesses build, optimize, and grow their technology infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-xl shadow-cyan-600/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-500/50 hover:text-white shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Live Operational Metric Pill */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-400">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Active IT Infrastructure Operations in Rajasthan & Across India</span>
            </div>

          </div>

          {/* Right Column: High-Tech Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Interactive Futuristic Server & Infrastructure Canvas Visual */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 opacity-30 blur-lg group-hover:opacity-100 transition duration-1000"></div>

              {/* Main Tech Visual Terminal Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#0F1C3F] to-[#070E24] border border-cyan-500/25 shadow-2xl p-6 overflow-hidden">
                
                {/* Tech Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">x-tech-infra // nodes-active</span>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    STATUS: 99.9% UPTIME
                  </span>
                </div>

                {/* Simulated Server Rack & Architecture Grid */}
                <div className="space-y-3">
                  
                  {/* Node 1: Cloud & Virtualization */}
                  <div className="p-3.5 rounded-xl bg-[#081028]/80 border border-cyan-500/20 flex items-center justify-between hover:border-cyan-400/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Hybrid Cloud & Servers</div>
                        <div className="text-xs text-slate-400">High Availability Virtual Clusters</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>HEALTHY</span>
                    </div>
                  </div>

                  {/* Node 2: Network Grid */}
                  <div className="p-3.5 rounded-xl bg-[#081028]/80 border border-blue-500/20 flex items-center justify-between hover:border-blue-400/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <Network className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Network & Firewall Mesh</div>
                        <div className="text-xs text-slate-400">Secure SD-WAN & VPN Routing</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-cyan-400 text-xs font-mono">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>OPTIMIZED</span>
                    </div>
                  </div>

                  {/* Node 3: Storage & Databases */}
                  <div className="p-3.5 rounded-xl bg-[#081028]/80 border border-purple-500/20 flex items-center justify-between hover:border-purple-400/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Enterprise IT Staffing</div>
                        <div className="text-xs text-slate-400">Certified Engineers & Consultants</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-purple-400 text-xs font-mono">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>DEPLOYED</span>
                    </div>
                  </div>

                </div>

                {/* Animated Graphic Waves / Stats footer */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800">
                    <div className="text-lg font-bold text-white font-mono">100%</div>
                    <div className="text-[10px] text-slate-400 uppercase">Commitment</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800">
                    <div className="text-lg font-bold text-cyan-400 font-mono">24/7</div>
                    <div className="text-[10px] text-slate-400 uppercase">Support SLA</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800">
                    <div className="text-lg font-bold text-blue-400 font-mono">Udaipur</div>
                    <div className="text-[10px] text-slate-400 uppercase">HQ Center</div>
                  </div>
                </div>

              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#0B1736] border border-cyan-500/40 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 hidden sm:flex">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Enterprise Standard</div>
                  <div className="text-[10px] text-slate-400">Total Infrastructure Security</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Three Highlights Bar */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl glass-card ${item.bg} glass-card-hover relative group overflow-hidden`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Hero;
