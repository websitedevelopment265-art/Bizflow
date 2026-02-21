import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Phone, Mail, Clock, Facebook, Linkedin, Instagram, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Category } from '../types';

const categories: Category[] = ["All", "Startups", "Tech", "Finance", "Interviews", "News & Blogs"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery) {
      params.set("search", searchQuery);
    } else {
      params.delete("search");
    }
    navigate(`/?search=${encodeURIComponent(searchQuery)}`);
    setIsSearchOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#1B2B45] text-white py-2 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>+60 11-2424 4993</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>bizskoop@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Mon - Fri: 9:00 - 18:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-200 transition-colors"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="hover:text-blue-200 transition-colors"><Linkedin className="h-4 w-4" /></a>
            <a href="#" className="hover:text-blue-200 transition-colors"><Instagram className="h-4 w-4" /></a>
            {/* TikTok icon placeholder using a generic music note or similar if needed, or just text/svg */}
             <a href="#" className="hover:text-blue-200 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
             </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 shadow-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-[#1B2B45] text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl pb-1">b</div>
              <span className="text-2xl font-bold text-[#1B2B45] tracking-tight">bizskoop</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-[#1B2B45] font-bold text-sm tracking-wide hover:text-blue-700 transition-colors">HOME</Link>
              <Link to="/about" className="text-slate-500 font-medium text-sm tracking-wide hover:text-[#1B2B45] transition-colors">ABOUT</Link>
              <div className="relative group">
                <button className="flex items-center text-slate-500 font-medium text-sm tracking-wide hover:text-[#1B2B45] transition-colors focus:outline-none">
                  SERVICES <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                {/* Dropdown Placeholder */}
                <div className="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                        {categories.map(cat => (
                            <Link key={cat} to={cat === "All" ? "/services" : `/services/${cat}`} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1B2B45]">
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>
              </div>
              <Link to="/contact" className="text-slate-500 font-medium text-sm tracking-wide hover:text-[#1B2B45] transition-colors">CONTACT</Link>
              
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-slate-500 hover:text-[#1B2B45] transition-colors focus:outline-none"
              >
                <Search className="h-5 w-5" />
              </button>

              <Link to="#" className="bg-[#1B2B45] text-white px-6 py-3 rounded text-sm font-bold hover:bg-blue-900 transition-colors shadow-md">
                Get a Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
               <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-slate-500 hover:text-[#1B2B45] transition-colors focus:outline-none"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#1B2B45] hover:text-blue-700 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-md p-4 z-40 animate-in slide-in-from-top-2">
                <form onSubmit={handleSearchSubmit} className="max-w-3xl mx-auto relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-4 pr-12 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-[#1B2B45] focus:ring-1 focus:ring-[#1B2B45]"
                        autoFocus
                    />
                    <button type="submit" className="absolute right-3 top-3 text-slate-400 hover:text-[#1B2B45]">
                        <Search className="h-6 w-6" />
                    </button>
                </form>
            </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-[#1B2B45] font-bold text-base">HOME</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium text-base">ABOUT</Link>
            <div className="space-y-2 pl-4 border-l-2 border-slate-100">
                <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Services</span>
                {categories.map(cat => (
                    <Link key={cat} to={cat === "All" ? "/services" : `/services/${cat}`} onClick={() => setIsMenuOpen(false)} className="block text-slate-600 hover:text-[#1B2B45] text-sm">
                        {cat}
                    </Link>
                ))}
            </div>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-slate-600 font-medium text-base">CONTACT</Link>
            <Link to="#" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#1B2B45] text-white px-6 py-3 rounded font-bold hover:bg-blue-900 transition-colors">
                Get a Consultation
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
