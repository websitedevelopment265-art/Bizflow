import { motion } from 'motion/react';

const stats = [
  { number: "500+", label: "Companies Served" },
  { number: "2,000+", label: "Individuals Assisted" },
  { number: "25+", label: "Industries Covered" },
  { number: "100%", label: "Compliance Approach" }
];

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/business-meeting/1920/1080"
          alt="Office Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0f172a]/90" /> {/* Dark Slate/Blue Overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Ready To Simplify Your Business In Malaysia?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl"
          >
            Get expert support for company registration, licensing, immigration, visas, and compliance — handled professionally from start to approval.
          </motion.p>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#E91E63] hover:bg-[#D81B60] text-white font-bold py-4 px-8 rounded shadow-lg transition-colors text-lg"
          >
            Get Expert Consultation
          </motion.button>
        </div>

        {/* Decorative Divider */}
        <div className="w-full h-px bg-white/20 mb-12 relative overflow-hidden">
             <div className="absolute inset-0 opacity-30" style={{ 
                 backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, #ffffff 4px, #ffffff 8px)' 
             }}></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg text-center hover:bg-white/10 transition-colors duration-300"
            >
              <span className="block text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</span>
              <span className="text-slate-300 font-medium text-sm md:text-base">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
