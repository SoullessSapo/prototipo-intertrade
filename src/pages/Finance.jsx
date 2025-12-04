import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  CreditCard, 
  DollarSign, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  Landmark, 
  FileText,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'HSBC', amount: 450000, color: '#db0011' },
  { name: 'Citi', amount: 320000, color: '#003b70' },
  { name: 'JPMorgan', amount: 280000, color: '#524c42' },
  { name: 'DBS', amount: 190000, color: '#ff3300' },
];

const Finance = () => {
  return (
    <Layout title="Financial Integration">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Financial Overview */}
        <div className="lg:col-span-2 space-y-8">
          {/* Credit Lines */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-gray-900">Active Credit Lines</h3>
              <button className="text-sm text-primary font-medium hover:text-primary-dark">Manage Banks</button>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#E5E7EB" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontSize: 14, fontWeight: 500}} width={80} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="amount" radius={[0, 4, 4, 0]} barSize={32}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-semibold text-gray-900">Recent Letter of Credit Activities</h3>
            </div>
            <table className="w-full text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Reference</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Beneficiary</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Amount</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Status</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">Blockchain</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { ref: 'LC-2024-882', ben: 'Shanghai Electronics Ltd', amt: '$124,500.00', status: 'Released', verified: true },
                  { ref: 'LC-2024-883', ben: 'Hamburg Logistics GmbH', amt: '$45,200.00', status: 'Pending', verified: true },
                  { ref: 'LC-2024-884', ben: 'Vietnam Textiles Co', amt: '$89,000.00', status: 'Processing', verified: false },
                ].map((tx, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{tx.ref}</td>
                    <td className="px-6 py-4 text-gray-600">{tx.ben}</td>
                    <td className="px-6 py-4 font-mono text-gray-900">{tx.amt}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        tx.status === 'Released' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {tx.verified ? (
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <span className="w-4 h-4 block bg-gray-200 rounded-full"></span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar Stats */}
        <div className="space-y-6">
          {/* Liquidity Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg">
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-gray-400 text-sm mb-1">Total Liquidity Available</p>
                <h3 className="text-3xl font-bold">$1,240,500.00</h3>
              </div>
              <div className="bg-white/10 p-2 rounded-lg">
                <Landmark className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1 bg-white/5 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Utilized</p>
                <p className="font-semibold">64%</p>
              </div>
              <div className="flex-1 bg-white/5 rounded-lg p-3">
                <p className="text-xs text-gray-400 mb-1">Rate (Avg)</p>
                <p className="font-semibold">4.2%</p>
              </div>
            </div>
          </div>

          {/* Risk Indicators */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Financial Risk Pulse</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                <div className="flex items-center gap-3">
                  <ArrowDownRight className="w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Currency Volatility</p>
                    <p className="text-xs text-red-600">EUR/USD -1.2%</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-red-700 bg-red-200 px-2 py-1 rounded">HIGH</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-3">
                  <ArrowUpRight className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Payment Efficiency</p>
                    <p className="text-xs text-green-600">+12% vs last Q</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-700 bg-green-200 px-2 py-1 rounded">GOOD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Finance;
