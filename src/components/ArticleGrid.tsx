import { Article } from '../types';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleGridProps {
  articles: Article[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Trending Insights</h2>
        <div className="h-1 flex-grow mx-4 bg-slate-100 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group flex flex-col bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <Link to={`/article/${article.id}`} className="block relative h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-brand-blue/90 rounded">
                  {article.category}
                </span>
              </div>
            </Link>

            <div className="p-6 flex flex-col flex-grow">
              <Link to={`/article/${article.id}`}>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                  {article.title}
                </h3>
              </Link>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-slate-900">{article.author}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tighter">{article.date}</span>
                </div>
                <Link to={`/article/${article.id}`} className="text-brand-blue hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      
      {articles.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500 italic">No articles found matching your criteria.</p>
        </div>
      )}
    </section>
  );
}
