import React, { useState } from 'react';
import LinkedInIcon from './LinkedInIcon';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Clock, 
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Loader2,
  AlertCircle
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/send-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Failed to dispatch inquiry. Please try again or reach us directly via email/WhatsApp.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(
        'Unable to connect to the mail server. You can click below to email us directly at Xtisupport@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'IT Infrastructure',
      message: '',
    });
  };

  // Generate mailto link with pre-filled content
  const mailtoHref = `mailto:xtisupport@gmail.com?subject=IT Inquiry from ${encodeURIComponent(formData.name || 'Website Visitor')} - ${encodeURIComponent(formData.service)}&body=Name: ${encodeURIComponent(formData.name)}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AService Interested: ${encodeURIComponent(formData.service)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] tracking-tight font-['Plus_Jakarta_Sans']">
            Let's <span className="text-[#0066FF]">Connect</span>
          </h2>
          <div className="w-16 h-1 bg-[#0066FF] mx-auto mt-4 rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-normal">
            Whether you need infrastructure consultation, equipment procurement, software licenses, dedicated IT resources, or immediate technical support, our team is here to assist.
          </p>
        </div>

        {/* Top 4 Quick-Contact Cards (White Cards with Color Accents) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          {/* Card 1: Call Us */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#0A1931] mb-1">Call Us</h3>
            <p className="text-xs text-slate-500 mb-2">Direct Telephone Support</p>
            <a
              href="tel:+917877358968"
              className="block text-sm font-bold text-[#0066FF] hover:underline transition-colors"
            >
              +91 7877358968
            </a>
            <div className="mt-1 text-[11px] text-emerald-600 font-medium">
              Mon – Sat: 9:00 AM – 7:00 PM
            </div>
          </div>

          {/* Card 2: Email Us */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#0A1931] mb-1">Email Us</h3>
            <p className="text-xs text-slate-500 mb-2">Corporate & Support Desk</p>
            <a
              href="mailto:xtisupport@gmail.com"
              className="block text-xs sm:text-sm font-bold text-[#0066FF] hover:underline transition-colors truncate"
            >
              xtisupport@gmail.com
            </a>
            <div className="mt-1 text-[11px] text-slate-500 font-medium">
              Rapid response guaranteed
            </div>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#0A1931] mb-1">WhatsApp</h3>
            <p className="text-xs text-slate-500 mb-2">Instant Chat & Queries</p>
            <a
              href="https://wa.me/917877358968?text=Hello%20Xtechinfra%20Technologies,%20I%20am%20interested%20in%20your%20IT%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <span>+91 7877358968</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="mt-1 text-[11px] text-slate-500">Available 9 AM – 7 PM IST</div>
          </div>

          {/* Card 4: LinkedIn */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0A66C2]/50 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#0A66C2] group-hover:text-white transition-all">
              <LinkedInIcon className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#0A1931] mb-1">LinkedIn</h3>
            <p className="text-xs text-slate-500 mb-2">Official Company Network</p>
            <a
              href="https://lnkd.in/p/d5-i5jWp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0A66C2] hover:text-[#004182] transition-colors"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="mt-1 text-[11px] text-slate-500">Connect with our team</div>
          </div>

        </div>

        {/* Main Interactive Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Info Panel: Rich Corporate Navy */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0A1931] text-white p-8 sm:p-9 shadow-2xl border border-blue-900/60 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#38BDF8] border border-[#0066FF]/30">
                  Ready to optimize your IT?
                </span>
                <h3 className="text-2xl font-black text-white mt-4 font-['Plus_Jakarta_Sans'] leading-snug">
                  Speak Directly With An Infrastructure Specialist
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
                  We provide free initial scoping audits for enterprises looking to revamp networks, expand server hardware, purchase software licenses, or hire dedicated tech staff.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-[#38BDF8] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Business Hours</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Monday – Saturday: 9:00 AM – 7:00 PM IST</p>
                    <p className="text-[11px] text-cyan-400 font-medium">24/7 SLA Support for Contract Clients</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-[#38BDF8] shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Rapid Response Guarantee</h4>
                    <p className="text-xs text-slate-300 mt-0.5">Inquiries received are answered within 2 business hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <a
                href="https://wa.me/917877358968?text=Hello%20Xtechinfra%20Technologies,%20I%20am%20interested%20in%20your%20IT%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Chat with Us on WhatsApp
              </a>

              <a
                href="https://lnkd.in/p/d5-i5jWp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-700/25 transition-all"
              >
                <LinkedInIcon className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right Form Panel: Crisp White Container */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-8 sm:p-9 shadow-xl">
            
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0A1931]">Inquiry Received, {formData.name || 'Partner'}!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your inquiry regarding <span className="text-[#0066FF] font-bold">{formData.service}</span> has been securely dispatched to <strong className="text-slate-800">Xtisupport@gmail.com</strong>.
                  </p>
                  <p className="text-xs text-emerald-600 font-medium">
                    ✓ A confirmation summary has also been sent to your email ({formData.email}).
                  </p>
                </div>
                
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-xs shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    Open in Mail Client
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-300 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1 mb-6">
                  <h3 className="text-xl font-black text-[#0A1931] font-['Plus_Jakarta_Sans']">Send Us a Message</h3>
                  <p className="text-xs text-slate-500">Fill out this quick form and our consultants will reach out with a tailored proposal.</p>
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs space-y-2">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div className="flex-1 font-medium">{errorMessage}</div>
                    </div>
                    <div className="pt-1 flex flex-wrap items-center gap-2">
                      <a
                        href={mailtoHref}
                        className="inline-flex items-center gap-1 font-bold text-[#0066FF] hover:underline"
                      >
                        <Mail className="w-3.5 h-3.5" /> Click here to send via email client
                      </a>
                      <span>•</span>
                      <a
                        href="https://wa.me/917877358968"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-emerald-600 hover:underline"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp us directly
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 78773 58968"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 transition-colors"
                    />
                  </div>

                  {/* Service Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Area of Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 transition-colors cursor-pointer font-medium"
                    >
                      <option value="WIRELESS">WIRELESS / Wireless Network Solutions</option>
                      <option value="VoIP Solutions">VoIP Solutions & IP PBX Telephony</option>
                      <option value="Video Conferencing Solutions">Video Conferencing Solutions (AV & Boardrooms)</option>
                      <option value="Network Solutions">Network Solutions (Routing, Switching & Firewalls)</option>
                      <option value="IT Passive Solutions">IT Passive Solutions (Racks, Cabinets & UPS)</option>
                      <option value="Structured Cabling Solutions">Structured Cabling Solutions (Copper & Fiber)</option>
                      <option value="Softwares & Licensing">Softwares & Licensing (Microsoft 365, Server CALs)</option>
                      <option value="IT Infrastructure & Consultancy">IT Infrastructure & Consultancy</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Project / Requirement Details</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your server requirement, hardware equipment, software license, network setup, or staffing needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                  />
                </div>

                {/* Submit button & Mailto fallback */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Get In Touch</span>
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:xtisupport@gmail.com?subject=IT Inquiry from Website"
                    className="text-xs text-slate-500 hover:text-[#0066FF] transition-colors underline underline-offset-2"
                  >
                    Prefer direct email? xtisupport@gmail.com
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
