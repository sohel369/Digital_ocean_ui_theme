import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Globe, Maximize2, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TerritoriesPage = () => {
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState(null);

    const countries = [
        { id: 'us', name: 'United States', code: 'USA', coverage: '20%' },
        { id: 'uk', name: 'United Kingdom', code: 'GBR', coverage: '20%' },
        { id: 'au', name: 'Australia', code: 'AUS', coverage: '20%' },
        { id: 'ca', name: 'Canada', code: 'CAN', coverage: '20%' },
        { id: 'cn', name: 'China', code: 'CHN', coverage: '20%' },
        { id: 'jp', name: 'Japan', code: 'JPN', coverage: '20%' },
        { id: 'de', name: 'Germany', code: 'DEU', coverage: '20%' },
        { id: 'fr', name: 'France', code: 'FRA', coverage: '20%' },
        { id: 'es', name: 'Spain', code: 'ESP', coverage: '20%' },
        { id: 'it', name: 'Italy', code: 'ITA', coverage: '20%' },
        { id: 'in', name: 'India', code: 'IND', coverage: '20%' },
        { id: 'id', name: 'Indonesia', code: 'IDN', coverage: '20%' },
        { id: 'vn', name: 'Vietnam', code: 'VNM', coverage: '20%' },
        { id: 'ph', name: 'Philippines', code: 'PHL', coverage: '20%' }
    ];

    return (
        <div className="min-h-screen bg-black text-slate-200 font-sans selection:bg-rose-500/30">
            <style>
                {`
                .map-container {
                    position: relative;
                    background: radial-gradient(circle at center, #1e293b 0%, #000 100%);
                    overflow: hidden;
                }

                .dot {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }

                .dot-reserved {
                    background-color: #e11d48;
                    box-shadow: 0 0 15px #e11d48;
                }

                .dot-available {
                    background-color: #334155;
                    opacity: 0.3;
                }

                .dot-available:hover {
                    opacity: 1;
                    background-color: #fb7185;
                    transform: scale(1.5);
                    cursor: pointer;
                }
                `}
            </style>

            {/* Main Content Area */}
            <main className="">

                {/* Header Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-rose-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <span className="inline-block px-5 py-2 rounded-full border border-rose-500/20 bg-rose-500/5 text-rose-500 text-[10px] font-black tracking-[0.3em] uppercase mb-10 animate-pulse">
                            Global Expansion Phase II
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
                            Global <span className="text-rose-600">Territory</span> Registry
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
                            Exclusive franchise rights for Rule 7 Media's decreasing-bid auction platform.
                            Reserved regions are currently closed for new applications.
                        </p>

                        {/* Legend */}
                        <div className="flex items-center justify-center gap-10 mt-16">
                            <div className="flex items-center gap-4">
                                <span className="w-4 h-4 rounded-full bg-rose-600 shadow-[0_0_15px_#e11d48]"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Reserved (20%)</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="w-4 h-4 rounded-full bg-slate-700"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Available</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Grid */}
                <section className="pb-44 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {countries.map((country) => (
                            <div key={country.id} className="group bg-white/5 rounded-[48px] overflow-hidden border border-white/5 hover:border-rose-500/30 transition-all duration-700 flex flex-col hover:shadow-[0_40px_100px_rgba(225,29,72,0.15)]">
                                {/* Map Visual Representation */}
                                <div className="map-container h-72 w-full relative">
                                    {/* Abstract Map Dots */}
                                    {[...Array(40)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`dot ${i <= 8 ? 'dot-reserved' : 'dot-available'}`}
                                            style={{
                                                top: `${(Math.sin(i * 137) * 40 + 50)}%`,
                                                left: `${(Math.cos(i * 137) * 40 + 50)}%`,
                                                transitionDelay: `${i * 20}ms`
                                            }}
                                        ></div>
                                    ))}

                                    {/* Map Label Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                                    <div className="absolute bottom-8 left-8">
                                        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">{country.name}</h3>
                                        <p className="text-rose-600 text-[10px] font-black tracking-[0.3em] uppercase">{country.code}</p>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="p-10 space-y-8 flex-grow">
                                    <div className="flex justify-between items-end">
                                        <div className="text-left">
                                            <div className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">Coverage Status</div>
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-4xl font-black text-white italic leading-none">{country.coverage}</span>
                                                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Reserved</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-slate-700 group-hover:text-rose-500 transition-all duration-500 border border-white/5">
                                                <Globe size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-rose-600 rounded-full shadow-[0_0_10px_#e11d48]" style={{ width: country.coverage }}></div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedCountry(country)}
                                        className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-500 flex items-center justify-center gap-3 group"
                                    >
                                        View Territory Map <Maximize2 size={16} className="group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Modal for Detailed Map */}
                <AnimatePresence>
                    {selectedCountry && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl"
                            onClick={() => setSelectedCountry(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="bg-[#0a0f1d] max-w-5xl w-full rounded-[64px] overflow-hidden border border-white/10 relative shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-12 border-b border-white/5 flex justify-between items-center">
                                    <div>
                                        <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">{selectedCountry.name}</h2>
                                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2">Interactive Territory breakdown</p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedCountry(null)}
                                        className="w-16 h-16 rounded-[2rem] bg-white/5 flex items-center justify-center hover:bg-rose-500/20 text-slate-400 hover:text-rose-500 transition-all group"
                                    >
                                        <X size={24} className="group-hover:rotate-90 transition-transform" />
                                    </button>
                                </div>

                                <div className="aspect-video bg-black relative overflow-hidden flex items-center justify-center">
                                    {/* Detailed Mock Map */}
                                    <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                                    <div className="relative w-full h-full p-20">
                                        {/* Sporadic Reserved Areas */}
                                        {[...Array(15)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="absolute bg-rose-600/10 border border-rose-600/20 rounded-2xl flex items-center justify-center"
                                                style={{
                                                    top: `${Math.random() * 70 + 10}%`,
                                                    left: `${Math.random() * 70 + 10}%`,
                                                    width: '120px',
                                                    height: '80px',
                                                    transform: `rotate(${Math.random() * 20 - 10}deg)`
                                                }}
                                            >
                                                <span className="text-[9px] font-black text-rose-600 uppercase tracking-tighter opacity-50">RESERVED</span>
                                            </div>
                                        ))}
                                        {/* Grid background */}
                                        <div className="grid grid-cols-12 grid-rows-8 w-full h-full border border-white/5 opacity-30">
                                            {[...Array(96)].map((_, i) => (
                                                <div key={i} className="border border-white/5 hover:bg-rose-600/5 cursor-crosshair transition-colors"></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none group">
                                        <MapPin className="w-20 h-20 text-rose-600/20 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                                        <p className="text-slate-600 font-black uppercase tracking-[0.5em] text-xs">GIS Intelligence Engine Loading...</p>
                                    </div>
                                </div>

                                <div className="p-12 bg-black/40 flex flex-col md:flex-row gap-8 items-center justify-between">
                                    <div className="flex gap-6">
                                        <div className="bg-white/5 px-8 py-4 rounded-2xl border border-rose-600/20 flex items-center gap-4">
                                            <span className="text-2xl font-black text-rose-600">24</span>
                                            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none">Sold</span>
                                        </div>
                                        <div className="bg-white/5 px-8 py-4 rounded-2xl border border-white/5 flex items-center gap-4">
                                            <span className="text-2xl font-black text-white">96</span>
                                            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest leading-none">Pending</span>
                                        </div>
                                    </div>
                                    <button className="w-full md:w-auto px-12 py-5 bg-red-600 hover:bg-red-500 rounded-2xl font-black text-xs uppercase tracking-[0.3em] text-white shadow-2xl shadow-red-900/40 transition-all hover:scale-105 active:scale-95">
                                        Request Full Prospectus
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};

export default TerritoriesPage;
