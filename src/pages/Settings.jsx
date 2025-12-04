import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { 
  User, 
  Bell, 
  Lock, 
  Globe, 
  Moon, 
  Smartphone, 
  Save,
  Camera
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <Layout title="Settings">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          {/* Sidebar Nav */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-100 p-4">
            <div className="space-y-1">
              {[
                { id: 'profile', label: 'My Profile', icon: User },
                { id: 'notifications', label: 'Notifications', icon: Bell },
                { id: 'security', label: 'Security & Login', icon: Lock },
                { id: 'preferences', label: 'App Preferences', icon: Globe },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === item.id 
                      ? 'bg-white text-blue-600 shadow-sm ring-1 ring-gray-200' 
                      : 'text-gray-600 hover:bg-white hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8">
            {activeTab === 'profile' && (
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Public Profile</h2>
                  <p className="text-sm text-gray-500">Manage your personal information</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="relative group cursor-pointer">
                    <img 
                      src="https://ui-avatars.com/api/?name=Admin+User&background=0053A4&color=fff&size=128" 
                      alt="Profile" 
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                      Change Avatar
                    </button>
                    <p className="text-xs text-gray-400 mt-2">JPG, GIF or PNG. Max 1MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" defaultValue="Admin" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" defaultValue="User" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" defaultValue="admin@intertrade.com" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-gray-700">Role</label>
                    <input type="text" defaultValue="Global Logistics Manager" disabled className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed" />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
               <div className="space-y-8 animate-fade-in">
                 <div>
                   <h2 className="text-lg font-bold text-gray-900">App Preferences</h2>
                   <p className="text-sm text-gray-500">Customize your interface experience</p>
                 </div>

                 <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                     <div className="flex items-center gap-3">
                       <div className="p-2 bg-gray-100 rounded-lg">
                         <Moon className="w-5 h-5 text-gray-600" />
                       </div>
                       <div>
                         <p className="font-medium text-gray-900">Dark Mode</p>
                         <p className="text-xs text-gray-500">Switch between light and dark themes</p>
                       </div>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                       <input type="checkbox" className="sr-only peer" />
                       <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                     </label>
                   </div>

                   <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                     <div className="flex items-center gap-3">
                       <div className="p-2 bg-gray-100 rounded-lg">
                         <Smartphone className="w-5 h-5 text-gray-600" />
                       </div>
                       <div>
                         <p className="font-medium text-gray-900">Compact View</p>
                         <p className="text-xs text-gray-500">Increase information density</p>
                       </div>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                       <input type="checkbox" className="sr-only peer" />
                       <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                     </label>
                   </div>
                 </div>
               </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
