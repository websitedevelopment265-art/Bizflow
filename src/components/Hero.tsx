import { useState, useEffect } from 'react';
import { Article } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  article: Article | null;
}

const sliderImages = [
  "https://i.pinimg.com/1200x/2e/1a/93/2e1a93a0250c4a768b82e708b53e7364.jpg",
  "https://i.pinimg.com/1200x/a4/ba/1d/a4ba1d9c6cc62d6791063ecb6f2f4210.jpg",
  "https://i.pinimg.com/736x/6d/82/89/6d828901b9b3788b1cefd2cf3daff1de.jpg",
  "https://i.pinimg.com/1200x/63/e1/25/63e125af0f5b96f7cd39592ae78da5e4.jpg"
];

export default function Hero({ article }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: ''
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Consultation request sent!');
    setFormData({ name: '', email: '', phone: '', service: '' });
  };

  const displayTitle = article?.title || "Empowering Your Business Journey in Malaysia";
  const displayExcerpt = article?.excerpt || "Expert guidance on company registration, compliance, and strategic growth for startups and established enterprises.";
  const displayAuthor = article?.author || "Bizskoop Editorial";
  const displayDate = article?.date || "February 2026";
  const articleId = article?.id;

  return (
    <section className="relative w-full min-h-[600px] lg:h-[700px] overflow-hidden bg-slate-900 flex items-center">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={sliderImages[currentImageIndex]}
              alt={`Slide ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-slate-900/30 z-10" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content: Article Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider text-white uppercase bg-brand-blue rounded shadow-lg">
              {article ? "Latest Breaking News" : "Welcome to Bizskoop"}
            </span>
            {articleId ? (
              <Link to={`/article/${articleId}`} className="block group">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight group-hover:text-blue-200 transition-colors drop-shadow-md">
                  {displayTitle}
                </h1>
              </Link>
            ) : (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                {displayTitle}
              </h1>
            )}
            <p className="text-lg md:text-xl text-slate-200 mb-8 line-clamp-3 leading-relaxed drop-shadow-sm">
              {displayExcerpt}
            </p>
            <div className="flex items-center text-sm font-medium text-slate-300 space-x-6">
              <div className="flex items-center">
                <span className="w-8 h-[1px] bg-slate-400 mr-3"></span>
                <span>By {displayAuthor}</span>
              </div>
              <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
              <span>{displayDate}</span>
            </div>
          </motion.div>

          {/* Right Content: Consultation Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6 drop-shadow-md">
                Free Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-[#1B2B45] border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="abc@xyz.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-[#1B2B45] border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-1 ml-1">Contact Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      {/* Flag placeholder - using emoji for simplicity */}
                      <span className="text-lg">🇲🇾</span>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="012-3456 789"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-[#1B2B45] border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-200 mb-1 ml-1">Service Interested In</label>
                  <div className="relative">
                    <select
                      id="service"
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 bg-[#1B2B45] border border-slate-600 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-400">Select a service</option>
                      <option value="esd">ESD / MDEC / IRDA / JKTSM</option>
                      <option value="startup">Startup Advisory</option>
                      <option value="tech">Tech Consulting</option>
                      <option value="finance">Financial Planning</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 h-5 w-5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold py-3.5 px-4 rounded-lg shadow-lg transform transition hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E91E63] focus:ring-offset-slate-900"
                >
                  Get Free Consultation
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
