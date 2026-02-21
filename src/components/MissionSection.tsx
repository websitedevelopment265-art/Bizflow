import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function MissionSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/office-team/1920/1080"
          alt="Office Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0f172a]/95" /> {/* Deep Blue Overlay */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
              Our Mission Is To Simplify Business In Malaysia
            </h2>

            {/* Item 1 */}
            <div className="flex gap-6 mb-8">
              <div className="flex-shrink-0">
                <CheckCircle className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Highest Success Rate</h3>
                <p className="text-slate-300 leading-relaxed">
                  We focus on compliance-first execution, accurate documentation, and regulatory alignment to ensure approvals are completed efficiently and correctly.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-b border-dashed border-slate-600 mb-8 ml-16" />

            {/* Item 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <CheckCircle className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">Building Reliable Business Experiences</h3>
                <p className="text-slate-300 leading-relaxed">
                  We deliver structured processes, clear communication, and dependable support so clients experience smooth, stress-free outcomes at every stage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Images Composition */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] hidden lg:block"
          >
            {/* Decorative Squiggles */}
            <svg className="absolute top-10 right-10 w-32 h-32 text-cyan-400 z-10" viewBox="0 0 100 100" fill="none">
              <path d="M10,50 Q30,10 50,50 T90,50" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
            </svg>
            <svg className="absolute bottom-20 left-10 w-32 h-32 text-blue-400 z-10" viewBox="0 0 100 100" fill="none">
              <path d="M10,50 Q30,90 50,50 T90,50" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8" strokeLinecap="round" />
            </svg>

            {/* Large Circle Image (Top Left) */}
            <div className="absolute top-0 left-10 w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-20">
              <img 
                src="https://picsum.photos/seed/woman-working/400/400" 
                alt="Professional working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Medium Circle Image (Middle Right) */}
            <div className="absolute top-40 right-0 w-64 h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10">
              <img 
                src="https://picsum.photos/seed/team-meeting/400/400" 
                alt="Team meeting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Medium Circle Image (Bottom Center) */}
            <div className="absolute bottom-0 left-32 w-72 h-72 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-30">
              <img 
                src="https://picsum.photos/seed/relaxed-work/400/400" 
                alt="Stress-free work" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
