import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Tracking from './pages/Tracking';
import Compliance from './pages/Compliance';
import Finance from './pages/Finance';
import Suppliers from './pages/Suppliers';
import ESG from './pages/ESG';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/esg" element={<ESG />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
