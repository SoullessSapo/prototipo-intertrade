import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-50/50 flex font-sans">
      <Sidebar />
      <div className="flex-1 ml-72 relative">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none fixed"></div>
        
        <Header title={title} />
        <main className="pt-28 px-10 pb-12 relative z-0">
          <div className="max-w-7xl mx-auto animate-fade-in-up">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
