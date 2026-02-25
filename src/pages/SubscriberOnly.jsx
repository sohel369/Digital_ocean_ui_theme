import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Lock,
    ShieldCheck,
    EyeOff,
    ShieldAlert,
    Star,
    ChevronRight,
    X,
    CheckCircle2,
    UserCheck,
} from 'lucide-react';

/* ─── page-specific styles only (ruby-shine & shine are in index.css) ─── */
const style = `
.glow-btn {
    transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.glow-btn:hover {
    box-shadow: 0 0 40px rgba(225, 29, 72, 0.35);
    transform: translateY(-2px);
}
.modal-backdrop {
    background: rgba(0,0,0,0.82);
    backdrop-filter: blur(6px);
}
@keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
@keyframes scaleIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
`;

const ValueCard = ({ Icon, title, desc }) => (
    <div
        className="flex flex-col gap-4 p-6 rounded-3xl text-left"
        style={{
            background: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.06)',
        }}
    >
        <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.05)' }}
        >
            <Icon size={22} className="text-rose-500" />
        </div>
        <div>
            <h3 className="font-bold text-lg mb-1 text-white">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TrustBadge = ({ Icon, label }) => (
    <div className="flex items-center gap-2 text-slate-400">
        <Icon size={18} />
        <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
    </div>
);

