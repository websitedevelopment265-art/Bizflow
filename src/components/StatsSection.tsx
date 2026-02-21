import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface StatBlockProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function StatBlock({ value, suffix, label, delay = 0 }: StatBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
  });

  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderColor: "rgba(233, 30, 99, 0.5)"
      }}
      className="flex flex-col items-center justify-center p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group cursor-default"
    >
      <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter flex items-baseline">
        <span>{displayValue.toLocaleString()}</span>
        <span className="text-pink-500 ml-1">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-[0.2em] text-center group-hover:text-white transition-colors">
        {label}
      </div>
      
      {/* Decorative Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_30px_rgba(233,30,99,0.15)]" />
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#0a1930] py-24 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
