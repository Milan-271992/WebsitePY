import React from 'react';
import Logo from './Logo';
import LinkedInIcon from './LinkedInIcon';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  ArrowUp,
  Handshake,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Technical Expertise', href: '#expertise' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    { name: 'WIRELESS Solutions', href: '#services' },
    { name: 'VoIP Solutions & IP PBX', href: '#services' },
    { name: 'Video Conferencing Solutions', href: '#services' },
    { name: 'Network Solutions & Security', href: '#services' },
    { name: 'IT Passive Solutions & Racks', href: '#services' },
    { name: 'Structured Cabling Solutions', href: '#services' },
    { name: 'Softwares & Licensing', href: '#services' },
    { name: 'IT Infrastructure & Consultancy', href: '#services' },
  ];

  return (
    <footer className="bg-[#0A1931] text-slate-300 text-sm relative overflow-hidden border-t-2 border-[#0066FF]">
      
      {/* Top Banner: Service Domain Ticker */}
      <div className="bg-[#071326] border-b border-slate-800 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono font-bold tracking-widest text-[#38BDF8] uppercase text-center">
          <span>WIRELESS</span>
          <span className="text-blue-500 font-bold">•</span>
          <span>VOIP SOLUTIONS</span>
          <span className="text-blue-500 font-bold">•</span>
          <span>VIDEO CONFERENCING</span>
          <span className="text-blue-500 font-bold">•</span>
          <span>NETWORK SOLUTIONS</span>
          <span className="text-blue-500 font-bold">•</span>
          <span>IT PASSIVE SOLUTIONS</span>
          <span className="text-blue-500 font-bold">•</span>
          <span>STRUCTURED CABLING</span>
          <span className="text-blue-500 font-bold">•</span>
          <span>SOFTWARES & LICENSING</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" variant="dark" />

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              Building stronger IT infrastructure for a smarter tomorrow. We provide end-to-end enterprise hardware, genuine software licensing, IT staffing, and strategic technology consultancy.
            </p>

            {/* Location & Contact summary */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>12, Madhav Colony, Kalkamata Road, Opp Krishna Dental Clinic, Udaipur, Rajasthan - 313001, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href="tel:+917877358968" className="hover:text-white font-bold transition-colors">
                  +91 7877358968
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href="mailto:xtisupport@gmail.com" className="hover:text-white font-bold transition-colors">
                  xtisupport@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span className="font-mono text-cyan-300">www.XTechInfra.com</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <LinkedInIcon className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a
                  href="https://lnkd.in/p/d5-i5jWp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-bold transition-colors flex items-center gap-1.5 text-cyan-300 group"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-['Plus_Jakarta_Sans']">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#0066FF] font-bold">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services & Performance Badge (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-['Plus_Jakarta_Sans']">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#0066FF] font-bold">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Signature "Partnering For Performance" badge from Mockup */}
            <div className="mt-4 p-4 rounded-2xl bg-[#081226] border border-blue-500/30 flex items-center gap-3.5 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#0066FF] text-white flex items-center justify-center shrink-0 shadow-inner">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-white uppercase tracking-wider font-['Plus_Jakarta_Sans']">
                  Partnering For Performance
                </div>
                <div className="text-[11px] text-slate-300 flex items-center gap-1 mt-0.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Smart Systems • Solid Structures</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          
          <div className="flex items-center gap-2">
            <span>© 2026 <strong className="text-white">Xtechinfra Technologies</strong>. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Udaipur, Rajasthan, India</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px]">
              Business Deal in IT Infrastructure, Resources, Equipments, Software, Licenses, Services & Consultancy
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-[#0066FF] transition-all flex items-center gap-1 shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-bold">Top</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
