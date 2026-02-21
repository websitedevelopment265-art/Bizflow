import { Cloud, Brain, Send, Handshake, Phone, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Cloud,
    title: "Understand Your Requirements",
    description: "We review your business goals, industry, and regulatory needs to determine the correct structure and approvals."
  },
  {
    icon: Brain,
    title: "Plan & Prepare Documentation",
    description: "Our team prepares and verifies all forms, submissions, and supporting documents to meet compliance standards."
  },
  {
    icon: Send,
    title: "Submission & Follow-Up",
    description: "We handle submissions with relevant authorities and manage follow-ups, clarifications, and approvals on your behalf."
  },
  {
    icon: Handshake,
    title: "Approval & Ongoing Support",
    description: "Once approved, we provide guidance on renewals, compliance, and next steps to keep your business running smoothly."
  }
];

export default function WorkProcessSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#1B2B45] font-bold text-sm uppercase tracking-widest mb-2 block">Fast. Trust. Compliant.</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2B45]">
            Our Basic Work Process
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-[#1B2B45] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <step.icon className="h-9 w-9 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1B2B45] mb-4 leading-tight min-h-[3.5rem] flex items-center justify-center">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info Bar */}
        <div className="border-t border-slate-200 pt-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side */}
            <div className="flex items-center gap-6 max-w-2xl">
                <div className="flex-shrink-0">
                    <Phone className="h-12 w-12 text-slate-400" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Trusted by hundreds of companies and individuals, Bizskoop delivers compliant, practical business solutions in Malaysia. <span className="font-bold text-[#1B2B45]">Speak to our team today for professional support you can rely on.</span>
                </p>
            </div>

            {/* Right Side */}
            <div className="bg-white px-8 py-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="flex-shrink-0">
                    <HelpCircle className="h-10 w-10 text-slate-400" />
                </div>
                <div>
                    <span className="block text-2xl font-bold text-[#1B2B45]">+60 11-2424 4993</span>
                    <span className="text-slate-500 text-sm">Have any Questions?</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
