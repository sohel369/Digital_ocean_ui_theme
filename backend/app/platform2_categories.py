"""
platform2_categories.py — Second Advertiser Platform Category Configuration.

This module defines the category structure for the broader B2C/B2B advertising platform.
It operates independently from the existing Automotive B2B categories in industry_config.py.

Architecture:
    - 24 categories organised into 3 tiers (High Value, Medium Value, Entry Level)
    - 1 reserved slot for easy future addition (total = 25 for 5×5 grid)
    - Each category has a multiplier used in the pricing formula:
        final_price = base_price × category_multiplier × ad_format_multiplier × coverage_multiplier

Adding a new category:
    1. Add it to the appropriate TIER dict below
    2. The frontend grid in platform2Categories.js must also be updated
    3. The system supports up to 25 categories for the 5×5 grid layout
"""

from typing import Dict, Optional, List

# ─── Base price for all Platform 2 categories ───
PLATFORM2_BASE_PRICE: float = 100.0


# ─── TIER 1 — High Value ───
TIER1_HIGH_VALUE: Dict[str, float] = {
    "Real Estate & Property Agents": 2.5,
    "Legal Services, Lawyers & Mediation": 2.5,
    "Financial and Insurance Services": 2.3,
    "Health, Wellness & Medical": 2.3,
    "Automotive Services": 2.2,
    "IT & Tech Support Services": 2.0,
    "Professional Training & Certification": 2.0,
    "Department Stores and Electronics": 2.0,
    "Mobile Phone and Internet Services": 2.0,
}

# ─── TIER 2 — Medium Value ───
TIER2_MEDIUM_VALUE: Dict[str, float] = {
    "Education & Tutoring": 1.8,
    "Event & Wedding Services": 1.8,
    "Beauty and Cosmetic Surgery": 1.7,
    "Fitness & Personal Training": 1.6,
    "Home & Garden": 1.6,
    "Lifestyle, Boutique, Apparel & Accessories": 1.5,
    "Travel & Tourism": 1.5,
    "Storage, Logistics and Removalists": 1.5,
}

# ─── TIER 3 — Entry Level ───
TIER3_ENTRY_LEVEL: Dict[str, float] = {
    "Restaurants, Food & Beverage": 1.3,
    "Trades & Home Services": 1.3,
    "Pets & Animals": 1.2,
    "Childcare & Aged Care Providers": 1.2,
    "Radio and TV Stations": 1.2,
    "Baby Clothes, Accessories & Toys": 1.1,
    "Accounting & Tax Services": 1.1,
}

# ─── Combined category multiplier registry ───
PLATFORM2_CATEGORY_MULTIPLIERS: Dict[str, float] = {
    **TIER1_HIGH_VALUE,
    **TIER2_MEDIUM_VALUE,
    **TIER3_ENTRY_LEVEL,
}

# ─── Tier metadata (for frontend display) ───
PLATFORM2_TIERS = {
    "tier1": {
        "name": "Tier 1 — High Value",
        "description": "Premium categories with highest advertiser lifetime value",
        "categories": list(TIER1_HIGH_VALUE.keys()),
    },
    "tier2": {
        "name": "Tier 2 — Medium Value",
        "description": "Mid-range categories with strong demand",
        "categories": list(TIER2_MEDIUM_VALUE.keys()),
    },
    "tier3": {
        "name": "Tier 3 — Entry Level",
        "description": "Accessible categories with competitive pricing",
        "categories": list(TIER3_ENTRY_LEVEL.keys()),
    },
}

# ─── Grid layout: ordered list for 5×5 display ───
# This defines the exact order categories appear in the frontend grid.
# Position 25 is reserved for future expansion.
PLATFORM2_GRID_ORDER: List[str] = [
    # Row 1
    "Real Estate & Property Agents",
    "Legal Services, Lawyers & Mediation",
    "Financial and Insurance Services",
    "Health, Wellness & Medical",
    "Automotive Services",
    # Row 2
    "IT & Tech Support Services",
    "Professional Training & Certification",
    "Department Stores and Electronics",
    "Mobile Phone and Internet Services",
    "Education & Tutoring",
    # Row 3
    "Event & Wedding Services",
    "Beauty and Cosmetic Surgery",
    "Fitness & Personal Training",
    "Home & Garden",
    "Lifestyle, Boutique, Apparel & Accessories",
    # Row 4
    "Travel & Tourism",
    "Storage, Logistics and Removalists",
    "Restaurants, Food & Beverage",
    "Trades & Home Services",
    "Pets & Animals",
    # Row 5
    "Childcare & Aged Care Providers",
    "Radio and TV Stations",
    "Baby Clothes, Accessories & Toys",
    "Accounting & Tax Services",
    # Slot 25: reserved — add your new category here
]


def get_platform2_category_multiplier(category_name: str, default: float = 1.0) -> float:
    """
    Return the multiplier for a Platform 2 category.
    Falls back to `default` if the category is not found.
    """
    return PLATFORM2_CATEGORY_MULTIPLIERS.get(category_name, default)


def get_platform2_category_price(category_name: str) -> float:
    """
    Return the category-level price: base_price × category_multiplier.
    """
    multiplier = get_platform2_category_multiplier(category_name)
    return PLATFORM2_BASE_PRICE * multiplier


def get_platform2_all_categories() -> List[dict]:
    """
    Return all categories with their tier and multiplier, ordered for the 5×5 grid.
    """
    tier_lookup = {}
    for tier_key, tier_data in PLATFORM2_TIERS.items():
        for cat in tier_data["categories"]:
            tier_lookup[cat] = {
                "tier_key": tier_key,
                "tier_name": tier_data["name"],
            }

    result = []
    for idx, cat_name in enumerate(PLATFORM2_GRID_ORDER):
        tier_info = tier_lookup.get(cat_name, {"tier_key": "tier3", "tier_name": "Tier 3 — Entry Level"})
        result.append({
            "name": cat_name,
            "multiplier": PLATFORM2_CATEGORY_MULTIPLIERS.get(cat_name, 1.0),
            "tier": tier_info["tier_key"],
            "tier_name": tier_info["tier_name"],
            "grid_position": idx + 1,
            "base_price": PLATFORM2_BASE_PRICE,
            "category_price": PLATFORM2_BASE_PRICE * PLATFORM2_CATEGORY_MULTIPLIERS.get(cat_name, 1.0),
        })

    return result
