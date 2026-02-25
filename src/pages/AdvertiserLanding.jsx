import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowRight,
    Play,
    Users,
    TrendingDown,
    ChevronDown,
    Shield,
    Target,
    Zap,
    Menu,
    X,
    ShieldCheck,
    FileText,
    PlusCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdvertiserLanding = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-rose-500/30">
            {/* Main Content Area */}
            <main className="pt-20">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-rose-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <span className="inline-block px-5 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-500 text-[10px] font-black tracking-[0.3em] uppercase mb-10">
                            Advertiser Resource Center
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                            Platform <span className="text-rose-600">Policies</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                            Ensuring the highest standards of safety, transparency, and performance for every campaign on our global network.
                        </p>
                    </div>
                </section>

                {/* Content Sections */}
                <section className="pb-44 container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {[
                            {
                                title: "Brand Safety & Quality",
                                content: "We maintain a rigorous screening process for all wrap partners. Every installer must meet our certification standards to ensure your brand is represented with absolute precision and quality.",
                                icon: <ShieldCheck className="w-8 h-8 text-rose-500" />
                            },
                            {
                                title: "Verified Analytics",
                                content: "Our data isn't just estimated; it's verified. We provide campaign performance metrics that allow you to track reach and engagement with confidence across all territories.",
                                icon: <TrendingDown className="w-8 h-8 text-rose-500" />
                            },
                            {
                                title: "Transparency First",
                                content: "No hidden fees or obscure bidding processes. Our decreasing-bid auction platform is designed for efficiency and fairness, providing clear value to both advertisers and installers.",
                                icon: <FileText className="w-8 h-8 text-rose-500" />
                            }
                        ].map((policy, i) => (
                            <div key={i} className="bg-white/5 border border-white/5 rounded-[48px] p-12 md:p-16 hover:border-rose-500/20 transition-all duration-700 shadow-2xl group">
                                <div className="flex flex-col md:flex-row gap-10 items-start">
                                    <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-rose-500/10 group-hover:scale-110 transition-transform">
                                        {policy.icon}
                                    </div>
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">{policy.title}</h2>
                                        <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                            {policy.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="bg-red-600 rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-red-900/40">
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                <PlusCircle size={200} className="text-white" />
                            </div>
                            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-6">Start Your Campaign</h2>
                            <p className="text-white/80 max-w-xl mx-auto mb-12 font-medium">
                                Ready to reach global audiences with verified local specialists? Join our platform today.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6">
                                <button
                                    onClick={() => navigate('/subscribe')}
                                    className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl transition-all hover:scale-105 active:scale-95"
                                >
                                    Join Now
                                </button>
                                <button
                                    onClick={() => navigate('/franchise')}
                                    className="px-10 py-5 bg-black/20 text-white border border-white/20 rounded-2xl font-black text-xs uppercase tracking-[0.2em] backdrop-blur-xl hover:bg-black/30 transition-all"
                                >
                                    Franchise Opportunities
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdvertiserLanding;
