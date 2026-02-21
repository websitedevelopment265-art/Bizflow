import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "What does Bizskoop do?",
    answer: "Bizskoop provides end-to-end business solutions in Malaysia, including company incorporation, licensing, compliance, immigration, accounting and tax services."
  },
  {
    question: "Do you handle local council (PBT) licensing?",
    answer: "Yes. We manage PBT approvals including business premises licensing, signage permits, structural modification approvals, and local authority compliance."
  }
];

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // Both open by default as in image

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="bg-white">
      {/* Dark Blue Banner */}
      <div className="bg-[#0a1930] py-16 px-4 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-5xl mx-auto leading-tight">
          Ready to Start or Expand Your Business in Malaysia?
        </h2>
      </div>

      {/* FAQ Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-[#1B2B45]">
            Frequently Asked Questions (FAQ)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between bg-[#0a1930] text-white p-5 rounded-sm transition-colors hover:bg-[#152a4a]"
              >
                <span className="font-bold text-sm md:text-base text-left">{faq.question}</span>
                {openIndices.includes(index) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              
              <AnimatePresence>
                {openIndices.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 text-slate-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
