import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Article } from '../types';

export default function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/articles?category=News & Blogs');
        const data = await response.json();
        setArticles(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (loading || articles.length === 0) return null;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-2 block">News & Blogs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B2B45]">
            Our Latest News & Blogs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              <Link to={`/article/${article.id}`} className="block relative h-64 overflow-hidden rounded-sm mb-6">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay for specific cards like the middle one in the image */}
                {index === 1 && (
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                        <h4 className="text-white font-bold text-lg mb-2">MyInvois Registration / Sandbox Malaysia</h4>
                        <p className="text-white/80 text-xs">(How to Start + Setup)</p>
                    </div>
                )}
              </Link>

              <div className="flex flex-col flex-grow text-center px-4">
                <Link to={`/article/${article.id}`}>
                  <h3 className="text-xl font-bold text-[#1B2B45] mb-4 hover:text-blue-700 transition-colors leading-tight">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-center space-x-2 text-xs text-slate-400 uppercase tracking-wider">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>No Comments</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
