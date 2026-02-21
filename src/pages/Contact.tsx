import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import Newsletter from '../components/Newsletter';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team will get back to you shortly.');
  };

  return (
    <div className="flex-grow bg-white">
      {/* Header Section */}
      <section className="bg-[#1B2B45] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/63/e1/25/63e125af0f5b96f7cd39592ae78da5e4.jpg" 
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
            Ready to Scale Your Business in Malaysia? Let's Talk.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We have assisted over 2,000+ individuals and companies in navigating the complex Malaysian regulatory landscape with our 100% Compliance Approach.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-black text-[#1B2B45] mb-8 tracking-tight uppercase">Contact Details</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="bg-pink-500/10 p-4 rounded-2xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      <MapPin className="h-8 w-8 text-pink-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#1B2B45] uppercase tracking-wider mb-1">Office Address</h3>
                      <p className="text-slate-500 font-medium text-lg">Level 33, Ilham Tower, No. 8, Jalan Binjai, 50450 Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="bg-pink-500/10 p-4 rounded-2xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      <Mail className="h-8 w-8 text-pink-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#1B2B45] uppercase tracking-wider mb-1">Email Address</h3>
                      <p className="text-slate-500 font-medium text-lg">info@bizskoop.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="bg-pink-500/10 p-4 rounded-2xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                      <Phone className="h-8 w-8 text-pink-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#1B2B45] uppercase tracking-wider mb-1">Phone Number</h3>
                      <p className="text-slate-500 font-medium text-lg">+60 3-2117 5000</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Element */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-center gap-6">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <ShieldCheck className="h-10 w-10 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#1B2B45] uppercase tracking-[0.2em] mb-1">Trust & Security</h4>
                  <p className="text-slate-500 text-sm font-medium">We value your privacy. Your data is handled with 100% Compliance Approach.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a1930] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
              
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    required 
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Professional Email</label>
                  <input 
                    type="email" 
                    placeholder="Your Business Email" 
                    required 
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Your Contact Number" 
                    required 
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Service Interest</label>
                  <select 
                    required 
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected className="bg-[#0a1930]">Select a Service</option>
                    <option value="Startups" className="bg-[#0a1930]">Startups</option>
                    <option value="Tech" className="bg-[#0a1930]">Tech</option>
                    <option value="Finance" className="bg-[#0a1930]">Finance</option>
                    <option value="Interviews" className="bg-[#0a1930]">Interviews</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                  <textarea 
                    placeholder="How can we assist you today?" 
                    rows={5} 
                    required 
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-6 bg-pink-500 text-white font-black text-2xl rounded-2xl hover:bg-pink-600 transition-all shadow-[0_10px_30px_rgba(233,30,99,0.3)] transform hover:-translate-y-1"
                >
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
