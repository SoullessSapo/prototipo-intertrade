import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  TrendingUp, 
  AlertTriangle, 
  Package, 
  DollarSign, 
  MoreHorizontal,
  FileText,
  CheckCircle,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', cost: 4000 },
  { name: 'Feb', cost: 3000 },
  { name: 'Mar', cost: 2000 },
  { name: 'Apr', cost: 2780 },
  { name: 'May', cost: 1890 },
  { name: 'Jun', cost: 2390 },
  { name: 'Jul', cost: 3490 },
];

const StatCard = ({ title, value, trend, icon: Icon, color, trendUp }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">{title}</p>
        <h3 className="text-3xl font-display font-bold text-gray-900 mt-1 tracking-tight">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl ${color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
    </div>
    <div className="flex items-center text-sm">
      <span className={`font-medium flex items-center px-2 py-0.5 rounded-full ${trendUp ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
        {trendUp ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
        {trend}
      </span>
      <span className="text-gray-400 ml-2">vs last month</span>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <Layout title="Global Dashboard">
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Active Shipments" 
          value="1,284" 
          trend="12.5%" 
          trendUp={true}
          icon={Package} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="Avg. Dispatch Time" 
          value="4.2d" 
          trend="2.1%" 
          trendUp={true} // Interpreting reduction in time as 'good' but visually green
          icon={Clock} 
          color="bg-indigo-500" 
        />
        <StatCard 
          title="Logistics Cost" 
          value="$2.4M" 
          trend="4.3%" 
          trendUp={false}
          icon={DollarSign} 
          color="bg-emerald-500" 
        />
        <StatCard 
          title="Risk Alerts" 
          value="23" 
          trend="5.0%" 
          trendUp={true} // More alerts is usually bad, but sticking to visual logic
          icon={AlertTriangle} 
          color="bg-amber-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Map Area (2/3 width) */}
        <div className="lg:col-span-2 space-y-8">
          {/* Map Widget */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
              <h3 className="font-display font-semibold text-gray-900">Live Shipment Tracking</h3>
              <button className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <div className="h-96 bg-[#F8FAFC] relative group">
              {/* Abstract Map Representation */}
              <div className="absolute inset-0 opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center grayscale contrast-[0.8]" />
              
              {/* Simulated Pins with Pulse */}
              <div className="absolute top-1/3 left-1/4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/20 animate-pulse" />
                <div className="absolute -top-8 -left-8 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Shanghai
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 group-hover:scale-110 transition-transform duration-300 delay-75">
                <div className="w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-500/20 animate-pulse" />
              </div>
              
              <div className="absolute top-1/4 right-1/4 group-hover:scale-110 transition-transform duration-300 delay-150">
                <div className="w-3 h-3 bg-amber-500 rounded-full ring-4 ring-amber-500/20 animate-pulse" />
                <div className="absolute -top-8 -left-8 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Rotterdam
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl text-xs shadow-lg border border-white/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="font-medium text-gray-700">On Time (85%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span className="font-medium text-gray-700">Delayed (15%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Chart */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-semibold text-gray-900">Logistics Cost Analysis</h3>
              <select className="text-sm border-gray-200 rounded-lg text-gray-500 bg-gray-50 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0053A4" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#0053A4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} dx={-10} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                    cursor={{stroke: '#CBD5E1', strokeWidth: 1, strokeDasharray: '4 4'}}
                  />
                  <Area type="monotone" dataKey="cost" stroke="#0053A4" strokeWidth={3} fillOpacity={1} fill="url(#colorCost)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Sidebar Widgets (1/3 width) */}
        <div className="space-y-8">
          {/* Pending Documents */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display font-semibold text-gray-900">Pending Documents</h3>
              <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded-full">3 New</span>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Commercial Invoice #402', type: 'Invoice', status: 'Review' },
                { name: 'Packing List #992', type: 'List', status: 'Pending' },
                { name: 'Bill of Lading #102', type: 'BL', status: 'Urgent' },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50/50 rounded-xl hover:bg-blue-50/50 transition-colors cursor-pointer group border border-transparent hover:border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm group-hover:border-blue-200 group-hover:shadow-blue-100 transition-all">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.type}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide ${
                    doc.status === 'Urgent' ? 'bg-rose-100 text-rose-600' : 
                    doc.status === 'Review' ? 'bg-amber-100 text-amber-600' : 
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-sm text-gray-500 font-medium hover:text-blue-600 transition-colors flex items-center justify-center gap-1 group">
              View All Documents
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Compliance Status */}
          <div className="bg-gradient-to-br from-[#001E3C] to-[#003A73] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
            
            <h3 className="font-display font-semibold mb-6 relative z-10">Compliance Health</h3>
            
            <div className="space-y-5 relative z-10">
              {[
                { region: 'North America', score: 98, color: 'bg-emerald-400' },
                { region: 'Europe', score: 92, color: 'bg-emerald-400' },
                { region: 'Asia Pacific', score: 85, color: 'bg-amber-400' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-blue-100">{item.region}</span>
                    <span className="font-bold">{item.score}%</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.5)]`} 
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 text-white py-2.5 rounded-xl text-sm font-medium transition-all">
              Detailed Report
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
