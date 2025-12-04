import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  Search, 
  ShieldAlert, 
  CheckCircle, 
  Globe, 
  FileText, 
  Zap, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

const Compliance = () => {
  return (
    <Layout title="Compliance AI Engine">
      <div className="max-w-5xl mx-auto">
        {/* Search Hero */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 text-white mb-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-blue-200">
              <Zap className="w-5 h-5" />
              <span className="font-semibold tracking-wide text-sm uppercase">AI Regulatory Scanner</span>
            </div>
            <h2 className="text-3xl font-bold mb-6">Verify International Trade Compliance</h2>
            
            <div className="bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 flex gap-4">
              <div className="flex-1 flex items-center px-4 bg-white rounded-lg text-gray-900">
                <Globe className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Enter destination country (e.g., Germany, Brazil)..." 
                  className="w-full py-3 bg-transparent outline-none placeholder-gray-400"
                />
              </div>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Simulate Route
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* High Risk Alerts */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-primary" />
              Active Risk Detections
            </h3>

            <div className="bg-white rounded-xl shadow-sm border border-red-100 p-6 flex gap-4">
              <div className="bg-red-50 p-3 rounded-lg h-fit">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">New EU Carbon Tax Regulation</h4>
                  <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">CRITICAL</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Effective Jan 1, 2025: All shipments to EU ports must declare carbon footprint data via CBAM portal. Non-compliance risks 15% tariff penalty.
                </p>
                <div className="flex gap-3">
                  <button className="text-sm font-medium text-red-600 hover:text-red-700 border border-red-200 px-3 py-1.5 rounded-lg bg-red-50">
                    View Requirements
                  </button>
                  <button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-amber-100 p-6 flex gap-4">
              <div className="bg-amber-50 p-3 rounded-lg h-fit">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">Updated Labeling Standards (Brazil)</h4>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">WARNING</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  INMETRO certification required for electronics. Ensure packaging includes Portuguese translation of safety warnings.
                </p>
                <button className="text-sm font-medium text-amber-600 hover:text-amber-700 border border-amber-200 px-3 py-1.5 rounded-lg bg-amber-50">
                  Check Guidelines
                </button>
              </div>
            </div>
          </div>

          {/* Compliance Score Card */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900">Compliance Health</h3>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="56" stroke="#E5E7EB" strokeWidth="12" fill="none" />
                  <circle cx="64" cy="64" r="56" stroke="#10B981" strokeWidth="12" fill="none" strokeDasharray="351" strokeDashoffset="35" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-gray-900">92%</span>
                  <span className="text-xs text-gray-500">Score</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Your compliance rating is excellent. 2 minor warnings pending.</p>
              <button className="w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800">
                Download Report
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h4 className="font-medium text-gray-900 mb-3 text-sm">Quick Checks</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Sanctions List Screening</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Dual-Use Goods Check</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>HS Code Classification</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Compliance;
