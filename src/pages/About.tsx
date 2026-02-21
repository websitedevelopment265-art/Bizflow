import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="flex-grow bg-white">
      {/* Hero Section */}
      <section className="bg-[#1B2B45] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Empowering the Next Generation of Malaysian Business Leaders with Clarity and Insight.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2B45] mb-6">Our Story</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Bizskoop was born out of a simple observation: the path to starting and growing a business in Malaysia is often clouded by complex regulations and fragmented information. We saw entrepreneurs spending more time navigating bureaucracy than building their dreams. Our platform was created to bridge that gap. We started as a small team of consultants and researchers dedicated to demystifying the Malaysian business landscape, turning overwhelming data into actionable intelligence.
            </p>
          </div>

          {/* What We Offer */}
          <div className="mb-16 bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h2 className="text-3xl font-bold text-[#1B2B45] mb-6">What We Offer</h2>
            <ul className="space-y-4">
              {[
                { title: "In-Depth Business Analysis", desc: "We break down market trends and regulatory changes so you don't have to." },
                { title: "Step-by-Step Practical Guides", desc: "From Sdn Bhd registration to e-Invoicing compliance, we provide clear roadmaps for every stage of your business journey." },
                { title: "Tech & Startup Reviews", desc: "Honest evaluations of the tools and stories shaping the modern entrepreneurial ecosystem." },
                { title: "Regulatory Updates", desc: "Timely alerts on policy shifts from SSM, LHDN, and other key Malaysian authorities." },
                { title: "Expert Consultation", desc: "Direct access to professional advisory services for personalized business support." }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#E91E63] flex items-center justify-center text-white text-xs font-bold mt-1 mr-4 flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <span className="font-bold text-[#1B2B45] block">{item.title}</span>
                    <span className="text-slate-600">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1B2B45] mb-6">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              In the next five years, we aim to become Malaysia’s most trusted digital ecosystem for business intelligence. Our vision is to evolve from a news and advisory platform into a comprehensive resource hub where every entrepreneur—from a student with a big idea to a seasoned professional—can find the tools, knowledge, and community they need to scale globally while staying rooted in local compliance.
            </p>
          </div>

          {/* Why Trust Us */}
          <div className="border-t border-slate-200 pt-12">
            <h2 className="text-3xl font-bold text-[#1B2B45] mb-6">Why Trust Us</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              At Bizskoop, accuracy is our currency. Our commitment to research means we don't just report the news; we verify it. Every guide and article is vetted against official government sources and cross-referenced with industry experts. We avoid the hype and focus on the facts, ensuring that the information you rely on is as dependable as your own ambition.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
