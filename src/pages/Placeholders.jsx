import React from 'react';
import Layout from '../components/layout/Layout';

export const Login = () => <div className="flex items-center justify-center h-screen bg-primary text-white"><h1>Login Screen</h1></div>;

export const Dashboard = () => <Layout title="Global Dashboard"><div>Dashboard Content</div></Layout>;
export const Documents = () => <Layout title="Document Manager"><div>Documents Content</div></Layout>;
export const Tracking = () => <Layout title="Shipment Tracking"><div>Tracking Content</div></Layout>;
export const Compliance = () => <Layout title="Compliance AI Engine"><div>Compliance Content</div></Layout>;
export const Finance = () => <Layout title="Financial Integration"><div>Finance Content</div></Layout>;
export const Suppliers = () => <Layout title="Supplier Profile"><div>Suppliers Content</div></Layout>;
export const ESG = () => <Layout title="Audit / ESG Panel"><div>ESG Content</div></Layout>;