const SubscriberOnly = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    /* lock / unlock body scroll when modal opens */
    useEffect(() => {
        document.body.style.overflow = modalOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [modalOpen]);

    /* close modal on Esc */
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') setModalOpen(false); };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <>
            <style>{style}</style>

            {/* ── Page shell ── */}
            <div
                className="min-h-screen w-full flex flex-col"
                style={{
                    background: '#02040a',
                    backgroundImage:
                        'radial-gradient(at 0% 0%, rgba(225,29,72,0.13) 0, transparent 55%), radial-gradient(at 100% 100%, rgba(136,19,55,0.09) 0, transparent 55%)',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: '#e2e8f0',
                }}
            >
                {/* ── Main Content ── */}
                <main className="flex-1 pt-12 pb-20 px-6">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Lock Badge */}
                        <div
                            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8 animate-pulse"
                            style={{
                                background: 'rgba(244, 63, 94, 0.1)',
                                border: '1px solid rgba(244,63,94,0.2)',
                            }}
                        >
                            <Lock size={40} className="text-rose-500" />
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight text-white">
                            Unlock{' '}
                            <span className="ruby-shine italic">Premium</span>{' '}
                            Auction Intelligence
                        </h1>

                        {/* Restricted Access Card */}
                        <div
                            className="p-8 md:p-12 rounded-[40px] shadow-2xl mb-12 relative overflow-hidden group"
                            style={{
                                background: 'rgba(15,23,42,0.45)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(244,63,94,0.18)',
                            }}
                        >
                            {/* ghost shield icon */}
                            <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                                <ShieldCheck size={96} className="text-rose-500" />
                            </div>

                            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-8">
                                In order to protect the privacy and eliminate spamming of our
                                partners this facility is only available to{' '}
                                <span
                                    className="text-white font-bold"
                                    style={{ borderBottom: '2px solid rgba(244,63,94,0.45)' }}
                                >
                                    paid subscribers
                                </span>
                                .
                            </p>

                            <button
                                onClick={() => setModalOpen(true)}
                                className="inline-flex items-center gap-1 text-rose-400 font-bold hover:text-rose-300 transition-all text-lg group/btn"
                            >
                                LEARN MORE
                                <ChevronRight
                                    size={20}
                                    className="group-hover/btn:translate-x-1 transition-transform"
                                />
                            </button>
                        </div>

                        {/* Value Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <ValueCard
                                Icon={EyeOff}
                                title="Absolute Privacy"
                                desc="Ensuring auction details remain confidential and only visible to verified bidders."
                            />
                            <ValueCard
                                Icon={ShieldAlert}
                                title="Anti-Spam Filter"
                                desc="Removing data scrapers and unsolicited communications from your professional space."
                            />
                            <ValueCard
                                Icon={Star}
                                title="Exclusive Reach"
                                desc="Gain priority access to high-value opportunities not available on public boards."
                            />
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <button
                                onClick={() => navigate('/subscribe')}
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-xl text-white glow-btn shadow-2xl transition-all flex items-center justify-center gap-3"
                                style={{
                                    background: 'linear-gradient(135deg, #e11d48 0%, #881337 100%)',
                                }}
                            >
                                Unlock Exclusive Auctions
                            </button>
                            <button
                                onClick={() => navigate('/pricing')}
                                className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-xl text-slate-300 transition-all"
                                style={{
                                    background: 'rgba(15,23,42,0.45)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255,255,255,0.07)',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(30,41,59,0.8)')}
                                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(15,23,42,0.45)')}
                            >
                                View Pricing Plans
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div
                            className="mt-20 pt-10 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <TrustBadge Icon={CheckCircle2} label="ISO 27001 SECURE" />
                            <TrustBadge Icon={UserCheck} label="VERIFIED PARTNERS" />
                            <TrustBadge Icon={Lock} label="AES-256 ENCRYPTED" />
                        </div>
                    </div>
                </main>

                {/* ── Footer ── */}
                <footer
                    className="py-10"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.4)' }}
                >
                    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-xs font-bold text-slate-600 uppercase tracking-widest">
                            © 2026 RULE 7 MEDIA. SECURE ENVIRONMENT.
                        </p>
                        <div className="flex gap-6 text-xs font-black uppercase tracking-widest text-slate-500">
                            <a href="#" className="hover:text-rose-500 transition-colors">Security Policy</a>
                            <a href="#" className="hover:text-rose-500 transition-colors">Privacy Policy</a>
                        </div>
                    </div>
                </footer>
            </div>

            {/* ── Modal ── */}
            {modalOpen && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 modal-backdrop"
                    onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
                    style={{ animation: 'fadeIn 0.25s ease' }}
                >
                    <div
                        className="w-full max-w-3xl rounded-[32px] shadow-2xl relative flex flex-col"
                        style={{
                            background: '#0a0f1a',
                            border: '1px solid rgba(255,255,255,0.1)',
                            animation: 'scaleIn 0.25s ease',
                            maxHeight: 'calc(100vh - 2rem)',
                        }}
                    >
                        {/* ── Sticky Header — always visible, houses the ✕ ── */}
                        <div
                            className="flex items-center justify-between px-8 pt-8 pb-5 shrink-0"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                                    style={{ background: 'linear-gradient(135deg, #e11d48 0%, #881337 100%)' }}
                                >
                                    <ShieldCheck size={22} />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                                    Access Philosophy
                                </h2>
                            </div>

                            {/* ✕ Close button — always reachable */}
                            <button
                                onClick={() => setModalOpen(false)}
                                aria-label="Close modal"
                                className="ml-4 shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-white/10"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* ── Scrollable Body ── */}
                        <div className="overflow-y-auto px-8 py-6 space-y-5 text-slate-300 leading-relaxed text-sm md:text-base custom-scrollbar">
                            <p>
                                Restricting access to auction viewing for paid subscribers is a
                                crucial measure that serves several important purposes. Firstly,
                                it helps{' '}
                                <strong className="text-rose-400">
                                    safeguard the privacy of our partners
                                </strong>{' '}
                                by ensuring that their information and auction details are only
                                visible to a verified, committed audience. This reduces the risk
                                of unwanted attention, data scraping, or unsolicited
                                communications, which can often arise when sensitive business
                                information is freely accessible to the public.
                            </p>
                            <p>
                                Furthermore, limiting access to paid subscribers acts as an{' '}
                                <strong className="text-rose-400">
                                    effective deterrent against spamming
                                </strong>{' '}
                                and fraudulent activities. By implementing a paid registration
                                barrier, we ensure that only genuine, invested participants are
                                able to interact with auction listings, thereby maintaining the
                                integrity of the platform and fostering a trustworthy
                                environment for all stakeholders.
                            </p>
                            <p>
                                This approach also adds value for subscribers, as they gain
                                exclusive access to high-quality auction opportunities that are
                                not available elsewhere. It encourages a sense of community and
                                commitment among members, while allowing us to provide enhanced
                                support and resources tailored specifically to their needs.
                            </p>
                            <div
                                className="p-5 rounded-2xl italic text-slate-200"
                                style={{
                                    background: 'rgba(244,63,94,0.08)',
                                    border: '1px solid rgba(244,63,94,0.18)',
                                }}
                            >
                                In summary, restricting auction viewing to paid subscribers
                                protects partner privacy, minimises spam and abuse, and ensures
                                that our auctions are conducted within a secure and professional
                                environment.
                            </div>
                        </div>

                        {/* ── Sticky Footer CTAs — always visible ── */}
                        <div
                            className="flex flex-col sm:flex-row gap-3 px-8 py-6 shrink-0"
                            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                        >
                            <button
                                onClick={() => { setModalOpen(false); navigate('/subscribe'); }}
                                className="flex-1 px-8 py-4 rounded-xl font-bold text-white glow-btn transition-all"
                                style={{ background: 'linear-gradient(135deg, #e11d48 0%, #881337 100%)' }}
                            >
                                Subscribe Now
                            </button>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="flex-1 px-8 py-4 bg-slate-800 hover:bg-slate-700 rounded-xl font-bold text-slate-300 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* keyframes injected via top-level <style> tag */}
        </>
    );
};

export default SubscriberOnly;
