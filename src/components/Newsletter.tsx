import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="bg-brand-blue py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stay Ahead of the Curve</h2>
        <p className="text-blue-100 mb-8 text-lg">
          Get the latest startup insights and business news delivered straight to your inbox every morning.
        </p>

        {status === 'success' ? (
          <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-white">
            <p className="font-medium">Thanks for subscribing! Check your email for a confirmation.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-6 py-3 rounded-lg bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {status === 'loading' ? 'Subscribing...' : (
                <>
                  Subscribe <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>
        )}
        <p className="mt-4 text-blue-200 text-xs">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
