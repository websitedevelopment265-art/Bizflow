import { Check } from 'lucide-react';

export default function AboutSidebar() {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm sticky top-24">
      <span className="text-[#1B2B45] font-bold text-xs uppercase tracking-widest mb-2 block">About Bizskoop</span>
      <h3 className="text-2xl font-bold text-[#1B2B45] mb-4 leading-tight">
        We Execute Our Ideas From Start To Finish
      </h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        Bizskoop supports businesses and individuals in Malaysia with company registration, licensing, immigration, visa services, and regulatory compliance.
      </p>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        We provide structured, compliant, and transparent guidance across every stage of the process, ensuring accuracy and operational efficiency.
      </p>

      <ul className="space-y-3 mb-8">
        <li className="flex items-start text-slate-700 text-sm font-medium">
          <Check className="h-4 w-4 text-[#E91E63] mr-2 mt-0.5 flex-shrink-0" />
          End-to-End Execution
        </li>
        <li className="flex items-start text-slate-700 text-sm font-medium">
          <Check className="h-4 w-4 text-[#E91E63] mr-2 mt-0.5 flex-shrink-0" />
          Clear Client Guidance
        </li>
        <li className="flex items-start text-slate-700 text-sm font-medium">
          <Check className="h-4 w-4 text-[#E91E63] mr-2 mt-0.5 flex-shrink-0" />
          Strategic & Compliant Planning
        </li>
      </ul>

      <div className="bg-[#1B2B45] text-white p-6 rounded-lg text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
        <span className="block text-4xl font-bold mb-1 relative z-10">1500+</span>
        <span className="text-xs font-medium uppercase tracking-wider text-blue-200 relative z-10">Successful Cases</span>
      </div>
    </div>
  );
}
