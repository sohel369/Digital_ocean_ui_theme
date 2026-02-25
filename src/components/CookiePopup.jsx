import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const CookiePopup = () => {
    const { showCookiePopup, acceptCookiePolicy } = useApp();
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {showCookiePopup && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 z-[9999] max-w-md w-auto"
                >
                    <div className="bg-[#0F172A]/95 backdrop-blur-2xl border border-rose-500/20 rounded-[32px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                        {/* Decorative Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/10 blur-[60px] rounded-full group-hover:bg-rose-500/20 transition-all duration-500"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 accent-gradient rounded-2xl flex items-center justify-center shadow-lg shadow-rose-900/20">
                                        <Cookie className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white tracking-tight">Cookie Policy</h3>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-500/80">Privacy First</p>
                                    </div>
                                </div>
                                <button
                                    onClick={acceptCookiePolicy}
                                    className="p-2 hover:bg-white/5 rounded-xl text-slate-500 hover:text-white transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed mb-8 font-medium">
                                We use cookies to enhance your experience and analyze traffic. Customize your preferences or accept to continue browsing.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={acceptCookiePolicy}
                                    className="flex-1 accent-gradient py-4 rounded-2xl text-sm font-bold text-white shadow-lg shadow-rose-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={() => navigate('/settings')}
                                    className="flex-1 bg-slate-800/50 hover:bg-slate-800 border border-white/5 py-4 rounded-2xl text-sm font-bold text-slate-300 transition-all flex items-center justify-center gap-2"
                                >
                                    <Shield className="w-4 h-4" /> Settings
                                </button>
                            </div>

                            <p className="text-[10px] text-slate-500 mt-6 text-center font-bold uppercase tracking-widest">
                                Persistent selection saved to your profile
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookiePopup;
