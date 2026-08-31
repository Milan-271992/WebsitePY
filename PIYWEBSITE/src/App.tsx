import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionsSlider from './components/SolutionsSlider';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'solutions-gallery', 'about', 'services', 'why-choose-us', 'expertise', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0066FF] selection:text-white">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <SolutionsSlider />
        <About />
        <Services />
        <WhyChooseUs />
        <Expertise />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick WhatsApp Action Button */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/917877358968?text=Hello%20Xtechinfra%20Technologies,%20I%20am%20interested%20in%20your%20IT%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-2xl shadow-emerald-500/30 hover:scale-105 transition-all duration-300 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline font-medium">WhatsApp Us</span>
        </a>
      </aside>
    </div>
  );
}

export default App;
