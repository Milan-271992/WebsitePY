import React from 'react';
import { 
  ShieldCheck, 
  Clock, 
  Sliders, 
  DollarSign, 
  CheckCircle2, 
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 'experienced',
      title: 'Experienced Professionals',
      subtitle: 'Certified Engineers & Architects',
      description: 'Our team comprises multi-certified IT architects, systems specialists, and network administrators with hands-on enterprise deployment experience.',
      icon: Award,
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-500/10 to-blue-500/5',
      borderColor: 'border-cyan-500/30',
      badge: 'Certified Team',
      metric: '10+ Years',
      metricLabel: 'Industry Track Record',
    },
    {
      id: 'support',
      title: 'Reliable Support',
      subtitle: 'Rapid Response & SLA Commitment',
      description: 'We deliver dependable 24/7 technical support and rapid incident mitigation, ensuring your servers and network infrastructure experience minimum downtime.',
      icon: Clock,
      color: 'text-emerald-400',
      bgGradient: 'from-emerald-500/10 to-teal-500/5',
      borderColor: 'border-emerald-500/30',
      badge: '24/7 / 365',
      metric: '< 15 Mins',
      metricLabel: 'Critical Response Time',
    },
    {
      id: 'solutions',
      title: 'Customized Solutions',
      subtitle: 'Tailored to Business Requirements',
      description: 'We do not believe in one-size-fits-all. Every infrastructure blueprint and resource deployment is customized specifically to your operational demands.',
      icon: Sliders,
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/10 to-indigo-500/5',
      borderColor: 'border-blue-500/30',
      badge: '100% Tailored',
      metric: 'Bespoke',
      metricLabel: 'Architecture Design',
    },
    {
      id: 'cost-effective',
      title: 'Cost Effective',
      subtitle: 'Optimized ROI & Zero Waste',
      description: 'Maximize your technology ROI through lean infrastructure designs, optimized staffing models, and strategic procurement without compromising quality.',
      icon: DollarSign,
      color: 'text-amber-400',
      bgGradient: 'from-amber-500/10 to-orange-500/5',
      borderColor: 'border-amber-500/30',
      badge: 'Max ROI',
      metric: '30-40%',
      metricLabel: 'Cost Efficiency',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-[#0A1128] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            <ShieldCheck className="w-4 h-4" />
            WHY WORK WITH US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Partner You <span className="text-gradient">Can Rely On</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
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
                className={`relative rounded-2xl bg-gradient-to-br ${item.bgGradient} bg-[#0D1836] p-8 border ${item.borderColor} shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/60 ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs font-medium text-slate-400 mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className="self-start px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800/90 text-cyan-300 border border-cyan-500/20">
                    {item.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Metric Strip */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>{item.metricLabel}</span>
                  </div>
                  <span className="text-sm font-bold font-mono text-white px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700">
                    {item.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase">High Speed</span>
            </div>
            <div className="text-xl font-bold text-white font-mono">Agile Delivery</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center justify-center gap-1.5 text-blue-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase">Scalability</span>
            </div>
            <div className="text-xl font-bold text-white font-mono">Ready to Grow</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase">Security</span>
            </div>
            <div className="text-xl font-bold text-white font-mono">Zero Compromise</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="flex items-center justify-center gap-1.5 text-purple-400 mb-1">
              <Award className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase">Quality</span>
            </div>
            <div className="text-xl font-bold text-white font-mono">Guaranteed SLAs</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
