import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#050a14] border-t border-white/5">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center font-black text-white text-sm shadow-lg shadow-rose-900/30">R7</div>
                            <span className="text-xl font-black uppercase tracking-tighter text-white italic">RULE 7 MEDIA</span>
                        </Link>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            6 Marina Promenade, Paradise Point,<br />
                            Queensland 4216, Australia
                        </p>
                    </div>

                    {/* Support Column */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Support</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link to="/login" className="hover:text-slate-300 transition-colors">Contact Us</Link></li>
                            <li><Link to="/login" className="hover:text-slate-300 transition-colors">Customer Support</Link></li>
                            <li><span className="text-slate-600">0123456789</span></li>
                        </ul>
                    </div>

                    {/* Policies Column */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Policies</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link to="/settings" className="hover:text-slate-300 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/advertiser" className="hover:text-slate-300 transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/settings" className="hover:text-slate-300 transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Connect</h4>
                        <div className="flex gap-3">
                            {[
                                { icon: <Facebook size={18} />, label: "Facebook" },
                                { icon: <Twitter size={18} />, label: "Twitter" },
                                { icon: <Instagram size={18} />, label: "Instagram" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex items-center justify-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-700 italic text-center">
                        © 2026 RULE 7 MEDIA GLOBAL FRANCHISING. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
