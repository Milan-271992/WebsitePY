import React from 'react';
import { Target, Compass, MapPin, CheckCircle, Shield, Award, Cpu, Server, Users } from 'lucide-react';

const About: React.FC = () => {
  const pillars = [
    {
      title: 'Reliable Architecture',
      description: 'Engineered for resilience, high availability, and 99.9% uptime.',
      icon: Server,
    },
    {
      title: 'Certified Talent',
      description: 'Skilled IT engineers with deep multi-vendor infrastructure expertise.',
      icon: Users,
    },
    {
      title: 'Scalable Growth',
      description: 'Agile technology solutions configured to grow seamlessly with your enterprise.',
      icon: Cpu,
    },
    {
      title: 'Stringent Security',
      description: 'Enterprise-grade protection, access control, and proactive compliance.',
      icon: Shield,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#0A1128] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            <Award className="w-4 h-4" />
            ABOUT X TECH INFRA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Empowering Businesses <span className="text-gradient">Through Technology</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Two Column Layout: Story & Udaipur Tech Hub Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-brand-navy-border backdrop-blur-md shadow-xl">
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
                <span className="text-cyan-400 font-bold">X Tech Infra</span> is an IT Infrastructure, Resource, Service, and Consultancy provider based in <span className="text-white font-semibold underline decoration-cyan-500/50 underline-offset-4">Udaipur, Rajasthan</span>. We help businesses build strong IT foundations, optimize operations, and achieve sustainable growth through reliable technology solutions and professional expertise.
              </p>
              
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">End-to-End Infrastructure Lifecycle</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">Dedicated IT Resource Provisioning</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">24/7 Managed Infrastructure Support</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">Strategic Technology Consulting</span>
                </div>
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Mission */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0F1C3F] to-[#0B1530] border border-cyan-500/30 shadow-lg relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To deliver reliable and innovative IT solutions that empower businesses to achieve operational excellence.
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121B3B] to-[#0A122A] border border-blue-500/30 shadow-lg relative overflow-hidden group hover:border-blue-400/60 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all" />
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 mb-4">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  To become a trusted technology partner known for quality, reliability, innovation, and customer-focused solutions.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Visual Infographic / Udaipur Tech Hub Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-blue-600/20 to-transparent">
              <div className="rounded-2xl bg-[#081024] p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
                
                {/* Tech Hub Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-white">Udaipur IT Center</div>
                      <div className="text-xs text-slate-400">Rajasthan, India</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    HQ & Ops
                  </span>
                </div>

                {/* Conceptual Illustration: Modern Datacenter & Rajasthan Connectivity */}
                <div className="my-6 relative py-8 px-4 rounded-xl bg-gradient-to-b from-[#0F1B3B]/80 to-[#070D1E]/90 border border-brand-navy-border flex flex-col items-center justify-center text-center">
                  
                  {/* Central Node Graphic */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-xl shadow-cyan-500/20 animate-float">
                      <Server className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 border-2 border-[#081024] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white">IT Infrastructure Hub</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    Connecting enterprise networks, cloud infrastructure, and technical talent across Rajasthan and national enterprises.
                  </p>

                  <div className="grid grid-cols-2 gap-3 w-full mt-6 text-left">
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="text-xs text-slate-400">Location</div>
                      <div className="text-sm font-semibold text-cyan-300">Udaipur, RJ</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="text-xs text-slate-400">Consultancy</div>
                      <div className="text-sm font-semibold text-blue-300">Corporate & SMB</div>
                    </div>
                  </div>
                </div>

                {/* Trust Points */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>Deep technical experience in multi-tier server architectures</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Transparent IT resource staffing models for all company sizes</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1.5">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
