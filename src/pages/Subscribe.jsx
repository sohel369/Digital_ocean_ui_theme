import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Lock,
    Shield,
    EyeOff,
    Star,
    ChevronRight,
    CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

const Subscribe = () => {
    const navigate = useNavigate();
    const [businessName, setBusinessName] = React.useState('');
    const [email, setEmail] = React.useState('');

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500/30 overflow-x-hidden">
            {/* Main Content */}
            <main className="pt-20 pb-32 container mx-auto px-6 relative flex flex-col items-center">
                {/* Background Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

                {/* Lock Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-20 h-20 bg-rose-500/5 border border-rose-500/20 rounded-3xl flex items-center justify-center mb-12 shadow-2xl shadow-rose-900/20"
                >
                    <Lock className="w-10 h-10 text-rose-500" />
                </motion.div>

                {/* Header */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black text-center mb-16 tracking-tighter uppercase leading-[0.9]"
                >
                    Unlock <span className="text-rose-600 italic">Premium</span><br />
                    Auction Intelligence
                </motion.h1>

                {/* Glass Warning Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-4xl bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[48px] p-12 md:p-24 relative overflow-hidden text-center mb-20 shadow-2xl"
                >
                    {/* Subtle Shield in Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
                        <Shield size={400} />
                    </div>

                    <p className="text-xl md:text-3xl font-medium text-slate-300 leading-relaxed mb-12 relative z-10">
                        In order to protect the privacy and eliminate spamming of our partners this facility is only available to <span className="text-white border-b-2 border-rose-600 font-bold">paid subscribers</span>.
                    </p>

                    <button className="inline-flex items-center gap-3 text-rose-500 font-black tracking-[0.3em] text-xs uppercase hover:text-rose-400 transition-all group relative z-10">
                        Learn More
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mb-32">
                    {[
                        { icon: <EyeOff size={24} />, title: "Absolute Privacy", desc: "Ensuring auction details remain confidential and only visible to verified bidders." },
                        { icon: <Shield size={24} />, title: "Anti-Spam Filter", desc: "Removing data scrapers and unsolicited communications from your professional space." },
                        { icon: <Star size={24} />, title: "Exclusive Reach", desc: "Gain priority access to high-value opportunities not available on public boards." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="bg-white/5 border border-white/5 p-12 rounded-[40px] hover:border-rose-500/30 transition-all group"
                        >
                            <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center text-rose-500 mb-8 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter italic">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Subscription Form Section */}
                <motion.div
                    id="subscribe-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-full max-w-2xl bg-[#0a0f1d] backdrop-blur-3xl border border-white/5 rounded-[48px] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden mb-32"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-500/10 blur-[100px] -z-10"></div>

                    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight uppercase">Claim Your Future.</h2>
                    <p className="text-xs text-slate-500 mb-12 font-black uppercase tracking-[0.3em]">
                        Join the elite network today.
                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            import('sonner').then(({ toast }) => {
                                toast.success("Access Granted", { description: "Your subscription is processing." });
                                navigate('/subscribe-success');
                            });
                        }}
                        className="space-y-6 text-left max-w-md mx-auto"
                    >
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Business Name"
                                required
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-rose-500 transition-all placeholder:text-slate-700 font-bold"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-rose-500 transition-all placeholder:text-slate-700 font-bold"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-6 bg-red-600 hover:bg-red-500 rounded-2xl font-black text-xs uppercase tracking-[0.3em] text-white shadow-2xl shadow-red-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Secure Spot Now
                        </button>
                        <p className="text-[10px] text-slate-600 font-black uppercase tracking-widest text-center mt-6 italic opacity-80">
                            Fast-track Approval for Established Providers
                        </p>
                    </form>
                </motion.div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-12 text-slate-600 text-[10px] font-black tracking-[0.3em] uppercase">
                    {[
                        "ISO 27001 SECURE",
                        "VERIFIED PARTNERS",
                        "AES-256 ENCRYPTED"
                    ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-rose-600" />
                            {badge}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Subscribe;
