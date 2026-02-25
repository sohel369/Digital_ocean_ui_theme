import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CampaignCreation from './pages/CampaignCreation';
import GeoTargeting from './pages/GeoTargeting';
import Pricing from './pages/Pricing';
import Analytics from './pages/Analytics';
import AdminPricing from './pages/AdminPricing';
import AdminCampaigns from './pages/AdminCampaigns';
import AdminUsers from './pages/AdminUsers';
import AdminDashboard from './pages/AdminDashboard';
import FAQ from './pages/FAQ';
import SubscriberOnly from './pages/SubscriberOnly';
import HomePage from './pages/HomePage';
import AdvertiserLanding from './pages/AdvertiserLanding';

import { Toaster } from 'sonner';

import { useApp } from './context/AppContext';
import Subscribe from './pages/Subscribe';
import SubscribeSuccess from './pages/SubscribeSuccess';
import Settings from './pages/Settings';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import FranchisePage from './pages/FranchisePage';
import TerritoriesPage from './pages/TerritoriesPage';
import Invoices from './pages/Invoices';

import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import CookiePopup from './components/CookiePopup';

const AdminGuard = ({ children }) => {
    const { user } = useApp();
    const isAdmin = user?.role?.toLowerCase() === 'admin' || user?.role?.toLowerCase() === 'country_admin';
    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }
    return children;
};

function App() {
    const { user } = useApp();

    return (
        <>
            <Toaster position="top-right" richColors closeButton theme="dark" />
            <CookiePopup />
            <Routes>
                {/* Public Routes - Wrapped in layout for smooth SPA transitions */}
                <Route element={<PublicLayout />}>
                    <Route index element={user ? <Navigate to="/dashboard" replace /> : <HomePage />} />
                    <Route path="/franchise" element={<FranchisePage />} />
                    <Route path="/advertiser" element={<AdvertiserLanding />} />
                    <Route path="/territories" element={<TerritoriesPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/subscribe" element={<Subscribe />} />
                    <Route path="/subscribe-success" element={<SubscribeSuccess />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>

                {/* Dashboard / Protected Routes */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={(user?.role?.toLowerCase() === 'admin' || user?.role?.toLowerCase() === 'country_admin') ? <AdminDashboard /> : <Dashboard />} />
                    <Route path="campaigns/new" element={<CampaignCreation />} />
                    <Route path="campaigns/new/:id" element={<CampaignCreation />} />
                    <Route path="geo-targeting" element={<GeoTargeting />} />
                    <Route path="faq" element={<SubscriberOnly />} />
                    <Route path="insights" element={<FAQ />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="invoices" element={<Invoices />} />

                    {/* Admin Specific Routes */}
                    <Route path="admin/pricing" element={<AdminGuard><AdminPricing /></AdminGuard>} />
                    <Route path="admin/campaigns" element={<AdminGuard><AdminCampaigns /></AdminGuard>} />
                    <Route path="admin/users" element={<AdminGuard><AdminUsers /></AdminGuard>} />

                    <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Route>

                {/* Catch-all redirect to / if not dashboard */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}

export default App;

