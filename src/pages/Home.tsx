import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import WhyChooseSection from '../components/WhyChooseSection';
import WorkProcessSection from '../components/WorkProcessSection';
import MissionSection from '../components/MissionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Newsletter from '../components/Newsletter';
import { Article } from '../types';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const activeCategory = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (activeCategory !== "All") params.append("category", activeCategory);
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
  }, [activeCategory, searchQuery]);

  // Featured article is the first one in the list (or the most recent)
  const featuredArticle = articles.length > 0 ? articles[0] : null;

  return (
    <div className="flex-grow">
      {/* Only show Hero if not searching and on "All" category, or if it's the first result */}
      {activeCategory === "All" && !searchQuery && (
        <>
          <Hero article={featuredArticle} />
          <AboutSection />
          <CTASection />
          <WhyChooseSection />
          <WorkProcessSection />
          <MissionSection />
          <TestimonialsSection />
        </>
      )}

      {loading && (
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-blue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-4 text-slate-500">Loading latest insights...</p>
        </div>
      )}

      <Newsletter />
    </div>
  );
}
