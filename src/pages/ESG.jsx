import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  Leaf, 
  Wind, 
  Droplets, 
  Zap, 
  Download, 
  FileCheck, 
  AlertTriangle,
  TrendingDown
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const carbonData = [
  { name: 'Ocean Freight', value: 65, color: '#0053A4' },
  { name: 'Air Freight', value: 20, color: '#3B82F6' },
  { name: 'Road Transport', value: 10, color: '#10B981' },
  { name: 'Warehousing', value: 5, color: '#F59E0B' },
];

const emissionTrend = [
  { month: 'Jun', amount: 420 },
  { month: 'Jul', amount: 380 },
  { month: 'Aug', amount: 350 },
  { month: 'Sep', amount: 310 },
  { month: 'Oct', amount: 290 },
];

const ESG = () => {
  return (
    <Layout title="Audit & ESG Impact">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Impact Dashboard */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <div className="flex items-center gap-3 mb-2 text-emerald-700">
                <Leaf className="w-5 h-5" />
                <span className="font-semibold">Carbon Footprint</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2,450 <span className="text-sm font-normal text-gray-500">tCO2e</span></h3>
              <p className="text-xs text-emerald-600 flex items-center mt-2">
                <TrendingDown className="w-3 h-3 mr-1" />
                12% reduction YTD
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 mb-2 text-blue-700">
                <Wind className="w-5 h-5" />
                <span className="font-semibold">Clean Energy</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">45% <span className="text-sm font-normal text-gray-500">Renewable</span></h3>
              <p className="text-xs text-gray-500 mt-2">Target: 60% by 2026</p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <div className="flex items-center gap-3 mb-2 text-amber-700">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold">Social Risks</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">2 <span className="text-sm font-normal text-gray-500">Active</span></h3>
              <p className="text-xs text-amber-600 mt-2">Requires attention</p>
            </div>
          </div>

          {/* Charts Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Breakdown Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Emission Sources</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={carbonData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {carbonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 text-xs text-gray-500 mt-2">
                {carbonData.map((item, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Trend Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Reduction Trajectory</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={emissionTrend}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="amount" fill="#10B981" radius={[4, 4, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Reports */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Audit Reports</h3>
            <div className="space-y-3">
              {[
                { name: 'Q3 2024 Sustainability Report', date: 'Oct 01, 2024', size: '2.4 MB' },
                { name: 'Supply Chain Ethics Audit', date: 'Sep 15, 2024', size: '1.8 MB' },
                { name: 'Carbon Offset Certificate', date: 'Aug 30, 2024', size: '0.5 MB' },
              ].map((file, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2 rounded border border-gray-200 text-gray-500">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.date} • {file.size}</p>
                    </div>
                  </div>
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                </div>
              ))}
            </div>
            <button className="w-full mt-4 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
              View All Reports
            </button>
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <h4 className="font-bold">Eco-Route Optimization</h4>
                <p className="text-xs text-emerald-200">AI Recommendation</p>
              </div>
            </div>
            <p className="text-sm text-emerald-100 mb-4 leading-relaxed">
              Switching the Rotterdam-NY route to rail for the final leg could save <span className="font-bold text-white">12% CO2</span> and reduce costs by <span className="font-bold text-white">$4,200</span>.
            </p>
            <button className="w-full bg-white text-emerald-900 py-2 rounded-lg text-sm font-bold hover:bg-emerald-50 transition-colors">
              Apply Recommendation
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ESG;
