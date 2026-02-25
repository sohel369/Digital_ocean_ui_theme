import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookiePopup from '../components/CookiePopup';

const PublicLayout = () => {
    return (
        <div className="public-layout min-h-screen bg-black flex flex-col relative overflow-hidden">
            {/* Global Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-rose-900/5 blur-[120px] rounded-full -z-0 pointer-events-none"></div>

            <Header isPublic={true} />
            <main className="flex-1 relative z-10 pt-[68px]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
