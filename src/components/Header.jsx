import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Bell, Globe, User as UserIcon, X, Info, PlusCircle, LogOut, Menu, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Dropdown from './Dropdown';

const Header = ({ isPublic = false }) => {
    const { user, notifications, markAllRead, logout, currency, setCurrency, country, setCountry, CONSTANTS, setSidebarOpen, t } = useApp();
    const [showNotifs, setShowNotifs] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const unreadCount = notifications.filter(n => !n.read).length;
    const currentCountryName = CONSTANTS.COUNTRIES.find(c => c.code === country)?.name || country;

    // Track scroll for header shadow effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Franchise", path: "/franchise" },
        { label: "Advertiser", path: "/advertiser" },
        { label: "Global Map", path: "/territories" },
    ];

    const isActiveLink = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    if (isPublic) {
        return (
            <>
                <header className={`
                    fixed top-0 left-0 right-0 z-50 w-full
                    transition-all duration-500
                    ${scrolled
                        ? 'bg-[#06080f]/95 backdrop-blur-2xl border-b border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                        : 'bg-[#06080f]/80 backdrop-blur-xl border-b border-white/5'
                    }
                `}>
                    <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[68px] flex items-center relative">

                        {/* ── LEFT: Logo ── */}
                        <div className="flex-none">
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className="w-9 h-9 bg-rose-600 rounded-lg flex items-center justify-center font-black text-white text-[13px] tracking-tight shadow-lg shadow-rose-900/40 group-hover:bg-rose-500 group-hover:scale-105 transition-all duration-200">
                                    R7
                                </div>
                                <span className="text-[15px] font-black text-white tracking-tighter uppercase italic leading-none hidden sm:block">
                                    RULE 7 MEDIA
                                </span>
                            </Link>
                        </div>

                        {/* ── CENTER: Nav Links (absolute centered) ── */}
                        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
                            {navLinks.map((link) => {
                                const active = isActiveLink(link.path);
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className={`
                                            relative text-[13px] font-semibold tracking-wide transition-all duration-200 py-1 group
                                            ${active
                                                ? 'text-rose-500'
                                                : 'text-slate-400 hover:text-slate-100'
                                            }
                                        `}
                                    >
                                        {link.label}
                                        {/* Active underline */}
                                        <span className={`
                                            absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full transition-all duration-300
                                            ${active ? 'bg-rose-500 opacity-100' : 'bg-rose-500 opacity-0 group-hover:opacity-40 scale-x-0 group-hover:scale-x-100'}
                                        `} />
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* ── RIGHT: Sign In + CTA + Mobile Hamburger ── */}
                        <div className="flex-none ml-auto flex items-center gap-4">
                            {/* Sign In — desktop */}
                            <Link
                                to="/login"
                                className="hidden lg:inline-flex text-[12px] font-semibold text-slate-400 hover:text-white transition-colors duration-200"
                            >
                                Sign In
                            </Link>

                            {/* Enquire Now — desktop */}
                            <Link
                                to="/subscribe"
                                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white text-[12px] font-bold uppercase tracking-[0.12em] rounded-xl transition-all duration-200 shadow-lg shadow-rose-900/30 hover:shadow-rose-800/50 hover:scale-[1.03] active:scale-95"
                            >
                                Enquire Now
                            </Link>

                            {/* Mobile hamburger */}
                            <button
                                id="mobile-menu-btn"
                                onClick={() => setMobileMenuOpen(v => !v)}
                                aria-label="Toggle menu"
                                className="lg:hidden p-2.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/8 transition-all duration-200"
                            >
                                {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
                            </button>
                        </div>
                    </div>
                </header>

                {/* ── MOBILE DRAWER ── */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                key="backdrop"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                                onClick={() => setMobileMenuOpen(false)}
                            />

                            {/* Drawer panel */}
                            <motion.div
                                key="drawer"
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                                className="fixed right-0 top-0 bottom-0 z-50 w-[280px] bg-[#08090f] border-l border-white/8 flex flex-col lg:hidden shadow-2xl"
                            >
                                {/* Drawer Header */}
                                <div className="flex items-center justify-between px-6 h-[68px] border-b border-white/5">
                                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center font-black text-white text-xs">R7</div>
                                        <span className="text-sm font-black text-white uppercase italic tracking-tight">RULE 7 MEDIA</span>
                                    </Link>
                                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-white transition-colors">
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Drawer Nav */}
                                <nav className="flex flex-col px-4 py-6 gap-1">
                                    {navLinks.map((link, i) => {
                                        const active = isActiveLink(link.path);
                                        return (
                                            <motion.div
                                                key={link.path}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.06 }}
                                            >
                                                <Link
                                                    to={link.path}
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    className={`
                                                        flex items-center px-4 py-3.5 rounded-xl text-[13px] font-semibold tracking-wide transition-all duration-200
                                                        ${active
                                                            ? 'bg-rose-600/10 text-rose-400 border border-rose-500/20'
                                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                                        }
                                                    `}
                                                >
                                                    {active && <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-3 shrink-0" />}
                                                    {link.label}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </nav>

                                {/* Drawer Footer */}
                                <div className="mt-auto px-4 pb-8 space-y-3">
                                    <Link
                                        to="/login"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full py-3 text-center text-[13px] font-semibold text-slate-400 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white transition-all"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        to="/subscribe"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block w-full py-3.5 bg-rose-600 hover:bg-rose-500 text-white text-center text-[13px] font-bold uppercase tracking-[0.1em] rounded-xl shadow-lg shadow-rose-900/30 transition-all"
                                    >
                                        Enquire Now
                                    </Link>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </>
        );
    }

    // ─────────────────────────────────────────
    // DASHBOARD HEADER (unchanged functionality)
    // ─────────────────────────────────────────
    return (
        <header className="sticky top-0 z-50 w-full flex flex-col transition-all duration-300">
            <div className="h-20 w-full px-6 md:px-12 flex items-center justify-between border-b border-white/5 backdrop-blur-3xl bg-[#08090f]/90 transition-all">

                {/* Left Section */}
                <div className="flex items-center gap-6 md:gap-10">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center font-black text-white text-sm shadow-lg shadow-rose-900/30 group-hover:scale-105 transition-transform">R7</div>
                        <div className="hidden sm:block">
                            <p className="text-xl font-black text-white tracking-tighter uppercase leading-none italic">
                                {(user?.role?.toLowerCase() === 'admin' || user?.role?.toLowerCase() === 'country_admin') ? 'Admin Panel' : 'Dashboard'}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="flex items-center gap-1 text-[9px] font-bold text-rose-400 uppercase tracking-widest leading-none">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                                    {currentCountryName}
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center gap-4 mr-4 pr-4 border-r border-slate-700/50">
                        <Dropdown
                            label="Country"
                            options={CONSTANTS.COUNTRIES}
                            value={country}
                            onChange={setCountry}
                            icon={<Globe size={14} />}
                        />
                        <Dropdown
                            label="Currency"
                            options={CONSTANTS.CURRENCIES}
                            value={currency}
                            onChange={setCurrency}
                            icon={<span className="font-mono text-xs font-bold">{CONSTANTS.CURRENCIES.find(c => c.code === currency)?.symbol}</span>}
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2.5 text-slate-400 hover:text-slate-100 md:hidden bg-white/5 rounded-xl border border-white/5"
                        >
                            <Menu size={20} />
                        </button>

                        {/* Notifications */}
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifs(!showNotifs)}
                                className="p-2.5 text-slate-400 hover:text-slate-100 bg-white/5 rounded-xl border border-white/5 hover:border-slate-700 transition-all relative"
                            >
                                <Bell size={18} />
                                {unreadCount > 0 && <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900" />}
                            </button>

                            {showNotifs && (
                                <>
                                    <div className="fixed inset-0 z-[60]" onClick={() => setShowNotifs(false)} />
                                    <div className="fixed left-4 right-4 top-20 sm:absolute sm:top-14 sm:right-0 sm:left-auto sm:w-[380px] bg-slate-900/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/10 z-[70] overflow-hidden">
                                        <div className="p-5 border-b border-white/5 flex justify-between items-center bg-white/5">
                                            <h3 className="font-bold text-slate-100 text-sm">Notifications</h3>
                                            <button onClick={markAllRead} className="text-xs text-rose-500 font-semibold hover:text-rose-400">Mark all read</button>
                                        </div>
                                        <div className="max-h-[400px] overflow-y-auto p-3 space-y-1">
                                            {notifications.length === 0 ? (
                                                <div className="p-10 text-center text-slate-600 text-sm">No notifications</div>
                                            ) : (
                                                notifications.map(n => (
                                                    <div key={n.id} className="p-4 rounded-xl hover:bg-white/5 transition-all flex gap-3">
                                                        <div className="w-9 h-9 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0"><Info size={14} /></div>
                                                        <div>
                                                            <p className="text-xs font-bold text-slate-100">{n.title}</p>
                                                            <p className="text-xs text-slate-500 mt-1 line-clamp-2">{n.message}</p>
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <Link to="/dashboard/campaigns/new" className="hidden lg:flex px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-rose-900/30 items-center gap-2">
                            <PlusCircle size={14} /> New Campaign
                        </Link>

                        {/* User Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setShowUserMenu(!showUserMenu)}
                                className="w-10 h-10 rounded-xl bg-white/5 p-0.5 border border-white/10 hover:border-rose-600/50 transition-all overflow-hidden"
                            >
                                <img src={user?.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYYED46R5puH88P1qic_RXu3sSoyfjyO3Pw&s"} alt="User" className="w-full h-full object-cover rounded-lg" />
                            </button>

                            {showUserMenu && (
                                <>
                                    <div className="fixed inset-0 z-[60]" onClick={() => setShowUserMenu(false)} />
                                    <div className="absolute top-14 right-0 w-64 bg-slate-900/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-white/10 z-[70] overflow-hidden">
                                        <div className="p-6 border-b border-white/5 bg-white/5">
                                            <p className="font-bold text-white text-sm">{user?.username || 'User'}</p>
                                            <p className="text-xs text-slate-500 mt-1 truncate">{user?.email}</p>
                                        </div>
                                        <div className="p-3 space-y-1">
                                            <button className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all flex items-center gap-3">
                                                <UserIcon size={14} /> My Account
                                            </button>
                                            <Link to="/dashboard/invoices" className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all flex items-center gap-3">
                                                <FileText size={14} /> Billing History
                                            </Link>
                                            <div className="h-px bg-white/5 my-1 mx-3" />
                                            <button onClick={logout} className="w-full text-left px-4 py-2.5 text-xs font-semibold text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all flex items-center gap-3">
                                                <LogOut size={14} /> Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
