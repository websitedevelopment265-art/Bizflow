import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const reviews = [
  {
    id: 1,
    name: "Arsalan Sheikh",
    time: "2 months ago",
    rating: 5,
    text: "I’ve been following their Tech and Startup insights for a few months now. The depth of research they put into every article is remarkable. Highly professional and always up-to-date with market trends.",
    response: "Thank you Arsalan! We take pride in our research-driven approach."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    time: "1 month ago",
    rating: 5,
    text: "Finding reliable finance advice online can be tricky, but this platform makes it easy. Their breakdown of complex economic shifts is clear and very helpful for small business owners like me.",
    response: "We're glad we could help, Sarah. Simplifying finance is one of our core missions."
  },
  {
    id: 3,
    name: "Rohan Mehta",
    time: "3 weeks ago",
    rating: 5,
    text: "The 'Interviews' section is my favorite. Getting first-hand insights from industry leaders is invaluable. The content is clean, bold, and very easy to navigate. Great job on the UI!",
    response: "Thanks Rohan! Our UI is designed to keep the focus on the stories that matter."
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    time: "2 weeks ago",
    rating: 5,
    text: "Excellent service and high-quality information. They helped our startup understand the compliance requirements much faster than we expected. A truly trustworthy partner for growth.",
    response: "Success for your startup is success for us, Elena. Glad to be part of your journey."
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    time: "1 week ago",
    rating: 5,
    text: "Very professional team. Whether it’s tech reviews or market analysis, the quality remains consistent. It’s rare to find a source that balances speed with accuracy so well.",
    response: "Consistency is key for us, Bilal. Thank you for noticing!"
  },
  {
    id: 6,
    name: "David Miller",
    time: "4 days ago",
    rating: 5,
    text: "Professionalism at its best. I engaged with them for a consulting inquiry via their contact form and received a detailed response within hours. Very impressed with the efficiency.",
    response: "Efficiency is our priority, David. We value your time."
  },
  {
    id: 7,
    name: "Amara Khan",
    time: "2 days ago",
    rating: 5,
    text: "The most authoritative voice in the local startup ecosystem right now. Their coverage of innovative business models is inspiring for the next generation of entrepreneurs.",
    response: "Thank you Amara! We aim to inspire and empower every day."
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-[#1B2B45] mb-6 leading-tight uppercase tracking-tighter">
            Trusted By Corporate Clients And Professionals Across Malaysia
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            Bizskoop Sdn. Bhd. is a trusted business consultancy in Malaysia, relied upon by corporate clients and professionals for compliant business solutions, regulatory advisory services, and reliable end-to-end execution.
          </p>
        </div>

        {/* Reviews Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left: Summary */}
            <div className="w-full lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-8">
              <h3 className="text-3xl font-black text-[#1B2B45] mb-2 tracking-tight">BIZSKOOP SDN BHD</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-5xl font-black text-orange-400">5.0</span>
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-500 text-sm mb-8 flex items-center gap-1 font-bold">
                Based on 124 reviews from <GoogleIcon />
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="bg-[#1a73e8] hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:-translate-y-1">
                  See all reviews
                </button>
                <button className="bg-[#1a73e8] hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2">
                  review us on <span className="bg-white rounded-full p-1"><GoogleIcon /></span>
                </button>
              </div>
            </div>

            {/* Right: Carousel Cards */}
            <div className="w-full lg:w-2/3 relative min-h-[400px]">
              {/* Navigation Arrows */}
              <button 
                onClick={prev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 text-slate-400 hover:text-pink-500 transition-all hover:scale-110 hidden md:block"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={next}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 text-slate-400 hover:text-pink-500 transition-all hover:scale-110 hidden md:block"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="relative h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {[reviews[currentIndex], reviews[(currentIndex + 1) % reviews.length]].map((review, idx) => (
                      <motion.div
                        key={review.id}
                        whileHover={{ y: -5, borderColor: "rgba(233, 30, 99, 0.3)" }}
                        className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative shadow-sm transition-all"
                      >
                        <div className="absolute top-8 right-8">
                          <GoogleIcon />
                        </div>
                        
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-full bg-[#1B2B45] flex items-center justify-center text-white font-black text-xl">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-black text-[#1B2B45] text-base tracking-tight">{review.name}</h4>
                            <span className="text-slate-400 text-xs font-bold">{review.time}</span>
                          </div>
                        </div>

                        <div className="flex text-orange-400 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>

                        <p className="text-slate-600 text-sm mb-6 leading-relaxed italic font-medium">
                          "{review.text}"
                        </p>

                        <div className="border-l-4 border-pink-500 pl-4 py-2 bg-white rounded-r-lg shadow-sm">
                          <p className="text-xs font-black text-[#1B2B45] mb-1 uppercase tracking-wider">Response from the owner</p>
                          <p className="text-xs text-slate-500 font-medium italic">{review.response}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Dots Pagination */}
              <div className="flex justify-center gap-3 mt-12">
                {reviews.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-pink-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
