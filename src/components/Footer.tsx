import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const footerSliderImages = [
  "https://i.pinimg.com/1200x/2e/1a/93/2e1a93a0250c4a768b82e708b53e7364.jpg",
  "https://i.pinimg.com/1200x/a4/ba/1d/a4ba1d9c6cc62d6791063ecb6f2f4210.jpg",
  "https://i.pinimg.com/736x/6d/82/89/6d828901b9b3788b1cefd2cf3daff1de.jpg",
  "https://i.pinimg.com/1200x/63/e1/25/63e125af0f5b96f7cd39592ae78da5e4.jpg"
];

export default function Footer() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % footerSliderImages.length);
    }, 7000); // Slightly slower than hero for variety

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#0a1930] text-slate-300 py-16 relative overflow-hidden">
      {/* Background Image Slider Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={footerSliderImages[currentImageIndex]}
              alt="Footer Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* World Map Background Pattern Overlay (Layered on top of slider) */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/world-map.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="bg-white text-[#0a1930] rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl pb-1 shadow-lg">b</div>
              <span className="text-3xl font-bold text-white tracking-tight">biz<span className="font-light">skoop</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 font-medium">
              <span className="font-bold italic text-white">Bizskoop</span> simplifies business in Malaysia by providing expert support in company registration, business licensing, visas, and regulatory compliance. Trusted by 500+ companies for reliable and compliant business solutions.
            </p>
          </div>
          
          {/* Main Menu */}
          <div>
            <h4 className="text-white font-bold mb-8 text-xl tracking-tight">Main Menu</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-8 text-xl tracking-tight">Services</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/services/Startups" className="hover:text-white transition-colors">Startup Consulting</Link></li>
              <li><Link to="/services/Tech" className="hover:text-white transition-colors">Tech Revolution</Link></li>
              <li><Link to="/services/Finance" className="hover:text-white transition-colors">Strategic Finance</Link></li>
              <li><Link to="/services/Interviews" className="hover:text-white transition-colors">Leadership Interviews</Link></li>
              <li><Link to="/services/News & Blogs" className="hover:text-white transition-colors">News & Blogs</Link></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-white font-bold mb-8 text-xl tracking-tight">Get In Touch</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-white flex-shrink-0" />
                </div>
                <span className="leading-relaxed">Level 33, Ilham Tower, No. 8, Jalan Binjai, 50450 Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                    <Phone className="h-4 w-4 text-white flex-shrink-0" />
                </div>
                <span>+60 3-2117 5000</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                    <Mail className="h-4 w-4 text-white flex-shrink-0" />
                </div>
                <span>info@bizskoop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
          <p className="text-slate-400">All Copyright & Reserved ©2026 Bizskoop. Designed by FixGure</p>
          <div className="flex space-x-2 mt-6 md:mt-0">
            <a href="#" className="bg-white w-9 h-9 flex items-center justify-center rounded-sm text-[#0a1930] hover:bg-blue-100 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="bg-white w-9 h-9 flex items-center justify-center rounded-sm text-[#0a1930] hover:bg-blue-100 transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="bg-white w-9 h-9 flex items-center justify-center rounded-sm text-[#0a1930] hover:bg-blue-100 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="bg-white w-9 h-9 flex items-center justify-center rounded-sm text-[#0a1930] hover:bg-blue-100 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
