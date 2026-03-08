import React, { useEffect } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';
import { getIndustryConfig } from '../config/industryLandingConfig';
import { ArrowRight, CheckCircle, BarChart3, Map, CreditCard, HelpCircle } from 'lucide-react';

/**
 * IndustryLanding — Public industry-specific landing page.
 *
 * Renders a fully SEO-optimised page driven by industryLandingConfig.js.
 * Shares the same visual language as the main platform but is public-facing.
 *
 * Route examples:
 *   /vehicle-wrapping
 *   /automotive-services
 *   /logistics-software
 *   /gps-navigation
 *   /finance-services
 */
const IndustryLanding = () => {
    // Support both explicit routes and dynamic :slug param
    const { slug: paramSlug } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Extract slug from URL pathname, e.g. "/vehicle-wrapping" → "vehicle-wrapping"
    const slug = paramSlug || location.pathname.replace(/^\//, '').split('/')[0];
    const config = getIndustryConfig(slug);


    // --- SEO: Update document head on mount ---
    useEffect(() => {
        if (!config) return;

        document.title = config.title;

        const setMeta = (name, content, attr = 'name') => {
            let el = document.querySelector(`meta[${attr}="${name}"]`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.setAttribute('content', content);
        };

        setMeta('description', config.metaDescription);
        setMeta('og:title', config.ogTitle, 'property');
        setMeta('og:description', config.ogDescription, 'property');
        setMeta('og:type', 'website', 'property');
        setMeta('og:url', window.location.href, 'property');
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', config.ogTitle);
        setMeta('twitter:description', config.ogDescription);

        return () => {
            document.title = 'AdPlatform Premium';
        };
    }, [config]);

    // --- 404 guard ---
    if (!config) {
        return (
            <div className="min-h-screen bg-[#050810] flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-5xl font-black text-white mb-4">404</h1>
                <p className="text-slate-400 mb-8">Industry page not found.</p>
                <Link
                    to="/login"
                    className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-colors"
                >
                    Go to Platform
                </Link>
            </div>
        );
    }

    const accent = config.accentColor || '#3b82f6';

    return (
        <div className="min-h-screen bg-[#050810] text-white overflow-x-hidden">

            {/* ============================================================
                TOP NAV BAR
            ============================================================ */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050810]/90 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg"
                            style={{ background: `linear-gradient(135deg, ${accent}, #1e40af)` }}
                        >
                            R
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-base font-black tracking-tighter text-white">RULE 7</span>
                            <span className="text-[9px] font-black tracking-[0.25em] uppercase" style={{ color: accent }}>MEDIA</span>
                        </div>
                    </Link>

                    {/* Nav links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
                        <a href="#features" className="hover:text-white transition-colors">Features</a>
                        <a href="#pricing-info" className="hover:text-white transition-colors">Pricing</a>
                        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                    </div>

                    {/* CTA */}
                    <Link
                        to="/login"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
                        style={{ background: accent }}
                        id={`${slug}-nav-cta`}
                    >
                        Sign In <ArrowRight size={14} />
                    </Link>
                </div>
            </nav>

            {/* ============================================================
                HERO SECTION
            ============================================================ */}
            <section className={`pt-32 pb-24 px-6 bg-gradient-to-b ${config.gradient}`}>
                <div className="max-w-4xl mx-auto text-center">

                    {/* Industry badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border"
                        style={{ color: accent, borderColor: `${accent}40`, background: `${accent}15` }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                        {config.heroTag}
                    </div>

                    {/* H1 */}
                    <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter text-white mb-6">
                        {config.heroHeading}
                    </h1>

                    {/* H2 / subheading */}
                    <h2 className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
                        {config.heroSubheading}
                    </h2>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/login"
                            id={`${slug}-hero-cta-primary`}
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-sm shadow-2xl transition-all hover:scale-105 hover:shadow-xl"
                            style={{ background: accent, boxShadow: `0 10px 30px ${accent}40` }}
                        >
                            {config.ctaText} <ArrowRight size={16} />
                        </Link>
                        <a
                            href="#features"
                            id={`${slug}-hero-cta-secondary`}
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-300 text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Trust bar */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6">
                        {config.trustPoints.map((point, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                                <CheckCircle size={14} style={{ color: accent }} />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                FEATURES GRID
            ============================================================ */}
            <section id="features" className="py-20 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-14">
                        <h3 className="text-3xl font-black tracking-tight text-white mb-3">
                            Everything Your {config.industry} Campaign Needs
                        </h3>
                        <p className="text-slate-500 text-sm font-medium max-w-xl mx-auto">
                            One platform. Fixed monthly pricing. Full geo-targeting control.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {config.features.map((feat, i) => (
                            <div
                                key={i}
                                className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all hover:-translate-y-1 group"
                            >
                                <div className="text-3xl mb-4">{feat.icon}</div>
                                <h4 className="text-base font-black text-white mb-2">{feat.title}</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">{feat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                PLATFORM FEATURE ROW — Dashboard Navigation Preview
            ============================================================ */}
            <section id="pricing-info" className="py-20 px-6 bg-slate-950/50 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-14">
                        <h3 className="text-3xl font-black tracking-tight text-white mb-3">
                            Your Full-Featured Advertiser Dashboard
                        </h3>
                        <p className="text-slate-500 text-sm font-medium max-w-xl mx-auto">
                            Everything you need to launch, manage, and track your {config.industry} campaigns.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { icon: <BarChart3 size={22} />, label: 'Dashboard', desc: 'Live campaign KPIs' },
                            { icon: <span className="text-xl">➕</span>, label: 'New Campaign', desc: 'Build & submit' },
                            { icon: <Map size={22} />, label: 'Geo Targeting', desc: 'Radius, state, country' },
                            { icon: <CreditCard size={22} />, label: 'Pricing', desc: 'Instant estimates' },
                            { icon: <BarChart3 size={22} />, label: 'Analytics', desc: 'Impressions & CTR' },
                            { icon: <HelpCircle size={22} />, label: 'Insights & FAQ', desc: 'Platform help' },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-slate-900/80 border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-white/10 transition-all"
                            >
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400" style={{ background: `${accent}20` }}>
                                    <span style={{ color: accent }}>{item.icon}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-black text-white">{item.label}</p>
                                    <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                PRICING FORMULA EXPLAINER
            ============================================================ */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-black tracking-tight text-white mb-3">Transparent Pricing, Always</h3>
                        <p className="text-slate-500 text-sm">No hidden costs. No CPM surprises. Just a flat monthly investment.</p>
                    </div>

                    {/* Formula card */}
                    <div className="bg-slate-900/80 border border-white/5 rounded-3xl p-8 font-mono text-center">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Pricing Formula</p>
                        <div className="flex flex-wrap items-center justify-center gap-3 text-base md:text-lg font-bold">
                            <span className="text-white bg-white/5 px-3 py-1.5 rounded-xl">Base Rate</span>
                            <span className="text-slate-600">×</span>
                            <span className="px-3 py-1.5 rounded-xl font-black" style={{ color: accent, background: `${accent}20` }}>
                                {config.industry} Multiplier
                            </span>
                            <span className="text-slate-600">×</span>
                            <span className="text-white bg-white/5 px-3 py-1.5 rounded-xl">Coverage Multiplier</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-6">
                            Coverage multipliers: 30-mile radius = 1.0× · State-wide = 2.5× · Country-wide = 5.0×
                        </p>
                        <p className="text-[11px] text-slate-600 mt-1">
                            Commitment discounts: 3 months = 10% · 6 months = 25% · 12 months = 50%
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================================
                FAQ SECTION
            ============================================================ */}
            <section id="faq" className="py-20 px-6 bg-slate-950/50 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-black tracking-tight text-white mb-3">
                            Frequently Asked Questions
                        </h3>
                        <p className="text-slate-500 text-sm">{config.industry} specific answers.</p>
                    </div>

                    <div className="space-y-4">
                        {config.faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="bg-slate-900/60 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all"
                            >
                                <h4 className="text-base font-black text-white mb-2">{faq.q}</h4>
                                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================================
                BOTTOM CTA BANNER
            ============================================================ */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-4xl font-black tracking-tight text-white mb-4">
                        Ready to Grow Your {config.industry} Business?
                    </h3>
                    <p className="text-slate-400 text-lg mb-10">
                        Join advertisers already using Rule 7 Media for precise, fixed-price geo-targeted campaigns.
                    </p>
                    <Link
                        to="/login"
                        id={`${slug}-bottom-cta`}
                        className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-white text-base shadow-2xl transition-all hover:scale-105"
                        style={{ background: accent, boxShadow: `0 10px 40px ${accent}50` }}
                    >
                        Create Your Account <ArrowRight size={18} />
                    </Link>
                    <p className="text-slate-600 text-xs mt-6">
                        No credit card required to explore. Stripe-secured when you're ready to launch.
                    </p>
                </div>
            </section>

            {/* ============================================================
                FOOTER
            ============================================================ */}
            <footer className="py-10 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2 font-black text-slate-500">
                        <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-black"
                            style={{ background: accent }}
                        >
                            R
                        </div>
                        Rule 7 Media
                    </div>
                    <nav className="flex gap-6 font-medium">
                        <Link to="/vehicle-wrapping" className="hover:text-slate-400 transition-colors">Vehicle Wrapping</Link>
                        <Link to="/automotive-services" className="hover:text-slate-400 transition-colors">Automotive</Link>
                        <Link to="/logistics-software" className="hover:text-slate-400 transition-colors">Logistics</Link>
                        <Link to="/gps-navigation" className="hover:text-slate-400 transition-colors">GPS Navigation</Link>
                        <Link to="/finance-services" className="hover:text-slate-400 transition-colors">Finance</Link>
                    </nav>
                    <p>© {new Date().getFullYear()} Rule 7 Media. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default IndustryLanding;
