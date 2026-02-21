import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';

export default function AboutSection() {
  return (
    <section className="bg-white pb-20">
      {/* Stats Banner - Overlapping the bottom of Hero or sitting right below */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Stat Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex shadow-xl"
          >
            <div className="w-1/3 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/office1/400/300" 
                alt="Office meeting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-2/3 bg-[#001f3f] p-8 flex items-center justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center leading-tight">
                <AnimatedCounter to={500} suffix="+" /> Companies <br/> Served
              </h3>
            </div>
          </motion.div>

          {/* Stat Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex shadow-xl"
          >
            <div className="w-1/3 relative overflow-hidden">
              <img 
                src="https://picsum.photos/seed/office2/400/300" 
                alt="Consultation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-2/3 bg-[#ff007f] p-8 flex items-center justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center leading-tight">
                <AnimatedCounter to={2000} suffix="+" /> Individuals <br/> Assisted
              </h3>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Images Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Vertical Image */}
            <div className="w-4/5 h-[600px] relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://picsum.photos/seed/meeting/600/800" 
                alt="Business Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Smaller Image */}
            <div className="absolute top-1/2 -right-4 w-3/5 h-[300px] border-8 border-white rounded-lg shadow-xl overflow-hidden hidden md:block">
              <img 
                src="https://i.pinimg.com/1200x/56/dc/df/56dcdf6d72685cb4efaed2473df4725e.jpg" 
                alt="Client Discussion" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Experience Box */}
            <div className="absolute bottom-0 left-0 bg-[#001f3f] text-white p-8 w-48 text-center shadow-lg rounded-tr-lg">
              <span className="block text-4xl font-bold mb-1">
                <AnimatedCounter to={12} suffix="+" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider">Experiences</span>
            </div>
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pl-8"
          >
            <span className="text-[#001f3f] font-bold text-sm uppercase tracking-widest mb-2 block">About Bizskoop</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001f3f] mb-6 leading-tight">
              We Execute Our Ideas From Start To Finish
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Bizskoop supports businesses and individuals in Malaysia with company registration, licensing, immigration, visa services, and regulatory compliance. We provide structured, compliant, and transparent guidance across every stage of the process.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              From initial consultation through final approval, we manage documentation, submissions, and regulatory coordination with the relevant authorities—ensuring accuracy, compliance, and operational efficiency.
            </p>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
              <ul className="space-y-4">
                <li className="flex items-center text-slate-700 font-medium">
                  <Check className="h-5 w-5 text-[#ff007f] mr-3" />
                  End-to-End Execution
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <Check className="h-5 w-5 text-[#ff007f] mr-3" />
                  Clear Client Guidance
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <Check className="h-5 w-5 text-[#ff007f] mr-3" />
                  Strategic & Compliant Planning
                </li>
              </ul>

              {/* Successful Case Box */}
              <div className="bg-[#001f3f] text-white p-6 text-center rounded shadow-lg min-w-[180px]">
                <span className="block text-3xl font-bold mb-1">
                  <AnimatedCounter to={1500} suffix="+" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider">Successful Case</span>
              </div>
            </div>

            <button className="bg-[#ff007f] hover:bg-[#ff007f]/90 text-white font-bold py-4 px-8 rounded shadow-md transition-colors">
              Discover More
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
