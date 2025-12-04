import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Map, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  BarChart3, 
  Settings,
  LogOut,
  Globe,
  ChevronRight
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileText, label: 'Documents', path: '/documents' },
    { icon: Map, label: 'Tracking', path: '/tracking' },
    { icon: ShieldCheck, label: 'Compliance AI', path: '/compliance' },
    { icon: CreditCard, label: 'Finance', path: '/finance' },
    { icon: Users, label: 'Suppliers', path: '/suppliers' },
    { icon: BarChart3, label: 'ESG / Audit', path: '/esg' },
  ];

  return (
    <aside className="w-72 bg-[#001E3C] text-white flex flex-col h-screen fixed left-0 top-0 z-50 shadow-2xl">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-8 border-b border-white/10 bg-[#001529]">
        <div className="flex items-center gap-3 text-white font-display font-bold text-xl tracking-tight">
          <div className="bg-blue-500 p-1.5 rounded-lg shadow-lg shadow-blue-500/30">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <span>InterTrade One</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-1">
        <div className="px-4 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          Main Menu
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50 translate-x-1'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white hover:translate-x-1'
              }`
            }
          >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
              <span>{item.label}</span>
            </div>
            <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
               window.location.pathname === item.path ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'
            }`} />
          </NavLink>
        ))}

        <div className="mt-10 px-4 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          System
        </div>
        <NavLink
          to="/settings"
          className="group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-200 hover:translate-x-1"
        >
          <Settings className="w-5 h-5 opacity-80 group-hover:opacity-100" />
          <span>Settings</span>
        </NavLink>
      </nav>

      {/* User Profile / Footer */}
      <div className="p-6 border-t border-white/10 bg-[#001529]">
        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
          <div className="relative">
            <img
              src="https://ui-avatars.com/api/?name=Admin+User&background=0053A4&color=fff"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-blue-500/30"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#001529] rounded-full"></span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate group-hover:text-blue-400 transition-colors">Admin User</p>
            <p className="text-xs text-gray-400 truncate">Global Logistics Mgr.</p>
          </div>
          <button className="text-gray-500 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
