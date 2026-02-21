import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import AnimatedCounter from './AnimatedCounter';

interface StatBlockProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function StatBlock({ value, suffix, label, delay = 0 }: StatBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        backgroundColor: "rgba(30, 41, 59, 0.8)", // Darker slate
        borderColor: "rgba(255, 0, 127, 0.6)",
        boxShadow: "0 20px 40px -10px rgba(255, 0, 127, 0.3)"
      }}
      className="flex flex-col items-center justify-center p-10 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 group cursor-default relative overflow-hidden"
    >
      <div className="text-5xl md:text-7xl font-black text-white mb-3 tracking-tighter flex items-baseline drop-shadow-lg">
        <AnimatedCounter to={value} duration={2} />
        <span className="text-[#ff007f] ml-1 text-4xl md:text-6xl">{suffix}</span>
      </div>
      <div className="text-sm md:text-base font-bold text-slate-300 uppercase tracking-[0.15em] text-center group-hover:text-white transition-colors drop-shadow-md">
        {label}
      </div>
      
      {/* Decorative Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/5 to-transparent" />
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#001f3f] py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/90 via-[#001f3f]/80 to-[#001f3f]/90" />
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatBlock 
            value={500} 
            suffix="+" 
            label="Companies Served" 
            delay={0.1}
          />
          <StatBlock 
            value={2000} 
            suffix="+" 
            label="Individuals Assisted" 
            delay={0.2}
          />
          <StatBlock 
            value={25} 
            suffix="+" 
            label="Industries Covered" 
            delay={0.3}
          />
          <StatBlock 
            value={100} 
            suffix="%" 
            label="Compliance Approach" 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
