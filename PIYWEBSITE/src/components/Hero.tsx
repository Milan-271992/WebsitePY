import React from 'react';
import { 
  Server, 
  Monitor, 
  Cpu, 
  Headphones, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white bg-grid-pattern"
    >
      {/* Ambient background network glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs (Matching Mockup) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#0066FF] border border-blue-200 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>SMART SYSTEMS • SOLID STRUCTURES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1931] font-['Plus_Jakarta_Sans'] leading-[1.12]">
              Building Stronger <br className="hidden sm:inline" />
              <span className="text-[#0066FF]">IT Infrastructure</span> <br />
              for a Smarter Tomorrow
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Your trusted partner for <strong className="text-[#0A1931] font-semibold">Wireless, VoIP, Video Conferencing, Network Solutions, IT Passive, Structured Cabling</strong>, and <strong className="text-[#0A1931] font-semibold">Softwares & Licensing</strong> based in Udaipur, Rajasthan.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white bg-[#0066FF] hover:bg-[#0052CC] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group text-sm"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-[#0066FF] bg-white hover:bg-blue-50 border-2 border-[#0066FF] shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-sm"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Trust points strip */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>Certified OEM Supply</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>24/7 SLA Support</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                <span>Udaipur HQ & National Reach</span>
              </div>
            </div>

          </div>

          {/* Right Column: Signature Angled Navy Brand Card (Exact Business Card & Mockup Replica) */}
          <div className="lg:col-span-5 relative">
            
            {/* Background Decorative Mesh Pattern */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl -z-10" />

            {/* Main Navy Hero Card */}
            <div className="relative rounded-3xl bg-[#0A1931] text-white p-7 sm:p-9 shadow-2xl border border-blue-900/60 overflow-hidden group">
              
              {/* Angled geometric accent glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#0066FF]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

              {/* Card Top Row: 4 Tech Domain Icons (Matching Mockup & Business Card) */}
              <div className="grid grid-cols-4 gap-3 pb-6 mb-6 border-b border-slate-700/80">
                
                {/* 1. Server Rack Icon */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-500/30 flex flex-col items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform shadow-inner">
                  <Server className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300 font-bold">Server</span>
                </div>

                {/* 2. PC / Workstation Icon */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-500/30 flex flex-col items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform shadow-inner">
                  <Monitor className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300 font-bold">Display</span>
                </div>

                {/* 3. Switch / Router Icon */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-500/30 flex flex-col items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform shadow-inner">
                  <Cpu className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300 font-bold">Network</span>
                </div>

                {/* 4. Support / Headset Icon */}
                <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-500/30 flex flex-col items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform shadow-inner">
                  <Headphones className="w-6 h-6 mb-1" />
                  <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300 font-bold">Support</span>
                </div>

              </div>

              {/* Main Card Business Scope Text (Exact Replica of Business Card & Mockup) */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                  Business deal in
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#38BDF8] tracking-tight font-['Plus_Jakarta_Sans']">
                  IT INFRASTRUCTURE
                </h3>
                <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                  Resources, Equipments, Software, Licenses, Services and Consultancy
                </p>
              </div>

              {/* Secondary Slogan Strip */}
              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white font-['Plus_Jakarta_Sans']">
                    Smart Systems
                  </div>
                  <div className="text-xs font-medium text-slate-400">
                    Solid Structures
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 text-cyan-300 text-xs font-bold font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Rajasthan • India</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 3 Quick Value Metric Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl white-card white-card-hover flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-[#0066FF] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0A1931]">Reliable Support</h3>
              <p className="text-xs text-slate-500 mt-1">24/7 Monitoring, hardware replacement & rapid issue resolution.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl white-card white-card-hover flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-[#0066FF] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0A1931]">Expert Technical Team</h3>
              <p className="text-xs text-slate-500 mt-1">Certified systems engineers, network architects & consultants.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl white-card white-card-hover flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 text-[#0066FF] shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0A1931]">Genuine Hardware & Licenses</h3>
              <p className="text-xs text-slate-500 mt-1">100% genuine enterprise hardware & authorized software licensing.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
