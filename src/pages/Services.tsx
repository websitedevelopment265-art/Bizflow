import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { categoryDescriptions } from '../constants/categoryDescriptions';
import Newsletter from '../components/Newsletter';
import { useState, useEffect } from 'react';
import { Article } from '../types';

export default function Services() {
  const { category } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const activeCategory = category || "All";
  const catContent = activeCategory !== "All" ? categoryDescriptions[activeCategory] : null;

  useEffect(() => {
    if (activeCategory !== "All") {
      const fetchArticles = async () => {
        setLoading(true);
        try {
          const response = await fetch(`/api/articles?category=${activeCategory}`);
          const data = await response.json();
          setArticles(data);
        } catch (error) {
          console.error("Error fetching articles:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchArticles();
    }
  }, [activeCategory]);

  return (
    <div className="flex-grow bg-white">
      {activeCategory === "All" ? (
        /* All Services Landing Page */
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black text-[#001f3f] mb-8 tracking-tighter"
              >
                OUR SERVICES
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium"
              >
                Comprehensive business solutions tailored for the market. Explore our core areas of expertise.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(categoryDescriptions).map(([key, content], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-[#001f3f] p-12 rounded-3xl text-white hover:bg-[#001a35] transition-all duration-500 shadow-2xl flex flex-col h-full relative overflow-hidden"
                >
                  {/* Decorative Background Icon/Pattern */}
                  <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <div className="text-9xl font-black">{key.charAt(0)}</div>
                  </div>

                  <h3 className="text-4xl font-black mb-6 tracking-tighter group-hover:text-[#ff007f] transition-colors">
                    {key.toUpperCase()}
                  </h3>
                  <p className="text-xl text-slate-300 mb-10 font-medium leading-relaxed">
                    {content.subheadline}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      to={`/services/${key}`}
                      className="inline-flex items-center bg-white text-[#0a1930] px-10 py-4 rounded-xl font-black text-lg group-hover:bg-[#ff007f] group-hover:text-white transition-all transform group-hover:translate-x-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        /* Specific Category Page */
        <>
          {catContent && (
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
              {/* Background Image Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={catContent.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover opacity-40" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none">
                    {activeCategory.toUpperCase()}
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-bold text-pink-500 mb-10">
                    {catContent.subheadline}
                  </h2>
                  <div className="space-y-6 max-w-5xl">
                    {catContent.description.map((line, i) => (
                      <p key={i} className="text-xl md:text-3xl text-slate-300 font-medium leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>

                  {catContent.bullets && (
                    <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
                      {catContent.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center space-x-6 text-2xl font-black">
                          <span className="h-4 w-4 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(233,30,99,0.5)]"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </section>
          )}

          {/* Articles Grid for Category */}
          <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <h2 className="text-4xl font-black text-[#001f3f] tracking-tight">LATEST {activeCategory.toUpperCase()} INSIGHTS</h2>
              </div>
              
              {loading ? (
                <div className="text-center py-20">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent" />
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {articles.map((article) => (
                    <motion.div 
                      key={article.id} 
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden transition-all"
                    >
                      <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
                      <div className="p-8">
                        <span className="text-xs font-black text-pink-500 uppercase tracking-[0.2em]">{article.category}</span>
                        <h3 className="text-2xl font-black text-[#001f3f] mt-3 mb-4 line-clamp-2 leading-tight">{article.title}</h3>
                        <p className="text-slate-500 text-base mb-6 line-clamp-3 font-medium">{article.excerpt}</p>
                        <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                          <span className="text-sm text-slate-400 font-bold">{article.date}</span>
                          <Link to={`/article/${article.id}`} className="text-sm font-black text-[#001f3f] hover:text-[#ff007f] transition-colors">READ MORE →</Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Category Specific Contact Form */}
          <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#001f3f] rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff007f]/5 rounded-full blur-3xl -mr-32 -mt-32" />
                <h2 className="text-4xl md:text-5xl font-black mb-12 text-center tracking-tighter">
                  {catContent?.formTitle || "GET IN TOUCH"}
                </h2>
                <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Request sent!'); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Name</label>
                      <input type="text" placeholder="Your Full Name" required className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Email</label>
                      <input type="email" placeholder="Your Email Address" required className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                    <textarea placeholder="How can we help you?" rows={5} required className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"></textarea>
                  </div>
                  <button type="submit" className="w-full py-6 bg-[#ff007f] text-white font-black text-2xl rounded-2xl hover:bg-[#ff007f]/90 transition-all shadow-[0_10px_30px_rgba(255,0,127,0.3)] transform hover:-translate-y-1">
                    SUBMIT REQUEST
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}
      <Newsletter />
    </div>
  );
}
