import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Cookie, Lock, Eye, CheckCircle2, Shield, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const Settings = () => {
    const navigate = useNavigate();
    const { acceptCookiePolicy } = useApp();

    return (
        <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-rose-500/30 overflow-x-hidden">
            <main className="pt-32 pb-44 container mx-auto px-6 max-w-4xl relative">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-rose-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <span className="inline-block px-5 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-500 text-[10px] font-black tracking-[0.3em] uppercase mb-10">
                        Operational Safety
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                        Privacy <span className="text-rose-600">& Security</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium">
                        Manage your data and cookie preferences across the Rule 7 platform.
                    </p>
                </motion.div>

                <div className="space-y-10">
                    {/* Cookie Policy Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 border border-white/5 rounded-[48px] p-12 md:p-16 relative overflow-hidden group hover:border-rose-500/20 transition-all duration-700 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:scale-110 transition-transform duration-1000">
                            <Cookie size={300} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-900/40">
                                    <Cookie size={32} className="text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter">Cookie Protocol</h2>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Universal Control Center</span>
                                </div>
                            </div>

                            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-2xl font-medium">
                                We utilize advanced cookies to optimize operational performance and analyze reach. Your safety and privacy remain our highest priority.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <button
                                    onClick={() => {
                                        acceptCookiePolicy();
                                        import('sonner').then(({ toast }) => {
                                            toast.success('Protocol Adjusted', {
                                                description: 'All permissions granted. Re-engaging dashboard session.',
                                                duration: 2000,
                                            });
                                            setTimeout(() => navigate('/dashboard'), 1500);
                                        });
                                    }}
                                    className="px-10 py-5 bg-red-600 hover:bg-red-500 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white shadow-2xl shadow-red-900/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                                >
                                    <CheckCircle2 size={18} /> Accept Protocol
                                </button>
                                <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-slate-300 backdrop-blur-xl hover:bg-white/10 transition-all">
                                    Advanced Configuration
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Additional Security Toggles */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { icon: <Lock size={24} />, title: "Encryption", desc: "Military-grade AES-256 standards.", color: "text-blue-500" },
                            { icon: <Eye size={24} />, title: "Global Tracking", desc: "Anonymous operational data.", color: "text-rose-500" },
                            { icon: <Shield size={24} />, title: "Asset Guard", desc: "Real-time verification enabled.", color: "text-green-500" },
                            { icon: <Bell size={24} />, title: "Security Alerts", desc: "Critical system notifications only.", color: "text-amber-500" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="bg-white/5 border border-white/5 rounded-[32px] p-10 flex items-center gap-8 hover:border-white/10 transition-all group"
                            >
                                <div className={`w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-black text-white uppercase italic tracking-tighter text-lg">{item.title}</h3>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Settings;
