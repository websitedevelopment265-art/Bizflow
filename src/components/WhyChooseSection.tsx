import { motion } from 'motion/react';

const reasons = [
  {
    id: 1,
    title: "Market Entry",
    description: "Setup, licensing, and compliance support"
  },
  {
    id: 2,
    title: "Local Expertise",
    description: "Navigate Malaysian regulations with confidence"
  },
  {
    id: 3,
    title: "Practical Solutions",
    description: "Clear, actionable business advice"
  },
  {
    id: 4,
    title: "Long-Term Growth",
    description: "Strong foundations for lasting success"
  }
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/kualalumpur/1920/1080"
          alt="Kuala Lumpur Skyline"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0a1930]/95" /> {/* Deep Blue Overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Why Choose Bizskoop
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-lg"
          >
            Trusted Business Services Provider in Malaysia
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start group"
            >
              <div className="flex-shrink-0 mr-6">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-2xl font-bold text-white group-hover:bg-white group-hover:text-[#0a1930] transition-colors duration-300">
                  {reason.id}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-slate-300 text-lg">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
