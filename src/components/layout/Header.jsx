import React from 'react';
import { Bell, Search, HelpCircle, ChevronDown } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200/60 flex items-center justify-between px-10 fixed top-0 right-0 left-72 z-40 transition-all duration-300">
      <div>
        <h1 className="text-2xl font-display font-bold text-gray-900 tracking-tight">{title}</h1>
        <p className="text-xs text-gray-500 mt-0.5">Welcome back, here's what's happening today.</p>
      </div>

      <div className="flex items-center gap-8">
        {/* Search Bar */}
        <div className="relative group">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="Search shipments, docs..."
            className="pl-10 pr-4 py-2.5 w-72 bg-gray-100/50 border border-transparent rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all shadow-sm"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
            <span className="text-[10px] font-mono bg-gray-200 px-1.5 py-0.5 rounded text-gray-500">⌘</span>
            <span className="text-[10px] font-mono bg-gray-200 px-1.5 py-0.5 rounded text-gray-500">K</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 border-l border-gray-200 pl-8">
          <button className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all">
            <HelpCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
