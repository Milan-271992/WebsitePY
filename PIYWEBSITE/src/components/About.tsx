import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Cloud, 
  ShieldCheck, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center lg:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] tracking-tight font-['Plus_Jakarta_Sans']">
            Your Trusted <span className="text-[#0066FF]">IT Infrastructure</span> Partner
          </h2>
          <div className="w-16 h-1 bg-[#0066FF] mt-4 rounded-full mx-auto lg:mx-0" />
        </div>

        {/* 3-Column Layout: Story Text | Location & Contact Cards | Server Rack Tech Graphic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Column 1: Narrative & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm space-y-4">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                <strong className="text-[#0A1931] font-bold">XTechInfra</strong> is a Udaipur, Rajasthan based company committed to delivering best-in-class Wireless, VoIP, Video Conferencing, Network, IT Passive, Structured Cabling, Software Licensing, and IT Infrastructure Solutions to enterprises across India.
              </p>

              <div className="pt-3 border-t border-slate-200 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                  Our Core Mission
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our mission is to build reliable, secure and future-ready IT active & passive environments that drive growth, efficiency, and continuous innovation.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#0066FF]">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise SLA & Total Hardware Warranty</span>
              </div>
            </div>

            {/* Slogan Pill */}
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-between">
              <div>
                <div className="text-xs font-black text-[#0A1931] uppercase">Smart Systems</div>
                <div className="text-xs font-medium text-slate-600">Solid Structures</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center font-bold text-xs">
                ✓
              </div>
            </div>
          </div>

          {/* Column 2: 3 Clean Contact / Location Cards (Exact Mockup Match) (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* 1. Location Card with Landmark */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Our Location
                </h4>
                <p className="text-xs sm:text-sm font-bold text-[#0A1931] leading-snug">
                  12, Madhav Colony, Kalkamata Road, Opposite Krishna Dental Clinic
                </p>
                <p className="text-xs text-[#0066FF] font-semibold">
                  Udaipur, Rajasthan - 313001, India
                </p>
              </div>
            </div>

            {/* 2. Phone Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Phone Support
                </h4>
                <a
                  href="tel:+917877358968"
                  className="block text-sm font-extrabold text-[#0A1931] hover:text-[#0066FF] transition-colors"
                >
                  +91 7877358968
                </a>
                <p className="text-[11px] text-emerald-600 font-medium">
                  Direct Line • Mon to Sat (9 AM – 7 PM)
                </p>
              </div>
            </div>

            {/* 3. Email Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email Desk
                </h4>
                <a
                  href="mailto:xtisupport@gmail.com"
                  className="block text-sm font-extrabold text-[#0A1931] hover:text-[#0066FF] transition-colors break-all"
                >
                  xtisupport@gmail.com
                </a>
                <p className="text-[11px] text-[#0066FF] font-medium">
                  Guaranteed Fast Turnaround
                </p>
              </div>
            </div>

          </div>

          {/* Column 3: High-Tech Datacenter Graphic Visual (Matching Mockup) (4 cols) */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl bg-gradient-to-b from-[#0A1931] to-[#040D1D] p-6 text-white shadow-2xl border border-blue-900/50 relative overflow-hidden">
              
              {/* Graphic Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                    Udaipur IT Center
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-[#38BDF8] border border-blue-500/30 font-bold">
                  HQ & OPS
                </span>
              </div>

              {/* Simulated Datacenter Server Racks & Cloud Monitor */}
              <div className="my-6 p-5 rounded-2xl bg-[#081226] border border-blue-500/20 space-y-4">
                
                {/* Cloud & Server Node */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#0066FF]/20 text-[#38BDF8] border border-[#0066FF]/40">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Hybrid Cloud & Hardware</div>
                      <div className="text-[10px] text-slate-400">Enterprise Server Clusters</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">99.9% SLA</span>
                </div>

                {/* Server Rack Illustration Bars */}
                <div className="space-y-1.5 pt-2">
                  <div className="h-4 rounded bg-[#0A1931] border border-slate-700 flex items-center px-2 justify-between">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                    <span className="text-[8px] font-mono text-slate-400">PRIMARY NODE // OK</span>
                  </div>
                  <div className="h-4 rounded bg-[#0A1931] border border-slate-700 flex items-center px-2 justify-between">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[8px] font-mono text-slate-400">STORAGE SAN // RAID 10</span>
                  </div>
                  <div className="h-4 rounded bg-[#0A1931] border border-slate-700 flex items-center px-2 justify-between">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    </div>
                    <span className="text-[8px] font-mono text-slate-400">CORE SWITCH // GIGABIT</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Action */}
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs transition-colors shadow-md"
              >
                <span>Schedule Infrastructure Scoping</span>
                <ChevronRight className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
