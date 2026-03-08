/**
 * Industry Landing Page Configuration
 * Centralised content config for each public industry landing page.
 * Add a new entry here to launch a new industry landing page.
 *
 * Formula reminder:
 *   final_price = base_rate × industry_multiplier × coverage_multiplier
 */

export const INDUSTRY_LANDING_PAGES = {
    "vehicle-wrapping": {
        // SEO
        title: "Vehicle Wrapping Advertising | Rule 7 Media",
        metaDescription:
            "Reach drivers, fleet managers, and vehicle-wrap buyers in your target area. Rule 7 Media connects vehicle wrapping businesses with high-intent local audiences through precision geo-targeted advertising.",
        ogTitle: "Vehicle Wrapping Advertisers — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for vehicle wrapping studios. Target by radius, state, or country with built-in geo-targeting.",
        // Page Content
        industry: "Vehicle Wrapping",
        industryKey: "Vehicle Wrapping",
        heroHeading: "Grow Your Vehicle Wrapping Business",
        heroSubheading:
            "Reach local fleet operators, car enthusiasts, and commercial buyers who are actively searching for vehicle wrap services in your coverage zone.",
        heroTag: "Vehicle Wrapping Specialists",
        ctaText: "Start Your Campaign",
        // Feature points
        features: [
            {
                icon: "🚗",
                title: "Hyper-Local Geo Targeting",
                description:
                    "Target within a 30-mile radius of your studio or expand state-wide for fleet contracts.",
            },
            {
                icon: "💰",
                title: "Fixed Monthly Pricing",
                description:
                    "No per-click surprises. Pay a flat monthly rate and own your coverage zone.",
            },
            {
                icon: "📊",
                title: "Real-Time Analytics",
                description:
                    "Track impressions and campaign reach from your dashboard at any time.",
            },
            {
                icon: "🛡️",
                title: "Industry Multiplier: 1.15×",
                description:
                    "Vehicle wrapping campaigns are priced at a competitive 1.15× industry multiplier.",
            },
        ],
        // Trust Bullets
        trustPoints: [
            "Stripe-secured billing — cancel anytime",
            "Monthly invoice with full itemisation",
            "Country-based tax handling built in",
            "Campaigns live within 24 hours of approval",
        ],
        // FAQ entries
        faqs: [
            {
                q: "Can I target a specific city or suburb?",
                a: "Yes — select a 30-mile radius around any postcode for hyper-local reach.",
            },
            {
                q: "How is pricing calculated for vehicle wrapping?",
                a: "Base rate × 1.15 (vehicle wrapping multiplier) × coverage multiplier. Use the Pricing page to get an instant estimate.",
            },
            {
                q: "Can I run a state-wide campaign for fleet contracts?",
                a: "Absolutely. State and country-wide coverage options are available with volume discounts.",
            },
        ],
        accentColor: "#3b82f6",
        gradient: "from-blue-900/40 to-slate-950",
    },

    "automotive-services": {
        title: "Automotive Services Advertising | Rule 7 Media",
        metaDescription:
            "Advertise your automotive service business to local car owners. Rule 7 Media delivers fixed-price geo-targeted advertising for workshops, tyre shops, and service centres.",
        ogTitle: "Automotive Services Advertisers — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for automotive service businesses. Radius, state, or country coverage with no hidden costs.",
        industry: "Automotive Services",
        industryKey: "Automotive Services",
        heroHeading: "Put Your Auto Service Business on the Map",
        heroSubheading:
            "Connect with local drivers needing servicing, repairs, tyres, and mechanical work — every month, with predictable pricing.",
        heroTag: "Automotive Service Providers",
        ctaText: "Launch a Campaign",
        features: [
            {
                icon: "🔧",
                title: "Target Ready-to-Book Drivers",
                description:
                    "Reach car owners in your service area who are actively looking for automotive help.",
            },
            {
                icon: "📍",
                title: "Workshop-Level Radius Targeting",
                description:
                    "Pin campaigns to a 30-mile radius around your workshop for maximum local relevance.",
            },
            {
                icon: "🧾",
                title: "Monthly Invoice & Billing",
                description:
                    "Stripe-powered billing with a clear monthly invoice so you always know what you're paying.",
            },
            {
                icon: "🛡️",
                title: "Industry Multiplier: 1.2×",
                description:
                    "Automotive service campaigns carry a 1.2× multiplier, reflecting high local demand.",
            },
        ],
        trustPoints: [
            "No contracts — pay month-to-month",
            "Geo-blocking prevents overseas ad spend",
            "Tax-compliant invoicing for all supported countries",
            "Admin-reviewed campaigns for quality assurance",
        ],
        faqs: [
            {
                q: "I run several workshops — can I create separate campaigns per location?",
                a: "Yes. Each campaign can target a different radius or state, giving each location its own coverage zone.",
            },
            {
                q: "What is the industry multiplier for automotive services?",
                a: "1.2× — meaning your monthly price = base rate × 1.2 × coverage multiplier.",
            },
            {
                q: "Do you support international automotive businesses?",
                a: "Yes — we support 15+ countries with country-specific tax rates and currency handling.",
            },
        ],
        accentColor: "#f59e0b",
        gradient: "from-amber-900/40 to-slate-950",
    },

    "logistics-software": {
        title: "Logistics Software Advertising | Rule 7 Media",
        metaDescription:
            "Reach fleet operators, logistics managers, and transport companies. Rule 7 Media delivers geo-targeted advertising for logistics and scheduling software providers.",
        ogTitle: "Logistics Software Advertisers — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for logistics software companies. Target fleet managers and transport operators by location.",
        industry: "Logistics Software",
        industryKey: "Logistics Software",
        heroHeading: "Get Your Logistics Software in Front of Fleet Decision-Makers",
        heroSubheading:
            "Connect with transport operators, fleet managers, and supply-chain teams who need your scheduling and logistics tools right now.",
        heroTag: "Logistics & Scheduling Software",
        ctaText: "Start Advertising",
        features: [
            {
                icon: "🚛",
                title: "B2B Audience Targeting",
                description:
                    "Reach fleet operators and logistics decision-makers in key industrial and commercial zones.",
            },
            {
                icon: "🌍",
                title: "National & International Coverage",
                description:
                    "Scale from radius to full-country coverage as your software business grows.",
            },
            {
                icon: "📈",
                title: "Analytics Dashboard",
                description:
                    "Live impressions, clicks, and campaign performance — accessible from your dashboard 24/7.",
            },
            {
                icon: "🛡️",
                title: "Industry Multiplier: 1.4×",
                description:
                    "Logistics software commands a 1.4× industry multiplier, reflecting B2B campaign value.",
            },
        ],
        trustPoints: [
            "6-month commitment discount: 25% off",
            "12-month commitment discount: 50% off",
            "Stripe-powered recurring billing",
            "Detailed monthly invoices with tax breakdown",
        ],
        faqs: [
            {
                q: "Can I target specific industrial regions or transport hubs?",
                a: "Yes — use the 30-mile radius option to target specific logistics corridors or industrial estates.",
            },
            {
                q: "What discount do I get for a longer commitment?",
                a: "6 months = 25% off. 12 months = 50% off the total campaign cost.",
            },
            {
                q: "Does the platform support SaaS and per-seat pricing models?",
                a: "Our platform handles campaign billing. The pricing structure of your software product remains fully your choice.",
            },
        ],
        accentColor: "#10b981",
        gradient: "from-emerald-900/40 to-slate-950",
    },

    "gps-navigation": {
        title: "GPS Navigation Tools Advertising | Rule 7 Media",
        metaDescription:
            "Advertise GPS navigation and route optimisation tools to drivers, fleets, and logistics companies. Rule 7 Media provides fixed-price geo-targeted campaigns.",
        ogTitle: "GPS Navigation Tools Advertisers — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for GPS and navigation product companies. Reach drivers and fleet managers by geography.",
        industry: "GPS Navigation Tools",
        industryKey: "GPS Navigation Tools",
        heroHeading: "Put Your GPS Navigation Tools on Every Route",
        heroSubheading:
            "Reach drivers, fleet managers, and logistics teams who rely on navigation and route optimisation in your target coverage zone.",
        heroTag: "GPS & Navigation Providers",
        ctaText: "Get Started",
        features: [
            {
                icon: "🗺️",
                title: "Precision Location Targeting",
                description:
                    "Deliver your GPS product to audiences in specific geographic corridors and transport regions.",
            },
            {
                icon: "🚀",
                title: "Campaigns Live Within 24 Hours",
                description:
                    "Admin-reviewed and approved — your campaign goes live fast.",
            },
            {
                icon: "💳",
                title: "Stripe-Powered Billing",
                description:
                    "Secure, automatic billing with itemised monthly invoices for easy accounting.",
            },
            {
                icon: "🛡️",
                title: "Industry Multiplier: 1.35×",
                description:
                    "GPS navigation tools are priced at a 1.35× multiplier for targeted driver audiences.",
            },
        ],
        trustPoints: [
            "Works across 15+ supported countries",
            "Country-based tax rates applied automatically",
            "No minimum contract — cancel anytime",
            "Open Graph and SEO-compliant campaign pages",
        ],
        faqs: [
            {
                q: "Is this platform suitable for both hardware and software GPS products?",
                a: "Yes — whether you sell physical GPS devices or SaaS navigation tools, you can run targeted campaigns.",
            },
            {
                q: "How does geo-targeting work for navigation products?",
                a: "Target by 30-mile radius, state/province, or country to match your distribution footprint.",
            },
            {
                q: "What is the pricing multiplier for GPS navigation tools?",
                a: "1.35× industry multiplier applies, so final price = base rate × 1.35 × coverage multiplier.",
            },
        ],
        accentColor: "#8b5cf6",
        gradient: "from-violet-900/40 to-slate-950",
    },

    "finance-services": {
        title: "Finance Services Advertising | Rule 7 Media",
        metaDescription:
            "Reach high-intent financial consumers with geo-targeted campaigns. Rule 7 Media delivers fixed-price advertising for finance brokers, lenders, and fintech companies.",
        ogTitle: "Finance Services Advertisers — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for finance and financial services companies. Target consumers by geography with full compliance support.",
        industry: "Finance Services",
        industryKey: "Finance Services",
        heroHeading: "Reach High-Intent Financial Consumers",
        heroSubheading:
            "Whether you offer lending, insurance, investment products, or fintech tools — connect with in-market consumers in your coverage zone with a flat monthly investment.",
        heroTag: "Financial Services & Fintech",
        ctaText: "Launch a Finance Campaign",
        features: [
            {
                icon: "🏦",
                title: "High-LTV Consumer Targeting",
                description:
                    "Reach consumers actively researching finance products — lending, insurance, and investment.",
            },
            {
                icon: "🌏",
                title: "Multi-Country Support",
                description:
                    "Operate across 15 countries with built-in currency conversion and tax-compliant invoicing.",
            },
            {
                icon: "🔒",
                title: "Compliance-Ready Billing",
                description:
                    "Stripe-secured payments with full itemised invoices — ready for your accounting team.",
            },
            {
                icon: "🛡️",
                title: "Industry Multiplier: 2.2×",
                description:
                    "Finance campaigns carry the highest multiplier (2.2×) reflecting the premium value of financial leads.",
            },
        ],
        trustPoints: [
            "Full tax calculation per country",
            "Monthly invoice with GST/VAT line items",
            "Stripe SCA-compliant payment processing",
            "Admin campaign review for compliance assurance",
        ],
        faqs: [
            {
                q: "Why does finance have the highest industry multiplier?",
                a: "Finance leads have a significantly higher lifetime value than most verticals. The 2.2× multiplier reflects accordingly.",
            },
            {
                q: "Does the platform support regulated financial services advertising?",
                a: "Our platform focuses on delivery and geo-targeting. You remain responsible for ensuring your creatives meet your local regulatory requirements (e.g., ASIC, FCA, SEC).",
            },
            {
                q: "Can I target by wealth demographic or just geography?",
                a: "We use geographic coverage (radius, state, country). Demographic overlays are not currently available, but postcode targeting provides strong socio-economic correlation.",
            },
        ],
        accentColor: "#ec4899",
        gradient: "from-pink-900/40 to-slate-950",
    },
};

/**
 * Helper: resolve landing page config by URL slug.
 */
export const getIndustryConfig = (slug) => INDUSTRY_LANDING_PAGES[slug] || null;

/**
 * All public industry page slugs — used for routing.
 */
export const INDUSTRY_SLUGS = Object.keys(INDUSTRY_LANDING_PAGES);
