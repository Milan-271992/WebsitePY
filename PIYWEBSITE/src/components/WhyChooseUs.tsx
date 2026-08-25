import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Sliders, 
  DollarSign, 
  CheckCircle2, 
  Zap,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'experienced',
      title: 'Experienced Professionals',
      subtitle: 'Certified Engineers & Architects',
      description: 'Our team comprises multi-certified IT architects, systems specialists, and network administrators with hands-on enterprise deployment experience.',
      icon: Award,
      badge: 'Certified Team',
      metric: '10+ Years',
      metricLabel: 'Industry Track Record',
    },
    {
      id: 'support',
      title: 'Reliable 24/7 Support',
      subtitle: 'Rapid Response & SLA Commitment',
      description: 'We deliver dependable 24/7 technical support and rapid incident mitigation, ensuring your servers and network infrastructure experience zero downtime.',
      icon: Clock,
      badge: '24/7 / 365',
      metric: '< 15 Mins',
      metricLabel: 'Critical Response Time',
    },
    {
      id: 'solutions',
      title: 'Customized Architecture',
      subtitle: 'Tailored to Business Requirements',
      description: 'We do not believe in one-size-fits-all. Every infrastructure blueprint, hardware deployment, and license package is customized specifically to your demands.',
      icon: Sliders,
      badge: '100% Tailored',
      metric: 'Bespoke',
      metricLabel: 'Architecture Design',
    },
    {
      id: 'cost-effective',
      title: 'Cost Effective Procurement',
      subtitle: 'Optimized ROI & Zero Waste',
      description: 'Maximize your technology ROI through authorized OEM hardware discounts, volume licensing advisory, and optimized IT staffing models.',
      icon: DollarSign,
      badge: 'Max ROI',
      metric: '30-40%',
      metricLabel: 'Cost Efficiency',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHY CHOOSE US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] tracking-tight font-['Plus_Jakarta_Sans']">
            Partner You <span className="text-[#0066FF]">Can Rely On</span>
          </h2>
          <div className="w-16 h-1 bg-[#0066FF] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-normal">
            Building long-term partnerships with high transparency, enterprise-grade discipline, and proactive technology stewardship.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-blue-50 text-[#0066FF] border border-blue-100 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1931] group-hover:text-[#0066FF] transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className="self-start px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#0066FF] border border-blue-100">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Metric Strip */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                    <span>{item.metricLabel}</span>
                  </div>
                  <span className="text-xs font-black font-mono text-[#0A1931] px-2.5 py-1 rounded bg-slate-100 border border-slate-200">
                    {item.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-center gap-1.5 text-[#0066FF] mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase">High Speed</span>
            </div>
            <div className="text-base sm:text-lg font-black text-[#0A1931] font-mono">Agile Delivery</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-center gap-1.5 text-[#0066FF] mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase">Scalability</span>
            </div>
            <div className="text-base sm:text-lg font-black text-[#0A1931] font-mono">Ready to Grow</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-center gap-1.5 text-emerald-600 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase">Security</span>
            </div>
            <div className="text-base sm:text-lg font-black text-[#0A1931] font-mono">100% Compliant</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-center gap-1.5 text-purple-600 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase">Quality</span>
            </div>
            <div className="text-base sm:text-lg font-black text-[#0A1931] font-mono">Guaranteed SLAs</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
