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
        title: "Vinyl Vehicle Wrapping Services Advertising | Rule 7 Media",
        metaDescription:
            "Reach drivers, fleet managers, and vehicle-wrap buyers in your target area. Rule 7 Media connects vinyl vehicle wrapping businesses with high-intent local audiences.",
        ogTitle: "Vinyl Vehicle Wrapping Advertisers — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for vehicle wrapping studios. Target by radius, state, or country with built-in geo-targeting.",
        // Page Content
        industry: "Vinyl Vehicle Wrapping Services",
        industryKey: "Vinyl Vehicle Wrapping Services",
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
                    "Vinyl vehicle wrapping campaigns are priced at a competitive 1.15× industry multiplier.",
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
                q: "How is pricing calculated for vinyl wrapping?",
                a: "Base rate × 1.15 (vinyl wrapping multiplier) × coverage multiplier. Use the Pricing page to get an instant estimate.",
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
        title: "Vehicle Servicing and Maintenance Advertising | Rule 7 Media",
        metaDescription:
            "Advertise your vehicle servicing and maintenance business to local car owners. Rule 7 Media delivers fixed-price geo-targeted advertising for workshops and service centres.",
        ogTitle: "Vehicle Servicing and Maintenance — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for automotive service businesses. Radius, state, or country coverage with no hidden costs.",
        industry: "Vehicle servicing and maintenance",
        industryKey: "Vehicle servicing and maintenance",
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
                title: "Geo-Fenced Exposure",
                description:
                    "Own your local area. Your ads appear where your customers live and work.",
            },
            {
                icon: "💶",
                title: "Fixed Monthly Rates",
                description:
                    "Predictable marketing spend with no variable bidding or surprise fees.",
            },
            {
                icon: "🛡️",
                title: "Industry Multiplier: 1.2×",
                description:
                    "Auto servicing is priced at a 1.2× multiplier, providing excellent local reach ROI.",
            },
        ],
        trustPoints: [
            "Automatic monthly billing — cancel at any time",
            "Itemised invoices with country-specific tax compliance",
            "Secure transactions via Stripe",
            "Dashboard access to track audience metrics",
        ],
        faqs: [
            {
                q: "Does the platform support mobile service workshops?",
                a: "Yes — set your target radius to match your mobile service range to reach customers exactly where you operate.",
            },
            {
                q: "How soon does my ad go live?",
                a: "After submission, our admins review the creative. Most campaigns are live within 24 hours.",
            },
            {
                q: "Is there a long-term contract?",
                a: "No. All campaigns are month-to-month by default. You can commit to 6 or 12 months for significant discounts.",
            },
        ],
        accentColor: "#f59e0b",
        gradient: "from-amber-900/40 to-slate-950",
    },

    "logistics-software": {
        title: "Logistics and Scheduling Software Advertising | Rule 7 Media",
        metaDescription:
            "Reach fleet operators, logistics managers, and transport companies. Rule 7 Media delivers geo-targeted advertising for logistics and scheduling software providers.",
        ogTitle: "Logistics and Scheduling Software — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for logistics software companies. Target fleet managers and transport operators by location.",
        industry: "Logistics and scheduling software",
        industryKey: "Logistics and scheduling software",
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
        title: "GPS Navigation and Route Optimisation Advertising | Rule 7 Media",
        metaDescription:
            "Advertise GPS navigation and route optimisation tools to drivers, fleets, and logistics companies. Rule 7 Media provides fixed-price geo-targeted campaigns.",
        ogTitle: "GPS Navigation and Route Optimisation — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for GPS and navigation product companies. Reach drivers and fleet managers by geography.",
        industry: "GPS navigation and route optimisation tools",
        industryKey: "GPS navigation and route optimisation tools",
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
        title: "Automotive Finance Solutions Advertising | Rule 7 Media",
        metaDescription:
            "Reach high-intent automotive finance consumers with geo-targeted campaigns. Rule 7 Media delivers fixed-price advertising for finance brokers and lenders.",
        ogTitle: "Automotive Finance Solutions — Rule 7 Media",
        ogDescription:
            "Fixed monthly advertising for automotive finance companies. Target consumers by geography with full compliance support.",
        industry: "Automotive finance solutions",
        industryKey: "Automotive finance solutions",
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
                    "Reach consumers actively researching automotive finance products and lending.",
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
                title: "Industry Multiplier: 2.0×",
                description:
                    "Automotive finance campaigns carry a premium multiplier (2.0×) reflecting the high value of financial leads.",
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
                q: "Why does automotive finance have a high industry multiplier?",
                a: "Automotive finance leads have a significantly higher lifetime value than most verticals. The 2.0× multiplier reflects this accordingly.",
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
