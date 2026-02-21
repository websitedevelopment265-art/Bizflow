import { motion } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import Newsletter from '../components/Newsletter';

const faqs = [
  {
    question: "How do I register a startup in Malaysia?",
    answer: "Registering a startup in Malaysia primarily involves choosing a business structure, with the Private Limited Company (Sdn Bhd) being the most popular choice for scalability. You must register through the Companies Commission of Malaysia (SSM) via their online portal, MyCoID. The process requires appointing at least one company secretary and one director who resides in Malaysia. Our team provides end-to-end support, from name reservation to final incorporation documents, ensuring you meet all legal requirements from day one."
  },
  {
    question: "What are the latest tech compliance standards for SMEs?",
    answer: "For SMEs in Malaysia, tech compliance is increasingly focused on data protection and cybersecurity, governed by the Personal Data Protection Act (PDPA) 2010. Additionally, businesses must now prepare for mandatory e-Invoicing implementation through the LHDN MyInvois portal, which requires specific technical integrations. SMEs are also encouraged to follow the CyberSecurity Malaysia guidelines to protect digital assets. We help businesses audit their current systems and implement the necessary protocols to stay 100% compliant with evolving ASEAN tech standards."
  },
  {
    question: "Do you provide personalized financial consulting?",
    answer: "Yes, Bizskoop offers highly personalized financial consulting tailored to the unique needs of both startups and established corporations. Our services include strategic wealth management, corporate tax planning, and detailed financial analysis to help you navigate market volatility. We use data-driven insights to help you hedge against currency fluctuations and optimize your investment portfolio. Whether you need a one-time analysis or ongoing advisory, our experts work closely with you to ensure your financial strategy aligns with your long-term growth goals."
  },
  {
    question: "How can I book an interview with your team?",
    answer: "Booking an interview with the Bizskoop editorial team is a straightforward process designed to highlight industry leadership and innovation. You can submit a request through our 'Contact Us' page by selecting 'Interview Request' from the subject dropdown. Please provide a brief overview of your professional background, your company's mission, and the specific topics you'd like to discuss. Our team reviews all submissions and will reach out to schedule a pre-interview consultation if there is a strong alignment with our 'Voices of Leadership' series."
  },
  {
    question: "What industries do you cover under your 100% Compliance Approach?",
    answer: "Our 100% Compliance Approach is designed to be comprehensive, covering a wide range of high-growth industries in Malaysia including Tech, Finance, Manufacturing, and Retail. We specialize in navigating the specific regulatory hurdles of the Fintech space, the semiconductor industry in Penang, and the burgeoning startup ecosystem in Kuala Lumpur. Our approach ensures that every aspect of your operation—from licensing and labor laws to tax and data security—meets the highest standards of Malaysian and international compliance. We provide peace of mind so you can focus entirely on scaling your business."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex-grow bg-white">
      {/* Header Section */}
      <section className="bg-[#001f3f] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/a4/ba/1d/a4ba1d9c6cc62d6791063ecb6f2f4210.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-20" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#001f3f]/80 via-[#001f3f]/60 to-[#001f3f]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase"
          >
            FREQUENTLY ASKED QUESTIONS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Find detailed answers to common queries about starting and growing your business in Malaysia.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-xl md:text-2xl font-black text-[#001f3f] uppercase tracking-tight group-hover:text-[#ff007f] transition-colors">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-pink-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-slate-400 flex-shrink-0 group-hover:text-pink-500 transition-colors" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="h-[2px] w-12 bg-pink-500 mb-6" />
                    <p className="text-slate-600 text-lg leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-[#0a1930] rounded-[3rem] p-12 text-white"
          >
            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Still have questions?</h3>
            <p className="text-slate-400 mb-8 text-lg">Our experts are ready to provide you with personalized guidance.</p>
            <a 
              href="/contact" 
              className="inline-block bg-pink-500 text-white font-black px-10 py-5 rounded-2xl hover:bg-pink-600 transition-all shadow-lg hover:-translate-y-1"
            >
              CONTACT AN EXPERT
            </a>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
