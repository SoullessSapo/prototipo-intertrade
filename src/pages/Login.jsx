import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, ShieldCheck, Play } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [is2FA, setIs2FA] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (!is2FA) {
        setIs2FA(true);
      } else {
        navigate('/dashboard');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden flex items-center justify-center">
      {/* Abstract Background Waves (Simulated with SVG) */}
      <div className="absolute top-0 right-0 w-2/3 h-full pointer-events-none opacity-80">
        <svg viewBox="0 0 1000 1000" className="w-full h-full animate-pulse-slow">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7C3AED', stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          <path d="M800,200 Q900,100 1000,200 T1200,400 T1000,600 T800,800 T600,600 T400,400 T600,200 Z" fill="none" stroke="url(#grad1)" strokeWidth="2" className="animate-spin-slow origin-center" />
          {/* Concentric Circles / Waves */}
          {[...Array(10)].map((_, i) => (
            <circle 
              key={i} 
              cx="800" 
              cy="500" 
              r={100 + i * 40} 
              fill="none" 
              stroke={`rgba(124, 58, 237, ${0.1 + i * 0.05})`} 
              strokeWidth="1.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[128px]"></div>

      {/* Main Content Container */}
      <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center justify-between h-full">
        
        {/* Left Side: Text & Form */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
               <div className="w-3 h-3 bg-black rounded-full"></div>
            </div>
            <span className="font-bold text-lg tracking-widest uppercase">InterTrade One</span>
          </div>

          {/* Hero Text */}
          <h1 className="text-7xl font-bold tracking-tight mb-6">
            Welcome<span className="text-blue-500">.</span>
          </h1>
          
          {/* Search / Input Bar (Styled as the reference) */}
          <form onSubmit={handleLogin} className="relative max-w-md group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-black/50 backdrop-blur-md border border-white/20 rounded-full flex items-center p-1.5 pr-2 transition-colors hover:border-white/40">
              <Search className="w-5 h-5 text-gray-400 ml-4" />
              <input 
                type={is2FA ? "text" : "password"} // Simple toggle for demo
                placeholder={is2FA ? "Enter 2FA Code..." : "Enter Password to Access..."}
                className="bg-transparent border-none text-white placeholder-gray-400 focus:ring-0 w-full px-4 py-2 outline-none"
                disabled={isLoading}
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all flex items-center gap-2"
              >
                {isLoading ? 'Loading...' : is2FA ? 'Verify' : 'Sign In'}
                {!isLoading && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </form>

          {/* Secondary Actions */}
          <div className="flex items-center gap-6 mt-8">
            <button className="bg-cyan-500 text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-cyan-400 transition-colors">
              FREE TRIAL
            </button>
            <button className="text-gray-400 hover:text-white text-sm border border-white/20 px-6 py-2 rounded-full hover:border-white/50 transition-all">
              see more
            </button>
          </div>
        </div>

        {/* Right Side: Visuals (Handled by background SVG mostly, but can add specific elements) */}
        <div className="hidden md:block w-1/2 relative h-[600px]">
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right">
             <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-4 ml-auto animate-spin-slow">
                <div className="w-8 h-8 border-t-2 border-r-2 border-blue-500 rounded-full"></div>
             </div>
             <h2 className="text-4xl font-light mb-2">Landing page.</h2>
             <p className="text-gray-400 text-sm max-w-xs ml-auto leading-relaxed">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             </p>
          </div>
        </div>

      </div>

      {/* Footer Nav */}
      <div className="absolute top-8 right-8 hidden md:flex gap-8 text-xs font-bold tracking-widest text-gray-400 uppercase">
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Download</a>
        <a href="#" className="hover:text-white transition-colors">Pricing</a>
        <a href="#" className="hover:text-white transition-colors">Features</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500 transition-colors">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
