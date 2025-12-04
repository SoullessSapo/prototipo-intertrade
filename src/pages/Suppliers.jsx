import React from 'react';
import Layout from '../components/layout/Layout';
import { 
  Star, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  AlertCircle,
  CheckCircle2,
  Factory
} from 'lucide-react';

const Suppliers = () => {
  return (
    <Layout title="Supplier Profile">
      <div className="max-w-6xl mx-auto">
        {/* Header Profile */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
              <Factory className="w-16 h-16 text-gray-400" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Shanghai Electronics Manufacturing Ltd.</h2>
                  <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Pudong District, Shanghai, CN
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Partner since 2018
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-amber-400 mb-1 justify-end">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <p className="text-sm font-medium text-gray-600">Reliability Score: 4.2/5</p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
                  Contact Supplier
                </button>
                <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Download Full Report
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Active Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'ISO 14001:2015', type: 'Environmental', status: 'Valid', date: 'Exp. 2026' },
                  { name: 'SA8000', type: 'Social Accountability', status: 'Valid', date: 'Exp. 2025' },
                  { name: 'ISO 9001:2015', type: 'Quality Mgmt', status: 'Review', date: 'Exp. Nov 2024' },
                  { name: 'C-TPAT', type: 'Security', status: 'Valid', date: 'Exp. 2026' },
                ].map((cert, i) => (
                  <div key={i} className="border border-gray-100 rounded-lg p-4 hover:border-blue-200 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div className="bg-blue-50 p-2 rounded text-primary">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        cert.status === 'Valid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm">{cert.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{cert.type}</p>
                    <p className="text-xs text-gray-400 mt-2">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Timeline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-6">Compliance History</h3>
              <div className="space-y-6">
                {[
                  { title: 'Annual ESG Audit', date: 'Oct 15, 2024', result: 'Passed', score: '94/100' },
                  { title: 'Labor Conditions Inspection', date: 'Jun 22, 2024', result: 'Passed', score: '98/100' },
                  { title: 'Waste Management Review', date: 'Mar 10, 2024', result: 'Warning', score: '72/100' },
                ].map((audit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        audit.result === 'Passed' ? 'bg-green-500' : 'bg-amber-500'
                      }`} />
                      {i !== 2 && <div className="w-0.5 h-full bg-gray-100 mt-2" />}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-gray-900">{audit.title}</h4>
                        <span className="text-sm font-bold text-gray-700">{audit.score}</span>
                      </div>
                      <p className="text-sm text-gray-500">{audit.date} • <span className={
                        audit.result === 'Passed' ? 'text-green-600' : 'text-amber-600'
                      }>{audit.result}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a href="mailto:contact@shanghai-elec.cn" className="text-primary hover:underline">contact@shanghai-elec.cn</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">+86 21 5555 0199</span>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Key Account Manager</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Li Wei</p>
                      <p className="text-xs text-gray-500">Senior Sales Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-bold text-primary text-sm">Upcoming Renewal</h4>
                  <p className="text-xs text-blue-800 mt-1 leading-relaxed">
                    ISO 9001 certification expires in 25 days. Automated reminder sent to supplier on Oct 20.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Suppliers;
