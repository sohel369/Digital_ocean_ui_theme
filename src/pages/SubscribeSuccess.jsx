import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
    CheckCircle2,
    LayoutDashboard,
    BookOpen,
    Globe,
    Play,
    User,
    PlusSquare,
    HelpCircle,
    Cookie,
    Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SubscribeSuccess = () => {
    const navigate = useNavigate();
    const { user } = useApp();

    // Smart dashboard navigation: go to dashboard if logged in, else login first
    const goToDashboard = () => {
        if (user) {
            navigate('/dashboard');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-rose-500/30 overflow-x-hidden">

            {/* Success Header */}
            <main className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-rose-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-500/10"
                    >
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic"
                    >
                        Success <br />
                        <span className="text-rose-600">Upgrade Active.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                    >
                        Welcome to the Rule 7 ecosystem. Your account has been upgraded and you are ready to start your first campaign.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto"
                    >
                        <button
                            onClick={goToDashboard}
                            className="w-full px-10 py-5 bg-red-600 hover:bg-red-500 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white shadow-2xl shadow-red-900/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                        >
                            <LayoutDashboard size={18} /> Enter Dashboard
                        </button>
                        <button
                            onClick={() => document.getElementById('onboarding-videos')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-slate-300 backdrop-blur-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                        >
                            <BookOpen size={18} /> Learn the System
                        </button>
                    </motion.div>
                </div>
            </main>

            {/* Content Section: Video Onboarding */}
            <section id="onboarding-videos" className="py-32 bg-[#02040a] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-500 mb-4 block">Operation Training</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">System Onboarding</h2>
                            <p className="text-slate-500 mt-4 font-medium text-lg">Master the Decreasing-Bid model with our professional guides.</p>
                        </div>
                        <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-xl">
                            <Globe className="w-5 h-5 text-rose-500" />
                            <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Global Edition</span>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Video Card */}
                        <div className="lg:col-span-2 group">
                            <div className="relative bg-white/5 backdrop-blur-xl rounded-[48px] p-4 overflow-hidden border border-white/5 hover:border-rose-500/20 transition-all duration-700 shadow-2xl">
                                <div className="aspect-video w-full bg-slate-900 rounded-[32px] overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-all duration-500">
                                        <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform shadow-2xl shadow-red-900/40">
                                            <Play className="w-10 h-10 text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600 font-black uppercase tracking-[0.4em] text-center px-10 text-xs">
                                        Explainer Video Player - Operational Control
                                    </div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-4">Campaign Management Masterclass</h3>
                                    <p className="text-slate-400 leading-relaxed font-medium text-lg">This video guides you through setting up your first decreasing-bid auction and managing your advertising assets across the network with absolute precision.</p>
                                </div>
                            </div>
                        </div>

                        {/* Next Steps Sidebar */}
                        <div className="space-y-8 flex flex-col">
                            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 space-y-10">
                                <h4 className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em] mb-2 leading-none">Command Center</h4>
                                <div className="space-y-6">
                                    <button
                                        onClick={goToDashboard}
                                        className="w-full flex items-center gap-6 p-6 rounded-3xl hover:bg-white/5 transition-all group text-left border border-transparent hover:border-white/5"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all">
                                            <User size={24} />
                                        </div>
                                        <div>
                                            <span className="font-black text-white uppercase italic tracking-tighter block text-lg">Identity</span>
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1 block">Update Profile</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => { if (user) navigate('/dashboard/campaigns/new'); else navigate('/login'); }}
                                        className="w-full flex items-center gap-6 p-6 rounded-3xl hover:bg-white/5 transition-all group text-left border border-transparent hover:border-white/5"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all">
                                            <PlusSquare size={24} />
                                        </div>
                                        <div>
                                            <span className="font-black text-white uppercase italic tracking-tighter block text-lg">Operation</span>
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1 block">Initialize Campaign</span>
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => { if (user) navigate('/dashboard/faq'); else navigate('/login'); }}
                                        className="w-full flex items-center gap-6 p-6 rounded-3xl hover:bg-white/5 transition-all group text-left border border-transparent hover:border-white/5"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-all">
                                            <HelpCircle size={24} />
                                        </div>
                                        <div>
                                            <span className="font-black text-white uppercase italic tracking-tighter block text-lg">Intelligence</span>
                                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1 block">Support Hub</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-red-600 p-10 rounded-[40px] shadow-2xl shadow-red-900/40 flex-1 flex flex-col justify-center text-center group">
                                <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-4 leading-none">Need Assistance?</h4>
                                <p className="text-white/70 text-sm mb-8 font-medium">Our global support team is available 24/7 to help with your first operational setup.</p>
                                <button className="w-full py-5 bg-black/20 hover:bg-black/30 rounded-2xl text-[10px] font-black text-white uppercase tracking-[0.3em] transition-all backdrop-blur-xl border border-white/10 group-hover:scale-105">
                                    Engage Tech Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SubscribeSuccess;
