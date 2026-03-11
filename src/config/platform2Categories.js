/**
 * Platform 2 Categories Configuration
 * Defines the categories, tiers, and grid positions for the 5x5 layout.
 * Updated to use FontAwesome icons for a more professional look.
 */

export const PLATFORM2_CATEGORIES = [
    // Row 1: High Value (Tier 1)
    {
        id: "real-estate",
        name: "Real Estate & Property Agents",
        multiplier: 2.5,
        tier: "tier1",
        iconClass: "fa-solid fa-house-chimney",
        gridPos: 1
    },
    {
        id: "legal-services",
        name: "Legal Services, Lawyers & Mediation",
        multiplier: 2.5,
        tier: "tier1",
        iconClass: "fa-solid fa-scale-balanced",
        gridPos: 2
    },
    {
        id: "financial-services",
        name: "Financial and Insurance Services",
        multiplier: 2.3,
        tier: "tier1",
        iconClass: "fa-solid fa-building-columns",
        gridPos: 3
    },
    {
        id: "health-medical",
        name: "Health, Wellness & Medical",
        multiplier: 2.3,
        tier: "tier1",
        iconClass: "fa-solid fa-house-medical",
        gridPos: 4
    },
    {
        id: "automotive-services",
        name: "Automotive Services",
        multiplier: 2.2,
        tier: "tier1",
        iconClass: "fa-solid fa-screwdriver-wrench",
        gridPos: 5
    },
    // Row 2: High Value & Top Medium Value
    {
        id: "it-tech",
        name: "IT & Tech Support Services",
        multiplier: 2.0,
        tier: "tier1",
        iconClass: "fa-solid fa-laptop-code",
        gridPos: 6
    },
    {
        id: "professional-training",
        name: "Professional Training & Certification",
        multiplier: 2.0,
        tier: "tier1",
        iconClass: "fa-solid fa-user-graduate",
        gridPos: 7
    },
    {
        id: "electronics",
        name: "Department Stores and Electronics",
        multiplier: 2.0,
        tier: "tier1",
        iconClass: "fa-solid fa-tv",
        gridPos: 8
    },
    {
        id: "mobile-internet",
        name: "Mobile Phone and Internet Services",
        multiplier: 2.0,
        tier: "tier1",
        iconClass: "fa-solid fa-mobile-screen-button",
        gridPos: 9
    },
    {
        id: "education-tutoring",
        name: "Education & Tutoring",
        multiplier: 1.8,
        tier: "tier2",
        iconClass: "fa-solid fa-book-open-reader",
        gridPos: 10
    },
    // Row 3: Medium Value
    {
        id: "event-wedding",
        name: "Event & Wedding Services",
        multiplier: 1.8,
        tier: "tier2",
        iconClass: "fa-solid fa-champagne-glasses",
        gridPos: 11
    },
    {
        id: "beauty-surgery",
        name: "Beauty and Cosmetic Surgery",
        multiplier: 1.7,
        tier: "tier2",
        iconClass: "fa-solid fa-wand-sparkles",
        gridPos: 12
    },
    {
        id: "fitness-training",
        name: "Fitness & Personal Training",
        multiplier: 1.6,
        tier: "tier2",
        iconClass: "fa-solid fa-dumbbell",
        gridPos: 13
    },
    {
        id: "home-garden",
        name: "Home & Garden",
        multiplier: 1.6,
        tier: "tier2",
        iconClass: "fa-solid fa-leaf",
        gridPos: 14
    },
    {
        id: "lifestyle-apparel",
        name: "Lifestyle, Boutique, Apparel & Accessories",
        multiplier: 1.5,
        tier: "tier2",
        iconClass: "fa-solid fa-shirt",
        gridPos: 15
    },
    // Row 4: Medium & Entry Level
    {
        id: "travel-tourism",
        name: "Travel & Tourism",
        multiplier: 1.5,
        tier: "tier2",
        iconClass: "fa-solid fa-plane-departure",
        gridPos: 16
    },
    {
        id: "storage-logistics",
        name: "Storage, Logistics and Removalists",
        multiplier: 1.5,
        tier: "tier2",
        iconClass: "fa-solid fa-truck-ramp-box",
        gridPos: 17
    },
    {
        id: "restaurants-fnb",
        name: "Restaurants, Food & Beverage",
        multiplier: 1.3,
        tier: "tier3",
        iconClass: "fa-solid fa-utensils",
        gridPos: 18
    },
    {
        id: "trades-services",
        name: "Trades & Home Services",
        multiplier: 1.3,
        tier: "tier3",
        iconClass: "fa-solid fa-hammer",
        gridPos: 19
    },
    {
        id: "pets-animals",
        name: "Pets & Animals",
        multiplier: 1.2,
        tier: "tier3",
        iconClass: "fa-solid fa-paw",
        gridPos: 20
    },
    // Row 5: Entry Level
    {
        id: "childcare-agedcare",
        name: "Childcare & Aged Care Providers",
        multiplier: 1.2,
        tier: "tier3",
        iconClass: "fa-solid fa-children",
        gridPos: 21
    },
    {
        id: "radio-tv",
        name: "Radio and TV Stations",
        multiplier: 1.2,
        tier: "tier3",
        iconClass: "fa-solid fa-tower-broadcast",
        gridPos: 22
    },
    {
        id: "baby-accessories",
        name: "Baby Clothes, Accessories & Toys",
        multiplier: 1.1,
        tier: "tier3",
        iconClass: "fa-solid fa-baby",
        gridPos: 23
    },
    {
        id: "accounting-tax",
        name: "Accounting & Tax Services",
        multiplier: 1.1,
        tier: "tier3",
        iconClass: "fa-solid fa-chart-pie",
        gridPos: 24
    },
    {
        id: "expansion-slot",
        name: "Expansion Slot",
        multiplier: 1.0,
        tier: "tier3",
        iconClass: "fa-solid fa-plus",
        gridPos: 25,
        isPlaceholder: true
    }
];

export const PLATFORM2_TIERS = {
    tier1: {
        name: "High Value",
        multiplier: "2.0x - 2.5x",
        color: "from-amber-400 to-orange-500",
        shadow: "shadow-orange-500/20"
    },
    tier2: {
        name: "Medium Value",
        multiplier: "1.4x - 1.8x",
        color: "from-blue-400 to-indigo-500",
        shadow: "shadow-indigo-500/20"
    },
    tier3: {
        name: "Entry Level",
        multiplier: "1.0x - 1.3x",
        color: "from-emerald-400 to-teal-500",
        shadow: "shadow-teal-500/20"
    }
};
