import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ChevronRight,
    TrendingUp,
    ArrowRightCircle,
    Gift,
    ShieldCheck,
    Layers,
    Network,
    Ticket,
    GraduationCap,
    MapPin,
    ArrowRight,
    Mail,
    Phone,
    Menu,
    X
} from 'lucide-react';

const FranchisePage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-rose-500/30">

            {/* Main Content Area */}
            <main className="pt-20">

                {/* Hero Section */}
                <header className="relative pt-32 pb-20 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-rose-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <span className="inline-block px-5 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-500 text-[10px] font-black tracking-[0.3em] uppercase mb-10">
                                Partnership Opportunity
                            </span>
                            <h1 className="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">
                                <span className="block mb-4">Resilient Growth in</span>
                                <span className="text-rose-600">Every Economic Cycle.</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed font-medium">
                                The world doesn’t stop for a downturn – and neither should your ambitions. Join a franchise built for all seasons and maximize your earning potential.
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-10 py-5 bg-red-600 hover:bg-red-500 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-white shadow-2xl shadow-red-900/40 transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                                >
                                    Get Started <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Multi-Income Streams */}
                <section className="py-32 relative">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="relative">
                                <div className="absolute -inset-10 bg-rose-500/10 blur-[100px] rounded-full opacity-50"></div>
                                <div className="relative rounded-[48px] overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 aspect-square md:aspect-video flex items-center justify-center">
                                    <TrendingUp size={120} className="text-rose-600/20" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-12 left-12">
                                        <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.4em] mb-4">Revenue Diversity</p>
                                        <p className="text-4xl font-black text-white italic uppercase tracking-tighter">Tri-Channel Model</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-10">
                                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic">Multiple Income Streams</h2>
                                <p className="text-lg text-slate-400 leading-relaxed font-medium">
                                    Our unique model allows franchisees to generate revenue from a variety of channels – including buyers, sellers, and a robust network of suppliers in a niche market.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Buyers & Sellers", desc: "Capture both sides of the marketplace transaction." },
                                        { title: "Supplier Network", desc: "Monetize connections with transport and logistics providers." },
                                        { title: "Efficiency Solutions", desc: "Earn by helping partners cut costs and boost performance." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-6 p-8 rounded-[32px] bg-white/5 border border-white/5 hover:border-rose-500/20 transition-all">
                                            <ArrowRightCircle className="w-8 h-8 text-rose-600 shrink-0" />
                                            <div>
                                                <h4 className="font-black text-white italic uppercase tracking-tighter mb-2">{item.title}</h4>
                                                <p className="text-slate-400 font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Modern Consumers & Resilience */}
                <section className="py-32 bg-[#02040a] border-y border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-24">
                            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic leading-[1]">Built for the <br /><span className="text-rose-600">Modern Market.</span></h2>
                            <p className="text-slate-400 text-lg md:text-xl font-medium">In an era where value-driven solutions are the new gold standard, our model provides maximum engagement.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {[
                                { icon: <Gift size={32} />, title: "Engage Modern Consumers", desc: "Today’s consumers are more value-conscious. Our franchise taps into the trend of supplemental income and luxury sweepstakes." },
                                { icon: <ShieldCheck size={32} />, title: "Market Cycle Resilience", desc: "Rule 7 is built to empower you to capture revenue streams as needs evolve, serving both suppliers and consumers when they need value most." }
                            ].map((feature, i) => (
                                <div key={i} className="bg-white/5 p-12 rounded-[48px] border border-white/5 hover:border-rose-500/30 transition-all duration-700 shadow-2xl group">
                                    <div className="w-20 h-20 bg-rose-500/10 rounded-[2rem] flex items-center justify-center mb-10 border border-rose-500/10 group-hover:scale-110 transition-transform">
                                        <div className="text-rose-500">{feature.icon}</div>
                                    </div>
                                    <h3 className="text-3xl font-black mb-6 text-white uppercase italic tracking-tighter">{feature.title}</h3>
                                    <p className="text-slate-400 leading-relaxed font-medium text-lg">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Grid */}
                <section className="py-44">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter uppercase italic">Why Choose Our <span className="text-rose-600">Franchise?</span></h2>
                            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.5em]">A turn-key system for ambitious entrepreneurs.</p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: <Layers size={28} />, title: "Multi-channel Revenue", desc: "Earn through a diversified mix of buyers, sellers, and strategic supplier partnerships." },
                                { icon: <Network size={28} />, title: "Ancillary Supplier Network", desc: "Connect with and monetize a broad range of related niche businesses and transport firms." },
                                { icon: <Ticket size={28} />, title: "Consumer Sweepstakes", desc: "High-engagement prize draws to attract and retain a loyal, value-conscious customer base." },
                                { icon: <GraduationCap size={28} />, title: "Proven Support", desc: "Access to world-class ongoing training, operational systems, and a professional community." },
                                { icon: <MapPin size={28} />, title: "Exclusive Territory", desc: "Build your business in your own protected area with significant room for regional growth." }
                            ].map((item, i) => (
                                <div key={i} className="p-10 rounded-[40px] border border-white/5 bg-white/5 hover:border-rose-500/20 transition-all group">
                                    <div className="text-rose-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-black mb-4 text-white uppercase italic tracking-tight">{item.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}

                            <div
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="p-10 rounded-[40px] bg-red-600 flex flex-col justify-center items-center text-center group cursor-pointer shadow-2xl shadow-red-900/40 hover:scale-105 active:scale-95 transition-all"
                            >
                                <h4 className="text-3xl font-black text-white mb-3 uppercase tracking-tighter leading-none italic">Ready to Start?</h4>
                                <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-8">Inquire about availability.</p>
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
                                    <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section id="contact" className="py-44 relative bg-[#02040a] border-t border-white/5">
                    <div className="container mx-auto px-6">
                        <div className="bg-[#0a0f1d] rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-600/5 blur-[120px] -z-10"></div>

                            <div className="grid lg:grid-cols-2 gap-24 items-center">
                                <div className="space-y-12">
                                    <h2 className="text-4xl md:text-7xl font-black leading-[1] text-white uppercase tracking-tighter italic">
                                        Take Charge of <br /><span className="text-rose-600">Your Future.</span>
                                    </h2>
                                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                                        Contact us today to learn more about available territories and the next steps to becoming a Rule 7 Media partner.
                                    </p>
                                    <div className="flex flex-col gap-8">
                                        <div className="flex items-center gap-6 text-slate-300 font-bold group">
                                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-rose-500 border border-white/5 group-hover:border-rose-500/50 transition-all"><Mail size={24} /></div>
                                            <span className="text-lg">franchise@rule7media.com</span>
                                        </div>
                                        <div className="flex items-center gap-6 text-slate-300 font-bold group">
                                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-rose-500 border border-white/5 group-hover:border-rose-500/50 transition-all"><Phone size={24} /></div>
                                            <span className="text-lg">+44 (0) 800 RULE 7 MEDIA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-black/60 p-12 rounded-[48px] border border-white/10 backdrop-blur-3xl shadow-2xl">
                                    <form className="space-y-6">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">First Name</label>
                                                <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-500/50 transition-all font-bold" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Last Name</label>
                                                <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-500/50 transition-all font-bold" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                                            <input type="email" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-500/50 transition-all font-bold" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Desired Territory</label>
                                            <input type="text" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-500/50 transition-all font-bold" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Message</label>
                                            <textarea rows="4" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-rose-500/50 transition-all font-bold resize-none"></textarea>
                                        </div>
                                        <button className="w-full py-6 bg-red-600 hover:bg-red-500 rounded-2xl font-black text-xs uppercase tracking-[0.3em] text-white shadow-2xl shadow-red-900/40 transition-all hover:scale-105 active:scale-95">
                                            Send Inquiry
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FranchisePage;
