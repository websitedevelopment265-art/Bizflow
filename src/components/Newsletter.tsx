import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const newsletterSliderImages = [
  "https://i.pinimg.com/1200x/2e/1a/93/2e1a93a0250c4a768b82e708b53e7364.jpg",
  "https://i.pinimg.com/1200x/a4/ba/1d/a4ba1d9c6cc62d6791063ecb6f2f4210.jpg",
  "https://i.pinimg.com/736x/6d/82/89/6d828901b9b3788b1cefd2cf3daff1de.jpg",
  "https://i.pinimg.com/1200x/63/e1/25/63e125af0f5b96f7cd39592ae78da5e4.jpg"
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % newsletterSliderImages.length);
    }, 6000); // Different timing for variety

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subscribed!');
    setEmail('');
  };

  return (
    <section className="bg-[#1B2B45] py-10 border-b border-white/10 relative overflow-hidden">
      {/* Background Image Slider Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={newsletterSliderImages[currentImageIndex]}
              alt="Newsletter Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Subscribe To Our Newsletter</h2>
            <p className="text-slate-300 text-sm md:text-base">
              Sign up for our monthly newsletter for the latest news & articles
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex w-full lg:w-auto max-w-2xl gap-0">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-4 bg-white text-slate-900 focus:outline-none min-w-[200px] md:min-w-[400px]"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#0a1930] text-white font-bold hover:bg-black transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
