import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PLATFORM2_CATEGORIES, PLATFORM2_TIERS } from '../config/platform2Categories';
import { ChevronRight, LayoutDashboard, Info, Zap, Mail, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Platform2CategorySelector = () => {
    const navigate = useNavigate();
    const { t, formatCurrency } = useApp();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        if (category.isPlaceholder) return;
        setSelectedCategory(category);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="mb-12 text-center lg:text-left relative">
                <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-2xl shadow-inner shadow-primary/5">
                        <LayoutDashboard size={28} className="text-primary-light" />
                    </div>
                    <div className="h-px w-12 bg-gradient-to-r from-primary/30 to-transparent hidden lg:block" />
                    <span className="text-xs font-black text-primary-light uppercase tracking-[0.4em] font-mono opacity-80">Platform 2.0 Core</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 italic uppercase leading-none">
                    B2C/B2B <span className="text-primary-light decoration-primary/30 underline-offset-8">Category Hub</span>
                </h1>
                <p className="text-slate-400 max-w-2xl text-sm md:text-xl mx-auto lg:mx-0 font-medium leading-relaxed border-l-2 border-primary/20 pl-6">
                    Select a high-intent advertiser category to begin your campaign. 25 precision-targeted segments arranged by market value tiers.
                </p>
            </header>

            {/* Tier Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {Object.entries(PLATFORM2_TIERS).map(([key, tier]) => (
                    <div key={key} className="glass-panel p-8 rounded-3xl flex items-center justify-between group overflow-hidden relative border-white/5 hover:border-white/10 transition-all duration-500">
                        <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${tier.color}`} />
                        <div className="relative z-10">
                            <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">{tier.name}</p>
                            <p className="text-3xl font-black text-white italic tracking-tighter leading-none">{tier.multiplier}</p>
                            <p className="text-[10px] font-bold text-slate-600 uppercase mt-2">Market Valuation</p>
                        </div>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700 absolute -right-4 -bottom-4`} />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* 5x5 Grid Implementation */}
                <div className="lg:col-span-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                        {PLATFORM2_CATEGORIES.map((category) => {
                            const tier = PLATFORM2_TIERS[category.tier];
                            const isSelected = selectedCategory?.id === category.id;

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => handleCategorySelect(category)}
                                    disabled={category.isPlaceholder}
                                    className={`
                                        relative group aspect-square p-5 rounded-[2rem] border transition-all duration-500 flex flex-col items-center justify-center text-center
                                        ${category.isPlaceholder ? 'bg-slate-900/20 border-dashed border-white/5 cursor-not-allowed opacity-30' :
                                            isSelected ? `bg-gradient-to-br ${tier.color} border-white/30 scale-100 z-10 ${tier.shadow} shadow-2xl` :
                                                'bg-slate-900/40 border-white/5 hover:border-primary/30 hover:bg-slate-800/60 hover:-translate-y-2 active:scale-95 shadow-lg'}
                                    `}
                                >
                                    <div className={`
                                        text-3xl mb-4 transition-all duration-700 
                                        ${!isSelected && 'group-hover:scale-125 group-hover:rotate-6 opacity-60 group-hover:opacity-100'}
                                        ${isSelected ? 'text-white' : 'text-primary-light'}
                                    `}>
                                        <i className={category.iconClass}></i>
                                    </div>
                                    <span className={`text-[13px] font-bold leading-tight px-2 ${isSelected ? 'text-white' : 'text-slate-200 group-hover:text-white transition-colors duration-300'}`}>
                                        {category.name}
                                    </span>

                                    {!category.isPlaceholder && (
                                        <div className={`mt-3 px-3 py-1 rounded-lg text-[10px] font-black font-mono tracking-tight ${isSelected ? 'bg-white/20 text-white' : `bg-slate-950/80 text-primary-light border border-primary/20 shadow-inner group-hover:bg-primary group-hover:text-white transition-all`}`}>
                                            {category.multiplier.toFixed(1)}x VALUE
                                        </div>
                                    )}

                                    {isSelected && (
                                        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#fff] animate-pulse" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Sidebar - Selection Summary & Info */}
                <div className="lg:col-span-4 space-y-6">
                    <div className="glass-panel p-10 rounded-[2.5rem] sticky top-24 border-white/5 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-purple-600 shadow-[0_4px_15px_rgba(59,130,246,0.3)]" />

                        <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-tighter flex items-center gap-3">
                            <BarChart3 size={24} className="text-primary-light" />
                            Market Intel
                        </h3>

                        {selectedCategory ? (
                            <div className="space-y-8 animate-in slide-in-from-right-8 duration-700">
                                <div className="space-y-5">
                                    <div className="p-6 bg-slate-950/60 rounded-[1.5rem] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 group-hover:w-2 transition-all duration-300" />
                                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2">Segment Identified</p>
                                        <p className="text-2xl font-black text-white tracking-tight">{selectedCategory.name}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="p-5 bg-slate-950/40 rounded-2xl border border-white/5 text-center">
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Base Index</p>
                                            <p className="text-2xl font-black text-white font-mono">$100</p>
                                        </div>
                                        <div className="p-5 bg-slate-950/40 rounded-2xl border border-white/5 text-center">
                                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Value Score</p>
                                            <p className="text-2xl font-black text-primary-light font-mono">{selectedCategory.multiplier.toFixed(1)}x</p>
                                        </div>
                                    </div>

                                    <div className="p-8 bg-primary/10 rounded-[2rem] border border-primary/20 relative group hover:bg-primary/15 transition-all duration-300">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-[11px] font-black text-primary-light uppercase tracking-[0.2em]">Campaign Monthly Base</p>
                                            <Zap size={18} className="text-primary-light animate-pulse" />
                                        </div>
                                        <p className="text-4xl font-black text-white font-mono tracking-tighter">
                                            {formatCurrency(100 * selectedCategory.multiplier)}
                                            <span className="text-xs text-slate-500 ml-3 font-sans font-bold uppercase tracking-widest opacity-60">/ Mo</span>
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => navigate('/pricing')}
                                    className="w-full premium-btn py-5 rounded-2xl text-xl font-black group shadow-xl shadow-primary/30 uppercase flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 bg-gradient-to-r from-primary to-primary-dark"
                                >
                                    Proceed
                                    <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                                </button>

                                <p className="text-[10px] text-center text-slate-500 font-bold uppercase tracking-[0.2em] px-4 leading-relaxed">
                                    Final pricing scales dynamically with format selection & coverage parameters.
                                </p>
                            </div>
                        ) : (
                            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6 border-2 border-dashed border-white/5 rounded-[2.5rem] bg-slate-950/20 shadow-inner">
                                <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center border border-white/5">
                                    <LayoutDashboard size={40} className="text-slate-800 animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-slate-300 font-black uppercase tracking-[0.2em] text-sm">System Ready</p>
                                    <p className="text-[11px] text-slate-500 max-w-[200px] font-bold mt-2 uppercase tracking-tight leading-relaxed">Perform selection to initialize pricing calculation.</p>
                                </div>
                            </div>
                        )}

                        <div className="mt-10 pt-10 border-t border-white/5 space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                                    <Mail size={16} className="text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Newsletter Add-on</p>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Newsletter CPM available from <span className="text-white font-bold">$15-$20</span> per 1k subscribers.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                                    <Zap size={16} className="text-purple-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-1">Dynamic Multipliers</p>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Automatic multipliers applied to Video formats (up to <span className="text-white font-bold">8.0x</span>).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform2CategorySelector;
