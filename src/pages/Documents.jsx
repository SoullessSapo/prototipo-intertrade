import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle, 
  Clock, 
  XCircle, 
  Eye, 
  Download,
  Link as LinkIcon
} from 'lucide-react';

const Documents = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const documents = [
    { id: 1, name: 'Commercial Invoice #INV-2024-001', type: 'Invoice', date: 'Oct 24, 2024', status: 'Approved', verified: true },
    { id: 2, name: 'Bill of Lading #BL-88392', type: 'Bill of Lading', date: 'Oct 23, 2024', status: 'Review', verified: true },
    { id: 3, name: 'Certificate of Origin', type: 'Certificate', date: 'Oct 22, 2024', status: 'Approved', verified: true },
    { id: 4, name: 'Packing List #PL-992', type: 'Packing List', date: 'Oct 20, 2024', status: 'Rejected', verified: false },
    { id: 5, name: 'Insurance Policy', type: 'Insurance', date: 'Oct 18, 2024', status: 'Approved', verified: true },
    { id: 6, name: 'Customs Declaration', type: 'Customs', date: 'Oct 15, 2024', status: 'Review', verified: false },
  ];

  return (
    <Layout title="Document Manager">
      <div className="flex h-[calc(100vh-8rem)] gap-6">
        {/* Document List */}
        <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          {/* Toolbar */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary w-64"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
              </button>
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg shadow-blue-900/20 transition-all">
              <Upload className="w-4 h-4" />
              Upload Document
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Document Name</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Blockchain</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {documents.map((doc) => (
                  <tr 
                    key={doc.id} 
                    className={`hover:bg-blue-50/50 transition-colors cursor-pointer ${selectedDoc === doc.id ? 'bg-blue-50' : ''}`}
                    onClick={() => setSelectedDoc(doc.id)}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded text-primary">
                          <FileText className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-gray-900">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{doc.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{doc.date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        doc.status === 'Approved' ? 'bg-green-100 text-green-700' :
                        doc.status === 'Review' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {doc.status === 'Approved' && <CheckCircle className="w-3 h-3" />}
                        {doc.status === 'Review' && <Clock className="w-3 h-3" />}
                        {doc.status === 'Rejected' && <XCircle className="w-3 h-3" />}
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {doc.verified ? (
                        <div className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 w-fit">
                          <LinkIcon className="w-3 h-3" />
                          Verified
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="w-96 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Preview</h3>
            <div className="flex gap-2">
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded">
                <Download className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1 bg-gray-100 p-4 flex items-center justify-center">
            {selectedDoc ? (
              <div className="bg-white w-full h-full shadow-md p-8 flex flex-col items-center">
                <div className="w-full border-b-2 border-gray-800 mb-8 pb-4 flex justify-between items-end">
                  <h1 className="text-2xl font-serif font-bold text-gray-900">INVOICE</h1>
                  <span className="text-sm text-gray-500">#INV-2024-001</span>
                </div>
                <div className="w-full space-y-4">
                  <div className="h-4 bg-gray-100 w-3/4 rounded"></div>
                  <div className="h-4 bg-gray-100 w-1/2 rounded"></div>
                  <div className="h-32 bg-gray-50 w-full rounded border border-gray-100 mt-8"></div>
                  <div className="flex justify-end mt-8">
                    <div className="h-8 bg-gray-200 w-1/3 rounded"></div>
                  </div>
                </div>
                <div className="mt-auto pt-8 w-full flex justify-between items-center border-t border-gray-100">
                  <div className="flex items-center gap-2 text-emerald-600 text-xs">
                    <LinkIcon className="w-3 h-3" />
                    <span>Blockchain Verified</span>
                  </div>
                  <div className="text-xs text-gray-400">Page 1 of 1</div>
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Select a document to preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Documents;
