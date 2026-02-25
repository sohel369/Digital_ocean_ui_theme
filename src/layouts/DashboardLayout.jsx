import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = () => {
    const { user, authLoading } = useApp();

    if (authLoading) {
        return (
            <div className="min-h-screen bg-[#050810] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
                    <p className="text-slate-500 font-mono text-sm animate-pulse uppercase tracking-widest">Initializing Session...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className="flex min-h-screen bg-background selection:bg-primary/30 selection:text-primary-light overflow-x-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 max-w-full ml-0 md:ml-72 transition-all duration-300 overflow-x-hidden">
                <Header isPublic={false} />
                <main className="flex-1 p-4 md:p-8 pt-4 pb-12 w-full max-w-full overflow-x-hidden">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
