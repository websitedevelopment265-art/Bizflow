import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Newsletter from '../components/Newsletter';

const newsItems = [
  {
    tag: "Latest Insights",
    category: "Digital Economy",
    title: "Malaysia's 2026 Digital Blueprint: A New Era for SMEs",
    summary: "The government's latest digital roadmap outlines a massive shift towards AI-driven public services and enhanced digital infrastructure. This blueprint aims to empower small and medium enterprises by providing easier access to cloud technologies and digital grants, ensuring Malaysia remains a competitive force in the global digital economy.",
    date: "February 21, 2026",
    author: "Bizskoop Editorial",
    image: "https://picsum.photos/seed/digital-blueprint/800/500"
  },
  {
    tag: "Latest Insights",
    category: "Finance",
    title: "BNM Announces New Guidelines for Digital Asset Trading",
    summary: "Bank Negara Malaysia (BNM) has introduced a comprehensive regulatory framework for digital asset exchanges. These guidelines focus on investor protection, anti-money laundering (AML) compliance, and market integrity. For businesses involved in digital assets, this marks a significant step towards institutional acceptance and long-term stability in the local market.",
    date: "February 19, 2026",
    author: "Financial Desk",
    image: "https://picsum.photos/seed/bnm-finance/800/500"
  },
  {
    tag: "Latest Insights",
    category: "Tech",
    title: "5G Infrastructure Expansion: Connecting East Malaysia",
    summary: "The rollout of 5G infrastructure is accelerating in Sabah and Sarawak, aiming to bridge the digital divide between East and Peninsular Malaysia. This expansion is expected to unlock new opportunities in smart agriculture, remote education, and digital tourism, providing a much-needed boost to the regional economy and local tech startups.",
    date: "February 15, 2026",
    author: "Tech Correspondent",
    image: "https://picsum.photos/seed/5g-east/800/500"
  }
];

export default function News() {
  return (
    <div className="flex-grow bg-white">
      {/* Header Section */}
      <section className="bg-[#1B2B45] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/2e/1a/93/2e1a93a0250c4a768b82e708b53e7364.jpg" 
            alt="" 
            className="w-full h-full object-cover opacity-20" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B2B45]/80 via-[#1B2B45]/60 to-[#1B2B45]/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase"
          >
            LATEST INDUSTRY NEWS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Stay ahead with real-time updates on Malaysia's evolving business, tech, and financial landscape.
          </motion.p>
        </div>
      </section>

      {/* News Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {newsItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[16/10]">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-lg">
                    {item.tag}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-sm font-black text-pink-500 uppercase tracking-[0.2em]">
                    <span>{item.category}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-[#1B2B45] leading-tight uppercase tracking-tighter group-hover:text-pink-500 transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                    {item.summary}
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#1B2B45]">
                      <User className="h-4 w-4 text-pink-500" />
                      <span>{item.author}</span>
                    </div>
                    <button className="flex items-center gap-2 text-pink-500 font-black uppercase tracking-widest hover:gap-4 transition-all">
                      Read Full Story <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
