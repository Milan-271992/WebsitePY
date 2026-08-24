import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Clock, 
  Building2, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IT Infrastructure',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Simulate instant client-side submission feedback
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'IT Infrastructure',
      message: '',
    });
  };

  // Generate mailto link with pre-filled content
  const mailtoHref = `mailto:info@xtechinfra.com?subject=IT Inquiry from ${encodeURIComponent(formData.name || 'Website Visitor')} - ${encodeURIComponent(formData.service)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AService Interested: ${encodeURIComponent(formData.service)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#0A1128] relative overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 mb-4">
            <Sparkles className="w-4 h-4" />
            GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans']">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-normal">
            Whether you need infrastructure consultation, dedicated IT resources, or immediate technical support, our Udaipur team is here to assist.
          </p>
        </div>

        {/* Top 4 Quick-Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Location */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Our Location</h3>
            <p className="text-xs text-slate-400 mb-2">Regional Headquarters</p>
            <div className="text-sm font-semibold text-slate-200">
              Udaipur, Rajasthan, India
            </div>
            <div className="mt-3 text-xs text-cyan-400 flex items-center gap-1 font-medium">
              <Building2 className="w-3.5 h-3.5" />
              <span>Rajasthan IT Corridor</span>
            </div>
          </div>

          {/* Card 2: Call Us */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Call Us</h3>
            <p className="text-xs text-slate-400 mb-2">Direct Telephone Support</p>
            <div className="space-y-1">
              <a
                href="tel:+911234567890"
                className="block text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                +91 12345 67890
              </a>
              <a
                href="tel:+919876543210"
                className="block text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
              >
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Card 3: Email Us */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Email Us</h3>
            <p className="text-xs text-slate-400 mb-2">Corporate & Support Desk</p>
            <div className="space-y-1">
              <a
                href="mailto:info@xtechinfra.com"
                className="block text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors truncate"
              >
                info@xtechinfra.com
              </a>
              <a
                href="mailto:support@xtechinfra.com"
                className="block text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors truncate"
              >
                support@xtechinfra.com
              </a>
            </div>
          </div>

          {/* Card 4: WhatsApp */}
          <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-lg group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">WhatsApp</h3>
            <p className="text-xs text-slate-400 mb-2">Instant Chat & Queries</p>
            <a
              href="https://wa.me/919876543210?text=Hello%20X%20Tech%20Infra,%20I%20am%20interested%20in%20your%20IT%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>+91 98765 43210</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="mt-3 text-xs text-slate-400">Available 9:00 AM – 7:00 PM IST</div>
          </div>

        </div>

        {/* Main Interactive Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#0F1D40] to-[#081024] p-8 border border-cyan-500/30 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Ready to optimize your IT?
                </span>
                <h3 className="text-2xl font-bold text-white mt-3 font-['Plus_Jakarta_Sans']">
                  Speak Directly With An Infrastructure Specialist
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  We provide free initial scoping audits for enterprises looking to revamp networks, expand server racks, or hire dedicated tech staff.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Business Hours</h4>
                    <p className="text-xs text-slate-300">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                    <p className="text-[11px] text-cyan-400">24/7 SLA Support for Contract Clients</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Rapid Response Guarantee</h4>
                    <p className="text-xs text-slate-300">Inquiries received are typically answered within 2 business hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <a
                href="https://wa.me/919876543210?text=Hello%20X%20Tech%20Infra,%20I%20am%20interested%20in%20your%20IT%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/25 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Chat with Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Form Panel (Interactive Client-Side UI) */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-8 shadow-2xl backdrop-blur-md">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Thank You, {formData.name || 'Partner'}!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry regarding <span className="text-cyan-400 font-semibold">{formData.service}</span> has been noted. Our technical team in Udaipur will connect with you shortly.
                  </p>
                </div>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-xs shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    Open Email Client Directly
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">Send Us a Message</h3>
                  <p className="text-xs text-slate-400">Fill out this quick form and our consultants will reach out with a tailored proposal.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Service Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Area of Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors cursor-pointer"
                    >
                      <option value="IT Infrastructure">IT Infrastructure Setup & Servers</option>
                      <option value="IT Resource / Staffing">IT Resource / Staffing Solutions</option>
                      <option value="IT Services">Managed IT & Support Services</option>
                      <option value="IT Consultancy">IT Consultancy & Strategy</option>
                      <option value="Network & System Support">Network & System Support</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Project / Requirement Details</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your server requirement, network setup, or staffing needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit button & Mailto fallback */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm shadow-xl shadow-cyan-600/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get In Touch</span>
                  </button>

                  <a
                    href="mailto:info@xtechinfra.com?subject=IT Inquiry from Website"
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors underline underline-offset-2"
                  >
                    Prefer direct email? Click here
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
