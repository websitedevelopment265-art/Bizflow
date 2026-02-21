import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Article } from '../types';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import ArticleGrid from '../components/ArticleGrid';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticleData = async () => {
      setLoading(true);
      try {
        // Fetch article details
        const response = await fetch(`/api/articles/${id}`);
        if (!response.ok) throw new Error('Article not found');
        const data = await response.json();
        setArticle(data);

        // Fetch related articles (same category, excluding current)
        const relatedResponse = await fetch(`/api/articles?category=${data.category}&exclude=${id}`);
        const relatedData = await relatedResponse.json();
        setRelatedArticles(relatedData.slice(0, 3)); // Limit to 3
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticleData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-brand-blue border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-4 text-slate-500">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Article not found</h2>
        <Link to="/" className="text-brand-blue hover:underline mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative h-[400px] w-full bg-slate-900">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 pb-12">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to News
          </Link>
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-brand-blue rounded">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center text-slate-300 text-sm space-x-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {article.date}
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="lead text-xl text-slate-600 font-medium mb-8 border-l-4 border-brand-blue pl-4">
            {article.excerpt}
          </p>
          {/* Using dangerouslySetInnerHTML for the mock HTML content, 
              in a real app with markdown we'd use ReactMarkdown */}
          <div dangerouslySetInnerHTML={{ __html: article.content || '' }} />
        </div>

        {/* Tags/Share (Placeholder) */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-500">Tags: {article.category}, Business, Insights</span>
            </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-slate-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Insights</h2>
            <ArticleGrid articles={relatedArticles} />
          </div>
        </div>
      )}
    </div>
  );
}
