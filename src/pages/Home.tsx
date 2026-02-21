import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import WhyChooseSection from '../components/WhyChooseSection';
import WorkProcessSection from '../components/WorkProcessSection';
import MissionSection from '../components/MissionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsSection from '../components/NewsSection';
import FAQSection from '../components/FAQSection';
import StatsSection from '../components/StatsSection';
import Newsletter from '../components/Newsletter';
import { Article } from '../types';
import { motion } from 'motion/react';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (searchQuery) params.append("search", searchQuery);

        const response = await fetch(`/api/articles?${params.toString()}`);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [searchQuery]);

  // Featured article is the first one in the list (or the most recent)
  const featuredArticle = articles.length > 0 ? articles[0] : null;

  return (
    <div className="flex-grow">
      {/* Search Results Header */}
      {searchQuery && (
        <section className="bg-slate-50 py-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl text-slate-600">
              Search results for: <span className="font-bold text-[#1B2B45]">"{searchQuery}"</span>
            </h2>
          </div>
        </section>
      )}

      {!searchQuery ? (
        <>
          <Hero article={featuredArticle} />
          <StatsSection />
          <AboutSection />
          <WhyChooseSection />
          <WorkProcessSection />
          <MissionSection />
          <TestimonialsSection />
          <NewsSection />
          <FAQSection />
        </>
      ) : (
        /* Search Results Articles Grid */
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent" />
              </div>
            ) : articles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <div key={article.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                    <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{article.category}</span>
                      <h3 className="text-xl font-bold text-[#1B2B45] mt-2 mb-3 line-clamp-2">{article.title}</h3>
                      <p className="text-slate-500 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                        <span className="text-xs text-slate-400">{article.date}</span>
                        <Link to={`/article/${article.id}`} className="text-sm font-bold text-[#1B2B45] hover:text-blue-700">Read More →</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      )}

      <Newsletter />
    </div>
  );
}
